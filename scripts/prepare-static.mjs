import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const root = path.resolve('dist/client');
const base = process.env.BASE_PATH || '';
assert(
  base === '' || /^\/[a-zA-Z0-9._-]+$/.test(base),
  'BASE_PATH must be empty or one repository path',
);
// vinext places prefixed assets in a nested folder. Pages already mounts the
// artifact under the repository name, so flatten that generated asset folder.
if (base) {
  const nested = path.resolve(root, '.' + base, '_next');
  assert(nested.startsWith(root + path.sep));
  if (fs.existsSync(nested)) fs.renameSync(nested, path.join(root, '_next'));
}
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
assert(
  html.includes('光研导航') && html.includes('会议日历'),
  'Expected product HTML missing',
);
const assets = [...html.matchAll(/(?:src|href)="([^"]+)"/g)]
  .map((m) => m[1])
  .filter((p) => p.includes('/_next/'));
assert(assets.length > 0, 'No application assets');
for (const asset of assets) {
  assert(asset.startsWith(base + '/_next/'), 'Incorrect asset prefix');
  const target = path.resolve(root, '.' + asset.slice(base.length));
  assert(
    target.startsWith(root + path.sep) && fs.existsSync(target),
    `Missing asset: ${asset}`,
  );
}
fs.writeFileSync(path.join(root, '.nojekyll'), '');
console.log(
  `Static export verified: ${new Set(assets).size} entry assets, base ${base || '/'}`,
);
