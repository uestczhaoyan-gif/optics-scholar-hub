'use client';

import { useRef, useState, type ReactNode } from 'react';
import { paginate } from '@/lib/pagination';

export function JournalPagination({ children }: { children: ReactNode[] }) {
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(12);
  const start = useRef<HTMLDivElement>(null);
  const result = paginate(children, page, size);
  if (!children.length) return null;

  function changePage(next: number) {
    setPage(next);
    start.current?.focus({ preventScroll: true });
    start.current?.scrollIntoView({ block: 'start' });
  }

  function controls(position: string) {
    return (
      <nav
        className="journal-pagination"
        aria-label={`期刊分页（${position}）`}
      >
        <span aria-live="polite">
          共 {children.length} 本 · 第 {result.start + 1}–{result.end} 本
        </span>
        <div className="pagination-actions">
          <button
            disabled={result.page === 1}
            onClick={() => changePage(result.page - 1)}
          >
            上一页
          </button>
          <label>
            第{' '}
            <select
              aria-label={`期刊页码（${position}）`}
              value={result.page}
              onChange={(event) => changePage(Number(event.target.value))}
            >
              {Array.from({ length: result.pages }, (_, i) => (
                <option value={i + 1} key={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>{' '}
            / {result.pages} 页
          </label>
          <button
            disabled={result.page === result.pages}
            onClick={() => changePage(result.page + 1)}
          >
            下一页
          </button>
        </div>
      </nav>
    );
  }

  return (
    <div
      ref={start}
      tabIndex={-1}
      className="journal-results"
      aria-label="期刊列表"
    >
      <label className="journal-page-size">
        每页{' '}
        <select
          aria-label="每页期刊数量"
          value={size}
          onChange={(event) => {
            setSize(Number(event.target.value));
            setPage(1);
          }}
        >
          {[12, 24, 48].map((value) => (
            <option key={value} value={value}>
              {value} 本
            </option>
          ))}
        </select>
      </label>
      {controls('顶部')}
      <div className="journal-grid">{result.items}</div>
      {controls('底部')}
    </div>
  );
}
