export type Deadline = {
  type: string;
  label: string;
  at?: string;
  date?: string | null;
  timezone?: string;
  source: string;
  note?: string;
};
export type Conference = {
  id: string;
  series: string;
  year: number;
  name: string;
  nameEn: string;
  region: string;
  location: string;
  venue: string;
  start: string;
  end: string;
  topics: string[];
  description: string;
  website: string;
  notice: string;
  registration: string | null;
  checkedAt: string;
  evidence: string;
  submissionState: string;
  requirements: string[];
  publication: string;
  notes: string;
  deadlines: Deadline[];
};
export type Ranking = {
  system: 'JCR' | 'CAS';
  edition: string;
  year: number;
  metricYear?: number;
  category: string;
  level: string;
  quartile: number;
  source: string;
  evidence: string;
  rank?: number;
  total?: number;
};
export type Journal = {
  id: string;
  name: string;
  abbr: string;
  publisher: string;
  issn: string | null;
  eissn: string | null;
  domains: string[];
  indexes: JournalIndex[];
  topics: string[];
  description: string;
  website: string;
  guide: string;
  requirements: string[];
  publishing: string;
  schedule: string;
  checkedAt: string;
  rankings: Ranking[];
};

export type JournalIndex = {
  database: 'SCIE' | 'EI_COMPENDEX' | 'ESCI';
  status: 'confirmed' | 'unverified' | 'discontinued';
  evidence: 'database' | 'publisher' | 'secondary' | null;
  source: string | null;
  checkedAt: string | null;
  coverageStart: string | null;
  coverageEnd: string | null;
  note: string;
};

