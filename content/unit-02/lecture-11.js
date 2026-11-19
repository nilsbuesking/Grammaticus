/*
 * Unit 2, lecture 11: Konjunktiv II and conditionals. Content file only. German section in German.
 */
Grammaticus.addLecture({
  id: '2.11', unit: 2, number: 11,
  title: 'Konjunktiv II and conditionals',
  subtitle: 'Unreal conditions, wishes and politeness: käme or würde kommen, if I were or if I was',
  minutes: 35,

  intro: `
    <p>Both languages use a past form to talk about what is not real: <em>Wenn ich Zeit hätte; If I had time</em>. German has a dedicated mood for this, the Konjunktiv II, with its own forms and a growing substitute (<em>würde</em> + infinitive). English has the past tense, a single surviving subjunctive form (<em>were</em>), and <em>would</em>. This lecture covers conditional sentences, wishes, comparisons and the polite use of both, and the much-repeated advice that German <em>wenn</em>-clauses should be “würdelos”.</p>`,

  concept: [
    { title: 'Real and unreal',
      html: `
        <ul>
          <li>A <strong>real</strong> (open) condition may or may not be fulfilled: <em>If it rains, we’ll stay in. Wenn es regnet, bleiben wir zu Hause.</em> Both languages use the indicative.</li>
          <li>An <strong>unreal</strong> condition is contrary to fact or presented as unlikely: <em>If I had time, I would help. Wenn ich Zeit hätte, würde ich helfen.</em></li>
          <li>An unreal condition about the <strong>past</strong> cannot be fulfilled at all: <em>If I had known, I would have come. Wenn ich es gewusst hätte, wäre ich gekommen.</em></li>
        </ul>
        <p>English teaching calls these the first, second and third conditional. The “past” in the unreal forms expresses distance from reality, not past time.</p>` }
  ],

  german: [
    { title: 'Die Formen des Konjunktivs II',
      html: `
        <p>Der Konjunktiv II wird vom Präteritumstamm gebildet, bei starken Verben meist mit Umlaut und mit <em>-e</em>:</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Indikativ Präteritum</th><th>Konjunktiv II</th></tr></thead>
          <tbody>
            <tr><td>war, hatte, wurde</td><td>wäre, hätte, würde</td></tr>
            <tr><td>kam, ging, gab</td><td>käme, ginge, gäbe</td></tr>
            <tr><td>wusste, konnte, musste, durfte</td><td>wüsste, könnte, müsste, dürfte</td></tr>
            <tr><td>sollte, wollte</td><td>sollte, wollte (gleich)</td></tr>
            <tr><td>machte, sagte (schwach)</td><td>machte, sagte (gleich)</td></tr>
          </tbody></table></div>
        <p>Die Vergangenheit: <em>hätte/wäre</em> + Partizip II: <em>Wenn ich das gewusst hätte, wäre ich gekommen.</em> Mit Modalverb: <em>Ich hätte kommen können / sollen.</em></p>` },
    { title: 'Die würde-Form',
      html: `
        <p><em>würde</em> + Infinitiv ersetzt den Konjunktiv II in drei Fällen:</p>
        <ul>
          <li>wenn die Form dem Präteritum gleicht, also bei allen schwachen Verben: <em>Wenn es regnen würde</em> statt <em>Wenn es regnete</em> (mehrdeutig);</li>
          <li>wenn die synthetische Form veraltet oder ungebräuchlich ist: <em>würde helfen</em> statt <em>hülfe/hälfe</em>, <em>würde befehlen</em> statt <em>beföhle</em>;</li>
          <li>in der gesprochenen Sprache allgemein, auch bei häufigen starken Verben: <em>würde kommen</em> neben <em>käme</em>.</li>
        </ul>
        <p>Bei <em>sein, haben, werden</em>, den Modalverben und häufigen Verben wie <em>wissen, geben, gehen, kommen</em> bevorzugt der geschriebene Standard die einfache Form: <em>wäre, hätte, könnte, wüsste, gäbe</em>.</p>
        <p>Die würde-Form ist nicht neu. Sie setzte sich schon im Frühneuhochdeutschen bei den schwachen Verben durch, gerade um die Verwechslung mit dem Präteritum zu vermeiden, trat zuerst in irrealen Bedingungssätzen auf und breitete sich dann aus.</p>
        <p class="src">Szczepaniak (2011), nach einer Darstellung im Friedrich Verlag; Duden-Sprachratgeber „Konjunktiv I oder II“.</p>` },
    { title: 'Verwendungen',
      html: `
        <ul>
          <li><strong>Irreale Bedingung</strong>: <em>Wenn ich mehr Zeit hätte, würde ich Italienisch lernen.</em></li>
          <li><strong>Ohne wenn</strong>, mit Verberststellung: <em>Hätte ich das gewusst, wäre ich gekommen.</em></li>
          <li><strong>Wunsch</strong>: <em>Wenn ich doch mehr Zeit hätte! Hätte ich doch …!</em></li>
          <li><strong>Irrealer Vergleich</strong>: <em>Er tat, als ob er krank wäre / als wäre er krank.</em></li>
          <li><strong>Höflichkeit</strong>: <em>Könnten Sie mir helfen? Hätten Sie kurz Zeit? Ich würde vorschlagen, … Es wäre schön, wenn …</em></li>
          <li><strong>Vorsichtige Aussage</strong>: <em>Das dürfte reichen. Ich würde sagen, …</em></li>
          <li><strong>Ersatz für Konjunktiv I</strong> in der indirekten Rede (Lektion 2.12).</li>
        </ul>` }
  ],

  english: [
    { title: 'Conditional sentences',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th>Type</th><th>if-clause · main clause</th></tr></thead>
          <tbody>
            <tr><td>real (first)</td><td>If the bank <u class="k">agrees</u>, we <u class="k">will</u> go ahead.<span class="tnote">present · will</span></td></tr>
            <tr><td>unreal present (second)</td><td>If we <u class="k">had</u> the money, we <u class="k">would</u> go ahead.<span class="tnote">past · would</span></td></tr>
            <tr><td>unreal past (third)</td><td>If we <u class="k">had had</u> the money, we <u class="k">would have</u> gone ahead.<span class="tnote">past perfect · would have</span></td></tr>
            <tr><td>mixed</td><td>If we had signed last year, we would be in profit now.<span class="tnote">past condition, present result</span></td></tr>
            <tr><td>zero (general truth)</td><td>If you heat ice, it melts.</td></tr>
          </tbody></table></div>
        <p class="rule">No <em>would</em> in the <em>if</em>-clause, just as there is no <em>will</em> there (lecture 2.7): <em>if I had known</em>, not <em>if I would have known</em>.</p>` },
    { title: 'were',
      html: `
        <p>In unreal conditions and wishes, <em>were</em> is the traditional form for all persons:</p>
        <div class="ex"><p lang="en">If I <u class="k">were</u> you, I’d accept. · I wish it <u class="k">were</u> Friday. · as if he <u class="k">were</u> in charge</p></div>
        <p>This <em>were</em> is the last living remnant of the old past subjunctive (lecture 2.13). In informal English <em>was</em> is common (<em>if I was you</em>); in formal writing <em>were</em> is expected, and in the fixed phrase <em>if I were you</em> it is usual even in speech.</p>` },
    { title: 'Inversion without if',
      html: `
        <p>Formal English, like German, can drop <em>if</em> and invert, but only with three auxiliaries:</p>
        <div class="ex"><p lang="en"><u class="k">Had</u> I known, I would have come. <span class="gl">Hätte ich das gewusst, …</span></p><p lang="en"><u class="k">Were</u> it not for the guarantee, the bank would refuse.</p><p lang="en"><u class="k">Should</u> you need anything, please let me know. <span class="gl">Sollten Sie etwas brauchen, …</span></p></div>` },
    { title: 'Wishes and politeness',
      html: `
        <ul>
          <li><em>I wish</em> + past for the present, past perfect for the past: <em>I wish I had more time. I wish I had said something.</em> For a complaint about someone else: <em>I wish you would stop.</em></li>
          <li><em>If only …!</em>: <em>If only I had known!</em></li>
          <li>Politeness with <em>would, could</em> and the past tense: <em>Could you send me the file? Would you mind waiting? I was wondering whether …</em></li>
        </ul>` }
  ],

  contrast: `
    <ul>
      <li><strong>Structure</strong>: almost parallel. <em>Wenn ich Zeit hätte, würde ich helfen = If I had time, I would help.</em></li>
      <li><strong>würde in the wenn-clause</strong>: possible in German (<em>Wenn er anrufen würde, …</em>); not possible in English (<span class="bad">If he would call, …</span>), except where <em>would</em> means willingness (<em>If you would sign here, please</em>).</li>
      <li><strong>Past unreal</strong>: German needs only one form in each clause (<em>hätte gewusst · wäre gekommen</em>); English needs the past perfect and <em>would have</em>.</li>
      <li><strong>Inversion</strong>: German can invert any verb (<em>Käme er, …</em>); English only <em>had, were, should</em>.</li>
      <li><strong>Politeness</strong>: German relies heavily on the Konjunktiv II (<em>Hätten Sie, Könnten Sie, Wäre es möglich</em>); English on <em>could, would</em> and the progressive (<em>I was wondering</em>). A bare German indicative request (<em>Haben Sie kurz Zeit?</em>) is fine; a bare English one (<em>Send me the file</em>) can sound abrupt.</li>
    </ul>`,

  usage: `
    <ul>
      <li><strong>„wenn-Sätze sind würdelos“.</strong> Generations of German pupils have been told that <em>würde</em> does not belong in a <em>wenn</em>-clause, and the advice is still given. It is a stylistic preference, not a rule. Grammars treat <em>würde</em> in <em>wenn</em>-clauses as standard, and the Duden’s own advice page gives both forms side by side: <em>wenn Sie das Geld … überwiesen / überweisen würden</em>. With weak verbs the würde-form is often the clearer choice. Literary writers still tend to avoid it.</li>
      <li><strong><em>bräuchte</em></strong>: a Konjunktiv II with umlaut formed on the model of strong verbs. Marked as southern and colloquial by the Duden grammar, listed as standard in the Österreichisches Wörterbuch, and heard increasingly in the north.</li>
      <li><strong><em>if I was / if I were</em></strong>: both standard in present-day English according to most usage guides; <em>were</em> is the formal choice.</li>
      <li><strong><em>if I would have known</em></strong>: widespread in informal American speech; not accepted in edited English on either side of the Atlantic.</li>
    </ul>`,

  style: `
    <ul>
      <li>Synthetic forms of rare strong verbs (<em>beföhle, hülfe, stürbe, empföhle</em>) sound archaic or comic; use <em>würde</em>. Common ones (<em>käme, ginge, gäbe, wüsste</em>) are elegant and concise.</li>
      <li>Avoid chains of <em>würde</em>: <span class="odd">Wenn er kommen würde, würde ich mich freuen, und wir würden …</span>. One synthetic form breaks the chain: <em>Wenn er käme, würde ich mich freuen.</em></li>
      <li>In English business writing, the conditional softens without weakening: <em>We would recommend …</em>, <em>It would be helpful if …</em>; German <em>Wir würden empfehlen</em> / <em>Wir empfehlen</em> both work, the second sounding more confident.</li>
    </ul>`,

  pitfalls: `
    <ul>
      <li><span class="bad">If I would have known, I would have come.</span> → <em>If I had known …</em></li>
      <li><span class="bad">If I would be you …</span> → <em>If I were you …</em></li>
      <li><span class="bad">I wish I would have more time.</span> → <em>I wish I had more time.</em></li>
      <li>German: <span class="odd">Wenn ich das gewusst hätte, würde ich gekommen sein.</span> is correct but heavy → <em>wäre ich gekommen</em>.</li>
      <li>German: <span class="bad">Ich hätte das machen gemusst.</span> → <em>Ich hätte das machen müssen</em> (Ersatzinfinitiv, lecture 2.9).</li>
    </ul>`,

  latin: `
    <p>Latin uses the subjunctive for unreal conditions, with the same shift into the past as German and English:</p>
    <div class="ex"><p lang="la">Si pecuniam haberem, darem.</p><p class="gl">If I had the money, I would give it. (imperfect subjunctive = unreal present)</p><p lang="la">Si pecuniam habuissem, dedissem.</p><p class="gl">If I had had the money, I would have given it. (pluperfect subjunctive = unreal past)</p></div>
    <p class="latin">The German Konjunktiv II (<em>hätte</em>, built on the Präteritum <em>hatte</em>) follows exactly this logic of “one step back in time = one step away from reality”, and so does English <em>if I had</em>.</p>`,

  summary: [
    'Real conditions take the indicative; unreal ones take a past form (Konjunktiv II; English past) to express distance from reality.',
    'Konjunktiv II is built on the Präteritum stem with umlaut (käme, wäre, hätte, wüsste); weak verbs look like the Präteritum, so würde + infinitive replaces them.',
    'würde in wenn-clauses is standard; “wenn-Sätze sind würdelos” is a stylistic maxim, not a rule.',
    'English: if + past → would; if + past perfect → would have; never would in the if-clause (except willingness).',
    'were for all persons in formal unreal clauses (if I were you); was is informal.',
    'Inversion: Hätte ich das gewusst … = Had I known …; English only with had, were, should.'
  ],

  cards: [
    { id: 'conditionals', title: 'English conditionals', tags: ['if', 'conditional', 'would', 'Konjunktiv'], html: `
      <p><strong>real</strong>: if + present, will · <strong>unreal present</strong>: if + past, would · <strong>unreal past</strong>: if + past perfect, would have · <strong>mixed</strong>: if + past perfect, would (now).<br>No would/will in the if-clause.</p>` },
    { id: 'wuerde', title: 'Konjunktiv II or würde?', tags: ['würde', 'Konjunktiv II', 'käme'], html: `
      <p>Synthetic preferred in writing: wäre, hätte, würde, könnte, müsste, dürfte, wüsste, käme, ginge, gäbe.<br>würde + Infinitiv: weak verbs (Präteritum identical), rare strong verbs (hülfe → würde helfen), speech generally. Both allowed in wenn-clauses.</p>` },
    { id: 'polite', title: 'Polite requests', tags: ['politeness', 'Höflichkeit', 'could', 'könnten'], html: `
      <p>DE: Könnten Sie …? Hätten Sie …? Wäre es möglich …? Ich würde vorschlagen …<br>EN: Could you …? Would you mind …? I was wondering whether …? It would be helpful if …</p>` }
  ],

  terms: [
    { en: 'subjunctive II (past subjunctive)', de: 'Konjunktiv II', la: 'coniunctivus' },
    { en: 'would-conditional', de: 'würde-Form, Konditional', la: '' },
    { en: 'real / unreal condition', de: 'realer / irrealer Bedingungssatz', la: '' },
    { en: 'counterfactual', de: 'kontrafaktisch, irreal', la: '' },
    { en: 'irrealis were', de: '(Konjunktiv-II-Rest im Englischen)', la: '', note: 'If I were you.' },
    { en: 'conditional inversion', de: 'uneingeleiteter Konditionalsatz', la: '', note: 'Hätte ich … / Had I …' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: '<span lang="en">If I ___ known, I would have called you.</span>', options: ['had', 'would have', 'have', 'would'], answer: 0, explain: 'Unreal past: past perfect in the <em>if</em>-clause, never <em>would have</em>.' },
    { id: 'e2', type: 'gap', lang: 'de', prompt: '<span lang="de">Wenn ich mehr Zeit ___, würde ich Italienisch lernen.</span> (haben)', answers: ['hätte'], cs: true, explain: 'Konjunktiv II of <em>haben</em>: <em>hätte</em>.' },
    { id: 'e3', type: 'mc', lang: 'de', prompt: '<span lang="de">Wenn er anrufen würde, wäre alles geklärt.</span> In standard German this is …', options: ['correct: würde is allowed in wenn-clauses', 'wrong: wenn-clauses must be “würdelos”', 'correct only in Austria'], answer: 0, keepOrder: true, explain: 'The “würdelos” maxim is style advice; the Duden accepts both. With the weak verb <em>anrufen</em> the synthetic <em>anriefe</em> would be rare.' },
    { id: 'e4', type: 'mc', prompt: 'Formal English for <span lang="de">Hätte ich das gewusst, …</span>', options: ['Had I known that, …', 'Would I have known that, …', 'Did I know that, …'], answer: 0, keepOrder: true, explain: 'Inversion with <em>had</em> replaces <em>if I had</em>.' },
    { id: 'e5', type: 'mc', prompt: 'Which is the formal written choice?', options: ['If I were in your position, I would accept.', 'If I was in your position, I would accept.', 'If I would be in your position, I would accept.'], answer: 0, keepOrder: true, explain: '<em>were</em> in formal writing; <em>was</em> is informal; <em>would be</em> in the if-clause is wrong.' },
    { id: 'e6', type: 'match', prompt: 'Match the Konjunktiv II forms.', pairs: [['kommen', 'käme'], ['wissen', 'wüsste'], ['geben', 'gäbe'], ['helfen', 'würde helfen (hülfe veraltet)']], explain: 'Strong verbs: Präteritum stem + umlaut; rare forms are replaced by würde.' },
    { id: 'e7', type: 'mc', prompt: '<span lang="en">I wish I ___ more time.</span>', options: ['had', 'would have', 'have'], answer: 0, keepOrder: true, explain: '<em>wish</em> about the present: past tense.' },
    { id: 'e8', type: 'mc', prompt: '<span lang="en">If you would sign here, please.</span>', options: ['Correct: would = willingness, a polite request', 'Wrong: no would after if'], answer: 0, keepOrder: true, explain: 'As with <em>will</em>, <em>would</em> meaning willingness is fine after <em>if</em>.' }
  ]
});
