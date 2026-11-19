/*
 * Unit 7, lecture 2: Latin roots in German and English. German section in German.
 */
Grammaticus.addLecture({
  id: '7.2', unit: 7, number: 2,
  title: 'Latin roots in German and English',
  subtitle: 'Layers of borrowing, calques, word families, assimilated prefixes and false friends',
  minutes: 30,

  intro: `
    <p>Latin reached German and English by different routes and in different quantities. English borrowed Latin words wholesale, often through French, and kept them as they were; German borrowed too, but also translated Latin words part by part into German ones, and from the seventeenth century onwards purists replaced many borrowings. The result is that a German speaker knows the Latin vocabulary of English by sight, but meets it in German as a set of more formal, sometimes differently used “Fremdwörter” – the source of many false friends.</p>`,

  concept: `
    <ul>
      <li><strong>Loanword</strong> (<em>Lehnwort</em>): a borrowed word fully adapted to the borrowing language, often no longer felt as foreign: <em>Fenster</em> (Latin <em>fenestra</em>), <em>wall</em> (<em>vallum</em>).</li>
      <li><strong>Foreign word</strong> (<em>Fremdwort</em>): a borrowed word that still looks or sounds foreign: <em>Konzept, Fakultät</em>. The distinction is a German tradition; English grammar rarely makes it.</li>
      <li><strong>Calque</strong> (<em>Lehnübersetzung</em>): a word translated part by part: <em>Mitleid</em> from <em>com-passio</em>, <em>Halbinsel</em> from <em>paen-insula</em>.</li>
      <li><strong>Doublet</strong>: two words from the same Latin source, borrowed at different times or by different routes: English <em>frail</em> (via Old French) and <em>fragile</em> (directly from Latin <em>fragilis</em>).</li>
    </ul>`,

  german: [
    { title: 'Drei Schichten',
      html: `
        <dl class="timeline">
          <dt>Antike</dt><dd>Römerzeit: Wörter aus Handel, Bauwesen, Wein- und Gartenbau, die so früh übernommen wurden, dass sie die germanischen Lautwandel mitmachten: <em>Mauer</em> (murus), <em>Ziegel</em> (tegula), <em>Fenster</em> (fenestra), <em>Keller</em> (cellarium), <em>Straße</em> (strata), <em>Wein</em> (vinum), <em>Pfund</em> (pondo), <em>Kaiser</em> (Caesar).</dd>
          <dt>Mittelalter</dt><dd>Kirche, Kloster und Schule: <em>Schule</em> (schola), <em>schreiben</em> (scribere), <em>Tafel</em> (tabula), <em>Kloster</em> (claustrum), <em>Mönch</em> (monachus), <em>Messe</em> (missa).</dd>
          <dt>ab 1500</dt><dd>Humanismus bis heute: gelehrte Fremdwörter, die ihre lateinische Form weitgehend behalten: <em>Universität, Fakultät, Konzept, Prozess, Element</em>, die Verben auf <em>-ieren</em> (<em>diskutieren, informieren</em>).</dd>
        </dl>` },
    { title: 'Lehnübersetzungen und Sprachpurismus',
      html: `
        <p>Das Deutsche hat viele lateinische Begriffe nicht übernommen, sondern übersetzt. Das Englische hat in denselben Fällen meist das lateinische Wort entlehnt:</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Deutsch</th><th>Latein · Englisch</th></tr></thead>
          <tbody>
            <tr><td>Gewissen</td><td>conscientia · conscience</td></tr>
            <tr><td>Mitleid</td><td>compassio · compassion</td></tr>
            <tr><td>Wohltat</td><td>beneficium · benefit</td></tr>
            <tr><td>Ausdruck</td><td>expressio · expression</td></tr>
            <tr><td>Gegenstand</td><td>obiectum · object</td></tr>
            <tr><td>Umstand</td><td>circumstantia · circumstance</td></tr>
            <tr><td>Einfluss</td><td>influxus · influence</td></tr>
            <tr><td>Halbinsel</td><td>paeninsula · peninsula</td></tr>
            <tr><td>Sauerstoff, Wasserstoff</td><td>oxygenium, hydrogenium · oxygen, hydrogen<span class="tnote">Lehn<wbr>übersetzungen neu<wbr>lateinischer Fachwörter</span></td></tr>
          </tbody></table></div>
        <p>Im 17. Jahrhundert prägten Sprach<wbr>gesellschaften und Autoren wie Philipp von Zesen bewusst deutsche Ersatzwörter (<em>Leidenschaft, Verfasser, Anschrift</em> werden ihm zugeschrieben), um 1800 Joachim Heinrich Campe (<em>Stelldichein</em> für <em>Rendezvous</em>). Viele Vorschläge setzten sich durch, manche nicht (Zesens <em>Gesichtserker</em> für <em>Nase</em> ist wohl eine spätere Parodie, kein echter Vorschlag). Ende des 19. Jahrhunderts ersetzte die Reichspost unter Heinrich von Stephan Hunderte Fachwörter: <em>Briefumschlag</em> statt <em>Couvert</em>, <em>einschreiben</em> statt <em>rekommandieren</em>.</p>` }
  ],

  english: [
    { title: 'Layers of Latin in English',
      html: `
        <ul>
          <li><strong>Early borrowings</strong> (before and during the Anglo-Saxon period): <em>wall, street, wine, cheese, mile, kitchen</em> – the same layer as German <em>Mauer, Straße, Wein, Käse, Meile, Küche</em>.</li>
          <li><strong>Old English church Latin</strong>: <em>school, priest, mass, monk</em>.</li>
          <li><strong>Norman French</strong> (after 1066): a vast layer of Latin-derived vocabulary in law, government, food and fashion: <em>justice, parliament, beef, pork, dress</em>.</li>
          <li><strong>Renaissance learned Latin</strong> (16th–17th centuries): thousands of words taken straight from Latin texts: <em>educate, exterior, fact, genius</em>. Contemporaries attacked many as “inkhorn terms”; some died out (<em>adjuvate, eximious</em>), most survived.</li>
        </ul>
        <p>The often-quoted pairs <em>cow/beef, pig/pork, sheep/mutton</em> (English animal, French meat) are real, but the neat explanation that Saxon peasants tended the animals while Norman lords ate them was popularised by Walter Scott’s <em>Ivanhoe</em> (1819); historians regard it as a simplification.</p>` },
    { title: 'How much of English is Latin?',
      html: `
        <p>A frequently cited count (Finkenstaedt and Wolff, <em>Ordered Profusion</em>, 1973), based on a dictionary of about 80,000 words, found roughly 28 per cent from Latin, 28 per cent from French and 25 per cent Germanic. These figures describe the dictionary, not running text: the hundred most frequent words of English are almost all Germanic (<em>the, of, and, to, be, have</em>). Latin and French words dominate formal, technical and abstract writing; Germanic words dominate speech.</p>` }
  ],

  contrast: [
    { title: 'Word families',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th>Latin root</th><th>German · English</th></tr></thead>
          <tbody>
            <tr><td>scribere, scriptum “write”</td><td>schreiben, Skript, Manuskript · scribe, describe, script, manuscript</td></tr>
            <tr><td>ducere, ductum “lead”</td><td>Produkt, Viadukt, Reduktion · produce, conduct, educate</td></tr>
            <tr><td>mittere, missum “send”</td><td>Mission, Kommission · transmit, mission, commit</td></tr>
            <tr><td>ponere, positum “place”</td><td>Position, komponieren · position, compose, deposit</td></tr>
            <tr><td>capere, captum “take”</td><td>Rezept, Konzept, kapieren · receive, capture, concept</td></tr>
            <tr><td>facere, factum “make”</td><td>Fabrik, Effekt, Faktum · fact, effect, factory, simplify</td></tr>
            <tr><td>videre, visum “see”</td><td>Vision, Revision, Visum · vision, revise, visa</td></tr>
          </tbody></table></div>
        <p class="contrast">A German speaker can often guess an English word from a German Fremdwort, and vice versa. The guess is right more often than wrong; the exceptions are the false friends below.</p>` },
    { title: 'Assimilated prefixes',
      html: `
        <p>Latin prefixes adapt their last consonant to the following sound. Knowing the rule explains double consonants in both languages:</p>
        <div class="ex"><p>in- + legalis → illegal; in- + mobilis → immobil / immobile; in- + regularis → irregulär / irregular</p><p>con- + laborare → kollaborieren / collaborate; con- + rigere → korrigieren / correct</p><p>ad- + tractio → Attraktion / attraction; ad- + similis → Assimilation / assimilation</p></div>
        <p>German usually respells Latin <em>c</em> as <em>k</em> or <em>z</em> (<em>Kollege, Zentrum, Akzent</em>); English keeps <em>c</em> (<em>colleague, centre, accent</em>).</p>` },
    { title: 'False friends from Latin',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th>German</th><th>English equivalent · false friend</th></tr></thead>
          <tbody>
            <tr><td>eventuell</td><td>possibly · <em>eventually</em> = schließlich</td></tr>
            <tr><td>aktuell</td><td>current · <em>actual</em> = tatsächlich</td></tr>
            <tr><td>sensibel</td><td>sensitive · <em>sensible</em> = vernünftig</td></tr>
            <tr><td>seriös</td><td>reputable, trustworthy · <em>serious</em> = ernst</td></tr>
            <tr><td>ordinär</td><td>vulgar · <em>ordinary</em> = gewöhnlich</td></tr>
            <tr><td>Rezept</td><td>recipe, prescription · <em>receipt</em> = Quittung</td></tr>
            <tr><td>Konsequenz</td><td>consequence; also consistency (<em>mit Konsequenz</em>)</td></tr>
            <tr><td>Kompetenz</td><td>competence; also authority, remit (<em>in seiner Kompetenz</em>)</td></tr>
            <tr><td>Chef</td><td>boss · <em>chef</em> = Koch</td></tr>
            <tr><td>Gymnasium</td><td>grammar/secondary school · <em>gymnasium</em> = Sporthalle</td></tr>
          </tbody></table></div>` }
  ],

  usage: `
    <ul>
      <li><strong>Register.</strong> In German, a Fremdwort is often more formal or technical than its native equivalent (<em>Kommunikation / Verständigung, partizipieren / teilnehmen</em>). In English, a Latin word is often more formal than its Germanic equivalent (<em>commence / begin, purchase / buy, inquire / ask</em>). Plain-English guidance in both countries recommends the native word where it means the same (Unit 8).</li>
      <li><strong>Purism today.</strong> Campaigns against Anglicisms in German (for example by the Verein Deutsche Sprache) continue the older purism against Latin and French. The Rat für deutsche Rechtschreibung regulates spelling, not vocabulary, and takes no position on which words to use.</li>
    </ul>`,

  pitfalls: `
    <ul>
      <li><em>eventuell</em> → <em>possibly</em>, never <em>eventually</em>.</li>
      <li><em>aktuell</em> → <em>current, up to date</em>; <em>actually</em> = <em>eigentlich, tatsächlich</em>.</li>
      <li><em>sensibel</em> → <em>sensitive</em>; <em>sensible</em> = <em>vernünftig</em>.</li>
      <li>Spelling: German <em>k/z</em> for Latin <em>c</em> does not carry over into English: <em>Kollege → colleague</em>, <em>Konzept → concept</em>.</li>
    </ul>`,

  latin: `
    <p>For a beginner in Latin, the payoff of this lecture runs in both directions: the principal parts of a verb (<em>scribo, scribere, scripsi, scriptum</em>) supply the two stems from which most English and German derivatives are built – the present stem (<em>scrib-</em>: <em>describe</em>) and the participle stem (<em>script-</em>: <em>script, Skript</em>). Learning a Latin verb with its supine is therefore also learning a family of English words.</p>`,

  summary: [
    'Latin entered German in three layers: Roman-era loans (Mauer, Straße, Wein), church Latin (Schule, schreiben), learned Fremdwörter (Universität, -ieren).',
    'German often translated Latin terms (Gewissen, Mitleid, Gegenstand) where English borrowed them (conscience, compassion, object).',
    'Purists (Zesen, Campe, the Reichspost) coined German replacements; many survived.',
    'English Latin vocabulary came largely via Norman French and Renaissance borrowing; it dominates formal and technical writing, not everyday speech.',
    'Latin prefixes assimilate: illegal, immobile, correct, collaborate.',
    'False friends: eventuell (possibly), aktuell (current), sensibel (sensitive), seriös (reputable), Rezept (recipe, prescription).'
  ],

  cards: [
    { id: 'false-friends-latin', title: 'False friends from Latin', tags: ['false friends', 'eventuell', 'aktuell', 'sensibel'], html: `
      <p>eventuell → possibly · aktuell → current · sensibel → sensitive · seriös → reputable · ordinär → vulgar · Rezept → recipe/prescription · Chef → boss · Gymnasium → grammar school.</p>` },
    { id: 'calques', title: 'Calque vs borrowing', tags: ['Lehnübersetzung', 'calque', 'Latin'], html: `
      <p>DE translates, EN borrows: Gewissen/conscience · Mitleid/compassion · Gegenstand/object · Umstand/circumstance · Einfluss/influence · Halbinsel/peninsula.</p>` }
  ],

  terms: [
    { en: 'loanword', de: 'Lehnwort', la: '' },
    { en: 'foreign word (German category)', de: 'Fremdwort', la: '' },
    { en: 'calque, loan translation', de: 'Lehnübersetzung', la: '' },
    { en: 'doublet', de: 'Dublette', la: '' },
    { en: 'false friend', de: 'falscher Freund', la: '' },
    { en: 'assimilation (of a prefix)', de: 'Assimilation', la: 'assimilatio “making similar”' },
    { en: 'principal parts', de: 'Stammformen', la: 'e.g. scribo, scribere, scripsi, scriptum' },
    { en: 'linguistic purism', de: 'Sprachpurismus', la: 'purus “clean”' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', lang: 'en', prompt: '<span lang="de">Wir könnten eventuell früher anfangen.</span>', options: ['We could possibly start earlier.', 'We could eventually start earlier.'], answer: 0, keepOrder: true, explain: '<em>eventuell</em> = possibly.' },
    { id: 'e2', type: 'mc', lang: 'en', prompt: '<span lang="de">die aktuellen Zahlen</span>', options: ['the current figures', 'the actual figures'], answer: 0, keepOrder: true, explain: '<em>actual</em> = tatsächlich.' },
    { id: 'e3', type: 'match', prompt: 'Match the German calque to its Latin model.', pairs: [['Gewissen', 'conscientia'], ['Mitleid', 'compassio'], ['Gegenstand', 'obiectum'], ['Halbinsel', 'paeninsula']], explain: 'German translated the parts; English borrowed the Latin words.' },
    { id: 'e4', type: 'mc', prompt: 'Which word came into German in Roman times?', options: ['Mauer', 'Universität', 'diskutieren'], answer: 0, explain: '<em>Mauer</em> (murus) went through the Germanic sound changes; the others are later learned borrowings.' },
    { id: 'e5', type: 'mc', prompt: 'Why <em>illegal</em> with double l?', options: ['in- assimilates to l- before legalis', 'it is a Greek spelling', 'to show a short vowel'], answer: 0, explain: 'Latin prefixes assimilate: in- + legalis → illegalis.' },
    { id: 'e6', type: 'mc', lang: 'en', prompt: '<span lang="de">Er ist sehr sensibel.</span>', options: ['He is very sensitive.', 'He is very sensible.'], answer: 0, keepOrder: true, explain: '<em>sensible</em> = vernünftig.' },
    { id: 'e7', type: 'mc', prompt: 'The figures of about 28% Latin, 28% French and 25% Germanic describe:', options: ['the words in a large dictionary', 'the words in typical running text', 'spoken English'], answer: 0, explain: 'In running text the most frequent words are Germanic.' },
    { id: 'e8', type: 'mc', prompt: 'From which Latin stem is <em>script</em> formed?', options: ['the participle stem (scriptum)', 'the present stem (scribere)', 'the perfect stem (scripsi)'], answer: 0, explain: '<em>script-</em> is the supine/participle stem; <em>describe</em> uses the present stem.' }
  ]
});
