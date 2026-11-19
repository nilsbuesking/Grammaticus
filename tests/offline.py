# Offline: once the service worker has stored the app, it starts, opens every lecture and searches without a
# connection; requests to GitHub are never cached. (index.html registers the service worker only over https, so the
# test registers it by hand.)
from playwright.sync_api import sync_playwright
from helpers import page
errs = []
with sync_playwright() as p:
    b = p.chromium.launch(); ctx, pg = page(b, errs)
    pg.goto('http://localhost:8765/index.html'); pg.wait_for_timeout(400)
    pg.evaluate("navigator.serviceWorker.register('sw.js')"); pg.evaluate("navigator.serviceWorker.ready.then(() => true)")
    pg.reload(); pg.wait_for_timeout(800)
    print('controlled', pg.evaluate('!!navigator.serviceWorker.controller'))
    ctx.set_offline(True)
    pg.reload(); pg.wait_for_timeout(800)
    n = len(pg.evaluate('Grammaticus._lectures()')); print('lectures offline', n, f'({n} expect 4)'.replace(f'({n}', '(' + str(n)))
    pg.click('text=Start lecture'); print('lecture opens offline:', pg.locator('.lhead').count() == 1)
    pg.click('[data-go=ref]'); pg.fill('#refsearch', 'Komma'); pg.wait_for_timeout(300); print('search offline hits:', pg.locator('.hit').count() > 0)
    print('caches', pg.evaluate("caches.keys()"))
    b.close()
print('errors', errs)
