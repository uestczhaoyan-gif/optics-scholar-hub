import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { spawnSync } from 'node:child_process';

test('announcement images use exact bytes, deduplicate references and keep baselines on failures', () => {
  const directory = fs.mkdtempSync(
    path.join(os.tmpdir(), 'optics-image-test-'),
  );
  const base = 'https://example.org/';
  fs.mkdirSync(path.join(directory, 'data'));
  const write = (f, x) =>
    fs.writeFileSync(path.join(directory, f), JSON.stringify(x));
  const read = (f) =>
    JSON.parse(fs.readFileSync(path.join(directory, f), 'utf8'));
  for (const f of ['journals', 'conferences', 'events'])
    write('data/' + f + '.json', []);
  write('data/conference-series.json', [
    {
      id: 'image-series',
      name: 'Image series',
      website: base + 'image',
      sources: [
        base + 'image',
        base + 'flaky',
        base + 'oversize',
        base + 'challenge',
        base + 'type-change',
      ],
    },
  ]);
  fs.mkdirSync(path.join(directory, 'source-state'));
  write('source-state/state.json', {
    [base + 'oversize']: { hash: 'keep-size', fingerprint: 'image-bytes' },
    [base + 'challenge']: { hash: 'keep-challenge' },
    [base + 'type-change']: { hash: 'legacy-text' },
  });
  const mock = path.join(directory, 'mock.mjs');
  fs.writeFileSync(
    mock,
    `import fs from 'node:fs';
    const phase=JSON.parse(fs.readFileSync('phase.json'));
    const calls=[];
    globalThis.fetch=async url=>{
      calls.push(url);fs.writeFileSync('calls.json',JSON.stringify(calls));
      if(url.endsWith('challenge'))return new Response('<title>Just a moment</title>',{headers:{'content-type':'text/html'}});
      if(url.endsWith('flaky')&&phase===3)return new Response('',{status:404});
      const body=url.endsWith('oversize')?new Uint8Array(2_000_001):Uint8Array.of(phase===3&&url.endsWith('image')?254:255);
      return new Response(body,{headers:{'content-type':'image/png'}});
    };`,
  );
  const run = (phase) => {
    write('phase.json', phase);
    const r = spawnSync(
      process.execPath,
      [
        '--import',
        pathToFileURL(mock).href,
        fileURLToPath(new URL('../scripts/check-sources.mjs', import.meta.url)),
      ],
      {
        cwd: directory,
        encoding: 'utf8',
        env: { ...process.env, GITHUB_STEP_SUMMARY: '' },
        timeout: 15000,
      },
    );
    assert.equal(r.status, 0, r.stderr);
    return read('source-report/report.json');
  };
  let rows = run(1);
  const byUrl = (url) => rows.find((x) => x.url === base + url);
  assert.equal(rows.length, 5);
  assert.equal(
    read('calls.json').filter((x) => x === base + 'image').length,
    1,
  );
  assert.equal(byUrl('image').status, 'baseline');
  assert.equal(byUrl('image').fingerprint, 'image-bytes');
  assert.equal(byUrl('image').references.length, 2);
  assert.equal(byUrl('type-change').status, 'baseline');
  assert.equal(byUrl('oversize').status, 'fetch-error');
  assert.equal(byUrl('challenge').status, 'access-limited');
  const initial = read('source-state/state.json');
  rows = run(2);
  assert.equal(byUrl('image').status, 'unchanged');
  const beforeFailure = read('source-state/state.json');
  rows = run(3);
  assert.equal(byUrl('image').status, 'changed');
  assert.equal(byUrl('flaky').status, 'http-error');
  const final = read('source-state/state.json');
  assert.deepEqual(final[base + 'flaky'], beforeFailure[base + 'flaky']);
  assert.equal(final[base + 'oversize'].hash, 'keep-size');
  assert.equal(final[base + 'challenge'].hash, 'keep-challenge');
  assert.notEqual(final[base + 'image'].hash, initial[base + 'image'].hash);
  assert.equal(
    Buffer.from([254]).toString('utf8'),
    Buffer.from([255]).toString('utf8'),
  );
  assert(
    fs
      .readFileSync(path.join(directory, 'source-report/report.md'), 'utf8')
      .includes('not image recognition'),
  );
});

