import test from 'node:test';
import assert from 'node:assert/strict';
import { conferenceCalendar } from '../lib/calendar.ts';

const conference = {
  id: 'demo-2027',
  series: '光学会议',
  year: 2027,
  start: '2027-02-27',
  end: '2027-02-28',
  location: '城市',
  venue: '会场',
  checkedAt: '2026-09-10',
  notes: '内容,分号;换行\nBEGIN:VEVENT',
  website: 'https://example.org/',
  deadlines: [
    {
      type: 'paper',
      label: '普通投稿',
      at: '2026-11-23T23:59:00-08:00',
      timezone: 'America/Los_Angeles',
      source: 'https://example.org/paper',
    },
    {
      type: 'registration',
      label: '早鸟注册',
      date: '2026-12-31',
      source: 'https://example.org/register',
    },
    {
      type: 'pdp',
      label: '未知',
      date: null,
      source: 'https://example.org/pdp',
    },
  ],
};
const unfold = (value) => value.replace(/\r\n /g, '');
test('calendar preserves exact instants, all-day dates and inclusive meeting end', () => {
  const calendar = unfold(
    conferenceCalendar([conference], new Date('2026-09-10T00:00Z')),
  );
  assert.equal((calendar.match(/^BEGIN:VEVENT$/gm) ?? []).length, 3);
  assert.match(calendar, /DTSTART:20261124T075900Z/);
  assert.match(
    calendar,
    /DTSTART;VALUE=DATE:20261231\r\nDTEND;VALUE=DATE:20270101/,
  );
  assert.match(
    calendar,
    /DTSTART;VALUE=DATE:20270227\r\nDTEND;VALUE=DATE:20270301/,
  );
  assert.doesNotMatch(calendar, /SUMMARY:.*未知/);
  assert.match(calendar, /URL:https:\/\/example.org\/paper/);
});
test('calendar escapes text, folds UTF-8 safely and retains IDs when dates change', () => {
  const a = conferenceCalendar([
    { ...conference, notes: conference.notes + '中文'.repeat(80) },
  ]);
  for (const line of a.split('\r\n')) assert.ok(Buffer.byteLength(line) <= 75);
  assert.doesNotMatch(a, /(?<!\r)\n/);
  assert.match(unfold(a), /内容\\,分号\\;换行\\nBEGIN:VEVENT/);
  const b = conferenceCalendar([{ ...conference, start: '2027-02-26' }]);
  const ids = (s) => unfold(s).match(/^UID:.*$/gm);
  assert.deepEqual(ids(a), ids(b));
  assert.equal(new Set(ids(a)).size, 3);
});
