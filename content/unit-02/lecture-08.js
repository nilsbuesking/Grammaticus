/*
 * Unit 2, lecture 8: aspect and the progressive. Content file only. German section in German.
 */
Grammaticus.addLecture({
  id: '2.8', unit: 2, number: 8,
  title: 'Aspect and the progressive',
  subtitle: 'English must choose between “I read” and “I’m reading”; German may, and increasingly does, with “ich bin am Lesen”',
  minutes: 30,

  intro: `
    <p>English obliges its speakers to decide, in nearly every sentence, whether an event is viewed as a whole or as something in progress. German leaves that choice to context and adverbs, though spoken German has been developing its own progressive for some time. This lecture covers the English progressive in all its uses, the verbs that resist it, and the German means of saying the same thing.</p>`,

  concept: [
    { title: 'Aspect',
      html: `
        <p><strong>Tense</strong> places an event in time; <strong>aspect</strong> presents its internal structure. The <strong>progressive</strong> (or continuous) aspect presents an event from the inside, as ongoing and unfinished; the simple form presents it from the outside, as a whole.</p>
        <div class="ex"><p lang="en">I read the report. <span class="gl">the whole event</span></p><p lang="en">I was reading the report when you called. <span class="gl">in progress, interrupted</span></p></div>
        <p>A further distinction cuts across this: verbs that describe <strong>states</strong> (<em>know, own, believe</em>) and verbs that describe <strong>actions or processes</strong> (<em>write, run, become</em>). States have no internal progress, which is why they resist the progressive.</p>` }
  ],

  german: [
    { title: 'Ohne grammatischen Aspekt',
      html: `
        <p>Das Deutsche unterscheidet grammatisch nicht zwischen „ich lese“ (gewöhnlich) und „ich lese gerade“. <em>Ich lese</em> kann beides heißen; der Kontext entscheidet. Wo nötig, stehen lexikalische Mittel zur Verfügung:</p>
        <div class="ex">
          <p lang="de">Ich lese <u class="k">gerade</u> den Bericht. · Ich telefoniere <u class="k">eben</u>.</p>
          <p lang="de">Ich bin <u class="k">dabei</u>, den Bericht zu lesen.</p>
          <p lang="de">Sie ist <u class="k">beim</u> Lesen. · Er ist <u class="k">im</u> Begriff zu gehen.</p>
          <p lang="de">Ich bin (gerade) <u class="k">am</u> Lesen.</p>
        </div>` },
    { title: 'Der am-Progressiv',
      html: `
        <p><em>sein</em> + <em>am</em> + substantivierter Infinitiv (<em>Ich bin am Arbeiten</em>) heißt auch <strong>rheinische Verlaufsform</strong>, weil er lange als Merkmal westdeutscher Umgangssprache galt. Er ist heute im ganzen Sprachgebiet verbreitet, und die Duden-Grammatik betrachtet ihn als teilweise schon standardsprachlich.</p>
        <div class="ex"><p lang="de">Ich kann gerade nicht, ich bin am Kochen.</p><p lang="de">Die Preise sind am Steigen.</p><p lang="de" class="odd">Ich bin den Rasenmäher am Reparieren. <span class="gl">mit vorangestelltem Objekt: regional (Rheinland, Westfalen, Schweiz)</span></p></div>
        <p>Nach den Rechtschreibregeln wird der substantivierte Infinitiv großgeschrieben: <em>am Arbeiten</em>. Kleinschreibung (<em>am arbeiten</em>) ist häufig, aber nicht regelkonform.</p>
        <p class="src">Duden, Band 4 (Grammatik), zur Verlaufsform; zur Bewertung als regional: van Pottelberge (2004).</p>` },
    { title: 'Präteritum und Hintergrund',
      html: `
        <p>In Erzählungen übernimmt das Präteritum beide Rollen, Hintergrund und Vordergrund:</p>
        <div class="ex"><p lang="de">Ich <u class="k">las</u> gerade die Zeitung, als das Telefon <u class="k">klingelte</u>.</p><p lang="en">I <u class="k">was reading</u> the paper when the phone <u class="k">rang</u>.</p></div>` }
  ],

  english: [
    { title: 'Uses of the progressive',
      html: `
        <ol>
          <li><strong>In progress at a moment</strong>: <em>She’s on the phone; she’s talking to a client.</em></li>
          <li><strong>Temporary situations</strong>, against permanent ones: <em>I’m living in Croydon at the moment</em> (against <em>I live in Islington</em>); <em>I’m working from home this week.</em></li>
          <li><strong>Change and development</strong>: <em>Prices are rising. The climate is getting warmer.</em></li>
          <li><strong>Background in narrative</strong>, against the foreground event: <em>I was reading when the phone rang.</em></li>
          <li><strong>Arrangements in the future</strong> (lecture 2.3): <em>I’m meeting the auditors on Monday.</em></li>
          <li><strong>Annoying habits</strong>, with <em>always, constantly, forever</em>: <em>He’s always interrupting.</em> (Compare <em>He always interrupts</em>, a neutral report.)</li>
          <li><strong>Softening</strong>: <em>I was wondering if you could help me. I’m hoping to finish by Friday.</em> The progressive makes a request or statement more tentative and polite.</li>
        </ol>` },
    { title: 'Stative verbs',
      html: `
        <p>Verbs describing states normally do not take the progressive:</p>
        <ul>
          <li>knowledge and belief: <em>know, believe, understand, mean, remember, realise</em>;</li>
          <li>possession and relation: <em>own, belong, contain, include, consist of, depend on</em>;</li>
          <li>likes and dislikes: <em>like, love, hate, prefer, want, need</em>;</li>
          <li>perception as a state: <em>see, hear, seem, appear</em>.</li>
        </ul>
        <div class="ex"><p lang="en" class="bad">I am knowing the answer.</p><p lang="en" class="bad">This report is containing errors.</p></div>
        <p>Many of these verbs have an action meaning as well, which does take the progressive:</p>
        <div class="ex"><p lang="en">I think it’s a good idea. <span class="gl">opinion: state</span> · I’m thinking about it. <span class="gl">mental activity</span></p><p lang="en">She has a car. · She’s having lunch. <span class="gl">have = eat</span></p><p lang="en">I see what you mean. · I’m seeing the client tomorrow. <span class="gl">see = meet</span></p><p lang="en">The soup tastes good. · He’s tasting the soup.</p></div>` },
    { title: 'A growing form',
      html: `
        <p>The progressive has expanded steadily since the eighteenth century, into the passive (<em>the house is being built</em>, once condemned as an innovation) and into some stative verbs in informal use (<em>I’m loving this</em>; <em>we’re needing more staff</em>). Corpus studies show it still increasing in the twentieth century. The advertising slogan <em>I’m lovin’ it</em> was memorable precisely because it stretched the rule.</p>` }
  ],

  contrast: `
    <ul>
      <li><strong>Present</strong>: German <em>Ich arbeite</em> = <em>I work</em> or <em>I’m working</em>. English must choose.
        <div class="ex"><p lang="de">Was machst du? – Ich schreibe einen Bericht.</p><p lang="en">What are you doing? – I’m writing a report.</p><p lang="de">Was machst du beruflich? – Ich schreibe Berichte.</p><p lang="en">What do you do? – I write reports.</p></div></li>
      <li><strong>With <em>seit</em></strong>: German Präsens; English present perfect progressive: <em>Ich arbeite seit drei Stunden daran = I’ve been working on it for three hours.</em></li>
      <li><strong>Stative verbs</strong>: German speakers who have learnt that English “likes the progressive” overuse it: <span class="bad">I’m understanding</span>, <span class="bad">it’s depending on</span>.</li>
      <li><strong>German am-Progressiv</strong> corresponds most closely to the English progressive for activities in progress, but it is much rarer, mainly spoken, and not used for temporary states or future arrangements.</li>
    </ul>`,

  usage: `
    <ul>
      <li><strong>am-Progressiv.</strong> Long labelled regional or colloquial, it is now treated by the Duden grammar as at least partly standard; with a preceding object (<em>den Rasen am Mähen</em>) it remains regional. In formal writing, <em>gerade</em> + simple verb is the safe choice.</li>
      <li><strong>Stative progressives in English</strong>: <em>I’m loving it</em>, <em>I’m wanting to</em> are informal and spreading; in edited prose they still stand out.</li>
      <li><strong>The passive progressive</strong> (<em>is being built</em>) was objected to by grammarians around 1800 as an ugly novelty; nobody objects today. A good example of a “rule” overtaken by usage.</li>
    </ul>`,

  style: `
    <ul>
      <li>The English progressive is a politeness device: <em>I was wondering whether …</em>, <em>We’re hoping you can …</em> soften requests in emails, which German achieves with Konjunktiv II (<em>Ich wollte fragen / Hätten Sie …</em>) and particles (<em>mal, vielleicht</em>).</li>
      <li>In German narrative, the am-Progressiv in dialogue can characterise a speaker as informal or regional.</li>
    </ul>`,

  pitfalls: `
    <ul>
      <li><span class="odd">What do you do right now?</span> → <em>What are you doing right now?</em></li>
      <li><span class="bad">I’m knowing him for years.</span> → <em>I’ve known him for years.</em> (stative and <em>for</em>: present perfect simple)</li>
      <li><span class="odd">It’s raining since this morning.</span> → <em>It’s been raining since this morning.</em></li>
      <li>German: <em>Ich bin am Überlegen</em>, capitalised; in a formal text better <em>Ich überlege noch</em>.</li>
    </ul>`,

  latin: `
    <p>Latin marks aspect in the past: the <strong>imperfect</strong> (<em>legebam</em> “I was reading, I used to read”) for ongoing or repeated action, the <strong>perfect</strong> (<em>legi</em> “I read”) for completed action.</p>
    <div class="ex"><p lang="la">Legebam, cum amicus intravit.</p><p class="gl">I was reading when my friend came in.</p></div>
    <p class="latin">This is exactly the English background–foreground pattern, and the reason the name <em>Imperfekt</em> fits Latin but not German (lecture 0.3).</p>`,

  summary: [
    'Aspect = how an event is viewed (in progress vs as a whole); English grammaticalises it, German does not.',
    'English progressive: in progress, temporary, changing, background, future arrangement, annoying habit (always), politeness (I was wondering).',
    'Stative verbs (know, own, believe, like, contain) avoid the progressive, unless used in an action sense (I’m thinking about it; she’s having lunch).',
    'German: gerade, eben, dabei sein zu, beim + Infinitiv; am-Progressiv (ich bin am Arbeiten), partly standard, capitalised.',
    'German Präsens + seit = English present perfect progressive.',
    'Latin imperfect vs perfect = English progressive background vs simple foreground.'
  ],

  cards: [
    { id: 'stative', title: 'Stative verbs (no progressive)', tags: ['progressive', 'stative', 'know', 'Verlaufsform'], html: `
      <p>know, believe, understand, mean, remember · own, belong, contain, include, depend on · like, love, hate, prefer, want, need · seem, appear.</p>
      <p>Action sense allowed: think (about), have (lunch), see (= meet), taste (the soup), weigh (the parcel).</p>` },
    { id: 'progressive-uses', title: 'English progressive: uses', tags: ['progressive', 'continuous', '-ing'], html: `
      <p>In progress now · temporary · changing · background in a story · future arrangement · always + annoying habit · polite softening (I was wondering).</p>` }
  ],

  terms: [
    { en: 'progressive (continuous) aspect', de: 'Verlaufsform, Progressiv', la: '' },
    { en: 'am-progressive', de: 'am-Progressiv, rheinische Verlaufsform', la: '' },
    { en: 'stative verb', de: 'Zustandsverb', la: 'status “state”' },
    { en: 'dynamic verb', de: 'Handlungs- oder Vorgangsverb', la: '' },
    { en: 'imperfective / perfective', de: 'imperfektiv / perfektiv', la: 'imperfectum “incomplete”' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: 'On the phone: <span lang="en">Sorry, can I call you back? I ___ a client.</span>', options: ['’m meeting', 'meet', 'met', '’ve met'], answer: 0, explain: 'In progress at the moment of speaking: present progressive.' },
    { id: 'e2', type: 'mc', prompt: 'Which sentence is wrong?', options: ['This report is containing several errors.', 'I’m thinking about your offer.', 'She’s having lunch with a client.', 'Prices are rising.'], answer: 0, explain: '<em>contain</em> is a stative verb: <em>This report contains several errors.</em>' },
    { id: 'e3', type: 'mc', prompt: 'Translate <span lang="de">Es regnet seit heute Morgen.</span>', options: ['It’s been raining since this morning.', 'It’s raining since this morning.', 'It rains since this morning.'], answer: 0, keepOrder: true, explain: 'Präsens + seit = present perfect (progressive for an activity).' },
    { id: 'e4', type: 'gap', lang: 'de', prompt: 'Correct spelling: <span lang="de">Ich bin gerade am ___.</span> (kochen)', answers: ['Kochen'], cs: true, explain: 'The infinitive after <em>am</em> is a noun and is capitalised.' },
    { id: 'e5', type: 'match', prompt: 'Match each sentence to its use of the progressive.', pairs: [['He’s always losing his keys.', 'annoying habit'], ['I was wondering if you could help.', 'politeness'], ['I’m staying with friends this week.', 'temporary situation'], ['The economy is slowing down.', 'change in progress']], explain: 'Four of the seven uses listed in the English section.' },
    { id: 'e6', type: 'mc', prompt: '<span lang="en">I was reading when the phone ___.</span>', options: ['rang', 'was ringing', 'has rung'], answer: 0, keepOrder: true, explain: 'Background in the progressive, the interrupting event in the past simple.' },
    { id: 'e7', type: 'mc', lang: 'de', prompt: 'In a formal German text, instead of <span lang="de">Wir sind am Prüfen der Unterlagen</span> you would write …', options: ['Wir prüfen die Unterlagen gerade.', 'Wir sind die Unterlagen am Prüfen.', 'Wir prüfend die Unterlagen.'], answer: 0, keepOrder: true, explain: 'The am-Progressiv is spoken and informal; <em>gerade</em> + simple verb is neutral. The second is regional.' }
  ]
});