test('source checker maps shared sources, orders changes and preserves successful baselines on errors', () => {
  const directory = fs.mkdtempSync(
    path.join(os.tmpdir(), 'optics-source-test-'),
  );
  const base = 'https://example.org/';
  fs.mkdirSync(path.join(directory, 'data'));
  fs.mkdirSync(path.join(directory, 'source-state'));
  const catalogs = [
    'changed',
    'blocked',
    'missing',
    'timeout',
    'pdf',
    'new',
  ].map((id) => ({ id, name: id, website: base + id }));
  fs.writeFileSync(
    path.join(directory, 'data/conferences.json'),
    JSON.stringify(catalogs),
  );
  fs.writeFileSync(
    path.join(directory, 'data/journals.json'),
    JSON.stringify([{ id: 'shared', name: 'shared', guide: base + 'changed' }]),
  );
  fs.writeFileSync(
    path.join(directory, 'data/events.json'),
    JSON.stringify([{ id: 'forum', name: 'forum', notice: base + 'changed' }]),
  );
  fs.writeFileSync(
    path.join(directory, 'data/conference-series.json'),
    JSON.stringify([
      {
        id: 'stable-series',
        name: 'series',
        website: base + 'changed',
        sources: [base + 'new-series-notice'],
      },
    ]),
  );
  const previous = {
    [base + 'changed']: { hash: 'old' },
    [base + 'blocked']: { hash: 'keep' },
  };
  fs.writeFileSync(
    path.join(directory, 'source-state/state.json'),
    JSON.stringify(previous),
  );
  const mock = path.join(directory, 'mock.mjs');
  fs.writeFileSync(
    mock,
    `globalThis.fetch = async (url) => {
    if (url.endsWith('blocked')) return new Response('', { status: 403 });
    if (url.endsWith('missing')) return new Response('', { status: 404 });
    if (url.endsWith('timeout')) throw new DOMException('timeout', 'TimeoutError');
    if (url.endsWith('pdf')) return new Response('binary', { headers: { 'content-type': 'application/octet-stream' } });
    return new Response('<html><title>Conference</title>new notice</html>', { headers: { 'content-type': 'text/html' } });
  };`,
  );
  const run = () =>
    spawnSync(
      process.execPath,
      [
        '--import',
        pathToFileURL(mock).href,
        fileURLToPath(new URL('../scripts/check-sources.mjs', import.meta.url)),
      ],
      {
        cwd: directory,
        encoding: 'utf8',
        env: { ...process.env, GITHUB_STEP_SUMMARY: '' },
        timeout: 15000,
      },
    );
  const result = run();
  assert.equal(result.status, 0, result.stderr);
  const read = (name) =>
    JSON.parse(fs.readFileSync(path.join(directory, name), 'utf8'));
  let rows = read('source-report/report.json');
  assert.equal(rows.length, 7);
  assert.equal(rows[0].status, 'changed');
  assert.equal(rows[0].references.length, 4);
  assert(rows[0].references.some((ref) => ref.catalog === 'conferenceSeries'));
  assert.deepEqual(
    new Set(rows.map((r) => r.status)),
    new Set([
      'changed',
      'access-limited',
      'http-error',
      'timeout',
      'reachable-nontext',
      'baseline',
    ]),
  );
  assert.equal(read('source-state/state.json')[base + 'blocked'].hash, 'keep');
  assert.equal(run().status, 0);
  rows = read('source-report/report.json');
  assert.equal(
    rows.find((r) => r.url === base + 'changed').status,
    'unchanged',
  );
  // Temporary fixtures contain no user data; leave OS temp cleanup to the host.
});
