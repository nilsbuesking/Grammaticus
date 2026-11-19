/*
 * Unit 1, lecture 2: case. Content file only. German section in German.
 */
Grammaticus.addLecture({
  id: '1.2', unit: 1, number: 2,
  title: 'Case',
  subtitle: 'Four German cases, the n-declension, and what is left of case in English: I/me, who/whom',
  minutes: 30,

  intro: `
    <p>Case marks the role of a noun phrase in the sentence. German has kept four cases, visible mainly in articles and adjectives; English has kept case only in a handful of pronouns. This lecture covers how German nouns decline, the small but persistent problems (the n-declension, the dative plural), and the English pronoun choices that still cause doubt: <em>than me</em> or <em>than I</em>, <em>who</em> or <em>whom</em>.</p>`,

  concept: [
    { title: 'What case does',
      html: `
        <p>Lecture 0.4 showed that German marks sentence functions by case and English by position. In German the case is decided by three things:</p>
        <ul>
          <li>the <strong>function</strong> in the clause: subject (nominative), direct object (usually accusative), indirect object (dative);</li>
          <li>the <strong>verb</strong>, which may require a particular case (<em>helfen</em> + dative, <em>gedenken</em> + genitive);</li>
          <li>the <strong>preposition</strong> (<em>mit</em> + dative, <em>für</em> + accusative, <em>wegen</em> + genitive): Unit 3.</li>
        </ul>` }
  ],

  german: [
    { title: 'Die Kasusformen',
      html: `
        <p>Der Kasus zeigt sich vor allem am Artikel; das Nomen selbst hat nur wenige Endungen:</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Kasus</th><th>mask. · fem. · neutr. · Plural</th></tr></thead>
          <tbody>
            <tr><td>Nominativ</td><td>der Kunde · die Bank · das Konto · die Konten</td></tr>
            <tr><td>Akkusativ</td><td>den Kunden · die Bank · das Konto · die Konten</td></tr>
            <tr><td>Dativ</td><td>dem Kunden · der Bank · dem Konto · den Konten</td></tr>
            <tr><td>Genitiv</td><td>des Kunden · der Bank · des Kontos · der Konten</td></tr>
          </tbody></table></div>
        <p>Endungen am Nomen gibt es nur im Genitiv Singular der starken Maskulina und Neutra (<em>des Kontos, des Tages</em>), im Dativ Plural (<em>den Konten, den Kindern</em>, immer <em>-n</em>, außer bei Plural auf <em>-s</em>: <em>den Autos</em>) und bei der n-Deklination.</p>` },
    { title: 'Die n-Deklination',
      html: `
        <p>Eine Gruppe maskuliner Nomen hat in allen Kasus außer dem Nominativ Singular die Endung <em>-(e)n</em>. Dazu gehören viele Personen- und Tierbezeichnungen auf <em>-e</em> und Fremdwörter auf <em>-ant, -ent, -ist, -at</em>:</p>
        <div class="ex"><p lang="de">der Kollege – den/dem/des Kollegen · der Kunde – den/dem/des Kunden</p><p lang="de">der Präsident – den/dem/des Präsidenten · der Student, Assistent, Polizist, Kandidat, Bürokrat</p><p lang="de">der Mensch, der Herr (den Herrn), der Nachbar, der Bär</p><p lang="de">der Name – des Namens (gemischt), ebenso Glaube, Gedanke, Wille</p></div>
        <p>Im Gespräch fällt die Endung oft weg: <span class="odd">mit dem Präsident</span>, <span class="odd">den Bär</span>. Im geschriebenen Standard gilt sie weiterhin: <em>mit dem Präsidenten</em>.</p>` },
    { title: 'Das Dativ-e',
      html: `
        <p>Früher erhielten viele starke Maskulina und Neutra im Dativ Singular ein <em>-e</em>: <em>dem Manne, im Hause</em>. Heute ist es veraltet und lebt nur noch in festen Wendungen:</p>
        <div class="ex"><p lang="de">zu Hause, nach Hause · im Zuge · im Grunde · im Laufe der Zeit · auf dem Lande · im Jahre 1871 · zu Tode</p></div>
        <p>In anderen Fällen wirkt es gehoben oder altertümlich: <em>dem Volke</em> (Reichstag: „Dem deutschen Volke“).</p>` },
    { title: 'Verben mit bestimmtem Kasus',
      html: `
        <div class="ex">
          <p lang="de">Dativ: helfen, danken, folgen, gratulieren, vertrauen, gefallen, gehören, schaden, widersprechen</p>
          <p lang="de">Akkusativ: fragen, bitten, anrufen, kosten (Das kostet mich viel)</p>
          <p lang="de">zwei Akkusative: jemanden etwas lehren, jemanden etwas fragen</p>
          <p lang="de">Genitiv (gehoben): gedenken, bedürfen, sich erinnern (älter), sich bedienen, jemanden einer Sache beschuldigen</p>
        </div>` }
  ],

  english: [
    { title: 'Pronoun case',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th>Subject</th><th>Object · Possessive</th></tr></thead>
          <tbody>
            <tr><td>I, we</td><td>me, us · my/mine, our/ours</td></tr>
            <tr><td>he, she, they</td><td>him, her, them · his, her/hers, their/theirs</td></tr>
            <tr><td>who</td><td>whom · whose</td></tr>
          </tbody></table></div>
        <p><em>you</em> and <em>it</em> have the same subject and object form. Nouns show case only in the possessive <em>’s</em> (lecture 1.6).</p>` },
    { title: 'Doubtful cases',
      html: `
        <ul>
          <li><strong>After <em>be</em></strong>: <em>It’s me. That was him.</em> are standard. <em>It is I</em> is formal to the point of sounding stilted, except before a relative clause (<em>It is I who am responsible</em> — still very formal).</li>
          <li><strong>After <em>than</em> and <em>as</em></strong>: <em>She earns more than me</em> is standard in speech and most writing; <em>more than I</em> is formal; <em>more than I do</em> avoids the question.</li>
          <li><strong>Coordinated pronouns</strong>: the case follows the function: <em>She and I went</em> (subject), <em>between you and me</em> (object of preposition). <span class="bad">Me and him went</span> is informal; <span class="bad">between you and I</span> is hypercorrect (lecture 0.2).</li>
          <li><strong><em>who</em> and <em>whom</em></strong>: lecture 1.4.</li>
        </ul>` }
  ],

  contrast: `
    <ul>
      <li>German shows case in the article (<em>der/den/dem/des</em>) and adjective; English has nothing equivalent outside pronouns.</li>
      <li>German verbs fix the case: <em>Ich helfe <u class="k">ihm</u></em> (dative), English <em>I help <u class="k">him</u></em> (no distinction).</li>
      <li>English object forms after <em>be</em> and <em>than</em> (<em>It’s me; taller than me</em>) correspond to German nominative (<em>Ich bin’s; größer als ich</em>). German <span class="bad">größer als mich</span> is wrong.</li>
    </ul>
    <p class="contrast">For a German speaker living in English, the risk lies in German: case endings that are not needed in English can erode, especially the n-declension (<em>dem Kunden</em>) and the dative after verbs like <em>helfen, gratulieren</em>.</p>`,

  usage: `
    <ul>
      <li><strong>n-declension</strong>: the loss of the ending (<em>dem Präsident, den Bär</em>) is widespread in speech and appears in edited texts; grammars record it as non-standard in writing. Some nouns are moving to the strong declension altogether (<em>des Bären → des Bärs</em> is recorded as colloquial).</li>
      <li><strong>Dativ-e</strong>: outside fixed phrases it is no longer expected; using it can sound solemn or ironic.</li>
      <li><strong><em>It’s me</em></strong> was condemned by eighteenth-century grammarians on the Latin model (Latin uses the nominative after <em>esse</em>). Usage never followed; it is standard.</li>
    </ul>`,

  pitfalls: `
    <ul>
      <li><span class="bad">Ich habe mit dem Kunde gesprochen.</span> → <em>mit dem Kunden</em>.</li>
      <li><span class="bad">Sehr geehrter Herr Präsident … wir danken den Präsident</span> → <em>dem Präsidenten</em>.</li>
      <li><span class="bad">Ich gratuliere dich.</span> → <em>Ich gratuliere dir.</em></li>
      <li><span class="bad">Er ist größer als mich.</span> → <em>größer als ich</em>.</li>
      <li><span class="bad">Me and my colleague will attend.</span> in formal writing → <em>My colleague and I will attend.</em></li>
    </ul>`,

  latin: `
    <p>Latin has six cases: nominative, genitive, dative, accusative, ablative and vocative. The ablative (“taking away”) covers means, manner, place and time, roles German expresses with prepositions plus dative: <em>gladio</em> “with the sword” = <em>mit dem Schwert</em>.</p>
    <p class="latin">German school grammar’s questions for the cases (<em>Wer? Wessen? Wem? Wen?</em>) are an adaptation of the Latin case table, which is also why German lists the genitive second (as Latin does) in older grammars and fourth in newer ones.</p>`,

  summary: [
    'German case is decided by function, by the verb (helfen + Dat.) and by the preposition (Unit 3).',
    'Case shows mainly in articles; nouns add endings only in the genitive singular (-s), dative plural (-n) and the n-declension.',
    'n-declension: der Kollege, Kunde, Präsident, Student, Mensch, Herr → den/dem/des Kollegen; in writing the ending is required.',
    'Dativ-e survives in fixed phrases: zu Hause, im Zuge, im Grunde.',
    'English case only in pronouns: I/me, he/him, who/whom; It’s me and taller than me are standard.',
    'German nominative after als/wie and sein: größer als ich; Ich bin’s.'
  ],

  cards: [
    { id: 'n-dekl', title: 'n-Deklination', tags: ['Kollege', 'Kunde', 'Präsident', 'Kasus'], html: `
      <p>Masculine nouns with -(e)n in all cases except nominative singular: Kollege, Kunde, Präsident, Student, Assistent, Polizist, Kandidat, Mensch, Herr (Herrn), Nachbar. Mixed: Name/Glaube/Gedanke/Wille → des Namens.</p>` },
    { id: 'dativ-verbs', title: 'Verbs with the dative', tags: ['Dativ', 'helfen', 'gratulieren'], html: `
      <p>helfen, danken, folgen, gratulieren, vertrauen, gefallen, gehören, schaden, widersprechen, begegnen, antworten.</p>` }
  ],

  terms: [
    { en: 'declension', de: 'Deklination', la: 'declinatio' },
    { en: 'weak (n-) declension', de: 'schwache Deklination, n-Deklination', la: '' },
    { en: 'case government', de: 'Rektion', la: 'regere “to govern”' },
    { en: 'ablative', de: 'Ablativ', la: 'ablativus' },
    { en: 'vocative', de: 'Vokativ', la: 'vocativus' },
    { en: 'subject / object pronoun', de: 'Personalpronomen im Nominativ / Akkusativ', la: '' }
  ],

  exercises: [
    { id: 'e1', type: 'gap', lang: 'de', prompt: '<span lang="de">Ich habe mit dem ___ telefoniert.</span> (Kunde)', answers: ['Kunden'], cs: true, explain: 'n-declension: <em>dem Kunden</em>.' },
    { id: 'e2', type: 'gap', lang: 'de', prompt: '<span lang="de">Wir gratulieren ___ zum Geburtstag.</span> (du)', answers: ['dir'], cs: true, explain: '<em>gratulieren</em> takes the dative.' },
    { id: 'e3', type: 'mc', lang: 'de', prompt: 'Correct German:', options: ['Sie ist erfahrener als ich.', 'Sie ist erfahrener als mich.', 'Sie ist erfahrener als mir.'], answer: 0, keepOrder: true, explain: 'After <em>als</em> the case of the compared element: nominative.' },
    { id: 'e4', type: 'mc', prompt: 'Which is standard in ordinary English?', options: ['It’s me.', 'It’s I.'], answer: 0, keepOrder: true, explain: '<em>It’s me</em> is standard; <em>It is I</em> sounds stilted.' },
    { id: 'e5', type: 'mc', prompt: 'Formal email: <span lang="en">___ will attend the meeting.</span>', options: ['My colleague and I', 'Me and my colleague', 'My colleague and me'], answer: 0, keepOrder: true, explain: 'Subject: <em>I</em>; politeness puts the other person first.' },
    { id: 'e6', type: 'match', prompt: 'Match the verb to its case.', pairs: [['helfen', 'Dativ'], ['fragen', 'Akkusativ'], ['gedenken', 'Genitiv'], ['lehren (jemanden etwas)', 'zwei Akkusative']], explain: 'German verbs govern the case of their objects.' }
  ]
});
