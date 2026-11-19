/*
 * Unit 2, lecture 9: modal verbs. Content file only. German section in German.
 */
Grammaticus.addLecture({
  id: '2.9', unit: 2, number: 9,
  title: 'Modal verbs',
  subtitle: 'Obligation, permission, ability and likelihood, and the false friends müssen nicht / must not',
  minutes: 30,

  intro: `
    <p>Modal verbs express the speaker’s attitude to an event: whether it is necessary, allowed, possible, wanted or likely. German and English have closely related sets (<em>müssen – must, können – can, sollen – shall</em>), but over the centuries the meanings have drifted apart, producing some of the most treacherous false friends in either language.</p>`,

  concept: [
    { title: 'Two kinds of modality',
      html: `
        <ul>
          <li><strong>Deontic</strong> modality concerns obligation and permission, what is required or allowed: <em>You must sign here. Du darfst hier parken.</em></li>
          <li><strong>Epistemic</strong> modality concerns the speaker’s judgement of likelihood: <em>He must be ill. Sie kann nicht zu Hause sein.</em></li>
        </ul>
        <p>Most modal verbs can do both, and the difference is often in the construction: epistemic uses frequently combine with a perfect infinitive (<em>He must have missed the train; Er muss den Zug verpasst haben</em>) or with stative verbs.</p>` },
    { title: 'Grammatical oddities',
      html: `
        <p>The modal verbs are old preterite-presents (lecture 2.1): <em>er kann, she can</em> without an ending. English modals have gone further and lost their infinitives and participles altogether: there is no <em>*to can</em> or <em>*musted</em>, hence the substitutes <em>be able to, have to</em>. German modals are still full verbs with all forms.</p>` }
  ],

  german: [
    { title: 'Die sechs Modalverben',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th>Verb</th><th>Grundbedeutung · Beispiel</th></tr></thead>
          <tbody>
            <tr><td>müssen</td><td>Notwendigkeit, Zwang<span class="tnote">Ich muss heute länger arbeiten.</span></td></tr>
            <tr><td>können</td><td>Fähigkeit, Möglichkeit, Erlaubnis<span class="tnote">Sie kann gut rechnen. Kann ich kurz stören?</span></td></tr>
            <tr><td>dürfen</td><td>Erlaubnis; verneint: Verbot<span class="tnote">Hier darf man parken. Hier darf man nicht rauchen.</span></td></tr>
            <tr><td>sollen</td><td>Auftrag oder Rat eines anderen; Hörensagen<span class="tnote">Ich soll Sie grüßen. Er soll sehr reich sein.</span></td></tr>
            <tr><td>wollen</td><td>Absicht, Wille; fremde Behauptung<span class="tnote">Ich will kündigen. Er will nichts gesehen haben.</span></td></tr>
            <tr><td>mögen / möchte</td><td>Vorliebe; (möchte) höflicher Wunsch<span class="tnote">Ich mag keinen Kaffee. Ich möchte einen Tee.</span></td></tr>
          </tbody></table></div>
        <p><em>möchte</em> ist formal der Konjunktiv II von <em>mögen</em>, wird aber wie ein eigenes Verb gebraucht. Seine Vergangenheit ist <em>wollte</em>: <em>Ich wollte einen Tee</em>.</p>` },
    { title: 'Epistemische Lesarten',
      html: `
        <div class="ex">
          <p lang="de">Er <u class="k">muss</u> krank sein. <span class="gl">fast sicher</span></p>
          <p lang="de">Er <u class="k">dürfte</u> krank sein. <span class="gl">wahrscheinlich</span></p>
          <p lang="de">Er <u class="k">kann</u> / <u class="k">könnte</u> krank sein. <span class="gl">möglich</span></p>
          <p lang="de">Er <u class="k">kann</u> nicht krank sein. <span class="gl">ausgeschlossen</span></p>
          <p lang="de">Er <u class="k">soll</u> krank sein. <span class="gl">man sagt es</span></p>
          <p lang="de">Er <u class="k">will</u> krank gewesen sein. <span class="gl">er behauptet es, ich zweifle</span></p>
        </div>` },
    { title: 'Der Ersatzinfinitiv',
      html: `
        <p>Im Perfekt steht bei einem abhängigen Infinitiv der Infinitiv des Modalverbs statt des Partizips:</p>
        <div class="ex"><p lang="de">Ich habe arbeiten <u class="k">müssen</u>. <span class="gl">nicht: gemusst</span></p><p lang="de">Sie hat nicht kommen <u class="k">können</u>.</p><p lang="de">Ich habe es <u class="k">gemusst</u>. <span class="gl">ohne abhängigen Infinitiv: Partizip</span></p></div>
        <p>Im Nebensatz steht das finite Hilfsverb dann vor den Infinitiven: <em>…, weil ich <u class="k">habe</u> arbeiten müssen</em>. Das wirkt umständlich; im Gespräch weicht man ins Präteritum aus: <em>weil ich arbeiten musste</em>.</p>` },
    { title: 'nicht müssen und nicht brauchen',
      html: `
        <p>Die Verneinung von <em>müssen</em> ist <em>nicht müssen</em> oder <em>nicht brauchen zu</em>: <em>Du musst nicht kommen / Du brauchst nicht zu kommen</em> = es ist nicht nötig. Ein Verbot ist <em>nicht dürfen</em>: <em>Du darfst nicht kommen</em>.</p>
        <p><em>brauchen</em> ohne <em>zu</em> (<em>Du brauchst nicht kommen</em>) ist in der gesprochenen Sprache sehr verbreitet; die Duden-Grammatik verzeichnet es, im geschriebenen Standard gilt <em>zu</em> weiterhin als korrekt. Der Schulmerksatz „Wer brauchen ohne zu gebraucht, braucht brauchen gar nicht zu gebrauchen“ hält sich hartnäckig.</p>` }
  ],

  english: [
    { title: 'The core modals and their substitutes',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th>Modal</th><th>Uses · substitute where needed</th></tr></thead>
          <tbody>
            <tr><td>must</td><td>obligation from the speaker; strong deduction<span class="tnote">You must sign here. She must be in a meeting. · have to</span></td></tr>
            <tr><td>have to</td><td>obligation from outside; all tenses<span class="tnote">I have to submit it by Friday. I had to leave early.</span></td></tr>
            <tr><td>can / could</td><td>ability, possibility, permission, requests<span class="tnote">Can I come in? Could you help me? · be able to</span></td></tr>
            <tr><td>may / might</td><td>possibility; formal permission<span class="tnote">It may rain. You may leave now. · be allowed to</span></td></tr>
            <tr><td>should / ought to</td><td>advice, expectation<span class="tnote">You should check the figures. It should arrive today.</span></td></tr>
            <tr><td>will / would</td><td>prediction, willingness, habit, politeness<span class="tnote">Would you mind …? He would always arrive late.</span></td></tr>
            <tr><td>need (to)</td><td>necessity<span class="tnote">You need to register. You needn’t / don’t need to come.</span></td></tr>
          </tbody></table></div>
        <p>Because the core modals have no infinitive or participle, other tenses need the substitutes: <em>I will have to leave; she has been able to; we had to</em>.</p>` },
    { title: 'Deduction and the perfect',
      html: `
        <div class="ex">
          <p lang="en">She <u class="k">must</u> be in a meeting. <span class="gl">almost certain</span></p>
          <p lang="en">She <u class="k">can’t</u> be in a meeting. <span class="gl">impossible (not: mustn’t)</span></p>
          <p lang="en">She <u class="k">may</u> / <u class="k">might</u> / <u class="k">could</u> be in a meeting. <span class="gl">possible</span></p>
          <p lang="en">She <u class="k">must have</u> forgotten. · She <u class="k">can’t have</u> forgotten. · She <u class="k">might have</u> forgotten.</p>
          <p lang="en">You <u class="k">should have</u> told me. <span class="gl">reproach: Du hättest es mir sagen sollen.</span></p>
        </div>` },
    { title: 'Change in progress',
      html: `
        <p>The core modals have been declining in frequency. Between the 1960s and the 1990s, <em>must</em> fell by about 29 per cent in written British English and over 50 per cent in speech, <em>may</em> by about 18 and 40 per cent, <em>shall</em> by over 40 per cent. Much of the ground has gone to the “semi-modals”: <em>have to, need to, have got to, be going to, want to</em>.</p>
        <p class="src">Leech et al., Change in Contemporary English (2009), figures as summarised by Oxford University Press.</p>` }
  ],

  contrast: `
    <div class="tablewrap"><table>
      <thead><tr><th>German</th><th>English</th></tr></thead>
      <tbody>
        <tr><td>Du musst nicht kommen.<span class="tnote">nicht nötig</span></td><td>You don’t have to / needn’t come.</td></tr>
        <tr><td>Du darfst nicht kommen.<span class="tnote">verboten</span></td><td>You mustn’t come. / You’re not allowed to come.</td></tr>
        <tr><td>Ich will nach Hause.</td><td>I want to go home.</td></tr>
        <tr><td>Ich soll Sie grüßen.</td><td>X asked me to give you their regards.</td></tr>
        <tr><td>Er soll reich sein.</td><td>He is said to be rich. / Apparently he’s rich.</td></tr>
        <tr><td>Er will nichts gesehen haben.</td><td>He claims not to have seen anything.</td></tr>
        <tr><td>Sie kann gut Englisch.</td><td>She speaks good English.</td></tr>
        <tr><td>Du hättest anrufen sollen.</td><td>You should have called.</td></tr>
        <tr><td>Das mag sein.</td><td>That may be (so).</td></tr>
      </tbody></table></div>
    <p class="contrast">The worst trap: <em>must not</em> means <em>nicht dürfen</em>, and <em>müssen nicht</em> means <em>don’t have to</em>. A German speaker who writes <em>You must not attend the meeting</em>, meaning that attendance is optional, has forbidden it.</p>`,

  usage: `
    <ul>
      <li><strong><em>Can I</em> or <em>May I</em>?</strong> Schoolteachers long insisted on <em>may</em> for permission. Usage guides now accept <em>can</em> as standard; <em>may</em> remains more formal and deferential. Corpus data show <em>can</em> far ahead in speech.</li>
      <li><strong><em>must</em> against <em>have to</em></strong>: the textbook distinction (internal versus external obligation) is a tendency, not a rule; British speakers use it more consistently than American speakers, who mostly say <em>have to</em>.</li>
      <li><strong><em>brauchen</em> without <em>zu</em></strong>: see the German section. Accepted in speech, avoided in formal writing.</li>
      <li><strong><em>bräuchte</em></strong> as Konjunktiv II of <em>brauchen</em>: marked as southern and colloquial in the Duden grammar, standard in Austria. The northern standard form is <em>brauchte</em> (identical to the Präteritum), often replaced by <em>würde brauchen</em>.</li>
    </ul>`,

  pitfalls: `
    <ul>
      <li><span class="bad">You must not send it today</span> when you mean “it is not necessary” → <em>You don’t have to send it today.</em></li>
      <li><span class="bad">I must have to leave.</span> Two modals cannot be combined in standard English → <em>I will have to leave.</em></li>
      <li><span class="bad">I want that you come.</span> (from <em>Ich will, dass du kommst</em>) → <em>I want you to come.</em></li>
      <li><span class="odd">He shall come tomorrow.</span> (from <em>Er soll morgen kommen</em>) → <em>He is supposed to come tomorrow.</em> English <em>shall</em> with a third-person subject sounds like a command or a contract.</li>
      <li>German: <span class="bad">Ich habe es machen gemusst</span> → <em>Ich habe es machen müssen.</em></li>
    </ul>`,

  latin: `
    <p>Latin has no class of modal auxiliaries; it uses ordinary verbs with an infinitive (<em>possum</em> “I can”, <em>debeo</em> “I ought”, <em>volo</em> “I want”) and, for obligation, the gerundive with <em>esse</em>:</p>
    <div class="ex"><p lang="la">Carthago delenda est.</p><p class="gl">Carthage must be destroyed (is to-be-destroyed).</p></div>
    <p class="latin">The German construction <em>Der Antrag ist bis Freitag einzureichen</em> (“is to be submitted”) works in the same way: <em>sein + zu</em> + infinitive as a passive of obligation.</p>`,

  summary: [
    'Deontic modality = obligation/permission; epistemic = likelihood. Most modals do both.',
    'German: müssen, können, dürfen, sollen, wollen, mögen/möchte; full verbs with Ersatzinfinitiv (hat arbeiten müssen).',
    'English core modals lack infinitives and participles: will have to, had to, been able to.',
    'müssen nicht = don’t have to; nicht dürfen = mustn’t.',
    'sollen = be supposed to / is said to; wollen = want / claim; Er soll reich sein = He is said to be rich.',
    'Core modals (must, may, shall) are declining in English; semi-modals (have to, need to) are rising.'
  ],

  cards: [
    { id: 'must-not', title: 'must not / müssen nicht', tags: ['must', 'müssen', 'dürfen', 'false friend'], html: `
      <p><strong>You mustn’t</strong> = du darfst nicht (forbidden).<br><strong>You don’t have to / needn’t</strong> = du musst nicht, du brauchst nicht zu (not necessary).</p>` },
    { id: 'sollen-wollen', title: 'sollen and wollen in English', tags: ['sollen', 'wollen', 'is said to', 'claims'], html: `
      <p>Ich soll Sie grüßen → X sends their regards.<br>Er soll reich sein → He is said to be rich.<br>Du sollst das nicht tun → You’re not supposed to do that.<br>Er will es gesehen haben → He claims to have seen it.<br>Ich will gehen → I want to go.</p>` },
    { id: 'deduction', title: 'Deduction: must / can’t / might', tags: ['must have', 'can’t have', 'epistemic'], html: `
      <p>must (be/have done) = almost certainly · can’t (be/have done) = certainly not · may/might/could (be/have done) = possibly. Not <em>mustn’t</em> for “certainly not”.</p>` }
  ],

  terms: [
    { en: 'modal verb', de: 'Modalverb', la: 'modus' },
    { en: 'deontic modality', de: 'deontische Modalität', la: 'Greek deon “what is binding”' },
    { en: 'epistemic modality', de: 'epistemische Modalität', la: 'Greek epistēmē “knowledge”' },
    { en: 'semi-modal', de: 'Halbmodalverb', la: '', note: 'have to, need to, be able to.' },
    { en: 'substitute infinitive (double infinitive)', de: 'Ersatzinfinitiv', la: '', note: 'hat kommen müssen.' },
    { en: 'gerundive', de: 'Gerundivum', la: 'gerundivum', note: 'Carthago delenda est.' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: 'Attendance is optional. You write:', options: ['You don’t have to attend the meeting.', 'You must not attend the meeting.', 'You mustn’t to attend the meeting.'], answer: 0, keepOrder: true, explain: '<em>must not</em> forbids; <em>don’t have to</em> = <em>musst nicht</em>.' },
    { id: 'e2', type: 'mc', prompt: 'Translate <span lang="de">Er soll sehr reich sein.</span>', options: ['He is said to be very rich.', 'He shall be very rich.', 'He should be very rich.'], answer: 0, keepOrder: true, explain: 'Epistemic <em>sollen</em> = hearsay: <em>is said to, apparently</em>.' },
    { id: 'e3', type: 'gap', lang: 'de', prompt: '<span lang="de">Ich habe gestern länger arbeiten ___.</span> (müssen)', answers: ['müssen'], cs: true, explain: 'Ersatzinfinitiv: with a dependent infinitive, the modal appears as infinitive, not <em>gemusst</em>.' },
    { id: 'e4', type: 'mc', prompt: 'You are sure she is not at home (the lights are off, the car is gone):', options: ['She can’t be at home.', 'She mustn’t be at home.', 'She doesn’t have to be at home.'], answer: 0, keepOrder: true, explain: 'The negative of epistemic <em>must</em> is <em>can’t</em>.' },
    { id: 'e5', type: 'match', prompt: 'Match.', pairs: [['Du brauchst nicht zu kommen.', 'You needn’t come.'], ['Du darfst nicht kommen.', 'You mustn’t come.'], ['Du hättest kommen sollen.', 'You should have come.'], ['Er will dich gesehen haben.', 'He claims to have seen you.']], explain: 'Four of the classic modal false friends.' },
    { id: 'e6', type: 'mc', prompt: 'Which is correct?', options: ['I will have to leave early.', 'I must have to leave early.', 'I will must leave early.'], answer: 0, keepOrder: true, explain: 'Two core modals cannot combine; use the substitute <em>have to</em>.' },
    { id: 'e7', type: 'mc', prompt: 'Translate <span lang="de">Ich will, dass du mitkommst.</span>', options: ['I want you to come along.', 'I want that you come along.', 'I will that you come along.'], answer: 0, keepOrder: true, explain: '<em>want</em> + object + <em>to</em>-infinitive; <em>want that</em> is not English.' }
  ]
});
