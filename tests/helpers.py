# Shared by the browser tests: a page at iPhone width with the fonts served locally (Google Fonts cannot be reached
# from the test machine), and answering any exercise item from its own data.
import os
FONTS = open(os.path.join(os.path.dirname(__file__), 'fonts', 'fonts.css')).read()
SHOTS = '/tmp/grammaticus-shots/'; os.makedirs(SHOTS, exist_ok=True)

def page(browser, errs, **kw):
    ctx = browser.new_context(viewport={'width': 390, 'height': 844}, device_scale_factor=kw.pop('scale', 2), **kw)
    ctx.route('https://fonts.googleapis.com/**', lambda r: r.fulfill(status=200, content_type='text/css', body=FONTS))
    ctx.route('https://fonts.gstatic.com/**', lambda r: r.fulfill(status=404, body=''))
    pg = ctx.new_page()
    pg.on('pageerror', lambda e: errs.append(str(e)))
    return ctx, pg

def answer(pg, item):
    """Answer the item showing from its data; return the first line of the feedback."""
    t = item['type']
    if t == 'mc':
        pg.click(f'[data-choice="{item["answer"]}"]')
    elif t == 'gap':
        pg.fill('#ans', item['answers'][0]); pg.click('[data-check]')
    elif t == 'comma':
        for k in item['commas']: pg.click(f'[data-slot="{k}"]')
        pg.click('[data-check]')
    elif t == 'match':
        for k in range(len(item['pairs'])): pg.click(f'[data-ml="{k}"]'); pg.click(f'[data-mr="{k}"]')
    elif t == 'order':
        for k in range(len(item['tokens'])): pg.click(f'[data-ob="{k}"]')
        pg.click('[data-check]')
    return pg.locator('.feedback').first.inner_text().split('\n')[0]
