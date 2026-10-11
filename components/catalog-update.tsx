'use client';
import { useState } from 'react';
import journals from '@/data/journals.json';
import conferences from '@/data/conferences.json';
import events from '@/data/events.json';
import topics from '@/data/topics.json';
import site from '@/data/site.json';
import conferenceSeries from '@/data/conference-series.json';
import { checkCatalogUpdate } from '@/lib/catalog-update';
import { writeFilterLink, type FilterState } from '@/lib/filter-link';
import { External } from '@/components/external-link';

export function CatalogUpdate({
  tab,
  filters,
}: {
  tab: string;
  filters: FilterState;
}) {
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState(
    '版本检查仅加载本站已发布数据。维护者可运行 AI 核查，审核结果后发布；各条目完整核验日期独立记录。',
  );
  const [version, setVersion] = useState('');
  async function check() {
    setBusy(true);
    setVersion('');
    try {
      const result = await checkCatalogUpdate(location.href, {
        journals,
        conferences,
        events,
        topics,
        site,
        conferenceSeries,
      });
      setVersion(result.changed ? result.version : '');
      const time = new Date(result.publishedAt).toLocaleString('zh-CN', {
        timeZone: 'Asia/Shanghai',
      });
      setMessage(
        `${result.changed ? '发现新版，可加载最新数据' : '当前已是最新发布数据'}。发布构建时间：${time}（北京时间）；不代表官网刚刚重新核验。`,
      );
    } catch {
      setMessage('暂时无法检查更新，请稍后重试；当前目录仍可使用。');
    } finally {
      setBusy(false);
    }
  }
  function reload() {
    const url = new URL(writeFilterLink(location.href, tab, filters));
    url.searchParams.set('_data', version);
    location.assign(url.href);
  }
  return (
    <div className="catalog-update">
      <div>
        <button disabled={busy} onClick={check}>
          {busy ? '正在检查…' : '检查已发布版本'}
        </button>
        {version && <button onClick={reload}>加载新版</button>}
        <a href="#data">更新说明</a>
        <External
          href={`${site.repository}/actions/workflows/verify-information.yml`}
        >
          AI 核查官方信息（维护者）
        </External>
        <External
          href={`${site.repository}/blob/main/docs/AUTO_VERIFICATION.md`}
        >
          核查操作说明
        </External>
      </div>
      <output>{message}</output>
    </div>
  );
}
