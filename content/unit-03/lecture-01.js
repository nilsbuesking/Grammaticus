/*
 * Unit 3, lecture 1: prepositions and the cases they take. Content file only. German section in German.
 */
Grammaticus.addLecture({
  id: '3.1', unit: 3, number: 1,
  title: 'Prepositions and the cases they take',
  subtitle: 'in die Stadt or in der Stadt; at, on or in; why prepositions are the last thing a learner gets right',
  minutes: 30,

  intro: `
    <p>Prepositions are few, short and extremely frequent, and their use is largely idiomatic. German adds a layer English lacks: each preposition governs a case, and some govern two cases with a difference in meaning. This lecture covers case government, the two-way prepositions, the main spatial and temporal systems in both languages, and the prepositions fixed to verbs, adjectives and nouns.</p>`,

  concept: [
    { title: 'Prepositions and government',
      html: `
        <p>A preposition relates a noun phrase to the rest of the sentence: in space (<em>on the desk</em>), time (<em>in March</em>), cause (<em>because of the strike</em>) or more abstract relations (<em>according to the report</em>). In German it also <strong>governs</strong> (<em>regiert</em>) the case of that noun phrase.</p>
        <p>Many prepositions are not chosen for their meaning at all but fixed by a verb, adjective or noun: <em>warten auf, wait for; stolz auf, proud of; Interesse an, interest in</em>. These have to be learnt with the word, and they rarely match across languages.</p>` }
  ],

  german: [
    { title: 'Präpositionen nach Kasus',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th>Kasus</th><th>Präpositionen</th></tr></thead>
          <tbody>
            <tr><td>Akkusativ</td><td>durch, für, gegen, ohne, um, bis, entlang (nachgestellt: den Fluss entlang)</td></tr>
            <tr><td>Dativ</td><td>aus, bei, mit, nach, seit, von, zu, gegenüber, außer, ab, entgegen</td></tr>
            <tr><td>Genitiv</td><td>wegen, trotz, während, statt, aufgrund, innerhalb, außerhalb, angesichts, mittels, bezüglich … (Lektion 1.6)</td></tr>
            <tr><td>Akkusativ oder Dativ</td><td>an, auf, hinter, in, neben, über, unter, vor, zwischen</td></tr>
          </tbody></table></div>` },
    { title: 'Die Wechselpräpositionen',
      html: `
        <p class="rule">Bei räumlicher Bedeutung: Richtung, Ziel (<em>wohin?</em>) → Akkusativ; Ort, Lage (<em>wo?</em>) → Dativ.</p>
        <div class="ex"><p lang="de">Ich lege den Bericht auf <u class="k">den</u> Tisch. · Der Bericht liegt auf <u class="k">dem</u> Tisch.</p><p lang="de">Wir gehen in <u class="k">die</u> Stadt. · Wir sind in <u class="k">der</u> Stadt.</p><p lang="de">Sie hängt das Bild an <u class="k">die</u> Wand. · Das Bild hängt an <u class="k">der</u> Wand.</p></div>
        <p>Die Verbpaare <em>legen/liegen, stellen/stehen, setzen/sitzen, hängen/hängen</em> zeigen den Unterschied auch am Verb. In übertragener Bedeutung ist der Kasus fest und muss gelernt werden: <em>an etwas (Akk.) denken, an etwas (Dat.) teilnehmen, auf etwas (Akk.) warten, vor etwas (Dat.) Angst haben, über etwas (Akk.) sprechen</em>.</p>
        <p>Zeitlich steht meist der Dativ: <em>am Montag, in der Nacht, vor einer Woche, zwischen den Feiertagen</em>; Ausnahme <em>über</em> (Akk.): <em>übers Wochenende</em>.</p>` },
    { title: 'Verschmelzungen',
      html: `
        <p><em>am, beim, im, vom, zum, zur, ins, ans, aufs</em> sind standardsprachlich. Die Verschmelzung steht, wenn der Artikel nicht betont und nicht hinweisend ist: <em>Ich gehe zum Arzt</em> (irgendeinem, meinem gewohnten), aber <em>zu dem Arzt, den du empfohlen hast</em>. Weitere Formen (<em>hinters, übers, unterm, vorm</em>) sind umgangssprachlich, im Text aber nicht falsch.</p>` }
  ],

  english: [
    { title: 'Place: at, on, in',
      html: `
        <ul>
          <li><strong>at</strong> a point: <em>at the station, at the desk, at the corner, at work, at 10 Downing Street</em>;</li>
          <li><strong>on</strong> a surface or line: <em>on the table, on the wall, on the Thames, on the first floor, on the train</em>;</li>
          <li><strong>in</strong> an enclosed space or area: <em>in the office, in London, in the car, in the photo</em>.</li>
        </ul>
        <p>Movement: <em>to</em> (towards), <em>into</em> (entering), <em>onto</em> (onto a surface). English has no case to mark the difference, so it uses different prepositions: <em>in the room</em> (Lage) against <em>into the room</em> (Richtung).</p>` },
    { title: 'Time: at, on, in',
      html: `
        <div class="ex"><p lang="en">at 9 o’clock · at noon · at the weekend (BrE; AmE on the weekend) · at Christmas</p><p lang="en">on Monday · on 3 March · on my birthday · on Christmas Day</p><p lang="en">in March · in 2025 · in the morning · in the 1990s · in two weeks (= after two weeks)</p></div>
        <p><em>for</em> + duration, <em>since</em> + point (lecture 2.5); <em>by</em> = at the latest, <em>until</em> = continuously up to (lecture 2.6); <em>during</em> + event (<em>during the meeting</em>), <em>while</em> + clause.</p>` },
    { title: 'Prepositions at the end',
      html: `
        <p>English can leave a preposition at the end of a question, relative clause or passive (lecture 2.10):</p>
        <div class="ex"><p lang="en">Who are you waiting for? · the project I’m working on · This needs to be looked into.</p></div>
        <p>The supposed rule against it goes back to eighteenth-century grammarians (lecture 0.1); it is a stylistic preference, and the alternative is often stiffer: <em>the project on which I am working</em>.</p>` }
  ],

  contrast: `
    <div class="tablewrap"><table>
      <thead><tr><th>German</th><th>English</th></tr></thead>
      <tbody>
        <tr><td>warten auf</td><td>wait for</td></tr>
        <tr><td>abhängen von</td><td>depend on</td></tr>
        <tr><td>sich interessieren für / Interesse an</td><td>be interested in / interest in</td></tr>
        <tr><td>stolz auf</td><td>proud of</td></tr>
        <tr><td>verantwortlich für</td><td>responsible for</td></tr>
        <tr><td>teilnehmen an</td><td>take part in</td></tr>
        <tr><td>sich konzentrieren auf</td><td>concentrate on</td></tr>
        <tr><td>Angst haben vor</td><td>be afraid of</td></tr>
        <tr><td>bestehen aus / auf</td><td>consist of / insist on</td></tr>
        <tr><td>gut in (Mathe)</td><td>good at (maths)</td></tr>
        <tr><td>am Wochenende</td><td>at the weekend (BrE)</td></tr>
        <tr><td>im Zug / im Bus</td><td>on the train / on the bus</td></tr>
        <tr><td>auf dem Foto</td><td>in the photo</td></tr>
        <tr><td>in zwei Wochen</td><td>in two weeks / two weeks from now</td></tr>
        <tr><td>vor zwei Wochen</td><td>two weeks ago</td></tr>
      </tbody></table></div>
    <p class="contrast">English prepositions that look like German ones are often false friends: <em>bei = at / near / with / during</em>, never <em>by</em> in the sense of “at the home of” (<span class="bad">I stayed by my parents</span> → <em>with my parents / at my parents’</em>); <em>seit = since/for</em>; <em>über = about / over / via</em>.</p>`,

  usage: `
    <ul>
      <li><strong>Case drift</strong>: in speech some German prepositions change case (<em>wegen dem</em>, lecture 1.6; <em>entlang des Flusses / den Fluss entlang / entlang dem Fluss</em>, all recorded with differences in position). The Wechselpräpositionen are stable: errors there are learner errors, not change.</li>
      <li><strong><em>different from / to / than</em></strong>: <em>from</em> is the safe standard; British English also uses <em>different to</em>, American English <em>different than</em>. All three have been criticised; all are used by good writers.</li>
      <li><strong><em>at</em> or <em>on the weekend</em></strong>: a British–American difference; <em>on</em> is spreading in British usage.</li>
    </ul>`,

  pitfalls: `
    <ul>
      <li><span class="bad">I’m waiting on the bus.</span> (to mean <em>for</em>; <em>wait on</em> = serve, or AmE colloquial) → <em>waiting for the bus</em>.</li>
      <li><span class="bad">It depends from the market.</span> → <em>depends on</em>.</li>
      <li><span class="bad">I live in London since 2014.</span> → <em>I’ve lived in London since 2014.</em></li>
      <li>German: <span class="bad">Ich gehe in der Stadt.</span> → <em>in die Stadt</em> (Richtung).</li>
      <li>German: <span class="odd">Ich bin interessiert in …</span> (from English) → <em>Ich interessiere mich für … / Ich habe Interesse an …</em></li>
    </ul>`,

  latin: `
    <p>Latin prepositions also govern cases, and a few take two cases with the same spatial logic as German: <em>in</em> + accusative for direction (<em>in urbem</em> “into the city”), <em>in</em> + ablative for location (<em>in urbe</em> “in the city”). The German Wechselpräpositionen preserve a distinction that is at least as old as the common ancestor of Latin and German.</p>`,

  summary: [
    'German prepositions govern case: Akk. (durch, für, gegen, ohne, um), Dat. (aus, bei, mit, nach, seit, von, zu), Gen. (wegen, trotz, während …).',
    'Wechselpräpositionen (an, auf, hinter, in, neben, über, unter, vor, zwischen): wohin? Akkusativ, wo? Dativ.',
    'English marks direction by different prepositions (in/into, on/onto, to) rather than case.',
    'English place and time: at (point), on (surface, day/date), in (space, month/year/part of day).',
    'Prepositions fixed to verbs and adjectives rarely match: warten auf / wait for, stolz auf / proud of, abhängen von / depend on.',
    'English allows a final preposition (Who are you waiting for?); the objection is an 18th-century style preference.'
  ],

  cards: [
    { id: 'wechsel', title: 'Wechselpräpositionen', tags: ['Akkusativ', 'Dativ', 'wohin', 'wo'], html: `
      <p>an, auf, hinter, in, neben, über, unter, vor, zwischen.<br><strong>wohin?</strong> → Akk. (Ich lege es auf den Tisch.) · <strong>wo?</strong> → Dat. (Es liegt auf dem Tisch.)<br>legen/liegen, stellen/stehen, setzen/sitzen, hängen/hängen.</p>` },
    { id: 'at-on-in', title: 'at / on / in', tags: ['at', 'on', 'in', 'time', 'place'], html: `
      <p><strong>Place</strong>: at a point · on a surface/line (on the train, on the first floor) · in a space/area.<br><strong>Time</strong>: at 9, at the weekend (BrE) · on Monday, on 3 March · in March, in 2025, in the morning.</p>` },
    { id: 'prep-verbs', title: 'Verb + preposition DE ↔ EN', tags: ['warten auf', 'depend on', 'prepositional verb'], html: `
      <p>warten auf – wait for · abhängen von – depend on · sich interessieren für – be interested in · teilnehmen an – take part in · stolz auf – proud of · Angst vor – afraid of · bestehen aus – consist of · bestehen auf – insist on · gut in – good at.</p>` }
  ],

  terms: [
    { en: 'preposition', de: 'Präposition, Verhältniswort', la: 'praepositio' },
    { en: 'case government', de: 'Rektion', la: 'regere' },
    { en: 'two-way preposition', de: 'Wechselpräposition', la: '' },
    { en: 'contraction (preposition + article)', de: 'Verschmelzung (am, im, zum)', la: '' },
    { en: 'stranded preposition', de: '(gestrandete Präposition; im Deutschen nur umgangssprachlich: da weiß ich nichts von)', la: '' },
    { en: 'prepositional verb', de: 'Verb mit Präpositionalobjekt', la: '' }
  ],

  exercises: [
    { id: 'e1', type: 'gap', lang: 'de', prompt: '<span lang="de">Ich stelle die Akten in ___ Schrank.</span>', answers: ['den'], cs: true, explain: 'Direction (wohin?): accusative.' },
    { id: 'e2', type: 'gap', lang: 'de', prompt: '<span lang="de">Die Akten stehen in ___ Schrank.</span>', answers: ['dem'], cs: true, explain: 'Location (wo?): dative (or <em>im Schrank</em>).' },
    { id: 'e3', type: 'match', prompt: 'Match the German to the English preposition.', pairs: [['warten auf', 'wait for'], ['abhängen von', 'depend on'], ['teilnehmen an', 'take part in'], ['stolz auf', 'proud of'], ['Angst vor', 'afraid of']], explain: 'Prepositions fixed to verbs and adjectives have to be learnt as pairs.' },
    { id: 'e4', type: 'mc', prompt: '<span lang="en">The meeting is ___ Monday ___ 10 o’clock.</span>', options: ['on … at', 'at … on', 'in … at'], answer: 0, keepOrder: true, explain: 'Days take <em>on</em>, clock times <em>at</em>.' },
    { id: 'e5', type: 'mc', prompt: 'Translate <span lang="de">Ich habe bei meinen Eltern übernachtet.</span>', options: ['I stayed the night at my parents’.', 'I stayed the night by my parents.'], answer: 0, keepOrder: true, explain: '<em>bei</em> (at someone’s home) = <em>at …’s</em> or <em>with</em>, not <em>by</em>.' },
    { id: 'e6', type: 'mc', prompt: 'Which is natural English?', options: ['Who are you waiting for?', 'For whom are you waiting for?', 'For who are you waiting?'], answer: 0, keepOrder: true, explain: 'A final preposition is normal; formal: <em>For whom are you waiting?</em>' },
    { id: 'e7', type: 'mc', prompt: 'Translate <span lang="de">im Zug</span>', options: ['on the train', 'in the train'], answer: 0, keepOrder: true, explain: 'Public transport you can walk around in: <em>on</em> (on the bus, on the plane); a car: <em>in</em>.' }
  ]
});
