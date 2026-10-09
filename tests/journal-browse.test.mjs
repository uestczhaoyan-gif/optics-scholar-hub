import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { matchesText, sortJournals } from '../lib/catalog.ts';
const journals = JSON.parse(
  fs.readFileSync(new URL('../data/journals.json', import.meta.url), 'utf8'),
);
test('Chinese aliases and punctuated abbreviations find the intended journal', () => {
  const chemical = journals.find((j) => j.id === 'chemical-reviews');
  assert(matchesText(chemical, '化学综述'));
  assert(matchesText(chemical, 'Chem. Rev.'));
  assert(
    matchesText(
      journals.find((j) => j.id === 'nature'),
      '自然 母刊',
    ),
  );
  assert(!matchesText(chemical, '不存在期刊'));
});
test('journal sorting is deterministic and preserves original catalog order', () => {
  const items = [
    { name: 'Z', checkedAt: '2026-01-01' },
    { name: 'A', checkedAt: '2026-10-09' },
  ];
  assert.deepEqual(
    sortJournals(items, 'name').map((j) => j.name),
    ['A', 'Z'],
  );
  assert.deepEqual(
    sortJournals(items, 'checked').map((j) => j.name),
    ['A', 'Z'],
  );
  assert.deepEqual(
    sortJournals(items, 'deadline').map((j) => j.name),
    ['Z', 'A'],
  );
});
