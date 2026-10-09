'use client';
/* eslint-disable jsx-a11y/no-noninteractive-tabindex -- The overflow region must support keyboard scrolling. */
import { useState, type ReactNode } from 'react';
import { indexLabels, type Journal } from '@/lib/catalog';
import { External } from '@/components/external-link';

export function JournalCompare({
  journals,
  onRemove,
  onClear,
}: {
  journals: Journal[];
  onRemove: (id: string) => void;
  onClear: () => void;
}) {
  const [open, setOpen] = useState(false);
  if (!journals.length)
    return (
      <p className="muted compare-hint">
        可在期刊卡片选择“加入对比”，最多同时比较 3 本。
      </p>
    );
  const rows: { label: string; render: (j: Journal) => ReactNode }[] = [
    {
      label: '范围与方向',
      render: (j) => (
        <>
          <p>{j.description}</p>
          <p>{j.topics.join(' · ')}</p>
        </>
      ),
    },
    {
      label: '索引证据',
      render: (j) =>
        j.indexes.map((i) => (
          <p key={i.database}>
            {indexLabels[i.database]}：
            {i.status === 'confirmed'
              ? '有收录依据'
              : i.status === 'discontinued'
                ? '历史收录 / 已停收'
                : '待核验'}
            {i.checkedAt && ` · ${i.checkedAt}`}
            {i.source && (
              <>
                {' '}
                · <External href={i.source}>来源</External>
              </>
            )}
          </p>
        )),
    },
    {
      label: '已收录分区记录',
      render: (j) =>
        j.rankings.length
          ? j.rankings.map((r, i) => (
              <p key={i}>
                {r.system}{' '}
                {r.system === 'JCR' ? `Q${r.quartile}` : `${r.quartile} 区`} ·{' '}
                {r.year} ·{' '}
                {r.level === 'major'
                  ? '大类'
                  : r.level === 'minor'
                    ? '小类'
                    : '学科'}{' '}
                · {r.category}
                {r.metricYear && ` · 指标年 ${r.metricYear}`}
                <br />
                {r.evidence === 'official'
                  ? '官方披露'
                  : r.evidence === 'derived'
                    ? '排名推算'
                    : '第三方参考'}{' '}
                · <External href={r.source}>来源</External>
              </p>
            ))
          : '暂无已核实分区',
    },
    {
      label: '投稿准备',
      render: (j) => (
        <details>
          <summary>展开 {j.requirements.length} 项要求</summary>
          <ul>
            {j.requirements.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </details>
      ),
    },
    { label: '出版与费用', render: (j) => j.publishing },
    { label: '处理时间', render: (j) => j.schedule },
    { label: '条目核验日期', render: (j) => j.checkedAt },
    {
      label: '官方入口',
      render: (j) => (
        <>
          <External href={j.website}>期刊官网</External>
          <br />
          <External href={j.guide}>作者指南 / 投稿</External>
        </>
      ),
    },
  ];
  return (
    <section className="compare-panel" aria-label="期刊对比">
      <div className="active-filters">
        <strong>已选 {journals.length} / 3 本</strong>
        {journals.map((j) => (
          <button
            key={j.id}
            onClick={() => onRemove(j.id)}
            aria-label={`从对比移除 ${j.name}`}
          >
            {j.name} ×
          </button>
        ))}
        <button
          disabled={journals.length < 2}
          aria-expanded={open && journals.length >= 2}
          onClick={() => setOpen(!open)}
        >
          {open ? '收起对比' : '查看对比'}
        </button>
        <button onClick={onClear}>清空对比</button>
      </div>
      <p className="muted">
        跨页和筛选后保留所选期刊，仅本次浏览有效。分区按各自版本与学科展示，不据此自动推荐投稿。
      </p>
      {open && journals.length >= 2 && (
        <section
          className="compare-scroll"
          tabIndex={0}
          aria-label="期刊对比表，可横向滚动"
        >
          <table>
            <caption>期刊对比 · 分区与索引独立，未知信息请查官网</caption>
            <thead>
              <tr>
                <th scope="col">比较项目</th>
                {journals.map((j) => (
                  <th scope="col" key={j.id}>
                    {j.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  {journals.map((j) => (
                    <td key={j.id}>{row.render(j)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
    </section>
  );
}
