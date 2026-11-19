// Content check without a browser (one second): every catalogue file exists and is in the offline list (sw.js CORE);
// every lecture has the core sections, a unique id matching its unit and number, and complete exercises; every
// check question names an existing lecture; cards and terms are complete; HTML tags in the content are balanced.
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..'), C = path.join(ROOT, 'content');
let fails = 0; const fail = m => { fails++; console.log('FAIL ' + m); };
const reg = { units: [], lectures: [], checks: {} };
const G = { setCatalogue: c => { reg.units = c.units; }, addLecture: l => reg.lectures.push(l), addCheck: (u, c) => { reg.checks[u] = c; } };
const run = f => { try { new Function('Grammaticus', fs.readFileSync(path.join(C, f), 'utf8'))(G); } catch (e) { fail(f + ': ' + e.message); } };
run('catalogue.js');
const sw = fs.readFileSync(path.join(ROOT, 'sw.js'), 'utf8');
const files = reg.units.flatMap(u => (u.lectures || []).concat(u.check ? [u.check] : []));
for (const f of files) {
  if (!fs.existsSync(path.join(C, f))) { fail('missing file ' + f); continue; }
  if (!sw.includes("'content/" + f + "'")) fail(f + ' is not in CORE in sw.js');
  run(f);
}
const ids = new Set();
const TAGS = ['p', 'div', 'ul', 'ol', 'li', 'table', 'thead', 'tbody', 'tr', 'td', 'th', 'em', 'strong', 'span', 'dl', 'dt', 'dd', 'h3', 'u', 'b', 'i', 'mark'];
function balanced(html, where) {
  for (const t of TAGS) {
    const open = (html.match(new RegExp('<' + t + '(\\s[^>]*)?>', 'g')) || []).length, close = (html.match(new RegExp('</' + t + '>', 'g')) || []).length;
    if (open !== close) fail(`${where}: <${t}> ${open} opened, ${close} closed`);
  }
}
function checkItem(i, where) {
  if (!i.id) fail(where + ': item without id');
  const w = where + ' ' + i.id;
  switch (i.type) {
    case 'mc': if (!Array.isArray(i.options) || i.options.length < 2 || !(i.answer >= 0 && i.answer < i.options.length)) fail(w + ': mc incomplete'); break;
    case 'gap': if (!i.prompt || !Array.isArray(i.answers) || !i.answers.length) fail(w + ': gap incomplete'); break;
    case 'comma': if (!Array.isArray(i.words) || !Array.isArray(i.commas) || i.commas.some(k => k < 0 || k >= i.words.length - 1)) fail(w + ': comma incomplete or slot out of range'); break;
    case 'match': if (!Array.isArray(i.pairs) || i.pairs.length < 2 || i.pairs.some(p => p.length !== 2)) fail(w + ': match incomplete'); else if (new Set(i.pairs.map(p => p[1])).size !== i.pairs.length) fail(w + ': match has duplicate right-hand items'); break;
    case 'order': if (!Array.isArray(i.tokens) || i.tokens.length < 2) fail(w + ': order incomplete'); break;
    default: fail(w + ': unknown type ' + i.type);
  }
  if (!i.explain) fail(w + ': no explanation');
  for (const k of ['prompt', 'explain']) if (i[k]) balanced(i[k], w + ' ' + k);
}
const CORE = ['concept', 'german', 'english', 'contrast'];
for (const l of reg.lectures) {
  const where = 'lecture ' + l.id;
  if (ids.has(l.id)) fail(where + ': duplicate id'); ids.add(l.id);
  if (l.id !== l.unit + '.' + l.number) fail(where + ': id does not match unit.number');
  if (!reg.units.some(u => u.number === l.unit)) fail(where + ': unit not in catalogue');
  for (const k of ['title', 'subtitle', 'intro']) if (!l[k]) fail(where + ': no ' + k);
  for (const k of CORE) if (!l[k]) fail(where + ': core section ' + k + ' missing');
  for (const k of ['intro', 'concept', 'german', 'english', 'contrast', 'usage', 'style', 'pitfalls', 'latin']) {
    const v = l[k]; if (!v) continue;
    (Array.isArray(v) ? v : [{ title: k, html: v }]).forEach((b, bi) => { if (!b.title || !b.html) fail(`${where} ${k}[${bi}]: block without title or html`); else balanced(b.html, `${where} ${k} “${b.title}”`); });
  }
  (l.summary || []).forEach((s, i) => balanced(s, where + ' summary ' + i));
  const exIds = new Set();
  (l.exercises || []).forEach(i => { if (exIds.has(i.id)) fail(where + ': duplicate exercise id ' + i.id); exIds.add(i.id); checkItem(i, where); });
  (l.cards || []).forEach(c => { if (!c.id || !c.title || !c.html) fail(where + ': incomplete card'); else balanced(c.html, where + ' card ' + c.id); });
  (l.terms || []).forEach(t => { if (!t.en || !t.de) fail(where + ': term without en/de: ' + JSON.stringify(t)); });
}
for (const u of reg.units) {
  const n = reg.lectures.filter(l => l.unit === u.number).length;
  if (n !== (u.lectures || []).length) fail(`unit ${u.number}: ${(u.lectures || []).length} files listed, ${n} lectures loaded`);
  if (u.check) {
    const c = reg.checks[u.id]; if (!c) { fail(`unit ${u.number}: check file did not register`); continue; }
    c.items.forEach(i => { checkItem(i, 'check ' + u.id); if (!ids.has(i.lecture)) fail(`check ${u.id} ${i.id}: lecture ${i.lecture} unknown`); });
  }
}
const planned = reg.units.reduce((a, u) => a + (u.planned || []).length, 0);
console.log(`${fails ? 'FAIL' : 'ok  '} content: ${reg.lectures.length} lectures, ${planned} planned, ${reg.lectures.reduce((a, l) => a + (l.exercises || []).length, 0)} exercises, ${reg.lectures.reduce((a, l) => a + (l.cards || []).length, 0)} cards, ${reg.lectures.reduce((a, l) => a + (l.terms || []).length, 0)} terms; ${fails} problems`);
process.exit(fails ? 1 : 0);
