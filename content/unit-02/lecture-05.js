/*
 * Unit 2, lecture 5: past simple and present perfect. Content file only. German section in German.
 */
Grammaticus.addLecture({
  id: '2.5', unit: 2, number: 5,
  title: 'Past simple and present perfect',
  subtitle: 'When English looks back from now, and when it simply tells what happened',
  minutes: 30,

  intro: `
    <p>The English present perfect (<em>I have written</em>) looks like the German Perfekt and is used quite differently. In German the choice between Präteritum and Perfekt is mostly one of register (lecture 2.4); in English the choice between past simple and present perfect is one of meaning, and getting it wrong changes what you say. This is the single most frequent tense error of German speakers of English, and it survives long after everything else is fluent.</p>`,

  concept: [
    { title: 'Two ways of looking at the past',
      html: `
        <p>The <strong>past simple</strong> places an event in a past time that is finished and separate from now. The <strong>present perfect</strong> looks at a past event from the present: the event matters to now, or the time period it belongs to includes now.</p>
        <div class="ex"><p lang="en">I lost my keys. <span class="gl">a past event; perhaps found again since</span></p><p lang="en">I’ve lost my keys. <span class="gl">and I still haven’t got them</span></p><p lang="en">Shakespeare wrote 39 plays. <span class="gl">his writing life is over</span></p><p lang="en">She has written three novels. <span class="gl">she is alive and may write more</span></p></div>
        <p>In Reichenbach’s terms (lecture 2.2): the past simple has its reference point in the past, the present perfect at the moment of speaking. Everything else follows from this.</p>` }
  ],

  german: [
    { title: 'Perfekt ohne Gegenwartspflicht',
      html: `
        <p>Das deutsche Perfekt kann einen Gegenwartsbezug haben (<em>Ich habe meinen Schlüssel verloren</em> = er fehlt noch), muss es aber nicht. Es verbindet sich mit jeder Vergangenheitsangabe:</p>
        <div class="ex"><p lang="de">Ich habe ihn 2019 kennengelernt.</p><p lang="de">Goethe hat den Faust über Jahrzehnte geschrieben.</p></div>
        <p>Für das, was das Englische mit dem present perfect ausdrückt, verwendet das Deutsche je nach Bedeutung verschiedene Formen.</p>` },
    { title: 'seit und schon: das Präsens',
      html: `
        <p>Für einen Zustand oder eine Tätigkeit, die in der Vergangenheit begonnen hat und noch andauert, steht im Deutschen das <strong>Präsens</strong>:</p>
        <div class="ex"><p lang="de">Ich wohne seit zehn Jahren in London.</p><p lang="de">Wir kennen uns schon lange.</p><p lang="de">Wie lange arbeitest du schon hier?</p></div>
        <p>Das <strong>Perfekt mit <em>seit</em></strong> steht dagegen, wenn etwas abgeschlossen ist oder nicht stattgefunden hat:</p>
        <div class="ex"><p lang="de">Ich habe ihn seit Jahren nicht gesehen.</p><p lang="de">Seit dem Umzug habe ich drei Bewerbungen geschrieben.</p></div>` }
  ],

  english: [
    { title: 'Present perfect: the main uses',
      html: `
        <ol>
          <li><strong>A state or activity continuing up to now</strong>, with <em>for</em> or <em>since</em>:
            <div class="ex"><p lang="en">I’ve lived in London for ten years.</p><p lang="en">We’ve known each other since university.</p></div></li>
          <li><strong>Experience</strong> at some time in one’s life up to now, without a specific time:
            <div class="ex"><p lang="en">Have you ever been to Japan?</p><p lang="en">I’ve never seen so much rain.</p></div></li>
          <li><strong>A past event with a present result</strong>:
            <div class="ex"><p lang="en">I’ve lost my keys (so I can’t get in).</p><p lang="en">She’s left the company (she isn’t here any more).</p></div></li>
          <li><strong>News</strong>, recent events presented as new:
            <div class="ex"><p lang="en">The Prime Minister has resigned.</p><p lang="en">Have you heard? Anna’s got the job.</p></div></li>
          <li><strong>A time period that includes now</strong> (<em>today, this week, this year, so far, recently, lately</em>):
            <div class="ex"><p lang="en">I’ve written five emails this morning. <span class="gl">it is still morning</span></p><p lang="en">I wrote five emails this morning. <span class="gl">said in the afternoon</span></p></div></li>
        </ol>` },
    { title: 'Past simple: finished time',
      html: `
        <p>As soon as the time is fixed in the past, by an adverb, a question with <em>when</em>, or the context, the past simple is required:</p>
        <div class="ex"><p lang="en">I saw him yesterday / last week / in 2019 / two hours ago.</p><p lang="en">When did you arrive?</p><p lang="en">Did you see the match? <span class="gl">the match is over: a definite past event</span></p></div>
        <p>The typical sequence: news in the present perfect, details in the past simple.</p>
        <div class="ex"><p lang="en">The Prime Minister has resigned. She announced her decision in a statement outside Downing Street this morning and said …</p></div>` },
    { title: 'The progressive form',
      html: `
        <p>The <strong>present perfect progressive</strong> stresses the activity and its duration, often with a visible result:</p>
        <div class="ex"><p lang="en">I’ve been working here since 2015.</p><p lang="en">You look tired. Have you been working all night?</p><p lang="en">I’ve been reading your report. <span class="gl">activity, perhaps unfinished</span> · I’ve read your report. <span class="gl">finished</span></p></div>` }
  ],

  contrast: `
    <div class="tablewrap"><table>
      <thead><tr><th>German</th><th>English</th></tr></thead>
      <tbody>
        <tr><td>Ich wohne seit 2015 hier.</td><td>I’ve lived / been living here since 2015.</td></tr>
        <tr><td>Ich habe ihn gestern gesehen.</td><td>I saw him yesterday.</td></tr>
        <tr><td>Ich habe meinen Schlüssel verloren.</td><td>I’ve lost my key. (still lost)</td></tr>
        <tr><td>Warst du schon mal in Japan?</td><td>Have you ever been to Japan?</td></tr>
        <tr><td>Wann bist du angekommen?</td><td>When did you arrive?</td></tr>
        <tr><td>Ich habe ihn seit Jahren nicht gesehen.</td><td>I haven’t seen him for years.</td></tr>
      </tbody></table></div>
    <p class="contrast">The two classic errors run in opposite directions: German Präsens with <em>seit</em> carried into English (<span class="bad">I live here since 2015</span>), and German Perfekt with a time adverb carried into English (<span class="bad">I have seen him yesterday</span>). A useful test: if you can ask “when?” and the answer is a point in finished time, use the past simple.</p>`,

  usage: `
    <ul>
      <li><strong>American English</strong> uses the past simple more freely where British English requires the present perfect, especially with <em>just, already, yet</em>:
        <div class="ex"><p lang="en">%Did you eat yet? · I already did it. · I just got home. <span class="gl">normal American</span></p><p lang="en">Have you eaten yet? · I’ve already done it. · I’ve just got home. <span class="gl">British</span></p></div>
        Both are standard in their variety; in British writing the present perfect remains the norm.</li>
      <li><strong>The present perfect with a definite past time</strong> (<em>I’ve seen him yesterday</em>) is ungrammatical in standard English, but it occurs in some spoken varieties and, informally, in narrative sports commentary. In writing it reads as a learner’s error.</li>
      <li><strong><em>since</em> + past simple</strong>: <em>I’ve lived here since I moved to London</em>: the <em>since</em>-clause names a point, so it takes the past simple; the main clause takes the present perfect.</li>
    </ul>`,

  pitfalls: `
    <h3>Best practice</h3>
    <ul>
      <li>In emails: news or results in the present perfect (<em>I’ve attached the report; we’ve completed the audit</em>), details with times in the past simple (<em>we finished the fieldwork on Friday</em>).</li>
      <li>With <em>for/since</em> and an ongoing situation, always the perfect: <em>I’ve worked in finance for twelve years</em>.</li>
    </ul>
    <h3>Pitfalls</h3>
    <ul>
      <li><span class="bad">I work here since 2015.</span> → <em>I’ve worked / been working here since 2015.</em></li>
      <li><span class="bad">We have met last Tuesday.</span> → <em>We met last Tuesday.</em></li>
      <li><span class="bad">When have you sent it?</span> → <em>When did you send it?</em></li>
      <li><span class="odd">How long are you in London?</span> asks how long you will stay; <em>How long have you been in London?</em> asks how long you have been here.</li>
      <li>German <em>seit</em> ≠ English <em>since</em> for durations: <em>seit zehn Jahren</em> = <em>for ten years</em>; <em>since</em> takes a point in time (<em>since 2015</em>).</li>
    </ul>`,

  latin: `
    <p>The Latin perfect (<em>scripsi</em>) covers both “I wrote” and “I have written”; Latin grammarians distinguish a <em>perfectum historicum</em> (narrative) and a <em>perfectum praesens</em> (result now) by context, not by form.</p>
    <p class="latin">Latin, like German, uses the present for a state continuing from the past: <em>iam diu Romae habito</em> “I have been living in Rome for a long time now”.</p>`,

  summary: [
    'English past simple: finished past time, separate from now. Present perfect: the past viewed from now.',
    'Present perfect for: continuing states (for/since), experience (ever/never), present results, news, periods including now (today, this week).',
    'Any finished time reference (yesterday, ago, in 2019, when?) requires the past simple.',
    'German Präsens + seit/schon = English present perfect (simple or progressive): I’ve lived here for ten years.',
    'German Perfekt + past adverb = English past simple: I saw him yesterday.',
    'American English uses the past simple with just/already/yet; British English the present perfect.'
  ],

  cards: [
    { id: 'pp-ps', title: 'Present perfect or past simple?', tags: ['present perfect', 'past simple', 'since', 'for', 'seit'], html: `
      <p><strong>Present perfect</strong>: for/since (ongoing), ever/never, result now, news, today/this week (still running), just/already/yet (BrE).<br><strong>Past simple</strong>: yesterday, ago, last …, in 2019, when …?, a finished period, a story.</p>
      <p>seit + Präsens → present perfect: <em>Ich wohne seit 2015 hier = I’ve lived here since 2015.</em></p>` },
    { id: 'seit-since', title: 'seit = for or since', tags: ['seit', 'since', 'for'], html: `
      <p><em>seit</em> + duration → <strong>for</strong>: seit zehn Jahren = for ten years.<br><em>seit</em> + point in time → <strong>since</strong>: seit 2015 = since 2015.</p>` }
  ],

  terms: [
    { en: 'present perfect', de: '(kein direktes Gegenstück; oft Perfekt oder Präsens)', la: '' },
    { en: 'past simple', de: '(Präteritum oder Perfekt)', la: '' },
    { en: 'present perfect progressive', de: '(Präsens mit seit; Perfekt)', la: '' },
    { en: 'current relevance', de: 'Gegenwartsbezug', la: '' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: '<span lang="en">I ___ in London since 2014.</span>', options: ['have lived', 'live', 'lived', 'am living'], answer: 0, explain: 'A state continuing up to now with <em>since</em>: present perfect (or <em>have been living</em>).' },
    { id: 'e2', type: 'mc', prompt: '<span lang="en">We ___ the contract last Friday.</span>', options: ['signed', 'have signed', 'have been signing'], answer: 0, keepOrder: true, explain: '<em>last Friday</em> is finished time: past simple.' },
    { id: 'e3', type: 'mc', prompt: 'It is 11 a.m. You say:', options: ['I’ve had three meetings this morning.', 'I had three meetings this morning.'], answer: 0, keepOrder: true, explain: 'The morning is not over: present perfect. In the afternoon, the past simple would be right.' },
    { id: 'e4', type: 'gap', prompt: 'Translate <span lang="de">seit drei Jahren</span>: <span lang="en">I’ve worked here ___ three years.</span>', answers: ['for'], explain: '<em>seit</em> + a duration = <em>for</em>; <em>since</em> takes a point in time.' },
    { id: 'e5', type: 'mc', prompt: 'Which is correct?', options: ['When did you send the invoice?', 'When have you sent the invoice?'], answer: 0, keepOrder: true, explain: '<em>When?</em> asks for a point in the past: past simple.' },
    { id: 'e6', type: 'match', prompt: 'Match German to English.', pairs: [['Ich habe ihn seit Jahren nicht gesehen.', 'I haven’t seen him for years.'], ['Warst du schon mal in Rom?', 'Have you ever been to Rome?'], ['Ich habe ihn 2019 kennengelernt.', 'I met him in 2019.'], ['Wie lange bist du schon hier?', 'How long have you been here?']], explain: 'German Präsens with <em>schon/seit</em> and the experience question map to the present perfect; a dated event to the past simple.' },
    { id: 'e7', type: 'mc', prompt: '<span lang="en">Did you finish the report yet?</span>', options: ['Normal American English; British English prefers “Have you finished …?”', 'Wrong in every variety', 'The only correct form in British English', 'Old-fashioned'], answer: 0, explain: 'With <em>yet, already, just</em> American English often uses the past simple.' },
    { id: 'e8', type: 'mc', prompt: 'A colleague looks exhausted. You ask:', options: ['Have you been working all night?', 'Did you work all night?', 'Are you working all night?'], answer: 0, keepOrder: true, explain: 'An activity up to now with a visible result: present perfect progressive.' }
  ]
});
