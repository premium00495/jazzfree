// api/dashboard.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const cookies = req.headers.cookie || '';
  const hasAccess = cookies.split(';').map(c => c.trim()).includes('access=1');

  if (!hasAccess) {
    // Unauthorized → redirect to security system
    res.writeHead(302, { Location: '/' });
    return res.end();
  }

  // Authorized → serve watch.html
  const filePath = path.join(process.cwd(), 'watch.html');
  try {
    const html = fs.readFileSync(filePath, 'utf8');
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    return res.status(200).send ? res.send(html) : res.end(html);
  } catch (err) {
    // fallback if watch.html missing
    const html = `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Dashboard</title></head><body><h1>Protected Page</h1><p>Your content goes here.</p><a href="/api/logout">Logout</a></body></html>`;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    return res.status(200).end(html);
  }
}
