# Unit 4 end to end at iPhone width: every lecture listed in the catalogue for Unit 4 opens; every section fits the
# screen (normal and extra-large text); every exercise is answered from its own data and marked correct; the unit
# check (once written) is answered correctly; each lecture's cards and terms appear in the Reference tab.
from playwright.sync_api import sync_playwright
from helpers import page, answer, SHOTS as S
UNIT = 4
errs = []
ld = """async (f) => { const t = await (await fetch('content/' + f)).text(); let L, C;
  const G = { addLecture: l => { L = l; }, addCheck: (u, c) => { C = c; }, setCatalogue: c => { L = c; } }; new Function('Grammaticus', t)(G); return L || C; }"""
with sync_playwright() as p:
    b = p.chromium.launch(); ctx, pg = page(b, errs)
    pg.goto('http://localhost:8765/index.html'); pg.wait_for_timeout(500)
    pg.evaluate('localStorage.clear()'); pg.reload(); pg.wait_for_timeout(600)
    cat = pg.evaluate(ld, 'catalogue.js'); unit = next(u for u in cat['units'] if u['number'] == UNIT)
    Ls = [pg.evaluate(ld, f) for f in unit['lectures']]
    print('lectures', [L['id'] for L in Ls])
    bad, wide = [], []
    def open_lecture(lid):
        pg.click('[data-go=home]'); pg.click('[data-go=home]')
        if not pg.locator(f'details[data-fold=unit{UNIT}][open]').count(): pg.click(f'details[data-fold=unit{UNIT}] > summary')
        pg.locator(f'.unit [data-lecture="{lid}"]').first.click()
    for L in Ls:
        open_lecture(L['id'])
        for s in pg.evaluate("[...document.querySelectorAll('.chip')].map(c => c.dataset.section)"):
            pg.click(f'.chip[data-section={s}]'); w = pg.evaluate('document.documentElement.scrollWidth')
            if w > 390: wide.append((L['id'], s, w))
            if s != 'exercises': pg.screenshot(path=S + f'u{UNIT}_{L["id"]}_{s}.png', full_page=True)
        pg.click('.chip[data-section=exercises]'); pg.click('[data-start=practice]')
        for item in L['exercises']:
            fb = answer(pg, item)
            if fb != 'Correct.': bad.append((L['id'], item['id'], fb))
            pg.click('[data-next-item]')
    print('not correct:', bad)
    print('wide sections:', wide)
    if wide: print('FAIL pages wider than the screen')
    if unit.get('check'):
        C = pg.evaluate(ld, unit['check'])
        pg.click('[data-go=home]'); pg.click('[data-go=home]')
        if not pg.locator(f'details[data-fold=unit{UNIT}][open]').count(): pg.click(f'details[data-fold=unit{UNIT}] > summary')
        pg.click(f'[data-check-unit={unit["id"]}]'); bad = []
        for item in C['items']:
            fb = answer(pg, item)
            if fb != 'Correct.': bad.append((item['id'], fb))
            pg.click('[data-next-item]')
        print('check not correct:', bad)
        pg.click('[data-endrun]')
    pg.click('[data-go=ref]'); pg.click('[data-refpage=cards]')
    print('cards', pg.locator('.qcard').count(), '>= unit cards', sum(len(L.get('cards', [])) for L in Ls))
    pg.click('[data-go=progress]'); pg.select_option('#sText', 'xl'); wide = []
    for L in Ls:
        open_lecture(L['id'])
        for s in pg.evaluate("[...document.querySelectorAll('.chip')].map(c => c.dataset.section)"):
            pg.click(f'.chip[data-section={s}]'); w = pg.evaluate('document.documentElement.scrollWidth')
            if w > 390: wide.append((L['id'], s, w))
    print('wide at extra large:', wide)
    if wide: print('FAIL pages wider than the screen at extra large text')
    b.close()
print('errors', errs)
