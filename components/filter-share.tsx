'use client';
import { useState } from 'react';
import { writeFilterLink, type FilterState } from '@/lib/filter-link';

export function FilterShare({
  tab,
  filters,
}: {
  tab: string;
  filters: FilterState;
}) {
  const [result, setResult] = useState<{ url: string; copied: boolean } | null>(
    null,
  );
  async function share() {
    const url = writeFilterLink(window.location.href, tab, filters);
    let copied = false;
    try {
      await navigator.clipboard.writeText(url);
      copied = true;
    } catch {
      /* Manual copy remains available. */
    }
    setResult({ url, copied });
  }
  return (
    <div className="filter-share">
      <button className="calendar-download" onClick={share}>
        分享当前筛选
      </button>
      {result && (
        <div>
          <output>{result.copied ? '链接已复制' : '请复制下方链接'}</output>
          <input
            aria-label="本次生成的筛选链接"
            readOnly
            value={result.url}
            onFocus={(e) => e.target.select()}
          />
          <button onClick={() => setResult(null)} aria-label="关闭筛选链接">
            ×
          </button>
        </div>
      )}
    </div>
  );
}
