/*
 * Unit 8, lecture 3: the passive debate. German section in German.
 */
Grammaticus.addLecture({
  id: '8.3', unit: 8, number: 3,
  title: 'The passive debate',
  subtitle: '“Avoid the passive”: where the advice comes from, what it gets wrong, and when the passive is the better choice',
  minutes: 20,

  intro: `
    <p>Lecture 2.10 described the forms of the passive. This lecture is about its reputation. “Use the active voice” is one of the most repeated pieces of writing advice in English, and German style manuals warn against the “Passivstil” of officialese. Both warnings contain a truth, and both are applied far too broadly, sometimes by people who cannot reliably recognise a passive.</p>`,

  concept: `
    <p>A passive moves the patient (the thing affected) into subject position and makes the agent optional: <em>The contract was signed (by both parties)</em>. That has three effects:</p>
    <ul>
      <li><strong>Topic and focus</strong>: the patient becomes the starting point; new information (the agent, if named) moves to the end (lecture 4.7).</li>
      <li><strong>Agent omission</strong>: the agent can be left out because it is unknown, obvious, irrelevant, or because the writer prefers not to say.</li>
      <li><strong>Distance</strong>: the passive sounds impersonal and formal.</li>
    </ul>
    <p>The objection to the passive concerns the second and third effects when they are used to avoid responsibility or to sound official. It does not touch the first, which is often the reason for choosing the passive.</p>`,

  german: [
    { title: 'Passivstil in der Kritik',
      html: `
        <p>Deutsche Stilratgeber kritisieren das Passiv vor allem in der Verwaltungssprache, wo es oft mit Nominalstil zusammentrifft (Lektion 8.2):</p>
        <div class="ex"><p lang="de" class="odd">Es wird darauf hingewiesen, dass Anträge nach Fristablauf nicht mehr bearbeitet werden können.</p><p lang="de">Bitte beachten Sie: Anträge, die nach Ablauf der Frist eingehen, können wir nicht mehr bearbeiten.</p></div>
        <p>Im Deutschen gibt es außer dem Passiv weitere Mittel, das Agens wegzulassen: <em>man</em> (<em>Man hat den Vertrag unterschrieben</em>), Reflexivkonstruktionen (<em>Das lässt sich leicht ändern</em>), <em>sein + zu</em> (<em>Der Antrag ist bis Freitag einzureichen</em>), Funktionsverbgefüge (<em>kommt zur Anwendung</em>). Wer das Passiv ersetzt, sollte prüfen, ob nicht nur ein anderes agensloses Mittel an seine Stelle tritt.</p>` },
    { title: 'Wann das Passiv gut ist',
      html: `
        <div class="ex"><p lang="de">Der Kölner Dom wurde 1880 vollendet. <span class="tnote">Agens unwichtig</span></p><p lang="de">Bei dem Einbruch wurden drei Laptops gestohlen. <span class="tnote">Agens unbekannt</span></p><p lang="de">Die Proben werden 24 Stunden bei 37 °C gelagert. <span class="tnote">Vorgang im Mittelpunkt (Fachtext)</span></p><p lang="de">Der Entwurf wurde vom Vorstand abgelehnt, nicht von den Aktionären. <span class="tnote">Agens als neue Information am Satzende</span></p></div>` }
  ],

  english: [
    { title: 'Where “avoid the passive” comes from',
      html: `
        <p>The advice appears in Strunk and White’s <em>The Elements of Style</em> (“Use the active voice”, from Strunk’s 1918 version onwards) and in Orwell’s rule of 1946 (“Never use the passive where you can use the active”). Microsoft Word’s grammar checker has long flagged passives, spreading the idea that a passive is an error.</p>
        <p>The linguist Geoffrey Pullum has documented that many critics misidentify passives: they label any sentence without a clear agent, or any form of <em>be</em>, as passive. In his analysis, three of the four examples of “passive” given in <em>The Elements of Style</em> are not passives at all; one is an existential sentence with <em>there were</em>. He has also pointed out that Orwell’s essay uses the passive freely.</p>
        <p class="src">Pullum, “50 Years of Stupid Grammar Advice”, <em>Chronicle of Higher Education</em> (2009); “Fear and Loathing of the English Passive”, <em>Language and Communication</em> 37 (2014).</p>` },
    { title: 'Recognising a passive',
      html: `
        <p>A passive in English has <em>be</em> or <em>get</em> + past participle, and an agent that could be added with <em>by</em>:</p>
        <div class="ex"><p lang="en" class="good">The report was written by the auditors. <span class="tnote">passive</span></p><p lang="en" class="good">Mistakes were made. <span class="tnote">passive (agent omitted)</span></p><p lang="en">The report is late. <span class="tnote">not passive: be + adjective</span></p><p lang="en">There is a problem. <span class="tnote">not passive: existential</span></p><p lang="en">The auditors have written the report. <span class="tnote">not passive: active perfect</span></p></div>
        <p>The zombie test (popularised by Rebecca Johnson): if you can add <em>by zombies</em> after the verb and the sentence still makes sense, it is a passive. <em>The report was written by zombies</em> works; <em>The report is late by zombies</em> does not.</p>` },
    { title: 'When the passive is the better choice',
      html: `
        <ul>
          <li>The agent is unknown, obvious or irrelevant: <em>The bridge was built in 1894. He was arrested yesterday.</em></li>
          <li>The patient is the topic, and the passive keeps it as subject across sentences: <em>The new policy was announced in May. It was drafted by …</em></li>
          <li>The agent is new or heavy information, better placed at the end: <em>The decision was taken by a committee of twelve independent experts.</em></li>
          <li>Scientific methods sections, where the procedure matters more than the person: <em>The samples were stored at 37 °C.</em> (Many journals now also accept or prefer <em>we</em>.)</li>
        </ul>
        <p>The passive is a problem when it conceals responsibility the reader needs to know about. The classic example is the political non-apology <em>Mistakes were made</em>.</p>` }
  ],

  contrast: `
    <div class="tablewrap"><table>
      <thead><tr><th>German</th><th>English</th></tr></thead>
      <tbody>
        <tr><td>Man hat mir gesagt, …</td><td>I was told …</td></tr>
        <tr><td>Hier wird nicht geraucht.</td><td>No smoking here. / Smoking is not allowed here.</td></tr>
        <tr><td>Es wurde bis spät diskutiert.</td><td>The discussion went on until late.</td></tr>
        <tr><td>Der Antrag ist bis Freitag einzureichen.</td><td>Applications must be submitted by Friday. / Please submit your application by Friday.</td></tr>
        <tr><td>Mir wurde gekündigt.</td><td>I was dismissed. / I was given notice.</td></tr>
      </tbody></table></div>
    <p class="contrast">German <em>man</em> often corresponds to an English passive, since English generic <em>one</em> is formal and rare. German impersonal passives (<em>Es wurde getanzt</em>) have no English passive equivalent; English uses a noun or an active verb with a general subject (<em>People danced; there was dancing</em>).</p>`,

  usage: `
    <ul>
      <li><strong>Frequency.</strong> Corpus counts (Biber et al., <em>Longman Grammar of Spoken and Written English</em>, 1999) show the passive is far more frequent in academic prose than in conversation or fiction. Its use is a genre feature, not a fault.</li>
      <li><strong>German.</strong> German has more agentless alternatives than English (<em>man</em>, <em>sich lassen</em>, <em>sein zu</em>), so a German text can avoid the passive while being just as impersonal.</li>
      <li><strong>Grammar checkers</strong> flag passives by pattern; they cannot judge whether the passive is the better choice. Their warnings are prompts to think, not corrections.</li>
    </ul>`,

  style: `
    <p>The useful question is not “active or passive?” but “who should be the subject of this sentence?” Choose the subject that is the topic of the passage, that the reader already knows about, or that carries the responsibility you want to make clear. Sometimes that is the agent (active), sometimes the patient (passive).</p>`,

  pitfalls: `
    <ul>
      <li>Do not call every <em>be</em> sentence or every agentless sentence a passive.</li>
      <li>Do not replace a well-chosen passive with an awkward active (<em class="odd">Someone built the bridge in 1894.</em>).</li>
      <li>In instructions and letters, prefer <em>you</em> and <em>we</em>: <em>Please submit</em> instead of <em>Applications are to be submitted</em>.</li>
      <li>German → English: <em>man</em> usually becomes a passive or <em>you/we/people</em>, rarely <em>one</em>.</li>
    </ul>`,

  summary: [
    'The passive moves the patient to subject position and makes the agent optional.',
    '“Avoid the passive” (Strunk and White, Orwell, Word) is advice against concealed agents and stiffness, not a grammatical rule.',
    'Critics often misidentify passives (Pullum 2014); test: add “by zombies”.',
    'Good uses: unknown or irrelevant agent, patient as topic, agent as new information at the end, methods sections.',
    'German has further agentless means (man, sich lassen, sein zu); avoiding the passive does not by itself make a text personal.'
  ],

  cards: [
    { id: 'passive-when', title: 'When to use the passive', tags: ['passive', 'Passiv', 'active voice', 'style'], html: `
      <p>Use it: agent unknown/irrelevant · patient is the topic · agent as new information at the end · procedures.<br>Avoid it: when it hides who is responsible · in instructions (use <em>you</em>) · in letters (use <em>we</em>).<br>Test: “by zombies”.</p>` }
  ],

  terms: [
    { en: 'active / passive voice', de: 'Aktiv / Passiv (Genus Verbi)', la: 'genus verbi: activum, passivum' },
    { en: 'agent', de: 'Agens', la: 'agens “acting”' },
    { en: 'patient', de: 'Patiens', la: 'patiens “suffering”' },
    { en: 'agentless passive', de: 'agensloses Passiv', la: '' },
    { en: 'existential sentence', de: 'Existenzsatz (es gibt …)', la: '' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', lang: 'en', prompt: 'Which is a passive?', options: ['The figures were checked twice.', 'The figures are wrong.', 'There were errors in the figures.'], answer: 0, explain: '<em>be</em> + past participle, agent addable (<em>by zombies</em>).' },
    { id: 'e2', type: 'mc', lang: 'en', prompt: 'Which is NOT a passive?', options: ['The auditors have finished the report.', 'The report was finished by the auditors.', 'The report got finished late.'], answer: 0, explain: 'Active perfect: <em>have</em> + participle.' },
    { id: 'e3', type: 'mc', lang: 'en', prompt: 'Where is the passive the better choice?', options: ['The museum was founded in 1753.', 'The invoice must be paid by you within 30 days.', 'It was decided by us to close the branch.'], answer: 0, explain: 'The founder is not the topic; in the others, <em>you</em> and <em>we</em> should be subjects.' },
    { id: 'e4', type: 'mc', lang: 'en', prompt: 'Natural English for <span lang="de">Man hat mir gesagt, dass …</span>', options: ['I was told that …', 'One has told me that …', 'It was said to me that …'], answer: 0, explain: 'German <em>man</em> often becomes an English passive.' },
    { id: 'e5', type: 'mc', lang: 'de', prompt: 'Which German sentence is agentless WITHOUT a passive?', options: ['Das lässt sich leicht ändern.', 'Das wird leicht geändert.', 'Das wurde geändert.'], answer: 0, explain: '<em>sich lassen</em> + infinitive is an alternative to the passive.' },
    { id: 'e6', type: 'mc', prompt: 'According to corpus studies, the passive is most frequent in:', options: ['academic prose', 'conversation', 'fiction'], answer: 0, keepOrder: true, explain: 'Biber et al. 1999.' }
  ]
});
