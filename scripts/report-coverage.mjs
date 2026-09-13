import fs from 'node:fs/promises';
import { coverageRows, validateCandidates } from './coverage.mjs';
import { tableCell } from './maintenance.mjs';
const read = async (name) =>
  JSON.parse(await fs.readFile(`data/${name}.json`, 'utf8'));
const catalogs = Object.fromEntries(
  await Promise.all(
    ['journals', 'conferences', 'events'].map(async (k) => [k, await read(k)]),
  ),
);
const candidates = await read('candidates');
validateCandidates(candidates, catalogs);
const generatedAt = new Date().toISOString();
const rows = coverageRows(
  catalogs,
  await read('topics'),
  generatedAt.slice(0, 10),
);
const report = [
  '# 方向覆盖与候选审核 / Coverage and candidates',
  '',
  `Generated: ${generatedAt}`,
  '',
  '计数来自正式目录及受控方向标签，不是领域完整性评分。期刊/会议可跨方向，不可把各行相加当总量。活动记录包括母子活动，单独列出无母活动的记录数。未结束按 UTC 日历日比较。',
  '',
  '| 方向 | 期刊 | 会议系列 | 会议届次 | 未结束届次 | 活动记录 | 无母活动记录 | 未结束活动 | 跨领域样例不足 3 篇的期刊 |',
  '| --- | --- | --- | --- | --- | --- | --- | --- | --- |',
  ...rows.map(
    (r) =>
      `| ${[r.topic, r.journals, r.conferenceSeries, r.conferenceEditions, r.activeConferenceEditions, r.events, r.eventParents, r.activeEvents, r.scopeExamplesMissing.length].map(tableCell).join(' | ')} |`,
  ),
  '',
  '跨领域样例不足仅作复核提示，不等于期刊不适配；完整条目 ID 见 JSON。',
  '',
  '## 候选状态',
  '',
  ...['admitted', 'pending', 'deferred'].map(
    (status) =>
      `- ${status}: ${candidates.filter((c) => c.reviewStatus === status).length}`,
  ),
  '',
  'admitted 仅表示已有正式条目，不能理解为所有证据审核完毕；pending/deferred 不计入正式目录。',
  '',
  '| 优先级 | 候选 | 状态 | 已有关联 | 下一步 |',
  '| --- | --- | --- | --- | --- |',
  ...[...candidates]
    .sort((a, b) => a.priority - b.priority || a.name.localeCompare(b.name))
    .map(
      (c) =>
        `| ${[c.priority, c.name, c.reviewStatus, c.relatedExistingIds.join(', ') || '—', c.nextAction].map(tableCell).join(' | ')} |`,
    ),
  '',
].join('\n');
await fs.mkdir('source-report', { recursive: true });
await fs.writeFile('source-report/coverage.md', report);
await fs.writeFile(
  'source-report/coverage.json',
  JSON.stringify({ generatedAt, rows, candidates }, null, 2) + '\n',
);
console.log(
  `Coverage report: ${rows.length} topics, ${candidates.length} candidates`,
);
