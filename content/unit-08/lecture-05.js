/*
 * Unit 8, lecture 5: zombie rules. German section in German.
 */
Grammaticus.addLecture({
  id: '8.5', unit: 8, number: 5,
  title: 'Zombie rules',
  subtitle: 'Rules that grammars have abandoned but teachers, editors and pedants keep alive – and the few that deserve to live',
  minutes: 30,

  intro: `
    <p>The linguist Arnold Zwicky called them <strong>zombie rules</strong>: prescriptions that have been refuted by usage and by the major grammars, yet keep walking. Unit 0 traced the origin of some English ones; this lecture collects the commonest in both languages, says what the reference grammars actually say, and sorts them into three groups: myths, register advice mistaken for grammar, and genuine distinctions worth keeping.</p>`,

  concept: `
    <p>A zombie rule typically has these features: it is easy to state and to check (“never start a sentence with <em>and</em>”); it is taught in school or repeated by editors; good writers have broken it for centuries; and the standard reference grammars do not support it. Following it does no harm in itself. The damage comes from contortions to avoid the forbidden form, and from judging other writers by it.</p>
    <p>Not every usage rule is a zombie. Some mark a real difference in meaning (<em>scheinbar / anscheinend; disinterested / uninterested</em>), and some mark register (Lektion 8.1). The test is what the reference works say and what careful writers do, not what one remembers from school.</p>`,

  german: [
    { title: 'Deutsche Schulregeln auf dem Prüfstand',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th>Regel</th><th>Befund</th></tr></thead>
          <tbody>
            <tr><td>„Wenn-Sätze sind würdelos.“</td><td>Die <em>würde</em>-Form im <em>wenn</em>-Satz ist standardsprachlich korrekt (<em>Wenn er kommen würde, …</em>); bei Hilfs- und Modalverben und häufigen starken Verben gilt der einfache Konjunktiv als stilistisch besser (<em>wenn er käme / hätte</em>). Stilrat, keine Grammatikregel (Lektion 2.11).</td></tr>
            <tr><td>„Wer brauchen ohne zu gebraucht, braucht brauchen gar nicht zu gebrauchen.“</td><td><em>brauchen</em> ohne <em>zu</em> (<em>Du brauchst nicht kommen</em>) ist gesprochen weit verbreitet; der Duden nennt es umgangssprachlich und empfiehlt im Geschriebenen <em>zu</em>.</td></tr>
            <tr><td>„Sinn machen“ ist ein Anglizismus und falsch.</td><td>Lehnübersetzung von <em>make sense</em>, seit Jahrzehnten verbreitet; der Duden verzeichnet es als umgangssprachlich, <em>Sinn ergeben, sinnvoll sein</em> als stilistisch unauffälliger.</td></tr>
            <tr><td>„Kein Satz beginnt mit <em>und</em>.“</td><td>Keine Regel des Regelwerks oder der Grammatik; Satzanfänge mit <em>und</em> und <em>aber</em> sind in guter Prosa üblich.</td></tr>
            <tr><td>„<em>wegen</em> verlangt den Genitiv.“</td><td>In der geschriebenen Standardsprache ja (<em>wegen des Wetters</em>); <em>wegen dem</em> ist regional und gesprochen verbreitet; bei Pronomen ist <em>wegen mir</em> gesprochen üblich, <em>meinetwegen</em> geschrieben.</td></tr>
          </tbody></table></div>
        <p class="src">Duden Band 9 (Richtiges und gutes Deutsch), jeweilige Stichwörter; Duden Band 4.</p>` },
    { title: 'Sinnvolle Unterscheidungen',
      html: `
        <ul>
          <li><em>scheinbar</em> (nur dem Schein nach, in Wirklichkeit nicht) gegenüber <em>anscheinend</em> (allem Anschein nach, wahrscheinlich): <em>Er ist scheinbar ruhig</em> heißt, dass er es nicht ist. Die Verwechslung ist häufig; die Unterscheidung lohnt sich, weil sie die Bedeutung umkehrt.</li>
          <li><em>das gleiche / dasselbe</em>: Die strenge Trennung (gleiche Art gegenüber identisch) ist in der Alltagssprache nicht fest; wo es auf Identität ankommt, ist <em>dasselbe</em> eindeutiger.</li>
          <li><em>einzigste</em>: Superlativ eines nicht steigerbaren Wortes; umgangssprachlich als Verstärkung, in der Standardsprache vermeiden.</li>
        </ul>` }
  ],

  english: [
    { title: 'English zombies',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th>Rule</th><th>Finding</th></tr></thead>
          <tbody>
            <tr><td>Don’t split infinitives.</td><td>Grammatical and common since Middle English; avoid only where the split is clumsy. Fowler (1926) already mocked those who avoid it at any cost.</td></tr>
            <tr><td>Don’t end a sentence with a preposition.</td><td>Stranding is normal English (<em>What are you looking at?</em>); the objection goes back to Dryden’s criticism of Ben Jonson (1672). Fronting (<em>at which</em>) is formal, not more correct.</td></tr>
            <tr><td>Don’t start a sentence with <em>And</em> or <em>But</em>.</td><td>Found in the best writers and in the Authorised Version; no grammar forbids it.</td></tr>
            <tr><td>Singular <em>they</em> is ungrammatical.</td><td>Used for over six centuries; the prescription of generic <em>he</em> dates from 18th-century grammarians. Now accepted by the major style guides (lecture 8.7).</td></tr>
            <tr><td><em>Hopefully</em> must mean “full of hope”.</td><td>The sentence-adverb use (<em>Hopefully, it will rain</em>) is like <em>frankly, clearly</em>; AP accepted it in 2012.</td></tr>
            <tr><td><em>data</em> is plural only.</td><td>Both are standard: plural in much scientific writing, mass noun (<em>the data is</em>) in general and computing usage.</td></tr>
            <tr><td><em>fewer</em> with count nouns, <em>less</em> with mass nouns.</td><td>A preference first stated by Robert Baker (1770); <em>less</em> with plurals is old (<em>less than 10 items</em> is normal with numbers). In edited prose, <em>fewer people</em> remains expected.</td></tr>
          </tbody></table></div>
          <p class="src">Huddleston &amp; Pullum 2002; Merriam-Webster’s Dictionary of English Usage (1989); Fowler’s Dictionary of Modern English Usage, 4th ed. (Butterfield, 2015).</p>` },
    { title: 'Distinctions worth keeping',
      html: `
        <ul>
          <li><em>its / it’s</em>; <em>their / there / they’re</em>: spelling, not style; errors are noticed.</li>
          <li><em>disinterested</em> (impartial) / <em>uninterested</em>: the distinction is eroding, but many readers still notice; use <em>impartial</em> if in doubt.</li>
          <li><em>between you and me</em>: <em>between you and I</em> is common in speech but still regarded as non-standard in writing.</li>
          <li><em>comprise</em>: <em>the set comprises five items</em>; <em>comprised of</em> is widespread and listed by dictionaries, but criticised by many editors.</li>
          <li><em>literally</em> as an intensifier: old (Dickens), recorded in dictionaries, and still a source of irritation and ambiguity in formal writing.</li>
        </ul>` }
  ],

  contrast: `
    <div class="tablewrap"><table>
      <thead><tr><th>German</th><th>English</th></tr></thead>
      <tbody>
        <tr><td>Wenn-Sätze sind würdelos.</td><td>Don’t split infinitives.</td></tr>
        <tr><td>Kein Satz beginnt mit und.</td><td>Never begin a sentence with and.</td></tr>
        <tr><td>wegen + Genitiv</td><td>whom as object</td></tr>
        <tr><td>Sinn machen (Anglizismus)</td><td>hopefully (sentence adverb)</td></tr>
        <tr><td>scheinbar / anscheinend</td><td>disinterested / uninterested</td></tr>
      </tbody></table></div>
    <p class="contrast">Both languages have the same three types: school maxims with no basis in the grammar (<em>und</em>/<em>and</em> at the start), register markers presented as rules (<em>wegen dem</em>, <em>who</em> for <em>whom</em>), and meaning distinctions that are eroding (<em>scheinbar</em>, <em>disinterested</em>).</p>`,

  usage: `
    <ul>
      <li><strong>Why zombies survive.</strong> They are easy to teach and test; they give writers and editors a sense of control; and avoiding them is cheap, so there is little pressure to give them up. Popular books (Lynne Truss, <em>Eats, Shoots &amp; Leaves</em>, 2003; Bastian Sick, <em>Der Dativ ist dem Genitiv sein Tod</em>, 2004) mix sound advice with zombies and sold millions of copies.</li>
      <li><strong>Practical stance.</strong> Know which rules are zombies, but remember that some readers still judge by them. In a job application or for a pedantic editor, it can be prudent to avoid a split infinitive even though it is grammatical. That is a decision about audience, not about grammar.</li>
    </ul>`,

  pitfalls: `
    <ul>
      <li>Do not twist a sentence to avoid a split infinitive or a final preposition.</li>
      <li>Do not “correct” others by zombie rules; check a reference grammar first.</li>
      <li>Keep the distinctions that carry meaning: <em>scheinbar/anscheinend</em>; <em>its/it’s</em>.</li>
      <li>German: <em>wegen des</em> and <em>brauchen … zu</em> in formal writing; English: <em>fewer</em> with plural nouns in edited prose.</li>
    </ul>`,

  summary: [
    'Zombie rules (Zwicky): refuted by usage and grammars, still taught and enforced.',
    'English: split infinitive, final preposition, initial And/But, singular they, hopefully, data.',
    'German: wenn-Sätze sind würdelos, brauchen ohne zu, Sinn machen, kein Satz mit und.',
    'Many “rules” are register markers: wegen + Dativ, who for whom.',
    'Some distinctions are worth keeping because they carry meaning: scheinbar/anscheinend, its/it’s, disinterested.',
    'With pedantic readers, avoiding a zombie can still be prudent: a choice about audience, not grammar.'
  ],

  cards: [
    { id: 'zombies', title: 'Zombie rules', tags: ['zombie rules', 'split infinitive', 'würdelos', 'preposition'], html: `
      <p><strong>Myths</strong>: split infinitive, final preposition, And/But at the start; „Wenn-Sätze sind würdelos“, kein Satz mit „und“.<br><strong>Register</strong>: whom, fewer; wegen + Genitiv, brauchen + zu.<br><strong>Keep</strong>: its/it’s, between you and me; scheinbar/anscheinend.</p>` }
  ],

  terms: [
    { en: 'zombie rule', de: 'Zombieregel, Schulmythos', la: '' },
    { en: 'prescriptivism / descriptivism', de: 'Präskriptivismus / Deskriptivismus', la: 'praescribere “prescribe”' },
    { en: 'split infinitive', de: 'gespaltener Infinitiv', la: '' },
    { en: 'preposition stranding', de: 'Präpositionsstranden', la: '' },
    { en: 'sentence adverb', de: 'Satzadverb', la: '' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', lang: 'en', prompt: 'Is <em>What are you looking at?</em> grammatical standard English?', options: ['Yes', 'No: prepositions cannot end a sentence'], answer: 0, keepOrder: true, explain: 'Stranding is normal; fronting is formal.' },
    { id: 'e2', type: 'mc', lang: 'de', prompt: '<span lang="de">Wenn er Zeit haben würde, käme er.</span> Is the <em>würde</em>-form in the wenn-clause wrong?', options: ['No, but <em>wenn er Zeit hätte</em> is stylistically better', 'Yes, it is a grammatical error'], answer: 0, keepOrder: true, explain: 'Style advice, not grammar.' },
    { id: 'e3', type: 'mc', lang: 'de', prompt: '<span lang="de">Er ist scheinbar zufrieden.</span> means:', options: ['He only seems satisfied (but is not).', 'He is apparently (probably) satisfied.'], answer: 0, keepOrder: true, explain: '<em>scheinbar</em> = only seemingly; <em>anscheinend</em> = apparently.' },
    { id: 'e4', type: 'mc', lang: 'en', prompt: 'Which form is still regarded as non-standard in writing?', options: ['between you and I', 'to boldly go', 'And then it rained.'], answer: 0, explain: 'The others are zombies; <em>between you and I</em> is still marked.' },
    { id: 'e5', type: 'mc', prompt: 'Where does the objection to final prepositions in English go back to?', options: ['Dryden’s criticism of Ben Jonson (1672)', 'Latin grammar of the Middle Ages', 'The Oxford English Dictionary'], answer: 0, explain: 'Dryden is usually named as the first to object.' },
    { id: 'e6', type: 'mc', lang: 'de', prompt: 'In formal written German:', options: ['wegen des Wetters', 'wegen dem Wetter'], answer: 0, keepOrder: true, explain: 'Genitive in the written standard; the dative is a register marker, not an error in speech.' }
  ]
});
