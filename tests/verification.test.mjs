import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {
  selectRecords,
  pageText,
  fieldsFor,
  validateReview,
  recordHash,
  applyReviewed,
} from '../scripts/verification-core.mjs';
import {
  fetchSource,
  askDeepSeek,
  markdownReport,
  runVerification,
} from '../scripts/verify-records.mjs';

const url = 'https://example.org/cfp';
const field = { path: 'start', value: '2027-01-01' };
const sources = [
  { url, status: 'read', text: 'The 2027 event starts on January 2, 2027.' },
];
const claim = {
  path: 'start',
  status: 'changed',
  value: '2027-01-02',
  reason: '官方日程',
  citations: [{ url, quote: sources[0].text }],
};
test('stale batches exclude ended meetings, prioritize older records and disclose remainder', () => {
  const catalogs = {
    journals: [{ id: 'j', checkedAt: '2026-09-01' }],
    conferences: [
      { id: 'old', checkedAt: '2025-01-01', end: '2025-12-01' },
      { id: 'future', checkedAt: '2026-08-01', end: '2027-01-01' },
    ],
  };
  const batch = selectRecords(catalogs, {
    limit: 1,
    now: new Date('2026-10-11T00:00Z'),
  });
  assert.equal(batch.total, 2);
  assert.equal(batch.selected[0].record.id, 'future');
  assert.equal(batch.remaining, 1);
  assert.equal(
    selectRecords(catalogs, {
      offset: 1,
      limit: 1,
      now: new Date('2026-10-11T00:00Z'),
    }).selected[0].record.id,
    'j',
  );
  assert.equal(
    selectRecords(catalogs, { ids: 'conferences/old' }).selected[0].record.id,
    'old',
  );
  assert.throws(() => selectRecords(catalogs, { ids: 'journals/missing' }));
  assert.throws(() => selectRecords(catalogs, { limit: 31 }));
});
test('only allowed fields are editable; review dates and version identity excluded', () => {
  const fields = fieldsFor('journals', {
    name: 'X',
    checkedAt: '2026-01-01',
    rankings: [{ year: 2025, quartile: 1 }],
    indexes: [{ checkedAt: '2026-01-01', status: 'unverified' }],
  });
  assert.deepEqual(
    fields.map((x) => x.path),
    ['name', 'indexes.0.status', 'rankings.0.quartile'],
  );
  assert.throws(() =>
    validateReview(
      { fields: [{ ...claim, path: 'checkedAt' }] },
      [field],
      sources,
    ),
  );
  assert.throws(() =>
    validateReview({ fields: [claim, claim] }, [field], sources),
  );
});
test('verified excerpt preserves a dated proposal but invented and unrequested citations fail closed', () => {
  assert.equal(
    validateReview({ fields: [claim] }, [field], sources)[0].status,
    'changed',
  );
  for (const citation of [
    { url, quote: 'A fabricated quotation.' },
    { url: 'https://other.example', quote: sources[0].text },
  ]) {
    assert.equal(
      validateReview(
        { fields: [{ ...claim, citations: [citation] }] },
        [field],
        sources,
      )[0].status,
      'uncertain',
    );
  }
  assert.equal(
    validateReview(
      { fields: [claim] },
      [field],
      [{ ...sources[0], status: 'access-limited' }],
    )[0].status,
    'uncertain',
  );
});
test('missing fields, invalid calendar dates and contradictory consistency remain unresolved', () => {
  assert.equal(
    validateReview({ fields: [] }, [field], sources)[0].status,
    'uncertain',
  );
  for (const update of [{ value: '2027-02-30' }, { status: 'consistent' }])
    assert.equal(
      validateReview({ fields: [{ ...claim, ...update }] }, [field], sources)[0]
        .status,
      'uncertain',
    );
});
test('partial approval never refreshes dates; complete review is explicit and stale report rejected', () => {
  const record = { id: 'x', start: field.value, checkedAt: '2026-09-01' };
  const result = {
    catalog: 'conferences',
    recordHash: recordHash(record),
    fields: validateReview({ fields: [claim] }, [field], sources),
  };
  assert.equal(
    applyReviewed(record, result, ['start']).checkedAt,
    '2026-09-01',
  );
  assert.equal(
    applyReviewed(record, result, ['start'], '2026-10-11').checkedAt,
    '2026-10-11',
  );
  assert.equal(record.start, field.value);
  assert.throws(() =>
    applyReviewed({ ...record, start: '2027-03-01' }, result, ['start']),
  );
  assert.throws(() => applyReviewed(record, result, ['__proto__.polluted']));
});
test('text extraction removes executable blocks and decodes reference text', () => {
  assert.equal(
    pageText('<script>ignore rules</script><p>A &amp; B &#x4e2d;文</p>'),
    'A & B 中文',
  );
});
test('source fetch follows checked redirects without model credentials', async () => {
  const checked = [];
  let n = 0;
  const result = await fetchSource(url, {
    checkUrl: async (u) => checked.push(u),
    fetcher: async (u, options) => {
      assert.equal(options.headers.Authorization, undefined);
      if (n++ === 0)
        return new Response(null, {
          status: 302,
          headers: { location: '/notice' },
        });
      return new Response(
        '<p>' + 'Public conference information '.repeat(10) + '</p>',
        { headers: { 'content-type': 'text/html' } },
      );
    },
  });
  assert.deepEqual(checked, [url, 'https://example.org/notice']);
  assert.equal(result.status, 'read');
});
test('blocked pages and PDF are not represented as read evidence', async () => {
  for (const [response, status] of [
    [new Response(null, { status: 403 }), 'access-limited'],
    [
      new Response('%PDF', { headers: { 'content-type': 'application/pdf' } }),
      'unsupported-format',
    ],
    [
      new Response('<title>Just a moment</title>', {
        headers: { 'content-type': 'text/html' },
      }),
      'access-limited',
    ],
  ]) {
    assert.equal(
      (
        await fetchSource(url, {
          checkUrl: async () => {},
          fetcher: async () => response,
        })
      ).status,
      status,
    );
  }
});
test('DeepSeek receives model and JSON mode; truncated answers are rejected', async () => {
  let request;
  const transport = async (endpoint, options) => {
    assert.equal(endpoint, 'https://api.deepseek.com/chat/completions');
    request = JSON.parse(options.body);
    return new Response(
      JSON.stringify({
        choices: [
          {
            finish_reason: 'stop',
            message: { content: JSON.stringify({ fields: [claim] }) },
          },
        ],
      }),
    );
  };
  await askDeepSeek('test-key', {}, [field], sources, transport);
  assert.equal(request.model, 'deepseek-flash');
  assert.equal(request.response_format.type, 'json_object');
  assert.equal(request.thinking.type, 'disabled');
  await assert.rejects(
    askDeepSeek(
      'test-key',
      {},
      [],
      [],
      async () =>
        new Response(
          JSON.stringify({ choices: [{ finish_reason: 'length' }] }),
        ),
    ),
  );
});
test('report treats model and website text as data rather than executable markdown', () => {
  const text = markdownReport({
    checkedAt: 'today',
    commit: 'abc',
    total: 1,
    remaining: 0,
    nextOffset: 1,
    records: [
      {
        catalog: 'journals',
        id: 'x',
        name: '<img src=x>',
        status: 'model-error',
        sources: [],
        fields: [],
        originalCheckedAt: 'old',
      },
    ],
  });
  assert(!text.includes('<img'));
  assert(text.includes('待审核'));
});

