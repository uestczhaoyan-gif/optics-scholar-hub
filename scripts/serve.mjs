import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
const root = resolve('dist/client');
const base = process.env.BASE_PATH || '';
const mime = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
  '.rsc': 'text/x-component',
};
createServer(async (req, res) => {
  try {
    let path = decodeURIComponent(
      new URL(req.url, 'http://localhost').pathname,
    );
    if (base && path !== base && !path.startsWith(base + '/')) {
      res.writeHead(404).end();
      return;
    }
    path = path.slice(base.length);
    let file = resolve(root, '.' + (path.startsWith('/') ? path : '/' + path));
    if (file !== root && !file.startsWith(root + sep)) {
      res.writeHead(403).end();
      return;
    }
    if ((await stat(file)).isDirectory()) file = resolve(file, 'index.html');
    res.writeHead(200, {
      'Content-Type': mime[extname(file)] || 'application/octet-stream',
      'X-Content-Type-Options': 'nosniff',
    });
    res.end(await readFile(file));
  } catch {
    res.writeHead(404).end('Not found');
  }
}).listen(Number(process.env.PORT || 3000), '127.0.0.1', () =>
  console.log(`Local: http://127.0.0.1:${process.env.PORT || 3000}${base}/`),
);
