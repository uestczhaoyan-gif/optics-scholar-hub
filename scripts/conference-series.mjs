import assert from 'node:assert/strict';

export function validateConferenceSeries(series, conferences) {
  assert(
    Array.isArray(series) && series.length > 0,
    'Missing conference series',
  );
  const ids = new Set(),
    linked = new Set(),
    editions = new Map(conferences.map((c) => [c.id, c]));
  const url = (value) => {
    const u = new URL(value);
    assert(
      u.protocol === 'https:' && !u.username && !u.password,
      'Unsafe series source',
    );
  };
  for (const s of series) {
    assert(
      typeof s.id === 'string' && /^[a-z0-9-]+$/.test(s.id) && !ids.has(s.id),
      'Duplicate/invalid series ID',
    );
    ids.add(s.id);
    assert(typeof s.name === 'string' && s.name.trim(), 'Missing series name');
    assert(
      Array.isArray(s.aliases) &&
        s.aliases.every((a) => typeof a === 'string' && a.trim()),
      'Invalid series aliases',
    );
    assert.equal(
      new Set([s.name, ...s.aliases]).size,
      s.aliases.length + 1,
      'Duplicate series alias',
    );
    url(s.website);
    assert(
      Array.isArray(s.sources) && s.sources.length > 0,
      'Missing series sources',
    );
    s.sources.forEach(url);
    assert(
      Array.isArray(s.editionIds) && s.editionIds.length > 0,
      'Missing series editions',
    );
    for (const id of s.editionIds) {
      assert(
        editions.has(id) && !linked.has(id),
        'Orphan/duplicate series edition',
      );
      linked.add(id);
      assert(
        [s.name, ...s.aliases].includes(editions.get(id).series),
        'Edition belongs to another series',
      );
    }
    if (s.nextEditionCheckedAt !== null)
      assert(
        /^\d{4}-\d{2}-\d{2}$/.test(s.nextEditionCheckedAt) &&
          new Date(s.nextEditionCheckedAt).toISOString().slice(0, 10) ===
            s.nextEditionCheckedAt,
        'Invalid next edition check date',
      );
  }
  assert.equal(
    linked.size,
    conferences.length,
    'Every conference needs a stable series',
  );
}

export function seriesMaintenance(series, conferences, now = new Date()) {
  const today = now.toISOString().slice(0, 10),
    editions = new Map(conferences.map((c) => [c.id, c]));
  return series.flatMap((s) => {
    const latest = s.editionIds
      .map((id) => editions.get(id))
      .filter(Boolean)
      .sort((a, b) => b.start.localeCompare(a.start))[0];
    if (!latest || latest.end >= today) return [];
    if (
      s.nextEditionCheckedAt &&
      Date.parse(today) - Date.parse(s.nextEditionCheckedAt) < 30 * 86400000
    )
      return [];
    return [
      {
        catalog: 'conferenceSeries',
        id: s.id,
        name: s.name,
        priority: 2,
        field: 'nextEditionCheckedAt',
        reason: `最新已收录${latest.year}届已结束：查找后续官方公告；不按周期推算日期`,
        source: s.website,
      },
    ];
  });
}
