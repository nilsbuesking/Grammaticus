/*
 * Unit 2, lecture 4: Präteritum and Perfekt. Content file only. German section in German. Checks: CONTENT-CHECKS.md.
 */
Grammaticus.addLecture({
  id: '2.4', unit: 2, number: 4,
  title: 'Präteritum and Perfekt',
  subtitle: 'Two German past tenses divided by register and region rather than meaning; haben or sein',
  minutes: 35,

  intro: `
    <p>German has two everyday past tenses, <em>ich schrieb</em> and <em>ich habe geschrieben</em>. Unlike the English past simple and present perfect, they mostly do not differ in meaning. What decides between them is the kind of text (narrative or conversation), the verb, and where the speaker comes from. This lecture explains the division of labour, why older books and songs sound different, and how to choose the auxiliary in the Perfekt.</p>`,

  concept: [
    { title: 'Same meaning, different jobs',
      html: `
        <p>In most contexts, <em>Ich traf ihn gestern</em> and <em>Ich habe ihn gestern getroffen</em> say the same thing. The difference is one of <strong>register</strong> and <strong>text type</strong>:</p>
        <ul>
          <li>The <strong>Präteritum</strong> is the tense of written narrative: novels, history, reports, newspaper accounts. It presents the past as a closed story told from a distance.</li>
          <li>The <strong>Perfekt</strong> is the tense of conversation and of the past as it concerns the present: what one tells a friend, writes in an email, says on the phone.</li>
        </ul>
        <p>Two further factors cut across this: some verbs strongly prefer the Präteritum even in speech, and in the south the Präteritum has largely disappeared from speech altogether.</p>` }
  ],

  german: [
    { title: 'Die Arbeitsteilung',
      html: `
        <div class="ex">
          <p lang="de">Am Morgen des 14. Juli <u class="k">stürmte</u> die Menge die Bastille. <span class="gl">Geschichtsschreibung: Präteritum</span></p>
          <p lang="de">Als sie die Tür <u class="k">öffnete</u>, <u class="k">sah</u> sie, dass jemand im Zimmer <u class="k">gewesen war</u>. <span class="gl">Erzählung: Präteritum, Vorzeitigkeit im Plusquamperfekt</span></p>
          <p lang="de">Weißt du, wen ich gestern <u class="k">getroffen habe</u>? <span class="gl">Gespräch: Perfekt</span></p>
          <p lang="de">Ich <u class="k">habe</u> Ihnen den Vertrag gestern <u class="k">geschickt</u>. <span class="gl">E-Mail: Perfekt</span></p>
        </div>
        <p>Ein typisches Muster in Berichten und Zeitungsartikeln: Der Einstieg steht im Perfekt (das Ereignis ist neu und betrifft die Gegenwart), die anschließende Erzählung im Präteritum.</p>
        <div class="ex"><p lang="de">In Hamburg <u class="k">hat</u> es gestern einen Großbrand <u class="k">gegeben</u>. Das Feuer <u class="k">brach</u> gegen 22 Uhr in einer Lagerhalle aus und <u class="k">griff</u> rasch auf …</p></div>` },
    { title: 'Verben, die auch im Gespräch im Präteritum stehen',
      html: `
        <p>Auch wer im Gespräch fast nur das Perfekt verwendet, sagt bei einigen Verben das Präteritum:</p>
        <div class="ex"><p lang="de">Ich <u class="k">war</u> gestern krank. (selten: bin gewesen)</p><p lang="de">Wir <u class="k">hatten</u> keine Zeit.</p><p lang="de">Ich <u class="k">musste</u> arbeiten. · Er <u class="k">konnte</u> nicht kommen. · Sie <u class="k">wollte</u> anrufen.</p><p lang="de">Ich <u class="k">wusste</u> das nicht. · Wie <u class="k">hieß</u> er noch? · Ich <u class="k">dachte</u>, du kommst.</p></div>
        <p>Das betrifft vor allem <em>sein, haben</em>, die Modalverben und einige häufige Verben wie <em>wissen, heißen, denken, finden</em>. Bei den Modalverben wäre das Perfekt umständlich: <em>Ich habe arbeiten müssen</em> ist korrekt, aber schwerfällig.</p>` },
    { title: 'Der oberdeutsche Präteritumschwund',
      html: `
        <p>In den Mundarten und der Alltagssprache der Südhälfte des Sprachgebiets ist das Präteritum weitgehend verschwunden; das Schweizerdeutsche kennt gar keines mehr. Der Schwund begann im Frühneuhochdeutschen im Süden und hat sich seitdem nach Norden ausgebreitet. Im Norden ist das Präteritum auch im Gespräch noch lebendiger, besonders bei älteren Sprechern.</p>
        <p>Die Forschung ist sich über die Ursachen nicht einig. Diskutiert werden lautliche Gründe (der Abfall des auslautenden <em>-e</em> machte <em>sagte</em> und <em>sagt</em> im Süden gleichlautend), die Ausbreitung des Perfekts als Erzähltempus und Kontakteinflüsse. Hanna Fischer hat den Prozess 2018 in einer großen Monographie dokumentiert.</p>
        <p>Es gibt sogar eine Gegenbewegung: Eine Studie von 2021 beobachtet in Südwestdeutschland eine Zunahme des Präteritums im gesprochenen Alemannischen, wohl unter dem Einfluss der Standardsprache.</p>
        <p class="src">Fischer, Präteritumschwund im Deutschen (2018); Leonhard, Zeitschrift für Sprachwissenschaft 40 (2021).</p>` },
    { title: 'haben oder sein?',
      html: `
        <p>Das Perfekt wird mit <em>sein</em> gebildet bei:</p>
        <ul>
          <li>intransitiven Verben der <strong>Ortsveränderung</strong>: <em>gehen, fahren, fliegen, kommen, laufen, reisen</em>;</li>
          <li>intransitiven Verben der <strong>Zustandsveränderung</strong>: <em>aufwachen, einschlafen, sterben, wachsen, werden</em>;</li>
          <li><em>sein, bleiben</em> sowie <em>begegnen, gelingen, geschehen, passieren</em>.</li>
        </ul>
        <p>Alle anderen, besonders alle transitiven und reflexiven Verben, bilden das Perfekt mit <em>haben</em>:</p>
        <div class="ex"><p lang="de">Ich <u class="k">bin</u> nach Berlin gefahren. · Ich <u class="k">habe</u> das Auto in die Werkstatt gefahren.</p><p lang="de">Er <u class="k">ist</u> über den See geschwommen. · Er <u class="k">hat</u> sich beim Schwimmen erkältet.</p></div>
        <p>Regional unterschiedlich ist <em>liegen, sitzen, stehen</em>: Im Süden, in Österreich und der Schweiz heißt es standardsprachlich <em>ich bin gesessen, gestanden, gelegen</em>, im Norden <em>ich habe gesessen</em>. Beide Formen sind korrekt, jeweils in ihrer Region.</p>` }
  ],

  english: [
    { title: 'No such division in English',
      html: `
        <p>English has no equivalent of the German division by register and region. Its two forms, <em>I wrote</em> and <em>I have written</em>, differ in meaning, and the choice between them is the subject of the next lecture (2.5). A few points relevant here:</p>
        <ul>
          <li>English narrative uses the past simple, like German narrative, and conversation uses it too: <em>I met him yesterday.</em></li>
          <li>English has only one auxiliary for the perfect, <em>have</em>. It once had <em>be</em> with verbs of motion as German does; traces survive in <em>he is gone</em>, <em>the guests are come</em> (archaic, as in the King James Bible: <em>He is risen</em>).</li>
          <li>American English uses the past simple in some contexts where British English prefers the present perfect (<em>Did you eat yet?</em> against <em>Have you eaten yet?</em>). That too is lecture 2.5.</li>
        </ul>` }
  ],

  contrast: `
    <p>The decisive difference: the German Perfekt is a <strong>past tense</strong> and combines with any past time adverb; the English present perfect is <strong>about the present</strong> and does not.</p>
    <div class="ex">
      <p lang="de">Ich habe ihn <u class="k">gestern</u> gesehen.</p>
      <p lang="en">I saw him yesterday.</p>
      <p lang="en" class="bad">I have seen him yesterday.</p>
      <p lang="de">Wann hast du das geschrieben?</p>
      <p lang="en">When did you write that?</p>
      <p lang="en" class="bad">When have you written that?</p>
    </div>
    <p>Conversely, the German Präteritum is not the equivalent of the English past simple in register: <em>I saw him yesterday</em> is ordinary English; <em>Ich sah ihn gestern</em> in conversation sounds literary or northern.</p>
    <p class="contrast">German Perfekt → usually English past simple when there is a past time reference; English present perfect only when the past event is viewed from now (lecture 2.5). German Präteritum in speech → English past simple; German Präteritum in narrative → English past simple.</p>`,

  usage: `
    <p>Here is where your impression from older books and songs fits in.</p>
    <ul>
      <li><strong>No rule ever required the Präteritum in conversation.</strong> School grammars of the nineteenth and twentieth centuries described the Präteritum as the narrative tense and the Perfekt as the tense of completed events relevant to the present. Much of what sounds “correct but old” in older texts is simply written narrative, which still uses the Präteritum today.</li>
      <li><strong>Literary and song language is elevated.</strong> Songs, poems and older novels use Präteritum forms such as <em>sprach, ging, fand</em> also in reported dialogue, partly for rhythm and rhyme (one syllable against three), partly because it was the high register.</li>
      <li><strong>The real change is spoken and regional.</strong> The loss of the Präteritum in speech is old in the south and has moved north. A northern German speaker of an older generation may still say <em>Ich fuhr gestern nach Hamburg</em> in conversation; to a southern ear that sounds like a book.</li>
      <li><strong>Strong verbs have lost more ground than weak ones.</strong> Rare strong Präteritum forms (<em>buk, molk, focht, schwor</em>) sound increasingly archaic even in writing, and some (<em>frug</em>) have gone.</li>
    </ul>
    <p>In short: your observation is right about usage, but the norm itself has hardly moved. Written narrative uses the Präteritum now as then; what has changed is that speech, especially in the south, uses it less and less.</p>`,

  style: `
    <ul>
      <li><strong>Choose by text type, then keep it.</strong> A narrative in the Präteritum that slips into the Perfekt for no reason reads as careless. The Perfekt is appropriate inside a narrative for direct speech and for a narrator’s comment from the present.</li>
      <li><strong>Emails and letters:</strong> the Perfekt is normal (<em>Wie besprochen habe ich …</em>). Set phrases with the Präteritum are formal: <em>wie ich Ihnen bereits mitteilte</em>; <em>Ich erlaubte mir, …</em> sounds deliberately old-fashioned.</li>
      <li><strong>Reports and minutes:</strong> the Präteritum is usual for the course of events (<em>Herr Weber stellte die Zahlen vor</em>), the Perfekt for results that stand now (<em>Der Vorstand hat beschlossen, dass …</em>).</li>
      <li><strong>Rhythm:</strong> the Präteritum is shorter and keeps the verb in second position, which gives prose momentum: <em>Er stand auf, ging zum Fenster und sah hinaus</em> against <em>Er ist aufgestanden, zum Fenster gegangen und hat hinausgesehen</em>.</li>
    </ul>`,

  pitfalls: `
    <ul>
      <li><strong>Tense switching in narrative</strong> (Präteritum to Perfekt and back) without a reason.</li>
      <li><strong>Anglicised auxiliary.</strong> After years of English <em>have</em>: <span class="bad">Ich habe nach Berlin gefahren</span>; correct <em>Ich bin nach Berlin gefahren</em>.</li>
      <li><strong>Regional forms in a supra-regional text.</strong> <em>Ich bin gesessen</em> is standard in Munich, Vienna and Zurich, but marked in a text for a northern German readership; <em>ich habe gesessen</em> is understood everywhere.</li>
      <li><strong>Präteritum in casual speech</strong> can sound stilted; <em>Ich aß gestern Pizza</em> in a chat reads like a parody of written German.</li>
      <li><strong>Transferring the German Perfekt into English</strong> with a past time adverb: <span class="bad">We have met last week</span>.</li>
    </ul>`,

  latin: `
    <p>Latin also has one form for both meanings: the perfect <em>vidi</em> means “I saw” and “I have seen”. Classical Latin had no Perfekt with <em>habere</em>; constructions like <em>habeo scriptum</em> (“I have it written”) appear in Late Latin and became the Romance perfects (French <em>j’ai écrit</em>). German <em>ich habe geschrieben</em> and English <em>I have written</em> developed in the same way, from a phrase of possession: “I have (it as a) written (thing)”.</p>
    <p class="latin">French offers a striking parallel to the German south: the simple past (<em>passé simple</em>: <em>il écrivit</em>) has disappeared from French speech and survives only in writing; conversation uses the compound <em>il a écrit</em>.</p>`,

  summary: [
    'Präteritum and Perfekt mostly mean the same; Präteritum is the narrative tense of writing, Perfekt the tense of conversation and of past events relevant now.',
    'In speech, sein, haben, the modal verbs and wissen, denken, heißen stay in the Präteritum.',
    'The southern loss of the Präteritum in speech (oberdeutscher Präteritumschwund) began in Early New High German and has spread north; Swiss German has no Präteritum.',
    'Perfekt with sein for intransitive change of place or state, and sein, bleiben, werden, begegnen, gelingen, geschehen; otherwise haben. Sitzen/stehen/liegen with sein is standard in the south, Austria and Switzerland.',
    'The German Perfekt takes past time adverbs; the English present perfect does not: I saw him yesterday.',
    'Older texts sound different mainly because they are written narrative, not because the rules changed.'
  ],

  cards: [
    { id: 'prät-perf', title: 'Präteritum or Perfekt?', tags: ['Präteritum', 'Perfekt', 'Vergangenheit', 'past tense'], html: `
      <p><strong>Präteritum</strong>: written narrative, history, reports, novels; in speech for sein, haben, modal verbs, wissen, denken, heißen.<br><strong>Perfekt</strong>: conversation, emails, news openings, past events relevant now.</p>
      <p>Same meaning in most contexts; choose by text type and keep it.</p>` },
    { id: 'haben-sein', title: 'Perfekt: haben or sein', tags: ['sein', 'haben', 'Perfekt', 'Hilfsverb'], html: `
      <p><strong>sein</strong>: intransitive change of place (gehen, fahren, fliegen) or state (aufwachen, sterben, werden); sein, bleiben, begegnen, gelingen, geschehen, passieren.<br><strong>haben</strong>: everything else, all transitive and reflexive verbs: <em>Ich habe das Auto gefahren.</em><br>Regional: <em>ich bin gesessen/gestanden/gelegen</em> standard in the south, Austria, Switzerland.</p>` }
  ],

  terms: [
    { en: 'Präteritum (simple past)', de: 'Präteritum, erste Vergangenheit', la: 'praeteritum', note: 'Austria: Mitvergangenheit.' },
    { en: 'Perfekt (compound past)', de: 'Perfekt, zweite Vergangenheit', la: 'perfectum' },
    { en: 'loss of the preterite', de: 'Präteritumschwund', la: '' },
    { en: 'auxiliary (verb)', de: 'Hilfsverb', la: 'auxilium “help”' },
    { en: 'intransitive / transitive', de: 'intransitiv / transitiv', la: 'transire “to go across”', note: 'Transitive verbs take a direct object.' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', lang: 'de', prompt: 'A friend asks what you did at the weekend. The most natural answer:', options: ['Ich habe meine Eltern besucht.', 'Ich besuchte meine Eltern.'], answer: 0, keepOrder: true, explain: 'Conversation: Perfekt. The Präteritum would sound bookish, at least outside the north.' },
    { id: 'e2', type: 'mc', lang: 'de', prompt: 'Which verb normally stays in the Präteritum even in conversation?', options: ['müssen: Ich musste arbeiten.', 'essen: Ich aß Pizza.', 'fahren: Ich fuhr nach Hause.', 'schreiben: Ich schrieb ihm.'], answer: 0, explain: 'sein, haben, the modal verbs and a few others (wissen, denken, heißen) keep the Präteritum in speech.' },
    { id: 'e3', type: 'gap', lang: 'de', prompt: '<span lang="de">Ich ___ gestern nach Hamburg gefahren.</span>', answers: ['bin'], cs: true, explain: 'Change of place, no object: <em>sein</em>.' },
    { id: 'e4', type: 'gap', lang: 'de', prompt: '<span lang="de">Ich ___ das Auto in die Werkstatt gefahren.</span>', answers: ['habe'], cs: true, explain: 'Transitive (<em>das Auto</em> is the object): <em>haben</em>.' },
    { id: 'e5', type: 'mc', prompt: 'Translate <span lang="de">Ich habe ihn letzte Woche getroffen.</span>', options: ['I met him last week.', 'I have met him last week.', 'I had met him last week.'], answer: 0, keepOrder: true, explain: 'A past time adverb requires the English past simple.' },
    { id: 'e6', type: 'mc', lang: 'de', prompt: '<span lang="de">Ich bin den ganzen Tag im Büro gesessen.</span> This sentence is …', options: ['standard in southern Germany, Austria and Switzerland; northern standard has “habe gesessen”', 'wrong everywhere', 'correct only in poetry', 'standard everywhere'], answer: 0, explain: 'The auxiliary of <em>sitzen, stehen, liegen</em> varies by region; both are standard in their area.' },
    { id: 'e7', type: 'mc', lang: 'de', prompt: 'A news report begins <span lang="de">In Hamburg hat es gestern gebrannt.</span> How does it usually continue?', options: ['In the Präteritum: Das Feuer brach gegen 22 Uhr aus …', 'In the Perfekt throughout', 'In the Futur', 'In the Präsens only'], answer: 0, explain: 'A common pattern: Perfekt for the news, Präteritum for the account that follows.' },
    { id: 'e8', type: 'mc', prompt: 'Why do older books and songs use the Präteritum so much?', options: ['They are written narrative or elevated language, where the Präteritum is still the norm', 'A rule required it in all speech until 1950', 'The Perfekt was invented in the twentieth century', 'The 1996 reform abolished the Präteritum'], answer: 0, explain: 'The written norm has hardly changed; speech, especially in the south, has moved to the Perfekt.' }
  ]
});
