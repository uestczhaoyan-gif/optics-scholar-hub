import test from 'node:test';
import assert from 'node:assert/strict';
import {
  sourceIndex,
  maintenanceQueue,
  tableCell,
} from '../scripts/maintenance.mjs';
const source = 'https://example.org/notice';
test('shared source retains every record and exact nested field without extra requests', () => {
  const index = sourceIndex({
    conferences: [
      { id: 'a', name: 'A', website: source, deadlines: [{ source }] },
    ],
    journals: [{ id: 'b', name: 'B', guide: source }],
  });
  assert.equal(index.size, 1);
  assert.deepEqual(
    index.get(source).map((r) => [r.id, r.field]),
    [
      ['a', 'website'],
      ['a', 'deadlines.0.source'],
      ['b', 'guide'],
    ],
  );
});
test('maintenance separates near deadlines, missing dates, ended events and ranking evidence', () => {
  const c = {
    id: 'a',
    name: 'A',
    website: source,
    end: '2026-11-01',
    checkedAt: '2026-09-09',
    registration: source,
    deadlines: [
      { label: 'near', at: '2026-09-11T12:00:00+08:00', source },
      { label: 'unknown', date: null, source },
      { label: 'old', at: '2026-09-09T12:00:00+08:00', source },
    ],
  };
  const rows = maintenanceQueue(
    {
      conferences: [c, { ...c, id: 'ended', end: '2026-09-01' }],
      journals: [
        {
          id: 'j',
          name: 'J',
          checkedAt: '2026-09-09',
          rankings: [
            { evidence: 'official' },
            {
              year: 2025,
              system: 'CAS',
              category: 'optics',
              evidence: 'secondary',
              source,
            },
          ],
        },
      ],
    },
    new Date('2026-09-10T00:00Z'),
  );
  assert.deepEqual(
    rows.map((r) => [r.id, r.priority, r.field]),
    [
      ['a', 1, 'deadlines.0'],
      ['a', 2, 'deadlines.1'],
      ['j', 2, 'issn'],
      ['j', 3, 'rankings.1'],
    ],
  );
  assert.equal(tableCell('a|b\nc'), 'a&#124;b c');
});

test('maintenance distinguishes missing identifiers from optional EI ranking gaps', () => {
  const journal = {
    id: 'ei',
    name: 'EI journal',
    website: source,
    checkedAt: '2026-09-11',
    eissn: '2047-7538',
    rankings: [],
    indexes: [
      {
        database: 'EI_COMPENDEX',
        status: 'confirmed',
        evidence: 'database',
        checkedAt: '2026-09-11',
        source,
      },
    ],
  };
  const rows = maintenanceQueue(
    { conferences: [], journals: [journal] },
    new Date('2026-09-11T00:00Z'),
  );
  assert.deepEqual(
    rows.map((r) => [r.priority, r.field]),
    [[3, 'rankings']],
  );
  assert.equal(journal.indexes[0].status, 'confirmed');
  const missing = maintenanceQueue(
    { conferences: [], journals: [{ ...journal, eissn: null }] },
    new Date('2026-09-11T00:00Z'),
  );
  assert.deepEqual(
    missing.map((r) => [r.priority, r.field]),
    [
      [2, 'issn'],
      [3, 'rankings'],
    ],
  );
});
