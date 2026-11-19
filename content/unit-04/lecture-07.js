/*
 * Unit 4, lecture 7: information structure and emphasis. Content file only. German section in German.
 */
Grammaticus.addLecture({
  id: '4.7', unit: 4, number: 7,
  title: 'Information structure and emphasis',
  subtitle: 'Given before new, the end as the place of weight; German uses the Vorfeld, English the cleft and the passive',
  minutes: 30,

  intro: `
    <p>A sentence can be grammatical and still feel wrong in its context, because it presents the information in the wrong order. Both languages tend to start from what the reader already knows and end with what is new and weighty. German achieves this largely by moving constituents, since its word order is flexible; English, with fixed SVO order, uses constructions: the passive, the cleft sentence, <em>there</em> and extraposition. This lecture explains the principles and the tools, and closes the unit on syntax.</p>`,

  concept: [
    { title: 'Given and new',
      html: `
        <p>Linguists of the Prague School (Vilém Mathesius and successors, from the 1920s) described sentences in terms of <strong>theme</strong> (what the sentence is about, usually given) and <strong>rheme</strong> (what is said about it, usually new). Readers process text most easily when each sentence starts from given information and ends with new information that the next sentence can pick up:</p>
        <div class="ex"><p lang="en">The board met on Monday. <u class="k">The meeting</u> lasted three hours. <u class="k">Most of that time</u> was spent on the budget.</p></div>
        <p>Two further principles, described for English by Quirk and colleagues: <strong>end focus</strong> (the main stress and the most important information come at the end) and <strong>end weight</strong> (long, heavy constituents go to the end).</p>` }
  ],

  german: [
    { title: 'Das Vorfeld',
      html: `
        <p>Das Vorfeld ist im Deutschen die Hauptstelle für Anknüpfung und Kontrast:</p>
        <ul>
          <li><strong>Anknüpfung</strong>: Das Bekannte, oft aus dem Vorsatz, kommt nach vorn: <em>Der Vorstand traf sich am Montag. <u class="k">Die Sitzung</u> dauerte drei Stunden.</em></li>
          <li><strong>Rahmen</strong>: Zeit- und Ortsangaben setzen den Rahmen: <em><u class="k">Im dritten Quartal</u> stieg der Umsatz.</em></li>
          <li><strong>Kontrast</strong>: Betonte Elemente im Vorfeld stehen im Gegensatz zu etwas anderem: <em><u class="k">Den Bericht</u> habe ich gelesen (die Anlagen noch nicht).</em></li>
        </ul>` },
    { title: 'Mittelfeld und Betonung',
      html: `
        <p>Im Mittelfeld steht Bekanntes vor Neuem (Lektion 4.1), und der Hauptakzent liegt meist auf dem letzten Satzglied vor der rechten Klammer. Durch Umstellung verschiebt sich der Schwerpunkt:</p>
        <div class="ex"><p lang="de">Sie hat dem Kunden <u class="k">den Vertrag</u> geschickt. <span class="gl">Neu: was?</span></p><p lang="de">Sie hat den Vertrag <u class="k">dem Kunden</u> geschickt. <span class="gl">Neu: wem?</span></p></div>` },
    { title: 'Spaltsätze',
      html: `
        <p>Spaltsätze (<em>Es war der Vorstand, der …</em>) gibt es im Deutschen, sie sind aber seltener als im Englischen, weil Vorfeld und Betonung dieselbe Arbeit leisten: <em>Der Vorstand hat das entschieden</em> (mit Betonung auf <em>Vorstand</em>). Häufiger ist der Sperrsatz mit <em>was</em>: <em>Was mich stört, ist der Ton.</em></p>` }
  ],

  english: [
    { title: 'Tools for fixed word order',
      html: `
        <ol>
          <li><strong>Passive</strong>: makes the known thing the subject (lecture 2.10): <em>The report arrived on Monday. It was approved by the board on Tuesday.</em></li>
          <li><strong>it-cleft</strong>: picks out one element for contrast: <em>It was the board that approved the plan (not the committee).</em> · <em>It was only in March that we noticed.</em></li>
          <li><strong>wh-cleft (pseudo-cleft)</strong>: builds up to the new information: <em>What we need is a clear plan.</em> · <em>What happened was that the bank withdrew.</em></li>
          <li><strong>there-construction</strong>: introduces new entities: <em>There are three problems with the proposal.</em></li>
          <li><strong>Extraposition</strong>: moves a heavy clause to the end: <em>It is clear that the figures need revising</em> rather than <em>That the figures need revising is clear</em>.</li>
          <li><strong>Fronting</strong>: marked, for contrast or linking: <em>This I cannot accept. Most of these risks we can manage.</em></li>
          <li><strong>Heavy-NP shift</strong>: <em>We discussed with the auditors all the issues raised in the draft report.</em></li>
        </ol>` },
    { title: 'Stress',
      html: `
        <p>In speech English moves stress freely to mark contrast: <em>I sent the report</em> (not someone else) / <em>I sent the report</em> (not the summary). In writing, where stress is invisible, clefts and fronting do the job, and italics occasionally.</p>` }
  ],

  contrast: `
    <ul>
      <li><strong>German moves, English constructs</strong>: <em>Den Bericht hat der Vorstand genehmigt</em> → <em>It was the board that approved the report</em> or <em>The report was approved by the board</em>, depending on what is contrasted or given.</li>
      <li><strong>Clefts</strong>: much more frequent in English; a German text full of <em>Es ist …, das …</em> sounds translated.</li>
      <li><strong>Frame adverbials</strong>: German puts them in the Vorfeld with inversion; English fronts them without inversion (<em>In the third quarter, sales rose</em>).</li>
      <li><strong>Extraposition</strong>: both: <em>Es ist klar, dass … = It is clear that …</em></li>
    </ul>
    <p class="contrast">Translating German Vorfeld objects literally into English produces fronting that sounds marked or poetic (<em>The report approved the board</em> is impossible; <em>The report the board approved</em> is marked). Use the passive or a cleft instead.</p>`,

  style: `
    <ul>
      <li><strong>Old to new</strong>: start each sentence with something the reader can connect to the previous one. This is the single most effective device for readable prose in both languages.</li>
      <li><strong>Save the punch for the end</strong>: the end of an English sentence and the end of a German Mittelfeld carry the weight.</li>
      <li><strong>Do not overuse clefts</strong> in English (<em>It is … that</em> in every paragraph reads as emphatic throughout, and so as nothing).</li>
      <li><strong>German Vorfeld variety</strong>: not every sentence should start with the subject; a frame adverbial or a linking element in the Vorfeld gives German prose flow.</li>
    </ul>`,

  pitfalls: `
    <ul>
      <li><span class="odd">Many problems has the proposal.</span> → <em>The proposal has many problems / There are many problems with the proposal.</em></li>
      <li><span class="odd">That we need more time is obvious.</span> → <em>It is obvious that we need more time.</em></li>
      <li>German: <span class="odd">Es ist der Vorstand, der das entschieden hat.</span> in place of a simple stressed subject → <em>Das hat der Vorstand entschieden.</em></li>
    </ul>`,

  latin: `
    <p>Latin, with free word order, works like German: emphatic or contrastive words go first or last, and the verb’s position carries style rather than grammar. Classical rhetoric (lecture 8.6) named devices of order such as hyperbaton, separating words that belong together to create emphasis.</p>`,

  summary: [
    'Theme–rheme (Prague School): start from the given, end with the new; end focus and end weight.',
    'German uses the Vorfeld for linking, framing and contrast, and Mittelfeld order for given-before-new.',
    'English uses the passive, it-clefts, wh-clefts, there-constructions, extraposition and fronting to arrange information within fixed SVO.',
    'Clefts are frequent in English, rarer in German, where the Vorfeld and stress do the work; the wh-cleft (Was mich stört, ist …) is common in both.',
    'Extraposition of heavy clauses: Es ist klar, dass … = It is clear that …',
    'Old-to-new ordering is the most effective general device for readable prose.'
  ],

  cards: [
    { id: 'info-tools', title: 'Arranging information', tags: ['cleft', 'Vorfeld', 'given new', 'emphasis'], html: `
      <p><strong>German</strong>: Vorfeld (link, frame, contrast), Mittelfeld order, stress, Was … ist.<br><strong>English</strong>: passive, it-cleft (It was the board that …), wh-cleft (What we need is …), there is/are, extraposition (It is clear that …), fronting (This I cannot accept).</p>` }
  ],

  terms: [
    { en: 'information structure', de: 'Informationsstruktur', la: '' },
    { en: 'theme / rheme', de: 'Thema / Rhema', la: 'Greek thema, rhēma' },
    { en: 'given / new', de: 'bekannt / neu', la: '' },
    { en: 'end focus / end weight', de: 'Endfokus / Achtergewicht', la: '' },
    { en: 'it-cleft', de: 'Spaltsatz', la: '' },
    { en: 'wh-cleft (pseudo-cleft)', de: 'Sperrsatz (Pseudospaltsatz)', la: '' },
    { en: 'extraposition', de: 'Extraposition', la: '' },
    { en: 'fronting (topicalisation)', de: 'Topikalisierung, Voranstellung', la: '' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: 'Contrast: the board, not the committee, approved the plan.', options: ['It was the board that approved the plan.', 'The plan approved the board.', 'Approved the board the plan.'], answer: 0, keepOrder: true, explain: 'English uses an it-cleft for contrastive focus.' },
    { id: 'e2', type: 'mc', prompt: 'More natural English:', options: ['It is obvious that we need more time.', 'That we need more time is obvious.'], answer: 0, keepOrder: true, explain: 'Extraposition: the heavy clause goes to the end.' },
    { id: 'e3', type: 'mc', prompt: 'The text is about a report. Next sentence:', options: ['It was approved by the board on Tuesday.', 'The board approved it on Tuesday.'], answer: 0, keepOrder: true, explain: 'Both are correct; the passive keeps the topic (the report) as subject. Context decides; here the report is the theme.' },
    { id: 'e4', type: 'mc', lang: 'de', prompt: 'Natural German for contrast on <em>Vorstand</em>:', options: ['Das hat der Vorstand entschieden.', 'Es ist der Vorstand, der das entschieden hat.'], answer: 0, keepOrder: true, explain: 'German uses stress and order; the cleft is possible but often sounds translated.' },
    { id: 'e5', type: 'mc', prompt: 'Introduce new information:', options: ['There are three problems with the proposal.', 'Three problems are with the proposal.'], answer: 0, keepOrder: true, explain: 'The <em>there</em>-construction introduces new entities.' },
    { id: 'e6', type: 'match', prompt: 'Match the construction.', pairs: [['What we need is a plan.', 'wh-cleft'], ['It was in March that we noticed.', 'it-cleft'], ['It is clear that costs will rise.', 'extraposition'], ['This I cannot accept.', 'fronting']], explain: 'English tools for information structure.' }
  ]
});
