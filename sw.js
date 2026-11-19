/* Offline support. The app is stored on the phone as one complete version: every file in CORE is downloaded when a
 * version is installed, and the app is then served from that copy alone, so the files on the phone always belong
 * together (a half-finished update on a bad connection changes nothing). A new version is fetched only when VERSION
 * changes, so raise VERSION with every push (tests/version_check.py fails if this is forgotten).
 * Fonts from Google go into a separate cache, MEDIA, which survives version changes. Requests to GitHub (the
 * automatic backup) are never cached. */
const VERSION = 'grammaticus-v3';
const MEDIA = 'grammaticus-media';
const MEDIA_MAX = 200;   // entries; the oldest are removed beyond this
const CORE = ['./', 'index.html', 'app.css', 'app.js', 'manifest.webmanifest', 'icons/icon-180.png', 'icons/icon-192.png',
  'content/catalogue.js',
  'content/unit-00/lecture-01.js', 'content/unit-00/lecture-02.js', 'content/unit-00/lecture-03.js', 'content/unit-00/lecture-04.js',
  'content/unit-00/check.js',
  'content/unit-02/lecture-01.js', 'content/unit-02/lecture-02.js', 'content/unit-02/lecture-03.js', 'content/unit-02/lecture-04.js'];

self.addEventListener('install', e => {
  // cache: 'reload' skips the browser's own HTTP cache, which GitHub Pages lets keep files for 10 minutes
  e.waitUntil(caches.open(VERSION).then(c => Promise.all(CORE.map(u => c.add(new Request(u, { cache: 'reload' }))))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION && k !== MEDIA).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== self.location.origin) {
    // only fonts are kept; anything else (the GitHub backup) always goes to the network
    if (/(^|\.)(googleapis\.com|gstatic\.com)$/.test(url.hostname)) e.respondWith(media(e.request));
    return;
  }
  e.respondWith((async () => {
    const cache = await caches.open(VERSION);
    const hit = await cache.match(e.request, { ignoreSearch: true });
    if (hit) return hit;
    try { return await fetch(e.request); }
    catch (err) {
      if (e.request.mode === 'navigate') { const page = await cache.match('index.html'); if (page) return page; }
      return Response.error();
    }
  })());
});
async function media(req) {
  const cache = await caches.open(MEDIA);
  const hit = await cache.match(req);
  if (hit) return hit;
  let res;
  try { res = await fetch(req.url, { mode: 'cors', credentials: 'omit' }); }
  catch (e) { try { res = await fetch(req); } catch (e2) { return Response.error(); } }
  if (res && (res.ok || res.type === 'opaque')) {
    try { await cache.put(req, res.clone()); trim(cache); } catch (e) { /* storage full: serve without keeping */ }
  }
  return res;
}
async function trim(cache) {
  const keys = await cache.keys();
  for (let i = 0; i < keys.length - MEDIA_MAX; i++) await cache.delete(keys[i]);
}
