/*
 * Unit 5, lecture 4: the English comma. German section in German.
 */
Grammaticus.addLecture({
  id: '5.4', unit: 5, number: 4,
  title: 'The English comma',
  subtitle: 'Serial comma, comma splice, introductory elements, numbers and dates',
  minutes: 25,

  intro: `
    <p>The English comma has no official rule book, but it is not a free-for-all. There is a core on which every style guide agrees, mostly because the comma changes the meaning; a set of house-style choices (the serial comma, commas after short openers); and one firm prohibition that German writers break more than anyone else: the comma splice.</p>`,

  concept: `
    <p>English commas do four jobs: <strong>separating</strong> items of a list and coordinated clauses; <strong>enclosing</strong> parenthetical elements (non-restrictive clauses, appositives, vocatives, sentence adverbs); <strong>marking off</strong> introductory elements; and <strong>preventing misreading</strong>. A German-trained writer can drop the fifth job German commas do, marking clause boundaries as such.</p>`,

  german: [
    { title: 'Was deutsche Schreiber im Englischen mitnehmen',
      html: `
        <p>Die meisten Kommafehler deutscher Muttersprachler im Englischen entstehen dadurch, dass das grammatische Komma übertragen wird:</p>
        <ul>
          <li>Komma vor <em>that</em>, <em>whether</em>, <em>if</em> und vor notwendigen Relativsätzen;</li>
          <li>Komma vor dem <em>to</em>-Infinitiv;</li>
          <li>zwei Hauptsätze nur durch Komma verbunden (<em>comma splice</em>), oft mit <em>however</em> oder <em>therefore</em>;</li>
          <li>Komma zwischen langem Subjekt und Verb.</li>
        </ul>
        <p>Umgekehrt fehlen manchmal Kommas, die das Englische verlangt: nach einleitendem <em>However</em>, um nicht notwendige Relativsätze und Appositionen, in amerikanischen Datumsangaben.</p>
        <p>Gegen die Unsicherheit hilft eine einfache Probe: Verändert das Komma die Bedeutung oder verhindert es eine Fehllesung? Wenn nicht, ist es im Englischen meist entbehrlich, oft störend.</p>` }
  ],

  english: [
    { title: 'Lists and the serial comma',
      html: `
        <p>The <strong>serial comma</strong> (Oxford or Harvard comma) is the comma before <em>and</em> or <em>or</em> in a list of three or more:</p>
        <div class="ex"><p lang="en">red, white<u class="k">,</u> and blue</p><p lang="en">red, white and blue</p></div>
        <p>Both are correct. Oxford University Press (New Hart’s Rules) and most American style guides (Chicago) use it; most British newspapers and the AP style used by American journalists do not. Even writers who omit it add it where it prevents ambiguity:</p>
        <div class="ex"><p lang="en" class="odd">I thanked my parents, Ayn Rand and God.</p><p lang="en">I thanked my parents, Ayn Rand<u class="k">,</u> and God.</p><p lang="en">The menu offered soup, fish<u class="k">,</u> and macaroni and cheese.</p></div>
        <p>Whichever you choose, use it consistently in one document.</p>
        <p class="src">New Hart’s Rules, ch. 4; The Chicago Manual of Style, 6.19; Guardian and Observer style guide, “Oxford comma”.</p>` },
    { title: 'Main clauses and the comma splice',
      html: `
        <p>Two main clauses joined by <em>and, but, or, so, yet</em> usually take a comma; it may be omitted if the clauses are short and closely connected:</p>
        <div class="ex"><p lang="en">The market fell sharply in March<u class="k">, but</u> it recovered by the summer.</p><p lang="en">He called and I answered.</p></div>
        <p>Two main clauses joined by a comma alone form a <strong>comma splice</strong>, regarded as an error in edited prose. <em>However, therefore, moreover</em> are adverbs, not conjunctions, and cannot join clauses:</p>
        <div class="ex"><p lang="en" class="bad">Sales rose, however profits fell.</p><p lang="en">Sales rose<u class="k">; however,</u> profits fell.</p><p lang="en">Sales rose<u class="k">. However,</u> profits fell.</p><p lang="en">Sales rose<u class="k">, but</u> profits fell.</p></div>
        <p>Novelists and some essayists use comma splices deliberately for short, parallel clauses (<em>It was not a choice, it was a necessity.</em>). In formal writing, avoid them.</p>
        <p class="src">Huddleston &amp; Pullum 2002, ch. 20; New Hart’s Rules, ch. 4.</p>` },
    { title: 'Introductory and parenthetical elements',
      html: `
        <p>After a long introductory phrase or clause a comma is usual; after a short one it is optional, unless it prevents misreading:</p>
        <div class="ex"><p lang="en">In 2025<u class="k">(,)</u> revenue grew by 4 per cent.</p><p lang="en">After the board had reviewed the figures from all three divisions<u class="k">,</u> it approved the budget.</p><p lang="en">Inside<u class="k">,</u> the room was dark. <span class="tnote">Without the comma: “inside the room …”</span></p><p lang="en">While we were eating<u class="k">,</u> the dog barked.</p></div>
        <p>Sentence adverbs and connectives take commas: <em>However, …; Of course, …; Frankly, …</em>. <em>However</em> as a degree adverb does not: <em>However hard we try …</em></p>
        <p>Non-restrictive relative clauses and appositives are enclosed on both sides (lecture 4.4): <em>Our CFO, who joined in May, …</em></p>` },
    { title: 'Where no comma goes',
      html: `
        <ul>
          <li>between subject and verb: <em class="bad">The proposal we discussed last week, has been rejected.</em></li>
          <li>between verb and object or <em>that</em>-clause: <em class="bad">She said, that she would come.</em></li>
          <li>before a restrictive relative clause or a <em>to</em>-infinitive;</li>
          <li>between an adjective and its noun, or between non-coordinate adjectives (<em>a big black dog</em>).</li>
        </ul>` },
    { title: 'Numbers and dates',
      html: `
        <ul>
          <li><strong>Thousands</strong>: comma (<em>10,000</em>); decimal point (<em>3.5</em>). German reverses this: <em>10.000; 3,5</em>. In scientific texts both languages may use a thin space (<em>10 000</em>).</li>
          <li><strong>British dates</strong>: <em>19 November 2026</em>, no commas. <strong>American</strong>: <em>November 19, 2026,</em> with a comma after the day and, in running text, after the year.</li>
          <li>Weekday and date: <em>Thursday, 19 November</em> (comma usual in British style too).</li>
        </ul>
        <p class="src">New Hart’s Rules, ch. 11 (numbers) and 4.</p>` }
  ],

  contrast: `
    <div class="tablewrap"><table>
      <thead><tr><th>German</th><th>English</th></tr></thead>
      <tbody>
        <tr><td>Der Umsatz stieg, der Gewinn sank.</td><td>Sales rose, but profits fell. / Sales rose; profits fell.</td></tr>
        <tr><td>Was wir jetzt brauchen, ist Zeit.</td><td>What we need now is time.</td></tr>
        <tr><td>Rot, Weiß und Blau</td><td>red, white(,) and blue</td></tr>
        <tr><td>1.250,50 €</td><td>£1,250.50</td></tr>
        <tr><td>Donnerstag, 19. November 2026</td><td>Thursday, 19 November 2026</td></tr>
        <tr><td>Im Jahr 2025 wuchs der Umsatz.</td><td>In 2025(,) revenue grew.</td></tr>
      </tbody></table></div>
    <p class="contrast">German <em>Was wir brauchen, ist Zeit</em> is correct because the <em>was</em>-clause is a subordinate clause; English has no such rule, so the comma lands between subject and verb.</p>`,

  usage: `
    <ul>
      <li><strong>The serial comma debate</strong> is largely one of house style, though it has been argued in court: in <em>O’Connor v. Oakhurst Dairy</em> (US, 2017) the absence of a serial comma in a Maine statute decided an overtime dispute, which was settled in 2018 for $5 million.</li>
      <li><strong>Lighter punctuation.</strong> British newspapers and business writing omit many commas that older grammars required (after short openers, before short <em>and</em>-clauses). Older or American texts look heavier. Neither is wrong.</li>
      <li><strong>The comma splice</strong> is condemned by every style guide, but it is common in informal writing, emails and messages, and in literary prose. Judged by edited usage it is an error; judged by everyday usage it is a register marker.</li>
    </ul>`,

  style: `
    <p>Commas set the pace. A sentence with many commas reads slowly and deliberately; strip them out and it reads faster. Good writers sometimes add a comma that no rule requires, purely for rhythm or emphasis:</p>
    <div class="ex"><p lang="en">It was a good offer, and we refused it.</p><p lang="en">It was a good offer and we refused it.</p></div>
    <p>The first, with its pause, sharpens the surprise. German has less room for this, since its commas are mostly fixed by grammar; the optional comma before <em>und</em> is one of the few places where the same effect is available.</p>`,

  pitfalls: `
    <ul>
      <li>No comma before <em>that</em>, <em>whether</em> or a <em>to</em>-infinitive.</li>
      <li><em>However</em> between clauses needs a semicolon or full stop before it.</li>
      <li>No comma between subject and verb, however long the subject.</li>
      <li>Decimal point and thousands comma are the reverse of German: check figures in translated reports.</li>
    </ul>`,

  summary: [
    'Core commas: lists, coordinated main clauses, non-restrictive elements, introductory elements, against misreading.',
    'Serial comma: OUP and Chicago use it, most British newspapers do not; be consistent and use it against ambiguity.',
    'Comma splice (two main clauses with a comma only) is an error in edited prose; however is not a conjunction.',
    'No comma between subject and verb, before that-clauses, restrictive relatives or to-infinitives.',
    'Numbers: 10,000 and 3.5 (German 10.000 and 3,5). Dates: 19 November 2026 (BrE), November 19, 2026 (AmE).'
  ],

  cards: [
    { id: 'en-comma', title: 'The English comma', tags: ['comma', 'serial comma', 'comma splice', 'however'], html: `
      <p><strong>Yes</strong>: list items; before <em>and/but</em> joining long clauses; around non-restrictive elements; after <em>However</em>, long openers, interjections, vocatives.<br><strong>No</strong>: before <em>that</em>, <em>whether</em>, restrictive relatives, <em>to</em>-infinitives; between subject and verb; between two main clauses without a conjunction (use ; or .).<br><strong>Choice</strong>: serial comma; comma after short openers.</p>` },
    { id: 'numbers-dates', title: 'Numbers and dates DE/EN', tags: ['numbers', 'date', 'Zahlen', 'Datum'], html: `
      <p>EN 10,000.50 · DE 10.000,50<br>BrE 19 November 2026 · AmE November 19, 2026 · DE 19. November 2026</p>` }
  ],

  terms: [
    { en: 'serial comma, Oxford comma', de: 'Komma vor und in Aufzählungen (im Deutschen nicht üblich)', la: '' },
    { en: 'comma splice', de: 'Kommaverbindung zweier Hauptsätze (im Englischen ein Fehler)', la: '' },
    { en: 'sentence adverb, connective', de: 'Satzadverb, Konnektor', la: '' },
    { en: 'house style', de: 'Hausstil, Redaktionsrichtlinien', la: '' },
    { en: 'decimal point / decimal comma', de: 'Dezimalpunkt / Dezimalkomma', la: '' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', lang: 'en', prompt: 'Which is correct in edited prose?', options: ['Sales rose; however, profits fell.', 'Sales rose, however profits fell.', 'Sales rose, however, profits fell.'], answer: 0, explain: '<em>However</em> is an adverb; two main clauses need a semicolon, a full stop or a conjunction.' },
    { id: 'e2', type: 'comma', lang: 'en', prompt: 'Set the required commas (if any).', words: ['What', 'we', 'need', 'now', 'is', 'time.'], commas: [], explain: 'No comma between subject and verb.' },
    { id: 'e3', type: 'comma', lang: 'en', prompt: 'Required and optional commas.', words: ['We', 'need', 'paper', 'pens', 'and', 'a', 'printer.'], commas: [2], optional: [3], explain: 'Comma between list items; the serial comma before <em>and</em> is a house-style choice.' },
    { id: 'e4', type: 'comma', lang: 'en', prompt: 'Set the required commas.', words: ['Inside', 'the', 'room', 'was', 'dark.'], commas: [0], explain: 'Without the comma the reader takes <em>inside the room</em> together.' },
    { id: 'e5', type: 'comma', lang: 'en', prompt: 'Set the required commas.', words: ['Our', 'CFO', 'who', 'joined', 'in', 'May', 'presented', 'the', 'results.'], commas: [1, 5], explain: 'Non-restrictive relative clause (there is only one CFO): commas on both sides.' },
    { id: 'e6', type: 'mc', prompt: 'British style for the date:', options: ['19 November 2026', 'November 19th, 2026,', '19. November 2026'], answer: 0, keepOrder: true, explain: 'British: day month year, no commas. The second is American, the third German.' },
    { id: 'e7', type: 'mc', prompt: 'Two thousand five hundred pounds and fifty pence in English:', options: ['£2,500.50', '£2.500,50', '£2 500,50'], answer: 0, keepOrder: true, explain: 'Thousands comma, decimal point.' },
    { id: 'e8', type: 'comma', lang: 'en', prompt: 'Set the required commas (if any).', words: ['She', 'said', 'that', 'she', 'would', 'come.'], commas: [], explain: 'No comma before a <em>that</em>-clause.' }
  ]
});
