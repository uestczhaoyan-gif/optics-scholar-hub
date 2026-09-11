import { External } from './external-link';
import { FavoriteButton } from './favorites';
import {
  hasIndex,
  indexLabels,
  previewRankings,
  stale,
  type Journal,
  type Ranking,
} from '@/lib/catalog';

const rankName = (r: Ranking) =>
  r.system === 'JCR'
    ? 'JCR'
    : r.level === 'major'
      ? '中科院大类'
      : '中科院小类';
const rankEvidence = (r: Ranking) =>
  r.evidence === 'official'
    ? '官方披露'
    : r.evidence === 'derived'
      ? '排名推算'
      : '第三方参考';

export function JournalCard({
  j,
  now,
  system,
  year,
  level,
  quartile,
  officialOnly,
  favorite,
}: {
  j: Journal;
  now: Date;
  system: string;
  year: string;
  level: string;
  quartile: string;
  officialOnly: boolean;
  favorite: { active: boolean; disabled: boolean; onToggle: () => void };
}) {
  const preview = previewRankings(
    j,
    system,
    year,
    level,
    quartile,
    officialOnly,
  );
  const firstBySystem = preview.filter(
    (r, i, rows) => rows.findIndex((x) => x.system === r.system) === i,
  );
  const shown = [
    ...firstBySystem,
    ...preview.filter((r) => !firstBySystem.includes(r)),
  ].slice(0, 3);
  return (
    <article className="journal card" id={j.id}>
      <FavoriteButton name={j.name} {...favorite} />
      <div className="journal-head">
        <div className="journal-monogram">{j.abbr}</div>
        <div>
          <span className="eyebrow">{j.publisher}</span>
          <h2>{j.name}</h2>
        </div>
      </div>
      <p className="description">{j.description}</p>
      <div className="journal-labels" aria-label="期刊索引与收录范围">
        {j.indexes.map((i) => (
          <span key={i.database} className={`index-badge ${i.status}`}>
            {indexLabels[i.database]}
            {i.status === 'unverified'
              ? ' · 待核验'
              : i.status === 'discontinued'
                ? ' · 已停收'
                : i.evidence === 'publisher'
                  ? ' · 出版社声明'
                  : ' · 数据库核实'}
            {i.checkedAt && (
              <small>
                {i.checkedAt}
                {stale(i.checkedAt, now) ? ' · 请复核' : ''}
              </small>
            )}
          </span>
        ))}
        {j.rankings.some((r) => r.quartile <= 2) && (
          <span className="collection-badge">1/2 区精选</span>
        )}
        {hasIndex(j, 'EI_COMPENDEX') && (
          <span className="collection-badge">EI 工程补充</span>
        )}
      </div>
      <div className="journal-ranks" aria-label="期刊分区标签">
        {shown.map((r) => (
          <div
            key={[r.system, r.year, r.level, r.category].join('|')}
            className="rank-badge"
          >
            <b>
              {rankName(r)}{' '}
              {r.system === 'JCR' ? `Q${r.quartile}` : `${r.quartile} 区`}
            </b>
            <span>
              {r.year} · {r.category}
            </span>
            <small>
              {rankEvidence(r)}
              {r.metricYear ? ` · 指标年 ${r.metricYear}` : ''}
            </small>
          </div>
        ))}
        {!shown.length && (
          <span className="muted">分区待核验 · 无匹配的分区记录</span>
        )}
        {['JCR', 'CAS']
          .filter((kind) => !preview.some((r) => r.system === kind))
          .map(
            (kind) =>
              shown.length > 0 && (
                <span className="muted" key={kind}>
                  {kind === 'CAS' ? '中科院' : 'JCR'}：无匹配记录
                </span>
              ),
          )}
      </div>
      <div className="journal-labels domain-tags" aria-label="期刊领域">
        {j.domains.map((d) => (
          <span key={d}>{d}</span>
        ))}
      </div>
      <div className="tags" aria-label="研究方向">
        {j.topics.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
      <div className="link-row journal-links">
        <External href={j.website}>期刊官网</External>
        <External href={j.guide}>作者指南 / 投稿</External>
      </div>
      <details className="card-detail">
        <summary>
          索引证据、
          {j.rankings.length > shown.length
            ? `另有 ${j.rankings.length - shown.length} 条分区、`
            : ''}
          投稿说明 <span>＋</span>
        </summary>
        <div className="details-body">
          <h3>索引与身份</h3>
          <p className="muted">
            ISSN：{j.issn || '待核验'} · eISSN：{j.eissn || '待核验'}
            。索引与分区独立；期刊收录不代表每篇文章均已检索。
          </p>
          <div className="ranking-list">
            {j.indexes.map((i) => (
              <div key={i.database}>
                <b>{indexLabels[i.database]}</b>
                <span>
                  {i.status === 'confirmed'
                    ? '有收录依据'
                    : i.status === 'discontinued'
                      ? '历史收录 / 已停收'
                      : '待核验，不表示未收录'}
                </span>
                <small>
                  {i.evidence === 'database'
                    ? '数据库核实'
                    : i.evidence === 'publisher'
                      ? '出版社声明，尚未通过数据库复核'
                      : i.evidence === 'secondary'
                        ? '第三方参考'
                        : '暂无核实依据'}{' '}
                  · {i.checkedAt || '未核验'}
                </small>
                <small>
                  覆盖起止：{i.coverageStart || '未核实'} —{' '}
                  {i.coverageEnd || '未核实'}。{i.note}
                </small>
                {i.source && <External href={i.source}>索引来源</External>}
              </div>
            ))}
          </div>
          <h3>全部分区记录</h3>
          <p className="muted">
            大类、小类与年份独立。第三方参考须通过学校数据库复核。
          </p>
          {!j.rankings.length && (
            <p>尚无已核实分区；本刊按 EI 工程补充范围收录。</p>
          )}
          <div className="ranking-list">
            {j.rankings.map((r, i) => (
              <div key={i}>
                <b>
                  {rankName(r)} ·{' '}
                  {r.system === 'JCR' ? `Q${r.quartile}` : `${r.quartile} 区`}
                </b>
                <span>{r.category}</span>
                <small>
                  {r.edition} · {r.year}
                  {r.metricYear ? `（指标年 ${r.metricYear}）` : ''} ·{' '}
                  {rankEvidence(r)}
                  {r.evidence === 'derived' ? ` ${r.rank}/${r.total}` : ''}
                </small>
                <External href={r.source}>分区来源</External>
              </div>
            ))}
          </div>
          {!!j.scopeExamples?.length && (
            <>
              <h3>光学相关发表样例</h3>
              <p className="muted">
                中文概述用于判断研究范围，不代表类似稿件保证录用。
              </p>
              <ul>
                {j.scopeExamples.map((example) => (
                  <li key={example.source}>
                    <External href={example.source}>{example.title}</External>
                    <p>
                      {example.publishedAt} 首次发表 · {example.relevance}
                    </p>
                  </li>
                ))}
              </ul>
            </>
          )}
          <h3>投稿准备</h3>
          <ul>
            {j.requirements.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
          <p>
            <b>时间：</b>
            {j.schedule}
          </p>
          <p>
            <b>出版与费用：</b>
            {j.publishing}
          </p>
        </div>
      </details>
      <footer>
        <span className={stale(j.checkedAt, now) ? 'age stale' : 'age'}>
          条目核验 {j.checkedAt}
          {stale(j.checkedAt, now) ? ' · 超过 30 天' : ''}；索引核验日期见标签
        </span>
      </footer>
    </article>
  );
}
