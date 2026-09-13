import test from 'node:test';
import assert from 'node:assert/strict';
import { validateCandidates, coverageRows } from '../scripts/coverage.mjs';
const catalogs = {
  journals: [{ id: 'j', topics: ['光学'], domains: ['光学', '材料'] }],
  conferences: [],
  events: [],
};
const candidate = {
  candidateId: 'j-candidate',
  name: 'Journal',
  aliases: [],
  kind: 'journal',
  priority: 1,
  scopeHint: '光学',
  sourceEntry: null,
  reviewStatus: 'pending',
  relatedExistingIds: [],
  decisionReason: '待审核',
  nextAction: '核实',
  reviewedAt: null,
};
test('candidate admission requires valid unique formal links and unambiguous identities', () => {
  assert.doesNotThrow(() =>
    validateCandidates([candidate], { ...catalogs, journals: [] }),
  );
  assert.throws(
    () => validateCandidates([candidate], catalogs),
    /Formal record missing candidate link: j/,
  );
  assert.throws(() =>
    validateCandidates([{ ...candidate, reviewStatus: 'admitted' }], catalogs),
  );
  assert.throws(() =>
    validateCandidates(
      [
        {
          ...candidate,
          reviewStatus: 'admitted',
          relatedExistingIds: ['missing'],
        },
      ],
      catalogs,
    ),
  );
  assert.throws(() =>
    validateCandidates(
      [
        candidate,
        {
          ...candidate,
          candidateId: 'another',
          name: 'Other',
          aliases: ['JOURNAL'],
        },
      ],
      catalogs,
    ),
  );
  assert.throws(() =>
    validateCandidates(
      [
        {
          ...candidate,
          kind: 'conference-series',
          reviewStatus: 'admitted',
          relatedExistingIds: ['j'],
        },
      ],
      catalogs,
    ),
  );
  assert.doesNotThrow(() =>
    validateCandidates(
      [{ ...candidate, reviewStatus: 'admitted', relatedExistingIds: ['j'] }],
      catalogs,
    ),
  );
});
test('coverage separates series, editions, parent events and historical entries', () => {
  const rows = coverageRows(
    {
      ...catalogs,
      conferences: [
        { series: 'A', topics: ['光学'], end: '2025-01-01' },
        { series: 'A', topics: ['光学'], end: '2027-01-01' },
      ],
      events: [
        { topics: ['光学'], end: '2027-01-01' },
        { topics: ['光学'], parentId: 'parent', end: '2025-01-01' },
      ],
    },
    ['光学', '空白'],
    '2026-09-13',
  );
  assert.deepEqual(rows[0], {
    topic: '光学',
    journals: 1,
    conferenceSeries: 1,
    conferenceEditions: 2,
    activeConferenceEditions: 1,
    events: 2,
    activeEvents: 1,
    eventParents: 1,
    scopeExamplesMissing: ['j'],
  });
  assert.equal(rows[1].journals, 0);
  assert.equal(rows[1].conferenceSeries, 0);
});
