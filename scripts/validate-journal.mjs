import assert from 'node:assert/strict';
export const domains = [
  '光学',
  '材料',
  '电子',
  '物理',
  '信息与计算',
  '生物医学',
  '机械与制造',
  '能源',
  '地学与空间',
];
function validDate(value) {
  return (
    typeof value === 'string' &&
    /^\d{4}-\d{2}-\d{2}$/.test(value) &&
    Number.isFinite(Date.parse(value)) &&
    new Date(value).toISOString().slice(0, 10) === value
  );
}
function validIssn(value) {
  if (value === null) return true;
  if (typeof value !== 'string' || !/^\d{4}-\d{3}[\dX]$/.test(value))
    return false;
  const digits = value
    .replace('-', '')
    .split('')
    .map((c) => (c === 'X' ? 10 : Number(c)));
  return digits.reduce((sum, n, i) => sum + n * (8 - i), 0) % 11 === 0;
}
export function validateJournalMetadata(j) {
  assert(
    validIssn(j.issn) && validIssn(j.eissn),
    `${j.id}: invalid ISSN checksum`,
  );
  assert(
    Array.isArray(j.domains) &&
      j.domains.length &&
      new Set(j.domains).size === j.domains.length &&
      j.domains.every((d) => domains.includes(d)),
    `${j.id}: invalid domains`,
  );
  assert(Array.isArray(j.indexes), `${j.id}: missing indexes`);
  assert(
    new Set(j.indexes.map((i) => i.database)).size === j.indexes.length,
    `${j.id}: duplicate index`,
  );
  for (const database of ['SCIE', 'EI_COMPENDEX'])
    assert(
      j.indexes.some((i) => i.database === database),
      `${j.id}: explicitly mark unknown ${database}`,
    );
  for (const i of j.indexes) {
    assert(['SCIE', 'EI_COMPENDEX', 'ESCI'].includes(i.database));
    assert(['confirmed', 'unverified', 'discontinued'].includes(i.status));
    assert([null, 'database', 'publisher', 'secondary'].includes(i.evidence));
    assert(typeof i.note === 'string' && i.note.trim());
    assert(i.checkedAt === null || validDate(i.checkedAt));
    if (i.source !== null) {
      const url = new URL(i.source);
      assert(url.protocol === 'https:' && !url.username && !url.password);
    }
    if (i.status !== 'unverified') {
      assert(
        ['database', 'publisher'].includes(i.evidence) &&
          i.source &&
          i.checkedAt,
        `${j.id}: unsupported index claim`,
      );
      assert(j.issn || j.eissn, `${j.id}: indexed identity needs an ISSN`);
    }
    for (const value of [i.coverageStart, i.coverageEnd])
      assert(
        value === null || /^\d{4}$/.test(value),
        'Coverage uses years or null',
      );
    assert(
      !i.coverageStart || !i.coverageEnd || i.coverageStart <= i.coverageEnd,
    );
    assert(
      i.status !== 'confirmed' || i.coverageEnd === null,
      'Ended coverage cannot be current',
    );
  }
  assert(Array.isArray(j.rankings));
  assert(
    j.rankings.some((r) => r.quartile >= 1 && r.quartile <= 2) ||
      j.indexes.some(
        (i) => i.database === 'EI_COMPENDEX' && i.status === 'confirmed',
      ),
    `${j.id}: needs Q1/Q2 or confirmed EI eligibility`,
  );
}
