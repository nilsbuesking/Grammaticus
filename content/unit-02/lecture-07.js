/*
 * Unit 2, lecture 7: tense in subordinate clauses ("when this is done"). Content file only. German section in German.
 */
Grammaticus.addLecture({
  id: '2.7', unit: 2, number: 7,
  title: 'Tense in subordinate clauses',
  subtitle: 'Why English says “when this is done” and not “when this will have been done”, and where will is allowed after all',
  minutes: 30,

  intro: `
    <p>“When this is done, I’ll send it to you.” The event lies in the future, and it will be complete before the sending, so logic seems to call for <em>when this will have been done</em>. English grammar forbids that, and German does nearly the same. Latin, by contrast, insists on exactly the form logic suggests. This lecture explains the rule, the logic behind it, and the cases where <em>will</em> after <em>when</em> or <em>if</em> is correct after all.</p>`,

  concept: [
    { title: 'Absolute and relative tense',
      html: `
        <p>A main clause usually takes its tense from the moment of speaking (<strong>absolute tense</strong>). A subordinate clause can instead take its tense from the main clause (<strong>relative tense</strong>): it only needs to say whether its event is earlier than, at the same time as, or later than the main clause.</p>
        <div class="ex"><p lang="en">When this <u class="k">is</u> done, I <u class="k">will</u> send it.</p><p class="gl">main clause: future, measured from now · time clause: “at the same time as the sending, or before it”, measured from the main clause</p></div>
        <p>Once the main clause has placed everything in the future, saying <em>future</em> again in the time clause adds nothing. English and German therefore use the present for “simultaneous” and the present perfect / Perfekt for “earlier” in clauses of time and condition. Latin does the opposite and marks the future in both clauses.</p>` },
    { title: 'Why will is out',
      html: `
        <p>A second reason is the meaning of <em>will</em> itself. <em>will</em> is not a neutral future marker but a modal verb of prediction (lecture 2.3). A time or conditional clause does not predict anything; it sets up a frame (<em>when X happens, if X is the case</em>) in which the main clause then makes a prediction. A prediction inside the frame would be redundant or would change the meaning, which is exactly what happens in the exceptions below.</p>` }
  ],

  german: [
    { title: 'Präsens und Perfekt im Nebensatz',
      html: `
        <p>Auch im Deutschen stehen Temporal- und Konditionalsätze mit Zukunftsbezug normalerweise im Präsens, bei Vorzeitigkeit im Perfekt:</p>
        <div class="ex"><p lang="de">Wenn ich in Berlin <u class="k">bin</u>, rufe ich dich an.</p><p lang="de">Sobald der Bericht <u class="k">fertig ist</u>, schicke ich ihn dir.</p><p lang="de">Sobald ich den Bericht <u class="k">geschrieben habe</u>, schicke ich ihn dir.</p><p lang="de">Falls es <u class="k">regnet</u>, bleiben wir zu Hause.</p></div>
        <p>Das Futur ist im Nebensatz nicht verboten, klingt aber schwerfällig und ist selten: <span class="odd">Sobald der Bericht fertig sein wird, …</span>. Weil das Deutsche auch im Hauptsatz meist das Präsens nimmt, fällt der Unterschied kaum auf: <em>Wenn er kommt, sage ich es ihm</em> hat in beiden Sätzen Präsens.</p>` },
    { title: 'Indirekte Fragen und Objektsätze',
      html: `
        <p>Anders, wenn der Nebensatz kein Zeitrahmen ist, sondern das Objekt des Verbs (was weiß ich nicht?):</p>
        <div class="ex"><p lang="de">Ich weiß nicht, wann er <u class="k">kommt</u> / <u class="k">kommen wird</u>.</p><p lang="de">Es ist unklar, ob die Regierung zurücktreten <u class="k">wird</u>.</p></div>
        <p>Hier ist das Futur unauffällig, weil der Satz selbst eine Vorhersage enthält.</p>` },
    { title: 'Keine Zeitenfolge',
      html: `
        <p>Das Deutsche kennt keine strenge Zeitenfolge (<em>consecutio temporum</em>). In der indirekten Rede wechselt nicht das Tempus, sondern der Modus (Konjunktiv, Lektion 2.12): <em>Er sagte, er sei krank</em>, nicht <em>er war krank</em> als Pflicht.</p>` }
  ],

  english: [
    { title: 'The rule',
      html: `
        <p class="rule">In clauses of time and condition referring to the future, English uses the <strong>present simple</strong> for an event at the same time as the main clause, and the <strong>present perfect</strong> for an event completed before it. Not <em>will</em>, not <em>will have</em>.</p>
        <p>The conjunctions concerned: <em>when, after, before, until, till, as soon as, once, by the time, while, whenever</em>, and <em>if, unless, provided (that), as long as, in case, suppose</em>.</p>
        <div class="ex">
          <p lang="en">When this <u class="k">is</u> done, I’ll send it to you.</p>
          <p lang="en">Once we <u class="k">have finished</u> the audit, we’ll present the results.</p>
          <p lang="en">As soon as the figures <u class="k">come</u> in, I’ll let you know.</p>
          <p lang="en">By the time you <u class="k">read</u> this, I’ll be in Paris.</p>
          <p lang="en">If the bank <u class="k">approves</u> the loan, we’ll go ahead.</p>
          <p lang="en">Take an umbrella in case it <u class="k">rains</u>.</p>
          <p lang="en" class="bad">When this will have been done, I’ll send it to you.</p>
          <p lang="en" class="bad">If the bank will approve the loan, we’ll go ahead.</p>
        </div>
        <p>Present simple or present perfect? Often both work, with a nuance: <em>when this is done</em> focuses on the state; <em>when I’ve done this</em> stresses completion before the next step. With non-stative verbs the perfect makes the sequence explicit: <em>When I finish / have finished the report, I’ll call you.</em></p>
        <p class="src">Quirk et al. (1985), on the present for future reference in subordinate clauses; Huddleston and Pullum (2002), on will in conditional clauses.</p>` },
    { title: 'The same in the past',
      html: `
        <p>The pattern shifts back one step in past narrative: <em>She said she would call me when the report was ready</em>, not <em>would be ready</em>.</p>` },
    { title: 'Where will is correct',
      html: `
        <ol>
          <li><strong>Noun clauses and indirect questions.</strong> After <em>know, wonder, ask, be sure, it is unclear</em>, the <em>when/if</em>-clause is the object, not a time frame; <em>will</em> is normal:
            <div class="ex"><p lang="en">I don’t know when the report <u class="k">will</u> be ready.</p><p lang="en">I wonder if the bank <u class="k">will</u> approve the loan. <span class="gl">if = whether</span></p></div>
            Test: replace <em>if</em> by <em>whether</em>. If that works, it is an indirect question, and <em>will</em> is fine.</li>
          <li><strong><em>will</em> meaning willingness or insistence</strong>, not prediction:
            <div class="ex"><p lang="en">If you <u class="k">will</u> wait here, I’ll fetch the manager. <span class="gl">polite: if you are willing to wait</span></p><p lang="en">If you <u class="k">will</u> keep interrupting, we’ll never finish. <span class="gl">stressed: if you insist on</span></p></div></li>
          <li><strong>A consequence in the <em>if</em>-clause that follows the main clause</strong>:
            <div class="ex"><p lang="en">I’ll take the job if it <u class="k">will</u> help my career. <span class="gl">the help is a result of taking the job</span></p></div></li>
          <li><strong>Relative clauses</strong>, which are not time frames:
            <div class="ex"><p lang="en">The person who <u class="k">will</u> replace her has not been named.</p></div></li>
        </ol>` }
  ],

  contrast: `
    <p>For once the two languages behave alike: both use the present (and perfect) in clauses of time and condition. The difference is in the main clause, where English needs <em>will</em> and German usually does not:</p>
    <div class="ex"><p lang="de">Wenn das erledigt ist, schicke ich es dir.</p><p lang="en">When this is done, I’ll send it to you.</p><p lang="de">Sobald ich den Bericht geschrieben habe, rufe ich dich an.</p><p lang="en">As soon as I’ve written the report, I’ll call you.</p></div>
    <p class="contrast">So the instinct to write <em>when this will have been done</em> does not come from German, which says <em>wenn das erledigt ist</em>. It comes from reasoning about the logic of time, and that reasoning is exactly what Latin grammar does (below). English and German let the main clause carry the future.</p>`,

  usage: `
    <ul>
      <li>The rule is old and stable in standard English; this is not a case of modern simplification. Shakespeare and the King James Bible already have the present in such clauses, alongside an older subjunctive (<em>if it be so</em>).</li>
      <li><em>will</em> in a real time clause (<span class="bad">when he will arrive, …</span>) is a typical learner error. It occurs occasionally in informal native speech and in some world Englishes, but not in standard British or American writing.</li>
      <li>Legal drafting sometimes writes <em>if the tenant shall fail to pay …</em>; this is a legal archaism, not a model.</li>
    </ul>`,

  pitfalls: `
    <h3>Best practice</h3>
    <ul>
      <li>Ask: does the clause set up a <em>time frame or condition</em> for the main clause? Then present or present perfect. Is it what someone knows, asks or wonders? Then <em>will</em> is fine.</li>
      <li>In emails: <em>I’ll send it as soon as I receive the signed copy</em>; <em>Let me know when you have reviewed the draft.</em></li>
    </ul>
    <h3>Pitfalls</h3>
    <ul>
      <li><span class="bad">When I will be back, I’ll call you.</span> → <em>When I’m back …</em></li>
      <li><span class="bad">Let me know if you will need anything.</span> → <em>if you need anything</em>.</li>
      <li>Over-correction: <em>I’m not sure if he will come</em> is correct (indirect question); do not change it to <em>if he comes</em>.</li>
      <li>German: <span class="odd">Wenn ich in Berlin sein werde, …</span> is correct but heavy; <em>Wenn ich in Berlin bin, …</em> is normal.</li>
    </ul>`,

  latin: `
    <p>Latin applies the logic you were reaching for. Where English and German use the present, Latin uses the future; where they use the present perfect, Latin uses the future perfect (<em>futurum exactum</em>), and it does so strictly:</p>
    <div class="ex"><p lang="la">Si hoc <u class="k">feceris</u>, laetus <u class="k">ero</u>.</p><p class="gl">If you do this (lit. will have done), I will be happy.</p><p lang="la">Cum Romam <u class="k">venero</u>, ad te <u class="k">scribam</u>.</p><p class="gl">When I come (lit. will have come) to Rome, I will write to you.</p></div>
    <p class="latin">Latin also has a strict sequence of tenses (<em>consecutio temporum</em>) in subjunctive subordinate clauses: the tense of the main verb determines which subjunctive tense the subordinate clause takes. English and German have nothing so systematic, which is one reason Latin prose feels so tightly built.</p>`,

  summary: [
    'In clauses of time and condition about the future, English and German use the present (same time) or present perfect/Perfekt (completed before).',
    'English: when this is done, once I’ve finished, if the bank approves; never will or will have in these clauses.',
    'The future is carried by the main clause (English will; German often just Präsens).',
    'will is correct in indirect questions (I don’t know when it will be ready; if = whether), for willingness or insistence (if you will wait here), for a consequence (if it will help), and in relative clauses.',
    'The instinct for “will have been done” is Latin logic: Latin uses the futurum exactum in such clauses (cum venero).',
    'German has no strict sequence of tenses; reported speech uses the Konjunktiv instead.'
  ],

  cards: [
    { id: 'when-if', title: 'No will after when / if', tags: ['when', 'if', 'will', 'time clause', 'Temporalsatz'], html: `
      <p>Time and condition clauses (when, after, before, until, as soon as, once, by the time, if, unless, in case): <strong>present</strong> or <strong>present perfect</strong> for the future.<br><em>When this is done, I’ll send it. Once I’ve finished, I’ll call.</em></p>
      <p><strong>will is fine</strong> in indirect questions (<em>I don’t know when/if it will be ready</em>), for willingness (<em>if you will wait here</em>), and in relative clauses.</p>` }
  ],

  terms: [
    { en: 'absolute / relative tense', de: 'absolutes / relatives Tempus', la: '' },
    { en: 'temporal clause', de: 'Temporalsatz', la: '' },
    { en: 'conditional clause', de: 'Konditionalsatz, Bedingungssatz', la: '' },
    { en: 'protasis / apodosis', de: 'Protasis / Apodosis', la: 'from Greek', note: 'The if-clause and the main clause of a conditional.' },
    { en: 'indirect question', de: 'indirekter Fragesatz', la: '' },
    { en: 'sequence of tenses', de: 'Zeitenfolge', la: 'consecutio temporum' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: '<span lang="en">I’ll send you the file as soon as it ___ ready.</span>', options: ['is', 'will be', 'will have been', 'would be'], answer: 0, explain: 'Time clause with future reference: present simple.' },
    { id: 'e2', type: 'mc', prompt: '<span lang="en">Once we ___ the audit, we’ll present the results.</span>', options: ['have completed', 'will have completed', 'will complete', 'completed'], answer: 0, explain: 'Completed before the main clause: present perfect, not future perfect.' },
    { id: 'e3', type: 'mc', prompt: 'Which is correct?', options: ['I don’t know when the report will be ready.', 'I don’t know when the report is ready.'], answer: 0, keepOrder: true, explain: 'The <em>when</em>-clause is the object of <em>know</em> (an indirect question), not a time frame, so <em>will</em> is normal.' },
    { id: 'e4', type: 'mc', prompt: '<span lang="en">If you will wait here, I’ll fetch the manager.</span> This is …', options: ['correct: will means “are willing to”', 'wrong: no will after if', 'correct only in American English', 'correct only in legal texts'], answer: 0, explain: 'When <em>will</em> expresses willingness rather than prediction, it is fine after <em>if</em>.' },
    { id: 'e5', type: 'gap', prompt: '<span lang="en">Let me know if you ___ anything.</span> (need)', answers: ['need'], explain: 'Conditional clause: present simple, not <em>will need</em>.' },
    { id: 'e6', type: 'mc', lang: 'de', prompt: 'The most natural German for <span lang="en">When this is done, I’ll send it to you.</span>', options: ['Wenn das erledigt ist, schicke ich es dir.', 'Wenn das erledigt sein wird, werde ich es dir schicken.', 'Wenn das erledigt wird, schickte ich es dir.'], answer: 0, keepOrder: true, explain: 'German uses the present in both clauses; the Futur is possible but heavy.' },
    { id: 'e7', type: 'mc', prompt: 'Which language marks the future perfect in such a clause, as in “when I will have come”?', options: ['Latin (cum venero)', 'English', 'German', 'None'], answer: 0, explain: 'Latin uses the futurum exactum in subordinate clauses; English and German use the present perfect or present.' },
    { id: 'e8', type: 'mc', prompt: 'Test for <em>if</em>: <span lang="en">I wonder if he ___ come.</span>', options: ['will', 'comes'], answer: 0, keepOrder: true, explain: '<em>if</em> can be replaced by <em>whether</em>: an indirect question, so <em>will come</em>.' }
  ]
});
