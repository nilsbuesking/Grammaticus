# Unit 0 end to end at iPhone width: every lecture and section opens without sideways scrolling; reading every section
# marks the lecture read and moves on; every exercise and every check question is answered from its own data and
# marked correct (a wrong comma answer is marked wrong); the check sets the “Focus” lectures; the reference search,
# cards and terms work; progress shows; extra-large text and dark mode keep pages inside the screen.
import json
from playwright.sync_api import sync_playwright
from helpers import page, answer, SHOTS as S
errs = []
ld = """async (f) => { const t = await (await fetch('content/' + f)).text(); let L, C;
  const G = { addLecture: l => { L = l; }, addCheck: (u, c) => { C = c; } }; new Function('Grammaticus', t)(G); return L || C; }"""
with sync_playwright() as p:
    b = p.chromium.launch(); ctx, pg = page(b, errs)
    pg.goto('http://localhost:8765/index.html'); pg.wait_for_timeout(500)
    pg.evaluate('localStorage.clear()'); pg.reload(); pg.wait_for_timeout(600)
    pg.screenshot(path=S + 'home.png', full_page=True)
    Ls = [pg.evaluate(ld, f'unit-00/lecture-0{i}.js') for i in range(1, 5)]
    CHK = pg.evaluate(ld, 'unit-00/check.js')
    # read every lecture section by section with the Read button
    wide = []
    pg.click('text=Start lecture')
    for L in Ls:
        secs = [s for s in ['concept', 'german', 'english', 'contrast', 'usage', 'style', 'pitfalls', 'latin', 'summary'] if (L.get(s) if s != 'summary' else L.get('summary'))]
        for s in secs:
            cur = pg.evaluate("document.querySelector('.chip[aria-current=true]').dataset.section")
            if cur != s: print(f'FAIL lecture {L["id"]}: expected section {s}, showing {cur}')
            w = pg.evaluate('document.documentElement.scrollWidth')
            if w > 390: wide.append((L['id'], s, w))
            pg.screenshot(path=S + f'l{L["id"]}_{s}.png', full_page=True)
            pg.click('[data-done]')
    print('wide sections:', wide)
    if wide: print('FAIL pages wider than the screen')
    pg.click('[data-go=home]'); pg.click('[data-go=home]')
    print('lectures read', pg.locator('.stat b').first.inner_text(), '(4 expect 4)')
    print('read pills', pg.locator('.unit .pill.done').count(), '(4 expect 4)')
    # exercises of every lecture, answered from the data
    bad = []
    for L in Ls:
        pg.click(f'[data-lecture="{L["id"]}"]'); pg.click('.chip[data-section=exercises]'); pg.click('[data-start=practice]')
        for item in L['exercises']:
            shown = pg.evaluate('Grammaticus._item()')
            if shown['id'] != item['id']: print('FAIL order', L['id'], item['id'], shown['id'])
            if item['type'] == 'comma': pg.screenshot(path=S + f'ex_comma_{L["id"]}.png')
            fb = answer(pg, item)
            if fb != 'Correct.': bad.append((L['id'], item['id'], fb))
            pg.click('[data-next-item]')
        res = pg.locator('#secbody').inner_text()
        if '100%' not in res: print('FAIL result', L['id'], ' '.join(res.split())[:80])
        pg.click('[data-go=home]'); pg.click('[data-go=home]')
    print('not correct:', bad)
    # a wrong comma answer: missing comma marked, item lands in the missed list
    pg.click('[data-lecture="0.4"]'); pg.click('.chip[data-section=exercises]'); pg.click('[data-start=practice]')
    L4 = Ls[3]
    for item in L4['exercises']:
        if item['type'] == 'comma':
            pg.click(f'[data-slot="{item["commas"][0]}"]'); pg.click('[data-slot="0"]'); pg.click('[data-check]')
            fb = pg.locator('.feedback').first.inner_text().split('\n')[0]
            print('wrong comma answer:', fb, '| missed slots marked', pg.locator('.slot.missed').count(), '(1 expect 1)', '| wrong slots marked', pg.locator('.slot.wrong').count(), '(1 expect 1)')
            pg.screenshot(path=S + 'ex_comma_wrong.png')
            pg.click('[data-next-item]')
        else:
            answer(pg, item); pg.click('[data-next-item]')
    pg.click('[data-go=progress]')
    print('missed listed', pg.locator('[data-review]').inner_text())
    pg.click('[data-review]'); item = pg.evaluate('Grammaticus._item()'); fb = answer(pg, item); pg.click('[data-next-item]')
    print('missed practised:', fb, '| left:', pg.locator('main').inner_text().count('Nothing left to practise'), '(1 expect 1)')
    pg.click('[data-endrun]')
    # the unit check: all right except the questions on 0.3, which then shows as Focus
    pg.click('[data-go=home]'); pg.click('[data-go=home]'); pg.click('[data-check-unit=u0]')
    bad = []
    for item in CHK['items']:
        if item['lecture'] == '0.3' and item['type'] == 'mc':
            pg.click(f'[data-choice="{(item["answer"] + 1) % len(item["options"])}"]')
        else:
            fb = answer(pg, item)
            if fb != 'Correct.': bad.append((item['id'], fb))
        pg.click('[data-next-item]')
    print('check not correct:', bad)
    pg.screenshot(path=S + 'check_result.png', full_page=True)
    print('check result names 0.3:', '0.3' in pg.locator('main').inner_text())
    pg.click('[data-endrun]')
    print('focus pills', pg.locator('.unit .pill.focus').count(), '(0 expect 0: lectures already read show “Read”)')
    print('check shown on unit:', 'focus on 0.3' in pg.locator('.unit').first.inner_text())
    # reference
    pg.click('[data-go=ref]')
    pg.fill('#refsearch', 'Prateritum'); pg.wait_for_timeout(300)
    n = pg.locator('.hit').count(); print('search “Prateritum” finds Präteritum:', n > 0)
    pg.screenshot(path=S + 'search.png', full_page=True)
    pg.locator('.hit').first.click(); pg.wait_for_timeout(100)
    print('hit opens lecture:', pg.locator('.lmini, .lhead').count() == 1)
    pg.click('[data-go=ref]'); pg.fill('#refsearch', 'Satzklammer'); pg.wait_for_timeout(300)
    print('search finds card and term:', pg.locator('.qcard').count() >= 1, pg.locator('table.terms tbody tr').count() >= 1)
    pg.click('[data-refpage=cards]'); print('cards', pg.locator('.qcard').count(), f"({sum(len(L.get('cards', [])) for L in Ls)} expect {sum(len(L.get('cards', [])) for L in Ls)})")
    pg.locator('.qcard summary').first.click(); pg.screenshot(path=S + 'cards.png', full_page=True)
    pg.click('[data-refpage=terms]'); print('terms', pg.locator('table.terms tbody tr').count(), f"({sum(len(L.get('terms', [])) for L in Ls)} expect {sum(len(L.get('terms', [])) for L in Ls)})")
    print('terms width', pg.evaluate('document.documentElement.scrollWidth'), '(390 expect 390)')
    pg.screenshot(path=S + 'terms.png', full_page=True)
    # progress
    pg.click('[data-go=progress]'); pg.screenshot(path=S + 'progress.png', full_page=True)
    print('progress shows check:', '11' in pg.locator('main').inner_text())
    # extra-large text and dark mode
    pg.select_option('#sText', 'xl'); wide = []
    for L in Ls:
        pg.click('[data-go=home]'); pg.click('[data-go=home]'); pg.click(f'[data-lecture="{L["id"]}"]', position={'x': 200, 'y': 20})
        for s in pg.evaluate("[...document.querySelectorAll('.chip')].map(c => c.dataset.section)"):
            pg.click(f'.chip[data-section={s}]'); w = pg.evaluate('document.documentElement.scrollWidth')
            if w > 390: wide.append((L['id'], s, w))
    print('wide at extra large:', wide)
    if wide: print('FAIL pages wider than the screen at extra large text')
    pg.emulate_media(color_scheme='dark'); pg.click('.chip[data-section=german]'); pg.screenshot(path=S + 'dark.png')
    b.close()
print('errors', errs)
