import fs from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { sourceIndex, tableCell } from './maintenance.mjs';
const catalogs = {};
for (const name of ['journals', 'conferences'])
  catalogs[name] = JSON.parse(await fs.readFile(`data/${name}.json`, 'utf8'));
const sources = sourceIndex(catalogs);
const urls = sources.keys();
await fs.mkdir('source-state', { recursive: true });
await fs.mkdir('source-report', { recursive: true });
let previous = {};
try {
  previous = JSON.parse(await fs.readFile('source-state/state.json', 'utf8'));
} catch {}
const current = { ...previous };
const rows = [];
// Sequential requests avoid bursts against publishers. No login, cookies or bypasses.
for (const url of urls) {
  try {
    const response = await fetch(url, {
      signal: AbortSignal.timeout(15000),
      headers: {
        'User-Agent':
          'OpticsScholarHub source checker (public metadata; manual review)',
      },
    });
    if (!response.ok) {
      await response.body?.cancel();
      rows.push({
        url,
        status: [401, 403, 429].includes(response.status)
          ? 'access-limited'
          : 'http-error',
        http: response.status,
      });
      continue;
    }
    const contentType = response.headers.get('content-type') || '';
    if (!/text\/html|text\/plain/.test(contentType)) {
      await response.body?.cancel();
      rows.push({ url, status: 'reachable-nontext' });
      continue;
    }
    const reader = response.body.getReader();
    let length = 0;
    const chunks = [];
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      length += value.length;
      if (length > 2_000_000) {
        await reader.cancel();
        throw new Error('size-limit');
      }
      chunks.push(value);
    }
    const body = Buffer.concat(chunks).toString('utf8');
    if (/<title[^>]*>[^<]*(just a moment|access denied|captcha)/i.test(body)) {
      rows.push({ url, status: 'access-limited' });
      continue;
    }
    const normalized = body
      .replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    const hash = createHash('sha256').update(normalized).digest('hex');
    rows.push({
      url,
      status: !previous[url]
        ? 'baseline'
        : previous[url].hash === hash
          ? 'unchanged'
          : 'changed',
    });
    current[url] = { hash, checkedAt: new Date().toISOString() };
  } catch (error) {
    rows.push({
      url,
      status: error.name === 'TimeoutError' ? 'timeout' : 'fetch-error',
    });
  }
}
for (const row of rows) row.references = sources.get(row.url);
const urgency = { changed: 0, 'http-error': 1, 'fetch-error': 1, timeout: 1, 'access-limited': 2, baseline: 3, 'reachable-nontext': 4, unchanged: 5 };
rows.sort((a, b) => urgency[a.status] - urgency[b.status]);
const report = [
  '# Source check / 来源检查',
  '',
  `Run: ${new Date().toISOString()}`,
  '',
  'Changes require human review. HTTP 403/429 does not mean a link is dead. Website navigation changes may also alter fingerprints. No catalog data was changed.',
  '',
  '| Status | Affected records and fields | Source |',
  '| --- | --- | --- |',
  ...rows.map((r) => `| ${r.status}${r.http ? ' ' + r.http : ''} | ${r.references.map(ref => tableCell(`${ref.catalog}/${ref.id}: ${ref.field}`)).join('<br>')} | ${tableCell(r.url)} |`),
].join('\n');
await fs.writeFile('source-state/state.json', JSON.stringify(current, null, 2));
await fs.writeFile('source-report/report.json', JSON.stringify(rows, null, 2));
await fs.writeFile('source-report/report.md', report);
if (process.env.GITHUB_STEP_SUMMARY)
  await fs.appendFile(process.env.GITHUB_STEP_SUMMARY, report);
console.log(
  rows.reduce(
    (acc, r) => ((acc[r.status] = (acc[r.status] || 0) + 1), acc),
    {},
  ),
);
