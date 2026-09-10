import test from 'node:test';
import assert from 'node:assert/strict';
import {
  deadlineState,
  countdown,
  formatDeadline,
  conferenceStatus,
  rankingMatches,
  nextDeadline,
} from '../lib/catalog.ts';
const source = 'https://example.org/';
test('exact deadlines cross timezones and expire at the stated instant', () => {
  const d = {
    type: 'paper',
    label: 'CLEO',
    at: '2026-11-23T23:59:00-08:00',
    timezone: 'America/Los_Angeles',
    source,
  };
  assert.equal(deadlineState(d, new Date('2026-11-24T07:58:59Z')), 'upcoming');
  assert.equal(deadlineState(d, new Date('2026-11-24T07:59:00Z')), 'past');
  assert.match(formatDeadline(d), /15:59/);
});
test('date-only deadlines never invent midnight or a precision countdown', () => {
  const d = { type: 'paper', label: 'date only', date: '2026-10-20', source };
  assert.equal(deadlineState(d, new Date('2026-10-21T22:00Z')), 'today');
  assert.equal(deadlineState(d, new Date('2026-10-22T00:00Z')), 'past');
  assert.match(countdown(d, new Date('2026-10-10T00:00Z')), /^约 /);
  assert.equal(deadlineState({ ...d, date: null }, new Date()), 'unknown');
});
test('PDP stays separate from regular submission and registration', () => {
  const c = {
    end: '2026-11-04',
    submissionState: 'published',
    deadlines: [
      { type: 'paper', date: '2026-07-15', source },
      { type: 'registration', date: '2026-09-30', source },
      { type: 'pdp', at: '2026-10-15T23:59:00+08:00', source },
    ],
  };
  const now = new Date('2026-09-10T00:00Z');
  assert.equal(conferenceStatus(c, now), 'PDP 通道');
  assert.equal(nextDeadline(c, now, true).type, 'pdp');
  assert.equal(nextDeadline(c, now).type, 'registration');
  assert.equal(
    conferenceStatus({ ...c, submissionState: 'closed' }, now),
    '投稿已截止',
  );
  assert.equal(nextDeadline({ ...c, submissionState: 'closed' }, now, true), undefined);
  assert.equal(nextDeadline({ ...c, submissionState: 'closed' }, now).type, 'registration');
});

test('a past regular deadline does not hide an unknown PDP deadline', () => {
  const c = {
    end: '2027-05-07', submissionState: 'published',
    deadlines: [
      { type: 'paper', date: '2026-07-15', source },
      { type: 'pdp', date: null, source },
    ],
  };
  assert.equal(conferenceStatus(c, new Date('2026-09-10T00:00Z')), '待公布');
});

test('known future deadlines do not assert that a submission portal is open', () => {
  const c = {
    end: '2027-05-07', submissionState: 'published',
    deadlines: [{ type: 'paper', date: '2026-11-23', source }],
  };
  assert.equal(conferenceStatus(c, new Date('2026-09-10T00:00Z')), '有投稿日期');
  const ended = { ...c, end: '2026-09-01' };
  assert.equal(conferenceStatus(ended, new Date('2026-09-10T00:00Z')), '已结束');
  assert.equal(nextDeadline(ended, new Date('2026-09-10T00:00Z'), true), undefined);
});
test('CAS major Q2 does not imply optics minor Q2; versions and systems do not substitute', () => {
  const j = {
    rankings: [
      {
        system: 'CAS',
        year: 2025,
        level: 'major',
        quartile: 2,
        evidence: 'secondary',
      },
      {
        system: 'CAS',
        year: 2025,
        level: 'minor',
        quartile: 3,
        evidence: 'secondary',
      },
      {
        system: 'JCR',
        year: 2026,
        level: 'category',
        quartile: 2,
        evidence: 'derived',
      },
    ],
  };
  assert.equal(rankingMatches(j, 'CAS', '2025', 'major', 'all'), true);
  assert.equal(rankingMatches(j, 'CAS', '2025', 'minor', 'all'), false);
  assert.equal(rankingMatches(j, 'CAS', '2026', 'major', 'all'), false);
  assert.equal(rankingMatches(j, 'CAS', '2025', 'major', 'all', true), false);
  assert.equal(rankingMatches(j, 'JCR', '2026', 'minor', '2', true), true);
});
