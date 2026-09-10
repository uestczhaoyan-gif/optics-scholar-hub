// Pure helpers shared by the online source check and offline maintenance report.
export function sourceIndex(catalogs) {
  const index = new Map();
  for (const [catalog, items] of Object.entries(catalogs)) {
    for (const item of items) {
      function visit(value, field) {
        if (typeof value === 'string' && value.startsWith('https://')) {
          const refs = index.get(value) || [];
          refs.push({ catalog, id: item.id, name: item.name, field });
          index.set(value, refs);
        } else if (value && typeof value === 'object') {
          for (const [key, child] of Object.entries(value))
            visit(child, field ? `${field}.${key}` : key);
        }
      }
      visit(item, '');
    }
  }
  return index;
}

export function maintenanceQueue({ conferences, journals }, now = new Date()) {
  const rows = [];
  const today = now.toISOString().slice(0, 10);
  const add = (item, priority, field, reason, source) =>
    rows.push({
      id: item.id,
      name: item.name,
      priority,
      field,
      reason,
      source,
    });
  for (const item of [...conferences, ...journals]) {
    if (item.end && item.end < today) continue;
    if (
      now.getTime() - Date.parse(item.checkedAt + 'T00:00:00Z') >
      30 * 86400000
    )
      add(item, 2, 'checkedAt', '超过 30 天未完整复核', item.website);
  }
  for (const c of conferences) {
    if (c.end < today) continue;
    for (const [i, d] of c.deadlines.entries()) {
      const field = `deadlines.${i}`;
      if (!d.at && !d.date) {
        if (
          c.submissionState === 'closed' &&
          ['paper', 'abstract', 'pdp'].includes(d.type)
        )
          continue;
        add(c, 2, field, `${d.label}：具体日期待核实`, d.source);
        continue;
      }
      const remaining = (Date.parse(d.at || d.date) - now.getTime()) / 86400000;
      // Date-only deadlines have no invented closing instant. Keep a one-day margin.
      if (remaining >= (d.at ? 0 : -1) && remaining <= 14) {
        add(c, 1, field, `${d.label}：临近日期，请优先复核官方通知`, d.source);
      } else if (!d.at && remaining > 14) {
        add(
          c,
          3,
          field,
          `${d.label}：时刻${d.timezone ? '' : '与时区'}待核实`,
          d.source,
        );
      }
    }
    if (!c.registration) add(c, 2, 'registration', '注册入口待补', c.website);
  }
  for (const j of journals) {
    for (const [i, index] of (j.indexes || []).entries()) {
      if (index.status === 'unverified')
        add(
          j,
          2,
          `indexes.${i}`,
          `${index.database}：索引待核验`,
          index.source || j.website,
        );
      else if (
        index.checkedAt &&
        now.getTime() - Date.parse(index.checkedAt + 'T00:00:00Z') >
          30 * 86400000
      )
        add(
          j,
          2,
          `indexes.${i}.checkedAt`,
          `${index.database}：索引证据超过 30 天未复核`,
          index.source || j.website,
        );
      else if (index.status === 'confirmed' && index.evidence === 'publisher')
        add(
          j,
          3,
          `indexes.${i}`,
          `${index.database}：出版社声明待数据库复核`,
          index.source,
        );
    }
    for (const [i, r] of j.rankings.entries()) {
      if (r.evidence !== 'official')
        add(
          j,
          3,
          `rankings.${i}`,
          `${r.year} ${r.system} ${r.category}：${r.evidence === 'derived' ? '排名推算待官方分区核对' : '第三方参考待机构入口复核'}`,
          r.source,
        );
    }
  }
  return rows.sort(
    (a, b) =>
      a.priority - b.priority ||
      a.id.localeCompare(b.id) ||
      a.field.localeCompare(b.field),
  );
}

export const tableCell = (value) =>
  String(value)
    .replace(/\|/g, '&#124;')
    .replace(/[\r\n]+/g, ' ');
