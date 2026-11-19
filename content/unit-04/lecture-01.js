/*
 * Unit 4, lecture 1: German word order (topological fields). Content file only. German section in German.
 */
Grammaticus.addLecture({
  id: '4.1', unit: 4, number: 1,
  title: 'German word order: V2, verb-final, the verb bracket',
  subtitle: 'Vorfeld, Mittelfeld, Nachfeld: a model that explains why German order is free but not arbitrary',
  minutes: 35,

  intro: `
    <p>German word order is often called free, and in one sense it is: almost any constituent can open a main clause. But the position of the verb is rigid, and the order inside the clause follows clear tendencies. The <strong>topological field model</strong> captures both in a single picture. This lecture introduces it, sets out the order of elements in the middle field, and looks at the Nachfeld, where spoken German, and increasingly written German, places what does not fit inside the bracket.</p>`,

  concept: [
    { title: 'Fields and brackets',
      html: `
        <p>The model divides a German clause into positions defined by the verb:</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Vorfeld</th><th>linke Klammer · Mittelfeld · rechte Klammer · Nachfeld</th></tr></thead>
          <tbody>
            <tr><td>Gestern</td><td><u class="k">hat</u> · der Vorstand den Bericht · <u class="k">genehmigt</u> · –</td></tr>
            <tr><td>Den Bericht</td><td><u class="k">hat</u> · der Vorstand gestern · <u class="k">genehmigt</u> · –</td></tr>
            <tr><td>–</td><td><u class="k">Hat</u> · der Vorstand den Bericht gestern · <u class="k">genehmigt</u> · ?</td></tr>
            <tr><td>–</td><td><u class="k">dass</u> · der Vorstand den Bericht gestern · <u class="k">genehmigt hat</u> · –</td></tr>
            <tr><td>Ich</td><td><u class="k">habe</u> · mich · <u class="k">gefreut</u> · über die schnelle Antwort</td></tr>
          </tbody></table></div>
        <p>The finite verb (or, in subordinate clauses, the subordinator) forms the left bracket; the rest of the verb (participle, infinitive, separable particle) forms the right bracket. Everything else is arranged in the fields around them. The model goes back to Erich Drach’s <em>Grundgedanken der deutschen Satzlehre</em> (1937), building on nineteenth-century work by Simon Herling and Oskar Erdmann.</p>` }
  ],

  german: [
    { title: 'Das Vorfeld',
      html: `
        <p>Im Aussagesatz steht vor dem finiten Verb <strong>genau ein Satzglied</strong>, gleich welcher Art: Subjekt, Objekt, Adverbiale, Nebensatz, sogar ein Teil des Prädikats.</p>
        <div class="ex"><p lang="de">Der Vorstand hat den Bericht gestern genehmigt.</p><p lang="de">Gestern hat der Vorstand den Bericht genehmigt.</p><p lang="de">Genehmigt hat der Vorstand den Bericht erst gestern.</p><p lang="de">Weil die Zahlen stimmten, hat der Vorstand den Bericht genehmigt.</p><p lang="de" class="bad">Gestern der Vorstand hat den Bericht genehmigt.</p></div>
        <p>Das Vorfeld ist die Position für das, woran der Satz anknüpft (bekannt, Thema) oder was betont werden soll (Kontrast). Lektion 4.7 vertieft das.</p>` },
    { title: 'Die Satzklammer',
      html: `
        <div class="ex"><p lang="de">Wir <u class="k">rufen</u> Sie morgen <u class="k">an</u>. <span class="gl">trennbares Verb</span></p><p lang="de">Sie <u class="k">hat</u> den Vertrag noch nicht <u class="k">unterschrieben</u>. <span class="gl">Perfekt</span></p><p lang="de">Er <u class="k">muss</u> den Bericht bis Freitag <u class="k">abgeben</u>. <span class="gl">Modalverb</span></p><p lang="de">Die Sitzung <u class="k">wird</u> verschoben <u class="k">werden</u>. <span class="gl">Futur Passiv</span></p></div>
        <p>Im Nebensatz rückt das finite Verb ans Ende des Verbalkomplexes: <em>…, weil sie den Vertrag noch nicht unterschrieben hat.</em> Ausnahme: der Ersatzinfinitiv (Lektion 2.9): <em>…, weil sie hat unterschreiben müssen.</em></p>` },
    { title: 'Die Ordnung im Mittelfeld',
      html: `
        <p>Die Reihenfolge im Mittelfeld folgt Tendenzen, keinen festen Regeln:</p>
        <ol>
          <li><strong>Pronomen vor Nomen</strong>, und unter den Pronomen Nominativ – Akkusativ – Dativ: <em>Gestern hat <u class="k">er es ihm</u> gegeben.</em></li>
          <li><strong>Bei Nomen Dativ vor Akkusativ</strong>: <em>Sie hat <u class="k">dem Kunden den Vertrag</u> geschickt.</em> Ist das Akkusativobjekt bekannt (bestimmt), kann es vorangehen: <em>Sie hat den Vertrag dem Kunden geschickt</em> (nicht dem Lieferanten).</li>
          <li><strong>Bekanntes vor Neuem</strong>, Unbetontes vor Betontem.</li>
          <li><strong>Adverbiale</strong> oft in der Folge Zeit – Grund – Art – Ort, in der Schule „TeKaMoLo“ genannt: <em>Ich fahre morgen wegen des Termins mit dem Zug nach Berlin.</em> Das ist eine Häufigkeitstendenz, keine Regel.</li>
          <li><strong>nicht</strong> steht vor dem, was es verneint, bei Satzverneinung möglichst spät (Lektion 4.6).</li>
          <li><strong>Modalpartikeln</strong> (Lektion 3.2) stehen vor dem neuen, betonten Teil.</li>
        </ol>` },
    { title: 'Das Nachfeld',
      html: `
        <p>Hinter die rechte Klammer gehören standardsprachlich vor allem Nebensätze, Infinitivgruppen und Vergleiche:</p>
        <div class="ex"><p lang="de">Ich habe mich gefreut, <u class="k">dass Sie gekommen sind</u>.</p><p lang="de">Er hat versprochen, <u class="k">pünktlich zu sein</u>.</p><p lang="de">Sie hat mehr verdient <u class="k">als im Vorjahr</u>.</p></div>
        <p>Die <strong>Ausklammerung</strong> anderer Satzglieder ins Nachfeld ist in der gesprochenen Sprache häufig und in der Schriftsprache zunehmend akzeptiert, besonders bei langen Präpositionalgruppen: <em>Wir haben lange gesprochen <u class="k">über die neuen Vorschriften</u>.</em> Sie entlastet das Mittelfeld und verkürzt die Klammer.</p>` }
  ],

  english: [
    { title: 'For comparison',
      html: `
        <p>English has no verb bracket and no Vorfeld rule. The finite verb stays next to the subject (SVO), and the parts of a verb phrase stay together:</p>
        <div class="ex"><p lang="en">The board <u class="k">approved</u> the report yesterday.</p><p lang="en">Yesterday the board <u class="k">approved</u> the report.</p><p lang="en">The board <u class="k">has approved</u> the report. · We <u class="k">will call</u> you tomorrow.</p></div>
        <p>English word order and the exceptions to SVO (inversion) are the subject of the next lecture.</p>` }
  ],

  contrast: `
    <ul>
      <li><strong>Fronting</strong>: German puts any element in the Vorfeld and inverts subject and verb; English fronts an adverbial without inversion: <em>Gestern hat der Vorstand … = Yesterday the board …</em></li>
      <li><strong>The bracket</strong>: German splits the verb (<em>hat … genehmigt; rufen … an</em>); English keeps it together (<em>has approved; will call</em>). The risk for an English-dominant speaker is a German Mittelfeld that is too long, so that the reader waits for the verb: <em>Wir haben die von Ihnen am 3. März übersandten und von unserer Rechtsabteilung geprüften Unterlagen erhalten.</em></li>
      <li><strong>Subordinate clauses</strong>: German verb-final; English SVO throughout.</li>
    </ul>
    <p class="contrast">Two errors run in opposite directions: English order in German (<span class="bad">Gestern ich habe ihn gesehen</span>) and German inversion in English (<span class="bad">Yesterday have I seen him</span>).</p>`,

  usage: `
    <ul>
      <li><strong>Ausklammerung</strong> was long criticised as a mark of careless or “English-influenced” style. It is old in German and common in speech at all periods, and grammars describe it as a legitimate means of relieving the Mittelfeld; style guides recommend it for long phrases.</li>
      <li><strong>Dative before accusative</strong> is a strong tendency with indefinite nouns; definiteness, length and emphasis can reverse it.</li>
      <li><strong>TeKaMoLo</strong> is a school mnemonic, not a rule: <em>Ich fahre nach Berlin morgen</em> is unusual but possible with stress on <em>morgen</em>.</li>
    </ul>`,

  style: `
    <ul>
      <li>Keep the bracket short in written German: put what is long and heavy into the Nachfeld (subordinate clauses, infinitive groups, sometimes a long prepositional phrase) or into the Vorfeld.</li>
      <li>Use the Vorfeld to link to the previous sentence: <em>Der Bericht ging am Montag ein. Ihn hat der Vorstand gestern genehmigt</em> is clumsy; <em>Genehmigt hat ihn der Vorstand gestern</em> or simply <em>Der Vorstand hat ihn gestern genehmigt</em> is better. The subject in the Vorfeld is the most frequent and unmarked choice.</li>
    </ul>`,

  pitfalls: `
    <ul>
      <li><span class="bad">Morgen ich rufe Sie an.</span> → <em>Morgen rufe ich Sie an.</em></li>
      <li><span class="bad">Ich rufe an Sie morgen.</span> → <em>Ich rufe Sie morgen an.</em></li>
      <li><span class="bad">…, weil sie hat den Vertrag unterschrieben.</span> in writing → <em>weil sie den Vertrag unterschrieben hat</em>.</li>
      <li><span class="odd">Ich habe ihm es gegeben.</span> → <em>Ich habe es ihm gegeben</em> (accusative pronoun before dative pronoun).</li>
    </ul>`,

  latin: `
    <p>Latin also tends to put the verb at the end (<em>Caesar Galliam vicit</em>), but as a stylistic norm of classical prose, not as a grammatical rule tied to clause type. German verb-final subordinate clauses are sometimes said to reflect Latin influence on chancery style; the pattern is in fact older and Germanic, though Latin models may have reinforced the long Mittelfeld of official German.</p>`,

  summary: [
    'Topological model: Vorfeld – left bracket – Mittelfeld – right bracket – Nachfeld (Drach 1937, after Herling and Erdmann).',
    'Main clause: exactly one constituent in the Vorfeld, finite verb second; the rest of the verb in the right bracket.',
    'Subordinate clause: subordinator in the left bracket, the whole verb complex at the end.',
    'Mittelfeld tendencies: pronouns before nouns (er es ihm); nouns dative before accusative; known before new; TeKaMoLo as a tendency.',
    'Nachfeld: subordinate clauses, infinitive groups, comparisons; Ausklammerung of long phrases is old and acceptable.',
    'English keeps SVO and the verb together; no Vorfeld inversion: Yesterday the board approved …'
  ],

  cards: [
    { id: 'felder', title: 'Topological fields', tags: ['Vorfeld', 'Mittelfeld', 'Satzklammer', 'word order'], html: `
      <p><strong>Vorfeld</strong> (one constituent) · <strong>linke Klammer</strong> (finite verb / subordinator) · <strong>Mittelfeld</strong> · <strong>rechte Klammer</strong> (participle, infinitive, particle; in subordinate clauses the whole verb complex) · <strong>Nachfeld</strong> (clauses, infinitive groups, comparisons).</p>` },
    { id: 'mittelfeld', title: 'Order in the Mittelfeld', tags: ['Mittelfeld', 'Dativ', 'Akkusativ', 'TeKaMoLo'], html: `
      <p>Pronouns first: Nom – Akk – Dat (er es ihm). Nouns: Dat before Akk (dem Kunden den Vertrag). Known before new. Adverbials tend to time – cause – manner – place.</p>` }
  ],

  terms: [
    { en: 'topological field model', de: 'topologisches Feldermodell', la: 'Greek topos “place”' },
    { en: 'prefield / middle field / postfield', de: 'Vorfeld / Mittelfeld / Nachfeld', la: '' },
    { en: 'sentence bracket', de: 'Satzklammer (linke/rechte)', la: '' },
    { en: 'extraposition', de: 'Ausklammerung, Extraposition', la: 'extra + ponere' },
    { en: 'verb-second (V2) / verb-first / verb-final', de: 'Verbzweit- / Verberst- / Verbletztstellung', la: '' }
  ],

  exercises: [
    { id: 'e1', type: 'order', lang: 'de', prompt: 'Start with <em>Morgen</em>.', tokens: ['Morgen', 'rufe', 'ich', 'Sie', 'an.'], explain: 'One constituent in the Vorfeld, finite verb second, separable particle at the end.' },
    { id: 'e2', type: 'order', lang: 'de', prompt: 'Complete the subordinate clause: <span lang="de">…, weil …</span>', tokens: ['weil', 'sie', 'den', 'Vertrag', 'unterschrieben', 'hat.'], explain: 'Subordinate clause: whole verb complex at the end, finite verb last.' },
    { id: 'e3', type: 'mc', lang: 'de', prompt: 'Normal order of pronouns:', options: ['Ich habe es ihm gegeben.', 'Ich habe ihm es gegeben.'], answer: 0, keepOrder: true, explain: 'Pronouns: accusative before dative.' },
    { id: 'e4', type: 'mc', lang: 'de', prompt: 'Normal order of nouns:', options: ['Sie hat dem Kunden einen Vertrag geschickt.', 'Sie hat einen Vertrag dem Kunden geschickt.'], answer: 0, keepOrder: true, explain: 'Nouns: dative before accusative, especially with an indefinite accusative.' },
    { id: 'e5', type: 'mc', prompt: 'Translate <span lang="de">Gestern hat der Vorstand den Bericht genehmigt.</span>', options: ['Yesterday the board approved the report.', 'Yesterday has the board approved the report.', 'Yesterday approved the board the report.'], answer: 0, keepOrder: true, explain: 'English fronts the adverbial without inversion, and uses the past simple with <em>yesterday</em>.' },
    { id: 'e6', type: 'mc', lang: 'de', prompt: '<span lang="de">Wir haben lange gesprochen über die neuen Vorschriften.</span> This sentence …', options: ['uses Ausklammerung, acceptable especially for long phrases', 'is ungrammatical', 'is an anglicism with no German precedent'], answer: 0, keepOrder: true, explain: 'Placing a prepositional phrase in the Nachfeld is old in German and relieves the Mittelfeld.' }
  ]
});
