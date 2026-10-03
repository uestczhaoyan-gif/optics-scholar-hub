import fs from 'node:fs/promises';
import { maintenanceQueue, tableCell } from './maintenance.mjs';
const catalogs = {};
for (const name of ['conferences', 'journals', 'events'])
  catalogs[name] = JSON.parse(await fs.readFile(`data/${name}.json`, 'utf8'));
const now = new Date();
catalogs.conferenceSeries = JSON.parse(
  await fs.readFile('data/conference-series.json', 'utf8'),
);
const rows = maintenanceQueue(catalogs, now);
const report = [
  '# Maintenance queue / 维护队列',
  '',
  `Generated: ${now.toISOString()}`,
  '',
  '这是本地数据的缺口与时效检查，不表示官网已变更。P1 优先检查临近事件，P2 补全日期与过期核验，P3 核实精度与分区。已结束届次不再催办旧截止，但最新已收录届次已结束的系列进入后续公告队列，每30天复查。展会/论坛举办日期不是论文截止。母子活动保留各自待办，任务数不代表独立会议数。',
  '',
  '| 优先级 | 条目 | 活动类型 / 母活动 | 字段 | 待办 | 来源 |',
  '| --- | --- | --- | --- | --- | --- |',
  ...rows.map(
    (r) =>
      `| P${r.priority} | ${tableCell(r.id)} | ${tableCell(r.catalog === 'conferenceSeries' ? '会议系列 / 后续公告' : r.catalog === 'events' ? [r.kind, r.parentId].filter(Boolean).join(' / ') : '—')} | ${tableCell(r.field)} | ${tableCell(r.reason)} | ${tableCell(r.source)} |`,
  ),
  '',
  `共 ${rows.length} 项；不自动改动数据或刷新核验日期。`,
  '',
].join('\n');
await fs.mkdir('source-report', { recursive: true });
await fs.writeFile(
  'source-report/maintenance.json',
  JSON.stringify(rows, null, 2) + '\n',
);
await fs.writeFile('source-report/maintenance.md', report);
if (process.env.GITHUB_STEP_SUMMARY)
  await fs.appendFile(process.env.GITHUB_STEP_SUMMARY, report);
console.log(
  `Maintenance queue: ${rows.length} tasks written to source-report/maintenance.md`,
);
