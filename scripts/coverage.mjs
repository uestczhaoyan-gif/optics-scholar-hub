import assert from 'node:assert/strict';

const normalize = (value) =>
  value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^\p{L}\p{N}]/gu, '');
const catalogFor = {
  journal: 'journals',
  'conference-series': 'conferences',
  event: 'events',
};

export function validateCandidates(candidates, catalogs) {
  assert(Array.isArray(candidates), 'Candidates must be an array');
  const ids = new Set(),
    names = new Set(),
    linked = new Set();
  for (const c of candidates) {
    assert(
      typeof c.candidateId === 'string' &&
        /^[a-z0-9-]+$/.test(c.candidateId) &&
        !ids.has(c.candidateId),
      'Duplicate/invalid candidate ID',
    );
    ids.add(c.candidateId);
    assert(Object.hasOwn(catalogFor, c.kind), `${c.candidateId}: invalid kind`);
    for (const field of ['name', 'scopeHint', 'decisionReason', 'nextAction'])
      assert(
        typeof c[field] === 'string' && c[field].trim(),
        `${c.candidateId}: missing ${field}`,
      );
    assert(
      Array.isArray(c.aliases) &&
        c.aliases.every((x) => typeof x === 'string' && x.trim()),
      'Invalid aliases',
    );
    for (const name of new Set([c.name, ...c.aliases].map(normalize))) {
      const key = c.kind + ':' + name;
      assert(!names.has(key), `Duplicate candidate name/alias: ${name}`);
      names.add(key);
    }
    assert([1, 2, 3].includes(c.priority), 'Invalid review priority');
    assert(
      ['pending', 'admitted', 'deferred'].includes(c.reviewStatus),
      'Invalid review status',
    );
    assert(
      c.sourceEntry === null ||
        (new URL(c.sourceEntry).protocol === 'https:' &&
          !new URL(c.sourceEntry).username &&
          !new URL(c.sourceEntry).password),
      'Invalid source entry',
    );
    assert(
      c.reviewedAt === null ||
        (/^\d{4}-\d{2}-\d{2}$/.test(c.reviewedAt) &&
          new Date(c.reviewedAt).toISOString().slice(0, 10) === c.reviewedAt),
      'Invalid review date',
    );
    assert(Array.isArray(c.relatedExistingIds), 'Missing related IDs');
    assert.equal(
      c.reviewStatus === 'admitted',
      c.relatedExistingIds.length > 0,
      'Admission must reference a formal record',
    );
    for (const id of c.relatedExistingIds) {
      assert(
        (catalogs[catalogFor[c.kind]] || []).some((x) => x.id === id),
        `Missing/wrong-kind formal record: ${id}`,
      );
      assert(!linked.has(id), `Formal record linked twice: ${id}`);
      linked.add(id);
    }
  }
  for (const catalog of Object.values(catalogFor)) {
    for (const record of catalogs[catalog] || []) {
      assert(
        linked.has(record.id),
        `Formal record missing candidate link: ${record.id}`,
      );
    }
  }
}

export function coverageRows(catalogs, topics, today) {
  return topics.map((topic) => {
    const journals = catalogs.journals.filter((x) => x.topics.includes(topic));
    const conferences = catalogs.conferences.filter((x) =>
      x.topics.includes(topic),
    );
    const events = catalogs.events.filter((x) => x.topics.includes(topic));
    return {
      topic,
      journals: journals.length,
      conferenceSeries: new Set(conferences.map((x) => x.series)).size,
      conferenceEditions: conferences.length,
      activeConferenceEditions: conferences.filter((x) => x.end >= today)
        .length,
      events: events.length,
      activeEvents: events.filter((x) => !x.end || x.end >= today).length,
      eventParents: events.filter((x) => !x.parentId).length,
      scopeExamplesMissing: journals
        .filter(
          (x) => x.domains.length > 1 && (x.scopeExamples?.length || 0) < 3,
        )
        .map((x) => x.id),
    };
  });
}
