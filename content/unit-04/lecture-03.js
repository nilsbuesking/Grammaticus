/*
 * Unit 4, lecture 3: coordination and subordination. Content file only. German section in German.
 */
Grammaticus.addLecture({
  id: '4.3', unit: 4, number: 3,
  title: 'Coordination and subordination',
  subtitle: 'Parataxis and hypotaxis, ellipsis, and how German and English build long sentences differently',
  minutes: 25,

  intro: `
    <p>Sentences grow in two ways: by adding clauses of equal rank (<em>and, but</em>) or by embedding one clause in another (<em>because, which, that</em>). German prose has a long tradition of deep embedding, with clauses nested inside clauses and the verbs piling up at the end; English prefers chains, with each clause complete before the next begins. This lecture covers both techniques, the omissions they allow (ellipsis), and what each language does well.</p>`,

  concept: [
    { title: 'Parataxis and hypotaxis',
      html: `
        <ul>
          <li><strong>Parataxis</strong> (coordination): clauses side by side, joined by coordinators or simply juxtaposed: <em>The figures were good, and the board approved the plan.</em></li>
          <li><strong>Hypotaxis</strong> (subordination): one clause dependent on another, as subject, object, adverbial or attribute: <em>Because the figures were good, the board approved the plan.</em></li>
        </ul>
        <p>Subordination makes the logical relation explicit (cause, condition, concession) and lets the writer rank the information: the main clause carries what matters most. Coordination is simpler and faster to read but leaves relations implicit.</p>` },
    { title: 'Ellipsis',
      html: `
        <p>In coordination, repeated material can be left out:</p>
        <div class="ex"><p lang="en">She drafted the report and (she) sent it to the board.</p><p lang="en">Anna works in London, Tom (works) in Frankfurt. <span class="gl">gapping</span></p><p lang="de">Sie schrieb den Bericht und (sie) schickte ihn an den Vorstand.</p><p lang="de">Anna arbeitet in London, Tom (arbeitet) in Frankfurt.</p></div>` }
  ],

  german: [
    { title: 'Nebensatzarten',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th>Funktion</th><th>Beispiel</th></tr></thead>
          <tbody>
            <tr><td>Subjektsatz</td><td><u class="k">Dass die Zahlen stimmen</u>, ist entscheidend.</td></tr>
            <tr><td>Objektsatz</td><td>Ich weiß, <u class="k">dass die Zahlen stimmen</u>.</td></tr>
            <tr><td>Adverbialsatz</td><td><u class="k">Weil die Zahlen stimmen</u>, genehmigen wir den Plan.</td></tr>
            <tr><td>Attributsatz</td><td>Die Zahlen, <u class="k">die Sie geschickt haben</u>, stimmen.</td></tr>
          </tbody></table></div>
        <p>Nebensätze können ihrerseits Nebensätze enthalten (Nebensatz zweiten, dritten Grades). Jeder wird durch Kommas abgegrenzt (Einheit 5).</p>` },
    { title: 'Der Schachtelsatz',
      html: `
        <p>Die deutsche Schriftsprache erlaubt tiefe Einbettungen, bei denen sich am Ende die Verben stauen:</p>
        <div class="ex"><p lang="de" class="odd">Der Bericht, den die Abteilung, die der Vorstand im März, als die Zahlen bekannt wurden, eingesetzt hatte, erstellt hat, liegt vor.</p></div>
        <p>Grammatisch ist das korrekt, lesbar ist es kaum. Mark Twain hat in seinem Essay <em>The Awful German Language</em> (1880) solche Sätze verspottet. Gute deutsche Prosa vermeidet mehr als eine Einbettung in der Mitte des Satzes und hängt Nebensätze lieber an (Nachfeld).</p>` },
    { title: 'Auslassungen',
      html: `
        <p>Bei gleichem Subjekt kann es im zweiten Hauptsatz fehlen, wenn das Verb direkt nach <em>und</em> folgt: <em>Sie schrieb den Bericht und schickte ihn ab.</em> Steht im zweiten Teil etwas anderes im Vorfeld, muss das Subjekt wiederholt werden: <em>Sie schrieb den Bericht, und dann schickte <u class="k">sie</u> ihn ab.</em></p>` }
  ],

  english: [
    { title: 'Kinds of subordinate clause',
      html: `
        <ul>
          <li><strong>finite</strong>: <em>that the figures are correct; because the figures are correct; which you sent</em>;</li>
          <li><strong>non-finite</strong>: <em>to approve the plan; having checked the figures; signed by both parties</em> (lecture 4.5);</li>
          <li><strong>verbless</strong>: <em>Although tired, she finished the report. If necessary, call me.</em></li>
        </ul>
        <p>English compresses with non-finite and verbless clauses where German more often uses a full subordinate clause.</p>` },
    { title: 'The English preference',
      html: `
        <p>English prose style, especially British plain-English style, favours sentences of moderate length with the main clause early (“right-branching”): subject and verb first, qualifications after. Long left-branching openings and centre-embedding are possible but tax the reader more than in German, because English has no verb-final signal to show where a clause ends.</p>
        <div class="ex"><p lang="en">The board approved the plan because the figures were good and the risks had been assessed.</p><p lang="en" class="odd">The report that the team that the board set up in March produced is ready.</p></div>` },
    { title: 'Coordination with and',
      html: `
        <p>With a shared subject, English leaves the second subject out and does not need a comma: <em>She wrote the report and sent it.</em> With two subjects, a comma before <em>and</em> is common but optional in short sentences (Unit 5).</p>` }
  ],

  contrast: `
    <ul>
      <li><strong>Embedding</strong>: German tolerates (and formal German favours) more and deeper embedding; English prefers to place subordinate clauses after the main clause.</li>
      <li><strong>Compression</strong>: English uses participle and verbless clauses (<em>Once signed, the contract …</em>) where German more often writes a clause (<em>Sobald der Vertrag unterschrieben ist, …</em>) or an extended participle attribute (lecture 2.14).</li>
      <li><strong>Translating German into English</strong>: break long German sentences into two or three; move the main clause forward; turn nested relative clauses into separate sentences.</li>
      <li><strong>Translating English into German</strong>: participle clauses usually become full clauses: <em>Having checked the figures, she signed = Nachdem sie die Zahlen geprüft hatte, unterschrieb sie.</em></li>
    </ul>`,

  style: `
    <ul>
      <li>One idea per main clause; put the most important information in the main clause, the background in subordinate clauses.</li>
      <li>In German, avoid more than one level of centre-embedding; move clauses into the Vorfeld or Nachfeld.</li>
      <li>In English, avoid long openings before the subject; readers want subject and verb early.</li>
      <li>Vary: a series of short main clauses reads as choppy; a series of long hypotactic sentences as heavy (Unit 8).</li>
    </ul>`,

  pitfalls: `
    <ul>
      <li>German: <span class="bad">Sie schrieb den Bericht, und dann schickte ihn ab.</span> → subject needed: <em>und dann schickte sie ihn ab</em>.</li>
      <li>English: <span class="bad">Is important that we decide today.</span> → <em>It is important …</em> (English needs a subject).</li>
      <li>English: verbatim translation of a German Schachtelsatz; restructure instead.</li>
    </ul>`,

  latin: `
    <p>Latin periodic style (Cicero) is the model of hypotaxis: long sentences (<em>periodi</em>) in which subordinate clauses build tension towards the main verb at the end. German humanist and chancery prose imitated it, which may have encouraged the long German period; English writers imitated it too in the seventeenth century (Milton, Browne) before plain style won out.</p>`,

  summary: [
    'Parataxis (coordination) joins clauses of equal rank; hypotaxis (subordination) embeds one in another and makes relations explicit.',
    'German subordinate clauses: subject, object, adverbial, attributive; each set off by commas.',
    'German tolerates deep centre-embedding (Schachtelsatz); good style limits it and uses the Nachfeld.',
    'English prefers right-branching sentences, main clause early, and compresses with non-finite and verbless clauses.',
    'Ellipsis: shared subjects can be omitted after und/and if the verb follows directly.',
    'Translating: split long German sentences for English; expand English participle clauses into German clauses.'
  ],

  cards: [
    { id: 'para-hypo', title: 'Parataxis and hypotaxis', tags: ['coordination', 'subordination', 'Satzgefüge', 'Satzreihe'], html: `
      <p><strong>Satzreihe</strong> (parataxis): Hauptsatz + Hauptsatz. <strong>Satzgefüge</strong> (hypotaxis): Hauptsatz + Nebensatz.<br>DE → EN: split long sentences, main clause first. EN → DE: participle clauses become full clauses.</p>` }
  ],

  terms: [
    { en: 'parataxis / coordination', de: 'Parataxe, Nebenordnung, Satzreihe', la: 'Greek para + taxis' },
    { en: 'hypotaxis / subordination', de: 'Hypotaxe, Unterordnung, Satzgefüge', la: 'Greek hypo + taxis' },
    { en: 'ellipsis', de: 'Ellipse', la: 'Greek elleipsis “omission”' },
    { en: 'gapping', de: 'Gapping (Verbellipse)', la: '' },
    { en: 'centre-embedding', de: 'Zentraleinbettung, Schachtelsatz', la: '' },
    { en: 'period (periodic sentence)', de: 'Periode', la: 'periodus' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', lang: 'de', prompt: 'Which is correct?', options: ['Sie schrieb den Bericht, und dann schickte sie ihn ab.', 'Sie schrieb den Bericht, und dann schickte ihn ab.'], answer: 0, keepOrder: true, explain: 'With <em>dann</em> in the Vorfeld, the subject must be repeated.' },
    { id: 'e2', type: 'mc', prompt: 'Best English for <span lang="de">Nachdem sie die Zahlen geprüft hatte, unterschrieb sie.</span>', options: ['Having checked the figures, she signed.', 'After that she had checked the figures, signed she.'], answer: 0, keepOrder: true, explain: 'English compresses with a participle clause.' },
    { id: 'e3', type: 'match', prompt: 'Match the clause to its function.', pairs: [['Dass er kommt, freut mich.', 'Subjektsatz'], ['Ich hoffe, dass er kommt.', 'Objektsatz'], ['Wenn er kommt, feiern wir.', 'Adverbialsatz'], ['Der Mann, der kommt, …', 'Attributsatz']], explain: 'Subordinate clauses take over the functions of constituents.' },
    { id: 'e4', type: 'mc', prompt: 'Which English sentence is easiest to read?', options: ['The board approved the plan because the figures were good.', 'Because the figures, which the team had checked, were good, the board the plan approved.'], answer: 0, keepOrder: true, explain: 'Main clause first, subordinate clause after (right-branching); the second is not English order anyway.' },
    { id: 'e5', type: 'mc', prompt: 'Translate <span lang="de">Ist wichtig, dass …</span> (colloquial) into standard English:', options: ['It is important that …', 'Is important that …'], answer: 0, keepOrder: true, explain: 'English needs a subject; <em>it</em> anticipates the clause.' }
  ]
});
