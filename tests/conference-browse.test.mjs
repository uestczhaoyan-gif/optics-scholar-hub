import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { conferenceStatusMatches, nextDeadline } from '../lib/catalog.ts';
import { readFilterLink } from '../lib/filter-link.ts';
import { conferenceCalendar } from '../lib/calendar.ts';
const conferences = JSON.parse(
  fs.readFileSync(new URL('../data/conferences.json', import.meta.url), 'utf8'),
);
const now = new Date('2026-10-09T12:00:00Z');
test('unfinished includes closed submissions with a future meeting, excludes history', () => {
  assert(
    conferenceStatusMatches(
      conferences.find((c) => c.id === 'photonics-west-2027'),
      '未结束',
      now,
    ),
  );
  assert(
    !conferenceStatusMatches(
      conferences.find((c) => c.id === 'ofc-2025'),
      '未结束',
      now,
    ),
  );
  assert.equal(
    readFilterLink('?status=未结束', { topics: [], domains: [], years: [] })
      .status,
    '未结束',
  );
});
test('accepted-author confirmations are retained in calendar but never counted as new submissions', () => {
  const mems = conferences.find((c) => c.id === 'ieee-mems-2027');
  assert.equal(
    mems.deadlines.filter((d) => d.type === 'confirmation').length,
    2,
  );
  assert.equal(nextDeadline(mems, now, true), undefined);
  assert(!conferenceStatusMatches(mems, '有投稿日期', now));
  assert.match(conferenceCalendar([mems], now), /录用作者接受确认/);
});
