/*
 * Unit 5, lecture 5: semicolon, colon, dash, hyphen. German section in German.
 */
Grammaticus.addLecture({
  id: '5.5', unit: 5, number: 5,
  title: 'Semicolon, colon, dash, hyphen',
  subtitle: 'Semikolon, Doppelpunkt, Gedankenstrich, Bindestrich – and what follows a colon',
  minutes: 30,

  intro: `
    <p>These four marks are used much alike in German and English, with three differences that matter in practice: whether the word after a colon takes a capital, how the dash is set, and how compounds are hyphenated. German codifies all three; English leaves the first two to house style and the third to a mixture of rule and habit.</p>`,

  concept: `
    <p>The <strong>semicolon</strong> joins units of equal rank more closely than a full stop and more distinctly than a comma. The <strong>colon</strong> announces: what follows explains, specifies or quotes what precedes. The <strong>dash</strong> interrupts: it marks an insertion, a shift or an afterthought, more conspicuously than commas. The <strong>hyphen</strong> works inside words: it joins compounds and divides words at line ends. Dash and hyphen are different characters, and confusing them is the most visible typographical error in both languages.</p>
    <div class="tablewrap"><table>
      <thead><tr><th>Mark</th><th>Name</th></tr></thead>
      <tbody>
        <tr><td>-</td><td>hyphen · Bindestrich, Divis</td></tr>
        <tr><td>–</td><td>en rule (en dash) · Halbgeviertstrich, Gedankenstrich<span class="tnote">also for ranges: 1914–18, pp. 20–25</span></td></tr>
        <tr><td>—</td><td>em rule (em dash) · Geviertstrich<span class="tnote">American and some British typography</span></td></tr>
      </tbody></table></div>`,

  german: [
    { title: 'Semikolon',
      html: `
        <p>Das Semikolon trennt gleichrangige Sätze oder Wortgruppen stärker als ein Komma, schwächer als ein Punkt. Es steht nur zwischen gleichartigen Einheiten.</p>
        <div class="ex"><p lang="de">Der Umsatz stieg<u class="k">;</u> die Kosten blieben stabil.</p><p lang="de">Wir bieten an: Keulen, Ringe und Ketten<u class="k">;</u> Bälle, Würfel und Kegel.</p></div>
        <p class="src">Amtliches Regelwerk 2024, § 74.</p>` },
    { title: 'Doppelpunkt und Großschreibung',
      html: `
        <p>Der Doppelpunkt kündigt an: direkte Rede, Zitate, Aufzählungen, Erklärungen, Zusammenfassungen.</p>
        <p class="rule">Nach dem Doppelpunkt wird großgeschrieben, wenn ein ganzer Satz (oder ein Satzäquivalent), direkte Rede oder ein Zitat folgt. Folgen nur Wörter, Wortgruppen oder Datumsangaben, wird kleingeschrieben (außer Nomen und Namen).</p>
        <div class="ex"><p lang="de">Er sagte<u class="k">: „Wir</u> fangen an.“</p><p lang="de">Das Ergebnis ist klar<u class="k">: Die</u> Kosten müssen sinken.</p><p lang="de">Mitzubringen sind<u class="k">: zwei</u> Fotos, der Ausweis und das Formular.</p><p lang="de">Ort<u class="k">: Berlin</u>; Datum<u class="k">: 19.</u> November</p></div>
        <p class="src">Amtliches Regelwerk 2024, § 75 mit Erläuterungen.</p>` },
    { title: 'Gedankenstrich',
      html: `
        <p>Der Gedankenstrich (Halbgeviertstrich mit Leerzeichen) zeigt einen Wechsel an: des Sprechers, des Themas, der Erwartung oder der Konstruktion. Paarig schließt er einen Zusatz ein, auffälliger als Kommas.</p>
        <div class="ex"><p lang="de">Er öffnete die Tür <u class="k">–</u> und erschrak.</p><p lang="de">Der Vorschlag <u class="k">–</u> das muss man zugeben <u class="k">–</u> ist gut.</p></div>
        <p>Nach dem zweiten Gedankenstrich steht ein Komma, wenn es auch ohne den Zusatz stehen müsste:</p>
        <div class="ex"><p lang="de">Er sagte <u class="k">–</u> und das überraschte alle <u class="k">–,</u> dass er gehe.</p></div>
        <p class="src">Amtliches Regelwerk 2024, § 77 mit E2.</p>` },
    { title: 'Bindestrich und Ergänzungsstrich',
      html: `
        <p>Das Divis zeigt eine Unterbrechung innerhalb eines Wortes an: am Zeilenende (Trennstrich), in Zusammensetzungen (Bindestrich) und als Ergänzungsstrich.</p>
        <ul>
          <li>Pflicht bei Ziffern, Einzelbuchstaben und Abkürzungen: <em>2-Euro-Stück, x-Achse, Kfz-Steuer, K.-o.-Schlag</em>.</li>
          <li>Durchkopplung bei mehrteiligen Fügungen: <em>Wort-für-Wort-Übersetzung, Max-Planck-Institut</em>.</li>
          <li>Freigestellt zur Gliederung oder Hervorhebung: <em>Ich-Erzähler / Icherzähler; Back-up / Backup; Midlife-Crisis / Midlifecrisis</em>.</li>
          <li>Ergänzungsstrich: <em>Apfel- oder Kirschkuchen; Ein- und Ausgang</em>.</li>
          <li><strong>Neu 2024</strong>: nach Wortgruppen in Anführungszeichen: <em>der „Donauwalzer“-Takt</em>.</li>
        </ul>
        <p>Ansonsten schreibt man Zusammensetzungen <strong>zusammen</strong>; das Leerzeichen in <em class="bad">Kaffee Maschine</em> ist ein Fehler.</p>
        <p class="src">Amtliches Regelwerk 2024, § 81 und Teil C (Schreibung mit Bindestrich).</p>` },
    { title: 'Schrägstrich',
      html: `
        <p>Der Schrägstrich steht für <em>und, oder, pro, je</em>: <em>Sommersemester 2026/27, km/h</em>. Bei Kurzformen für Paarformen muss die Grammatik beider Teile stimmen:</p>
        <div class="ex"><p lang="de">die Schüler/-innen</p><p lang="de" class="bad">den Schüler/-innen <span class="tnote">(den Schülern / den Schülerinnen)</span></p></div>
        <p>Wortinterne Genderzeichen (Doppelpunkt, Stern, Unterstrich) gehören laut Regelwerk 2024 nicht zum Kernbestand der Orthografie und sind nicht geregelt.</p>
        <p class="src">Amtliches Regelwerk 2024 (Schrägstrich; Anhang zu Sonderzeichen); Handreichung des österreichischen Bildungsministeriums zum Regelwerk 2024.</p>` }
  ],

  english: [
    { title: 'Semicolon',
      html: `
        <p>Use a semicolon between closely related main clauses not joined by a conjunction, especially before a connective adverb, and in lists whose items contain commas:</p>
        <div class="ex"><p lang="en">Revenue rose<u class="k">;</u> costs remained stable.</p><p lang="en">The deal was approved<u class="k">; however,</u> two directors abstained.</p><p lang="en">Offices in London, UK<u class="k">;</u> Paris, France<u class="k">;</u> and Rome, Italy.</p></div>
        <p>The semicolon is the standard cure for the comma splice. It is never used to introduce a list (that is the colon’s job).</p>` },
    { title: 'Colon and capitals',
      html: `
        <p>In British style, the colon is normally followed by a lower-case letter, even when a complete sentence follows; a capital is used only for proper nouns, direct speech, quotations or a sequence of sentences. American style (Chicago) capitalises a complete sentence after a colon only if more than one follows; many American writers capitalise one sentence too.</p>
        <div class="ex"><p lang="en">The result is clear<u class="k">: costs</u> must fall.</p><p lang="en">Bring the following<u class="k">: two</u> photographs, your passport and the form.</p></div>
        <p>The words before the colon should normally form a complete clause: <em class="odd">The reasons are: cost and time.</em> is common but frowned on by careful editors; <em>There are two reasons: cost and time.</em></p>
        <p class="src">New Hart’s Rules, ch. 4; The Chicago Manual of Style, ch. 6.</p>` },
    { title: 'Dashes',
      html: `
        <p>Two conventions exist for the parenthetical dash:</p>
        <ul>
          <li><strong>Spaced en rule</strong> ( – ): most British publishers and newspapers; identical to German.</li>
          <li><strong>Closed em rule</strong> (—): American publishing, and Oxford University Press in Britain.</li>
        </ul>
        <div class="ex"><p lang="en">The proposal <u class="k">–</u> it must be said <u class="k">–</u> is a good one.</p><p lang="en">The proposal<u class="k">—</u>it must be said<u class="k">—</u>is a good one.</p></div>
        <p>The closed en rule marks ranges and relations: <em>1914–18; pp. 20–25; the London–Paris train; the Labour–Liberal coalition</em>. A hyphen in these places is a typographical error, though a common one.</p>
        <p class="src">New Hart’s Rules, ch. 4; The Chicago Manual of Style, ch. 6.</p>` },
    { title: 'Hyphens in compounds',
      html: `
        <ul>
          <li><strong>Compound modifiers before a noun</strong> are hyphenated; after the verb usually not: <em>a well-known author / the author is well known; a five-year plan; an up-to-date list / the list is up to date</em>.</li>
          <li>No hyphen after an <em>-ly</em> adverb: <em>a highly paid job</em>.</li>
          <li><strong>Suspended hyphen</strong>, like the German Ergänzungsstrich: <em>pre- and post-war Europe</em>.</li>
          <li>Hyphens distinguish meaning: <em>re-cover / recover; a little-used car / a little used car</em>.</li>
          <li>Open, hyphenated and closed compounds vary between dictionaries and over time: <em>e-mail → email; on line → on-line → online</em>. The direction is towards closing up, as in German.</li>
        </ul>
        <p class="src">New Hart’s Rules, ch. 3 (hyphenation); Oxford Dictionary for Writers and Editors for individual words.</p>` }
  ],

  contrast: `
    <div class="tablewrap"><table>
      <thead><tr><th>German</th><th>English (British)</th></tr></thead>
      <tbody>
        <tr><td>Das Ergebnis ist klar: Die Kosten müssen sinken.</td><td>The result is clear: costs must fall.</td></tr>
        <tr><td>die Kfz-Versicherung</td><td>car insurance</td></tr>
        <tr><td>eine Fünf-Jahres-Planung</td><td>a five-year plan</td></tr>
        <tr><td>Kaffeemaschine</td><td>coffee machine</td></tr>
        <tr><td>Vor- und Nachteile</td><td>pros and cons; advantages and disadvantages</td></tr>
        <tr><td>1914–1918</td><td>1914–18</td></tr>
      </tbody></table></div>
    <p class="contrast">The most frequent cross-language errors: capital letter after a colon in British English (German habit), and German compounds split as in English (<em class="bad">Kaffee Maschine</em>, often called „Deppenleerzeichen“).</p>`,

  usage: `
    <ul>
      <li><strong>The semicolon is declining</strong> in English and German journalism and everyday writing; it survives in academic and legal prose. Kurt Vonnegut’s advice not to use it is often quoted; it is a stylistic preference, not a rule.</li>
      <li><strong>Dashes in everyday typing</strong>: keyboards produce the hyphen, so many texts use a spaced hyphen ( - ) for the dash. Word processors often convert it automatically. In edited text it is wrong in both languages.</li>
      <li><strong>Capital after a colon</strong>: the German rule is codified; in British English the lower case is house style in most publishers, but capitals are common in business writing, particularly under American influence.</li>
      <li><strong>Hyphen in English</strong>: dictionaries disagree. The Oxford dictionaries removed hyphens from thousands of compounds in 2007 (<em>bumblebee, ice cream, pigeonhole</em>). Follow one dictionary consistently.</li>
    </ul>`,

  style: `
    <p>The dash is the informal relation of commas and brackets: commas integrate an insertion, brackets subordinate it, dashes highlight it. Too many dashes make a text breathless. One pair per paragraph is a reasonable ceiling in formal writing.</p>
    <p>The colon is a hinge: it creates expectation and then delivers. Used at the end of a build-up it gives emphasis that a <em>because</em> or <em>namely</em> lacks: <em>There was only one problem: nobody had read the contract.</em></p>`,

  pitfalls: `
    <ul>
      <li>Do not confuse the hyphen (-) with the dash (–): <em class="bad">1914-18</em>, <em class="bad">Der Vorschlag - das muss man zugeben - ist gut</em>.</li>
      <li>British English: lower case after a colon unless a proper noun, quotation or several sentences follow.</li>
      <li>German: no space in compounds; hyphen with digits and abbreviations (<em>2-Euro-Stück</em>, not <em class="bad">2 Euro Stück</em>).</li>
      <li>English: hyphenate compound modifiers before the noun (<em>a long-term loan</em>), not after (<em>the loan is long term</em>).</li>
    </ul>`,

  latin: `
    <p><em>Semicolon</em> combines Latin <em>semi-</em> “half” with Greek <em>kolon</em>; the mark was introduced by the Venetian printer Aldus Manutius in the 1490s. German <em>Divis</em> comes from Latin <em>divisio</em> “division”.</p>`,

  summary: [
    'Semicolon: between equal units, stronger than a comma; cures the comma splice; groups complex lists.',
    'German: capital after a colon if a sentence, direct speech or quotation follows; otherwise lower case.',
    'British English: usually lower case after a colon even before a sentence.',
    'Dash: spaced en rule (DE and most British usage) or closed em rule (US, OUP); en rule also for ranges (1914–18).',
    'German compounds are written solid or hyphenated, never with a space; hyphen obligatory with digits and abbreviations.',
    'English compound modifiers are hyphenated before the noun (a well-known author), not after.',
    'Both: suspended hyphen (Apfel- oder Kirschkuchen; pre- and post-war).'
  ],

  cards: [
    { id: 'colon-capital', title: 'Capital after a colon?', tags: ['Doppelpunkt', 'colon', 'Großschreibung', 'capital'], html: `
      <p><strong>DE</strong>: groß bei ganzem Satz, direkter Rede, Zitat; sonst klein.<br><strong>BrE</strong>: lower case, except proper nouns, quotations, several sentences.<br><strong>AmE</strong> (Chicago): capital if two or more sentences follow; usage varies.</p>` },
    { id: 'dash-hyphen', title: 'Dash and hyphen', tags: ['Gedankenstrich', 'Bindestrich', 'dash', 'hyphen', 'en rule'], html: `
      <p>- hyphen: compounds (<em>Kfz-Steuer; well-known</em>)<br>– en rule: spaced as dash (DE, most BrE); closed for ranges (<em>1914–18</em>)<br>— em rule: closed as dash (AmE, OUP)</p>` }
  ],

  terms: [
    { en: 'semicolon', de: 'Semikolon, Strichpunkt', la: 'semi- + Greek kolon' },
    { en: 'colon', de: 'Doppelpunkt, Kolon', la: '' },
    { en: 'dash (en rule, em rule)', de: 'Gedankenstrich (Halbgeviertstrich, Geviertstrich)', la: '' },
    { en: 'hyphen', de: 'Bindestrich, Divis, Trennstrich', la: 'divisio' },
    { en: 'suspended hyphen', de: 'Ergänzungsstrich', la: '' },
    { en: 'compound modifier', de: 'zusammengesetztes Attribut', la: '' },
    { en: 'slash, solidus, oblique', de: 'Schrägstrich', la: 'solidus (a Roman coin; the shilling sign)' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', lang: 'de', prompt: 'Which is correct?', options: ['Das Ergebnis ist klar: Die Kosten müssen sinken.', 'Das Ergebnis ist klar: die Kosten müssen sinken.'], answer: 0, keepOrder: true, explain: 'A complete sentence follows the colon: capital in German.' },
    { id: 'e2', type: 'mc', lang: 'en', prompt: 'British house style:', options: ['The result is clear: costs must fall.', 'The result is clear: Costs must fall.'], answer: 0, keepOrder: true, explain: 'British usage: lower case after a colon.' },
    { id: 'e3', type: 'mc', lang: 'de', prompt: 'Which is correct?', options: ['das 2-Euro-Stück', 'das 2 Euro Stück', 'das 2-Euro Stück'], answer: 0, explain: 'Hyphen with digits, and the whole compound is hyphenated through (Durchkopplung).' },
    { id: 'e4', type: 'mc', lang: 'en', prompt: 'Which is correct?', options: ['a well-known author', 'a well known author', 'a highly-paid author'], answer: 0, explain: 'Compound modifier before the noun: hyphen; but no hyphen after an <em>-ly</em> adverb.' },
    { id: 'e5', type: 'mc', prompt: 'Which character belongs in “the 1914_18 war”?', options: ['en rule (–)', 'hyphen (-)', 'em rule (—)'], answer: 0, explain: 'Ranges take a closed en rule.' },
    { id: 'e6', type: 'mc', lang: 'en', prompt: 'Which repairs the comma splice <em>The deal was approved, two directors abstained.</em>?', options: ['The deal was approved; two directors abstained.', 'The deal was approved: Two directors abstained.', 'The deal was approved - two directors abstained.'], answer: 0, explain: 'Semicolon between related main clauses.' },
    { id: 'e7', type: 'gap', lang: 'de', prompt: '<span lang="de">Apfel___ oder Kirschkuchen</span> (one character)', answers: ['-'], explain: 'Ergänzungsstrich, the German suspended hyphen.' },
    { id: 'e8', type: 'mc', lang: 'de', prompt: 'Which is correct?', options: ['den Schülern und Schülerinnen', 'den Schüler/-innen'], answer: 0, keepOrder: true, explain: 'The slash form must work for both parts; <em>den Schüler</em> lacks the dative -n.' }
  ]
});
