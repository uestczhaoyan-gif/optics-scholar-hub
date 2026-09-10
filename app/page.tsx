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
import config from '@/data/site.json';
import {
  conferenceStatus,
  nextDeadline,
  countdown,
  formatDeadline,
  deadlineState,
  deadlineSortValue,
  matchesText,
  journalMatches,
  journalDomains,
  stale,
  type Conference,
  type Journal,
} from '@/lib/catalog';
import { Guide, DataNotes } from './resources';
import { JournalCard } from '@/components/journal-card';
const conferences = rawConferences as Conference[];
const journals = rawJournals as Journal[];
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
}: {
  c: Conference;
  now: Date;
  zone: string;
}) {
  const d = nextDeadline(c, now, true);
  const status = conferenceStatus(c, now);
  return (
    <article className="conference card" id={c.id}>
      <div className="card-main">
        <div className="eyebrow">
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
    const onHash = () => {
      const value = location.hash.slice(1);
      if (['conferences', 'journals', 'guide', 'data'].includes(value))
        setTab(value);
    };
    onHash();
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  function switchTab(value: unknown) {
    if (typeof value !== 'string') return;
    setTab(value);
    setQuery('');
    setTopic('全部方向');
    history.replaceState(null, '', '#' + value);
  }
  function reset() {
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
      ...new Set(
        (tab === 'journals' ? journals : conferences).flatMap((x) => x.topics),
      ),
    ],
    [tab],
  );
  const filteredConfs = conferences
    .filter(
      (c) =>
        matchesText(c, query) &&
        (topic === '全部方向' || c.topics.includes(topic)) &&
        (region === '全部地区' || region === c.region) &&
        (status === '全部状态' ||
          (status === '有投稿日期'
            ? ['有投稿日期', 'PDP 通道'].includes(conferenceStatus(c, now))
            : conferenceStatus(c, now) === status)),
    )
    .sort((a, b) =>
      sort === 'start'
        ? a.start.localeCompare(b.start)
        : deadlineSortValue(
            nextDeadline(a, now, true) ?? { type: '', label: '', source: '' },
          ) -
            deadlineSortValue(
              nextDeadline(b, now, true) ?? { type: '', label: '', source: '' },
            ) || a.start.localeCompare(b.start),
    );
  const filteredJournals = journals.filter(
    (j) =>
      matchesText(j, query) &&
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
      <main className="shell" id="content">
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
            <TabsTrigger value="guide">
              <Microscope />
              投稿入门
            </TabsTrigger>
            <TabsTrigger value="data">
              <CircleHelp />
              数据与共建
            </TabsTrigger>
          </TabsList>
          {['conferences', 'journals'].includes(tab) && (
            <div className="workspace">
              <aside className="filters">
                <h2>
                  <SlidersHorizontal size={17} />
                  筛选范围<button onClick={reset}>重置</button>
                </h2>
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
                            { value: 'all', label: '1 区 + 2 区' },
                            {
                              value: '1',
                              label: system === 'JCR' ? 'Q1' : '1 区',
                            },
                            {
                              value: '2',
                              label: system === 'JCR' ? 'Q2' : '2 区',
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
              </aside>
              <section className="results">
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
                    <span>
                      {system === 'all'
                        ? '按索引、领域与收录范围匹配'
                        : '同时按所选分区匹配'}
                    </span>
                  )}
                </div>
                <TabsContent value="conferences">
                  <div className="notice">
                    <Clock3 size={17} />
                    <p>
                      精确时间可切换时区；仅公布日期的条目不推定截止时刻。临近截止，请打开本届官方通知确认。
                    </p>
                  </div>
                  <div className="conference-list">
                    {filteredConfs.map((c) => (
                      <ConferenceCard key={c.id} c={c} now={now} zone={zone} />
                    ))}
                  </div>
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
                  <div className="notice">
                    <BookOpen size={17} />
                    <p>
                      SCI/SCIE 与 EI
                      独立核验，可同时收录；出版社声明与数据库核实分别标注。分区标签注明年份与学科。EI
                      工程补充允许暂无分区；选择 JCR / 中科院筛选后仅匹配 1 / 2
                      区记录。
                    </p>
                  </div>
                  <div className="journal-grid">
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
                      />
                    ))}
                  </div>
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
                  内容快照：{config.snapshotAt.slice(0, 10)}
                </p>
              </aside>
            </div>
          )}
          <TabsContent value="guide">
            <Guide />
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
