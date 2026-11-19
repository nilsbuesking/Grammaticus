/*
 * Unit 1, lecture 6: the genitive and its rivals. Content file only. German section in German.
 */
Grammaticus.addLecture({
  id: '1.6', unit: 1, number: 6,
  title: 'The genitive and its rivals',
  subtitle: 'wegen des Wetters or wegen dem Wetter; the company’s results or the results of the company; Eva’s Blumenladen',
  minutes: 30,

  intro: `
    <p>The genitive is the case whose death has been announced most often. In German it is said to be giving way to the dative (<em>wegen dem Wetter</em>, <em>dem Peter sein Auto</em>); in English the <em>’s</em> possessive was nearly replaced by <em>of</em> in the Middle Ages and has been gaining ground ever since. This lecture sets out the forms, the competitors, what the norm actually says, and the apostrophe rules in both languages, including the German change of 2024.</p>`,

  concept: [
    { title: 'What the genitive expresses',
      html: `
        <p>The genitive links one noun to another: possession (<em>Annas Auto</em>), part and whole (<em>die Hälfte des Gewinns</em>), origin, authorship, and the relation between an action and its doer or object:</p>
        <div class="ex"><p lang="de">die Kritik des Vorstands <span class="gl">subjective: the board criticises</span></p><p lang="de">die Kritik des Vorstands <span class="gl">objective: the board is criticised</span></p></div>
        <p>The same ambiguity exists in English (<em>the board’s criticism</em>, <em>the criticism of the board</em>) and in Latin (<em>amor patris</em>: the father’s love, or love for the father).</p>` }
  ],

  german: [
    { title: 'Formen',
      html: `
        <ul>
          <li>Maskulina und Neutra (stark): <em>-s</em> oder <em>-es</em>: <em>des Kontos, des Vertrags/Vertrages, des Tages</em>. <em>-es</em> ist bei einsilbigen Wörtern häufiger und klingt gehobener; nach <em>s, ß, x, z</em> ist es Pflicht: <em>des Hauses, des Platzes</em>.</li>
          <li>Feminina: keine Endung: <em>der Bank, der Firma</em>.</li>
          <li>Eigennamen: <em>-s</em> ohne Apostroph: <em>Annas Auto, Goethes Werke, Deutschlands Wirtschaft</em>. Bei Namen auf <em>s</em>-Laut ein Apostroph: <em>Klaus’ Auto, Marx’ Schriften</em> (oder <em>das Auto von Klaus</em>).</li>
        </ul>` },
    { title: 'Der Apostroph seit 2024',
      html: `
        <p>Das Amtliche Regelwerk von 2024 erlaubt den Apostroph vor dem Genitiv-<em>s</em> eines Namens, wenn die ganze Fügung ein Name ist, etwa bei Geschäften:</p>
        <div class="ex"><p lang="de">Eva’s Blumenladen <span class="gl">ebenso korrekt wie Evas Blumenladen</span></p><p lang="de" class="bad">Eva’s Mutter <span class="gl">gewöhnlicher Genitiv: Evas Mutter</span></p></div>
        <p>Der viel geschmähte „Deppenapostroph“ ist damit für Firmen- und Ladennamen erlaubt, in gewöhnlichen Genitiven weiterhin falsch.</p>
        <p class="src">Amtliches Regelwerk 2024, Teil E (Zeichensetzung), Apostroph; Duden-Übersicht der Änderungen 2024.</p>` },
    { title: 'Die Konkurrenten',
      html: `
        <ul>
          <li><strong><em>von</em> + Dativ</strong>: standardsprachlich, wo kein Artikel den Genitiv zeigen kann (<em>der Bau von Häusern, ein Freund von Peter</em>) und neben Eigennamen; im Gespräch auch sonst: <em>das Auto von meinem Vater</em>.</li>
          <li><strong>Possessiver Dativ</strong>: <span class="odd">dem Peter sein Auto</span>. Regional und umgangssprachlich verbreitet, im geschriebenen Standard nicht korrekt. Bastian Sicks Buchtitel <em>Der Dativ ist dem Genitiv sein Tod</em> (2004) spielt damit.</li>
          <li><strong>Komposita</strong>: <em>der Vorstandsbeschluss</em> statt <em>der Beschluss des Vorstands</em>.</li>
        </ul>` },
    { title: 'Präpositionen mit Genitiv',
      html: `
        <p>Die meisten genitivischen Präpositionen sind formell: <em>angesichts, aufgrund, außerhalb, innerhalb, statt, trotz, während, wegen, mittels, bezüglich, hinsichtlich, zugunsten</em>.</p>
        <ul>
          <li><strong>wegen</strong>: Standard mit Genitiv (<em>wegen des Wetters</em>); mit Dativ umgangssprachlich (<em>wegen dem Wetter</em>), standardsprachlich aber dort, wo der Genitiv im Plural nicht erkennbar ist (<em>wegen Geschäften verreist</em>). Für Pronomen gilt <em>meinetwegen, seinetwegen</em>; <em>wegen mir</em> ist umgangssprachlich.</li>
          <li><strong>trotz</strong>: Standard mit Genitiv (<em>trotz des Regens</em>); mit Dativ besonders süddeutsch, österreichisch und schweizerisch (<em>trotz dem Regen</em>), allgemein häufiger mit Dativ ohne Artikel (<em>trotz heftigem Regen</em>) und fest in <em>trotz allem, trotzdem</em>.</li>
          <li><strong>während, dank, statt</strong>: heute überwiegend mit Genitiv, im Plural ohne erkennbaren Genitiv mit Dativ.</li>
        </ul>
        <p class="src">Duden online, Artikel „wegen“ und „trotz“.</p>` }
  ],

  english: [
    { title: '’s or of',
      html: `
        <p>English has two constructions: the <strong>s-genitive</strong> (<em>the company’s results</em>) and the <strong>of-genitive</strong> (<em>the results of the company</em>). The choice is governed by tendencies rather than rules:</p>
        <ul>
          <li><strong>Animacy</strong>: people and animals favour <em>’s</em> (<em>the director’s decision</em>); things favour <em>of</em> (<em>the roof of the building</em>); organisations, places and times are in between (<em>the bank’s strategy, London’s population, last year’s figures</em>).</li>
          <li><strong>Length</strong>: long possessors favour <em>of</em>: <em>the decision of the committee appointed last year</em>.</li>
          <li><strong>Topic</strong>: what the text is about tends to take <em>’s</em>.</li>
        </ul>
        <p>Experimental and corpus studies find animacy the strongest factor.</p>` },
    { title: 'The apostrophe',
      html: `
        <div class="ex"><p lang="en">the client’s file (one client) · the clients’ files (several) · the children’s room · the people’s choice</p><p lang="en">James’s / James’ car <span class="gl">both accepted; ’s is the usual British style for names</span></p><p lang="en">its (possessive) · it’s (= it is / it has)</p></div>
        <p><strong>Group genitive</strong>: the <em>’s</em> attaches to the end of the whole phrase: <em>the Bank of England’s decision, the head of department’s office</em>.</p>
        <p><strong>Double genitive</strong>: <em>a friend of mine, a colleague of John’s</em>: <em>of</em> + possessive.</p>` },
    { title: 'Noun + noun',
      html: `
        <p>English often uses a noun as modifier where German forms a compound and where a genitive would also be possible: <em>the board decision, company policy, the interest rate</em>. With people the genitive is usual: <em>the director’s office</em>, not <span class="odd">the director office</span>.</p>` }
  ],

  contrast: `
    <ul>
      <li><strong>Names</strong>: German <em>Annas Auto</em> (no apostrophe); English <em>Anna’s car</em> (apostrophe required). This is the source of the “Deppenapostroph” in German, now allowed only in names of shops and firms.</li>
      <li><strong>Things</strong>: German genitive is fine with things (<em>das Dach des Hauses</em>); English prefers <em>of</em> (<em>the roof of the house</em>), or noun + noun (<em>the house roof</em>, less usual).</li>
      <li><strong>Time</strong>: <em>die Zahlen des letzten Jahres = last year’s figures</em>; <em>eine Woche Urlaub = a week’s holiday</em>.</li>
      <li><strong>Prepositions with genitive</strong> have no English equivalent: <em>wegen = because of, trotz = despite / in spite of</em>.</li>
    </ul>`,

  usage: `
    <ul>
      <li><strong>Is the German genitive dying?</strong> In speech, the genitive after prepositions and as object of verbs is retreating, and the possessive dative is widespread regionally. In writing, the attributive genitive (<em>der Beschluss des Vorstands</em>) remains stable, and for some prepositions the trend runs the other way: <em>trotz, dank</em> and others, historically used with the dative, are now mainly used with the genitive. “The dative is killing the genitive” is too simple.</li>
      <li><strong>The English s-genitive</strong> declined sharply in Middle English, when the <em>of</em>-construction spread; it recovered from early modern times. Its frequency fell again in early nineteenth-century news writing and then rose, and it has been increasing in the twentieth century, especially in journalism. Researchers attribute the recent rise less to inanimate possessors than to a growing tendency to use <em>’s</em> with the topic of the text.</li>
      <li><strong>The apostrophe for names in German</strong>: allowed in names of businesses since 2024; in ordinary text still wrong.</li>
    </ul>
    <p class="src">Hinrichs and Szmrecsanyi (2007); Szmrecsanyi (2013); Rosenbach (2002, 2013).</p>`,

  pitfalls: `
    <ul>
      <li><span class="bad">Peter’s Auto</span> in ordinary German text → <em>Peters Auto</em>.</li>
      <li><span class="bad">the company’s it’s results</span> / <span class="bad">it’s results</span> → <em>its results</em>.</li>
      <li><span class="bad">the clients file</span> → <em>the client’s file / the clients’ files</em>.</li>
      <li><span class="odd">wegen dem schlechten Wetter</span> in formal writing → <em>wegen des schlechten Wetters</em>.</li>
      <li><span class="odd">dem Kunden sein Auftrag</span> → <em>der Auftrag des Kunden</em>.</li>
    </ul>`,

  latin: `
    <p>The Latin genitive covers possession (<em>domus patris</em> “the father’s house”), the partitive (<em>pars militum</em> “part of the soldiers”, whence <em>die Hälfte des Gewinns</em>), and the subjective and objective genitive, whose ambiguity (<em>amor patris</em>) Latin grammars made famous.</p>
    <p class="latin">The German genitive-object verbs (<em>gedenken, bedürfen</em>) and genitive prepositions (<em>mittels, kraft</em>) owe some of their survival to Latin-trained chancery and legal language.</p>`,

  summary: [
    'German genitive: -s/-es for masculine and neuter, none for feminine; names take -s without apostrophe (Annas Auto).',
    'Since 2024 the apostrophe is allowed in names of shops and firms (Eva’s Blumenladen), not in ordinary genitives.',
    'wegen + Genitiv is standard; wegen + Dativ colloquial, standard only where the genitive plural is invisible. trotz + Dativ is southern German, Austrian and Swiss.',
    'Possessive dative (dem Peter sein Auto) is regional and non-standard in writing; von + Dativ is standard where no article shows the genitive.',
    'English ’s vs of: animacy is the main factor; ’s for people, of for things, organisations and times in between.',
    'The English s-genitive has been increasing since the early 20th century, mainly through use with the topic of the text.'
  ],

  cards: [
    { id: 'apostroph', title: 'Apostrophe with names: German vs English', tags: ['Apostroph', 'apostrophe', 'Genitiv'], html: `
      <p><strong>German</strong>: Annas Auto (no apostrophe) · Klaus’ Auto (name ends in s-sound) · Eva’s Blumenladen allowed since 2024 (name of a business).<br><strong>English</strong>: Anna’s car · James’s / James’ car · the clients’ files · its (possessive) / it’s (it is).</p>` },
    { id: 'wegen-trotz', title: 'wegen and trotz: which case?', tags: ['wegen', 'trotz', 'Genitiv', 'Dativ'], html: `
      <p><strong>wegen</strong> + Gen. (standard); + Dat. colloquial, standard if the genitive plural is invisible (wegen Geschäften); pronouns: meinetwegen.<br><strong>trotz</strong> + Gen. (standard); + Dat. southern German/AT/CH, without article (trotz heftigem Regen), trotz allem.</p>` },
    { id: 's-of', title: '’s or of', tags: ['genitive', 'possessive', 'of'], html: `
      <p>People and animals: ’s · things: of · organisations, places, times: either (the bank’s strategy, last year’s figures) · long possessor: of · group genitive: the Bank of England’s decision.</p>` }
  ],

  terms: [
    { en: 'genitive', de: 'Genitiv, Wesfall', la: 'genetivus' },
    { en: 's-genitive (Saxon genitive)', de: 'sächsischer Genitiv', la: '' },
    { en: 'of-genitive', de: '(von-Umschreibung)', la: '' },
    { en: 'possessive dative', de: 'possessiver Dativ', la: '' },
    { en: 'subjective / objective genitive', de: 'Genitivus subiectivus / obiectivus', la: 'genitivus subiectivus / obiectivus' },
    { en: 'partitive genitive', de: 'partitiver Genitiv', la: 'genitivus partitivus' },
    { en: 'group genitive', de: '(Gruppengenitiv)', la: '' },
    { en: 'apostrophe', de: 'Apostroph', la: 'from Greek apostrophos' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', lang: 'de', prompt: 'Formal German:', options: ['wegen des schlechten Wetters', 'wegen dem schlechten Wetter'], answer: 0, keepOrder: true, explain: 'Standard: genitive. The dative is colloquial.' },
    { id: 'e2', type: 'mc', lang: 'de', prompt: 'Since 2024, which is correct in an ordinary sentence?', options: ['Ich habe Evas Mutter getroffen.', 'Ich habe Eva’s Mutter getroffen.'], answer: 0, keepOrder: true, explain: 'The apostrophe is allowed only where the whole phrase is a name (Eva’s Blumenladen).' },
    { id: 'e3', type: 'mc', prompt: 'Which is correct?', options: ['The company published its results.', 'The company published it’s results.', 'The company published its’ results.'], answer: 0, keepOrder: true, explain: '<em>its</em> is the possessive; <em>it’s</em> = it is.' },
    { id: 'e4', type: 'gap', prompt: 'Several clients: <span lang="en">We reviewed the ___ files.</span> (client)', answers: ['clients’', "clients'"], cs: true, explain: 'Plural possessive: apostrophe after the <em>s</em>.' },
    { id: 'e5', type: 'mc', prompt: 'Most natural English for <span lang="de">das Dach des Gebäudes</span>:', options: ['the roof of the building', 'the building’s roof'], answer: 0, keepOrder: true, explain: 'With things, <em>of</em> is preferred; the <em>’s</em> form is possible but less usual.' },
    { id: 'e6', type: 'mc', lang: 'de', prompt: '<span lang="de">trotz dem Regen</span> is …', options: ['standard especially in southern Germany, Austria and Switzerland; elsewhere the genitive is preferred', 'wrong everywhere', 'the only correct form'], answer: 0, explain: 'The Duden records trotz + dative as particularly southern, Austrian and Swiss.' },
    { id: 'e7', type: 'mc', prompt: 'Translate <span lang="de">die Entscheidung der Bank von England</span>', options: ['the Bank of England’s decision', 'the Bank’s of England decision', 'the Bank of England decision’s'], answer: 0, keepOrder: true, explain: 'Group genitive: <em>’s</em> at the end of the whole name.' }
  ]
});
