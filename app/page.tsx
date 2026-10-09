'use client';
import { useEffect, useMemo, useState } from 'react';
import {
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  CircleHelp,
  Clock3,
  Code2,
  Microscope,
  Search,
  SlidersHorizontal,
  Sparkles,
} from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
} from '@/components/ui/empty';
import rawConferences from '@/data/conferences.json';
import rawJournals from '@/data/journals.json';
import topicVocabulary from '@/data/topics.json';
import config from '@/data/site.json';
import {
  conferenceStatus,
  conferenceStatusMatches,
  nextDeadline,
  countdown,
  formatDeadline,
  deadlineState,
  deadlineSortValue,
  matchesText,
  journalMatches,
  sortJournals,
  journalDomains,
  stale,
  type Conference,
  type Journal,
} from '@/lib/catalog';
import { Guide, DataNotes } from './resources';
import { JournalCard } from '@/components/journal-card';
import { JournalCompare } from '@/components/journal-compare';
import { CatalogPagination } from '@/components/catalog-pagination';
import { CalendarDownload } from '@/components/calendar-download';
import { FilterShare } from '@/components/filter-share';
import { readFilterLink } from '@/lib/filter-link';
import { FavoriteButton, useFavorites } from '@/components/favorites';
import { EventsDirectory } from '@/components/events-directory';
import { CatalogUpdate } from '@/components/catalog-update';
import rawSeries from '@/data/conference-series.json';
import { ConferenceSeriesDirectory } from '@/components/conference-series';
import type { ConferenceSeries } from '@/lib/conference-series';
const conferences = rawConferences as Conference[];
const conferenceSeries = rawSeries as ConferenceSeries[];
const journals = rawJournals as Journal[];
const knownIds = [...conferences, ...journals].map((item) => item.id);
const options = (values: string[]) =>
  values.map((value) => ({ value, label: value }));