export const indexLabels = {
  SCIE: 'SCI（SCIE）',
  EI_COMPENDEX: 'EI（Compendex）',
  ESCI: 'ESCI',
};
export const journalDomains = [
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
export function hasIndex(j: Journal, database: string): boolean {
  return j.indexes.some(
    (i) => i.database === database && i.status === 'confirmed',
  );
}
export function indexMatches(j: Journal, filter: string): boolean {
  if (filter === 'all') return true;
  if (filter === 'both')
    return hasIndex(j, 'SCIE') && hasIndex(j, 'EI_COMPENDEX');
  if (filter === 'unverified')
    return ['SCIE', 'EI_COMPENDEX'].some(
      (database) =>
        !j.indexes.some(
          (i) => i.database === database && i.status !== 'unverified',
        ),
    );
  return hasIndex(j, filter);
}
export function collectionMatches(j: Journal, collection: string): boolean {
  if (collection === 'ei') return hasIndex(j, 'EI_COMPENDEX');
  if (collection === 'ranked') return j.rankings.some((r) => r.quartile <= 2);
  return true;
}
export type JournalFilters = {
  collection: string;
  index: string;
  domain: string;
  system: string;
  year: string;
  level: string;
  quartile: string;
  officialOnly: boolean;
};
export function journalMatches(j: Journal, f: JournalFilters): boolean {
  return (
    collectionMatches(j, f.collection) &&
    indexMatches(j, f.index) &&
    (f.domain === 'all' || j.domains.includes(f.domain)) &&
    (f.system === 'all' ||
      rankingMatches(j, f.system, f.year, f.level, f.quartile, f.officialOnly))
  );
}
// Preview the matching records first, never the best quartile from an unrelated category/year.
export function previewRankings(
  j: Journal,
  system: string,
  year: string,
  level: string,
  q: string,
  officialOnly: boolean,
): Ranking[] {
  return (system === 'CAS' ? ['CAS', 'JCR'] : ['JCR', 'CAS']).flatMap(
    (kind) => {
      let ranks = j.rankings.filter(
        (r) =>
          r.system === kind &&
          (kind !== 'CAS' || r.level === (system === 'CAS' ? level : 'major')),
      );
      if (kind === system) {
        ranks = ranks.filter(
          (r) =>
            (year === 'all' || String(r.year) === year) &&
            r.quartile <= 2 &&
            (q === 'all' || String(r.quartile) === q) &&
            (!officialOnly || ['official', 'derived'].includes(r.evidence)),
        );
      }
      const latest = Math.max(...ranks.map((r) => r.year));
      return ranks
        .filter((r) => r.year === latest)
        .sort((a, b) => a.category.localeCompare(b.category));
    },
  );
}

export const submissionTypes = new Set(['paper', 'abstract', 'pdp']);
export function dayInZone(now: Date, zone = 'Asia/Shanghai'): string {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: zone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(now);
  const get = (key: string) => parts.find((p) => p.type === key)?.value;
  return `${get('year')}-${get('month')}-${get('day')}`;
}
export function deadlineState(
  d: Deadline,
  now: Date,
): 'upcoming' | 'today' | 'past' | 'unknown' {
  if (d.at) return Date.parse(d.at) > now.getTime() ? 'upcoming' : 'past';
  if (!d.date) return 'unknown';
  // With unknown source timezone, keep a ±1 day uncertainty window.
  if (!d.timezone) {
    const delta =
      (Date.parse(d.date) - Date.parse(dayInZone(now, 'UTC'))) / 86400000;
    return delta > 1 ? 'upcoming' : delta < -1 ? 'past' : 'today';
  }
  const today = dayInZone(now, d.timezone);
  return d.date > today ? 'upcoming' : d.date < today ? 'past' : 'today';
}
export function deadlineSortValue(d: Deadline): number {
  return d.at ? Date.parse(d.at) : d.date ? Date.parse(d.date) : Infinity;
}
export function nextDeadline(
  c: Conference,
  now: Date,
  submissionsOnly = false,
): Deadline | undefined {
  if (
    submissionsOnly &&
    (c.submissionState === 'closed' || c.end < dayInZone(now, 'UTC'))
  )
    return undefined;
  return c.deadlines
    .filter(
      (d) =>
        (!submissionsOnly || submissionTypes.has(d.type)) &&
        ['upcoming', 'today'].includes(deadlineState(d, now)),
    )
    .sort((a, b) => deadlineSortValue(a) - deadlineSortValue(b))[0];
}
export function conferenceStatus(c: Conference, now: Date): string {
  if (c.end < dayInZone(now, 'UTC')) return '已结束';
  if (c.submissionState === 'closed') return '投稿已截止';
  const d = nextDeadline(c, now, true);
  if (d) return d.type === 'pdp' ? 'PDP 通道' : '有投稿日期';
  if (
    c.deadlines.some(
      (d) => submissionTypes.has(d.type) && deadlineState(d, now) === 'unknown',
    )
  )
    return '待公布';
  if (
    c.deadlines.some(
      (d) => submissionTypes.has(d.type) && deadlineState(d, now) === 'past',
    )
  )
    return '投稿已截止';
  return '待公布';
}
export function countdown(d: Deadline | undefined, now: Date): string {
  if (!d || deadlineState(d, now) === 'unknown') return '待公布';
  if (deadlineState(d, now) === 'past') return '已截止';
  if (!d.at)
    return deadlineState(d, now) === 'today'
      ? '临近日期 · 请核实'
      : `约 ${Math.ceil((Date.parse(d.date!) - Date.parse(dayInZone(now, 'UTC'))) / 86400000)} 天`;
  const ms = Date.parse(d.at) - now.getTime();
  return `${Math.floor(ms / 86400000)} 天 ${Math.floor(ms / 3600000) % 24} 时 ${Math.floor(ms / 60000) % 60} 分`;
}
export function formatDeadline(d: Deadline, zone = 'Asia/Shanghai'): string {
  if (d.at)
    return new Intl.DateTimeFormat('zh-CN', {
      timeZone: zone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hourCycle: 'h23',
    }).format(new Date(d.at));
  return d.date
    ? `${d.date} · 时刻${d.timezone ? '待公布' : ' / 时区待核实'}`
    : '未公布 / 待核实';
}
export function matchesText(
  item: { name: string; topics: string[]; [key: string]: unknown },
  query: string,
): boolean {
  const hay = [
    item.name,
    item.nameEn,
    item.series,
    item.abbr,
    item.description,
    item.location,
    item.issn,
    item.eissn,
    ...(Array.isArray(item.domains) ? item.domains : []),
    ...item.topics,
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();
  return query
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .every((q) => hay.includes(q));
}
export function rankingMatches(
  j: Journal,
  system: string,
  year: string,
  level: string,
  q: string,
  officialOnly = false,
): boolean {
  return j.rankings.some(
    (r) =>
      r.system === system &&
      (year === 'all' || String(r.year) === year) &&
      (system !== 'CAS' || r.level === level) &&
      r.quartile <= 2 &&
      (q === 'all' || String(r.quartile) === q) &&
      (!officialOnly || r.evidence === 'official' || r.evidence === 'derived'),
  );
}
export function stale(checkedAt: string, now: Date, days = 30): boolean {
  return now.getTime() - Date.parse(checkedAt + 'T00:00:00Z') > days * 86400000;
}
