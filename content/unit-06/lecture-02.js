/*
 * Unit 6, lecture 2: writing words together or apart. German section in German.
 */
Grammaticus.addLecture({
  id: '6.2', unit: 6, number: 2,
  title: 'Getrennt- und Zusammenschreibung',
  subtitle: 'Rad fahren, kennenlernen, krankschreiben; set up or setup, every day or everyday',
  minutes: 30,

  intro: `
    <p>Whether two words are written as one is the area of German spelling that changed most often after 1996: the first reform separated many compounds, the revision of 2006 joined many again, and the 2024 version added further variants. The result is a set of principles with a long tail of permitted alternatives. English has no rules here at all, only dictionaries and a strong drift towards closing compounds up.</p>`,

  concept: `
    <p>A word group (<em>Wortgruppe</em>) keeps the meanings of its parts; a compound (<em>Zusammensetzung</em>) can acquire a meaning of its own. German spelling uses this distinction: <em>schwarz arbeiten</em> (to work in black clothes, or with black paint) against <em>schwarzarbeiten</em> (to work illicitly). English draws the same line in its phrasal verbs and their nouns: <em>to set up</em> a company, but <em>the setup</em>.</p>
    <p>The tests the German rules use are mostly grammatical: Can the first part be extended or compared (<em>sehr schnell laufen</em>)? Does it still behave like a noun (<em>Rad fahren</em>, but not <em>*das Rad fahren</em> in the sense of cycling)? Is the stress on the first part? Where the tests disagree, both spellings are usually allowed.</p>`,

  german: [
    { title: 'Verbindungen mit Verben',
      html: `
        <p><strong>Partikel + Verb</strong>: zusammen, wenn die Partikel betont ist und im Satz abgetrennt wird: <em>zurückgeben (er gibt zurück), hinausgehen, vorlesen, zusammenarbeiten</em>. Mit <em>sein</em> immer getrennt: <em>dabei sein, da sein, zusammen sein</em>.</p>
        <p><strong>Nomen + Verb</strong>: in der Regel getrennt: <em>Rad fahren, Auto fahren, Klavier spielen, Ski laufen</em>. Zusammen, wenn das Nomen verblasst ist: <em>eislaufen, kopfstehen, leidtun, nottun, preisgeben, stattfinden, teilnehmen, standhalten</em>. Beides möglich: <em>Acht geben / achtgeben, Halt machen / haltmachen, Maß halten / maßhalten</em>.</p>
        <p><strong>Verb + Verb</strong>: getrennt: <em>spazieren gehen, lesen lernen, schwimmen gehen</em>. Bei <em>bleiben</em> und <em>lassen</em> mit übertragener Bedeutung ist auch Zusammenschreibung möglich: <em>sitzen bleiben / sitzenbleiben</em> (in der Schule nicht versetzt werden), <em>liegen lassen / liegenlassen</em> (vergessen). Ebenso freigestellt: <em>kennen lernen / kennenlernen</em>.</p>
        <p><strong>Adjektiv + Verb</strong>: getrennt, wenn das Adjektiv wörtlich gemeint ist (<em>schnell laufen, laut lesen</em>); zusammen, wenn eine neue, idiomatische Gesamtbedeutung entsteht:</p>
        <div class="ex"><p lang="de">Der Arzt hat sie krankgeschrieben.</p><p lang="de">Das Gericht hat ihn freigesprochen.</p><p lang="de">Er hat jahrelang schwarzgearbeitet.</p><p lang="de">Sie hat den Text klein geschrieben. <span class="tnote">(in kleiner Schrift)</span></p><p lang="de">Nomen werden großgeschrieben. <span class="tnote">(mit großem Anfangsbuchstaben)</span></p></div>
        <p>Bezeichnet das Adjektiv das Ergebnis der Handlung, ist beides erlaubt: <em>leer essen / leeressen, kaputt machen / kaputtmachen, sauber machen / saubermachen</em>.</p>
        <p class="src">Amtliches Regelwerk 2024, Teil B, Abschnitt 1 (Verb).</p>` },
    { title: 'Partizipien und Adjektive',
      html: `
        <p>Verbindungen mit Partizipien können meist getrennt oder zusammengeschrieben werden: <em>Rat suchend / ratsuchend, Leben spendend / lebenspendend, eng anliegend / enganliegend</em>. Zusammen, wenn der erste Teil für eine Wortgruppe steht: <em>angsterfüllt</em> (von Angst erfüllt), <em>bahnbrechend</em>.</p>
        <p>Mit <em>nicht</em> ist seit 2024 alles erlaubt: <em>nichtöffentlich / nicht-öffentlich / nicht öffentlich</em>.</p>
        <p>Neu 2024 bei Farben: Mischfarben zusammen, getrennte Farbflächen mit Bindestrich:</p>
        <div class="ex"><p lang="de">ein blaugraues Hemd <span class="tnote">(eine Farbe zwischen Blau und Grau)</span></p><p lang="de">ein blau-grau gestreiftes Hemd <span class="tnote">(blaue und graue Streifen)</span></p></div>
        <p>Bedeutungsunterschied (Präzisierung 2024): <em>kleinkariert</em> (engstirnig) gegenüber <em>klein kariert</em> (mit kleinem Karomuster).</p>
        <p class="src">Amtliches Regelwerk 2024, §§ 36, 44, 45; Rat für deutsche Rechtschreibung, Pressemitteilung vom 14.7.2023 und Überblick über die Änderungen 2024.</p>` },
    { title: 'Andere Wortarten',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th>zusammen</th><th>getrennt / beides</th></tr></thead>
          <tbody>
            <tr><td>irgendetwas, irgendjemand</td><td>so viel, wie viel, zu viel</td></tr>
            <tr><td>zurzeit <span class="tnote">(gegenwärtig)</span></td><td>zur Zeit der Römer</td></tr>
            <tr><td>soviel ich weiß <span class="tnote">(Konjunktion)</span></td><td>so viel Arbeit</td></tr>
            <tr><td>sodass</td><td>so dass</td></tr>
            <tr><td>infrage, zuhause, aufgrund, mithilfe, anstelle</td><td>in Frage, zu Hause, auf Grund, mit Hilfe, an Stelle</td></tr>
          </tbody></table></div>
        <p>Nomen bilden Zusammensetzungen, die immer zusammen (oder mit Bindestrich) geschrieben werden, nie mit Leerzeichen: <em>Kaffeemaschine, Kundenservice, Facility-Management / Facilitymanagement</em>. Bei englischen Fügungen sind seit 2024 mehrere Schreibungen zugelassen: <em>Fake News / Fakenews / Fake-News; Last-minute-Angebot / Last-Minute-Angebot</em>.</p>
        <p class="src">Amtliches Regelwerk 2024, Teil B, Abschnitt 4; § 45; § 55.</p>` }
  ],

  english: [
    { title: 'Open, hyphenated, closed',
      html: `
        <p>English compounds come in three forms, and the same compound may appear in all three over time: <em>e mail → e-mail → email; web site → web-site → website; on line → on-line → online</em>. The direction is almost always towards the closed form. Dictionaries record the stage reached; they do not always agree with each other.</p>
        <p>The best-defined pattern is the <strong>phrasal verb</strong> and the noun or adjective derived from it: the verb is two words, the noun or adjective one (or hyphenated):</p>
        <div class="tablewrap"><table>
          <thead><tr><th>verb</th><th>noun / adjective</th></tr></thead>
          <tbody>
            <tr><td>to set up a company</td><td>the setup</td></tr>
            <tr><td>to log in</td><td>your login</td></tr>
            <tr><td>to back up the data</td><td>a backup</td></tr>
            <tr><td>to follow up</td><td>a follow-up meeting</td></tr>
            <tr><td>to break down the figures</td><td>a breakdown</td></tr>
            <tr><td>to check out</td><td>the checkout</td></tr>
          </tbody></table></div>
        <p class="src">New Hart’s Rules, ch. 3; Oxford Dictionary for Writers and Editors.</p>` },
    { title: 'Pairs that differ in meaning',
      html: `
        <ul>
          <li><em>every day</em> (each day: <em>I walk every day</em>) / <em>everyday</em> (ordinary: <em>everyday problems</em>)</li>
          <li><em>any one</em> (any single one: <em>any one of the options</em>) / <em>anyone</em> (anybody)</li>
          <li><em>may be</em> (verb: <em>it may be late</em>) / <em>maybe</em> (perhaps)</li>
          <li><em>in to</em> (<em>he handed it in to the office</em>) / <em>into</em> (movement inside)</li>
          <li><em>on to</em> / <em>onto</em>: British usage often keeps <em>on to</em> where American has <em>onto</em> (<em>she jumped onto/on to the table</em>); <em>move on to the next item</em> is two words in both.</li>
          <li><em>cannot</em> is the normal spelling; <em>can not</em> only where <em>not</em> is stressed or belongs to what follows (<em>you can not only … but also</em>).</li>
          <li><em>a lot</em> is always two words; <em>alright</em> is widespread but still regarded as informal by many British editors, who prefer <em>all right</em>.</li>
        </ul>` }
  ],

  contrast: `
    <div class="tablewrap"><table>
      <thead><tr><th>German</th><th>English</th></tr></thead>
      <tbody>
        <tr><td>Kundenservice</td><td>customer service</td></tr>
        <tr><td>die Kaffeemaschine</td><td>the coffee machine</td></tr>
        <tr><td>Rad fahren</td><td>to cycle</td></tr>
        <tr><td>teilnehmen (er nimmt teil)</td><td>to take part</td></tr>
        <tr><td>das Back-up / Backup</td><td>the backup; to back up</td></tr>
        <tr><td>jeden Tag / alltäglich</td><td>every day / everyday</td></tr>
      </tbody></table></div>
    <p class="contrast">English writes noun compounds open (<em>customer service</em>); German never does (<em class="bad">Kunden Service</em>). This is the source of the most visible English interference in German shop signs and advertising. In the other direction, German writers of English tend to close up phrasal verbs (<em class="bad">to setup</em>, <em class="bad">please login</em>).</p>`,

  usage: [
    { title: 'Three revisions in ten years',
      html: `
        <dl class="timeline">
          <dt>1996</dt><dd>Strong preference for separate writing: <em>kennen lernen, sitzen bleiben</em> (in all senses), <em>Leid tun, eislaufen → Eis laufen</em>.</dd>
          <dt>2004–2006</dt><dd>Revision by the newly founded Rat für deutsche Rechtschreibung: many compounds restored (<em>leidtun, eislaufen</em>), many variants admitted (<em>kennenlernen</em>; <em>sitzenbleiben</em> in the figurative sense).</dd>
          <dt>2024</dt><dd>Further variants and clarifications, especially for adjectives and English loans (<em>nichtöffentlich / nicht öffentlich; Fake News / Fakenews</em>).</dd>
        </dl>
        <p>The pattern is typical of the whole reform: an attempt at systematic rules, met by objections from writers and publishers, followed by the admission of variants close to pre-reform usage. Whether one regards this as a sensible compromise or as the loss of a clear norm depends on what one expects of an orthography.</p>` },
    { title: 'Usage and the Duden',
      html: `
        <p>Where the rules allow both forms, the Duden marks one as its recommendation (often the pre-reform spelling: <em>kennenlernen</em>), and most newspapers follow the Duden or their own house list. Writing either form is correct; consistency within one text is what editors check.</p>` }
  ],

  pitfalls: `
    <ul>
      <li>German: no space in noun compounds: <em>Kaffeemaschine, Kundenservice</em>.</li>
      <li>German: <em>zurzeit</em> (at the moment) vs <em>zur Zeit Goethes</em>; <em>wie viel</em> always two words.</li>
      <li>German: <em>dabei sein, da sein</em> always separate.</li>
      <li>English: verb two words, noun one: <em>log in / login, set up / setup, back up / backup</em>.</li>
      <li>English: <em>every day</em> (adverbial) vs <em>everyday</em> (adjective); <em>a lot</em>, never <em class="bad">alot</em>.</li>
    </ul>`,

  summary: [
    'German: word groups separate, compounds with a new meaning together (schwarz arbeiten / schwarzarbeiten).',
    'Noun + verb separate (Rad fahren), unless the noun has faded (teilnehmen, leidtun).',
    'Verb + verb separate (spazieren gehen); kennenlernen and figurative sitzenbleiben may be joined.',
    'Many variants allowed: Rat suchend / ratsuchend; nichtöffentlich / nicht öffentlich; infrage / in Frage.',
    '2024: blaugrau (mixed colour) vs blau-grau gestreift (two colours).',
    'German noun compounds never have a space.',
    'English: phrasal verb two words, derived noun one (set up / setup); open compounds drift to closed (email, online).'
  ],

  cards: [
    { id: 'getrennt-zusammen', title: 'Getrennt oder zusammen', tags: ['Getrenntschreibung', 'Zusammenschreibung', 'kennenlernen', 'Rad fahren'], html: `
      <p>Getrennt: <em>Rad fahren, spazieren gehen, dabei sein, schnell laufen, wie viel</em>.<br>Zusammen: <em>teilnehmen, leidtun, krankschreiben, irgendetwas, zurzeit</em> (= jetzt).<br>Beides: <em>kennenlernen, sitzenbleiben</em> (übertragen), <em>sauber machen, ratsuchend, infrage, sodass</em>.</p>` },
    { id: 'en-compounds', title: 'English: one word or two?', tags: ['compound', 'phrasal verb', 'everyday', 'login'], html: `
      <p>Verb: <em>set up, log in, back up, follow up</em>.<br>Noun/adjective: <em>setup, login, backup, follow-up</em>.<br><em>every day</em> (adv.) / <em>everyday</em> (adj.); <em>maybe</em> / <em>may be</em>; <em>cannot</em>; <em>a lot</em>.</p>` }
  ],

  terms: [
    { en: 'writing as one word / as separate words', de: 'Zusammenschreibung / Getrenntschreibung', la: '' },
    { en: 'compound', de: 'Zusammensetzung, Kompositum', la: 'compositum' },
    { en: 'word group', de: 'Wortgruppe', la: '' },
    { en: 'separable particle', de: 'trennbare Verbpartikel', la: 'particula' },
    { en: 'phrasal verb', de: 'Partikelverb (engl.)', la: '' },
    { en: 'open / hyphenated / closed compound', de: 'getrennt / mit Bindestrich / zusammengeschrieben', la: '' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', lang: 'de', prompt: 'Which is correct?', options: ['Wir fahren am Wochenende Rad.', 'Wir radfahren am Wochenende.'], answer: 0, keepOrder: true, explain: 'Noun + verb: <em>Rad fahren</em>, written separately.' },
    { id: 'e2', type: 'mc', lang: 'de', prompt: 'Which is correct?', options: ['Es tut mir leid.', 'Es tut mir Leid.'], answer: 0, keepOrder: true, explain: '<em>leidtun</em> since 2006; <em>Leid tun</em> (1996) is no longer correct.' },
    { id: 'e3', type: 'mc', lang: 'de', prompt: 'Which is correct?', options: ['die Kaffeemaschine', 'die Kaffee Maschine'], answer: 0, keepOrder: true, explain: 'Noun compounds never have a space.' },
    { id: 'e4', type: 'mc', lang: 'de', prompt: '“At the moment we have no vacancies”:', options: ['Zurzeit haben wir keine freien Stellen.', 'Zur Zeit haben wir keine freien Stellen.'], answer: 0, keepOrder: true, explain: '<em>zurzeit</em> = currently; <em>zur Zeit</em> + genitive = at the time of.' },
    { id: 'e5', type: 'mc', lang: 'de', prompt: 'Which spellings are permitted?', options: ['kennenlernen and kennen lernen', 'only kennenlernen', 'only kennen lernen'], answer: 0, explain: 'Both since 2006; the Duden recommends <em>kennenlernen</em>.' },
    { id: 'e6', type: 'mc', lang: 'de', prompt: 'A shirt with blue and grey stripes (rules of 2024):', options: ['ein blau-grau gestreiftes Hemd', 'ein blaugrau gestreiftes Hemd'], answer: 0, keepOrder: true, explain: 'Separate colours: hyphen. <em>blaugrau</em> is one mixed colour.' },
    { id: 'e7', type: 'mc', lang: 'en', prompt: 'Which is correct?', options: ['Please log in to your account.', 'Please login to your account.'], answer: 0, keepOrder: true, explain: 'Verb: two words. <em>login</em> is the noun.' },
    { id: 'e8', type: 'mc', lang: 'en', prompt: 'Which is correct?', options: ['These are everyday problems.', 'These are every day problems.'], answer: 0, keepOrder: true, explain: 'Adjective: <em>everyday</em>.' },
    { id: 'e9', type: 'gap', lang: 'en', prompt: 'We need a ___ of the costs by department. (noun from <em>break down</em>)', answers: ['breakdown'], explain: 'Noun from a phrasal verb: one word.' }
  ]
});
