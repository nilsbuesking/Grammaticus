/*
 * Unit 4, lecture 4: relative clauses. Content file only. German section in German.
 */
Grammaticus.addLecture({
  id: '4.4', unit: 4, number: 4,
  title: 'Relative clauses',
  subtitle: 'der, welcher, was and wo; who, which and that; and the comma that changes the meaning in English',
  minutes: 30,

  intro: `
    <p>A relative clause describes a noun: <em>the report that you sent</em>. German uses the article-like relative pronoun <em>der/die/das</em> and always sets the clause off with commas; English chooses between <em>who, which, that</em> or nothing at all, and uses commas only for one kind of relative clause. The English distinction between restrictive and non-restrictive clauses changes the meaning of a sentence, and it is the source of the much-debated <em>that</em>/<em>which</em> rule.</p>`,

  concept: [
    { title: 'Restrictive and non-restrictive',
      html: `
        <ul>
          <li>A <strong>restrictive</strong> (defining) relative clause identifies which thing is meant; without it the sentence changes meaning: <em>The employees who work from home save time.</em> (only those)</li>
          <li>A <strong>non-restrictive</strong> (non-defining) relative clause adds information about something already identified: <em>The employees, who work from home, save time.</em> (all of them, and by the way they all work from home)</li>
        </ul>
        <p>Both languages have the distinction in meaning. English marks it with commas (and partly with the choice of pronoun); German does not mark it at all, since all relative clauses take commas.</p>` }
  ],

  german: [
    { title: 'Die Relativpronomen',
      html: `
        <p>Das Relativpronomen <em>der, die, das</em> richtet sich im Genus und Numerus nach dem Bezugswort, im Kasus nach seiner Funktion im Relativsatz:</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Kasus</th><th>mask. · fem. · neutr. · Plural</th></tr></thead>
          <tbody>
            <tr><td>Nominativ</td><td>der · die · das · die</td></tr>
            <tr><td>Akkusativ</td><td>den · die · das · die</td></tr>
            <tr><td>Dativ</td><td>dem · der · dem · <u class="k">denen</u></td></tr>
            <tr><td>Genitiv</td><td><u class="k">dessen</u> · <u class="k">deren</u> · dessen · deren</td></tr>
          </tbody></table></div>
        <div class="ex"><p lang="de">der Kunde, <u class="k">dem</u> wir geschrieben haben</p><p lang="de">die Kollegen, mit <u class="k">denen</u> ich arbeite</p><p lang="de">die Firma, <u class="k">deren</u> Zahlen wir prüfen</p></div>
        <p><strong>welcher, welche, welches</strong> ist gleichbedeutend, aber steif und heute selten; es dient vor allem dazu, Wiederholungen zu vermeiden (<em>die, die die …</em>).</p>` },
    { title: 'was und wo',
      html: `
        <ul>
          <li><strong>was</strong> nach unbestimmten Pronomen und Superlativen, und wenn sich der Relativsatz auf einen ganzen Satz bezieht: <em>alles, was; nichts, was; etwas, was (auch: das); das Beste, was …; Er kam zu spät, was alle ärgerte.</em> Nach Nomen: <em>das</em>, nicht <em>was</em>: <em>das Haus, das …</em>, nicht <span class="bad">das Haus, was …</span></li>
          <li><strong>wo, worin, womit</strong> nach Orts- und Zeitangaben und für Sachen mit Präposition: <em>die Stadt, wo / in der ich wohne; der Tag, an dem / wo …</em> Für Präposition + Sache ist <em>womit, worüber</em> gehoben-veraltet; Standard ist <em>mit dem, über das</em>.</li>
          <li><strong>wo</strong> als allgemeines Relativpronomen (<span class="bad">der Mann, wo da steht</span>) ist süddeutsch und schweizerisch mundartlich, nicht standardsprachlich.</li>
        </ul>` },
    { title: 'Stellung',
      html: `
        <p>Der Relativsatz steht möglichst direkt nach seinem Bezugswort und ist ein Verbletztsatz mit Kommas auf beiden Seiten. Steht nur noch ein Verb oder eine Verbpartikel dazwischen, darf er ins Nachfeld rücken: <em>Ich habe den Bericht gelesen, den du geschickt hast.</em></p>` }
  ],

  english: [
    { title: 'who, which, that, zero',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th>Pronoun</th><th>Use</th></tr></thead>
          <tbody>
            <tr><td>who / whom</td><td>people<span class="tnote">the client who called; the client (whom) we met</span></td></tr>
            <tr><td>which</td><td>things; both kinds of clause<span class="tnote">the report, which was late, …</span></td></tr>
            <tr><td>that</td><td>people or things; restrictive only<span class="tnote">the report that you sent</span></td></tr>
            <tr><td>zero</td><td>restrictive, when the pronoun is the object<span class="tnote">the report (that) you sent</span></td></tr>
            <tr><td>whose</td><td>possessive, people and things<span class="tnote">the company whose figures we checked</span></td></tr>
          </tbody></table></div>
        <p>Non-restrictive clauses never use <em>that</em> or zero, and are set off by commas:</p>
        <div class="ex"><p lang="en">Our CFO, who joined last year, presented the results.</p><p lang="en" class="bad">Our CFO, that joined last year, presented the results.</p></div>` },
    { title: 'that or which?',
      html: `
        <p>In restrictive clauses about things, both <em>that</em> and <em>which</em> are grammatical:</p>
        <div class="ex"><p lang="en">The report that you sent was useful.</p><p lang="en">The report which you sent was useful.</p></div>
        <p>American style guides (and Microsoft Word’s grammar checker) usually insist on <em>that</em> for restrictive and <em>which</em> for non-restrictive clauses. The rule was proposed by H. W. Fowler in 1926 as a desirable tidying-up, not as a description of usage, and Fowler himself admitted that the best writers did not follow it. British usage freely uses <em>which</em> in restrictive clauses; British style guides generally allow both.</p>` },
    { title: 'Prepositions in relative clauses',
      html: `
        <div class="ex"><p lang="en">the colleague with whom I work <span class="gl">formal</span></p><p lang="en">the colleague (who/that) I work with <span class="gl">normal</span></p><p lang="en" class="bad">the colleague with who I work</p></div>
        <p>Sentential relative: <em>He arrived late, which annoyed everyone.</em> (German <em>was</em>).</p>` }
  ],

  contrast: `
    <ul>
      <li><strong>Commas</strong>: German always (<em>Die Mitarbeiter, die von zu Hause arbeiten, …</em>, ambiguous between the two readings); English only for non-restrictive clauses, where the comma changes the meaning.</li>
      <li><strong>Omission</strong>: English often drops the object pronoun (<em>the report you sent</em>); German never (<em>der Bericht, den du geschickt hast</em>).</li>
      <li><strong>Stranded prepositions</strong>: English <em>the colleague I work with</em>; German must put the preposition first (<em>der Kollege, mit dem ich arbeite</em>).</li>
      <li><strong>Sentential relative</strong>: <em>was = which</em>: <em>…, was alle ärgerte = …, which annoyed everyone.</em></li>
      <li><strong>Case</strong>: German relative pronouns show case (<em>den, dem, dessen, denen</em>); English only <em>who/whom/whose</em>.</li>
    </ul>
    <p class="contrast">German speakers who put a comma before every English relative clause turn restrictive clauses into non-restrictive ones: <span class="odd">The employees, who work from home, save time</span> claims that all employees work from home.</p>`,

  usage: `
    <ul>
      <li><strong><em>that/which</em></strong>: follow the house style; in British writing both are standard in restrictive clauses. Never use <em>that</em> after a comma.</li>
      <li><strong><em>das Haus, was</em></strong>: very common in speech, not standard in writing.</li>
      <li><strong><em>welcher</em></strong>: correct but formal and old-fashioned; useful to avoid <em>die die</em>.</li>
      <li><strong><em>who</em> for things, <em>which</em> for people</strong>: <em>which</em> for people is archaic (<em>Our Father, which art in heaven</em>); <em>who</em> for organisations seen as people (<em>the bank who …</em>) is informal British; formal: <em>which</em> or <em>that</em>.</li>
    </ul>`,

  pitfalls: `
    <ul>
      <li><span class="bad">Das ist das Beste, das ich je gesehen habe.</span> → <em>was</em> after a superlative used as a noun: <em>das Beste, was …</em></li>
      <li><span class="bad">die Kollegen, mit denen ich arbeite mit</span> (doubled preposition) → <em>mit denen ich arbeite</em>.</li>
      <li><span class="bad">The report, that you sent, …</span> → <em>The report that you sent …</em> or <em>The report, which you sent, …</em></li>
      <li><span class="bad">Everybody, who wants to attend, should register.</span> (restrictive) → no commas: <em>Everybody who wants to attend should register.</em></li>
      <li><span class="bad">die Firma, dessen Zahlen …</span> → <em>deren</em> (feminine antecedent).</li>
    </ul>`,

  latin: `
    <p>The Latin relative pronoun <em>qui, quae, quod</em> agrees with its antecedent in gender and number and takes its case from its own clause, exactly as German <em>der/die/das</em> does. Latin also uses the “connecting relative” at the start of a sentence (<em>Quae cum ita sint</em> “Since these things are so”), which German imitates in formal style: <em>Welches Ergebnis zeigt, dass …</em></p>`,

  summary: [
    'Restrictive clauses identify (the employees who work from home); non-restrictive add information (the employees, who work from home).',
    'German: der/die/das (dessen, deren, denen); welcher formal; was after alles, nichts, superlatives and for whole clauses; always commas.',
    'English: who (people), which (things), that (restrictive only), zero (restrictive object), whose; commas only for non-restrictive.',
    'The that/which rule is Fowler’s 1926 proposal, followed by American style guides; British usage allows which in restrictive clauses.',
    'English can drop the object pronoun and strand prepositions; German can do neither.',
    'A comma before an English restrictive clause changes its meaning.'
  ],

  cards: [
    { id: 'relpron-de', title: 'German relative pronouns', tags: ['der die das', 'dessen', 'deren', 'denen', 'was'], html: `
      <p>Nom der/die/das/die · Akk den/die/das/die · Dat dem/der/dem/<strong>denen</strong> · Gen <strong>dessen/deren</strong>/dessen/deren.<br><strong>was</strong>: alles, nichts, etwas, das Beste, whole clause. Not after nouns (das Haus, das …).</p>` },
    { id: 'relpron-en', title: 'who / which / that and commas', tags: ['that', 'which', 'who', 'restrictive', 'comma'], html: `
      <p><strong>Restrictive</strong> (no commas): who, that, which (BrE), zero for objects.<br><strong>Non-restrictive</strong> (commas): who, which; never that.<br>The employees who work from home … (some) vs The employees, who work from home, … (all).</p>` }
  ],

  terms: [
    { en: 'relative clause', de: 'Relativsatz', la: 'relativus' },
    { en: 'relative pronoun', de: 'Relativpronomen', la: '' },
    { en: 'antecedent', de: 'Bezugswort, Antezedens', la: 'antecedens “going before”' },
    { en: 'restrictive (defining)', de: 'restriktiv, notwendig', la: '' },
    { en: 'non-restrictive (non-defining)', de: 'nicht-restriktiv, appositiv, weiterführend', la: '' },
    { en: 'sentential relative clause', de: 'weiterführender Relativsatz', la: '' },
    { en: 'contact clause (zero relative)', de: '(im Deutschen nicht möglich)', la: '' }
  ],

  exercises: [
    { id: 'e1', type: 'gap', lang: 'de', prompt: '<span lang="de">Die Kollegen, mit ___ ich arbeite, sind sehr erfahren.</span>', answers: ['denen'], cs: true, explain: 'Dative plural relative pronoun: <em>denen</em>.' },
    { id: 'e2', type: 'gap', lang: 'de', prompt: '<span lang="de">Die Firma, ___ Zahlen wir prüfen, sitzt in Hamburg.</span>', answers: ['deren'], cs: true, explain: 'Genitive, feminine antecedent: <em>deren</em>.' },
    { id: 'e3', type: 'mc', lang: 'de', prompt: '<span lang="de">Das ist alles, ___ ich weiß.</span>', options: ['was', 'das'], answer: 0, keepOrder: true, explain: 'After <em>alles</em>: <em>was</em>.' },
    { id: 'e4', type: 'mc', prompt: 'Only some employees work from home. You write:', options: ['The employees who work from home save time.', 'The employees, who work from home, save time.'], answer: 0, keepOrder: true, explain: 'Restrictive: no commas. With commas it says all employees work from home.' },
    { id: 'e5', type: 'mc', prompt: 'Which is wrong?', options: ['Our CFO, that joined last year, presented the results.', 'Our CFO, who joined last year, presented the results.', 'The report that you sent was useful.', 'The report which you sent was useful.'], answer: 0, explain: 'Never <em>that</em> in a non-restrictive clause. The last sentence is fine in British usage.' },
    { id: 'e6', type: 'comma', lang: 'de', prompt: 'Set the commas.', words: ['Der', 'Bericht', 'den', 'du', 'geschickt', 'hast', 'war', 'sehr', 'hilfreich.'], commas: [1, 5], explain: 'German relative clauses always take commas on both sides.' },
    { id: 'e7', type: 'mc', prompt: 'Natural English for <span lang="de">der Kollege, mit dem ich arbeite</span>', options: ['the colleague I work with', 'the colleague with who I work', 'the colleague, with whom I work with'], answer: 0, keepOrder: true, explain: 'Zero relative with stranded preposition is normal; formal: <em>with whom I work</em>.' }
  ]
});