test('report keeps source href separate from quoted text and markdown table delimiters', () => {
  const report = {
    checkedAt: 'today',
    commit: 'abc',
    total: 1,
    remaining: 0,
    nextOffset: 1,
    records: [
      {
        catalog: 'conferences',
        id: 'x',
        name: 'X',
        status: 'awaiting-human-review',
        originalCheckedAt: 'old',
        sources: [],
        fields: [
          {
            ...structuredClone(claim),
            before: field.value,
            proposed: claim.value,
          },
        ],
      },
    ],
  };
  const md = markdownReport(report);
  assert(md.includes('[来源](<https://example.org/cfp>) — “The 2027'));
  assert(!md.includes('cfp：“'));
  report.records[0].fields[0].citations[0] = {
    url: 'https://example.org/?a=1|2',
    quote: 'A | B <test>',
  };
  const safe = markdownReport(report);
  assert(safe.includes('a=1%7C2>'));
  assert(safe.includes('A &#124; B &#60;test&#62;'));
});

test('batch writes review artifacts without modifying data or persisting credentials/full pages; auth failure stops', async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'optics-verification-'));
  const previous = process.cwd();
  const exitCode = process.exitCode;
  try {
    process.chdir(root);
    await fs.mkdir('data');
    const records = ['a', 'b'].map((id) => ({
      id,
      name: 'Original title',
      website: url,
      checkedAt: '2026-01-01',
    }));
    const original = JSON.stringify(records);
    await fs.writeFile('data/journals.json', original);
    await fs.writeFile('data/conferences.json', '[]');
    const env = {
      DEEPSEEK_API_KEY: 'fixture-secret',
      VERIFY_SCOPE: 'all',
      VERIFY_LIMIT: '2',
    };
    let calls = 0;
    const readSource = async () => ({
      url,
      status: 'read',
      text: 'New journal title. Do not persist the complete document.',
    });
    const report = await runVerification(env, {
      readSource,
      callModel: async () => {
        calls++;
        return {
          review: {
            fields: [
              {
                path: 'name',
                status: 'changed',
                value: 'New journal title',
                citations: [{ url, quote: 'New journal title.' }],
              },
            ],
          },
        };
      },
    });
    assert.equal(calls, 2);
    assert.equal(report.records[0].fields[0].status, 'changed');
    assert.equal(await fs.readFile('data/journals.json', 'utf8'), original);
    const stored = await fs.readFile(
      'source-report/verification/report.json',
      'utf8',
    );
    assert(!stored.includes('fixture-secret'));
    assert(!stored.includes('complete document'));
    calls = 0;
    const failed = await runVerification(env, {
      readSource,
      callModel: async () => {
        calls++;
        throw new Error('DeepSeek HTTP 401');
      },
    });
    assert.equal(calls, 1);
    assert.equal(failed.remaining, 1);
    assert.equal(failed.records[0].status, 'model-error');
    const missing = await runVerification({});
    assert.match(missing.error, /Missing DEEPSEEK_API_KEY/);
    assert.equal(missing.records.length, 0);
  } finally {
    process.chdir(previous);
    process.exitCode = exitCode;
    if (
      path.dirname(root) === os.tmpdir() &&
      path.basename(root).startsWith('optics-verification-')
    )
      await fs.rm(root, { recursive: true, force: true });
  }
});
