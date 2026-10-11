import fs from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { applyReviewed } from './verification-core.mjs';

// Explicit operator selections, never a model-controlled instruction to write files.
const options = {};
for (let i = 2; i < process.argv.length; i += 2) {
  const key = process.argv[i];
  if (
    !['--report', '--record', '--accept', '--complete-review-date'].includes(
      key,
    ) ||
    !process.argv[i + 1] ||
    Object.hasOwn(options, key)
  )
    throw new Error('Invalid arguments');
  options[key] = process.argv[i + 1];
}
if (!options['--report'] || !options['--record'])
  throw new Error(
    'Required: --report report.json --record journals/id [--accept field1,field2] [--complete-review-date YYYY-MM-DD]',
  );
const report = JSON.parse(await fs.readFile(options['--report'], 'utf8'));
if (report.schema !== 1 || !Array.isArray(report.records))
  throw new Error('Unsupported report');
const result = report.records.find(
  (r) => `${r.catalog}/${r.id}` === options['--record'],
);
if (!result || !['journals', 'conferences'].includes(result.catalog))
  throw new Error('Record not in report');
const target = `data/${result.catalog}.json`;
const original = await fs.readFile(target, 'utf8');
const records = JSON.parse(original);
const index = records.findIndex((r) => r.id === result.id);
if (index < 0) throw new Error('Record no longer in catalog');
const accepted = (options['--accept'] || '').split(',').filter(Boolean);
const date = options['--complete-review-date'];
if (!accepted.length && !date)
  throw new Error(
    'Select reviewed changes or explicitly attest a complete review',
  );
const today = new Date().toLocaleDateString('en-CA', {
  timeZone: 'Asia/Shanghai',
});
if (date && date > today)
  throw new Error('Full review date cannot be in the future');
records[index] = applyReviewed(records[index], result, accepted, date);
await fs.writeFile(target, JSON.stringify(records, null, 2) + '\n');
try {
  const check = spawnSync(process.execPath, ['scripts/validate-data.mjs'], {
    stdio: 'inherit',
  });
  if (check.status !== 0)
    throw new Error('Catalog validation failed; restored original file');
} catch (error) {
  await fs.writeFile(target, original);
  throw error;
}
console.log(
  `Applied reviewed fields to ${options['--record']}. ${date ? 'Complete review date recorded by operator.' : 'Full review date unchanged.'} Run tests and inspect git diff before commit/push.`,
);
