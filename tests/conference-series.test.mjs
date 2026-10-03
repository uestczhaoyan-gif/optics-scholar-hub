import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateConferenceSeries,
  seriesMaintenance,
} from '../scripts/conference-series.mjs';
import { seriesOutlook, seriesFavoritesKey } from '../lib/conference-series.ts';
import { parseFavorites, favoritesKey } from '../lib/favorites.ts';

const c = (id, year, start, end, series = 'OFC') => ({
  id,
  series,
  year,
  start,
  end,
});
const s = {
  id: 'series-ofc',
  name: 'OFC',
  aliases: [],
  editionIds: ['old'],
  website: 'https://example.org/',
  sources: ['https://example.org/'],
  nextEditionCheckedAt: null,
};
const old = c('old', 2026, '2026-03-01', '2026-03-05');

test('series history retains missed editions and switches to an officially added future edition', () => {
  const now = new Date('2026-10-03T12:00:00Z');
  assert.equal(seriesOutlook(s, [old], now).upcoming, undefined);
  const next = c('next', 2027, '2027-03-01', '2027-03-05');
  const updated = { ...s, editionIds: ['old', 'next'] };
  const outlook = seriesOutlook(updated, [old, next], now);
  assert.equal(outlook.upcoming.id, 'next');
  assert.deepEqual(
    outlook.editions.map((x) => x.id),
    ['next', 'old'],
  );
  assert.deepEqual(parseFavorites(JSON.stringify([s.id]), [updated.id]), [
    s.id,
  ]);
  assert.notEqual(seriesFavoritesKey, favoritesKey);
  assert.equal(
    seriesOutlook(updated, [old, next], new Date('2027-03-05T23:59:59Z'))
      .upcoming.id,
    'next',
  );
  assert.equal(
    seriesOutlook(updated, [old, next], new Date('2027-03-06T00:00:00Z'))
      .upcoming,
    undefined,
  );
});
test('series maintenance follows ended conferences monthly without inventing a next year or discarding history', () => {
  const now = new Date('2026-10-03T00:00:00Z');
  assert.equal(seriesMaintenance([s], [old], now).length, 1);
  assert.equal(
    seriesMaintenance(
      [{ ...s, nextEditionCheckedAt: '2026-09-04' }],
      [old],
      now,
    ).length,
    0,
  );
  assert.equal(
    seriesMaintenance(
      [{ ...s, nextEditionCheckedAt: '2026-09-03' }],
      [old],
      now,
    ).length,
    1,
  );
  assert.equal(
    seriesMaintenance(
      [{ ...s, editionIds: ['old', 'next'] }],
      [old, c('next', 2027, '2027-03-01', '2027-03-05')],
      now,
    ).length,
    0,
  );
  assert.equal(
    seriesMaintenance([s], [{ ...old, end: '2026-10-03' }], now).length,
    0,
  );
  assert.deepEqual(s.editionIds, ['old']);
  assert.equal(s.nextEditionCheckedAt, null);
});
test('series validation prevents missing history, duplicate membership and merging regional CLEO identities', () => {
  validateConferenceSeries([s], [old]);
  for (const [series, conferences] of [
    [[s], [old, c('unlinked', 2027, '2027-01-01', '2027-01-02')]],
    [[{ ...s, editionIds: ['old', 'old'] }], [old]],
    [[s], [{ ...old, series: 'CLEO-PR' }]],
    [[{ ...s, editionIds: ['missing'] }], [old]],
    [[{ ...s, id: undefined }], [old]],
    [[{ ...s, website: 'http://example.org/' }], [old]],
  ])
    assert.throws(() => validateConferenceSeries(series, conferences));
});