function Pick({
  label,
  value,
  onChange,
  items,
}: {
  label: string;
  value: string;
  onChange: (s: string) => void;
  items: { value: string; label: string }[];
}) {
  return (
    <div className="pick">
      <span>{label}</span>
      <Select
        value={value}
        onValueChange={(v) => v !== null && onChange(v)}
        items={items}
      >
        <SelectTrigger aria-label={label}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {items.map((i) => (
            <SelectItem key={i.value} value={i.value}>
              {i.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
import { External } from '@/components/external-link';
function Evidence({ at, now }: { at: string; now: Date }) {
  return (
    <span className={stale(at, now) ? 'age stale' : 'age'}>
      <CheckCircle2 size={13} />
      {stale(at, now) ? '超过 30 天未核验' : '来源核验'} {at}
    </span>
  );
}
function ConferenceCard({
  c,
  now,
  zone,
  favorite,
  onSeries,
}: {
  c: Conference;
  now: Date;
  zone: string;
  favorite: { active: boolean; disabled: boolean; onToggle: () => void };
  onSeries: () => void;
}) {
  const d = nextDeadline(c, now, true);
  const status = conferenceStatus(c, now);
  return (
    <article className="conference card" id={c.id}>
      <div className="card-main">
        <div className="eyebrow">
          <FavoriteButton name={`${c.series} ${c.year}`} {...favorite} />
          <span>{c.region}</span>
          <span
            className={
              'status ' +
              (status === '有投稿日期'
                ? 'green'
                : status === 'PDP 通道'
                  ? 'purple'
                  : '')
            }
          >
            {status}
          </span>
        </div>
        <h2>
          {c.series} <span>{c.year}</span>
        </h2>
        <p className="name">{c.name}</p>
        <p className="description">{c.description}</p>
        <div className="tags">
          {c.topics.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className="event-meta">
          <span>
            <CalendarDays size={15} />
            {c.start} — {c.end}
          </span>
          <span>⌖ {c.location}</span>
        </div>
        <button className="series-link" onClick={onSeries}>
          查看系列与往届，准备下一届
        </button>
      </div>
      <div className="deadline-box">
        <span className="eyebrow">
          {d?.label ||
            (['投稿已截止', '已结束'].includes(status) ? status : '投稿安排')}
        </span>
        <strong className={d ? '' : 'muted'}>
          {d
            ? countdown(d, now)
            : status === '已结束'
              ? '本届已结束'
              : status === '投稿已截止'
                ? '关注参会安排'
                : '待公布'}
        </strong>
        <span>{d ? formatDeadline(d, zone) : '展开查看各阶段时间'}</span>
        <small>
          {d?.at
            ? zone === 'Asia/Shanghai'
              ? '北京时间 UTC+8'
              : 'UTC 时间'
            : d?.date
              ? '日期级信息，不推定截止时刻'
              : '以本届官网通知为准'}
        </small>
        <External href={c.notice}>征稿 / 核心通知</External>
      </div>
      <details className="card-detail">
        <summary>
          投稿要求、完整时间线与官方链接 <span>＋</span>
        </summary>
        <div className="details-body">
          <h3>重要时间</h3>
          <div className="timeline">
            {c.deadlines.map((e, i) => (
              <div
                key={i}
                className={deadlineState(e, now) === 'past' ? 'past' : ''}
              >
                <span className="timeline-dot" />
                <div>
                  <b>{e.label}</b>
                  <p>{formatDeadline(e, zone)}</p>
                  {e.at && (
                    <small>
                      原始截止：{e.at} · {e.timezone}
                    </small>
                  )}
                  {e.note && <small>{e.note}</small>}
                </div>
                <External href={e.source}>来源</External>
              </div>
            ))}
          </div>
          <div className="detail-columns">
            <div>
              <h3>如何投稿</h3>
              <ol>
                {c.requirements.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ol>
            </div>
            <div>
              <h3>报告与发表</h3>
              <p>{c.publication}</p>
              <h3>举办地点</h3>
              <p>{c.venue}</p>
              <h3>本届提醒</h3>
              <p>{c.notes}</p>
            </div>
          </div>
          <div className="link-row">
            <CalendarDownload conferences={[c]} label="导出本届日历 (.ics)" />
            <External href={c.website}>会议官网</External>
            <External href={c.notice}>核心通知</External>
            {c.registration ? (
              <External href={c.registration}>注册入口 / 安排</External>
            ) : (
              <span className="muted">注册安排待公布</span>
            )}
          </div>
        </div>
      </details>
      <footer>
        <Evidence at={c.checkedAt} now={now} />
        <span>独立学术导航 · 官方信息优先</span>
      </footer>
    </article>
  );
}
export default function Home() {
  const [tab, setTab] = useState('conferences');
  const favorites = useFavorites(knownIds);
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [selectedSeriesId, setSelectedSeriesId] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const [topic, setTopic] = useState('全部方向');
  const [region, setRegion] = useState('全部地区');
  const [status, setStatus] = useState('全部状态');
  const [zone, setZone] = useState('Asia/Shanghai');
  const [system, setSystem] = useState('all');
  const [collection, setCollection] = useState('all');
  const [index, setIndex] = useState('all');
  const [domain, setDomain] = useState('all');
  const [year, setYear] = useState('all');
  const [level, setLevel] = useState('minor');
  const [quartile, setQuartile] = useState('all');
  const [evidence, setEvidence] = useState('all');
  const [sort, setSort] = useState('deadline');
  const [journalPageSize, setJournalPageSize] = useState(12);
  const [conferencePageSize, setConferencePageSize] = useState(12);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [compareIds, setCompareIds] = useState<string[]>([]);
  const [now, setNow] = useState(() => new Date(config.snapshotAt));
  useEffect(() => {
    const initial = setTimeout(() => setNow(new Date()), 0);
    const t = setInterval(() => setNow(new Date()), 60000);
    return () => {
      clearTimeout(initial);
      clearInterval(t);
    };
  }, []);
  useEffect(() => {
    const onHash = (event?: HashChangeEvent) => {
      const value = location.hash.slice(1);
      const isCatalogTab = [
        'conferences',
        'series',
        'journals',
        'events',
        'guide',
        'data',
      ].includes(value);
      // Content anchors move focus without resetting the current filters.
      if (event && !isCatalogTab) return;
      if (isCatalogTab) setTab(value);
      const filters = readFilterLink(location.search, {
        topics: topicVocabulary,
        domains: journalDomains,
        years: [
          ...new Set(
            journals.flatMap((j) => j.rankings.map((r) => String(r.year))),
          ),
        ],
      });
      setQuery(filters.query);
      setTopic(filters.topic);
      setRegion(filters.region);
      setStatus(filters.status);
      setZone(filters.zone);
      setSystem(filters.system);
      setCollection(filters.collection);
      setIndex(filters.index);
      setDomain(filters.domain);
      setYear(filters.year);
      setLevel(filters.level);
      setQuartile(filters.quartile);
      setEvidence(filters.evidence);
      setSort(filters.sort);
    };
    onHash();
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  function switchTab(value: unknown) {
    if (typeof value !== 'string') return;
    setTab(value);
    setSort('deadline');
    setQuery('');
    setTopic('全部方向');
    history.replaceState(null, '', location.pathname + '#' + value);
  }
  function reset() {
    setFavoritesOnly(false);
    setQuery('');
    setTopic('全部方向');
    setRegion('全部地区');
    setStatus('全部状态');
    setYear('all');
    setQuartile('all');
    setEvidence('all');
    setSystem('all');
    setCollection('all');
    setIndex('all');
    setDomain('all');
    setLevel('minor');
  }
  const topics = useMemo(
    () => [
      '全部方向',
      ...topicVocabulary.filter((topic) =>
        (tab === 'journals' ? journals : conferences).some((x) =>
          x.topics.includes(topic),
        ),
      ),
    ],
    [tab],
  );
  const filteredConfs = conferences
    .filter(
      (c) =>
        matchesText(c, query) &&
        (!favoritesOnly || favorites.ids.includes(c.id)) &&
        (topic === '全部方向' || c.topics.includes(topic)) &&
        (region === '全部地区' || region === c.region) &&
        conferenceStatusMatches(c, status, now),
    )
    .sort((a, b) =>
      sort === 'start'
        ? a.start.localeCompare(b.start)
        : Number(conferenceStatus(a, now) === '已结束') -
            Number(conferenceStatus(b, now) === '已结束') ||
          deadlineSortValue(
            nextDeadline(a, now, true) ?? { type: '', label: '', source: '' },
          ) -
            deadlineSortValue(
              nextDeadline(b, now, true) ?? { type: '', label: '', source: '' },
            ) ||
          a.start.localeCompare(b.start),
    );
  const filteredJournals = sortJournals(
    journals.filter(
      (j) =>
        matchesText(j, query) &&
        (!favoritesOnly || favorites.ids.includes(j.id)) &&
        (topic === '全部方向' || j.topics.includes(topic)) &&
        journalMatches(j, {
          collection,
          index,
          domain,
          system,
          year,
          level,
          quartile,
          officialOnly: evidence === 'official',
        }),
    ),
    sort,
  );
  const upcoming = conferences
    .flatMap((c) =>
      c.deadlines
        .filter((d) => ['upcoming', 'today'].includes(deadlineState(d, now)))
        .map((d) => ({ c, d })),
    )
    .sort((a, b) => deadlineSortValue(a.d) - deadlineSortValue(b.d))
    .slice(0, 4);
  const years = [
    ...new Set(
      journals.flatMap((j) =>
        j.rankings
          .filter((r) => r.system === system)
          .map((r) => String(r.year)),
      ),
    ),
  ]
    .sort()
    .reverse();
  const activeFilters = [
    ...(query ? [{ label: `搜索：${query}`, clear: () => setQuery('') }] : []),
    ...(topic !== '全部方向'
      ? [{ label: topic, clear: () => setTopic('全部方向') }]
      : []),
    ...(favoritesOnly
      ? [{ label: '只看我的关注', clear: () => setFavoritesOnly(false) }]
      : []),
    ...(tab === 'conferences'
      ? [
          ...(region !== '全部地区'
            ? [{ label: region, clear: () => setRegion('全部地区') }]
            : []),
          ...(status !== '全部状态'
            ? [{ label: status, clear: () => setStatus('全部状态') }]
            : []),
        ]
      : [
          ...(collection !== 'all'
            ? [
                {
                  label: collection === 'ranked' ? '1/2 区精选' : 'EI 工程补充',
                  clear: () => setCollection('all'),
                },
              ]
            : []),
          ...(index !== 'all'
            ? [
                {
                  label: `索引：${index === 'both' ? 'SCI 与 EI 双收录' : index === 'unverified' ? '待核验' : index}`,
                  clear: () => setIndex('all'),
                },
              ]
            : []),
          ...(domain !== 'all'
            ? [{ label: domain, clear: () => setDomain('all') }]
            : []),
          ...(system !== 'all'
            ? [
                {
                  label:
                    system === 'CAS'
                      ? `中科院${level === 'major' ? '大类' : '小类'}`
                      : 'JCR',
                  clear: () => {
                    setSystem('all');
                    setYear('all');
                    setQuartile('all');
                    setEvidence('all');
                  },
                },
                ...(year !== 'all'
                  ? [{ label: `版本：${year}`, clear: () => setYear('all') }]
                  : []),
                ...(quartile !== 'all'
                  ? [
                      {
                        label:
                          system === 'JCR' ? `Q${quartile}` : `${quartile} 区`,
                        clear: () => setQuartile('all'),
                      },
                    ]
                  : []),
                ...(evidence !== 'all'
                  ? [
                      {
                        label: '仅官方 / 推算',
                        clear: () => setEvidence('all'),
                      },
                    ]
                  : []),
              ]
            : []),
        ]),
  ];
  return (
    <>
      <a className="skip" href="#content">
        跳转到内容
      </a>
      <header className="topbar">
        <a
          className="brand"
          href="#conferences"
          onClick={() => switchTab('conferences')}
        >
          <span className="brand-icon">光</span>
          <span>
            光研导航<small>OPTICS SCHOLAR HUB</small>
          </span>
        </a>
        <div className="header-note">开放数据 · 共同维护</div>
        {config.repository ? (
          <External href={config.repository}>
            <Code2 size={17} />
            GitHub
          </External>
        ) : (
          <a href="#data" onClick={() => switchTab('data')}>
            <Code2 size={17} />
            开源项目
          </a>
        )}
      </header>
      <main className="shell" id="content" tabIndex={-1}>
        <div className="intro">
          <div>
            <div className="section-kicker">RESEARCH, IN FOCUS</div>
            <h1>把时间留给研究。</h1>
            <p>光学期刊、学术会议与投稿要求，一站查阅。</p>
          </div>
          <div className="stats">
            <div>
              <strong>{journals.length.toString().padStart(2, '0')}</strong>
              <span>精选期刊</span>
            </div>
            <div>
              <strong>{conferences.length.toString().padStart(2, '0')}</strong>
              <span>会议届次</span>
            </div>
            <div>
              <strong>
                {conferences
                  .filter((c) =>
                    ['有投稿日期', 'PDP 通道'].includes(
                      conferenceStatus(c, now),
                    ),
                  )
                  .length.toString()
                  .padStart(2, '0')}
              </strong>
              <span>有未来投稿日期</span>
            </div>
          </div>
        </div>
        <nav
          aria-label="分区官方查询"
          className="mb-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm"
        >
          <span className="text-muted-foreground">分区官方平台</span>
          <External href="https://www.fenqubiao.com/">
            中科院期刊分区表
          </External>
          <External href="https://jcr.clarivate.com/">
            JCR · Journal Citation Reports
          </External>
          <span className="text-xs text-muted-foreground">
            按年度和学科查询，访问可能需要机构授权或登录。
          </span>
        </nav>
        <CatalogUpdate
          tab={tab}
          filters={{
            query,
            topic,
            region,
            status,
            zone,
            system,
            collection,
            index,
            domain,
            year,
            level,
            quartile,
            evidence,
            sort,
          }}
        />
        <Tabs value={tab} onValueChange={switchTab}>
          <TabsList className="main-tabs" variant="line">
            <TabsTrigger value="conferences">
              <CalendarDays />
              会议日历
            </TabsTrigger>
            <TabsTrigger value="journals">
              <BookOpen />
              期刊目录
            </TabsTrigger>
            <TabsTrigger value="series">系列与往届</TabsTrigger>
            <TabsTrigger value="guide">
              <Microscope />
              投稿入门
            </TabsTrigger>
            <TabsTrigger value="events">展会与论坛</TabsTrigger>
            <TabsTrigger value="data">
              <CircleHelp />
              数据与共建
            </TabsTrigger>
          </TabsList>
          {['conferences', 'journals'].includes(tab) && (
            <div className="workspace">
              <aside
                className={`filters ${filtersOpen ? 'filters-open' : 'filters-closed'}`}
              >
                <h2>
                  <SlidersHorizontal size={17} />
                  筛选范围<button onClick={reset}>重置</button>
                </h2>
                <button
                  className="filter-toggle"
                  aria-expanded={filtersOpen}
                  aria-controls="filter-controls"
                  onClick={() => setFiltersOpen(!filtersOpen)}
                >
                  {filtersOpen ? '收起筛选' : '展开筛选'} ·{' '}
                  {activeFilters.length} 项条件
                </button>
                <div className="filter-controls" id="filter-controls">
                  <div className="filter-label">研究方向</div>
                  <div className="topic-list">
                    {topics.map((t) => (
                      <button
                        key={t}
                        className={topic === t ? 'selected' : ''}
                        aria-pressed={topic === t}
                        onClick={() => setTopic(t)}
                      >
                        {t}
                        <span>
                          {t === '全部方向'
                            ? ''
                            : (tab === 'journals'
                                ? journals
                                : conferences
                              ).filter((x) => x.topics.includes(t)).length}
                        </span>
                      </button>
                    ))}
                  </div>
                  {tab === 'conferences' ? (
                    <>
                      <Pick
                        label="举办地区"
                        value={region}
                        onChange={setRegion}
                        items={options(['全部地区', '中国境内', '海外'])}
                      />
                      <Pick
                        label="投稿状态"
                        value={status}
                        onChange={setStatus}
                        items={options([
                          '全部状态',
                          '未结束',
                          '有投稿日期',
                          'PDP 通道',
                          '投稿已截止',
                          '已结束',
                          '待公布',
                        ])}
                      />
                      <Pick
                        label="精确截止时间显示"
                        value={zone}
                        onChange={setZone}
                        items={[
                          { value: 'Asia/Shanghai', label: '北京时间 UTC+8' },
                          { value: 'UTC', label: '世界协调时 UTC' },
                        ]}
                      />
                    </>
                  ) : (
                    <>
                      <Pick
                        label="收录范围"
                        value={collection}
                        onChange={(v) => {
                          setCollection(v);
                          setSystem('all');
                          setYear('all');
                          setQuartile('all');
                          setEvidence('all');
                        }}
                        items={[
                          { value: 'all', label: '全部已收录期刊' },
                          { value: 'ranked', label: '1/2 区精选' },
                          { value: 'ei', label: 'EI 工程补充' },
                        ]}
                      />
                      <Pick
                        label="索引收录"
                        value={index}
                        onChange={setIndex}
                        items={[
                          { value: 'all', label: '全部索引状态' },
                          { value: 'SCIE', label: 'SCI（SCIE）' },
                          { value: 'ESCI', label: 'ESCI（独立索引）' },
                          { value: 'EI_COMPENDEX', label: 'EI（Compendex）' },
                          { value: 'both', label: 'SCI 与 EI 双收录' },
                          { value: 'unverified', label: '索引待核验' },
                        ]}
                      />
                      <Pick
                        label="学科领域"
                        value={domain}
                        onChange={setDomain}
                        items={[
                          { value: 'all', label: '全部领域' },
                          ...options(
                            journalDomains.filter((d) =>
                              journals.some((j) => j.domains.includes(d)),
                            ),
                          ),
                        ]}
                      />
                      <Pick
                        label="分区体系"
                        value={system}
                        onChange={(v) => {
                          setSystem(v);
                          setYear('all');
                        }}
                        items={[
                          { value: 'all', label: '不限分区（含 EI 补充）' },
                          { value: 'JCR', label: 'JCR 学科分区' },
                          { value: 'CAS', label: '中科院分区' },
                        ]}
                      />
                      {system !== 'all' && (
                        <>
                          <Pick
                            label="版本年份"
                            value={year}
                            onChange={setYear}
                            items={[
                              { value: 'all', label: '所有已收录版本' },
                              ...options(years),
                            ]}
                          />
                          {system === 'CAS' && (
                            <Pick
                              label="中科院分类"
                              value={level}
                              onChange={setLevel}
                              items={[
                                { value: 'minor', label: '小类学科' },
                                { value: 'major', label: '大类学科' },
                              ]}
                            />
                          )}
                          <Pick
                            label="分区范围"
                            value={quartile}
                            onChange={setQuartile}
                            items={[
                              { value: 'all', label: '全部分区（1–4 区）' },
                              {
                                value: '1',
                                label: system === 'JCR' ? 'Q1' : '1 区',
                              },
                              {
                                value: '2',
                                label: system === 'JCR' ? 'Q2' : '2 区',
                              },
                              {
                                value: '3',
                                label: system === 'JCR' ? 'Q3' : '3 区',
                              },
                              {
                                value: '4',
                                label: system === 'JCR' ? 'Q4' : '4 区',
                              },
                            ]}
                          />
                          <Pick
                            label="来源范围"
                            value={evidence}
                            onChange={setEvidence}
                            items={[
                              { value: 'all', label: '含标注的第三方参考' },
                              {
                                value: 'official',
                                label: '仅官方披露 / 排名推算',
                              },
                            ]}
                          />
                        </>
                      )}
                    </>
                  )}
                  <div className="filter-tip">
                    <Sparkles size={18} />
                    <p>
                      {tab === 'conferences'
                        ? '有截止日期不代表投稿系统已开放；请从本届官网确认入口。PDP 面向新近突破成果，不代表普通论文延期。'
                        : 'SCI/EI 是索引，JCR/中科院是分区。选择分区条件会排除无匹配分区的 EI 期刊。'}
                    </p>
                    <button onClick={() => switchTab('guide')}>
                      了解投稿规则 →
                    </button>
                  </div>
                </div>
              </aside>
              <section className="results">
                {tab === 'conferences' && (
                  <div className="active-filters" aria-label="会议快捷筛选">
                    {['全部状态', '未结束', '有投稿日期', '已结束'].map(
                      (value) => (
                        <button
                          key={value}
                          aria-pressed={status === value}
                          onClick={() => setStatus(value)}
                        >
                          {value === '全部状态'
                            ? '全部届次'
                            : value === '未结束'
                              ? '未结束会议'
                              : value === '已结束'
                                ? '历史会议'
                                : '有投稿日期'}
                        </button>
                      ),
                    )}
                  </div>
                )}
                {!!activeFilters.length && (
                  <div className="active-filters" aria-label="当前筛选条件">
                    <span>当前条件</span>
                    {activeFilters.map(({ label, clear }) => (
                      <button
                        key={label}
                        onClick={clear}
                        aria-label={`清除条件：${label}`}
                      >
                        {label} ×
                      </button>
                    ))}
                    <button onClick={reset}>清除全部条件</button>
                  </div>
                )}
                <div className="favorites-toolbar">
                  <label>
                    <input
                      type="checkbox"
                      checked={favoritesOnly}
                      disabled={!favorites.ready}
                      onChange={(e) => setFavoritesOnly(e.target.checked)}
                    />{' '}
                    只看我的关注
                  </label>
                  <span>
                    {favorites.ids.length} 项 · 保存在本浏览器，不随分享链接发送
                    {favorites.storageFailed
                      ? '；存储不可用，本次关注仅临时保留'
                      : ''}
                  </span>
                </div>
                <FilterShare
                  tab={tab}
                  filters={{
                    query,
                    topic,
                    region,
                    status,
                    zone,
                    system,
                    collection,
                    index,
                    domain,
                    year,
                    level,
                    quartile,
                    evidence,
                    sort,
                  }}
                />
                <div className="search">
                  <Search size={19} />
                  <Input
                    aria-label="搜索目录"
                    placeholder={
                      tab === 'conferences'
                        ? '搜索会议名称、缩写、城市或关键词…'
                        : '搜索期刊名称、缩写或研究方向…'
                    }
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  {query && (
                    <button aria-label="清除搜索" onClick={() => setQuery('')}>
                      ×
                    </button>
                  )}
                </div>
                <div className="result-bar">
                  <span aria-live="polite">
                    找到{' '}
                    <b>
                      {tab === 'conferences'
                        ? filteredConfs.length
                        : filteredJournals.length}
                    </b>{' '}
                    {tab === 'conferences' ? '个会议' : '本期刊'}
                  </span>
                  {tab === 'conferences' ? (
                    <Pick
                      label="排序"
                      value={sort}
                      onChange={setSort}
                      items={[
                        { value: 'deadline', label: '投稿截止优先' },
                        { value: 'start', label: '举办日期升序' },
                      ]}
                    />
                  ) : (
                    <Pick
                      label="期刊排序"
                      value={sort === 'start' ? 'deadline' : sort}
                      onChange={setSort}
                      items={[
                        { value: 'deadline', label: '目录顺序' },
                        { value: 'name', label: '名称 A–Z' },
                        { value: 'checked', label: '条目核验日期从新到旧' },
                      ]}
                    />
                  )}
                </div>
                <TabsContent value="conferences">
                  <div className="calendar-toolbar">
                    <CalendarDownload
                      conferences={filteredConfs}
                      label="导出当前会议列表 (.ics)"
                    />
                    <span>
                      包含会期与已知截止（含历史日期）；跳过未知日期。导出后不自动更新。
                    </span>
                  </div>
                  <div className="notice">
                    <Clock3 size={17} />
                    <p>
                      精确时间可切换时区；仅公布日期的条目不推定截止时刻。临近截止，请打开本届官方通知确认。
                    </p>
                  </div>
                  <CatalogPagination
                    kind="会议"
                    size={conferencePageSize}
                    onSizeChange={setConferencePageSize}
                    key={JSON.stringify([
                      query,
                      topic,
                      region,
                      status,
                      sort,
                      favoritesOnly,
                      favoritesOnly ? favorites.ids : [],
                    ])}
                  >
                    {filteredConfs.map((c) => (
                      <ConferenceCard
                        key={c.id}
                        c={c}
                        now={now}
                        zone={zone}
                        favorite={{
                          active: favorites.ids.includes(c.id),
                          disabled: !favorites.ready,
                          onToggle: () => favorites.toggle(c.id),
                        }}
                        onSeries={() => {
                          setSelectedSeriesId(
                            conferenceSeries.find((s) =>
                              s.editionIds.includes(c.id),
                            )?.id ?? null,
                          );
                          switchTab('series');
                        }}
                      />
                    ))}
                  </CatalogPagination>
                  {!filteredConfs.length && (
                    <Empty>
                      <EmptyHeader>
                        <EmptyTitle>没有匹配的会议</EmptyTitle>
                        <EmptyDescription>
                          试试其他关键词，或放宽方向与状态筛选。
                        </EmptyDescription>
                      </EmptyHeader>
                      <button className="primary-button" onClick={reset}>
                        重置筛选
                      </button>
                    </Empty>
                  )}
                </TabsContent>
                <TabsContent value="journals">
                  <JournalCompare
                    journals={compareIds.flatMap((id) =>
                      journals.filter((j) => j.id === id),
                    )}
                    onRemove={(id) =>
                      setCompareIds((ids) =>
                        ids.filter((value) => value !== id),
                      )
                    }
                    onClear={() => setCompareIds([])}
                  />
                  <div className="notice">
                    <BookOpen size={17} />
                    <p>
                      SCI/SCIE 与 EI
                      独立核验，可同时收录；出版社声明与数据库核实分别标注。分区标签注明年份与学科。EI
                      工程补充允许暂无分区；JCR / 中科院支持 1–4 区筛选，
                      仅匹配所选年份与分类的已有记录，未核实不代表未收录。
                    </p>
                  </div>
                  <CatalogPagination
                    size={journalPageSize}
                    onSizeChange={setJournalPageSize}
                    key={JSON.stringify([
                      query,
                      topic,
                      collection,
                      index,
                      domain,
                      system,
                      year,
                      level,
                      quartile,
                      evidence,
                      sort,
                      favoritesOnly,
                      favoritesOnly ? favorites.ids : [],
                    ])}
                  >
                    {filteredJournals.map((j) => (
                      <JournalCard
                        key={j.id}
                        j={j}
                        now={now}
                        system={system}
                        year={year}
                        level={level}
                        quartile={quartile}
                        officialOnly={evidence === 'official'}
                        compare={{
                          active: compareIds.includes(j.id),
                          disabled:
                            compareIds.length >= 3 &&
                            !compareIds.includes(j.id),
                          onToggle: () =>
                            setCompareIds((ids) =>
                              ids.includes(j.id)
                                ? ids.filter((id) => id !== j.id)
                                : ids.length < 3
                                  ? [...ids, j.id]
                                  : ids,
                            ),
                        }}
                        favorite={{
                          active: favorites.ids.includes(j.id),
                          disabled: !favorites.ready,
                          onToggle: () => favorites.toggle(j.id),
                        }}
                      />
                    ))}
                  </CatalogPagination>
                  {!filteredJournals.length && (
                    <Empty>
                      <EmptyHeader>
                        <EmptyTitle>暂无匹配的期刊</EmptyTitle>
                        <EmptyDescription>
                          请放宽索引、领域或分区条件。待核验不代表未收录；查看
                          EI 工程补充可将分区改为“不限分区”。
                        </EmptyDescription>
                      </EmptyHeader>
                      <button className="primary-button" onClick={reset}>
                        重置筛选
                      </button>
                    </Empty>
                  )}
                </TabsContent>
              </section>
              <aside className="right-rail">
                <section>
                  <span className="section-kicker">UP NEXT</span>
                  <h2>接下来的时间点</h2>
                  <p className="muted">投稿、注册与终稿分别提醒</p>
                  <div className="upcoming">
                    {upcoming.map(({ c, d }, i) => (
                      <div key={c.id + i}>
                        <span className="mini-date">
                          {(d.date || d.at || '')
                            .slice(5, 10)
                            .replace('-', ' / ')}
                        </span>
                        <b>
                          {c.series} {c.year}
                        </b>
                        <p>{d.label}</p>
                        <External href={d.source}>官方通知</External>
                      </div>
                    ))}
                  </div>
                </section>
                <section className="newcomer">
                  <BookOpen size={24} />
                  <h2>第一次投稿？</h2>
                  <p>
                    从选刊、读征稿通知到提交和报告，先弄清楚每一步需要什么。
                  </p>
                  <button onClick={() => switchTab('guide')}>
                    阅读新生指南 <ArrowUpRight size={16} />
                  </button>
                </section>
                <p className="rail-note">
                  这是社区维护的精选目录，不是官方排名或收录保证。
                  <br />
                  数据核验日期见各条目
                </p>
              </aside>
            </div>
          )}
          <TabsContent value="guide">
            <Guide />
          </TabsContent>
          <TabsContent value="events">
            <EventsDirectory now={now} />
          </TabsContent>
          <TabsContent value="series">
            <ConferenceSeriesDirectory
              series={conferenceSeries}
              conferences={conferences}
              now={now}
              selectedId={selectedSeriesId}
              onClear={() => setSelectedSeriesId(null)}
            />
          </TabsContent>
          <TabsContent value="data">
            <DataNotes />
          </TabsContent>
        </Tabs>
        <footer className="site-footer">
          <span>光研导航 · 为光学研究者共建</span>
          <span>来源可追溯，未知不猜测。</span>
          <External href="https://github.com/ccfddl/ccf-deadlines">
            灵感来自 CCF-Deadlines
          </External>
        </footer>
      </main>
    </>
  );
}
