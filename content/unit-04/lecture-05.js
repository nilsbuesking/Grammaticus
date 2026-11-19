/*
 * Unit 4, lecture 5: infinitive and participle clauses (syntax). Content file only. German section in German.
 */
Grammaticus.addLecture({
  id: '4.5', unit: 4, number: 5,
  title: 'Infinitive and participle clauses',
  subtitle: 'Who is the implied subject? um … zu, “I want you to come”, and absolute constructions',
  minutes: 25,

  intro: `
    <p>Lecture 2.14 covered the forms; this lecture covers the clauses built from them. An infinitive or participle clause has no subject of its own, so the reader must work out who is doing what. Both languages have rules for this (“control”), and both have constructions that break them, some accepted, some not. The lecture also covers English patterns German lacks (<em>I want you to come; for us to agree</em>) and the absolute constructions both languages share.</p>`,

  concept: [
    { title: 'Control: the implied subject',
      html: `
        <p>The understood subject of an infinitive clause is usually taken from the main clause:</p>
        <div class="ex"><p lang="en">I promised her <u class="k">to be</u> on time. <span class="gl">I will be on time (subject control)</span></p><p lang="en">I asked her <u class="k">to be</u> on time. <span class="gl">she should be (object control)</span></p><p lang="de">Ich habe ihr versprochen, pünktlich zu sein. · Ich habe sie gebeten, pünktlich zu sein.</p></div>
        <p>Which reading applies depends on the main verb. Participle clauses at the start of a sentence are controlled by the subject of the main clause (lecture 0.4: the dangling participle).</p>` }
  ],

  german: [
    { title: 'Infinitivgruppen',
      html: `
        <ul>
          <li><strong>Subjektkontrolle</strong> nach <em>versprechen, drohen, versuchen, beschließen, hoffen</em>: <em>Er versuchte, den Kunden zu erreichen.</em></li>
          <li><strong>Objektkontrolle</strong> nach <em>bitten, auffordern, raten, erlauben, verbieten, zwingen</em>: <em>Sie bat ihn, die Zahlen zu prüfen.</em></li>
          <li><strong>um … zu, ohne … zu, (an)statt … zu</strong>: Das implizite Subjekt ist das Subjekt des Hauptsatzes: <em>Um Zeit zu sparen, nehmen wir den Zug.</em></li>
        </ul>
        <p>Bei <em>um … zu</em> mit passivischem oder unpersönlichem Hauptsatz fehlt ein passendes Subjekt: <span class="odd">Um Kosten zu sparen, wurden zwanzig Stellen gestrichen.</span> Solche Sätze sind sehr verbreitet und werden verstanden (die Firma spart); sorgfältige Stilratgeber empfehlen dennoch, das handelnde Subjekt zu nennen: <em>Um Kosten zu sparen, strich das Unternehmen zwanzig Stellen.</em></p>` },
    { title: 'Partizipialgruppen',
      html: `
        <div class="ex"><p lang="de">Am Bahnhof angekommen, rief sie ihren Kollegen an.</p><p lang="de">Vor Freude strahlend, nahm er den Preis entgegen.</p><p lang="de">Genau genommen ist das nicht richtig. <span class="gl">feste Wendung, ohne Bezug auf das Subjekt</span></p></div>
        <p>Die Partizipialgruppe bezieht sich auf das Subjekt des Hauptsatzes. Feste Wendungen (<em>genau genommen, offen gestanden, abgesehen davon, kurz gesagt</em>) sind davon ausgenommen. Außerhalb davon ist die Konstruktion schriftsprachlich und im Deutschen seltener als im Englischen.</p>` },
    { title: 'Absolute Konstruktionen',
      html: `
        <p>Der „absolute Akkusativ“ ist gehoben: <em>Den Hut in der Hand, trat er ein. Die Arbeit beendet, gingen wir nach Hause.</em> Im Alltag ersetzt durch einen Nebensatz oder <em>mit</em>: <em>Mit dem Hut in der Hand …</em></p>` }
  ],

  english: [
    { title: 'Object + infinitive',
      html: `
        <p>After <em>want, would like, expect, need, ask, tell, allow, encourage, persuade</em>, English puts the doer of the infinitive as the object:</p>
        <div class="ex"><p lang="en">I want <u class="k">you to review</u> the draft. · We expect <u class="k">prices to rise</u>. · She told <u class="k">him to wait</u>.</p></div>
        <p>German needs a <em>dass</em>-clause after <em>wollen, erwarten</em>: <em>Ich möchte, dass du den Entwurf prüfst. Wir erwarten, dass die Preise steigen.</em></p>` },
    { title: 'for … to',
      html: `
        <p>When the infinitive needs its own subject after an adjective or noun, English uses <em>for</em>:</p>
        <div class="ex"><p lang="en">It is important <u class="k">for us to agree</u> today. · The plan is <u class="k">for the team to finish</u> by May. · There is no need <u class="k">for you to come</u>.</p></div>
        <p>German: <em>Es ist wichtig, dass wir uns heute einigen.</em></p>` },
    { title: 'Raising',
      html: `
        <div class="ex"><p lang="en">She <u class="k">seems to be</u> busy. · The deal <u class="k">is likely to</u> close in May. · He <u class="k">is said to be</u> leaving.</p></div>
        <p>German: <em>Sie scheint beschäftigt zu sein</em> (same pattern), but <em>Das Geschäft wird wahrscheinlich im Mai abgeschlossen</em> and <em>Er soll gehen</em> (lecture 2.9).</p>` },
    { title: 'Participle clauses and absolutes',
      html: `
        <div class="ex"><p lang="en">Founded in 1694, the Bank of England … <span class="gl">refers to the subject</span></p><p lang="en">Having reviewed the figures, the board approved the plan.</p><p lang="en"><u class="k">Weather permitting</u>, we’ll meet outside. · <u class="k">All things considered</u>, it went well. · <u class="k">The meeting over</u>, we left. <span class="gl">absolute: own subject</span></p><p lang="en">Generally speaking, … · Judging by the figures, … · Given the risks, … <span class="gl">accepted fixed openings</span></p></div>` }
  ],

  contrast: `
    <ul>
      <li><strong>want + object + infinitive</strong>: <em>I want you to come = Ich möchte, dass du kommst</em>; <span class="bad">I want that you come</span> is wrong.</li>
      <li><strong>for … to</strong> has no German equivalent; use a <em>dass</em>-clause.</li>
      <li><strong>Participle clauses</strong> are much more common in English; in German they sound formal, and a full clause is often better.</li>
      <li><strong>Commas</strong>: German infinitive and participle groups often take commas (Unit 5); English infinitives after verbs never do (<em>I promised to call</em>).</li>
    </ul>`,

  usage: `
    <ul>
      <li>The German <em>um … zu</em> with a mismatched subject is extremely common in newspapers and official texts; grammars note it, style guides discourage it. The English equivalent (<em>To save costs, twenty jobs were cut</em>) is criticised as a dangling infinitive but widely tolerated, more so than the dangling participle.</li>
      <li>English fixed openings like <em>considering, given, regarding, judging by</em> have become prepositions and are not danglers.</li>
    </ul>`,

  pitfalls: `
    <ul>
      <li><span class="bad">I want that you send me the file.</span> → <em>I want you to send me the file / I’d like you to send …</em></li>
      <li><span class="bad">It is important that we to agree.</span> → <em>It is important that we agree / for us to agree.</em></li>
      <li><span class="bad">Having reviewed the figures, the plan was approved.</span> → <em>Having reviewed the figures, the board approved the plan.</em></li>
      <li>German: <span class="odd">Um die Frist einzuhalten, wurde nachts gearbeitet.</span> → <em>Um die Frist einzuhalten, arbeitete das Team nachts.</em></li>
    </ul>`,

  latin: `
    <p>Latin has the “ablative absolute” (<em>ablativus absolutus</em>): a noun and participle in the ablative, grammatically independent of the main clause: <em>Caesare duce</em> “with Caesar as leader”, <em>urbe capta</em> “the city having been taken”. The English absolute (<em>the meeting over</em>) and the German absolute accusative are its descendants in style, if not in grammar; Latin-trained writers used them freely.</p>`,

  summary: [
    'The implied subject of an infinitive is the main-clause subject (versprechen, promise) or object (bitten, ask), depending on the verb.',
    'um … zu should share the main-clause subject; passive main clauses are common but discouraged by style guides.',
    'English object + infinitive (I want you to come) and for … to (important for us to agree) have no German equivalent; German uses dass-clauses.',
    'Participle clauses refer to the main-clause subject; absolutes have their own (weather permitting); fixed openings (given, considering) are fine.',
    'Participle clauses are frequent in English, formal in German.',
    'Latin ablative absolute is the model for absolute constructions in both languages.'
  ],

  cards: [
    { id: 'want-you-to', title: 'want/expect + object + to', tags: ['want', 'infinitive', 'dass'], html: `
      <p>I want you to come = Ich möchte, dass du kommst · We expect prices to rise = Wir erwarten, dass die Preise steigen · It is important for us to agree = Es ist wichtig, dass wir uns einigen.</p>` },
    { id: 'control', title: 'Who does the infinitive?', tags: ['control', 'um zu', 'implied subject'], html: `
      <p>Subject: promise, try, decide (versprechen, versuchen). Object: ask, tell, allow (bitten, auffordern, erlauben). um … zu / to (purpose): the main-clause subject.</p>` }
  ],

  terms: [
    { en: 'control (subject / object)', de: 'Kontrolle (Subjekt- / Objektkontrolle)', la: '' },
    { en: 'infinitive clause', de: 'Infinitivgruppe, Infinitivsatz', la: '' },
    { en: 'participle clause', de: 'Partizipialgruppe, Partizipialsatz', la: '' },
    { en: 'absolute construction', de: 'absolute Konstruktion (absoluter Akkusativ)', la: 'ablativus absolutus' },
    { en: 'raising', de: 'Anhebung', la: '' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: 'Translate <span lang="de">Ich möchte, dass du den Entwurf prüfst.</span>', options: ['I’d like you to review the draft.', 'I’d like that you review the draft.'], answer: 0, keepOrder: true, explain: 'English uses object + to-infinitive after <em>want, would like</em>.' },
    { id: 'e2', type: 'mc', lang: 'de', prompt: '<span lang="de">Ich habe ihr versprochen, pünktlich zu sein.</span> Who will be on time?', options: ['ich', 'sie'], answer: 0, keepOrder: true, explain: '<em>versprechen</em>: subject control.' },
    { id: 'e3', type: 'mc', lang: 'de', prompt: '<span lang="de">Ich habe sie gebeten, pünktlich zu sein.</span> Who should be on time?', options: ['sie', 'ich'], answer: 0, keepOrder: true, explain: '<em>bitten</em>: object control.' },
    { id: 'e4', type: 'mc', prompt: 'Which sentence has a dangling participle?', options: ['Having reviewed the figures, the plan was approved.', 'Having reviewed the figures, the board approved the plan.', 'Weather permitting, we will meet outside.'], answer: 0, keepOrder: true, explain: 'The plan did not review anything. <em>Weather permitting</em> is an absolute construction with its own subject.' },
    { id: 'e5', type: 'gap', prompt: '<span lang="en">It is important ___ us to agree on the budget today.</span>', answers: ['for'], explain: '<em>for</em> + subject + to-infinitive.' },
    { id: 'e6', type: 'mc', lang: 'de', prompt: 'Better German style:', options: ['Um Kosten zu sparen, strich das Unternehmen zwanzig Stellen.', 'Um Kosten zu sparen, wurden zwanzig Stellen gestrichen.'], answer: 0, keepOrder: true, explain: 'The <em>um … zu</em> group should share the main-clause subject; the second is common but discouraged.' }
  ]
});
