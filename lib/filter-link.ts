export const filterDefaults = {
  query: '',
  topic: '全部方向',
  region: '全部地区',
  status: '全部状态',
  zone: 'Asia/Shanghai',
  system: 'all',
  collection: 'all',
  index: 'all',
  domain: 'all',
  year: 'all',
  level: 'minor',
  quartile: 'all',
  evidence: 'all',
  sort: 'deadline',
};
export type FilterState = typeof filterDefaults;
export type FilterVocabulary = {
  topics: string[];
  domains: string[];
  years: string[];
};

export function readFilterLink(
  search: string,
  vocabulary: FilterVocabulary,
): FilterState {
  const params = new URLSearchParams(search);
  const choices: Record<Exclude<keyof FilterState, 'query'>, string[]> = {
    topic: ['全部方向', ...vocabulary.topics],
    region: ['全部地区', '中国境内', '海外'],
    status: [
      '全部状态',
      '有投稿日期',
      'PDP 通道',
      '投稿已截止',
      '已结束',
      '待公布',
    ],
    zone: ['Asia/Shanghai', 'UTC'],
    system: ['all', 'JCR', 'CAS'],
    collection: ['all', 'ranked', 'ei'],
    index: ['all', 'SCIE', 'ESCI', 'EI_COMPENDEX', 'both', 'unverified'],
    domain: ['all', ...vocabulary.domains],
    year: ['all', ...vocabulary.years],
    level: ['minor', 'major'],
    quartile: ['all', '1', '2'],
    evidence: ['all', 'official'],
    sort: ['deadline', 'start'],
  };
  const result = {
    ...filterDefaults,
    query: (params.get('query') ?? '').slice(0, 300),
  };
  for (const key of Object.keys(choices) as (keyof typeof choices)[]) {
    const value = params.get(key);
    if (value !== null && choices[key].includes(value)) result[key] = value;
  }
  return result;
}

export function writeFilterLink(
  base: string,
  tab: string,
  filters: FilterState,
): string {
  const url = new URL(base);
  url.search = '';
  url.hash = tab;
  for (const key of Object.keys(filterDefaults) as (keyof FilterState)[]) {
    if (filters[key] !== filterDefaults[key])
      url.searchParams.set(key, filters[key]);
  }
  return url.href;
}
