/*
 * Unit 3, lecture 2: adverbs and modal particles. Content file only. German section in German.
 */
Grammaticus.addLecture({
  id: '3.2', unit: 3, number: 2,
  title: 'Adverbs and modal particles',
  subtitle: 'ja, doch, halt, mal: the small German words English has no class for; eventually, actually and quite',
  minutes: 30,

  intro: `
    <p>Adverbs modify verbs, adjectives or whole sentences: <em>quickly, very, unfortunately</em>. German has, in addition, a group of small, unstressed words that change the tone of a sentence without changing its content: <em>Komm doch mal vorbei</em> is a warm invitation, <em>Komm vorbei</em> a bare instruction. These modal particles have no English counterpart as a word class; English achieves their effects with tags, intonation and phrasing. This lecture covers adverb types and positions, the particles and how to render them, and the adverbs that are false friends.</p>`,

  concept: [
    { title: 'Kinds of adverb',
      html: `
        <ul>
          <li><strong>place</strong>: <em>hier, dort, oben; here, there, upstairs</em>;</li>
          <li><strong>time and frequency</strong>: <em>gestern, oft, schon; yesterday, often, already</em>;</li>
          <li><strong>manner</strong>: <em>schnell, gern; quickly, gladly</em>;</li>
          <li><strong>degree</strong>: <em>sehr, ziemlich; very, fairly</em>;</li>
          <li><strong>sentence adverbs</strong>, commenting on the whole statement: <em>leider, hoffentlich, vermutlich; unfortunately, hopefully, presumably</em>.</li>
        </ul>
        <p><strong>Modal particles</strong> (<em>Modalpartikeln, Abtönungspartikeln</em>) are different: they are not part of the content, cannot be questioned or moved to the front, are unstressed, and express the speaker’s attitude or assumptions about what the hearer knows.</p>` }
  ],

  german: [
    { title: 'Pronominaladverbien und hin/her',
      html: `
        <ul>
          <li><strong>da(r)- und wo(r)- + Präposition</strong> ersetzen Präposition + Pronomen für Sachen: <em>Ich freue mich darauf. Worüber sprecht ihr? Damit habe ich nicht gerechnet.</em> Für Personen steht Präposition + Pronomen: <em>Ich warte auf ihn.</em></li>
          <li>Die Trennung <span class="odd">Da weiß ich nichts von</span> (statt <em>Davon weiß ich nichts</em>) ist norddeutsch und umgangssprachlich.</li>
          <li><strong>hin/her</strong>: <em>hin</em> vom Sprecher weg, <em>her</em> zum Sprecher hin: <em>Komm herein! Geh hinein!</em> Umgangssprachlich verschmolzen zu <em>rein, raus, runter</em> ohne Unterscheidung.</li>
        </ul>` },
    { title: 'Die Modalpartikeln',
      html: `
        <p>Die wichtigsten Partikeln, jeweils mit ihrer typischen Wirkung:</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Partikel</th><th>Wirkung · Beispiel</th></tr></thead>
          <tbody>
            <tr><td>ja</td><td>Bekanntes, Übereinstimmung; Erstaunen<span class="tnote">Das wissen Sie ja. · Das ist ja interessant!</span></td></tr>
            <tr><td>doch</td><td>Widerspruch, Erinnerung, Nachdruck in Aufforderungen<span class="tnote">Das habe ich doch gesagt. · Komm doch mit!</span></td></tr>
            <tr><td>halt / eben</td><td>Unabänderliches, Resignation (halt eher süddeutsch)<span class="tnote">Das ist halt so. · Dann machen wir es eben morgen.</span></td></tr>
            <tr><td>mal</td><td>Abschwächung, Beiläufigkeit<span class="tnote">Kannst du mal kurz kommen? · Schau mal.</span></td></tr>
            <tr><td>denn</td><td>in Fragen: Interesse, Anteilnahme, Ungeduld<span class="tnote">Was ist denn los? · Wo warst du denn?</span></td></tr>
            <tr><td>wohl / schon</td><td>Vermutung; Zuversicht<span class="tnote">Er ist wohl krank. · Das wird schon klappen.</span></td></tr>
            <tr><td>eigentlich</td><td>beiläufige Frage; Einschränkung<span class="tnote">Wie spät ist es eigentlich?</span></td></tr>
            <tr><td>etwa</td><td>Frage mit erwartetem Nein, oft ungläubig<span class="tnote">Bist du etwa krank?</span></td></tr>
            <tr><td>ruhig</td><td>Erlaubnis, Ermunterung<span class="tnote">Fragen Sie ruhig.</span></td></tr>
            <tr><td>bloß / nur</td><td>Dringlichkeit, Warnung<span class="tnote">Was hat er bloß vor? · Mach das bloß nicht!</span></td></tr>
          </tbody></table></div>
        <p>Partikeln stehen im Mittelfeld, unbetont, meist vor dem Neuen im Satz, und lassen sich kombinieren: <em>Komm doch mal vorbei. Das ist ja wohl die Höhe.</em></p>
        <p>Lange galten sie als „Flickwörter“ ohne Bedeutung. Die systematische Erforschung begann mit Harald Weydts Studie <em>Abtönungspartikel</em> (1969); seitdem sind sie ein großes Thema der Gesprächsforschung. Je umgangssprachlicher ein Text, desto mehr Partikeln enthält er.</p>
        <p class="src">Weydt (1969); Forschungsüberblicke in Linguistik online.</p>` }
  ],

  english: [
    { title: 'Adverb position',
      html: `
        <ul>
          <li><strong>Frequency</strong> adverbs go before the main verb, after <em>be</em> and auxiliaries: <em>I usually arrive at nine. She is always late. We have never met.</em></li>
          <li><strong>Manner, place, time</strong> usually go at the end, in that order: <em>She spoke clearly at the meeting yesterday.</em></li>
          <li><strong>Not between verb and object</strong>: <em>I like coffee very much</em>, not <span class="bad">I like very much coffee</span>; <em>She speaks German fluently</em>, not <span class="bad">She speaks fluently German</span>.</li>
        </ul>` },
    { title: 'Sentence adverbs and hopefully',
      html: `
        <p><em>Hopefully</em> as a sentence adverb (<em>Hopefully, the figures will improve</em> = it is hoped) was attacked by American usage commentators from the 1960s, on the grounds that it should only mean “in a hopeful manner”. The objection ignored the many parallel adverbs (<em>fortunately, presumably, clearly</em>) and has largely collapsed; the Associated Press dropped it from its stylebook in 2012.</p>` },
    { title: 'Degree: quite, rather, fairly',
      html: `
        <p><em>quite</em> is ambiguous: in British English with gradable adjectives it usually means “fairly, moderately” (<em>quite good</em> = ganz gut, not more); in American English it more often means “very”. With extreme adjectives it means “completely” everywhere (<em>quite impossible, quite right</em>). <em>rather</em> (more than expected) and <em>fairly</em> (moderately) are less ambiguous.</p>` },
    { title: 'How English does what particles do',
      html: `
        <ul>
          <li><strong>question tags</strong>: <em>You know him, don’t you?</em> (≈ <em>ja, doch</em>)</li>
          <li><strong>emphatic do</strong>: <em>Do come in! I did tell you.</em> (≈ <em>doch</em>)</li>
          <li><strong>just</strong>: <em>Could you just sign here?</em> (≈ <em>mal</em>); <em>That’s just how it is.</em> (≈ <em>halt</em>)</li>
          <li><strong>after all, anyway, then, I suppose, surely</strong>: <em>He is the boss, after all.</em> (≈ <em>ja</em>); <em>What’s the matter, then?</em> (≈ <em>denn</em>)</li>
          <li><strong>intonation</strong>, which carries much of what German puts into particles.</li>
        </ul>` }
  ],

  contrast: `
    <div class="tablewrap"><table>
      <thead><tr><th>German</th><th>English</th></tr></thead>
      <tbody>
        <tr><td>Komm doch mal vorbei!</td><td>Why don’t you drop by?</td></tr>
        <tr><td>Das ist ja interessant.</td><td>Well, that’s interesting.</td></tr>
        <tr><td>Das ist halt so.</td><td>That’s just the way it is.</td></tr>
        <tr><td>Was ist denn los?</td><td>What’s the matter?</td></tr>
        <tr><td>Das wird schon klappen.</td><td>I’m sure it’ll work out.</td></tr>
        <tr><td>Bist du etwa krank?</td><td>You’re not ill, are you?</td></tr>
        <tr><td>Fragen Sie ruhig.</td><td>Feel free to ask.</td></tr>
        <tr><td>Sie wissen ja, dass …</td><td>As you know, …</td></tr>
        <tr><td>Ich habe es dir doch gesagt!</td><td>I did tell you! / I told you!</td></tr>
      </tbody></table></div>
    <p><strong>False friends among adverbs</strong>:</p>
    <div class="tablewrap"><table>
      <thead><tr><th>German</th><th>English</th></tr></thead>
      <tbody>
        <tr><td>aktuell</td><td>current(ly), not actually</td></tr>
        <tr><td>eventuell</td><td>possibly, not eventually</td></tr>
        <tr><td>also</td><td>so, therefore, not also</td></tr>
        <tr><td>eigentlich / tatsächlich</td><td>actually</td></tr>
        <tr><td>schließlich</td><td>eventually / after all</td></tr>
        <tr><td>bald</td><td>soon, not bald</td></tr>
        <tr><td>sympathisch</td><td>likeable, not sympathetic</td></tr>
      </tbody></table></div>
    <p class="contrast">A German speaker writing English without particles can sound abrupt; one translating every particle sounds strange. The aim is the equivalent effect, usually by restructuring the sentence.</p>`,

  usage: `
    <ul>
      <li><strong>Particles in writing</strong>: rare in formal texts, normal in emails and letters between people who know each other. <em>Könnten Sie mir bitte noch einmal die Zahlen schicken?</em> (with <em>noch einmal</em>) is softer than without; <em>mal</em> alone is informal.</li>
      <li><strong><em>halt</em></strong> is mainly southern; northern speakers use <em>eben</em>; both are standard in speech.</li>
      <li><strong><em>hopefully</em></strong>: accepted by current usage guides; a few conservative readers still object.</li>
    </ul>`,

  pitfalls: `
    <ul>
      <li><span class="bad">Actually I work at a bank.</span> meaning <em>aktuell</em> → <em>Currently / At the moment I work at a bank.</em></li>
      <li><span class="bad">We will eventually meet next week.</span> meaning <em>eventuell</em> → <em>We may meet next week.</em></li>
      <li><span class="bad">I like very much the proposal.</span> → <em>I like the proposal very much.</em></li>
      <li><span class="odd">Send me the file.</span> as a request in an email can sound curt → <em>Could you (just) send me the file?</em></li>
      <li>German: stressing a particle changes it into an adverb: <em>Das ist <u class="k">ja</u> interessant</em> (unstressed, particle) against <em>JA, das ist interessant</em> (answer).</li>
    </ul>`,

  latin: `
    <p>Latin, too, has particles of attitude, especially in questions: <em>-ne</em> (open question), <em>nonne</em> (expects yes: “isn’t it?”, German <em>doch</em>), <em>num</em> (expects no: German <em>etwa</em>):</p>
    <div class="ex"><p lang="la">Num aegrotas?</p><p class="gl">Bist du etwa krank? · You’re not ill, are you?</p><p lang="la">Nonne vides?</p><p class="gl">Siehst du (denn) nicht? · Don’t you see?</p></div>`,

  summary: [
    'Adverbs: place, time/frequency, manner, degree, sentence adverbs (leider, hopefully).',
    'German modal particles (ja, doch, halt, eben, mal, denn, wohl, schon, etwa, ruhig) are unstressed, in the Mittelfeld, and express attitude; Weydt (1969) began their systematic study.',
    'English renders particles by tags, emphatic do, just, after all, intonation, or restructuring (Why don’t you …?).',
    'English adverb position: frequency before the main verb; manner–place–time at the end; never between verb and object.',
    'False friends: aktuell ≠ actually, eventuell ≠ eventually, also ≠ also; quite = fairly (BrE, gradable).',
    'Pronominal adverbs: darauf, worüber for things; auf ihn for people.'
  ],

  cards: [
    { id: 'particles', title: 'Modal particles in English', tags: ['doch', 'ja', 'mal', 'halt', 'denn', 'Partikel'], html: `
      <p>Komm doch mal vorbei → Why don’t you drop by? · Das ist halt so → That’s just how it is · Was ist denn los? → What’s the matter? · Bist du etwa krank? → You’re not ill, are you? · Fragen Sie ruhig → Feel free to ask · Sie wissen ja → As you know · Ich habe es doch gesagt → I did tell you.</p>` },
    { id: 'adv-false', title: 'Adverb false friends', tags: ['actually', 'eventually', 'aktuell', 'eventuell'], html: `
      <p>aktuell = currently · eventuell = possibly · also = so · eigentlich = actually · schließlich = eventually · quite (BrE) = fairly.</p>` },
    { id: 'adv-pos', title: 'English adverb position', tags: ['adverb', 'word order', 'usually'], html: `
      <p>Frequency before the main verb (I usually …; she is always …). Manner – place – time at the end. Never between verb and object: I like coffee very much.</p>` }
  ],

  terms: [
    { en: 'adverb', de: 'Adverb, Umstandswort', la: 'adverbium' },
    { en: 'sentence adverb', de: 'Satzadverb, Kommentaradverb', la: '' },
    { en: 'modal particle', de: 'Modalpartikel, Abtönungspartikel', la: '', note: 'Weydt 1969.' },
    { en: 'pronominal adverb', de: 'Pronominaladverb (darauf, worüber)', la: '' },
    { en: 'intensifier, degree adverb', de: 'Gradpartikel, Intensivpartikel', la: '' },
    { en: 'question tag', de: 'Frageanhängsel', la: '' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: 'Translate <span lang="de">Aktuell arbeite ich bei einer Bank.</span>', options: ['Currently I work at a bank.', 'Actually I work at a bank.'], answer: 0, keepOrder: true, explain: '<em>aktuell</em> = currently; <em>actually</em> = eigentlich/tatsächlich.' },
    { id: 'e2', type: 'mc', prompt: 'Best English for <span lang="de">Komm doch mal vorbei!</span>', options: ['Why don’t you drop by?', 'Come yet once by!', 'Come by!'], answer: 0, keepOrder: true, explain: 'The particles make the invitation warm; English uses a suggestion question.' },
    { id: 'e3', type: 'mc', prompt: 'Which is correct?', options: ['She speaks German fluently.', 'She speaks fluently German.'], answer: 0, keepOrder: true, explain: 'No adverb between verb and object.' },
    { id: 'e4', type: 'match', prompt: 'Match the particle to the English means.', pairs: [['Bist du etwa krank?', 'You’re not ill, are you?'], ['Das ist halt so.', 'That’s just the way it is.'], ['Was ist denn los?', 'What’s the matter?'], ['Fragen Sie ruhig.', 'Feel free to ask.']], explain: 'English uses tags, <em>just</em>, plain questions and set phrases.' },
    { id: 'e5', type: 'mc', prompt: 'In British English, <span lang="en">The presentation was quite good</span> usually means …', options: ['fairly good, not outstanding', 'excellent'], answer: 0, keepOrder: true, explain: 'British <em>quite</em> with gradable adjectives = fairly.' },
    { id: 'e6', type: 'gap', lang: 'de', prompt: '<span lang="de">Ich freue mich ___.</span> (auf + es)', answers: ['darauf', 'drauf'], cs: true, explain: 'For things: pronominal adverb <em>darauf</em> (colloquial <em>drauf</em>).' },
    { id: 'e7', type: 'mc', prompt: 'Translate <span lang="de">Wir treffen uns eventuell nächste Woche.</span>', options: ['We may meet next week.', 'We will eventually meet next week.'], answer: 0, keepOrder: true, explain: '<em>eventuell</em> = possibly; <em>eventually</em> = schließlich, irgendwann.' }
  ]
});
