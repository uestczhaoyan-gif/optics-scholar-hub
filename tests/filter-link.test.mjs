import test from 'node:test';
import assert from 'node:assert/strict';
import {
  filterDefaults,
  readFilterLink,
  writeFilterLink,
} from '../lib/filter-link.ts';
const vocabulary = { topics: ['光通信'], domains: ['材料'], years: ['2025'] };
test('filter links round-trip Chinese queries and combined rankings under Pages base paths', () => {
  const filters = {
    ...filterDefaults,
    query: '光 & 材料+',
    topic: '光通信',
    index: 'both',
    domain: '材料',
    system: 'CAS',
    year: '2025',
    level: 'major',
    quartile: '2',
  };
  const url = new URL(
    writeFilterLink(
      'https://example.org/project/?tracking=1#conferences',
      'journals',
      filters,
    ),
  );
  assert.equal(url.pathname, '/project/');
  assert.equal(url.hash, '#journals');
  assert.equal(url.searchParams.has('tracking'), false);
  assert.deepEqual(readFilterLink(url.search, vocabulary), filters);
});
test('invalid or stale filter values fall back without accepting unknown parameters', () => {
  assert.deepEqual(
    readFilterLink(
      '?system=FAKE&index=SCI&year=1900&domain=missing&topic=missing&redirect=https://example.org',
      vocabulary,
    ),
    filterDefaults,
  );
  assert.equal(
    readFilterLink('?query=' + 'x'.repeat(500), vocabulary).query.length,
    300,
  );
  assert.equal(
    new URL(
      writeFilterLink(
        'https://example.org/project/',
        'conferences',
        filterDefaults,
      ),
    ).search,
    '',
  );
});

test('ESCI survives shared links and remains distinct from SCIE', () => {
  const filters = { ...filterDefaults, index: 'ESCI' };
  const url = new URL(
    writeFilterLink('https://example.org/project/', 'journals', filters),
  );
  assert.equal(readFilterLink(url.search, vocabulary).index, 'ESCI');
});
