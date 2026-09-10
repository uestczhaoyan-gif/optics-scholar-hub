import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { spawnSync } from 'node:child_process';

test('source checker maps shared sources, orders changes and preserves successful baselines on errors', () => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'optics-source-test-'));
  const base = 'https://example.org/';
  fs.mkdirSync(path.join(directory, 'data'));
  fs.mkdirSync(path.join(directory, 'source-state'));
  const catalogs = ['changed', 'blocked', 'missing', 'timeout', 'pdf', 'new'].map(id => ({ id, name: id, website: base + id }));
  fs.writeFileSync(path.join(directory, 'data/conferences.json'), JSON.stringify(catalogs));
  fs.writeFileSync(path.join(directory, 'data/journals.json'), JSON.stringify([{ id: 'shared', name: 'shared', guide: base + 'changed' }]));
  const previous = { [base + 'changed']: { hash: 'old' }, [base + 'blocked']: { hash: 'keep' } };
  fs.writeFileSync(path.join(directory, 'source-state/state.json'), JSON.stringify(previous));
  const mock = path.join(directory, 'mock.mjs');
  fs.writeFileSync(mock, `globalThis.fetch = async (url) => {
    if (url.endsWith('blocked')) return new Response('', { status: 403 });
    if (url.endsWith('missing')) return new Response('', { status: 404 });
    if (url.endsWith('timeout')) throw new DOMException('timeout', 'TimeoutError');
    if (url.endsWith('pdf')) return new Response('pdf', { headers: { 'content-type': 'application/pdf' } });
    return new Response('<html><title>Conference</title>new notice</html>', { headers: { 'content-type': 'text/html' } });
  };`);
  const run = () => spawnSync(process.execPath, ['--import', pathToFileURL(mock).href, fileURLToPath(new URL('../scripts/check-sources.mjs', import.meta.url))], { cwd: directory, encoding: 'utf8', env: { ...process.env, GITHUB_STEP_SUMMARY: '' }, timeout: 15000 });
  const result = run();
  assert.equal(result.status, 0, result.stderr);
  const read = name => JSON.parse(fs.readFileSync(path.join(directory, name), 'utf8'));
  let rows = read('source-report/report.json');
  assert.equal(rows.length, 6);
  assert.equal(rows[0].status, 'changed');
  assert.equal(rows[0].references.length, 2);
  assert.deepEqual(new Set(rows.map(r => r.status)), new Set(['changed', 'access-limited', 'http-error', 'timeout', 'reachable-nontext', 'baseline']));
  assert.equal(read('source-state/state.json')[base + 'blocked'].hash, 'keep');
  assert.equal(run().status, 0);
  rows = read('source-report/report.json');
  assert.equal(rows.find(r => r.url === base + 'changed').status, 'unchanged');
  // Temporary fixtures contain no user data; leave OS temp cleanup to the host.
});
