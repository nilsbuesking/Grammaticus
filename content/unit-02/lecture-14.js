/*
 * Unit 2, lecture 14: infinitives, participles and gerunds. Content file only. German section in German.
 */
Grammaticus.addLecture({
  id: '2.14', unit: 2, number: 14,
  title: 'Infinitives, participles and gerunds',
  subtitle: 'zu or no zu, to-infinitive or -ing, and the long German participle phrase that English unpacks',
  minutes: 30,

  intro: `
    <p>The non-finite forms of the verb (infinitive, participles and, in English, the gerund) do much of the work of compressing information into fewer clauses. German packs whole relative clauses into a participle in front of the noun (<em>die von der Bank im März geprüften Unterlagen</em>); English chooses between <em>to do</em> and <em>doing</em> after each verb, with no general rule. Both are frequent sources of error in the other language.</p>`,

  concept: [
    { title: 'Non-finite forms',
      html: `
        <p>Non-finite forms show no person or tense of their own. They allow a verb to act as part of a larger structure:</p>
        <ul>
          <li><strong>infinitive</strong>: <em>(zu) arbeiten, (to) work</em>;</li>
          <li><strong>present participle</strong> (Partizip I): <em>arbeitend, working</em>: active, ongoing;</li>
          <li><strong>past participle</strong> (Partizip II): <em>gearbeitet, geprüft; worked, checked</em>: completed, often passive;</li>
          <li><strong>gerund</strong> (English only): <em>working</em> used as a noun.</li>
        </ul>` }
  ],

  german: [
    { title: 'Infinitiv mit und ohne zu',
      html: `
        <p><strong>Ohne zu</strong> nach Modalverben, nach <em>werden</em>, nach <em>lassen</em>, nach Wahrnehmungsverben (<em>sehen, hören, fühlen, spüren</em>) und nach <em>gehen, bleiben, lernen, helfen</em> (meist):</p>
        <div class="ex"><p lang="de">Ich muss gehen. · Ich lasse das Auto reparieren. · Ich sehe ihn kommen. · Wir gehen essen. · Bleiben Sie sitzen.</p></div>
        <p><strong>Mit zu</strong> nach den meisten anderen Verben, Adjektiven und Nomen, und in den Konstruktionen mit <em>um, ohne, (an)statt</em>:</p>
        <div class="ex"><p lang="de">Ich versuche, pünktlich zu sein. · Es ist schwer, das zu erklären. · Sie hat keine Zeit, den Bericht zu lesen.</p><p lang="de">Er kam, um sich zu verabschieden. · Sie ging, ohne zu grüßen. · Statt zu warten, rief er an.</p></div>
        <p>Bei trennbaren Verben steht <em>zu</em> zwischen Partikel und Stamm: <em>anzurufen, einzukaufen</em>. Die Kommasetzung bei Infinitivgruppen folgt in Einheit 5.</p>` },
    { title: 'Die Partizipien',
      html: `
        <ul>
          <li><strong>Partizip I</strong> (Infinitiv + <em>-d</em>): gleichzeitig, aktiv: <em>der lachende Kunde, die steigenden Preise</em>.</li>
          <li><strong>Partizip II</strong>: abgeschlossen, bei transitiven Verben passiv: <em>der geprüfte Bericht, die verkauften Aktien</em>; bei <em>sein</em>-Verben aktiv: <em>der angekommene Zug</em>.</li>
          <li><strong>zu + Partizip I</strong> (Gerundivum): Notwendigkeit, passiv: <em>die zu prüfenden Unterlagen</em> (= die Unterlagen, die geprüft werden müssen).</li>
        </ul>` },
    { title: 'Das erweiterte Partizipialattribut',
      html: `
        <p>Das Deutsche kann Partizipien vor dem Nomen beliebig erweitern. So entstehen lange Nominalgruppen, die für Verwaltungs-, Wissenschafts- und Zeitungssprache typisch sind:</p>
        <div class="ex"><p lang="de">die <u class="k">von der Bank im März geprüften</u> Unterlagen</p><p class="gl">= die Unterlagen, die die Bank im März geprüft hat</p><p lang="de">der <u class="k">seit Jahren in London lebende</u> Autor</p><p lang="de">die <u class="k">bis Ende des Monats einzureichenden</u> Anträge</p></div>
        <p>Diese Konstruktion ist korrekt und kompakt, wird aber schwer lesbar, wenn die Erweiterung lang wird, weil der Leser das Nomen erst ganz am Ende erfährt (Einheit 8).</p>` }
  ],

  english: [
    { title: 'to-infinitive or bare infinitive',
      html: `
        <p>The <strong>bare infinitive</strong> follows modal verbs, <em>do</em>, <em>make, let, have</em> (causative) and verbs of perception; everywhere else the <strong>to-infinitive</strong>:</p>
        <div class="ex"><p lang="en">You must go. · Let me explain. · She made him wait. · I saw him leave.</p><p lang="en">I want to go. · It’s hard to explain. · We decided to wait.</p></div>
        <p>In the passive, <em>make</em> and perception verbs take <em>to</em>: <em>He was made to wait. She was seen to leave.</em></p>` },
    { title: 'Gerund or infinitive after a verb',
      html: `
        <p>There is no general rule; each verb has its pattern. Tendencies: the gerund for what is real, ongoing or already experienced; the infinitive for what is potential or still to come.</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Pattern</th><th>Verbs</th></tr></thead>
          <tbody>
            <tr><td>+ -ing</td><td>enjoy, avoid, consider, finish, mind, suggest, recommend, deny, risk, keep, miss, postpone, can’t help, look forward to, be used to</td></tr>
            <tr><td>+ to-infinitive</td><td>want, decide, hope, plan, agree, refuse, promise, offer, afford, manage, fail, expect, seem, tend</td></tr>
            <tr><td>both, same meaning</td><td>begin, start, continue, prefer, like, love, hate (BrE like + -ing for enjoyment)</td></tr>
          </tbody></table></div>` },
    { title: 'Both, with different meanings',
      html: `
        <div class="ex">
          <p lang="en">I stopped <u class="k">smoking</u>. <span class="gl">ich habe aufgehört zu rauchen</span> · I stopped <u class="k">to smoke</u>. <span class="gl">ich hielt an, um zu rauchen</span></p>
          <p lang="en">Remember <u class="k">to lock</u> the door. <span class="gl">vergiss nicht</span> · I remember <u class="k">locking</u> it. <span class="gl">ich erinnere mich daran</span></p>
          <p lang="en">I forgot <u class="k">to send</u> it. · I’ll never forget <u class="k">meeting</u> her.</p>
          <p lang="en">Try <u class="k">to stay</u> calm. <span class="gl">make an effort</span> · Try <u class="k">restarting</u> it. <span class="gl">as an experiment</span></p>
          <p lang="en">I regret <u class="k">to inform</u> you … <span class="gl">formal: I am sorry to</span> · I regret <u class="k">saying</u> that.</p>
        </div>` },
    { title: 'Participle clauses',
      html: `
        <p>English uses participles to shorten clauses, after the noun or at the start of a sentence:</p>
        <div class="ex"><p lang="en">the documents <u class="k">checked by the bank in March</u> <span class="gl">after the noun, not before</span></p><p lang="en">the man <u class="k">sitting by the window</u></p><p lang="en"><u class="k">Having checked</u> the figures, she signed. <span class="gl">the subject must match (lecture 0.4)</span></p></div>` }
  ],

  contrast: `
    <ul>
      <li><strong>Long participle before the noun</strong>: German puts it in front, English after: <em>die von der Bank geprüften Unterlagen = the documents checked by the bank</em>. <span class="bad">the by the bank checked documents</span> is impossible in English; a single participle can stand in front (<em>the checked documents</em>).</li>
      <li><strong>Gerund</strong>: English <em>I look forward to hearing from you</em>; German <em>Ich freue mich darauf, von Ihnen zu hören</em>. German has no gerund and uses a <em>zu</em>-infinitive, a <em>dass</em>-clause or a noun.</li>
      <li><strong>Perception verbs</strong>: <em>Ich sah ihn kommen = I saw him come / coming</em> (the <em>-ing</em> stresses the action in progress).</li>
      <li><strong><em>lassen</em></strong>: causative <em>Ich lasse das Auto reparieren = I’m having the car repaired</em> (not <span class="odd">I let repair the car</span>); permissive <em>Ich lasse ihn gehen = I let him go</em>.</li>
      <li><strong><em>um … zu</em></strong>: English <em>to</em> or <em>in order to</em>, never <span class="bad">for to</span> or <span class="bad">for doing</span> for purpose: <em>I came to say goodbye.</em></li>
    </ul>`,

  usage: `
    <ul>
      <li><strong><em>like doing / like to do</em></strong>: British English tends to <em>I like swimming</em> for enjoyment and <em>I like to check twice</em> for habit or preference; American English uses <em>like to</em> more broadly.</li>
      <li><strong><em>Look forward to hear</em></strong> is a very common error even among proficient writers; <em>to</em> here is a preposition, so the gerund follows.</li>
      <li><strong>German <em>helfen</em></strong> with or without <em>zu</em>: <em>Sie hilft mir umziehen</em> and <em>Sie hilft mir, die Kisten zu tragen</em>; the longer the infinitive group, the more usual <em>zu</em>.</li>
    </ul>`,

  style: `
    <ul>
      <li>German: unpack a long participle attribute into a relative clause when the reader would otherwise wait too long for the noun: <em>die Unterlagen, die die Bank im März geprüft hat</em>.</li>
      <li>English: participle clauses make prose concise (<em>Founded in 1865, the bank …</em>), but check that the implied subject is the main-clause subject.</li>
    </ul>`,

  pitfalls: `
    <ul>
      <li><span class="bad">I look forward to hear from you.</span> → <em>to hearing</em>.</li>
      <li><span class="bad">I suggest to postpone the meeting.</span> → <em>I suggest postponing the meeting / that we postpone it.</em></li>
      <li><span class="bad">We are used to work late.</span> → <em>We are used to working late</em> (be used to + -ing) against <em>We used to work late</em> (früher).</li>
      <li><span class="bad">He made me to wait.</span> → <em>He made me wait.</em></li>
      <li>German: <span class="bad">Er versuchte anrufen.</span> → <em>Er versuchte anzurufen.</em></li>
    </ul>`,

  latin: `
    <p>The English term <em>gerund</em> comes from the Latin <em>gerundium</em>, the verbal noun (<em>ars scribendi</em> “the art of writing”). The Latin <em>gerundivum</em> is a passive verbal adjective of necessity (<em>liber legendus</em> “a book to be read”), the model for the German <em>zu</em> + Partizip I: <em>das zu lesende Buch</em>.</p>
    <p class="latin">Latin perception verbs take the accusative and infinitive (<em>video eum venire</em> “I see him come”), exactly the English and German pattern <em>I see him come / Ich sehe ihn kommen</em>.</p>`,

  summary: [
    'German infinitive without zu after modals, werden, lassen, perception verbs, gehen, bleiben; otherwise zu (um/ohne/statt … zu).',
    'German Partizip I active and ongoing (steigende Preise); Partizip II completed, passive with transitive verbs; zu + Partizip I = must be done (die zu prüfenden Unterlagen).',
    'German extended participle attributes stand before the noun; English puts participle phrases after it: the documents checked by the bank.',
    'English bare infinitive after modals, make, let, perception verbs; otherwise to.',
    'English verbs take -ing (enjoy, avoid, suggest, look forward to) or to (want, decide, hope, manage); stop, remember, forget, try, regret change meaning.',
    'Latin gave the terms gerund and gerundive; the accusative + infinitive after perception verbs is shared by all three languages.'
  ],

  cards: [
    { id: 'ing-to', title: '-ing or to after verbs', tags: ['gerund', 'infinitive', 'enjoy', 'suggest'], html: `
      <p><strong>-ing</strong>: enjoy, avoid, consider, finish, mind, suggest, recommend, deny, risk, keep, postpone, look forward to, be used to.<br><strong>to</strong>: want, decide, hope, plan, agree, refuse, promise, offer, afford, manage, fail, expect, seem.<br><strong>meaning changes</strong>: stop, remember, forget, try, regret.</p>` },
    { id: 'zu', title: 'Infinitiv ohne zu', tags: ['zu', 'Infinitiv', 'lassen'], html: `
      <p>Modalverben, werden, lassen, sehen/hören/fühlen, gehen, bleiben, (lernen, helfen meist). Sonst mit zu; trennbar: anzurufen.</p>` },
    { id: 'partizipattribut', title: 'Participle before/after the noun', tags: ['Partizipialattribut', 'participle'], html: `
      <p>DE: die <em>von der Bank im März geprüften</em> Unterlagen.<br>EN: the documents <em>checked by the bank in March</em>.<br>One-word participles can precede in English: the checked documents.</p>` }
  ],

  terms: [
    { en: 'infinitive', de: 'Infinitiv, Grundform', la: 'infinitivus “unlimited”' },
    { en: 'present participle', de: 'Partizip I, Partizip Präsens', la: 'participium praesentis' },
    { en: 'extended participial attribute', de: 'erweitertes Partizipialattribut', la: '' },
    { en: 'gerundive', de: 'Gerundivum (zu + Partizip I)', la: 'gerundivum' },
    { en: 'participle clause', de: 'Partizipialkonstruktion', la: '' },
    { en: 'causative', de: 'kausativ (lassen)', la: 'causa “cause”' },
    { en: 'bare infinitive', de: 'reiner Infinitiv (ohne zu)', la: '' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: '<span lang="en">I look forward to ___ from you.</span>', options: ['hearing', 'hear', 'have heard'], answer: 0, keepOrder: true, explain: '<em>to</em> is a preposition here: gerund.' },
    { id: 'e2', type: 'mc', prompt: '<span lang="en">I suggest ___ the meeting to Thursday.</span>', options: ['postponing', 'to postpone', 'postpone'], answer: 0, keepOrder: true, explain: '<em>suggest</em> + -ing (or <em>that we postpone</em>).' },
    { id: 'e3', type: 'mc', prompt: 'Translate <span lang="de">die von der Bank im März geprüften Unterlagen</span>', options: ['the documents checked by the bank in March', 'the by the bank in March checked documents', 'the documents which the bank in March has checked'], answer: 0, keepOrder: true, explain: 'English puts the participle phrase after the noun.' },
    { id: 'e4', type: 'gap', lang: 'de', prompt: '<span lang="de">Ich habe vergessen, ihn ___.</span> (anrufen)', answers: ['anzurufen'], cs: true, explain: 'Separable verb: <em>zu</em> between particle and stem.' },
    { id: 'e5', type: 'match', prompt: 'Match the meaning.', pairs: [['I stopped smoking.', 'Ich habe mit dem Rauchen aufgehört.'], ['I stopped to smoke.', 'Ich hielt an, um zu rauchen.'], ['Remember to call him.', 'Denk daran, ihn anzurufen.'], ['I remember calling him.', 'Ich erinnere mich, dass ich ihn angerufen habe.']], explain: 'With <em>stop</em> and <em>remember</em>, -ing and to differ in meaning.' },
    { id: 'e6', type: 'mc', prompt: 'Translate <span lang="de">Ich lasse das Auto reparieren.</span>', options: ['I’m having the car repaired.', 'I let repair the car.', 'I let the car repair.'], answer: 0, keepOrder: true, explain: 'Causative <em>lassen</em> = <em>have something done</em>.' },
    { id: 'e7', type: 'mc', lang: 'de', prompt: '<span lang="de">die zu prüfenden Unterlagen</span> means …', options: ['the documents that must be checked', 'the documents that were checked', 'the documents that are checking'], answer: 0, keepOrder: true, explain: '<em>zu</em> + Partizip I expresses necessity, passive (Latin gerundive).' },
    { id: 'e8', type: 'mc', prompt: '<span lang="en">We are used to ___ late.</span>', options: ['working', 'work'], answer: 0, keepOrder: true, explain: '<em>be used to</em> + -ing (gewohnt sein); <em>used to work</em> = früher.' }
  ]
});
