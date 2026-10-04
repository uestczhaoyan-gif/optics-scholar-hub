import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

test('explicit PDFs compare bytes above 2 MB and preserve successful state on invalid or failed responses', () => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'optics-pdf-test-'));
  const base = 'https://example.org/';
  fs.mkdirSync(path.join(directory, 'data'));
  fs.mkdirSync(path.join(directory, 'source-state'));
  const write = (file, value) =>
    fs.writeFileSync(path.join(directory, file), JSON.stringify(value));
  const read = (file) =>
    JSON.parse(fs.readFileSync(path.join(directory, file), 'utf8'));
  for (const f of ['journals', 'conferences', 'events'])
    write('data/' + f + '.json', []);
  write('data/conference-series.json', [
    {
      id: 'pdf-series',
      website: base + 'paper',
      sources: ['paper', 'flaky', 'oversize', 'invalid', 'method'].map(
        (x) => base + x,
      ),
    },
  ]);
  write('source-state/state.json', {
    [base + 'oversize']: { hash: 'keep-size', fingerprint: 'pdf-bytes' },
  });
  const mock = path.join(directory, 'mock.mjs');
  fs.writeFileSync(
    mock,
    [
      "import fs from 'node:fs';",
      "const phase=JSON.parse(fs.readFileSync('phase.json'));const calls=[];",
      "globalThis.fetch=async url=>{calls.push(url);fs.writeFileSync('calls.json',JSON.stringify(calls));",
      "if(phase===3&&url.endsWith('flaky'))return new Response('',{status:403});",
      "if(phase===1&&url.endsWith('method'))return new Response('<p>notice</p>',{headers:{'content-type':'text/html'}});",
      "if(phase===3&&url.endsWith('invalid'))return new Response('<html>error wrapper</html>',{headers:{'content-type':'application/pdf'}});",
      "const body=Buffer.alloc(url.endsWith('oversize')?5_000_001:2_108_834,32);",
      "body.write('%PDF-1.7\\nSame human-readable announcement\\n');",
      "if(phase===3&&url.endsWith('paper'))body[body.length-1]=255;",
      "return new Response(body,{headers:{'content-type':'application/pdf; charset=binary'}});};",
    ].join('\n'),
  );
  const run = (phase) => {
    write('phase.json', phase);
    const result = spawnSync(
      process.execPath,
      [
        '--import',
        pathToFileURL(mock).href,
        fileURLToPath(new URL('../scripts/check-sources.mjs', import.meta.url)),
      ],
      {
        cwd: directory,
        encoding: 'utf8',
        timeout: 15000,
        env: { ...process.env, GITHUB_STEP_SUMMARY: '' },
      },
    );
    assert.equal(result.status, 0, result.stderr);
    return read('source-report/report.json');
  };
  let rows = run(1);
  const row = (name) => rows.find((x) => x.url === base + name);
  assert.equal(rows.length, 5);
  assert.equal(
    read('calls.json').filter((x) => x === base + 'paper').length,
    1,
  );
  assert.equal(row('paper').references.length, 2);
  assert.equal(row('paper').status, 'baseline');
  assert.equal(row('paper').fingerprint, 'pdf-bytes');
  assert.equal(row('oversize').status, 'fetch-error');
  const first = read('source-state/state.json');
  rows = run(2);
  assert.equal(row('paper').status, 'unchanged');
  assert.equal(row('method').status, 'baseline');
  assert.equal(row('method').fingerprint, 'pdf-bytes');
  const beforeFailures = read('source-state/state.json');
  rows = run(3);
  assert.equal(row('paper').status, 'changed');
  assert.equal(row('flaky').status, 'access-limited');
  assert.equal(row('invalid').status, 'fetch-error');
  assert.equal(row('oversize').status, 'fetch-error');
  const after = read('source-state/state.json');
  assert.notEqual(after[base + 'paper'].hash, first[base + 'paper'].hash);
  for (const name of ['flaky', 'invalid', 'oversize'])
    assert.deepEqual(after[base + name], beforeFailures[base + name]);
  assert.match(
    fs.readFileSync(path.join(directory, 'source-report/report.md'), 'utf8'),
    /pdf-bytes/,
  );
  // Fixtures contain no user data; the host manages OS temporary-file cleanup.
});
