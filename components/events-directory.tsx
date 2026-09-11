'use client';
import { useState } from 'react';
import events from '@/data/events.json';
import { Input } from '@/components/ui/input';
import { External } from '@/components/external-link';

export function EventsDirectory({ now }: { now: Date }) {
  const [query, setQuery] = useState('');
  const today = now.toLocaleDateString('sv-SE', { timeZone: 'Asia/Shanghai' });
  const visible = events.filter((e) =>
    `${e.name} ${e.location} ${e.description} ${e.topics.join(' ')}`
      .toLowerCase()
      .includes(query.trim().toLowerCase()),
  );
  return (
    <section className="resource-page">
      <h2>展会与论坛</h2>
      <p>
        补充参观、听会与行业交流机会。展览、产业论坛和历史学术论坛在此单独列出，不计入论文会议数量，也不承诺论文出版或检索。
      </p>
      <Input
        aria-label="搜索展会与论坛"
        placeholder="搜索活动、方向或城市"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <p>共 {visible.length} 项活动（含母展及其子论坛）。</p>
      <div className="guide-grid">
        {visible.map((e) => (
          <article className="guide-card" key={e.id} id={e.id}>
            <div className="eyebrow">
              <span>{e.kind}</span>
              <span>
                {e.end < today
                  ? '已结束'
                  : e.start > today
                    ? '待举办'
                    : '会期内'}
              </span>
            </div>
            <h3>{e.name}</h3>
            <p>
              {e.start} — {e.end} · {e.location}
            </p>
            <p>{e.description}</p>
            <p>{e.participation}</p>
            <p>{e.relation}</p>
            <p>来源核验：{e.checkedAt}</p>
            <External href={e.notice}>官方通知与参与入口</External>
          </article>
        ))}
      </div>
      {visible.length === 0 && <p>暂无匹配活动，请换一个名称或城市。</p>}
    </section>
  );
}
