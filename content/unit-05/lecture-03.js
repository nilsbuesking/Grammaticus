/*
 * Unit 5, lecture 3: the German comma II (infinitive groups, participle groups, additions). German section in German.
 */
Grammaticus.addLecture({
  id: '5.3', unit: 5, number: 3,
  title: 'The German comma II: infinitives, additions, optional commas',
  subtitle: 'Infinitivgruppen nach 2024, Partizipgruppen, Zusätze und Nachträge, Anrede und Ausruf',
  minutes: 30,

  intro: `
    <p>This is where the 2024 revision changed most. Between 1996 and 2024 the comma before most infinitive groups was optional, and a generation of writers learnt to leave it out. The 2024 rules make it obligatory again, with exceptions that are easy to state once the grammar is clear. The second half of the lecture covers additions (<em>Zusätze</em>): appositions, afterthoughts, forms of address and interjections.</p>`,

  concept: `
    <p>An <strong>infinitive group</strong> (<em>Infinitivgruppe</em>) is a non-finite clause built on <em>zu</em> + infinitive: <em>den Bericht zu lesen</em>. German grammar treats it as a reduced subordinate clause (<em>infiniter Nebensatz</em>), and the 2024 rules punctuate it like one. A <strong>participle group</strong> (<em>Partizipgruppe</em>) is built on a participle: <em>vom Blitz getroffen</em>. An <strong>addition</strong> (<em>Zusatz</em>) is anything inserted into or appended to a clause without being one of its necessary parts: <em>Frau Weber, unsere Leiterin, …</em>.</p>
    <p>English punctuates none of these by grammar alone: infinitives never take a comma (<em>He promised to call</em>), and additions take commas because they are parenthetical, the same reason as in German.</p>`,

  german: [
    { title: 'Infinitivgruppen: die Regel seit 2024',
      html: `
        <p class="rule">Infinitivgruppen werden mit Komma abgegrenzt, eingeschoben auf beiden Seiten. Auf einen einleitenden Ausdruck (<em>um, ohne, statt</em>) oder ein Verweiswort kommt es nicht mehr an.</p>
        <div class="ex"><p lang="de">Sie waren froh<u class="k">,</u> im Haus bleiben zu können.</p><p lang="de">Er riet ihr<u class="k">,</u> Kontakt mit den Nachbarn zu halten.</p><p lang="de">Das Kind so fröhlich zu sehen<u class="k">,</u> ist erfreulich.</p><p lang="de">Er hat<u class="k">, um</u> Zeit zu sparen<u class="k">,</u> ein Taxi genommen.</p></div>
        <p class="src">Amtliches Regelwerk 2024, § 73 mit E2 und E4; österreichisches Bildungsministerium, Handreichung zum Regelwerk 2024.</p>` },
    { title: 'Ausnahmen',
      html: `
        <p><strong>1. Bloßer zu-Infinitiv</strong> (ohne Ergänzungen): Das Komma ist freigestellt, denn er kann als Nebensatz oder als bloße Wortgruppe gelten.</p>
        <div class="ex"><p lang="de">Sie hatte entschieden<u class="k">(,)</u> umzuziehen.</p><p lang="de">Den Plan<u class="k">(,)</u> zu verreisen<u class="k">(,)</u> fasste er erst kürzlich.</p></div>
        <p><strong>2. Mehrteiliges Prädikat</strong>: Bildet der zu-Infinitiv mit einem anderen Verb eine Einheit, steht kein Komma. Das gilt immer bei <em>sein, haben, scheinen, pflegen, brauchen</em> und bei ununterbrochenen Verbgruppen.</p>
        <div class="ex"><p lang="de">Der Antrag ist bis Freitag einzureichen.</p><p lang="de">Er scheint die Lage zu unterschätzen.</p><p lang="de">Die Anwältin hat den Klienten mehrmals zu erreichen versucht.</p></div>
        <p>Bei Verben wie <em>versuchen, beabsichtigen, beginnen, wagen</em> entscheidet die Wortstellung: Ist die Verbgruppe unterbrochen, kann man das Komma setzen oder weglassen.</p>
        <div class="ex"><p lang="de">Die Anwältin hat mehrmals versucht<u class="k">(,)</u> den Klienten zu erreichen.</p></div>
        <p><strong>3. Komma zur Unterscheidung</strong>: Hängt die Bedeutung von der Abgrenzung ab, muss das Komma stehen.</p>
        <div class="ex"><p lang="de">Der Lehrer beschloss noch einmal<u class="k">,</u> das letzte Kapitel zu wiederholen. <span class="tnote">(er beschloss es ein zweites Mal)</span></p><p lang="de">Der Lehrer beschloss<u class="k">,</u> noch einmal das letzte Kapitel zu wiederholen. <span class="tnote">(das Kapitel wird ein zweites Mal wiederholt)</span></p></div>
        <p class="src">Amtliches Regelwerk 2024, § 73 E2, E4; Abschnitt 2.5.5.</p>` },
    { title: 'Partizipgruppen',
      html: `
        <p>Erweiterte Partizipien können satzähnlich sein und werden dann wie Zusätze behandelt. Am Satzanfang ist das Komma freigestellt; eingeschoben oder nachgestellt wird die Gruppe in der Regel durch Kommas abgegrenzt.</p>
        <div class="ex"><p lang="de">Vom Blitz getroffen<u class="k">(,)</u> fiel er zu Boden.</p><p lang="de">Er fiel<u class="k">,</u> vom Blitz getroffen<u class="k">,</u> zu Boden.</p><p lang="de">Wir kamen spät an<u class="k">,</u> völlig erschöpft von der Reise.</p></div>
        <p>Feste Wendungen wie <em>genau genommen, offen gesagt</em> stehen meist ohne Komma: <em>Genau genommen hat er recht.</em></p>
        <p class="src">Amtliches Regelwerk 2024, § 72 E3.</p>` },
    { title: 'Zusätze und Nachträge',
      html: `
        <p class="rule">Ist ein Zusatz eingeschoben, steht links und rechts ein Komma.</p>
        <p><strong>Apposition</strong>:</p>
        <div class="ex"><p lang="de">Frau Weber<u class="k">,</u> unsere Leiterin<u class="k">,</u> eröffnet die Sitzung.</p><p lang="de">Mein Bruder Paul wohnt in Leeds. <span class="tnote">Enge Apposition: kein Komma.</span></p></div>
        <p><strong>Nachträge</strong>, oft mit <em>und zwar, nämlich, das heißt, zum Beispiel, insbesondere, vor allem</em>:</p>
        <div class="ex"><p lang="de">Er kommt morgen<u class="k">, und zwar</u> um zehn.</p><p lang="de">Wir erstatten Ausgaben<u class="k">, zum Beispiel</u> Fahrtkosten<u class="k">,</u> gegen Beleg.</p></div>
        <p><strong>Datum, Wohnort, Seitenangaben</strong> als Zusätze:</p>
        <div class="ex"><p lang="de">Die Tagung beginnt am Mittwoch<u class="k">,</u> dem 14. November.</p><p lang="de">Am Freitag<u class="k">,</u> den 25. September<u class="k">,</u> feiern sie ihre Silberhochzeit.</p></div>
        <p>Bei mehrteiligen Datumsangaben ist das schließende Komma seit 2024 <strong>Pflicht</strong>. Freigestellt ist es dagegen bei nachgestellten Erläuterungen, die man als verkürztes Satzglied verstehen kann:</p>
        <div class="ex"><p lang="de">Viele Firmen, insbesondere finnische<u class="k">(,)</u> waren vertreten.</p></div>
        <p class="src">Amtliches Regelwerk 2024, § 72 E1, E4, E5; Rat für deutsche Rechtschreibung, Überblick über die Änderungen 2024.</p>` },
    { title: 'Anrede, Ausruf, Stellungnahme',
      html: `
        <p>Anreden, Ausrufe und Antwortpartikeln werden durch Komma abgetrennt:</p>
        <div class="ex"><p lang="de">Herr Meyer<u class="k">,</u> hören Sie doch mal zu.</p><p lang="de">Ach<u class="k">,</u> das ist schade.</p><p lang="de">Ja<u class="k">,</u> ich komme.</p><p lang="de">Kommst du mit<u class="k">,</u> Anna?</p></div>
        <p>In Briefen folgt die Grußformel Konventionen: <em>Sehr geehrte Frau Weber,</em> mit Komma, danach klein weiter. Die Zeichensetzung bei Anrede und Gruß ist laut Regelwerk konventionell und regional verschieden (in der Schweiz ist die Anrede ohne Satzzeichen verbreitet).</p>
        <p class="src">Amtliches Regelwerk 2024, § 72 E1 mit Hinweis.</p>` }
  ],

  english: [
    { title: 'Infinitives and participles',
      html: `
        <p>English never sets off a <em>to</em>-infinitive by a comma because it is an infinitive: <em>He promised to call. I’d like you to check this.</em> A comma appears only when the infinitive is parenthetical or fronted: <em>To be fair, he did warn us.</em></p>
        <p>Participle clauses are set off when they are supplementive (non-restrictive), as in German: <em>Exhausted by the journey, we went to bed. We arrived late, exhausted by the journey.</em> Restrictive participle phrases take no comma: <em>The man sitting by the door is my brother.</em></p>` },
    { title: 'Additions, address, interjections',
      html: `
        <p>Non-restrictive appositives, afterthoughts, vocatives and interjections take commas as in German: <em>Ms Weber, our director, will open the meeting. Yes, I’ll come. Are you coming, Anna?</em></p>
        <p>A close appositive takes none: <em>my brother Paul</em>. The classic textbook claim that <em>my brother, Paul,</em> implies a single brother is a logical rule which usage does not consistently follow.</p>
        <p>Letters: <em>Dear Ms Weber,</em> (comma; American business letters use a colon), then a capital letter: <em>Thank you for …</em>. German continues in lower case.</p>
        <p class="src">Huddleston &amp; Pullum 2002, ch. 20 (punctuation); New Hart’s Rules, ch. 4.</p>` }
  ],

  contrast: `
    <div class="tablewrap"><table>
      <thead><tr><th>German</th><th>English</th></tr></thead>
      <tbody>
        <tr><td>Er versprach, pünktlich zu sein.</td><td>He promised to be on time.</td></tr>
        <tr><td>Ich bitte Sie, das zu prüfen.</td><td>Please check this.</td></tr>
        <tr><td>Er kam, um zu helfen.</td><td>He came to help.</td></tr>
        <tr><td>Sehr geehrte Frau Weber,<br>vielen Dank …</td><td>Dear Ms Weber,<br>Thank you …</td></tr>
        <tr><td>Er kommt morgen, und zwar um zehn.</td><td>He is coming tomorrow, at ten in fact.</td></tr>
      </tbody></table></div>
    <p class="contrast">The single most frequent German import into English is the comma before a <em>to</em>-infinitive: <em class="odd">He promised, to call.</em> It is never correct.</p>`,

  usage: [
    { title: 'Three rule sets in thirty years',
      html: `
        <dl class="timeline">
          <dt>until 1996</dt><dd>Duden rules: extended infinitive groups (more than <em>zu</em> + infinitive) are set off; bare infinitives are not.</dd>
          <dt>1996–2024</dt><dd>Comma optional in most cases; obligatory after 2006 only if the group is introduced by <em>um, ohne, statt, anstatt, außer, als</em>, depends on a noun, or is announced by a pointer word (<em>es, daran, darauf</em>).</dd>
          <dt>since 2024</dt><dd>Comma obligatory for infinitive groups as a rule; optional for the bare infinitive; none in multi-part predicates.</dd>
        </dl>
        <p>Practical consequence: texts written between 1996 and 2024, including many official ones, often omit commas that are now required. Readers should not take them as models. The Austrian ministry describes the 2024 change as a return to the pre-1996 practice; this is broadly but not exactly true, since the old rules did not set off bare infinitives either.</p>` },
    { title: 'What writers actually do',
      html: `
        <p>Edited prose (newspapers, publishers) generally kept the comma before infinitive groups throughout the optional period, because house styles and the Duden recommended it. The 2024 rule therefore matches edited usage better than the 1996 rule did. Everyday writing is more variable.</p>` }
  ],

  pitfalls: `
    <ul>
      <li>Do not split the verb group: <em class="bad">Er scheint, die Lage zu unterschätzen.</em></li>
      <li><em>und zwar, nämlich, das heißt</em>: comma before, not after: <em>, und zwar um zehn</em>.</li>
      <li>Embedded additions need the closing comma: <em class="odd">Frau Weber, unsere Leiterin eröffnet die Sitzung.</em></li>
      <li>English letters: capital after <em>Dear Ms Weber,</em>; German: lower case after <em>Sehr geehrte Frau Weber,</em>.</li>
    </ul>`,

  summary: [
    'Since 2024: infinitive groups are set off by commas as a rule (Sie waren froh, im Haus bleiben zu können).',
    'Bare zu-infinitive: comma optional (Sie hatte entschieden(,) umzuziehen).',
    'Multi-part predicates (scheinen, sein, haben + zu; uninterrupted verb groups): no comma.',
    'Where meaning depends on it, the comma is obligatory.',
    'Participle groups: optional at the start, usually set off in the middle or at the end.',
    'Additions (apposition, afterthought, dates, address, interjection): commas on both sides.',
    'English: never a comma before a to-infinitive for grammatical reasons; additions as in German.'
  ],

  cards: [
    { id: 'de-komma-infinitiv', title: 'Komma bei Infinitivgruppen (2024)', tags: ['Komma', 'Infinitiv', 'zu'], html: `
      <p><strong>Grundsatz</strong>: Komma (<em>froh, bleiben zu können</em>).<br><strong>Freigestellt</strong>: bloßer zu-Infinitiv (<em>entschieden(,) umzuziehen</em>); unterbrochene Verbgruppe.<br><strong>Kein Komma</strong>: mehrteiliges Prädikat (<em>scheint zu unterschätzen; ist einzureichen; zu erreichen versucht</em>).</p>` },
    { id: 'de-komma-zusatz', title: 'Komma bei Zusätzen', tags: ['Komma', 'Zusatz', 'Apposition', 'Anrede'], html: `
      <p>Beidseitig: Apposition, Nachtrag (<em>, und zwar …</em>), Datum (<em>am Freitag, dem 25. September,</em> – schließendes Komma seit 2024 Pflicht), Anrede, Ausruf (<em>Ach, …</em>). Enge Apposition ohne: <em>mein Bruder Paul</em>.</p>` }
  ],

  terms: [
    { en: 'infinitive group', de: 'Infinitivgruppe, infiniter Nebensatz', la: 'infinitivus' },
    { en: 'bare to-infinitive (unextended)', de: 'bloßer (nicht erweiterter) zu-Infinitiv', la: '' },
    { en: 'multi-part predicate', de: 'mehrteiliges Prädikat', la: '' },
    { en: 'participle group', de: 'Partizipgruppe', la: 'participium' },
    { en: 'addition, parenthetical', de: 'Zusatz, Nachtrag', la: '' },
    { en: 'apposition (close / loose)', de: 'Apposition (eng / locker)', la: 'appositio' },
    { en: 'pointer word, correlate', de: 'Verweiswort, Korrelat', la: 'correlativum' },
    { en: 'vocative, form of address', de: 'Anrede', la: 'vocativus' }
  ],

  exercises: [
    { id: 'e1', type: 'comma', lang: 'de', prompt: 'Set the required commas (rules of 2024).', words: ['Sie', 'waren', 'froh', 'im', 'Haus', 'bleiben', 'zu', 'können.'], commas: [2], explain: 'Infinitive group: comma obligatory since 2024.' },
    { id: 'e2', type: 'comma', lang: 'de', prompt: 'Required and optional commas.', words: ['Sie', 'hatte', 'entschieden', 'umzuziehen.'], commas: [], optional: [2], explain: 'Bare <em>zu</em>-infinitive: comma optional.' },
    { id: 'e3', type: 'comma', lang: 'de', prompt: 'Set the required commas (if any).', words: ['Er', 'scheint', 'die', 'Lage', 'zu', 'unterschätzen.'], commas: [], explain: '<em>scheinen</em> + infinitive is a multi-part predicate: no comma.' },
    { id: 'e4', type: 'comma', lang: 'de', prompt: 'Set the required commas.', words: ['Er', 'hat', 'um', 'Zeit', 'zu', 'sparen', 'ein', 'Taxi', 'genommen.'], commas: [1, 5], explain: 'Embedded infinitive group: commas on both sides.' },
    { id: 'e5', type: 'comma', lang: 'de', prompt: 'Set the required commas.', words: ['Frau', 'Weber', 'unsere', 'Leiterin', 'eröffnet', 'die', 'Sitzung.'], commas: [1, 3], explain: 'Loose apposition: commas on both sides.' },
    { id: 'e6', type: 'comma', lang: 'de', prompt: 'Set the required commas.', words: ['Er', 'kommt', 'morgen', 'und', 'zwar', 'um', 'zehn.'], commas: [2], explain: 'Comma before <em>und zwar</em>.' },
    { id: 'e7', type: 'comma', lang: 'en', prompt: 'Set the required commas (if any).', words: ['He', 'promised', 'to', 'call', 'back', 'today.'], commas: [], explain: 'No comma before a <em>to</em>-infinitive.' },
    { id: 'e8', type: 'mc', lang: 'de', prompt: '<span lang="de">Der Lehrer beschloss noch einmal, das letzte Kapitel zu wiederholen.</span> What does this mean?', options: ['He made the decision a second time', 'The chapter is repeated a second time'], answer: 0, keepOrder: true, explain: '<em>noch einmal</em> belongs to <em>beschloss</em>, because the comma follows it.' },
    { id: 'e9', type: 'mc', prompt: 'Which letter opening is correct in each language?', options: ['DE: Sehr geehrte Frau Weber, vielen Dank … / EN: Dear Ms Weber, Thank you …', 'DE: Sehr geehrte Frau Weber, Vielen Dank … / EN: Dear Ms Weber, thank you …'], answer: 0, keepOrder: true, explain: 'German continues in lower case; English starts the body with a capital.' }
  ]
});
