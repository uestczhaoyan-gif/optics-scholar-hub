import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {
  indexMatches,
  journalMatches,
  previewRankings,
  journalDomains,
} from '../lib/catalog.ts';
import {
  validateJournalMetadata,
  domains,
} from '../scripts/validate-journal.mjs';
const data = JSON.parse(
  fs.readFileSync(new URL('../data/journals.json', import.meta.url), 'utf8'),
);
const eiOnly = data.find((j) => j.id === 'optics-precision-engineering');
const dual = data.find((j) => j.id === 'advanced-materials');
const f = {
  collection: 'all',
  index: 'all',
  domain: 'all',
  system: 'all',
  year: 'all',
  level: 'minor',
  quartile: 'all',
  officialOnly: false,
};

test('EI without rankings appears in all/EI collections but not Q1/Q2 or SCI filters', () => {
  assert.equal(eiOnly.rankings.length, 0);
  assert.equal(journalMatches(eiOnly, f), true);
  assert.equal(
    journalMatches(eiOnly, {
      ...f,
      collection: 'ei',
      index: 'EI_COMPENDEX',
      domain: '机械与制造',
    }),
    true,
  );
  for (const change of [
    { collection: 'ranked' },
    { system: 'JCR' },
    { index: 'SCIE' },
    { index: 'both' },
    { domain: '能源' },
  ])
    assert.equal(journalMatches(eiOnly, { ...f, ...change }), false);
});
test('dual indexing requires two current records; discontinued and unknown do not qualify', () => {
  assert.equal(indexMatches(dual, 'both'), true);
  assert.equal(indexMatches(eiOnly, 'unverified'), true);
  const old = {
    ...dual,
    indexes: dual.indexes.map((i) => ({ ...i, status: 'discontinued' })),
  };
  assert.equal(indexMatches(old, 'both'), false);
  assert.equal(indexMatches(old, 'SCIE'), false);
  assert.equal(indexMatches(old, 'unverified'), false);
  assert.equal(
    indexMatches(
      { ...dual, indexes: [{ database: 'ESCI', status: 'confirmed' }] },
      'SCIE',
    ),
    false,
  );
  assert.equal(
    data.filter((j) => indexMatches(j, 'both')).filter((j) => j.id === dual.id)
      .length,
    1,
  );
});
test('preview follows matching category, year, level and evidence instead of showing another rank', () => {
  const base = {
    system: 'CAS',
    level: 'minor',
    year: 2025,
    evidence: 'secondary',
  };
  const j = {
    rankings: [
      { ...base, category: '光学', quartile: 3 },
      { ...base, category: '材料', quartile: 2 },
      { ...base, level: 'major', category: '物理', quartile: 1 },
      { ...base, year: 2024, category: '光学', quartile: 1 },
    ],
  };
  assert.deepEqual(
    previewRankings(j, 'CAS', '2025', 'minor', '2', false).map(
      (r) => r.category,
    ),
    ['材料'],
  );
  assert.equal(
    previewRankings(j, 'CAS', '2026', 'minor', 'all', false).length,
    0,
  );
  assert.equal(
    previewRankings(j, 'CAS', '2025', 'minor', 'all', true).length,
    0,
  );
});
test('metadata requires indexing evidence and valid identity; EI is an independent admission path', () => {
  assert.doesNotThrow(() => validateJournalMetadata(eiOnly));
  const copy = () => structuredClone(eiOnly);
  let j = copy();
  j.issn = '1004-9241';
  assert.throws(() => validateJournalMetadata(j));
  j = copy();
  j.indexes[1].source = null;
  assert.throws(() => validateJournalMetadata(j));
  j = copy();
  j.indexes[1].evidence = 'secondary';
  assert.throws(() => validateJournalMetadata(j));
  j = copy();
  j.indexes[1].status = 'unverified';
  assert.throws(() => validateJournalMetadata(j));
  j = copy();
  j.indexes[1].checkedAt = '2026-02-30';
  assert.throws(() => validateJournalMetadata(j));
  j = copy();
  j.indexes[1].coverageEnd = '2020';
  assert.throws(() => validateJournalMetadata(j));
  assert.deepEqual(journalDomains, domains);
});
