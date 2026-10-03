'use client';
import { useState } from 'react';
import type { Conference } from '@/lib/catalog';
import { conferenceStatus } from '@/lib/catalog';
import {
  seriesOutlook,
  seriesFavoritesKey,
  type ConferenceSeries,
} from '@/lib/conference-series';
import { FavoriteButton, useFavorites } from './favorites';
import { External } from './external-link';
import { CalendarDownload } from './calendar-download';

export function ConferenceSeriesDirectory({
  series,
  conferences,
  now,
  selectedId,
  onClear,
}: {
  series: ConferenceSeries[];
  conferences: Conference[];
  now: Date;
  selectedId: string | null;
  onClear: () => void;
}) {
  const [query, setQuery] = useState('');
  const [onlyFollowed, setOnlyFollowed] = useState(false);
  // Keep the vocabulary stable across renders so loading storage cannot reset selections.
  const [knownIds] = useState(() => series.map((s) => s.id));
  const favorites = useFavorites(knownIds, seriesFavoritesKey);
  const shown = series.filter(
    (s) =>
      (!selectedId || s.id === selectedId) &&
      (!onlyFollowed || favorites.ids.includes(s.id)) &&
      [
        s.name,
        ...s.aliases,
        ...s.editionIds.map(
          (id) => conferences.find((c) => c.id === id)?.name ?? '',
        ),
      ]
        .join(' ')
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  );
  return (
    <section className="resource-page series-directory">
      <span className="section-kicker">FOLLOW THE NEXT EDITION</span>
      <h2>会议系列与往届</h2>
      <p>
        错过本届，可以从这里准备下一届。只显示已核实的届次；历史日期供参考，后续安排以官方公告为准。
      </p>
      <div className="series-controls">
        <label>
          搜索系列
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="系列、别名或会议名称"
          />
        </label>
        <label>
          <input
            type="checkbox"
            checked={onlyFollowed}
            disabled={!favorites.ready}
            onChange={(e) => setOnlyFollowed(e.target.checked)}
          />
          只看关注的系列
        </label>
        {selectedId && (
          <button
            onClick={() => {
              onClear();
              setQuery('');
            }}
          >
            查看全部系列
          </button>
        )}
      </div>
      <output className="muted series-count">
        {shown.length} / {series.length} 个系列 · 已关注 {favorites.ids.length}{' '}
        个，保存在本浏览器
        {favorites.storageFailed ? '（存储不可用，本次为临时关注）' : ''}
        。新增同系列届次后会出现在这里；无邮件或系统通知。
      </output>
      <div className="series-grid">
        {shown.map((s) => {
          const { editions, upcoming, message } = seriesOutlook(
            s,
            conferences,
            now,
          );
          return (
            <article className="series-card" key={s.id}>
              <div className="series-heading">
                <h3>{s.name}</h3>
                <FavoriteButton
                  name={`${s.name} 系列`}
                  active={favorites.ids.includes(s.id)}
                  disabled={!favorites.ready}
                  onToggle={() => favorites.toggle(s.id)}
                />
              </div>
              <p
                className={upcoming ? 'series-outlook' : 'series-outlook muted'}
              >
                {message}
              </p>
              <div className="link-row">
                <External href={s.website}>官方公告入口</External>
                <CalendarDownload
                  conferences={editions.filter(
                    (c) => c.end >= now.toISOString().slice(0, 10),
                  )}
                  label="导出未结束届次日历"
                />
              </div>
              <details className="series-history">
                <summary>
                  已收录 {editions.length} 届 · 查看时间线与准备要求
                </summary>
                <ol>
                  {editions.map((c) => (
                    <li key={c.id}>
                      <h4>
                        {c.year} · {c.name}
                      </h4>
                      <p>
                        {c.start} — {c.end} · {c.location} ·{' '}
                        {conferenceStatus(c, now)}
                      </p>
                      <details>
                        <summary>本届投稿要求与出版条件</summary>
                        <ul>
                          {c.requirements.map((r) => (
                            <li key={r}>{r}</li>
                          ))}
                        </ul>
                        <p>{c.publication}</p>
                      </details>
                      <p className="muted">
                        核验：{c.checkedAt}；本届要求不自动沿用到下一届。
                      </p>
                      <div className="link-row">
                        <External href={c.notice}>本届通知</External>
                        <External href={c.website}>本届官网</External>
                      </div>
                    </li>
                  ))}
                </ol>
              </details>
            </article>
          );
        })}
      </div>
      {!shown.length && (
        <p>暂无匹配系列。可清空搜索、取消“只看关注”或查看全部系列。</p>
      )}
    </section>
  );
}
