import fs from 'node:fs';
import assert from 'node:assert/strict';
import { validateJournalMetadata } from './validate-journal.mjs';
const read = (name) => JSON.parse(fs.readFileSync(`data/${name}.json`, 'utf8'));
const date = (value) =>
  assert(
    typeof value === 'string' &&
      /^\d{4}-\d{2}-\d{2}$/.test(value) &&
      !Number.isNaN(Date.parse(value)) &&
      new Date(value).toISOString().slice(0, 10) === value,
    `Invalid date: ${value}`,
  );
const url = (value) => {
  const u = new URL(value);
  assert(
    u.protocol === 'https:' && !u.username && !u.password,
    `Unsafe URL: ${value}`,
  );
};
const text = (value) =>
  assert(
    typeof value === 'string' && value.trim().length > 0,
    'Required text missing',
  );
const conferences = read('conferences'),
  journals = read('journals');
const topics = read('topics');
assert(Array.isArray(topics) && topics.length > 0);
topics.forEach(text);
assert.equal(new Set(topics).size, topics.length, 'Duplicate topic vocabulary');
const ids = new Set();
for (const item of [...conferences, ...journals]) {
  assert(
    /^[a-z0-9-]+$/.test(item.id) && !ids.has(item.id),
    `Duplicate/invalid id: ${item.id}`,
  );
  ids.add(item.id);
  text(item.name);
  text(item.description);
  date(item.checkedAt);
  url(item.website);
  assert(Array.isArray(item.topics) && item.topics.length > 0);
  item.topics.forEach(text);
  assert.equal(
    new Set(item.topics).size,
    item.topics.length,
    `${item.id}: duplicate topic`,
  );
  assert(
    item.topics.every((topic) => topics.includes(topic)),
    `${item.id}: unknown topic; use data/topics.json`,
  );
  assert(item.requirements.length > 0);
  item.requirements.forEach(text);
}
for (const c of conferences) {
  date(c.start);
  date(c.end);
  assert(c.start <= c.end);
  assert(c.year === Number(c.start.slice(0, 4)));
  ['series', 'nameEn', 'venue', 'location', 'publication', 'notes'].forEach(
    (k) => text(c[k]),
  );
  assert(['中国境内', '海外'].includes(c.region));
  assert(['published', 'closed', 'unknown'].includes(c.submissionState));
  url(c.notice);
  if (c.registration) url(c.registration);
  assert(c.deadlines.length > 0);
  for (const d of c.deadlines) {
    text(d.label);
    url(d.source);
    assert(
      [
        'paper',
        'abstract',
        'pdp',
        'notification',
        'registration',
        'camera-ready',
        'poster',
        'demo',
      ].includes(d.type),
    );
    assert(!(d.at && d.date), 'Do not mix date and exact timestamp');
    if (d.at) {
      assert(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}[+-]\d{2}:\d{2}$/.test(d.at));
      date(d.at.slice(0, 10));
      assert(Number.isFinite(Date.parse(d.at)));
      text(d.timezone);
      const parts = new Intl.DateTimeFormat('sv-SE', {
        timeZone: d.timezone,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hourCycle: 'h23',
      }).format(new Date(d.at));
      assert.equal(
        parts.replace(' ', 'T'),
        d.at.slice(0, 19),
        `Timezone offset mismatch: ${c.id}`,
      );
    } else if (d.date) date(d.date);
    else assert(d.date === null, 'Unknown date must explicitly be null');
  }
}
const journalIdentifiers = new Map();
for (const j of journals) {
  validateJournalMetadata(j);
  for (const issn of new Set([j.issn, j.eissn].filter(Boolean))) {
    assert(!journalIdentifiers.has(issn), `Duplicate journal ISSN: ${issn}`);
    journalIdentifiers.set(issn, j.id);
  }
  url(j.guide);
  text(j.schedule);
  text(j.publishing);
  text(j.publisher);
  if (j.scopeExamples !== undefined) {
    assert(
      Array.isArray(j.scopeExamples) && j.scopeExamples.length >= 3,
      `${j.id}: scope examples need at least three papers`,
    );
    const sources = new Set();
    for (const example of j.scopeExamples) {
      text(example.title);
      text(example.relevance);
      date(example.publishedAt);
      url(example.source);
      assert(!sources.has(example.source), `${j.id}: duplicate scope example`);
      sources.add(example.source);
    }
  }
  const records = new Set();
  for (const r of j.rankings) {
    assert(['JCR', 'CAS'].includes(r.system));
    assert(Number.isInteger(r.year));
    text(r.edition);
    text(r.category);
    url(r.source);
    assert(Number.isInteger(r.quartile) && r.quartile >= 1 && r.quartile <= 4);
    assert(['official', 'derived', 'secondary'].includes(r.evidence));
    if (r.system === 'CAS') assert(['major', 'minor'].includes(r.level));
    const key = [r.system, r.year, r.level, r.category].join('|');
    assert(!records.has(key), `Duplicate ranking: ${j.id} ${key}`);
    records.add(key);
    if (r.evidence === 'derived') {
      assert(r.rank > 0 && r.total >= r.rank);
      assert.equal(r.quartile, Math.ceil((r.rank / r.total) * 4));
    }
  }
}
const config = read('site');
assert(Number.isFinite(Date.parse(config.snapshotAt)));
if (config.repository) url(config.repository);
console.log(
  `Validated ${journals.length} journals and ${conferences.length} conferences.`,
);
