import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { validateConferenceSeries } from '../scripts/conference-series.mjs';
const read = (name) =>
  JSON.parse(fs.readFileSync(new URL(`../data/${name}.json`, import.meta.url)));
const series = read('conference-series'),
  conferences = read('conferences');
test('recommendation mapping covers the 15 PDF identities without conflating related conferences', () => {
  const expected = [
    'ACP',
    'CIOP',
    'CLEO',
    'ECOC',
    'OFC',
    'Photonics Asia',
    'IEEE SENSORS',
    'AOMATT',
    'WCPS',
    'NDTA',
    'Optica Biophotonics',
    'OECC & IP',
    'IEEE PVSC',
    'PLD',
    'FOC',
  ];
  const marked = series
    .filter((s) => s.uestcRecommendationOrder)
    .sort((a, b) => a.uestcRecommendationOrder - b.uestcRecommendationOrder);
  assert.equal(marked.length, 15);
  assert.deepEqual(
    marked.map((s) => s.uestcRecommendationOrder),
    Array.from({ length: 15 }, (_, i) => i + 1),
  );
  for (const [i, s] of marked.entries())
    assert.ok(
      [s.name, ...s.aliases].includes(expected[i]),
      `${expected[i]} must map to its own series`,
    );
  const ids = marked.flatMap((s) => s.editionIds);
  assert.ok(
    ids.includes('wcps-2026') &&
      ids.includes('pld-2026') &&
      ids.includes('foc-2023'),
  );
  for (const c of conferences.filter((c) =>
    /CLEO-PR|Photonics West|OIC/.test(c.series),
  ))
    assert.ok(
      !ids.includes(c.id),
      `${c.id} must not inherit a similar-name badge`,
    );
});
test('invalid or duplicated recommendation numbers fail validation', () => {
  for (const order of [0, 16, 1.5]) {
    const changed = structuredClone(series);
    changed[0].uestcRecommendationOrder = order;
    assert.throws(
      () => validateConferenceSeries(changed, conferences),
      /recommendation/,
    );
  }
  const changed = structuredClone(series);
  changed[0].uestcRecommendationOrder = 1;
  changed[1].uestcRecommendationOrder = 1;
  assert.throws(
    () => validateConferenceSeries(changed, conferences),
    /recommendation/,
  );
});
test('new records keep unresolved fields and historical editions distinct', () => {
  const get = (id) => conferences.find((c) => c.id === id);
  assert.equal(
    get('wcps-2026').deadlines.find((d) => d.type === 'abstract').date,
    null,
  );
  assert.match(get('ndta-2026').requirements.join(' '), /300–500.*500–600/);
  for (const id of ['ieee-sensors-2027', 'pvsc-2027'])
    assert.ok(get(id).deadlines.every((d) => d.date === null));
  assert.equal(get('foc-2023').year, 2023);
  assert.ok(!conferences.some((c) => c.series === 'FOC' && c.year === 2026));
  const dataset = get('ofc-2027').deadlines.find((d) =>
    d.label.startsWith('Dataset'),
  );
  assert.equal(dataset.at, '2026-10-20T12:00:00-04:00');
});
