import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const base = path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'dist');
const host = process.env.HOST || '127.0.0.1';
const port = Number(process.env.PORT || 18792);
const mime = {'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp'};

function reply(res, code, body, type='text/plain; charset=utf-8') {
  res.writeHead(code, {'content-type': type, 'cache-control': 'no-store'});
  res.end(body);
}

http.createServer((req, res) => {
  const pathname = new URL(req.url || '/', `http://${host}`).pathname;
  if (pathname === '/health' || pathname === '/healthz') {
    return reply(res, 200, JSON.stringify({ok:true, app:'fantasy-sumo-league-site'}), 'application/json; charset=utf-8');
  }
  let requested = path.resolve(base, '.' + pathname);
  if (!requested.startsWith(base)) return reply(res, 400, 'Bad request');
  if (!fs.existsSync(requested) || fs.statSync(requested).isDirectory()) requested = path.join(base, 'index.html');
  const ext = path.extname(requested);
  res.writeHead(200, {
    'content-type': mime[ext] || 'application/octet-stream',
    'cache-control': ext === '.html' ? 'no-cache' : 'public, max-age=31536000, immutable',
    'x-content-type-options': 'nosniff'
  });
  fs.createReadStream(requested).pipe(res);
}).listen(port, host, () => console.log(`fantasy-sumo-league-site listening on http://${host}:${port}`));
