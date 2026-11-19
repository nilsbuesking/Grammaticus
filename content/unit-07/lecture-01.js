/*
 * Unit 7, lecture 1: compounding and derivation. German section in German.
 */
Grammaticus.addLecture({
  id: '7.1', unit: 7, number: 1,
  title: 'Compounding and derivation',
  subtitle: 'Fugenelemente, suffixes that decide gender, conversion, and why German writes in one word what English writes in three',
  minutes: 30,

  intro: `
    <p>Both languages make new words in the same few ways: by joining words (<strong>compounding</strong>), by adding affixes (<strong>derivation</strong>), by changing word class without any change of form (<strong>conversion</strong>), and by shortening. They differ in which methods they favour. German compounds freely and writes the result as one word; English compounds as freely but writes most compounds apart, and it converts words between classes with an ease German cannot match.</p>`,

  concept: [
    { title: 'Terms',
      html: `
        <ul>
          <li><strong>Morpheme</strong> (<em>Morphem</em>): the smallest unit with meaning or grammatical function: <em>un-freund-lich</em>, <em>un-friend-ly</em>.</li>
          <li><strong>Root / stem</strong> (<em>Wurzel, Stamm</em>): the core of a word; <strong>affix</strong>: prefix (<em>Präfix</em>) or suffix (<em>Suffix</em>).</li>
          <li><strong>Compound</strong> (<em>Kompositum</em>): two or more stems: <em>Haus|tür, door|bell</em>. In the common <strong>determinative compound</strong> the last part is the head and decides word class and (in German) gender; the first part specifies it: a <em>Haustür</em> is a kind of door.</li>
          <li><strong>Derivation</strong> (<em>Ableitung</em>): stem + affix: <em>Freiheit, freedom</em>.</li>
          <li><strong>Conversion</strong> (<em>Konversion</em>): change of word class without an affix: <em>to email, a must; das Lesen, der Ruf</em>.</li>
          <li><strong>Shortening</strong>: clipping (<em>Uni, exam</em>), acronyms (<em>Kita, NATO</em>), blends (<em>brunch, smog; Kurlaub</em>), back-formation (<em>to edit</em> from <em>editor</em>; <em>notlanden</em> from <em>Notlandung</em>).</li>
        </ul>` }
  ],

  german: [
    { title: 'Komposition und Fugenelemente',
      html: `
        <p>Das Deutsche kann Nomen fast unbegrenzt verbinden; geschrieben wird das Ergebnis zusammen oder mit Bindestrich (Lektion 6.2). Das Grundwort steht rechts und bestimmt das Genus: <em>das Haus + die Tür → die Haustür</em>.</p>
        <p>Zwischen den Teilen steht oft ein <strong>Fugenelement</strong>:</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Fuge</th><th>Beispiele</th></tr></thead>
          <tbody>
            <tr><td>–</td><td>Haustür, Tischbein</td></tr>
            <tr><td>-s-</td><td>Arbeitsplatz, Liebesbrief, Zeitungsartikel</td></tr>
            <tr><td>-es-</td><td>Tagesordnung, Bundesland</td></tr>
            <tr><td>-(e)n-</td><td>Sonnenschein, Straßenbahn</td></tr>
            <tr><td>-er-</td><td>Kindergarten, Bilderbuch</td></tr>
            <tr><td>-e-</td><td>Hundehütte, Wartezimmer</td></tr>
            <tr><td>Tilgung</td><td>Schulbuch (Schule), Kirchturm (Kirche)</td></tr>
          </tbody></table></div>
        <p>Eine allgemeine Regel gibt es nicht. Verlässlich ist nur: Nach <em>-ung, -heit, -keit, -schaft, -ion, -tät, -ling</em> steht immer <em>-s-</em> (<em>Zeitungsartikel, Sicherheitsrat, Religionsfreiheit</em>). Die Fuge ist kein Genitiv, auch wenn sie oft so aussieht: <em>Liebesbrief</em> trotz <em>der Liebe</em>.</p>
        <p class="src">Duden Band 4 (Die Grammatik), Kapitel Wortbildung.</p>` },
    { title: 'Ableitung',
      html: `
        <p>Viele Suffixe legen das Genus fest:</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Suffix</th><th>Genus</th></tr></thead>
          <tbody>
            <tr><td>-ung, -heit, -keit, -schaft, -ion, -tät, -ei</td><td>feminin</td></tr>
            <tr><td>-chen, -lein, -ment, -um</td><td>neutral</td></tr>
            <tr><td>-er, -ling, -ismus, -ist</td><td>maskulin<span class="tnote">bei Personen</span></td></tr>
          </tbody></table></div>
        <p>Adjektive: <em>-lich, -ig, -isch, -bar, -sam, -los, -haft</em> (<em>freundlich, lesbar, sinnlos</em>). Verbpräfixe verändern die Bedeutung und machen Verben oft transitiv: <em>be-</em> (<em>beantworten</em>), <em>ver-</em> (<em>verkaufen, verlaufen</em>), <em>ent-</em> (<em>entlassen</em>), <em>er-</em> (<em>erreichen</em>), <em>zer-</em> (<em>zerbrechen</em>). Diminutive auf <em>-chen</em> und <em>-lein</em> verlangen meist Umlaut: <em>Haus → Häuschen</em>.</p>` },
    { title: 'Konversion',
      html: `
        <p>Jeder Infinitiv kann nominalisiert werden (<em>das Lesen, das Zuspätkommen</em>), jedes Adjektiv auch (<em>das Gute, der Kranke</em>). Aus Verbstämmen entstehen Nomen ohne Suffix: <em>rufen → der Ruf, laufen → der Lauf, schlafen → der Schlaf</em>. Umgekehrt werden Nomen nur mit Verbendung zu Verben: <em>der Fisch → fischen, die Mail → mailen</em>.</p>` }
  ],

  english: [
    { title: 'Compounds',
      html: `
        <p>English compounds work like German ones: head on the right, first element specifying (<em>doorbell, steering wheel, life insurance</em>). They differ in three ways:</p>
        <ul>
          <li>Most noun compounds are written open: <em>life insurance company</em>.</li>
          <li>There are no linking elements; the first element is usually singular even where the meaning is plural: <em>a car park, a toothbrush, a five-year plan</em> (but <em>sales figures, arms race, savings account</em>).</li>
          <li>Stress distinguishes compounds from phrases: <em>a GREENhouse</em> (glass building) vs <em>a green HOUSE</em> (a house painted green); <em>a BLACKbird</em> vs <em>a black BIRD</em>.</li>
        </ul>` },
    { title: 'Derivation and conversion',
      html: `
        <p>English has two sets of affixes: Germanic (<em>-ness, -ship, -hood, -ful, -less, un-</em>) and Romance or Latin (<em>-tion, -ity, -ment, -able, -ive, dis-, in-</em>). They often pair with stems of the same origin: <em>kindness</em> but <em>generosity</em>; <em>unkind</em> but <em>inactive</em>. English does not mark gender, so the suffix carries meaning only.</p>
        <p><strong>Conversion</strong> is the most productive process in modern English, because most words have no inflectional ending that would mark their class:</p>
        <div class="ex"><p lang="en">to email, to google, to text, to chair a meeting, to table a motion</p><p lang="en">a must, a buy, a given, a read, the haves and the have-nots</p><p lang="en">to impact, to action, to ask <span class="tnote">noun: “a big ask” (criticised as jargon)</span></p></div>
        <p class="src">Quirk et al. 1985, Appendix I (word formation).</p>` }
  ],

  contrast: `
    <div class="tablewrap"><table>
      <thead><tr><th>German</th><th>English</th></tr></thead>
      <tbody>
        <tr><td>Lebens<wbr>versicherungs<wbr>gesellschaft</td><td>life insurance company</td></tr>
        <tr><td>Abfahrtszeit</td><td>departure time</td></tr>
        <tr><td>Handschuh</td><td>glove</td></tr>
        <tr><td>Kunden<wbr>zufriedenheits<wbr>umfrage</td><td>customer satisfaction survey</td></tr>
        <tr><td>Datenschutz-Grundverordnung</td><td>General Data Protection Regulation</td></tr>
        <tr><td>eine E-Mail schreiben</td><td>to email</td></tr>
      </tbody></table></div>
    <p class="contrast">English often needs an <em>of</em>-phrase or a different word order where German compounds: <em>Arbeitgeberverband</em> → <em>employers’ association</em>; <em>Zahlungsverzug</em> → <em>late payment</em>. Literal translation of long compounds into English noun stacks (<em class="odd">customer satisfaction survey results evaluation</em>) is grammatical but hard to read.</p>`,

  usage: [
    { title: 'Fugen: regional and unstable',
      html: `
        <p>The linking element varies by region: <em>Schweinebraten</em> (north) but <em>Schweinsbraten</em> (south and Austria); <em>Rindfleisch</em> but Austrian <em>Rindsuppe</em>; <em>Zugverspätung</em> but Austrian <em>Zugsverspätung</em>. The Duden records these as regional variants. For a standard German text, the northern forms are the safe choice; in Austria, the Austrian forms are standard.</p>` },
    { title: 'Long compounds',
      html: `
        <p>The famous record-holder, <em>Rindfleisch<wbr>etikettierungs<wbr>überwachungs<wbr>aufgaben<wbr>übertragungs<wbr>gesetz</em>, was a real law in Mecklenburg-Vorpommern (1999), repealed in 2013. Such words are typical of legal and administrative language, not of everyday writing. The Regelwerk allows a hyphen in long compounds for readability (<em>Lebensmittel-Überwachung</em>); edited usage uses it sparingly.</p>
        <p>English headline language builds noun stacks of similar length (<em>council tax rise row</em>), which are equally opaque without context.</p>` },
    { title: 'Complaints about new words',
      html: `
        <p>Conversion and derivation are the commonest targets of usage complaints: English <em>to impact, to action, to incentivize, a big ask</em>; German <em>-mäßig</em> (<em>zeitmäßig, wettermäßig</em>) and the <em>-ung</em> nominal style. Most of these complaints concern register, not grammar: the words are well formed, but they mark a text as corporate or bureaucratic (Unit 8).</p>` }
  ],

  style: `
    <p>Compounds compress; that is their strength and their danger. <em>Kunden<wbr>zufriedenheits<wbr>umfrage<wbr>ergebnisse</em> saves words but forces the reader to unpack them from right to left. In both languages, a long compound or noun stack can be replaced by a phrase or a clause: <em>die Ergebnisse der Umfrage zur Kundenzufriedenheit; what customers told us in the survey</em>.</p>`,

  pitfalls: `
    <ul>
      <li>German: gender follows the last element: <em>der Tisch + die Lampe → die Tischlampe</em>.</li>
      <li>German: <em>-s-</em> after <em>-ung, -heit, -keit, -ion, -tät</em> is fixed: <em>Zeitungsartikel</em>, not <em class="bad">Zeitungartikel</em>.</li>
      <li>English: the first element of a compound is usually singular: <em>a toothbrush, a car park</em>, not <em class="bad">a teethbrush</em>.</li>
      <li>English: do not translate German compounds as noun stacks of four or more nouns; use <em>of</em>, a verb or a clause.</li>
    </ul>`,

  latin: `
    <p>Latin built its vocabulary mainly by derivation (<em>scribere → scriptor, scriptura, describere</em>) and compounded little; Greek compounded freely (<em>philosophia, democratia</em>). The many Latin suffixes in both languages (<em>-ion/-tion, -tät/-ity, -ieren</em> from Old French <em>-ier</em>) entered as parts of borrowed words and then became productive: German <em>Blamage</em> is a German formation, French in form only; English <em>readable, washable</em> put a Latin suffix on Germanic stems.</p>`,

  summary: [
    'Four main processes: compounding, derivation, conversion, shortening.',
    'Head on the right in both languages; in German the head decides gender (die Haustür).',
    'German linking elements (-s-, -es-, -(e)n-, -er-, -e-) follow no general rule; -s- is fixed after -ung, -heit, -keit, -ion, -tät.',
    'Many German suffixes fix gender: -ung/-heit/-keit/-schaft feminine, -chen/-lein neuter.',
    'English writes most compounds open; first element usually singular; stress marks compounds (GREENhouse).',
    'Conversion is highly productive in English (to email, a must), limited in German to nominalisation and stem nouns (der Ruf).',
    'Long compounds and noun stacks are a matter of style: unpack them where readers need it.'
  ],

  cards: [
    { id: 'fugen', title: 'Fugenelemente', tags: ['Fugenelement', 'Kompositum', 'compound'], html: `
      <p>Immer <em>-s-</em> nach <em>-ung, -heit, -keit, -schaft, -ion, -tät, -ling</em>: <em>Zeitungsartikel</em>.<br>Sonst lexikalisch: <em>Haustür, Tagesordnung, Sonnenschein, Kindergarten, Hundehütte, Schulbuch</em>.<br>Regional: <em>Schweine-/Schweinsbraten, Zug-/Zugsverspätung</em> (österr.).</p>` },
    { id: 'suffix-genus', title: 'Suffix and gender', tags: ['Genus', 'gender', 'Suffix'], html: `
      <p><strong>die</strong>: -ung, -heit, -keit, -schaft, -ion, -tät, -ei<br><strong>das</strong>: -chen, -lein, -ment, -um<br><strong>der</strong>: -er, -ling, -ismus, -ist</p>` }
  ],

  terms: [
    { en: 'word formation', de: 'Wortbildung', la: '' },
    { en: 'morpheme', de: 'Morphem', la: 'Greek morphē “form”' },
    { en: 'compound', de: 'Kompositum, Zusammensetzung', la: 'compositum' },
    { en: 'head (of a compound)', de: 'Grundwort, Kopf', la: '' },
    { en: 'modifier (first element)', de: 'Bestimmungswort', la: '' },
    { en: 'linking element', de: 'Fugenelement', la: '' },
    { en: 'derivation', de: 'Ableitung, Derivation', la: 'derivatio' },
    { en: 'conversion, zero derivation', de: 'Konversion', la: 'conversio' },
    { en: 'back-formation', de: 'Rückbildung', la: '' },
    { en: 'clipping, blend, acronym', de: 'Kürzung, Kontamination (Kofferwort), Akronym', la: '' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', lang: 'de', prompt: 'Gender of <em>Haustür</em>?', options: ['die', 'das', 'der'], answer: 0, keepOrder: true, explain: 'The head (<em>die Tür</em>) decides.' },
    { id: 'e2', type: 'gap', lang: 'de', prompt: '<span lang="de">Zeitung___artikel</span> (type the linking element)', answers: ['s'], explain: 'After <em>-ung</em> always <em>-s-</em>.' },
    { id: 'e3', type: 'match', prompt: 'Match the suffix to the gender.', pairs: [['-heit', 'feminine'], ['-chen', 'neuter'], ['-ling', 'masculine']], explain: 'Suffixes fix gender in German.' },
    { id: 'e4', type: 'mc', lang: 'en', prompt: 'Which is correct?', options: ['a car park', 'a cars park', 'a car’s park'], answer: 0, explain: 'First element of a compound: singular.' },
    { id: 'e5', type: 'mc', prompt: '<em>to email</em> and <em>das Lesen</em> are examples of:', options: ['conversion', 'compounding', 'back-formation'], answer: 0, explain: 'Change of word class without an affix (German adds only the article).' },
    { id: 'e6', type: 'mc', prompt: '<em>to edit</em> (from <em>editor</em>) is an example of:', options: ['back-formation', 'clipping', 'conversion'], answer: 0, explain: 'A shorter word formed by removing an apparent suffix.' },
    { id: 'e7', type: 'mc', lang: 'en', prompt: 'Most readable English for <span lang="de">Ergebnisse der Kundenzufriedenheitsumfrage</span>:', options: ['the results of the customer satisfaction survey', 'the customer satisfaction survey results evaluation', 'the customer-satisfaction-survey-results'], answer: 0, explain: 'Use <em>of</em> rather than stacking nouns.' },
    { id: 'e8', type: 'mc', lang: 'de', prompt: 'In a standard German (not Austrian) text:', options: ['Schweinebraten', 'Schweinsbraten'], answer: 0, keepOrder: true, explain: '<em>Schweinsbraten</em> is southern and Austrian; both are correct in their region.' }
  ]
});
