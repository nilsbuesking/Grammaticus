/*
 * Grammaticus — the engine. Text only, no build step, no frameworks.
 * Everything about the course comes from content/catalogue.js and the lecture files it lists.
 * Progress is stored in this browser (localStorage), backed up by export and, if set up, synced to a private
 * GitHub Gist. The robustness work (damaged progress, failed saves, keeping the place, updates, the gist backup)
 * comes from Hospes and Viātor.
 */
(function () {
  'use strict';

  const CONTENT_BASE = (document.currentScript && document.currentScript.dataset.content) || 'content/';
  const BUILD = '2026-11-19j';          // shown under Progress so you can tell which version is running
  const FORMAT = 1;                      // progress format version; bump + migrate() on change
  const STORE_KEY = 'grammaticus.progress';
  const SCALES = { s: 0.92, m: 1, l: 1.15, xl: 1.3 };   // text sizes
  const PASS = 70;                       // exercise score that counts as done (exercises are optional)

  // ---------- registry used by content files ----------
  const registry = { catalogue: { units: [] }, lectures: [], checks: {} };
  window.Grammaticus = {
    setCatalogue(c) { registry.catalogue = c; },
    addLecture(lecture) { registry.lectures.push(lecture); },
    // a short diagnostic for a unit: which lectures to read closely and which to skim
    addCheck(unitId, check) { registry.checks[unitId] = check; }
  };

  // ---------- utilities ----------
  const $ = (sel, root = document) => root.querySelector(sel);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const shuffle = a => { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
  const plain = html => String(html || '').replace(/<(br|\/p|\/li|\/h3|\/div|\/tr)[^>]*>/gi, ' ').replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/\s+/g, ' ').trim();
  // for searching: case, accents and ß do not matter (ä is found by a, ß by ss)
  const fold = s => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ß/g, 'ss');

  function loadScript(src) {
    return new Promise((res, rej) => {
      const s = document.createElement('script');
      s.src = src; s.onload = res; s.onerror = () => rej(new Error('Could not load ' + src));
      document.head.appendChild(s);
    });
  }
  // Content files are downloaded in parallel but run in the order given. A file that fails is reported in `missing`
  // and skipped, so one missing lecture does not stop the whole app.
  const missing = [];
  const shortName = src => src.replace(/^.*?content\//, '');
  function loadScripts(srcs) {
    return Promise.all(srcs.map(src => new Promise(res => {
      const s = document.createElement('script');
      s.src = src; s.async = false;
      s.onload = () => res();
      s.onerror = () => { missing.push(shortName(src)); res(); };
      document.head.appendChild(s);
    })));
  }
  window.addEventListener('error', e => {
    const f = e.filename || '';
    if (f.indexOf('/content/') < 0) return;
    const name = shortName(f) + ' (error)';
    if (!missing.includes(name)) { missing.push(name); if (ready && ui.view === 'home') render(); }
  });

  // ---------- progress & storage ----------
  function freshProgress() {
    return {
      format: FORMAT, created: new Date().toISOString(), lastExport: null, current: null,
      settings: { textSize: 'l', backupDays: 7 },
      lectures: {},   // id → { started, sections: { id: true }, exBest, exRuns }
      checks: {},     // unit id → { score, total, focus: [lecture ids], t }
      misses: {}      // 'lectureId:itemId' → times missed
    };
  }
  const isObj = x => !!x && typeof x === 'object' && !Array.isArray(x);
  function migrate(p) {
    if (!isObj(p)) return freshProgress();
    // Whatever was stored or restored is brought into the expected shape, so that an incomplete or hand-edited
    // backup cannot stop the app. Anything unusable is dropped; the rest is kept.
    const base = freshProgress();
    const s = p.settings = Object.assign({}, base.settings, isObj(p.settings) ? p.settings : {});
    const pick = (v, allowed, dflt) => allowed.includes(v) ? v : dflt;
    s.textSize = pick(s.textSize, Object.keys(SCALES), base.settings.textSize);
    s.backupDays = pick(Number(s.backupDays), [3, 7, 14, 30], base.settings.backupDays);
    if (typeof p.lastExport !== 'string' || isNaN(Date.parse(p.lastExport))) p.lastExport = null;
    if (typeof p.current !== 'string') p.current = null;
    if (typeof p.created !== 'string') p.created = base.created;
    const num = (v, d) => (typeof v === 'number' && isFinite(v)) ? v : d;
    for (const k of ['lectures', 'checks', 'misses']) if (!isObj(p[k])) p[k] = {};
    for (const [k, l] of Object.entries(p.lectures)) {
      if (!isObj(l)) { delete p.lectures[k]; continue; }
      l.started = !!l.started; if (!isObj(l.sections)) l.sections = {};
      l.exBest = l.exBest == null ? null : num(l.exBest, null); l.exRuns = num(l.exRuns, 0);
    }
    for (const [k, c] of Object.entries(p.checks)) {
      if (!isObj(c) || typeof c.score !== 'number' || typeof c.total !== 'number') { delete p.checks[k]; continue; }
      if (!Array.isArray(c.focus)) c.focus = [];
    }
    for (const [k, n] of Object.entries(p.misses)) if (!(num(n, 0) > 0)) delete p.misses[k];
    p.format = FORMAT;
    return p;
  }
  let P;
  // damaged: stored progress could not be read; holdSaves: nothing is written over the original until the person
  // decides; saveFailed: the browser refused the last save; newer: written by a later version of the app
  let damaged = null, holdSaves = false, saveFailed = false, newer = false;
  function load() {
    let raw = null;
    try { raw = localStorage.getItem(STORE_KEY); } catch (e) { /* storage unavailable */ }
    try {
      const stored = raw ? JSON.parse(raw) : null;
      if (stored !== null && !isObj(stored)) throw new Error('not progress');
      if (isObj(stored) && stored.format > FORMAT) { newer = true; holdSaves = true; }
      P = migrate(stored);
    } catch (e) {
      P = freshProgress(); damaged = { kept: false };
      try { localStorage.setItem(STORE_KEY + '.damaged.' + new Date().toISOString(), raw); damaged.kept = true; } catch (e2) { holdSaves = true; }
    }
    try { navigator.storage && navigator.storage.persist && navigator.storage.persist(); } catch (e) { /* not supported */ }
  }
  function save() {
    if (holdSaves) return;
    try { localStorage.setItem(STORE_KEY, JSON.stringify(P)); saveFailed = false; scheduleSync(); }
    catch (e) {
      if (saveFailed) return;
      saveFailed = true;
      setTimeout(() => { toast('Progress could not be saved on this phone. Save a backup now.'); if (ui.view === 'home') render(); }, 0);
    }
  }
  const UNDO_KEY = STORE_KEY + '.previous';
  function keepPrevious(why) { try { localStorage.setItem(UNDO_KEY, JSON.stringify({ t: new Date().toISOString(), why, progress: P })); } catch (e) { /* no room */ } }
  function previousProgress() { try { const o = JSON.parse(localStorage.getItem(UNDO_KEY) || 'null'); return isObj(o) && isObj(o.progress) ? o : null; } catch (e) { return null; } }
  function lectureP(id) { return P.lectures[id] = P.lectures[id] || { started: false, sections: {}, exBest: null, exRuns: 0 }; }

  // ---------- problems ----------
  const ERR_KEY = 'grammaticus.errors';
  function errorLog() { try { const l = JSON.parse(localStorage.getItem(ERR_KEY) || '[]'); return Array.isArray(l) ? l : []; } catch (e) { return []; } }
  function logError(e, where) {
    try {
      const msg = String((e && (e.stack || e.message)) || e).slice(0, 700), list = errorLog(), last = list[list.length - 1];
      const at = ui.view + (ui.view === 'lecture' ? ' ' + ui.lectureId + ' ' + ui.section : '');
      if (last && last.msg === msg) { last.n = (last.n || 1) + 1; last.t = new Date().toISOString(); }
      else list.push({ t: new Date().toISOString(), build: BUILD, where, at, msg });
      localStorage.setItem(ERR_KEY, JSON.stringify(list.slice(-10)));
    } catch (x) { /* storage unavailable */ }
  }
  let lastErrorToast = 0;
  function reportError(e, where) {
    logError(e, where);
    if (Date.now() - lastErrorToast < 10000) return;
    lastErrorToast = Date.now();
    try { toast('Something went wrong. If it happens again, see Progress → Problems recorded.'); } catch (x) {}
  }
  window.addEventListener('error', e => {
    if (!(e.error || e.message) || e.message === 'Script error.') return;
    const f = e.filename || '', where = 'error' + (f ? ' in ' + shortName(f) : '');
    if (f.indexOf('/content/') >= 0) logError(e.error || e.message, where);
    else reportError(e.error || e.message, where);
  });
  window.addEventListener('unhandledrejection', e => reportError(e.reason, 'promise'));

  // ---------- course structure ----------
  const ui = { view: 'home', lectureId: null, section: 'concept', ex: null, refPage: 'search', ref: '', open: {}, fold: {}, lectureOpen: false, scroll: {} };
  let ready = false;
  const units = () => registry.catalogue.units || [];
  const unitOf = l => units().find(u => u.number === l.unit);
  const lectures = () => registry.lectures.slice().sort((a, b) => a.unit - b.unit || a.number - b.number);
  const lecturesOf = u => lectures().filter(l => l.unit === u.number);
  const findLecture = id => registry.lectures.find(l => l.id === id);
  const lnum = l => l.unit + '.' + l.number;
  const plannedCount = () => units().reduce((a, u) => a + lecturesOf(u).length + (u.planned || []).length, 0);

  // Sections of a lecture. The four core sections come first; the optional ones appear only when the lecture has
  // them. Exercises are optional and do not count towards finishing a lecture.
  const SECTIONS = [
    { id: 'concept', label: 'Concept' },
    { id: 'german', label: 'Deutsch' },
    { id: 'english', label: 'English' },
    { id: 'contrast', label: 'DE ↔ EN' },
    { id: 'usage', label: 'Rule & usage', optional: true },
    { id: 'style', label: 'Style', optional: true },
    { id: 'pitfalls', label: 'Best practice & pitfalls', optional: true },
    { id: 'latin', label: 'Latin', optional: true },
    { id: 'summary', label: 'Key points', optional: true },
    { id: 'exercises', label: 'Exercises', optional: true, extra: true }
  ];
  const has = (l, id) => id === 'exercises' ? !!(l.exercises && l.exercises.length) : id === 'summary' ? !!(l.summary && l.summary.length) : !!l[id];
  const sectionsFor = l => SECTIONS.filter(s => has(l, s.id));
  const readingSections = l => sectionsFor(l).filter(s => !s.extra);
  const sectionsDone = l => { const lp = P.lectures[l.id]; return lp ? readingSections(l).filter(s => lp.sections[s.id]).length : 0; };
  const isDone = l => sectionsDone(l) === readingSections(l).length;

  // ---------- answer checking ----------
  const normAns = (s, cs) => { let x = String(s).replace(/[’‘`]/g, "'").replace(/[„“”«»"]/g, '').replace(/\s+/g, ' ').trim().replace(/[.!?;:]+$/, '').trim(); return cs ? x : x.toLowerCase(); };
  function recordResult(key, ok) {
    if (!ok) P.misses[key] = (P.misses[key] || 0) + 1;
    else if (ui.ex && ui.ex.mode === 'missed' && P.misses[key]) delete P.misses[key];
    save();
  }

  // ---------- rendering ----------
  const root = () => $('#app');
  let toastTimer;
  function toast(msg) {
    let t = $('.toast'); if (!t) { t = document.createElement('div'); t.className = 'toast'; t.setAttribute('role', 'status'); document.body.appendChild(t); }
    t.textContent = msg; t.hidden = false;
    clearTimeout(toastTimer); toastTimer = setTimeout(() => { t.hidden = true; }, 2600);
  }
  const ICONS = {
    home: '<svg viewBox="0 0 24 24"><path d="M4 19V6.5A1.5 1.5 0 0 1 5.5 5H11v15H5.5A1.5 1.5 0 0 1 4 18.5"/><path d="M20 19V6.5A1.5 1.5 0 0 0 18.5 5H13v15h5.5a1.5 1.5 0 0 0 1.5-1.5"/></svg>',
    ref: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="6"/><path d="M20 20l-4.5-4.5"/></svg>',
    progress: '<svg viewBox="0 0 24 24"><path d="M4 20h16"/><path d="M7 16v-4M12 16V7M17 16v-7"/></svg>'
  };
  function applyTextSize() { document.documentElement.style.setProperty('--scale', SCALES[P.settings.textSize] || SCALES.l); }
  // If a page cannot be drawn, go back to the course page instead of stopping, forget the place, record the problem.
  function render() {
    try { draw(); return; } catch (e) { logError(e, 'drawing the page'); }
    try { localStorage.removeItem(PLACE_KEY); } catch (e) {}
    const was = ui.view;
    Object.assign(ui, { view: 'home', ex: null, lectureOpen: false, confirmImport: null });
    if (was !== 'home') { try { draw(); toast('That page could not be shown. The problem is recorded under Progress.'); return; } catch (e) { logError(e, 'drawing the course page'); } }
    root().innerHTML = `<div class="gutter stack" style="padding-block:40px"><p><b>The app has run into a problem and cannot show this page.</b></p>
      <p class="small">Your progress is still stored on this phone. Save a backup first, then reload. If the problem stays, reload the app files (your progress is kept).</p>
      <div class="row"><button class="btn" data-export>Save backup file</button><button class="btn quiet" data-reloadnow>Reload</button><button class="btn quiet" data-reloadfiles>Reload app files</button></div>
      <p class="small muted">${esc((errorLog().slice(-1)[0] || {}).msg || '').split('\n')[0]}</p></div>`;
  }
  function draw() {
    applyTextSize();
    const header = ui.view === 'lecture' ? `<button class="back" data-go="home">‹ Course</button><span class="spacer"></span>`
      : ui.view === 'run' ? `<button class="back" data-endrun>‹ ${ui.ex && ui.ex.mode === 'check' ? 'Course' : 'Progress'}</button><span class="spacer"></span>`
      : `<p class="brand">Grammaticus</p><span class="spacer"></span><span class="tagline">Deutsch · English</span>`;
    const body = ({ home: viewHome, lecture: viewLecture, ref: viewRef, progress: viewProgress, run: viewRun })[ui.view]();
    const tab = (id, label) => `<button class="tab" data-go="${id}" ${(ui.view === id || (id === 'home' && (ui.view === 'lecture' || (ui.view === 'run' && ui.ex && ui.ex.mode === 'check'))) || (id === 'progress' && ui.view === 'run' && ui.ex && ui.ex.mode === 'missed')) ? 'aria-current="page"' : ''}>${ICONS[id]}${label}</button>`;
    root().innerHTML = `
      <div class="app">
        <header class="top gutter">${header}</header>
        <main class="gutter">${body}</main>
      </div>
      <nav class="tabs" aria-label="Sections"><div class="tabs-inner">${tab('home', 'Course')}${tab('ref', 'Reference')}${tab('progress', 'Progress')}</div></nav>`;
    after();
    savePlace(false);
  }

  // ----- home -----
  function notices() {
    const out = [];
    if (damaged) out.push(`<div class="nudge" role="alert"><p><b>Your saved progress could not be read.</b> ${damaged.kept
        ? 'The damaged copy has been kept on this phone, and the app has started afresh. Restore your last backup under Progress → Backup.'
        : 'Nothing has been overwritten yet. Restore your last backup under Progress → Backup, or start afresh.'}</p>
      <div class="row"><button class="btn quiet" data-go="progress" data-anchor="backup">Restore a backup</button>${holdSaves ? '<button class="btn danger" data-startafresh>Start afresh</button>' : '<button class="btn quiet" data-dismissdamaged>OK</button>'}</div></div>`);
    if (newer) out.push(`<div class="nudge" role="alert"><p><b>This is an older copy of the app than the one that saved your progress.</b> Nothing new is saved until the app is up to date.</p><button class="btn quiet" data-reloadfiles>Update the app</button></div>`);
    if (saveFailed) out.push(`<div class="nudge" role="alert"><p><b>This browser is not saving your progress.</b> It may be full or in private mode. Save a backup file before you close the app.</p><button class="btn quiet" data-go="progress" data-anchor="backup">Back up now</button></div>`);
    if (missing.length) out.push(`<div class="nudge" role="alert"><p><b>Some course files could not be loaded</b> (${esc(missing.join(', '))}). Those lectures are missing for now. Check the connection and open the app again.</p></div>`);
    return out.join('');
  }
  const progressEmpty = () => !Object.keys(P.lectures).length && !Object.keys(P.checks).length;
  function backupDue() {
    if (progressEmpty()) return false;
    const cfg = syncCfg(), last = [P.lastExport, cfg && cfg.last].filter(Boolean).sort().pop();
    if (!last) return true;
    return (Date.now() - new Date(last).getTime()) / 86400000 >= P.settings.backupDays;
  }
  function nextStep() {
    for (const l of lectures()) {
      const lp = P.lectures[l.id];
      for (const s of readingSections(l)) if (!(lp && lp.sections[s.id])) return { l, s };
    }
    return null;
  }
  function lectureRow(l) {
    const secs = readingSections(l), done = sectionsDone(l), complete = done === secs.length;
    const focus = Object.values(P.checks).some(c => c.focus.includes(l.id));
    return `<button class="lect" data-lecture="${l.id}">
      <span class="num">${lnum(l)}</span>
      <span><span class="t">${esc(l.title)}</span><br><span class="s">${esc(l.subtitle || '')}</span>
        <span class="dots" aria-label="${done} of ${secs.length} sections read">${secs.map(s => `<i class="${P.lectures[l.id] && P.lectures[l.id].sections[s.id] ? 'on' : ''}"></i>`).join('')}</span></span>
      <span class="pill ${complete ? 'done' : focus ? 'focus' : ''}">${complete ? 'Read' : focus ? 'Focus' : `${l.minutes || 20} min`}</span>
    </button>`;
  }
  function unitBlock(u, openUnit) {
    const ls = lecturesOf(u), planned = u.planned || [], total = ls.length + planned.length;
    const done = ls.filter(isDone).length, chk = registry.checks[u.id], res = P.checks[u.id];
    const key = 'unit' + u.number, open = ui.fold[key] !== undefined ? ui.fold[key] : openUnit;
    return `<details class="unit" data-fold="${key}" ${open ? 'open' : ''}>
      <summary><span class="unum">${u.number}</span><span><span class="ut">${esc(u.title)}</span><br><span class="s">${ls.length ? `${done} of ${total} read` : `${total} lectures planned`}${u.optional ? ' · optional' : ''}</span></span></summary>
      ${u.intro ? `<p class="small muted unitintro">${esc(u.intro)}</p>` : ''}
      ${chk ? `<div class="checkrow"><button class="btn quiet" data-check-unit="${u.id}">${res ? 'Redo the check' : 'Check what you know'}</button><span class="small muted">${res ? `Last: ${res.score} / ${res.total}${res.focus.length ? ` · focus on ${res.focus.map(id => { const l = findLecture(id); return l ? lnum(l) : ''; }).filter(Boolean).join(', ')}` : ' · nothing to focus on'}` : `${chk.items.length} questions: shows which lectures to read closely`}</span></div>` : ''}
      <div class="lectures">${ls.map(lectureRow).join('')}${planned.map((t, i) => `<div class="lect planned"><span class="num">${u.number}.${ls.length + i + 1}</span><span><span class="t">${esc(t)}</span></span><span class="pill">Planned</span></div>`).join('')}</div>
    </details>`;
  }
  function viewHome() {
    const step = nextStep(), ls = lectures();
    const current = step ? step.l.unit : (ls.length ? ls[ls.length - 1].unit : 0);
    const nRead = ls.filter(isDone).length;
    return `
      <section class="today panel">
        <p class="eyebrow">Next</p>
        ${step ? `<p class="lead"><span class="lnum">${lnum(step.l)}</span> · ${esc(step.l.title)}</p><p class="small muted" style="margin:0">${esc(step.s.label)}</p>
          <button class="btn wide" data-lecture="${step.l.id}" data-section="${step.s.id}">${P.lectures[step.l.id] && P.lectures[step.l.id].started ? 'Continue' : 'Start lecture'}</button>`
          : ls.length ? `<p class="lead">All available lectures are read.</p><p class="small muted" style="margin:0">New lectures arrive with updates. The Reference tab has every rule and term in the meantime.</p>`
          : `<p class="lead">The first lectures are in preparation.</p>`}
        <div class="stats3">
          <div class="stat"><b>${nRead}</b><span>lectures read</span></div>
          <div class="stat"><b>${ls.length}</b><span>available</span></div>
          <div class="stat"><b>${plannedCount()}</b><span>in the course</span></div>
        </div>
      </section>
      ${notices()}
      ${backupDue() ? `<div class="nudge"><p>${P.lastExport || (syncCfg() && syncCfg().last) ? `Your last backup is more than ${P.settings.backupDays} days old.` : 'You haven’t made a backup yet.'} Progress lives only in this app.</p><button class="btn quiet" data-go="progress" data-anchor="backup">Back up now</button></div>` : ''}
      <section class="units">${units().map(u => unitBlock(u, u.number === current)).join('')}</section>`;
  }

  // ----- lecture -----
  function sectionBody(l, id) {
    if (id === 'summary') return `<div class="panel keypoints"><p class="eyebrow">Key points</p><ul class="prose">${l.summary.map(x => `<li>${x}</li>`).join('')}</ul></div>`;
    const v = l[id];
    if (Array.isArray(v)) {
      const nav = v.length > 3 ? `<nav class="jump" aria-label="Topics">${v.map((g, i) => `<button data-jump="b-${i}">${esc(g.title)}</button>`).join('')}</nav>` : '';
      return nav + v.map((g, i) => `<div class="gblock prose" id="b-${i}"><h3 class="gt">${esc(g.title)}</h3>${g.html}</div>`).join('');
    }
    return `<div class="prose">${v}</div>`;
  }
  function viewLecture() {
    const l = findLecture(ui.lectureId), lp = lectureP(l.id), secs = sectionsFor(l);
    if (!secs.some(s => s.id === ui.section)) ui.section = secs[0].id;
    const chips = secs.map(s => `<button class="chip ${s.extra ? 'extra' : ''} ${(s.extra ? lp.exBest != null && lp.exBest >= PASS : lp.sections[s.id]) ? 'done' : ''}" data-section="${s.id}" ${ui.section === s.id ? 'aria-current="true"' : ''}><span class="tick"></span>${s.label}</button>`).join('');
    const first = ui.section === secs[0].id;
    let body;
    if (ui.section === 'exercises') body = exerciseStart(l);
    else body = (first && l.intro ? `<div class="prose lead-in">${l.intro}</div>` : '') + sectionBody(l, ui.section) + doneBtn(l);
    return `
      ${first ? `<div class="lhead"><span class="numeral">${lnum(l)}</span><div><p class="eyebrow">${esc((unitOf(l) || {}).title || 'Lecture')}</p><h1>${esc(l.title)}</h1><p>${esc(l.subtitle || '')}</p></div></div>`
        : `<p class="lmini"><span class="numeral">${lnum(l)}</span> ${esc(l.title)}</p>`}
      <nav class="chips" aria-label="Lecture sections">${chips}</nav>
      <section class="stack" id="secbody">${body}</section>`;
  }
  function doneBtn(l) {
    // the Read button leads through the reading sections, then to the next lecture; the exercises are offered beside it
    const secs = readingSections(l), i = secs.findIndex(s => s.id === ui.section), next = secs[i + 1];
    const nextL = !next ? lectures()[lectures().indexOf(l) + 1] : null;
    const label = next ? `Read · next: ${esc(next.label)}` : nextL ? `Read · next lecture: ${lnum(nextL)}` : 'Read';
    const ex = !next && has(l, 'exercises') ? `<button class="btn quiet wide" data-section="exercises" data-mark="${ui.section}">Read · try the exercises (optional)</button>` : '';
    return `<button class="btn wide" data-done="${ui.section}" data-next="${next ? next.id : ''}">${label}</button>${ex}`;
  }
  function exerciseStart(l) {
    const lp = lectureP(l.id);
    if (ui.ex && ui.ex.mode === 'practice' && ui.ex.lid === l.id) return runBody();
    return `<div class="panel stack">
      <p class="prose" style="margin:0">${l.exercises.length} exercises on this lecture. They are optional: the lecture counts as read without them.</p>
      ${lp.exBest != null ? `<p class="small muted" style="margin:0">Best so far: ${lp.exBest}% (${lp.exRuns} ${lp.exRuns === 1 ? 'run' : 'runs'})</p>` : ''}
      <button class="btn wide" data-start="practice">Start exercises</button></div>`;
  }

  // ----- exercises (lecture practice, unit check, missed items) -----
  // item types: mc (options, answer), gap (prompt with ___, answers; cs: case matters), comma (words, commas, optional),
  // match (pairs), order (tokens in the right order; alt: other accepted orders as arrays of indices)
  function startRun(mode, opts) {
    let items = [];
    if (mode === 'practice') { const l = findLecture(opts.lid); items = l.exercises.map(i => Object.assign({}, i, { lid: l.id })); }
    else if (mode === 'check') items = registry.checks[opts.unit].items.map(i => Object.assign({}, i, { lid: 'check-' + opts.unit }));
    else if (mode === 'missed') {
      const all = allItems();
      items = shuffle(Object.keys(P.misses).filter(k => all[k])).sort((a, b) => P.misses[b] - P.misses[a]).slice(0, 15).map(k => all[k]);
    }
    if (!items.length) return false;
    ui.ex = { mode, lid: opts.lid || null, unit: opts.unit || null, items, i: 0, score: 0, state: null, finished: false, perm: null, wrong: [] };
    return true;
  }
  function allItems() {
    const out = {};
    for (const l of lectures()) for (const i of l.exercises || []) out[l.id + ':' + i.id] = Object.assign({}, i, { lid: l.id });
    return out;
  }
  const itemKey = item => item.lid + ':' + item.id;
  function viewRun() {
    const x = ui.ex;
    if (!x) return '<p>Nothing to practise.</p>';
    const title = x.mode === 'check' ? `Check · Unit ${(units().find(u => u.id === x.unit) || {}).number}: ${esc((units().find(u => u.id === x.unit) || {}).title || '')}` : 'Missed exercises';
    return `<h2 class="section">${title}</h2>${x.mode === 'check' && x.i === 0 && !x.state && registry.checks[x.unit].intro ? `<p class="small muted" style="margin:0">${esc(registry.checks[x.unit].intro)}</p>` : ''}${runBody()}`;
  }
  function runBody() {
    const x = ui.ex;
    if (x.finished) return runResult();
    const item = x.items[x.i], l = x.mode !== 'check' && findLecture(item.lid);
    return `
      <div class="exhead"><span>${x.mode === 'check' ? 'Question' : 'Exercise'} ${x.i + 1} of ${x.items.length}</span><span>${x.score} correct</span></div>
      <div class="bar"><i style="width:${100 * x.i / x.items.length}%"></i></div>
      ${x.mode === 'missed' && l ? `<p class="small muted from">From ${lnum(l)} · ${esc(l.title)}</p>` : ''}
      ${renderItem(item, x.state || {})}`;
  }
  function runResult() {
    const x = ui.ex, pct = Math.round(100 * x.score / x.items.length);
    let note = '', btns = '';
    if (x.mode === 'practice') {
      note = pct >= PASS ? 'Well within reach. Missed items are kept under Progress for practice.' : 'Worth rereading the sections behind the items you missed; they are kept under Progress for practice.';
      btns = `<button class="btn quiet" data-start="practice">Again</button><button class="btn" style="flex:1" data-go="home">Course</button>`;
    } else if (x.mode === 'check') {
      const res = P.checks[x.unit], ls = res.focus.map(findLecture).filter(Boolean);
      note = ls.length ? `Read these closely: ${ls.map(l => `<b>${lnum(l)}</b> ${esc(l.title)}`).join('; ')}. The others you can skim.` : 'No lecture stands out: skim the unit and read where something surprises you.';
      btns = `<button class="btn" style="flex:1" data-endrun>Back to the course</button>`;
    } else {
      const left = Object.keys(P.misses).filter(k => allItems()[k]).length;
      note = left ? `${left} still to practise.` : 'Nothing left to practise.';
      btns = `${left ? '<button class="btn quiet" data-review>Practise again</button>' : ''}<button class="btn" style="flex:1" data-endrun>Done</button>`;
    }
    return `<div class="panel stack"><p class="eyebrow">Result</p><p class="lead" style="margin:0">${x.score} / ${x.items.length} · ${pct}%</p><p class="small" style="margin:0">${note}</p><div class="row">${btns}</div></div>`;
  }
  function feedbackHtml(st, item, extra) {
    if (!st || !st.checked) return '';
    const parts = [st.ok ? '<b>Correct.</b>' : '<b>Not quite.</b>'];
    if (extra) parts.push(extra);
    if (item.explain) parts.push(`<span class="small">${item.explain}</span>`);
    return `<div class="feedback ${st.ok ? 'ok' : 'no'}" role="status">${parts[0]}${parts.slice(1).join('<br>')}</div>`;
  }
  const checkBtn = st => st.checked ? `<button class="btn wide" data-next-item>Next</button>` : `<button class="btn wide" data-check>Check</button>`;
  const langAttr = item => item.lang ? ` lang="${item.lang}"` : '';
  function renderItem(item, st) {
    const ex = ui.ex;
    switch (item.type) {
      case 'mc': {
        const order = item.keepOrder ? item.options.map((_, i) => i) : (ex.perm || (ex.perm = shuffle(item.options.map((_, i) => i))));
        return `<p class="q"${langAttr(item)}>${item.prompt}</p><div class="opts">${order.map(i => {
          let cls = ''; if (st.checked) { if (i === item.answer) cls = 'right'; else if (i === st.choice) cls = 'wrong'; }
          return `<button class="opt ${cls}" data-choice="${i}" ${st.checked ? 'disabled' : ''}>${item.options[i]}</button>`;
        }).join('')}</div>${feedbackHtml(st, item)}${st.checked ? checkBtn(st) : ''}`;
      }
      case 'gap':
        return `<p class="q"${langAttr(item)}>${item.prompt}${item.hint ? `<span class="hint">${esc(item.hint)}</span>` : ''}</p>
          <input class="field ${st.checked ? (st.ok ? 'right' : 'wrong') : ''}" id="ans" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" enterkeyhint="done" placeholder="${esc(item.placeholder || 'Type your answer')}" value="${esc(st.value || '')}" ${st.checked ? 'readonly' : ''}${langAttr(item)}>
          ${feedbackHtml(st, item, st.checked && !st.ok ? `Answer: <b>${esc(item.answers[0])}</b>` : '')}${checkBtn(st)}`;
      case 'comma': {
        const on = st.on || (st.on = []);
        const slots = item.words.map((w, i) => {
          const last = i === item.words.length - 1;
          let cls = '';
          if (st.checked && !last) { const need = item.commas.includes(i), opt = (item.optional || []).includes(i), set = on.includes(i);
            cls = need && set ? 'right' : need ? 'missed' : set && !opt ? 'wrong' : set && opt ? 'right' : opt ? 'opt' : ''; }
          return `<span class="cw">${esc(w)}</span>${last ? '' : `<button class="slot ${on.includes(i) ? 'on' : ''} ${cls}" data-slot="${i}" ${st.checked ? 'disabled' : ''} aria-label="Comma after ${esc(w)}"><span>${on.includes(i) || (st.checked && item.commas.includes(i)) ? ',' : ''}</span></button>`}`;
        }).join('');
        return `<p class="eyebrow">${esc(item.prompt || 'Tap between words to set a comma')}</p>
          <p class="commaline"${langAttr(item)}>${slots}</p>
          ${st.checked ? '' : '<p class="small muted" style="margin:0">Tap the gap after a word to add a comma; tap again to remove it.</p>'}
          ${feedbackHtml(st, item, st.checked ? `<span${langAttr(item)}>${esc(commaText(item))}</span>${(item.optional || []).length ? '<br><span class="small">A dotted gap is a comma you may set or leave out.</span>' : ''}` : '')}${checkBtn(st)}`;
      }
      case 'match': {
        if (!st.right) { st.right = shuffle(item.pairs.map((_, i) => i)); st.left = shuffle(item.pairs.map((_, i) => i)); st.done = []; st.misses = 0; ex.state = st; }
        return `<p class="q">${item.prompt}</p><div class="match">
          <div class="col">${st.left.map(i => `<button class="${st.done.includes(i) ? 'matched' : ''} ${st.sel === i ? 'sel' : ''}" data-ml="${i}" ${st.done.includes(i) ? 'disabled' : ''}>${item.pairs[i][0]}</button>`).join('')}</div>
          <div class="col">${st.right.map(i => `<button class="${st.done.includes(i) ? 'matched' : ''} ${st.miss === i ? 'miss' : ''}" data-mr="${i}" ${st.done.includes(i) ? 'disabled' : ''}>${item.pairs[i][1]}</button>`).join('')}</div>
        </div>${st.checked ? feedbackHtml(st, item) + checkBtn(st) : '<p class="small muted">Tap an item on the left, then its partner on the right.</p>'}`;
      }
      case 'order': {
        if (!st.bank) { st.bank = shuffle(item.tokens.map((_, i) => i)); st.line = []; ex.state = st; }
        return `<p class="q">${item.prompt}</p>
          <div class="order-line" aria-label="Your answer"${langAttr(item)}>${st.line.map(i => `<button class="tok" data-ol="${i}" ${st.checked ? 'disabled' : ''}>${esc(item.tokens[i])}</button>`).join('')}</div>
          <div class="order-bank"${langAttr(item)}>${st.bank.filter(i => !st.line.includes(i)).map(i => `<button class="tok" data-ob="${i}">${esc(item.tokens[i])}</button>`).join('')}</div>
          ${feedbackHtml(st, item, st.checked && !st.ok ? `Answer: <span${langAttr(item)}>${esc(item.tokens.join(' '))}</span>` : '')}${checkBtn(st)}`;
      }
    }
    return `<p class="small muted">Unknown exercise type “${esc(item.type)}”.</p>`;
  }
  const commaText = item => item.words.map((w, i) => w + (item.commas.includes(i) ? ',' : '')).join(' ');
  function checkItem() {
    const x = ui.ex, item = x.items[x.i], st = x.state || (x.state = {});
    if (item.type === 'gap') {
      st.value = ($('#ans') || {}).value || ''; if (!st.value.trim()) return;
      st.ok = item.answers.some(a => normAns(a, item.cs) === normAns(st.value, item.cs));
    } else if (item.type === 'comma') {
      const on = st.on || [], opt = item.optional || [];
      st.ok = item.commas.every(i => on.includes(i)) && on.every(i => item.commas.includes(i) || opt.includes(i));
    } else if (item.type === 'order') {
      if (st.line.length !== item.tokens.length) { toast('Use all the pieces first.'); return; }
      const ok = seq => seq.every((v, i) => v === st.line[i]);
      st.ok = ok(item.tokens.map((_, i) => i)) || (item.alt || []).some(ok);
    } else return;
    finishItem(st.ok);
  }
  function finishItem(ok) {
    const x = ui.ex, item = x.items[x.i], st = x.state;
    st.checked = true; st.ok = ok;
    if (ok) x.score++; else x.wrong.push(item);
    if (x.mode !== 'check') recordResult(itemKey(item), ok);
    ui.reveal = true; render();
  }
  function nextItem() {
    const x = ui.ex; x.i++; x.state = null; x.perm = null;
    if (x.i >= x.items.length) {
      x.finished = true;
      const pct = Math.round(100 * x.score / x.items.length);
      if (x.mode === 'practice') { const lp = lectureP(x.lid); lp.exRuns++; lp.exBest = Math.max(lp.exBest || 0, pct); }
      if (x.mode === 'check') {
        // a lecture needs attention when any of its questions was missed; in the order of the course
        const focus = [...new Set(x.wrong.map(i => i.lecture).filter(Boolean))].filter(findLecture).sort((a, b) => lectures().indexOf(findLecture(a)) - lectures().indexOf(findLecture(b)));
        P.checks[x.unit] = { score: x.score, total: x.items.length, focus, t: new Date().toISOString() };
      }
      save();
    }
    render(); window.scrollTo(0, 0); focusAnswer();
  }
  function focusAnswer() { const f = $('#ans'); if (f && !f.readOnly) f.focus({ preventScroll: true }); }

  // ----- reference: search, quick-reference cards, terms -----
  // Built once from the lectures: every block of text, every card and every term, for searching offline.
  let index = null;
  function buildIndex() {
    const items = [];
    for (const l of lectures()) {
      for (const s of sectionsFor(l)) {
        if (s.id === 'exercises') continue;
        const v = s.id === 'summary' ? [{ title: 'Key points', html: l.summary.join(' ') }] : Array.isArray(l[s.id]) ? l[s.id] : [{ title: '', html: l[s.id] }];
        v.forEach((b, bi) => items.push({ kind: 'text', l, s, bi: Array.isArray(l[s.id]) ? bi : null, title: b.title, text: plain(b.html) }));
        if (s.id === 'concept' && l.intro) items.push({ kind: 'text', l, s, bi: null, title: '', text: plain(l.intro) });
      }
    }
    index = { items };
  }
  const cards = () => lectures().flatMap(l => (l.cards || []).map(c => Object.assign({ l }, c)));
  const terms = () => lectures().flatMap(l => (l.terms || []).map(t => Object.assign({ l }, t))).sort((a, b) => fold(a.en).localeCompare(fold(b.en)));
  function hl(text, q) {
    // a snippet of about 220 characters around the first match, the matches marked
    const ft = fold(text), at = ft.indexOf(q);
    let start = Math.max(0, at - 80); if (start) { const sp = text.indexOf(' ', start); if (sp >= 0 && sp < at) start = sp + 1; }
    const end = Math.min(text.length, start + 220);
    let snip = (start ? '… ' : '') + text.slice(start, end) + (end < text.length ? ' …' : '');
    const fs = fold(snip); let out = '', i = 0;
    while (true) { const j = fs.indexOf(q, i); if (j < 0 || !q) break; out += esc(snip.slice(i, j)) + '<mark>' + esc(snip.slice(j, j + q.length)) + '</mark>'; i = j + q.length; }
    return out + esc(snip.slice(i));
  }
  function searchHits() {
    const q = fold(ui.ref.trim());
    if (q.length < 2) return null;
    if (!index) buildIndex();
    const cardHits = cards().filter(c => fold(c.title + ' ' + plain(c.html) + ' ' + (c.tags || []).join(' ')).includes(q));
    const termHits = terms().filter(t => fold([t.de, t.en, t.la, t.note].filter(Boolean).join(' ')).includes(q));
    const textHits = index.items.filter(it => fold(it.title + ' ' + it.text).includes(q));
    return { q, cardHits, termHits, textHits };
  }
  function hitsHtml() {
    const h = searchHits();
    if (!h) return `<p class="small muted">Type at least two letters. The search covers every lecture, the quick-reference cards and the terms, offline. Umlauts and ß may be typed as a, o, u and ss.</p>`;
    const n = h.cardHits.length + h.termHits.length + h.textHits.length;
    if (!n) return `<p class="small muted">Nothing found for “${esc(ui.ref.trim())}”.</p>`;
    return `${h.cardHits.length ? `<p class="eyebrow">Quick reference</p>${h.cardHits.map(cardHtml).join('')}` : ''}
      ${h.termHits.length ? `<p class="eyebrow">Terms</p>${termsTable(h.termHits)}` : ''}
      ${h.textHits.length ? `<p class="eyebrow">In the lectures (${h.textHits.length})</p><div class="hits">${h.textHits.slice(0, 40).map(it => `<button class="hit" data-lecture="${it.l.id}" data-section="${it.s.id}"${it.bi != null ? ` data-block="${it.bi}"` : ''}><span class="hwhere">${lnum(it.l)} · ${esc(it.s.label)}${it.title ? ' · ' + esc(it.title) : ''}</span><span class="hsnip">${hl((it.title ? it.title + ': ' : '') + it.text, h.q)}</span></button>`).join('')}</div>${h.textHits.length > 40 ? '<p class="small muted">The first 40 are shown; a longer search word narrows them down.</p>' : ''}` : ''}`;
  }
  const cardHtml = c => `<details class="qcard" data-keep="card-${esc(c.l.id + '-' + c.id)}" ${ui.open['card-' + c.l.id + '-' + c.id] ? 'open' : ''}><summary><span>${esc(c.title)}</span><span class="small muted">${lnum(c.l)}</span></summary><div class="prose">${c.html}</div><button class="back small" data-lecture="${c.l.id}">Open lecture ${lnum(c.l)} ›</button></details>`;
  const termsTable = list => `<div class="tablewrap"><table class="terms"><thead><tr><th>English</th><th>Deutsch</th><th>Latin</th></tr></thead><tbody>${list.map(t => `<tr><td>${esc(t.en)}${t.note ? `<span class="tnote">${esc(t.note)}</span>` : ''}</td><td lang="de">${esc(t.de || '–')}</td><td lang="la">${esc(t.la || '–')}</td></tr>`).join('')}</tbody></table></div>`;
  function viewRef() {
    const page = ui.refPage, cs = cards(), ts = terms();
    const nav = `<nav class="row refnav" aria-label="Reference pages">${[['search', 'Search'], ['cards', `Quick reference (${cs.length})`], ['terms', `Terms (${ts.length})`]].map(([id, label]) => `<button class="chip" data-refpage="${id}" ${page === id ? 'aria-current="true"' : ''}>${label}</button>`).join('')}</nav>`;
    let body = '';
    if (page === 'search') body = `<div class="search"><input class="field" id="refsearch" type="search" placeholder="Search: Komma, Präteritum, which …" autocomplete="off" autocapitalize="off" spellcheck="false" enterkeyhint="search" value="${esc(ui.ref)}"></div><div id="refhits" class="stack">${hitsHtml()}</div>`;
    else if (page === 'cards') body = cs.length ? units().map(u => { const list = cs.filter(c => c.l.unit === u.number); return list.length ? `<p class="eyebrow">${u.number} · ${esc(u.title)}</p>${list.map(cardHtml).join('')}` : ''; }).join('') : '<p class="small muted">The cards arrive with the lectures.</p>';
    else body = ts.length ? `<p class="small muted" style="margin:0">Grammatical terms in English, German and the Latin they mostly come from, from all lectures so far.</p>${termsTable(ts)}` : '<p class="small muted">The terms arrive with the lectures.</p>';
    return `<h2 class="section">Reference</h2>${nav}<div class="stack">${body}</div>`;
  }

  // ----- progress & settings -----
  function viewProgress() {
    const ls = lectures(), nMissed = Object.keys(P.misses).filter(k => allItems()[k]).length;
    const lrows = ls.map(l => { const lp = P.lectures[l.id]; return `<dt>${lnum(l)} · ${esc(l.title)}</dt><dd>${sectionsDone(l)}/${readingSections(l).length}${lp && lp.exBest != null ? ` · ${lp.exBest}%` : ''}</dd>`; }).join('');
    const crows = units().filter(u => registry.checks[u.id]).map(u => { const c = P.checks[u.id]; return `<dt>Unit ${u.number} · ${esc(u.title)}</dt><dd>${c ? `${c.score}/${c.total}` : '–'}</dd>`; }).join('');
    const errs = errorLog(), prev = previousProgress();
    return `
      <h2 class="section">Progress</h2>
      <div class="panel"><p class="eyebrow">Lectures · sections read · best exercise score</p>${ls.length ? `<dl class="kv">${lrows}</dl>` : '<p class="small muted">No lectures yet.</p>'}</div>
      ${crows ? `<div class="panel"><p class="eyebrow">Unit checks</p><dl class="kv">${crows}</dl></div>` : ''}
      <div class="panel stack" id="revision"><p class="eyebrow">Missed exercises</p>
        <p class="small" style="margin:0">Exercises you got wrong are kept here. Each leaves the list when you get it right.</p>
        <button class="btn" data-review ${nMissed ? '' : 'disabled'}>Practise missed exercises (${nMissed})</button></div>
      <div class="panel stack" id="backup">
        <p class="eyebrow">Backup</p>
        <p class="small" style="margin:0">Your progress is stored in this app on this phone. Deleting the app or clearing website data deletes it, so keep a backup: automatically on GitHub, or as a file in Files or iCloud Drive.</p>
        <p class="small muted" style="margin:0">Last backup file: ${P.lastExport ? new Date(P.lastExport).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : 'never'}</p>
        ${syncPanel()}
        <div class="row"><button class="btn" data-export>Save backup file</button><button class="btn quiet" data-copybackup>Copy backup text</button></div>
        ${ui.showBackup ? `<textarea class="field small" id="backuptext" readonly>${esc(JSON.stringify(exportObj()))}</textarea>` : ''}
        <details id="restore" ${ui.confirmImport || ui.restoreOpen ? 'open' : ''}><summary class="small">Restore from a backup</summary>
          <div class="stack" style="margin-top:10px">
            <label class="small" for="importfile">Choose a backup file</label>
            <input type="file" id="importfile" accept=".json,application/json,text/plain">
            <label class="small" for="importtext">or paste backup text</label>
            <textarea class="field small" id="importtext" placeholder='{"app":"grammaticus", …}'></textarea>
            <button class="btn quiet" data-importtext>Read pasted text</button>
            ${ui.confirmImport ? `<div class="feedback no" id="confirmimport"><b>Replace current progress?</b>The backup is from ${esc(new Date(ui.confirmImport.exportedAt).toLocaleString('en-GB'))}. Everything stored now will be overwritten.<div class="row" style="margin-top:8px"><button class="btn danger" data-doimport>Replace</button><button class="btn quiet" data-cancelimport>Cancel</button></div></div>` : ''}
          </div></details>
        ${prev ? `<p class="small" id="previous" style="margin:0">Your progress as it was before the last ${esc(prev.why)} (${esc(new Date(prev.t).toLocaleString('en-GB', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }))}) is still on this phone. <button class="back" data-undoprogress>Put it back</button></p>` : ''}
      </div>
      <div class="panel">
        <p class="eyebrow">Settings</p>
        <div class="setting"><label for="sText">Text size<small>Applies to the whole app.</small></label><select class="field" id="sText">${[['s', 'Small'], ['m', 'Medium'], ['l', 'Large'], ['xl', 'Extra large']].map(([k, n]) => `<option value="${k}" ${P.settings.textSize === k ? 'selected' : ''}>${n}</option>`).join('')}</select></div>
        <div class="setting"><label for="sBackup">Backup reminder</label><select class="field" id="sBackup">${[3, 7, 14, 30].map(n => `<option value="${n}" ${P.settings.backupDays === n ? 'selected' : ''}>every ${n} days</option>`).join('')}</select></div>
        <div class="setting"><label>App version ${BUILD}<small>Updates install by themselves when you are online. Use this if a change has not arrived.</small></label><button class="btn quiet" data-update>Check for updates</button></div>
        <div class="setting"><label>Reload app files<small>Discards the stored copy of the app and downloads it again. Your progress is kept.</small></label><button class="btn quiet" data-hardreload>${ui.confirmHard ? 'Tap again to reload' : 'Reload'}</button></div>
        <div class="setting"><label>Reset all progress<small>Can be taken back once (under Backup); save a backup first all the same.</small></label><button class="btn danger" data-reset>${ui.confirmReset ? 'Tap again to reset' : 'Reset'}</button></div>
      </div>
      ${errs.length ? `<details class="panel" id="problems" data-fold="errors" ${ui.fold.errors ? 'open' : ''}><summary>Problems recorded (${errs.length})</summary>
        <div class="stack" style="margin-top:10px"><p class="small" style="margin:0">If something did not work, copy this text when you report it. It contains no personal data.</p>
        <textarea class="field small" id="errtext" readonly rows="6">${esc(errorText(errs))}</textarea>
        <div class="row"><button class="btn quiet" data-copyerrors>Copy</button><button class="btn quiet" data-clearerrors>Clear</button></div></div></details>` : ''}
      <p class="small muted">Grammaticus · version ${BUILD} · progress format ${FORMAT}</p>`;
  }
  const errorText = list => list.map(e => `${e.t} · version ${e.build}${e.n ? ' · ' + e.n + '×' : ''} · ${e.where || ''} · ${e.at || ''}\n${e.msg}`).join('\n\n');
  function exportObj() { return { app: 'grammaticus', format: FORMAT, exportedAt: new Date().toISOString(), progress: P }; }
  async function doExport() {
    const text = JSON.stringify(exportObj(), null, 1), name = `grammaticus-backup-${new Date().toISOString().slice(0, 10)}.json`;
    try {
      const file = new File([text], name, { type: 'application/json' });
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({ files: [file], title: 'Grammaticus backup' });
        P.lastExport = new Date().toISOString(); save(); render(); toast('Backup saved.'); return;
      }
    } catch (e) { if (e && e.name === 'AbortError') return; }
    try {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(new Blob([text], { type: 'application/json' })); a.download = name;
      document.body.appendChild(a); a.click(); a.remove();
      P.lastExport = new Date().toISOString(); save(); render();
      toast('If no file appeared, use Copy backup text.');
    } catch (e) { toast('Saving a file is blocked here. Use Copy backup text.'); }
  }
  async function copyBackup() {
    const text = JSON.stringify(exportObj());
    try { await navigator.clipboard.writeText(text); P.lastExport = new Date().toISOString(); save(); ui.showBackup = false; render(); toast('Backup copied. Paste it into Notes or a file.'); }
    catch (e) { ui.showBackup = true; render(); const t = $('#backuptext'); if (t) { t.focus(); t.select(); } toast('Select the text below and copy it.'); }
  }
  function readImport(text) {
    try {
      const o = JSON.parse(text);
      if (!isObj(o) || o.app !== 'grammaticus' || !isObj(o.progress)) throw new Error();
      if (o.format > FORMAT || o.progress.format > FORMAT) { toast('This backup comes from a newer version of the app. Update the app first (Settings → Check for updates).'); return; }
      ui.confirmImport = o; render();
      const el = $('#confirmimport'); if (el) el.scrollIntoView({ block: 'center' });
    } catch (e) { toast('That is not a Grammaticus backup.'); }
  }
  function armConfirm(flag, btn, armed, idle) {
    ui[flag] = true; btn.textContent = armed;
    setTimeout(() => { ui[flag] = false; if (document.contains(btn)) btn.textContent = idle; }, 4000);
  }
  async function reloadFiles() {
    try { const r = await fetch('sw.js', { cache: 'no-store' }); if (!r.ok) throw new Error(); }
    catch (e) { toast('The server cannot be reached, so nothing was changed. Try again when you are online.'); return; }
    try {
      if (window.caches) { const ks = await caches.keys(); await Promise.all(ks.filter(k => !/-media$/.test(k)).map(k => caches.delete(k))); }
      if (navigator.serviceWorker) { const rs = await navigator.serviceWorker.getRegistrations(); await Promise.all(rs.map(r => r.unregister())); }
    } catch (e) { /* reload anyway */ }
    location.reload();
  }

  // ---------- automatic backup to a private GitHub Gist ----------
  // The token and the gist id stay on this phone (grammaticus.sync), never in a backup file. Progress is uploaded a
  // little after each change while online, and when the app goes into the background. Empty progress is never
  // uploaded, so a fresh install cannot overwrite the backup before it has been restored.
  const SYNC_KEY = 'grammaticus.sync', GIST_FILE = 'grammaticus-progress.json', SYNC_DELAY = 20000;
  let syncTimer = null, syncBusy = false;
  function syncCfg() { try { const o = JSON.parse(localStorage.getItem(SYNC_KEY) || 'null'); return isObj(o) && typeof o.token === 'string' ? o : null; } catch (e) { return null; } }
  function saveSyncCfg(o) { try { if (o) localStorage.setItem(SYNC_KEY, JSON.stringify(o)); else localStorage.removeItem(SYNC_KEY); } catch (e) {} }
  const hashText = t => { let h = 5381; for (let i = 0; i < t.length; i++) h = ((h << 5) + h + t.charCodeAt(i)) | 0; return String(h >>> 0); };
  async function gh(cfg, method, url, body) {
    const r = await fetch('https://api.github.com' + url, { method, cache: 'no-store',
      headers: Object.assign({ Authorization: 'Bearer ' + cfg.token, Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' }, body ? { 'Content-Type': 'application/json' } : {}),
      body: body ? JSON.stringify(body) : undefined });
    if (!r.ok) { const e = new Error('GitHub answered ' + r.status); e.status = r.status; throw e; }
    return r.status === 204 ? null : r.json();
  }
  const syncError = e => e && (e.status === 401 || e.status === 403) ? 'GitHub refused the token (expired, or without the Gists permission).'
    : e && e.status === 404 ? 'The backup gist was not found (deleted?). Use Disconnect, then connect again.'
    : 'No connection to GitHub.';
  async function syncUp(manual) {
    const cfg = syncCfg(); if (!cfg || syncBusy) return;
    if ((progressEmpty() || cfg.hold) && !manual) return;
    if (!manual && navigator.onLine === false) return;
    const text = JSON.stringify(exportObj(), null, 1), h = hashText(JSON.stringify(P));
    if (!manual && cfg.lastHash === h) return;
    syncBusy = true;
    try {
      if (cfg.gistId) await gh(cfg, 'PATCH', '/gists/' + cfg.gistId, { files: { [GIST_FILE]: { content: text } } });
      else { const g = await gh(cfg, 'POST', '/gists', { description: 'Grammaticus progress (automatic backup from the app)', public: false, files: { [GIST_FILE]: { content: text } } }); cfg.gistId = g.id; }
      Object.assign(cfg, { last: new Date().toISOString(), lastHash: h, error: null, hold: false }); saveSyncCfg(cfg);
      if (manual) toast('Backed up to GitHub.');
    } catch (e) {
      cfg.error = syncError(e); cfg.errorAt = new Date().toISOString(); saveSyncCfg(cfg);
      if (manual) toast(cfg.error);
    } finally { syncBusy = false; if (ui.view === 'progress') { const y = window.scrollY; render(); window.scrollTo(0, y); } }
  }
  function scheduleSync() { if (!syncCfg()) return; clearTimeout(syncTimer); syncTimer = setTimeout(() => syncUp(false), SYNC_DELAY); }
  async function syncConnect(token) {
    token = String(token || '').trim(); if (!token) { toast('Paste the token first.'); return; }
    const cfg = { token };
    toast('Connecting…');
    try {
      let found = null;
      for (let page = 1; page <= 5 && !found; page++) {
        const list = await gh(cfg, 'GET', `/gists?per_page=100&page=${page}`);
        found = list.find(g => g.files && g.files[GIST_FILE]);
        if (list.length < 100) break;
      }
      if (found) cfg.gistId = found.id;
      saveSyncCfg(cfg); ui.syncToken = '';
      if (found && progressEmpty()) { toast('Connected. A backup was found on GitHub.'); await syncDown(); return; }
      if (found) { cfg.hold = true; saveSyncCfg(cfg); render(); toast('Connected. A backup already exists on GitHub: restore it, or tap Back up now to replace it.'); return; }
      toast('Connected. The first backup is being made.');
      render(); syncUp(true);
    } catch (e) { toast(syncError(e)); }
  }
  async function syncDown() {
    const cfg = syncCfg(); if (!cfg || !cfg.gistId) { toast('There is no backup on GitHub yet.'); return; }
    try {
      const g = await gh(cfg, 'GET', '/gists/' + cfg.gistId), f = g.files && g.files[GIST_FILE];
      if (!f) throw Object.assign(new Error('no file'), { status: 404 });
      let text = f.content;
      if (f.truncated && f.raw_url) { const r = await fetch(f.raw_url, { cache: 'no-store' }); text = await r.text(); }
      ui.view = 'progress'; ui.restoreOpen = true; render(); readImport(text);
    } catch (e) { toast(syncError(e)); }
  }
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden' && syncCfg()) { clearTimeout(syncTimer); syncUp(false); } });
  window.addEventListener('online', () => scheduleSync());
  function syncPanel() {
    const cfg = syncCfg();
    const when = t => new Date(t).toLocaleString('en-GB', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
    if (!cfg) return `<details class="sub" id="syncsetup" ${ui.syncOpen ? 'open' : ''}><summary class="small"><b>Automatic backup to GitHub</b> · not set up</summary>
      <div class="stack" style="margin-top:10px">
        <p class="small" style="margin:0">Backs up your progress to a private gist on your GitHub account whenever you are online. It needs a token that can do nothing but read and write gists. The token you made for Hospes works here too; or make one:</p>
        <ol class="small steps"><li>On github.com: Settings → Developer settings → Personal access tokens → <b>Fine-grained tokens</b> → Generate new token.</li>
          <li>Name it “Grammaticus”, expiry as long as you like. Repository access: <b>Public repositories</b> (read-only, i.e. none of yours).</li>
          <li>Under <b>Account permissions</b>, set <b>Gists</b> to <b>Read and write</b>. Nothing else.</li>
          <li>Generate, copy the token, paste it here.</li></ol>
        <input class="field" id="synctoken" type="password" placeholder="github_pat_…" autocomplete="off" autocapitalize="off" spellcheck="false" value="${esc(ui.syncToken || '')}">
        <button class="btn" data-syncconnect>Connect</button>
        <p class="small muted" style="margin:0">The token is kept on this phone only. It is not part of backup files. The backup is a separate gist (grammaticus-progress.json), so Hospes’s backup is not touched.</p>
      </div></details>`;
    return `<div class="sub stack" id="syncsetup"><p class="small" style="margin:0"><b>Automatic backup to GitHub</b> · on</p>
      <p class="small muted" style="margin:0">${cfg.last ? `Last backed up ${esc(when(cfg.last))}.` : 'Not backed up yet.'}${cfg.error && (!cfg.last || cfg.errorAt > cfg.last) ? ` <span class="warn">Last attempt failed (${esc(when(cfg.errorAt))}): ${esc(cfg.error)}</span>` : ''}</p>
      ${cfg.hold ? '<p class="small warn" style="margin:0">Paused: there is a backup on GitHub from before. Restore it, or tap Back up now to replace it with the progress on this phone.</p>' : ''}
      <div class="row"><button class="btn quiet" data-syncnow>Back up now</button><button class="btn quiet" data-syncdown>Restore from GitHub</button><button class="btn quiet" data-syncoff>${ui.confirmSyncOff ? 'Tap again' : 'Disconnect'}</button></div></div>`;
  }

  // ---------- updates ----------
  let updatePending = false;
  window.Grammaticus.updateReady = () => {
    if (ui.view === 'home' && !ui.confirmImport) { location.reload(); return; }
    updatePending = true;
    if ($('.updatebar')) return;
    const b = document.createElement('div'); b.className = 'updatebar'; b.setAttribute('role', 'status');
    b.innerHTML = '<span>A new version of the app is ready.</span><button class="btn quiet" data-reloadnow>Reload now</button>';
    document.body.appendChild(b);
  };

  // ---------- events ----------
  function go(view) {
    if (ui.view === 'lecture' || ui.view === 'ref') ui.scroll[ui.view] = window.scrollY;
    if (view === 'home') {
      if (ui.view !== 'lecture' && ui.view !== 'home' && ui.lectureOpen && findLecture(ui.lectureId)) view = 'lecture';
      else ui.lectureOpen = false;
    }
    if (updatePending && view === 'home') { ui.view = 'home'; savePlace(); location.reload(); return; }
    const same = ui.view === view;
    ui.view = view; render(); window.scrollTo(0, !same && (view === 'lecture' || view === 'ref') ? ui.scroll[view] || 0 : 0);
  }
  function openLecture(id, section, block) {
    const l = findLecture(id); if (!l) return;
    if (!(ui.ex && ui.ex.mode === 'practice' && ui.ex.lid === id && !ui.ex.finished)) { if (!ui.ex || ui.ex.mode === 'practice') ui.ex = null; }
    if (!section) { const lp = P.lectures[id]; const s = readingSections(l).find(x => !(lp && lp.sections[x.id])); section = s ? s.id : sectionsFor(l)[0].id; }
    ui.view = 'lecture'; ui.lectureId = id; ui.section = section; ui.lectureOpen = true; ui.open = {};
    const lp = lectureP(id); if (!lp.started) lp.started = true;
    P.current = id; save();
    render(); window.scrollTo(0, 0);
    if (block != null) { const el = document.getElementById('b-' + block); if (el) el.scrollIntoView({ block: 'start' }); }
  }
  let searchTimer = null;
  function after() {
    const rs = $('#refsearch');
    if (rs) rs.oninput = () => { ui.ref = rs.value; clearTimeout(searchTimer); searchTimer = setTimeout(() => { const h = $('#refhits'); if (h) { h.innerHTML = hitsHtml(); markWide(h); } }, 150); };
    const bind = (id, fn) => { const el = $('#' + id); if (el) el.onchange = () => { fn(el); save(); render(); }; };
    bind('sText', el => { P.settings.textSize = el.value; });
    bind('sBackup', el => { P.settings.backupDays = Number(el.value); });
    const rd = $('#restore'); if (rd) rd.ontoggle = () => { ui.restoreOpen = rd.open; };
    const ss = $('#syncsetup'); if (ss && ss.tagName === 'DETAILS') ss.ontoggle = () => { ui.syncOpen = ss.open; };
    const f = $('#importfile');
    if (f) f.onchange = () => { const file = f.files[0]; if (!file) return; const r = new FileReader(); r.onload = () => readImport(r.result); r.readAsText(file); };
    const ans = $('#ans'); if (ans && !ans.readOnly) ans.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.isComposing) { e.preventDefault(); checkItem(); } });
    if (ui.reveal) { ui.reveal = false; const nb = $('[data-next-item]'), tabs = $('.tabs');
      if (nb && tabs) { const limit = tabs.getBoundingClientRect().top - 12, b = nb.getBoundingClientRect().bottom;
        if (b > limit) window.scrollBy({ top: b - limit, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }); } }
    document.querySelectorAll('.chips').forEach(nav => { const cur = nav.querySelector('[aria-current="true"]'); if (cur) nav.scrollLeft += cur.getBoundingClientRect().left - nav.getBoundingClientRect().left - (nav.clientWidth - cur.offsetWidth) / 2; });
    const top = $('.top'); if (top) document.documentElement.style.setProperty('--top-h', top.offsetHeight + 'px');
    markWide();
  }
  // Tables wider than the screen scroll sideways; a fade at the right edge shows that there is more.
  function markWide(rootEl = document) {
    rootEl.querySelectorAll('.tablewrap').forEach(w => {
      const set = () => w.classList.toggle('more', w.scrollWidth - w.clientWidth - w.scrollLeft > 2);
      set(); if (!w.dataset.wide) { w.dataset.wide = '1'; w.addEventListener('scroll', set, { passive: true }); }
    });
  }
  window.addEventListener('resize', () => markWide());
  document.addEventListener('toggle', e => { const d = e.target; if (d.dataset && d.dataset.keep) ui.open[d.dataset.keep] = d.open; if (d.dataset && d.dataset.fold) ui.fold[d.dataset.fold] = d.open; if (d.open) markWide(d); }, true);
  let touched = false;
  document.addEventListener('touchstart', () => { touched = true; }, { passive: true });

  // ---------- keeping the place ----------
  // iOS may restart a home-screen app that has been in the background for a while. The current place is kept on this
  // phone only, outside the progress and the backups, and restored if the app starts again within PLACE_HOURS.
  const PLACE_KEY = 'grammaticus.place', PLACE_HOURS = 4;
  function savePlace(keepScroll = true) {
    if (!ready) return;
    const pl = { t: Date.now(), view: ui.view, lectureId: ui.lectureId, section: ui.section, refPage: ui.refPage, ref: ui.ref, open: ui.open,
      scroll: keepScroll === true ? Math.round(window.scrollY) : 0, lectureOpen: ui.lectureOpen, lectureScroll: ui.view === 'lecture' ? 0 : ui.scroll.lecture || 0,
      ex: ui.ex && !ui.ex.finished ? ui.ex : null };
    try { localStorage.setItem(PLACE_KEY, JSON.stringify(pl)); } catch (e) {}
  }
  function restorePlace() {
    let pl = null; try { pl = JSON.parse(localStorage.getItem(PLACE_KEY) || 'null'); } catch (e) {}
    if (!pl || !(Date.now() - pl.t < PLACE_HOURS * 3600000)) return null;
    const exOk = pl.ex && Array.isArray(pl.ex.items) && pl.ex.items.length;
    const setLecture = () => {
      const l = findLecture(pl.lectureId); if (!l || !sectionsFor(l).some(s => s.id === pl.section)) return false;
      ui.lectureId = l.id; ui.section = pl.section; ui.lectureOpen = true; return true;
    };
    if (pl.view === 'lecture') { if (!setLecture()) return null; if (exOk && pl.ex.mode === 'practice' && pl.ex.lid === pl.lectureId) ui.ex = pl.ex; }
    else if (pl.view === 'run') { if (exOk && pl.ex.mode !== 'practice') ui.ex = pl.ex; else pl.view = 'home'; }
    else if (!['home', 'ref', 'progress'].includes(pl.view)) return null;
    if (pl.view !== 'lecture' && pl.lectureOpen && setLecture()) ui.scroll.lecture = pl.lectureScroll || 0;
    ui.view = pl.view; ui.refPage = ['search', 'cards', 'terms'].includes(pl.refPage) ? pl.refPage : 'search'; ui.ref = pl.ref || ''; ui.open = pl.open || {};
    return pl.scroll || 0;
  }
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') savePlace(); });
  window.addEventListener('pagehide', () => savePlace());
  document.addEventListener('input', e => {
    const t = e.target, x = ui.ex;
    if (!x || x.finished || t.id !== 'ans') return;
    const st = x.state || (x.state = {}); if (!st.checked) st.value = t.value;
  });

  document.addEventListener('click', e => {
    const t = e.target.closest('button'); if (!t) return;
    const d = t.dataset;
    if (d.refpage) { ui.refPage = d.refpage; render(); window.scrollTo(0, 0); return; }
    if (d.jump) { const el = document.getElementById(d.jump); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); return; }
    if (d.go) { go(d.go); if (d.anchor) setTimeout(() => { const el = $('#' + d.anchor); if (el) el.scrollIntoView(); }, 0); return; }
    if (d.lecture) { openLecture(d.lecture, d.section, d.block); return; }
    if (d.mark && ui.view === 'lecture') { lectureP(ui.lectureId).sections[d.mark] = true; save(); ui.section = d.section; render(); window.scrollTo(0, 0); return; }
    if (d.section && ui.view === 'lecture' && t.classList.contains('chip')) { ui.section = d.section; ui.open = {}; render(); window.scrollTo(0, 0); return; }
    if (d.done) {
      const l = findLecture(ui.lectureId), lp = lectureP(l.id); lp.sections[d.done] = true; save();
      if (d.next) { ui.section = d.next; ui.open = {}; render(); window.scrollTo(0, 0); }
      else { const nextL = lectures()[lectures().indexOf(l) + 1]; if (nextL) openLecture(nextL.id); else { ui.lectureOpen = false; go('home'); } }
      return;
    }
    if (d.start) { startRun('practice', { lid: ui.lectureId }); render(); focusAnswer(); return; }
    if (d.checkUnit) { if (startRun('check', { unit: d.checkUnit })) { ui.view = 'run'; render(); window.scrollTo(0, 0); } return; }
    if (t.hasAttribute('data-review')) { if (startRun('missed', {})) { ui.view = 'run'; render(); window.scrollTo(0, 0); } return; }
    if (t.hasAttribute('data-endrun')) { const back = ui.ex && ui.ex.mode === 'check' ? 'home' : 'progress'; ui.ex = null; ui.view = back; render(); window.scrollTo(0, 0); return; }

    // exercise interactions
    if (ui.ex && !ui.ex.finished && (ui.view === 'lecture' || ui.view === 'run')) {
      const x = ui.ex, item = x.items[x.i];
      if (d.choice !== undefined && !(x.state && x.state.checked)) { x.state = { choice: Number(d.choice) }; finishItem(Number(d.choice) === item.answer); return; }
      if (t.hasAttribute('data-check')) { checkItem(); return; }
      if (t.hasAttribute('data-next-item')) { nextItem(); return; }
      if (d.slot !== undefined) { const st = x.state || (x.state = {}), on = st.on || (st.on = []), k = Number(d.slot), i = on.indexOf(k); if (i >= 0) on.splice(i, 1); else on.push(k); const y = window.scrollY; render(); window.scrollTo(0, y); return; }
      if (d.ml !== undefined) { x.state.sel = Number(d.ml); x.state.miss = null; render(); return; }
      if (d.mr !== undefined && x.state.sel != null) {
        const st = x.state, r = Number(d.mr);
        if (r === st.sel) { st.done.push(r); st.sel = null; st.miss = null; } else { st.misses++; st.miss = r; }
        if (st.done.length === item.pairs.length) { finishItem(st.misses === 0); return; }
        render(); return;
      }
      if (d.ob !== undefined) { x.state.line.push(Number(d.ob)); render(); return; }
      if (d.ol !== undefined) { x.state.line = x.state.line.filter(i => i !== Number(d.ol)); render(); return; }
    }

    // notices
    if (t.hasAttribute('data-reloadnow')) { location.reload(); return; }
    if (t.hasAttribute('data-dismissdamaged')) { damaged = null; render(); return; }
    if (t.hasAttribute('data-startafresh')) { damaged = null; holdSaves = false; save(); render(); toast('Started afresh.'); return; }
    if (t.hasAttribute('data-reloadfiles')) { reloadFiles(); return; }
    if (t.hasAttribute('data-clearerrors')) { try { localStorage.removeItem(ERR_KEY); } catch (e) {} render(); return; }
    if (t.hasAttribute('data-copyerrors')) {
      const box = $('#errtext');
      navigator.clipboard.writeText(errorText(errorLog())).then(() => toast('Copied.'), () => { if (box) { box.focus(); box.select(); } toast('Select the text and copy it.'); });
      return;
    }
    if (t.hasAttribute('data-update')) {
      if (!('serviceWorker' in navigator)) { toast('Updates are not available here.'); return; }
      navigator.serviceWorker.getRegistration().then(r => {
        if (!r) { toast('Updates work in the installed app only.'); return; }
        toast('Checking…');
        r.update().then(() => setTimeout(() => toast(r.installing || r.waiting ? 'New version found. It will be ready in a moment.' : 'You have the latest version.'), 1500))
          .catch(() => toast('Could not reach the server. Are you online?'));
      });
      return;
    }
    if (t.hasAttribute('data-hardreload')) { if (!ui.confirmHard) { armConfirm('confirmHard', t, 'Tap again to reload', 'Reload'); return; } ui.confirmHard = false; reloadFiles(); return; }
    // backup
    if (t.hasAttribute('data-export')) { doExport(); return; }
    if (t.hasAttribute('data-syncconnect')) { syncConnect(($('#synctoken') || {}).value); return; }
    if (t.hasAttribute('data-syncnow')) { syncUp(true); return; }
    if (t.hasAttribute('data-syncdown')) { syncDown(); return; }
    if (t.hasAttribute('data-syncoff')) { if (!ui.confirmSyncOff) { armConfirm('confirmSyncOff', t, 'Tap again', 'Disconnect'); return; } ui.confirmSyncOff = false; saveSyncCfg(null); render(); toast('Disconnected. The gist on GitHub is kept.'); return; }
    if (t.hasAttribute('data-copybackup')) { copyBackup(); return; }
    if (t.hasAttribute('data-importtext')) { readImport(($('#importtext') || {}).value || ''); return; }
    if (t.hasAttribute('data-cancelimport')) { ui.confirmImport = null; ui.restoreOpen = false; render(); return; }
    if (t.hasAttribute('data-doimport')) {
      keepPrevious('restore');
      P = migrate(ui.confirmImport.progress); ui.confirmImport = null; ui.restoreOpen = false;
      { const cfg = syncCfg(); if (cfg && cfg.hold) { cfg.hold = false; saveSyncCfg(cfg); } }
      damaged = null; holdSaves = false; newer = false; save(); ui.ex = null; ui.lectureOpen = false;
      ui.view = 'home'; render(); window.scrollTo(0, 0); toast('Progress restored.'); return;
    }
    if (t.hasAttribute('data-reset')) {
      if (!ui.confirmReset) { armConfirm('confirmReset', t, 'Tap again to reset', 'Reset'); return; }
      keepPrevious('reset'); const keep = P.settings; P = freshProgress(); P.settings = keep;
      ui.confirmReset = false; ui.lectureOpen = false; ui.ex = null; save(); render(); toast('Progress reset.'); return;
    }
    if (t.hasAttribute('data-undoprogress')) {
      const prev = previousProgress(); if (!prev) return;
      const now = P; P = migrate(prev.progress);
      try { localStorage.setItem(UNDO_KEY, JSON.stringify({ t: new Date().toISOString(), why: 'step back', progress: now })); } catch (e) {}
      damaged = null; holdSaves = false; newer = false; save(); ui.ex = null; render(); toast('Earlier progress put back.'); return;
    }
  });

  // ---------- boot ----------
  async function boot() {
    load();
    try { await loadScript(CONTENT_BASE + 'catalogue.js'); }
    catch (e) {
      root().innerHTML = `<div class="gutter" style="padding-block:40px"><p><b>Course files could not be loaded.</b></p><p class="small">${esc(e.message)}. Check the connection, or that the content folder sits next to index.html.</p></div>`;
      return;
    }
    await loadScripts(units().flatMap(u => (u.lectures || []).concat(u.check ? [u.check] : [])).map(f => CONTENT_BASE + f));
    ready = true;
    const y = damaged || missing.length ? null : restorePlace();
    render();
    if (y) { window.scrollTo(0, y); setTimeout(() => { if (!touched) window.scrollTo(0, y); }, 300); }
  }
  // for the tests
  window.Grammaticus._item = () => ui.ex && !ui.ex.finished ? ui.ex.items[ui.ex.i] : null;
  window.Grammaticus._lectures = () => lectures().map(l => l.id);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
