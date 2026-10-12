import fs from 'node:fs/promises';
import { lookup } from 'node:dns/promises';
import { isIP } from 'node:net';
import { fileURLToPath } from 'node:url';
import {
  recordHash,
  pageText,
  selectRecords,
  fieldsFor,
  sourcesFor,
  validateReview,
  reviewPrompt,
} from './verification-core.mjs';

// Source requests never carry API credentials. Redirects are checked individually.
export async function checkPublicUrl(value) {
  const u = new URL(value);
  if (
    u.protocol !== 'https:' ||
    u.username ||
    u.password ||
    (u.port && u.port !== '443') ||
    isIP(u.hostname) ||
    u.hostname === 'localhost' ||
    /\.(local|internal|localhost)$/.test(u.hostname)
  )
    throw new Error('unsupported-source-address');
  const addresses = await lookup(u.hostname, { all: true });
  if (
    !addresses.length ||
    addresses.some(({ address }) => {
      if (address.includes(':')) return !/^[23][\da-f]{3}:/i.test(address);
      const [a, b] = address.split('.').map(Number);
      return (
        a === 0 ||
        a === 10 ||
        a === 127 ||
        a >= 224 ||
        (a === 169 && b === 254) ||
        (a === 172 && b >= 16 && b <= 31) ||
        (a === 192 && b === 168) ||
        (a === 100 && b >= 64 && b <= 127) ||
        (a === 198 && (b === 18 || b === 19))
      );
    })
  )
    throw new Error('nonpublic-source-address');
  return u.href;
}
export async function fetchSource(
  url,
  { fetcher = fetch, checkUrl = checkPublicUrl } = {},
) {
  const checkedAt = new Date().toISOString();
  let next = url;
  try {
    for (let redirect = 0; redirect < 5; redirect++) {
      await checkUrl(next);
      const response = await fetcher(next, {
        redirect: 'manual',
        signal: AbortSignal.timeout(15000),
        headers: {
          'User-Agent': 'OpticsScholarHub verification (public sources)',
        },
      });
      if ([301, 302, 303, 307, 308].includes(response.status)) {
        await response.body?.cancel();
        next = new URL(response.headers.get('location'), next).href;
        continue;
      }
      if (!response.ok) {
        await response.body?.cancel();
        return {
          url,
          checkedAt,
          status: [401, 403, 429].includes(response.status)
            ? 'access-limited'
            : 'http-error',
          http: response.status,
        };
      }
      if (
        !/text\/(html|plain)/i.test(response.headers.get('content-type') || '')
      ) {
        await response.body?.cancel();
        return { url, checkedAt, status: 'unsupported-format' };
      }
      const reader = response.body.getReader();
      const chunks = [];
      let size = 0;
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        size += value.length;
        if (size > 2_000_000) {
          await reader.cancel();
          throw new Error('size-limit');
        }
        chunks.push(value);
      }
      const html = Buffer.concat(chunks).toString('utf8');
      if (
        /<title[^>]*>[^<]*(just a moment|access denied|captcha|sign in|log in)/i.test(
          html,
        )
      )
        return { url, checkedAt, status: 'access-limited' };
      const all = pageText(html);
      if (all.length < 80)
        return { url, checkedAt, status: 'insufficient-text' };
      return {
        url,
        finalUrl: next,
        checkedAt,
        status: 'read',
        text: all.slice(0, 8000),
        truncated: all.length > 8000,
      };
    }
    return { url, checkedAt, status: 'redirect-limit' };
  } catch {
    return { url, checkedAt, status: 'fetch-failed' };
  }
}
export async function askDeepSeek(
  key,
  record,
  fields,
  sources,
  fetcher = fetch,
) {
  const response = await fetcher('https://api.deepseek.com/chat/completions', {
    method: 'POST',
    redirect: 'error',
    signal: AbortSignal.timeout(120000),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify({
      model: 'deepseek-flash',
      thinking: { type: 'disabled' },
      max_tokens: 6000,
      response_format: { type: 'json_object' },
      messages: [
        { role: 'system', content: reviewPrompt },
        {
          role: 'user',
          content: JSON.stringify({
            record,
            fields,
            sources: sources.filter((s) => s.status === 'read'),
          }),
        },
      ],
    }),
  });
  if (!response.ok) throw new Error(`DeepSeek HTTP ${response.status}`);
  const result = await response.json();
  const choice = result.choices?.[0];
  if (choice?.finish_reason !== 'stop')
    throw new Error('DeepSeek response incomplete');
  return { review: JSON.parse(choice.message.content), usage: result.usage };
}
const escapeMD = (value) =>
  String(value)
    .replace(/[&<>|`[\]*_]/g, (c) => `&#${c.charCodeAt(0)};`)
    .replace(/[\r\n]+/g, ' ');
const sourceLink = (value) => {
  try {
    const url = new URL(value);
    if (url.protocol !== 'https:' || url.username || url.password)
      return escapeMD(value);
    return `[来源](<${url.href.replace(/\|/g, '%7C')}>)`;
  } catch {
    return escapeMD(value);
  }
};
export function markdownReport(report) {
  const lines = [
    '# 官方信息自动核查（待审核）',
    '',
    `运行：${report.checkedAt} · 模型：deepseek-flash · 基线：${report.commit}`,
    '',
    '**这是逐字段 AI 核查建议，不是人工复核完成，也不会自动修改正式目录或核验日期。原文匹配只能验证引用存在，不能保证语义判断正确。**',
    '',
    `匹配 ${report.total} 条，本批 ${report.records.length} 条，剩余 ${report.remaining} 条；下一批 offset=${report.nextOffset}。默认不包含已结束会议；指定 ID 可覆盖。`,
    '仅核查目录已有来源的 HTML/纯文本，最多 8 个来源/条、8000 字符/来源；PDF、图片、动态或受限页面明确列为缺口，不能据此认定全站信息最新。',
    '',
  ];
  if (report.error) lines.push(`**运行未完成：${escapeMD(report.error)}**`, '');
  for (const result of report.records) {
    lines.push(
      `## ${escapeMD(result.catalog + '/' + result.id)} — ${escapeMD(result.name)}`,
      '',
      `处理状态：${escapeMD(result.status)}；原完整核验：${escapeMD(result.originalCheckedAt)}`,
      '',
    );
    if (result.error) lines.push(`异常：${escapeMD(result.error)}`, '');
    for (const source of result.sources)
      lines.push(
        `- ${sourceLink(source.url)} — ${escapeMD(source.url)} — ${source.status}${source.truncated ? '（正文截断）' : ''}`,
      );
    lines.push(
      '',
      '| 字段 | AI 判断 | 原值 | 建议值 | 依据与说明 |',
      '| --- | --- | --- | --- | --- |',
    );
    for (const field of result.fields)
      lines.push(
        `| ${escapeMD(field.path)} | ${{ consistent: '与原文一致（待审核）', changed: '建议修改', uncertain: '无法确认' }[field.status]} | ${escapeMD(JSON.stringify(field.before))} | ${field.status === 'changed' ? escapeMD(JSON.stringify(field.proposed)) : '—'} | ${escapeMD(field.reason)} ${field.citations.map((c) => `${sourceLink(c.url)} — “${escapeMD(c.quote)}”`).join('；')} |`,
      );
    lines.push('');
  }
  return lines.join('\n');
}
export async function runVerification(
  env = process.env,
  { readSource = fetchSource, callModel = askDeepSeek } = {},
) {
  const dir = 'source-report/verification';
  await fs.mkdir(dir, { recursive: true });
  const report = {
    schema: 1,
    checkedAt: new Date().toISOString(),
    commit: env.GITHUB_SHA || 'local',
    total: 0,
    remaining: 0,
    nextOffset: 0,
    records: [],
  };
  const save = async () => {
    const md = markdownReport(report);
    await fs.writeFile(
      `${dir}/report.json`,
      JSON.stringify(report, null, 2) + '\n',
    );
    await fs.writeFile(`${dir}/report.md`, md);
    return md;
  };
  try {
    if (!env.DEEPSEEK_API_KEY)
      throw new Error(
        'Missing DEEPSEEK_API_KEY: configure repository Actions secret before running',
      );
    const catalogs = {};
    for (const name of ['journals', 'conferences'])
      catalogs[name] = JSON.parse(
        await fs.readFile(`data/${name}.json`, 'utf8'),
      );
    const batch = selectRecords(catalogs, {
      scope: env.VERIFY_SCOPE || 'stale',
      ids: env.VERIFY_IDS || '',
      offset: Number(env.VERIFY_OFFSET || 0),
      limit: Number(env.VERIFY_LIMIT || 10),
    });
    Object.assign(report, {
      total: batch.total,
      remaining: batch.remaining,
      nextOffset: batch.nextOffset,
    });
    const cache = new Map();
    for (const { catalog, record } of batch.selected) {
      const fields = fieldsFor(catalog, record);
      const result = {
        catalog,
        id: record.id,
        name: record.name,
        recordHash: recordHash(record),
        originalCheckedAt: record.checkedAt,
        status: 'pending',
        sources: [],
        fields: fields.map((f) => ({
          path: f.path,
          before: f.value,
          status: 'uncertain',
          reason: '未完成内容核查',
          citations: [],
        })),
      };
      report.records.push(result);
      await save();
      let stopBatch = false;
      const urls = sourcesFor(record);
      for (const [i, url] of urls.entries()) {
        if (i >= 8) {
          result.sources.push({ url, status: 'source-limit' });
          continue;
        }
        if (!cache.has(url)) cache.set(url, await readSource(url));
        result.sources.push(cache.get(url));
      }
      if (!result.sources.some((s) => s.status === 'read')) {
        result.status = 'blocked-no-readable-sources';
        report.error = '部分条目没有可读取正文，未完成核查。';
        process.exitCode = 1;
      } else {
        try {
          const answer = await callModel(
            env.DEEPSEEK_API_KEY,
            record,
            fields,
            result.sources,
          );
          result.fields = validateReview(answer.review, fields, result.sources);
          result.status = 'awaiting-human-review';
          result.usage = answer.usage;
        } catch (error) {
          result.status = 'model-error';
          result.error = /^DeepSeek (HTTP \d+|response incomplete)$/.test(
            error.message,
          )
            ? error.message
            : '模型响应或证据校验失败';
          report.error =
            '部分条目未完成模型核查，详见各条目；不得视为核验成功。';
          process.exitCode = 1;
          stopBatch = /^DeepSeek HTTP (400|401|402|403|429)$/.test(
            error.message,
          );
        }
      }
      // Only short cited excerpts are published, not complete publisher pages.
      const evidenceSources = result.sources;
      result.sources = evidenceSources.map(
        ({ text: _text, ...source }) => source,
      );
      if (stopBatch) {
        report.remaining += batch.selected.length - report.records.length;
        report.nextOffset =
          Number(env.VERIFY_OFFSET || 0) + report.records.length;
      }
      await save();
      console.log(`${catalog}/${record.id}: ${result.status}`);
      if (stopBatch) break;
    }
  } catch (error) {
    report.error = error.message;
    process.exitCode = 1;
  }
  const md = await save();
  if (env.GITHUB_STEP_SUMMARY)
    await fs.appendFile(env.GITHUB_STEP_SUMMARY, md.slice(0, 800000));
  return report;
}
if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1])
  await runVerification();
