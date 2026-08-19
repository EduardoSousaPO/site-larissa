// Servidor estático que replica o roteamento da Vercel para o build de dist/.
//
// Por que existe: `vite preview` devolve o dist/index.html (a home) para
// qualquer URL limpa, em vez de dist/<slug>/index.html. Com isso a home hidrata
// dentro da rota errada e o console enche de erro de hidratação — um artefato do
// servidor, não do site. Testar contra ele leva a diagnóstico errado.
//
// Aqui a ordem é a mesma do vercel.json:
//   1. arquivo estático exato          -> /assets/app-x.js
//   2. cleanUrls: /rota                -> dist/rota/index.html
//   3. rewrite catch-all               -> dist/index.html (SPA fallback)
//
// Uso: node scripts/serve-dist.mjs [porta] [dir]
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize, resolve } from 'node:path';

const PORT = Number(process.argv[2] ?? 4174);
const ROOT = resolve(process.argv[3] ?? 'dist');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

async function readIfFile(path) {
  try {
    const info = await stat(path);
    if (!info.isFile()) return null;
    return await readFile(path);
  } catch {
    return null;
  }
}

// Impede que "/../.." escape de dist/.
function safeJoin(root, urlPath) {
  const candidate = normalize(join(root, urlPath));
  return candidate.startsWith(root) ? candidate : null;
}

const server = createServer(async (req, res) => {
  const urlPath = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);

  const send = (status, body, file) => {
    res.writeHead(status, {
      'Content-Type': MIME[extname(file).toLowerCase()] ?? 'application/octet-stream',
      // sem cache: cada teste precisa de uma carga fria de verdade
      'Cache-Control': 'no-store',
    });
    res.end(body);
  };

  const exact = safeJoin(ROOT, urlPath);
  if (exact) {
    const asFile = await readIfFile(exact);
    if (asFile) return send(200, asFile, exact);

    const asDir = join(exact, 'index.html');
    const dirIndex = await readIfFile(asDir);
    if (dirIndex) return send(200, dirIndex, asDir);
  }

  const fallback = join(ROOT, 'index.html');
  const spa = await readIfFile(fallback);
  if (spa) return send(200, spa, fallback);

  send(404, 'Not found', '.txt');
});

server.listen(PORT, () => {
  console.log(`[serve-dist] ${ROOT} em http://localhost:${PORT}`);
});
