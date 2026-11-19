/*
 * Unit 2, lecture 2: the tense system. Content file only. German section in German. Checks: CONTENT-CHECKS.md.
 */
Grammaticus.addLecture({
  id: '2.2', unit: 2, number: 2,
  title: 'The tense system',
  subtitle: 'Six German tenses, twelve English verb forms, and a simple tool for comparing them',
  minutes: 30,

  intro: `
    <p>School grammar gives German six tenses and English twelve or sixteen. The numbers suggest that English is twice as complicated, and that each German tense has an English twin. Neither is true. This lecture introduces a tool for describing what a tense actually does, and lays out the two systems side by side. The individual tenses follow in lectures 2.3 to 2.8.</p>`,

  concept: [
    { title: 'Tense is not time',
      html: `
        <p><strong>Time</strong> is the real-world past, present and future. <strong>Tense</strong> is a grammatical form of the verb. They are related but not the same:</p>
        <div class="ex"><p lang="de">Morgen <u class="k">fliege</u> ich nach Berlin. <span class="gl">present tense, future time</span></p><p lang="en">The train <u class="k">leaves</u> at eight tomorrow. <span class="gl">present tense, future time</span></p><p lang="de">1871 <u class="k">wird</u> das Reich gegründet. <span class="gl">present tense, past time (historical present)</span></p><p lang="en">If I <u class="k">had</u> time, I would come. <span class="gl">past tense, no past time (unreality)</span></p></div>
        <p>In both languages, only the present and the past are tenses in the strict sense: forms of the verb itself (<em>gehe, ging; go, went</em>). The rest are built with auxiliaries.</p>` },
    { title: 'Reichenbach’s three points',
      html: `
        <p>The philosopher Hans Reichenbach (<em>Elements of Symbolic Logic</em>, 1947) described tenses with three points in time:</p>
        <ul>
          <li><strong>S</strong>, the moment of speaking;</li>
          <li><strong>E</strong>, the time of the event;</li>
          <li><strong>R</strong>, the reference time: the time from which the event is viewed.</li>
        </ul>
        <p>For the simple past, R and E coincide and lie before S: <em>I left at six.</em> For the pluperfect, E lies before R, which lies before S: <em>By six I had left.</em> The present perfect has E before S, but R at S: the event is viewed from now, which is why <em>I have left</em> does not combine with <em>at six</em>.</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Form</th><th>Order</th></tr></thead>
          <tbody>
            <tr><td>present<span class="tnote">I leave</span></td><td>E = R = S</td></tr>
            <tr><td>past<span class="tnote">I left</span></td><td>E = R, before S</td></tr>
            <tr><td>present perfect<span class="tnote">I have left</span></td><td>E before R = S</td></tr>
            <tr><td>pluperfect<span class="tnote">I had left</span></td><td>E before R before S</td></tr>
            <tr><td>future<span class="tnote">I will leave</span></td><td>S before R = E</td></tr>
            <tr><td>future perfect<span class="tnote">I will have left</span></td><td>S before E before R</td></tr>
          </tbody></table></div>
        <p>The model is a simplification (it says nothing about aspect, modality or style), but it makes the central difference of this unit visible: the English present perfect insists on R = S; the German Perfekt does not.</p>` },
    { title: 'Tense and aspect',
      html: `
        <p><strong>Aspect</strong> concerns how an event is viewed: as a whole, or in progress, or as a completed state. English has grammaticalised two aspects, the <strong>progressive</strong> (<em>I am reading</em>) and the <strong>perfect</strong> (<em>I have read</em>), and combines them freely with the two tenses. German has no grammatical aspect; it expresses these views with adverbs and context.</p>` }
  ],

  german: [
    { title: 'Die sechs Tempora',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th>Tempus</th><th>Form</th></tr></thead>
          <tbody>
            <tr><td>Präsens</td><td>ich schreibe</td></tr>
            <tr><td>Präteritum</td><td>ich schrieb</td></tr>
            <tr><td>Perfekt</td><td>ich habe geschrieben</td></tr>
            <tr><td>Plusquamperfekt</td><td>ich hatte geschrieben</td></tr>
            <tr><td>Futur I</td><td>ich werde schreiben</td></tr>
            <tr><td>Futur II</td><td>ich werde geschrieben haben</td></tr>
          </tbody></table></div>
        <p>Nur Präsens und Präteritum sind <strong>synthetisch</strong>, also einfache Verbformen. Die übrigen vier sind <strong>analytisch</strong>: Hilfsverb (<em>haben, sein, werden</em>) plus Partizip II oder Infinitiv.</p>
        <p>Das Sechs-Tempora-Schema stammt aus der lateinischen Grammatik, in der es sechs einfache Formen gibt. Ob die Futurformen echte Tempora sind, ist in der Forschung umstritten: <em>werden</em> + Infinitiv drückt oft eine Vermutung aus und keine Zeit (<em>Er wird wohl krank sein</em>). Die Duden-Grammatik führt sie dennoch als Tempora.</p>` },
    { title: 'Was die Tempora leisten',
      html: `
        <ul>
          <li><strong>Präsens</strong>: Gegenwart, aber auch Zukunft (<em>Ich komme morgen</em>), allgemeine Wahrheiten (<em>Wasser kocht bei 100 Grad</em>) und lebhafte Vergangenheit (historisches Präsens).</li>
          <li><strong>Präteritum</strong> und <strong>Perfekt</strong>: beide Vergangenheit; der Unterschied liegt vor allem in Textsorte und Region (Lektion 2.4).</li>
          <li><strong>Plusquamperfekt</strong>: Vorvergangenheit, etwas lag vor einem anderen vergangenen Zeitpunkt.</li>
          <li><strong>Futur I</strong>: Zukunft mit Nachdruck, Absicht, Vorhersage, oder Vermutung über die Gegenwart.</li>
          <li><strong>Futur II</strong>: abgeschlossen in der Zukunft (<em>Bis Freitag werde ich es erledigt haben</em>), oder Vermutung über die Vergangenheit (<em>Er wird den Zug verpasst haben</em>).</li>
        </ul>
        <p>Auffällig ist die Freiheit des Deutschen: Das Präsens kann fast alle Zeiten bezeichnen, das Perfekt auch die Zukunft (<em>Morgen habe ich das erledigt</em>). Die Zeit ergibt sich oft aus Adverbien und Kontext, nicht aus dem Tempus.</p>` },
    { title: 'Das Doppelperfekt',
      html: `
        <p>In der gesprochenen Sprache, besonders im Süden, gibt es zusätzlich die sogenannten doppelten Perfektbildungen:</p>
        <div class="ex"><p lang="de" class="odd">Ich habe das schon gemacht gehabt.</p><p lang="de" class="odd">Er war schon gegangen gewesen.</p></div>
        <p>Sie füllen teilweise die Lücke, die das fehlende Präteritum hinterlässt (für Vorvergangenheit im Perfekt-Erzählen). Die Duden-Grammatik beschreibt sie, im geschriebenen Standard gelten sie als nicht korrekt.</p>` }
  ],

  english: [
    { title: 'Two tenses, two aspects',
      html: `
        <p>Combining the two tenses with the two aspects (and the modal <em>will</em>) gives the familiar table:</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Form</th><th>Example</th></tr></thead>
          <tbody>
            <tr><td>present simple</td><td>she writes</td></tr>
            <tr><td>present progressive</td><td>she is writing</td></tr>
            <tr><td>present perfect</td><td>she has written</td></tr>
            <tr><td>present perfect progressive</td><td>she has been writing</td></tr>
            <tr><td>past simple</td><td>she wrote</td></tr>
            <tr><td>past progressive</td><td>she was writing</td></tr>
            <tr><td>past perfect</td><td>she had written</td></tr>
            <tr><td>past perfect progressive</td><td>she had been writing</td></tr>
            <tr><td>future (will) simple</td><td>she will write</td></tr>
            <tr><td>future progressive</td><td>she will be writing</td></tr>
            <tr><td>future perfect</td><td>she will have written</td></tr>
            <tr><td>future perfect progressive</td><td>she will have been writing</td></tr>
          </tbody></table></div>
        <p>Teaching grammars call these twelve “tenses”. The <em>Cambridge Grammar</em> (Huddleston and Pullum 2002) counts only two tenses (present and past) and treats the rest as combinations with aspect and modality. The table is still the most practical overview, as long as one remembers that it is built from a few elements.</p>` },
    { title: 'Each element has a meaning',
      html: `
        <ul>
          <li><strong>past</strong> (<em>-ed</em>, <em>wrote</em>): distance, usually in time, sometimes from reality (<em>if I had time</em>) or politeness (<em>I wanted to ask you</em>);</li>
          <li><strong>perfect</strong> (<em>have</em> + participle): an earlier event viewed from a later reference point;</li>
          <li><strong>progressive</strong> (<em>be</em> + <em>-ing</em>): an event in progress, temporary or incomplete;</li>
          <li><strong>will</strong>: prediction or willingness, the usual way to refer to the future but not the only one.</li>
        </ul>
        <p>The meaning of a complex form is roughly the sum of its parts: <em>she had been writing</em> = past + perfect + progressive = an activity in progress up to a point in the past.</p>` }
  ],

  contrast: `
    <p>There is no one-to-one mapping. A few correspondences to keep in mind:</p>
    <div class="tablewrap"><table>
      <thead><tr><th>German</th><th>English, depending on meaning</th></tr></thead>
      <tbody>
        <tr><td>Präsens<span class="tnote">ich schreibe</span></td><td>I write · I am writing · I will write · I have been writing (with <em>seit</em>)</td></tr>
        <tr><td>Präteritum<span class="tnote">ich schrieb</span></td><td>I wrote · I was writing · I used to write</td></tr>
        <tr><td>Perfekt<span class="tnote">ich habe geschrieben</span></td><td>I wrote · I have written · I will have written</td></tr>
        <tr><td>Plusquamperfekt<span class="tnote">ich hatte geschrieben</span></td><td>I had written · I had been writing</td></tr>
        <tr><td>Futur I<span class="tnote">ich werde schreiben</span></td><td>I will write · I am going to write · I will probably be writing</td></tr>
      </tbody></table></div>
    <p class="contrast">The two richest sources of error for German speakers are visible here: the German Präsens covers ground that English splits between simple, progressive and present perfect (<em>Ich wohne seit zehn Jahren hier = I have lived here for ten years</em>), and the German Perfekt covers ground that English assigns to the simple past (<em>Ich habe ihn gestern gesehen = I saw him yesterday</em>). Lectures 2.3, 2.5 and 2.8 take these in turn.</p>`,

  usage: `
    <p>The number of tenses is a matter of description, not of fact. Whether German has six tenses, or two tenses plus four periphrastic constructions, depends on the theory; the same is true of English twelve. What is fact is the frequency: in German conversation, Präsens and Perfekt do most of the work; in German written narrative, Präteritum; Futur II is rare everywhere. In English, the simple present and simple past dominate, and the progressive has grown markedly over the last two centuries.</p>`,

  latin: `
    <p>Latin has six tenses, all formed synthetically in the active:</p>
    <div class="ex"><p lang="la">laudo · laudabam · laudabo · laudavi · laudaveram · laudavero</p><p class="gl">I praise · I was praising · I will praise · I praised / have praised · I had praised · I will have praised</p></div>
    <p class="latin">German school grammar copied this six-cell model, which is why German has a “Futur II” at all in the textbooks. Latin also distinguishes aspect in the past (imperfect <em>laudabam</em> for ongoing action, perfect <em>laudavi</em> for completed action), the distinction English expresses with the progressive and German not at all.</p>`,

  summary: [
    'Tense is a verb form; time is reality. Both languages have only two true tenses (present and past).',
    'Reichenbach: speech time S, event time E, reference time R. The English present perfect requires R = S.',
    'German: six Tempora, two synthetic; the Präsens and Perfekt can refer to the future.',
    'English: two tenses × perfect × progressive × will = the twelve forms of the textbooks.',
    'German Präsens ↔ English simple, progressive or present perfect; German Perfekt ↔ English past simple or present perfect.',
    'The six-tense model is borrowed from Latin.'
  ],

  cards: [
    { id: 'reichenbach', title: 'Reichenbach: S, R, E', tags: ['tense', 'Tempus', 'reference time'], html: `
      <p>S speech time · E event time · R reference time.<br>past: E = R &lt; S · present perfect: E &lt; R = S · pluperfect: E &lt; R &lt; S · future: S &lt; R = E · future perfect: S &lt; E &lt; R.</p>
      <p>Because the present perfect has R = S, it cannot take a past time adverb: <em>*I have seen him yesterday</em>.</p>` },
    { id: 'tense-map', title: 'German tense → English form', tags: ['Präsens', 'Perfekt', 'present perfect'], html: `
      <p><strong>Präsens</strong>: I write / am writing / will write / have been writing (seit).<br><strong>Präteritum</strong>: I wrote / was writing / used to write.<br><strong>Perfekt</strong>: I wrote / have written / will have written.<br><strong>Futur I</strong>: I will write / am going to write.</p>` }
  ],

  terms: [
    { en: 'tense', de: 'Tempus', la: 'tempus' },
    { en: 'present', de: 'Präsens', la: 'praesens' },
    { en: 'past, preterite', de: 'Präteritum', la: 'praeteritum' },
    { en: 'present perfect', de: '(Perfekt: nicht gleichbedeutend)', la: 'perfectum', note: 'False friend at the level of grammar.' },
    { en: 'pluperfect, past perfect', de: 'Plusquamperfekt', la: 'plus quam perfectum “more than complete”' },
    { en: 'future', de: 'Futur I', la: 'futurum' },
    { en: 'future perfect', de: 'Futur II', la: 'futurum exactum' },
    { en: 'synthetic / analytic (periphrastic)', de: 'synthetisch / analytisch', la: '' },
    { en: 'historical present', de: 'historisches Präsens', la: 'praesens historicum' },
    { en: 'reference time', de: 'Referenzzeit, Betrachtzeit', la: '', note: 'Reichenbach 1947.' },
    { en: 'progressive aspect', de: 'Verlaufsform, Progressiv', la: '' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: 'How many tenses do German and English form without an auxiliary?', options: ['Two each', 'German six, English twelve', 'German two, English three', 'German six, English two'], answer: 0, explain: 'Present and past: <em>gehe/ging</em>, <em>go/went</em>.' },
    { id: 'e2', type: 'match', prompt: 'Match the German sentence to its natural English equivalent.', pairs: [['Ich wohne seit zehn Jahren hier.', 'I have lived here for ten years.'], ['Ich habe ihn gestern gesehen.', 'I saw him yesterday.'], ['Ich fliege morgen nach Berlin.', 'I’m flying to Berlin tomorrow.'], ['Sie schrieb gerade einen Brief.', 'She was writing a letter.']], explain: 'German Präsens with <em>seit</em> → present perfect; Perfekt with a past adverb → past simple; Präsens for plans → present progressive.' },
    { id: 'e3', type: 'mc', prompt: 'Why is <span lang="en" class="bad">I have seen him yesterday</span> wrong?', options: ['The present perfect views the event from now (R = S); “yesterday” fixes it in the past', 'Because “seen” is irregular', 'It is correct in British English', 'Because “yesterday” needs the progressive'], answer: 0, explain: 'In Reichenbach’s terms the present perfect has its reference time at the moment of speaking; a past adverb conflicts with that.' },
    { id: 'e4', type: 'mc', lang: 'de', prompt: '<span lang="de">Er wird wohl krank sein.</span> What does the Futur I express here?', options: ['A supposition about the present', 'A future event', 'A command', 'A past event'], answer: 0, explain: '<em>werden</em> + infinitive with <em>wohl</em> expresses probability, not future time: “He’s probably ill.”' },
    { id: 'e5', type: 'mc', prompt: '<span lang="en">She had been writing</span> combines …', options: ['past + perfect + progressive', 'present + perfect + progressive', 'past + progressive only', 'future + perfect'], answer: 0, explain: '<em>had</em> (past), <em>been</em> (perfect), <em>writing</em> (progressive).' },
    { id: 'e6', type: 'mc', lang: 'de', prompt: '<span lang="de">Ich habe das schon gemacht gehabt.</span> In written standard German this is …', options: ['not correct; it is a spoken, mainly southern form', 'the correct Plusquamperfekt', 'correct Futur II', 'correct but old-fashioned'], answer: 0, explain: 'The double perfect is described by grammars but not accepted in the written standard. Standard: <em>Ich hatte das schon gemacht.</em>' }
  ]
});
