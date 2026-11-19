/*
 * Unit 4, lecture 2: English word order and inversion. Content file only. German section in German.
 */
Grammaticus.addLecture({
  id: '4.2', unit: 4, number: 2,
  title: 'English word order and inversion',
  subtitle: 'SVO, do-support, and the places where English inverts after all: “Never have I seen”, “So do I”, “Here comes the bus”',
  minutes: 30,

  intro: `
    <p>English fixes its word order where German fixes its verb position: subject, verb, object, in that order, in main and subordinate clauses alike. But English, too, inverts subject and verb in some contexts, and it does so with a peculiarity German lacks: in questions and negatives it needs an auxiliary, and if there is none it brings in <em>do</em>. This lecture covers SVO, do-support, the types of inversion, and the places where German instinct and English rule collide.</p>`,

  concept: [
    { title: 'Inversion',
      html: `
        <p><strong>Inversion</strong> means that the verb (or part of it) comes before the subject. German inverts whenever something other than the subject fills the Vorfeld; English inverts only in particular constructions, mostly with an auxiliary, not the full verb:</p>
        <div class="ex"><p lang="de">Gestern <u class="k">kam</u> der Bericht.</p><p lang="en">Yesterday the report <u class="k">came</u>. <span class="gl">no inversion</span></p><p lang="en">Never <u class="k">have</u> I seen such figures. <span class="gl">inversion with an auxiliary</span></p></div>` }
  ],

  german: [
    { title: 'Inversion im Deutschen',
      html: `
        <p>Im Deutschen ist die „Inversion“ keine Sonderkonstruktion, sondern Folge der Verbzweitstellung: Steht nicht das Subjekt im Vorfeld, folgt es dem finiten Verb. In Fragen und Aufforderungen steht das Verb an erster Stelle, ohne Hilfsverb:</p>
        <div class="ex"><p lang="de">Kennst du ihn? · Kommt er morgen? · Warum lachst du?</p></div>
        <p>Das Englische braucht dafür <em>do</em>: <em>Do you know him?</em> Das Deutsche hat kein Gegenstück zu dieser Umschreibung; <em>tun</em> + Infinitiv (<span class="odd">Tust du ihn kennen?</span>) ist dialektal oder kindlich, standardsprachlich nur zur Betonung des Infinitivs im Vorfeld: <em>Lesen tut er gern.</em></p>` }
  ],

  english: [
    { title: 'SVO and its consequences',
      html: `
        <p>English signals grammatical roles by position (lecture 0.4), so the order subject – verb – object is fixed in statements, whether main or subordinate:</p>
        <div class="ex"><p lang="en">I know that the board approved the report.</p><p lang="en">The report that the board approved yesterday …</p></div>` },
    { title: 'do-support',
      html: `
        <p>Questions and negatives need an auxiliary. If the verb phrase has none, English inserts <em>do</em>:</p>
        <div class="ex"><p lang="en">She has signed. → Has she signed? · She hasn’t signed.</p><p lang="en">She signed. → <u class="k">Did</u> she sign? · She <u class="k">didn’t</u> sign.</p><p lang="en">She works here. → <u class="k">Does</u> she work here? · She <u class="k">doesn’t</u> work here.</p></div>
        <p>Also for emphasis (<em>I <u class="k">did</u> send it!</em>) and in short answers and tags (<em>Yes, I do. She works here, doesn’t she?</em>). <em>be</em> never takes <em>do</em> (<em>Is she here?</em>); British <em>have</em> sometimes does not (<em>Have you a moment?</em>, now old-fashioned beside <em>Do you have</em> / <em>Have you got</em>).</p>
        <p>No do-support when the question word is the subject: <em>Who signed the contract?</em> (not <em>Who did sign</em>, unless emphatic).</p>` },
    { title: 'Kinds of inversion',
      html: `
        <ol>
          <li><strong>Questions</strong>: <em>Has she signed? Where did you put it?</em></li>
          <li><strong>Negative and restrictive openings</strong> (formal, emphatic): <em>Never have I seen …; Not only did they lose money, but …; Only then did we realise …; Under no circumstances should you …; Rarely does a company …; No sooner had we arrived than …</em></li>
          <li><strong>so / neither / nor</strong>: <em>I like it. – So do I. · I don’t like it. – Neither do I.</em></li>
          <li><strong>Conditionals without <em>if</em></strong>: <em>Had I known …; Should you need …; Were it not for …</em> (lecture 2.11).</li>
          <li><strong>After place and direction adverbials</strong>, with intransitive verbs and full noun subjects: <em>Here comes the bus. On the desk lay a letter. Down came the rain.</em> (but <em>Here it comes</em>, with a pronoun).</li>
          <li><strong>Reporting</strong> after a quotation: <em>“We are confident,” said the chairman.</em> (but <em>“…,” he said</em>, with a pronoun).</li>
          <li><strong>Comparisons</strong>, formal: <em>… than did the previous board.</em></li>
        </ol>` },
    { title: 'Indirect questions',
      html: `
        <p>Indirect questions have no inversion and no <em>do</em> (lecture 2.12):</p>
        <div class="ex"><p lang="en">Where is the file? → Do you know where the file is?</p><p lang="en" class="bad">Do you know where is the file?</p><p lang="en">What did she say? → I asked what she had said.</p></div>` }
  ],

  contrast: `
    <ul>
      <li><strong>Fronted adverbial</strong>: German always inverts, English normally never: <em>Heute ist der Markt ruhig = Today the market is quiet</em>, not <span class="bad">Today is the market quiet</span>.</li>
      <li><strong>Questions</strong>: German moves the full verb; English moves an auxiliary or adds <em>do</em>: <em>Kennst du ihn? = Do you know him?</em>, not <span class="bad">Know you him?</span> (archaic).</li>
      <li><strong>Negation</strong>: <em>Ich kenne ihn nicht = I don’t know him</em>, not <span class="bad">I know him not</span> (archaic).</li>
      <li><strong>Negative openings</strong>: German just inverts as usual (<em>Nie habe ich so etwas gesehen</em>); English inverts with an auxiliary here and only here, so the construction sounds formal and emphatic.</li>
      <li><strong>Indirect questions</strong>: both languages use statement order (<em>wo die Akte ist; where the file is</em>).</li>
    </ul>`,

  usage: `
    <ul>
      <li>Older English inverted the full verb freely, as German does (<em>Know you not …?</em>, Shakespeare). Do-support spread from the sixteenth century and was largely complete by the eighteenth. Its remains (<em>How goes it? Thank you kindly, say I</em>) sound archaic or jocular.</li>
      <li>Inversion after negative openings is formal; in speech people more often say <em>I’ve never seen such figures</em>.</li>
      <li>Indirect questions with inversion (<em>I asked him where was he going</em>) are normal in Irish and Indian English, but not in standard British or American writing.</li>
    </ul>`,

  pitfalls: `
    <ul>
      <li><span class="bad">Tomorrow will I send you the file.</span> → <em>Tomorrow I will send you the file.</em></li>
      <li><span class="bad">Can you tell me where is the station?</span> → <em>where the station is</em>.</li>
      <li><span class="bad">Not only they lost money, but …</span> → <em>Not only did they lose money, but …</em></li>
      <li><span class="bad">Who did call?</span> as a neutral question → <em>Who called?</em></li>
      <li><span class="bad">I like it. – So I do.</span> (= that is true of me) vs <em>So do I</em> (me too).</li>
    </ul>`,

  latin: `
    <p>Latin forms questions without inversion or auxiliaries, with question particles (<em>-ne, nonne, num</em>, lecture 3.2) or question words; word order is free and serves emphasis. The English “inversion after negative adverbials” has a loose parallel in Latin’s placing of emphatic words first, but no grammatical rule.</p>`,

  summary: [
    'English: SVO in main and subordinate clauses; no inversion after a fronted adverbial (Yesterday the board approved …).',
    'Questions and negatives need an auxiliary; without one, English adds do (Did she sign? She didn’t sign).',
    'No do when the question word is the subject (Who signed?).',
    'English inverts after negative/restrictive openings (Never have I …), with so/neither, in if-less conditionals, after place adverbials (Here comes the bus) and in reporting (said the chairman).',
    'Indirect questions: statement order, no do (where the file is).',
    'German inverts whenever the Vorfeld holds a non-subject; German has no do-support.'
  ],

  cards: [
    { id: 'inversion', title: 'English inversion', tags: ['inversion', 'never have I', 'so do I'], html: `
      <p>Questions · negative openings (Never have I …, Not only did …, Only then did …) · so/neither do I · Had I known · Here comes the bus · “…,” said the chairman.<br>Not after ordinary adverbials: <em>Today the market is quiet.</em></p>` },
    { id: 'do-support', title: 'do-support', tags: ['do', 'questions', 'negation'], html: `
      <p>Questions and negatives without another auxiliary take <em>do</em>: Does she work here? She doesn’t. Not with <em>be</em>; not when the wh-word is the subject (Who called?). Indirect questions: no do (I asked where she worked).</p>` }
  ],

  terms: [
    { en: 'inversion', de: 'Inversion', la: 'inversio “turning round”' },
    { en: 'do-support', de: 'do-Umschreibung', la: '' },
    { en: 'auxiliary', de: 'Hilfsverb', la: 'auxilium' },
    { en: 'question tag', de: 'Frageanhängsel', la: '' },
    { en: 'subject–auxiliary inversion', de: 'Inversion von Subjekt und Hilfsverb', la: '' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: 'Translate <span lang="de">Heute ist der Markt ruhig.</span>', options: ['Today the market is quiet.', 'Today is the market quiet.'], answer: 0, keepOrder: true, explain: 'No inversion after an ordinary fronted adverbial.' },
    { id: 'e2', type: 'mc', prompt: 'Which is correct?', options: ['Do you know where the file is?', 'Do you know where is the file?'], answer: 0, keepOrder: true, explain: 'Indirect questions use statement order.' },
    { id: 'e3', type: 'gap', prompt: '<span lang="en">Not only ___ they lose money, but they also lost customers.</span>', answers: ['did'], explain: 'Negative opening: inversion with <em>do</em>.' },
    { id: 'e4', type: 'mc', prompt: '<span lang="en">I don’t like the new layout. – ___</span>', options: ['Neither do I.', 'So do I.', 'Neither I do.'], answer: 0, keepOrder: true, explain: 'Agreement with a negative: <em>Neither/Nor do I</em>.' },
    { id: 'e5', type: 'mc', prompt: 'Neutral question:', options: ['Who called this morning?', 'Who did call this morning?'], answer: 0, keepOrder: true, explain: 'No <em>do</em> when the question word is the subject.' },
    { id: 'e6', type: 'mc', prompt: 'Which is correct?', options: ['Here comes the bus.', 'Here comes it.'], answer: 0, keepOrder: true, explain: 'Inversion after <em>here</em> with a noun subject; with a pronoun no inversion: <em>Here it comes</em>.' }
  ]
});
