/*
 * Unit 1, lecture 1: gender and number. Content file only. German section in German.
 */
Grammaticus.addLecture({
  id: '1.1', unit: 1, number: 1,
  title: 'Gender and number',
  subtitle: 'der, die, das; Kommas or Kommata; why “informations” and “an advice” give a German speaker away',
  minutes: 30,

  intro: `
    <p>German nouns carry one of three genders and form their plural in half a dozen ways; English nouns have no gender and mostly add <em>-s</em>. That sounds as if English were simple, but English draws a line German barely knows: between nouns that can be counted (<em>a suggestion, two suggestions</em>) and nouns that cannot (<em>advice, information</em>). This lecture covers both systems, the rules of thumb for German gender, and the nouns where the two languages disagree.</p>`,

  concept: [
    { title: 'Grammatical gender',
      html: `
        <p><strong>Grammatical gender</strong> (<em>Genus</em>) is a classification of nouns that shows in the words agreeing with them: articles, adjectives, pronouns. It is related to natural sex (<em>Sexus</em>) only loosely: <em>das Mädchen</em> is neuter, <em>die Person</em> feminine whoever is meant, <em>der Tisch</em> masculine for no reason at all.</p>
        <p>Old English had three genders like German; they disappeared in the Middle English period, when the endings that marked them wore away. Modern English keeps gender only in <em>he, she, it</em>, which follow natural sex.</p>` },
    { title: 'Number and countability',
      html: `
        <p><strong>Number</strong> is singular or plural. Cutting across it is <strong>countability</strong>: count nouns take <em>a</em> and a plural (<em>a report, two reports</em>); mass or uncount nouns do not (<em>information, money</em>). German has the distinction (<em>Geld, Milch</em>), but many nouns that are uncount in English are count nouns in German: <em>eine Information, zwei Informationen</em>.</p>` }
  ],

  german: [
    { title: 'Faustregeln für das Genus',
      html: `
        <p>Das Genus ist oft nicht vorhersagbar, aber Endungen und Bedeutungsgruppen helfen:</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Genus</th><th>Endungen · Gruppen</th></tr></thead>
          <tbody>
            <tr><td>feminin</td><td>-ung, -heit, -keit, -schaft, -ion, -tät, -ik, -ie, -ei, -enz/-anz<span class="tnote">die Rechnung, Freiheit, Bilanz, Zinsentwicklung</span></td></tr>
            <tr><td>neutral</td><td>-chen, -lein, -ment, -um, -tum; substantivierte Infinitive<span class="tnote">das Mädchen, Dokument, Datum, Eigentum, das Lesen</span></td></tr>
            <tr><td>maskulin</td><td>-ling, -ismus, -ist, -or (meist), -ant; Wochentage, Monate, Jahreszeiten<span class="tnote">der Lehrling, Kapitalismus, Faktor, Montag, Mai</span></td></tr>
          </tbody></table></div>
        <p>Komposita richten sich nach dem letzten Bestandteil: <em>die Tür → die Haustür</em>, <em>das Haus → das Bankhaus</em>.</p>` },
    { title: 'Ein Wort, zwei Genera',
      html: `
        <p>Manche Wörter haben je nach Genus verschiedene Bedeutungen:</p>
        <div class="ex">
          <p lang="de">der Gehalt (Anteil, Inhalt) · das Gehalt (Lohn)</p>
          <p lang="de">der See (Binnensee) · die See (Meer)</p>
          <p lang="de">der Band (Buch) · das Band (Streifen) · die Band (Musikgruppe)</p>
          <p lang="de">der Leiter (Chef) · die Leiter (zum Steigen)</p>
          <p lang="de">die Steuer (Abgabe) · das Steuer (am Auto)</p>
        </div>
        <p>Bei anderen schwankt das Genus ohne Bedeutungsunterschied, oft regional: <em>der/das Joghurt, der/das Blog, der/das Virus</em> (fachsprachlich <em>das</em>), <em>die/das E-Mail</em> (in Österreich und der Schweiz meist <em>das</em>).</p>` },
    { title: 'Die Pluralbildung',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th>Muster</th><th>Beispiele</th></tr></thead>
          <tbody>
            <tr><td>-e (oft mit Umlaut)</td><td>Tag – Tage, Hand – Hände</td></tr>
            <tr><td>-er (mit Umlaut)</td><td>Kind – Kinder, Mann – Männer</td></tr>
            <tr><td>-(e)n</td><td>Frau – Frauen, Kollege – Kollegen</td></tr>
            <tr><td>-s</td><td>Auto – Autos, Hotel – Hotels</td></tr>
            <tr><td>ohne Endung (oft mit Umlaut)</td><td>Lehrer – Lehrer, Vater – Väter</td></tr>
          </tbody></table></div>
        <p>Fremdwörter haben oft zwei Plurale, einen eingedeutschten und einen aus der Herkunftssprache:</p>
        <div class="ex"><p lang="de">das Komma – die Kommas / Kommata · das Konto – die Konten / Kontos / Konti · das Thema – die Themen · die Pizza – die Pizzas / Pizzen · das Visum – die Visa / Visen · das Schema – die Schemas / Schemata</p></div>
        <p>Bei <em>Komma</em> sind beide Formen standardsprachlich; <em>Kommata</em> (nach dem griechischen Plural) klingt gehobener.</p>` }
  ],

  english: [
    { title: 'Gender in English',
      html: `
        <p>English nouns have no grammatical gender. <em>he/she</em> follow the sex of a person or animal; <em>it</em> is used for things and often for animals and babies. Traditional usage made ships, and sometimes countries and cars, <em>she</em>; this is now optional and declining, and many style guides recommend <em>it</em>.</p>
        <p>For a person whose sex is unknown or irrelevant, the singular <em>they</em> is the usual choice (lecture 1.4).</p>` },
    { title: 'Plurals',
      html: `
        <ul>
          <li>Regular <em>-s/-es</em>: <em>reports, boxes, companies</em>.</li>
          <li>Irregular survivals: <em>men, women, children, feet, teeth, mice</em>.</li>
          <li>Unchanged: <em>sheep, fish, aircraft, series, species</em>.</li>
          <li>Latin and Greek plurals: <em>criterion – criteria, phenomenon – phenomena, analysis – analyses, thesis – theses</em>; but <em>agenda</em> is now singular (<em>agendas</em>), and <em>data</em> and <em>media</em> are used with singular or plural verbs.</li>
          <li>Plural-only nouns: <em>trousers, scissors, glasses, thanks, premises, earnings, proceeds</em>; and <em>police, people, staff</em> take a plural verb: <em>The police are investigating.</em></li>
        </ul>` },
    { title: 'Uncount nouns',
      html: `
        <p>These have no plural and no <em>a/an</em>; to count them, use <em>a piece of, an item of</em> or a different noun:</p>
        <div class="ex"><p lang="en">information · advice · news · feedback · research · evidence · equipment · furniture · luggage · software · progress · knowledge · work · traffic · weather</p><p lang="en">a piece of advice · two items of news · a suggestion · a tip</p><p lang="en" class="bad">informations · an advice · the news are · researches · softwares</p></div>
        <p><em>news</em> is singular: <em>The news is good.</em></p>` },
    { title: 'Collective nouns',
      html: `
        <p>Nouns for groups (<em>team, government, board, committee, staff, company</em>) take a singular verb in American English. British English allows a plural verb when the members are thought of as individuals:</p>
        <div class="ex"><p lang="en">%The board are divided on the proposal. <span class="gl">British: the members</span></p><p lang="en">The board has approved the budget. <span class="gl">both: the body as a unit</span></p></div>
        <p>Keep it consistent within a sentence: <span class="bad">The company has announced their results.</span> is common but mixed; <em>The company has announced its results.</em></p>` }
  ],

  contrast: `
    <ul>
      <li><strong>Count in German, uncount in English</strong>: <em>Informationen → information; ein Rat / Ratschläge → advice / a piece of advice; Nachrichten → the news (is); Möbel → furniture; Fortschritte → progress; Forschungen → research; Beweise → evidence.</em></li>
      <li><strong>Plural in English, singular in German</strong>: <em>die Hose → (a pair of) trousers; die Brille → glasses; die Schere → scissors; der Erlös → the proceeds.</em></li>
      <li><strong>Gender of English loanwords</strong> in German follows a German equivalent or the ending: <em>die E-Mail</em> (die Post), <em>das Meeting</em> (das Treffen), <em>der Laptop</em> (der Rechner), <em>das Team</em>.</li>
      <li><strong>The plural of the punctuation mark</strong>: German <em>die Kommas/Kommata</em>; English only <em>commas</em>. <em>Commata</em> exists in English only as a rare scholarly term from Greek metrics.</li>
    </ul>
    <p class="contrast">A German speaker’s most persistent English errors in this area are <em>informations</em>, <em>an advice</em>, <em>the news are</em> and <em>researches</em>; all come from the German count nouns behind them.</p>`,

  usage: `
    <ul>
      <li><strong><em>data</em></strong>: originally a Latin plural. In scientific writing <em>the data are</em> remains common; in general and business English <em>the data is</em> (uncount, like <em>information</em>) is now standard. Both are accepted by usage guides; choose one and keep it.</li>
      <li><strong><em>das Mädchen … sie</em></strong>: the pronoun traditionally follows the grammatical gender (<em>es</em>), but with some distance in the text <em>sie</em> is normal and accepted: <em>Das Mädchen kam herein. Sie lächelte.</em></li>
      <li><strong><em>der Virus</em></strong>: the medical term is <em>das Virus</em>; <em>der Virus</em> is the everyday form and is recorded as standard outside technical language.</li>
      <li><strong><em>Kontos</em></strong>: besides the banking term <em>Konten</em>, <em>Kontos</em> is standard and <em>Konti</em> regional (Austria, Switzerland).</li>
    </ul>`,

  pitfalls: `
    <ul>
      <li><span class="bad">Thank you for the informations.</span> → <em>Thank you for the information.</em></li>
      <li><span class="bad">Can I give you an advice?</span> → <em>Can I give you some advice / a piece of advice / a tip?</em></li>
      <li><span class="bad">The news are bad.</span> → <em>The news is bad.</em></li>
      <li><span class="bad">das Gehalt der Lösung</span> when you mean concentration → <em>der Gehalt</em>.</li>
      <li><span class="odd">die Joghurt</span> is Austrian; in Germany <em>der/das Joghurt</em>.</li>
    </ul>`,

  latin: `
    <p>Latin has the same three genders as German, and many English “foreign plurals” are simply Latin neuter plurals in <em>-a</em>: <em>datum – data, medium – media, agendum – agenda</em> (“things to be done”), <em>memorandum – memoranda</em>. <em>Agenda</em> was a plural that became a singular, as <em>data</em> is becoming.</p>
    <p class="latin">German <em>Kommata, Themata, Schemata</em> follow Greek neuter plurals in <em>-ata</em> (<em>komma, kommata</em>); English borrowed the word but not the plural.</p>`,

  summary: [
    'German has three grammatical genders, related only loosely to sex; English keeps gender only in he/she/it.',
    'Gender clues: -ung/-heit/-keit/-schaft/-ion feminine; -chen/-lein/-ment/-um neuter; -ling/-ismus/-or, days and months masculine; compounds follow the last part.',
    'Meaning pairs: der/das Gehalt, der/die See, der/das/die Band, der/die Leiter, die/das Steuer.',
    'German has five main plural patterns; loanwords often have two plurals (Kommas/Kommata, Konten/Kontos).',
    'English uncount nouns: information, advice, news, research, evidence, feedback, equipment, furniture, progress; no plural, no a/an.',
    'British English allows plural verbs with collective nouns (the board are divided).'
  ],

  cards: [
    { id: 'uncount', title: 'English uncount nouns', tags: ['information', 'advice', 'news', 'uncountable', 'plural'], html: `
      <p>information, advice, news (is), feedback, research, evidence, equipment, furniture, luggage, software, progress, knowledge, work, traffic, weather.<br>Count them with <em>a piece of, an item of</em>, or use <em>a tip, a suggestion</em>.</p>` },
    { id: 'genus', title: 'German gender clues', tags: ['Genus', 'der die das', 'gender'], html: `
      <p><strong>die</strong>: -ung, -heit, -keit, -schaft, -ion, -tät, -ik, -ie, -ei, -enz/-anz<br><strong>das</strong>: -chen, -lein, -ment, -um, -tum, nominalised infinitives<br><strong>der</strong>: -ling, -ismus, -ist, -or, -ant; days, months, seasons<br>Compounds: gender of the last part.</p>` },
    { id: 'two-genders', title: 'Same word, different gender', tags: ['Gehalt', 'See', 'Band', 'Leiter', 'Steuer'], html: `
      <p>der Gehalt (content) / das Gehalt (salary) · der See (lake) / die See (sea) · der Band (volume) / das Band (ribbon) / die Band (group) · der Leiter (head) / die Leiter (ladder) · die Steuer (tax) / das Steuer (steering wheel).</p>` }
  ],

  terms: [
    { en: 'grammatical gender', de: 'Genus', la: 'genus' },
    { en: 'natural sex', de: 'Sexus', la: 'sexus' },
    { en: 'masculine / feminine / neuter', de: 'Maskulinum / Femininum / Neutrum', la: 'masculinum / femininum / neutrum (“neither”)' },
    { en: 'count noun', de: 'zählbares Nomen (Individuativum)', la: '' },
    { en: 'mass (uncount) noun', de: 'nicht zählbares Nomen, Stoffnomen', la: '' },
    { en: 'collective noun', de: 'Sammelbezeichnung, Kollektivum', la: 'collectivum' },
    { en: 'plural-only noun', de: 'Pluraletantum', la: 'plurale tantum “plural only”' },
    { en: 'singular-only noun', de: 'Singularetantum', la: 'singulare tantum' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: 'Which is correct?', options: ['Thank you for the information.', 'Thank you for the informations.'], answer: 0, keepOrder: true, explain: '<em>information</em> is uncount in English.' },
    { id: 'e2', type: 'gap', prompt: '<span lang="en">The news ___ better than expected.</span> (be, present)', answers: ['is'], explain: '<em>news</em> takes a singular verb.' },
    { id: 'e3', type: 'match', prompt: 'Match the article to the meaning.', pairs: [['das Gehalt', 'salary'], ['der Gehalt', 'content, proportion'], ['die See', 'the sea'], ['der See', 'a lake']], explain: 'Gender distinguishes meaning.' },
    { id: 'e4', type: 'mc', lang: 'de', prompt: 'Which gender? <span lang="de">___ Zinsentwicklung</span>', options: ['die', 'der', 'das'], answer: 0, keepOrder: true, explain: 'Compound: the last part, <em>Entwicklung</em>, is feminine (-ung).' },
    { id: 'e5', type: 'mc', prompt: 'You want to offer one suggestion. You write:', options: ['May I give you a piece of advice?', 'May I give you an advice?', 'May I give you one advice?'], answer: 0, keepOrder: true, explain: '<em>advice</em> is uncount; count it with <em>a piece of</em>, or say <em>a tip</em>.' },
    { id: 'e6', type: 'mc', lang: 'de', prompt: 'Plural of <em>Komma</em> in standard German:', options: ['Kommas or Kommata', 'only Kommata', 'only Kommas', 'Kommen'], answer: 0, explain: 'Both are standard; <em>Kommata</em> is more formal.' },
    { id: 'e7', type: 'mc', prompt: 'British English: <span lang="en">The committee ___ divided on the issue.</span>', options: ['are (members as individuals)', 'is only', 'be'], answer: 0, explain: 'British English allows a plural verb when the members are thought of separately; American English uses <em>is</em>.' }
  ]
});
