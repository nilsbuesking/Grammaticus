/*
 * Unit 2, lecture 6: pluperfect and future perfect. Content file only. German section in German.
 */
Grammaticus.addLecture({
  id: '2.6', unit: 2, number: 6,
  title: 'Pluperfect and future perfect',
  subtitle: 'The past before the past, and the future seen as already done',
  minutes: 25,

  intro: `
    <p>Both languages can step back one stage in time: from a past point to something earlier (<em>I had left; ich war gegangen</em>), and from a future point to something already completed by then (<em>I will have left; ich werde gegangen sein</em>). The first is common and sometimes obligatory; the second is rare in both languages, which have easier ways to say the same.</p>`,

  concept: [
    { title: 'Anteriority',
      html: `
        <p>The perfect forms express <strong>anteriority</strong>: one event lies before a reference point. When the reference point is now, we have the present perfect; when it is in the past, the pluperfect; when it is in the future, the future perfect.</p>
        <div class="ex"><p lang="en">When we arrived, the film <u class="k">had started</u>. <span class="gl">start before arrival, both past</span></p><p lang="en">By Friday I <u class="k">will have finished</u>. <span class="gl">finish before Friday, both future</span></p></div>
        <p>Both languages also use the future perfect for a different job: a <strong>supposition about the past</strong> (<em>He’ll have missed the train; Er wird den Zug verpasst haben</em>).</p>` }
  ],

  german: [
    { title: 'Das Plusquamperfekt',
      html: `
        <p>Gebildet mit <em>hatte/war</em> + Partizip II. Es steht, wenn in einem vergangenen Zusammenhang etwas noch früher lag:</p>
        <div class="ex"><p lang="de">Als ich ankam, <u class="k">hatte</u> der Film schon <u class="k">begonnen</u>.</p><p lang="de">Nachdem sie die Zahlen <u class="k">geprüft hatte</u>, unterschrieb sie.</p><p lang="de">Er erzählte, dass er in Rom <u class="k">gewesen war</u>.</p></div>
        <p>Nach <em>nachdem</em> ist das Plusquamperfekt die Regel, wenn der Hauptsatz im Präteritum steht (steht der Hauptsatz im Präsens, folgt das Perfekt: <em>Nachdem ich gegessen habe, gehe ich.</em>). <span class="bad">Nachdem sie unterschrieb, ging sie</span> gilt als Fehler.</p>` },
    { title: 'Plusquamperfekt als „ferne Vergangenheit“',
      html: `
        <p>In der gesprochenen Sprache wird das Plusquamperfekt oft ohne Vorvergangenheit gebraucht, als eine Art abgeschlossene, ferne Vergangenheit:</p>
        <div class="ex"><p lang="de" class="odd">Ich hatte dich doch gestern angerufen.</p><p lang="de" class="odd">Wir waren letzten Sommer in Italien gewesen.</p></div>
        <p>Grammatiken beschreiben das als verbreitet in der Umgangssprache; im geschriebenen Standard ist hier das Perfekt oder Präteritum richtig: <em>Ich habe dich gestern angerufen.</em></p>` },
    { title: 'Das Futur II',
      html: `
        <p><em>werden</em> + Partizip II + <em>haben/sein</em>. Zwei Verwendungen:</p>
        <ul>
          <li><strong>Abgeschlossenheit in der Zukunft</strong>: <em>Bis Freitag werde ich den Bericht geschrieben haben.</em> Im Alltag fast immer ersetzt durch das Perfekt: <em>Bis Freitag habe ich den Bericht geschrieben.</em></li>
          <li><strong>Vermutung über Vergangenes</strong>: <em>Er wird den Zug verpasst haben.</em> (= wahrscheinlich hat er …) Diese Verwendung ist im Gespräch lebendiger als die zeitliche.</li>
        </ul>` }
  ],

  english: [
    { title: 'The past perfect',
      html: `
        <p><em>had</em> + past participle. Like the German Plusquamperfekt, it marks an event before a past reference point:</p>
        <div class="ex"><p lang="en">When we arrived, the film <u class="k">had started</u>. <span class="gl">we missed the beginning</span></p><p lang="en">When we arrived, the film <u class="k">started</u>. <span class="gl">it started as we arrived</span></p></div>
        <p>When the order of events is already clear from <em>after, before, as soon as</em>, the past perfect is optional:</p>
        <div class="ex"><p lang="en">After she <u class="k">checked</u> / <u class="k">had checked</u> the figures, she signed.</p></div>
        <p>It is obligatory where the past simple would change the meaning, and in reported speech after a past reporting verb when the reported event was earlier (<em>She said she had seen him</em>; lecture 2.12).</p>` },
    { title: 'Past perfect progressive',
      html: `
        <div class="ex"><p lang="en">I <u class="k">had been waiting</u> for an hour when the train finally came.</p></div>
        <p>German: <em>Ich wartete schon seit einer Stunde, als der Zug endlich kam</em> (Präteritum + <em>seit</em>, parallel to Präsens + <em>seit</em> for the present).</p>` },
    { title: 'The future perfect',
      html: `
        <p><em>will have</em> + past participle:</p>
        <div class="ex"><p lang="en">By the end of the year we <u class="k">will have opened</u> three new offices.</p><p lang="en">They’ll have landed by now. <span class="gl">supposition about the past</span></p></div>
        <p>Like the German Futur II, it is rare except in these two uses, and it is <strong>never</strong> used in time and conditional clauses: <em>when we have finished</em>, not <em>when we will have finished</em> (lecture 2.7).</p>` }
  ],

  contrast: `
    <ul>
      <li><strong>Pluperfect</strong>: very close in both languages. German requires it after <em>nachdem</em> with a past main clause; English allows the past simple after <em>after</em>.</li>
      <li><strong>Completed future</strong>: German prefers the plain Perfekt (<em>Bis Freitag habe ich es erledigt</em>); English uses the future perfect (<em>By Friday I’ll have done it</em>) or the present perfect in a time clause (<em>once I’ve done it</em>). The English sentence <span class="bad">By Friday I have done it</span> is wrong.</li>
      <li><strong>Supposition about the past</strong>: identical construction: <em>Er wird den Zug verpasst haben = He’ll have missed the train</em>. English also says <em>He must have missed the train</em>.</li>
      <li><strong>Waiting “since” in the past</strong>: German Präteritum + <em>seit</em> = English past perfect progressive.</li>
    </ul>`,

  usage: `
    <ul>
      <li>The colloquial German “distant past” Plusquamperfekt (<em>Ich hatte dich gestern angerufen</em>) is widespread in speech; it does not belong in formal writing, where the reader will look for an earlier reference point that is not there.</li>
      <li>English speakers increasingly leave out the past perfect where the order is clear; style guides accept this. It is never wrong to use it where an event is earlier.</li>
    </ul>`,

  pitfalls: `
    <ul>
      <li><strong>German: <em>nachdem</em> + Präteritum</strong>. <span class="bad">Nachdem er anrief, fuhr sie los.</span> → <em>Nachdem er angerufen hatte, fuhr sie los.</em></li>
      <li><strong>English: German Perfekt for a completed future</strong>. <span class="bad">Until Friday I have finished it.</span> → <em>I’ll have finished it by Friday.</em> Note also <em>by</em> (spätestens bis), not <em>until</em> (die ganze Zeit bis).</li>
      <li><strong>English: <em>until</em> or <em>by</em>?</strong> <em>I’ll be in the office until six</em> (continuously); <em>I’ll have the figures by six</em> (at the latest).</li>
    </ul>`,

  latin: `
    <p>Latin has both forms synthetically: <em>scripseram</em> (plusquamperfectum, “I had written”) and <em>scripsero</em> (futurum exactum, “I will have written”).</p>
    <p class="latin">Unlike English and German, Latin uses the future perfect regularly, above all in subordinate clauses: <em>Cum venero, tibi dicam</em> “When I come (literally: will have come), I will tell you.” The next lecture takes this up.</p>`,

  summary: [
    'Pluperfect/past perfect: an event before a past reference point (hatte begonnen; had started).',
    'German requires the Plusquamperfekt after nachdem with a past main clause; English allows the past simple after after.',
    'Colloquial German uses the Plusquamperfekt as a “distant past”; not in formal writing.',
    'Future perfect (Futur II; will have done): completed by a future point, or supposition about the past (He’ll have missed the train).',
    'German prefers the Perfekt for completed future (Bis Freitag habe ich es erledigt); English needs will have done.',
    'by = at the latest; until = continuously up to.'
  ],

  cards: [
    { id: 'by-until', title: 'by or until?', tags: ['bis', 'by', 'until'], html: `
      <p><strong>by</strong> = spätestens bis: <em>I’ll send it by Friday.</em><br><strong>until</strong> = die ganze Zeit bis: <em>I’ll be here until Friday.</em></p>` },
    { id: 'nachdem', title: 'nachdem: tense sequence', tags: ['nachdem', 'Plusquamperfekt', 'after'], html: `
      <p>Hauptsatz Präteritum → <em>nachdem</em> + Plusquamperfekt: <em>Nachdem er gegessen hatte, ging er.</em><br>Hauptsatz Präsens → <em>nachdem</em> + Perfekt: <em>Nachdem er gegessen hat, geht er.</em></p>` }
  ],

  terms: [
    { en: 'anteriority', de: 'Vorzeitigkeit', la: 'anterior “earlier”' },
    { en: 'simultaneity', de: 'Gleichzeitigkeit', la: '' },
    { en: 'posteriority', de: 'Nachzeitigkeit', la: '' },
    { en: 'past perfect progressive', de: '(Präteritum mit seit)', la: '' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', lang: 'de', prompt: '<span lang="de">Nachdem er den Vertrag ___, fuhr er nach Hause.</span>', options: ['unterschrieben hatte', 'unterschrieb', 'unterschrieben hat'], answer: 0, keepOrder: true, explain: 'Main clause in the Präteritum → <em>nachdem</em> + Plusquamperfekt.' },
    { id: 'e2', type: 'mc', prompt: 'Which says you missed the beginning?', options: ['When we arrived, the film had started.', 'When we arrived, the film started.'], answer: 0, keepOrder: true, explain: 'The past perfect puts the start before the arrival.' },
    { id: 'e3', type: 'mc', prompt: 'Translate <span lang="de">Bis Freitag habe ich den Bericht fertig.</span>', options: ['I’ll have finished the report by Friday.', 'Until Friday I have finished the report.', 'By Friday I have finished the report.'], answer: 0, keepOrder: true, explain: 'English needs the future perfect, and <em>by</em> for “at the latest”.' },
    { id: 'e4', type: 'match', prompt: 'Match.', pairs: [['Er wird den Zug verpasst haben.', 'He must have missed the train.'], ['Ich hatte schon gegessen.', 'I had already eaten.'], ['Ich wartete seit einer Stunde.', 'I had been waiting for an hour.'], ['Bis sechs bin ich im Büro.', 'I’ll be in the office until six.']], explain: 'Futur II as supposition; Plusquamperfekt; Präteritum + seit; bis = until for a continuous state.' },
    { id: 'e5', type: 'gap', prompt: '<span lang="en">Please send me the figures ___ Thursday at the latest.</span>', answers: ['by'], explain: '<em>by</em> = no later than.' },
    { id: 'e6', type: 'mc', lang: 'de', prompt: '<span lang="de">Ich hatte dich doch gestern angerufen!</span> In a formal text you would write …', options: ['Ich habe Sie gestern angerufen.', 'Ich hatte Sie gestern angerufen.', 'Ich werde Sie gestern angerufen haben.'], answer: 0, keepOrder: true, explain: 'Without an earlier reference point, the Plusquamperfekt is colloquial; the standard is the Perfekt (or Präteritum).' }
  ]
});
