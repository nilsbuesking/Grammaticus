/*
 * Unit 2, lecture 12: Konjunktiv I, reported speech and backshift. Content file only. German section in German.
 */
Grammaticus.addLecture({
  id: '2.12', unit: 2, number: 12,
  title: 'Konjunktiv I, reported speech and backshift',
  subtitle: 'German reports by changing the mood, English by changing the tense',
  minutes: 35,

  intro: `
    <p>Reporting what someone else said is where the two languages part company most clearly. German marks reported speech with a special mood, the Konjunktiv I (<em>Er sagte, er sei krank</em>), which signals “this is his claim, not mine” and can carry a whole paragraph without a single repeated “he said”. English has no such mood; it shifts the tense back one step (<em>He said he was ill</em>) and relies on reporting verbs for distance. This lecture covers both systems and what each does in journalism and business writing.</p>`,

  concept: [
    { title: 'Direct and indirect speech',
      html: `
        <div class="ex"><p lang="en">Direct: She said, “I am leaving the company.”</p><p lang="en">Indirect: She said (that) she was leaving the company.</p><p lang="de">Direkt: Sie sagte: „Ich verlasse das Unternehmen.“</p><p lang="de">Indirekt: Sie sagte, sie verlasse das Unternehmen.</p></div>
        <p>In indirect speech the speaker’s words are integrated into the reporter’s sentence: pronouns and time expressions change (<em>I → she, tomorrow → the next day</em>), and something marks the content as reported. In German that marker is the mood; in English it is the tense, and in both the reporting verb.</p>` }
  ],

  german: [
    { title: 'Die Formen des Konjunktivs I',
      html: `
        <p>Der Konjunktiv I wird vom Präsensstamm gebildet: Stamm + <em>-e</em> + Endung. Eindeutig vom Indikativ unterscheidbar ist er vor allem in der 3. Person Singular:</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Verb</th><th>3. Sg. Indikativ · Konjunktiv I</th></tr></thead>
          <tbody>
            <tr><td>sein</td><td>ist · <u class="k">sei</u><span class="tnote">alle Personen eigen: ich sei, du sei(e)st, wir seien</span></td></tr>
            <tr><td>haben</td><td>hat · <u class="k">habe</u></td></tr>
            <tr><td>kommen</td><td>kommt · <u class="k">komme</u></td></tr>
            <tr><td>können</td><td>kann · <u class="k">könne</u></td></tr>
            <tr><td>werden</td><td>wird · <u class="k">werde</u></td></tr>
            <tr><td>wissen</td><td>weiß · <u class="k">wisse</u></td></tr>
          </tbody></table></div>` },
    { title: 'Die Ersatzregel',
      html: `
        <p class="rule">Ist der Konjunktiv I mit dem Indikativ gleich, steht der Konjunktiv II. Ist auch dieser mit dem Indikativ (Präteritum) gleich, steht die würde-Form.</p>
        <div class="ex"><p lang="de">Sie sagen, sie <u class="k">haben</u> keine Zeit. <span class="gl">KI = Indikativ</span> → Sie sagen, sie <u class="k">hätten</u> keine Zeit.</p><p lang="de">Sie sagen, sie <u class="k">arbeiten</u> viel. → sie <u class="k">arbeiteten</u> viel (= Präteritum) → sie <u class="k">würden</u> viel <u class="k">arbeiten</u>.</p></div>` },
    { title: 'Zeitverhältnisse',
      html: `
        <p>Der Konjunktiv I hat drei Zeitstufen, bezogen auf den Zeitpunkt der Äußerung, nicht auf die Gegenwart:</p>
        <div class="ex"><p lang="de">Gleichzeitig: Er sagte, er <u class="k">sei</u> krank.</p><p lang="de">Vorzeitig: Er sagte, er <u class="k">sei</u> krank <u class="k">gewesen</u> / er <u class="k">habe</u> den ganzen Tag <u class="k">gearbeitet</u>.</p><p lang="de">Nachzeitig: Er sagte, er <u class="k">werde</u> morgen kommen.</p></div>
        <p>Das Tempus des einleitenden Verbs spielt keine Rolle: <em>Er sagt / sagte / hat gesagt, er sei krank.</em> Eine Zeitenverschiebung wie im Englischen gibt es nicht.</p>` },
    { title: 'Wer verwendet den Konjunktiv I?',
      html: `
        <ul>
          <li><strong>Presse, Nachrichten, Berichte, Protokolle</strong>: Hier ist er Standard. Er zeigt, dass die Redaktion eine Aussage wiedergibt, ohne sie sich zu eigen zu machen: <em>Der Minister erklärte, die Lage sei unter Kontrolle.</em></li>
          <li><strong>Längere Wiedergaben</strong>: Der Konjunktiv I trägt die Redewiedergabe über mehrere Sätze, ohne dass <em>sagte er</em> wiederholt werden muss: <em>Der Vorstand sei zuversichtlich. Die Zahlen des dritten Quartals würden die Erwartungen übertreffen. Ein Stellenabbau sei nicht geplant.</em></li>
          <li><strong>Gespräch</strong>: Hier ist er selten. Man sagt <em>Er hat gesagt, er hat / hätte keine Zeit</em>.</li>
        </ul>
        <p>Der Indikativ ist in der indirekten Rede nicht falsch, solange ein <em>dass</em> oder ein Fragewort die Abhängigkeit deutlich macht (<em>Er sagt, dass er sich nicht erinnern kann</em>). Fehlt eine solche Einleitung, verlangt der geschriebene Standard den Konjunktiv.</p>
        <p class="src">Duden, Ratgeber zum Konjunktiv (Brockhaus/Duden), zur Wahl zwischen Konjunktiv und Indikativ.</p>` }
  ],

  english: [
    { title: 'Backshift',
      html: `
        <p>After a reporting verb in the past, the tenses of the reported clause traditionally shift one step back:</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Direct</th><th>Reported</th></tr></thead>
          <tbody>
            <tr><td>“I am busy.”</td><td>She said she <u class="k">was</u> busy.</td></tr>
            <tr><td>“I have finished.”</td><td>She said she <u class="k">had finished</u>.</td></tr>
            <tr><td>“I finished on Monday.”</td><td>She said she <u class="k">had finished</u> / <u class="k">finished</u> on Monday.</td></tr>
            <tr><td>“I will call.”</td><td>She said she <u class="k">would</u> call.</td></tr>
            <tr><td>“I can come.”</td><td>She said she <u class="k">could</u> come.</td></tr>
            <tr><td>“I must leave.”</td><td>She said she <u class="k">had to</u> / <u class="k">must</u> leave.</td></tr>
          </tbody></table></div>
        <p>Already past forms (<em>would, could, should, might</em>) stay as they are.</p>` },
    { title: 'When backshift is optional',
      html: `
        <p>If the reported content is still true or still relevant at the time of reporting, the original tense may be kept:</p>
        <div class="ex"><p lang="en">She said she <u class="k">is</u> leaving the company. <span class="gl">she still is: the reporter vouches for its continued truth</span></p><p lang="en">He told me the meeting <u class="k">is</u> on Thursday. <span class="gl">it is still to come</span></p><p lang="en">Galileo argued that the Earth <u class="k">moves</u> round the Sun.</p></div>
        <p>After a reporting verb in the present (<em>says, has said</em>) there is no backshift: <em>She says she is busy.</em></p>` },
    { title: 'Distance by other means',
      html: `
        <p>Without a reporting mood, English signals distance lexically:</p>
        <ul>
          <li>reporting verbs: <em>claim, allege, maintain, insist</em> (sceptical) against <em>explain, point out, confirm</em> (accepting);</li>
          <li>adverbs: <em>apparently, allegedly, reportedly, supposedly</em>;</li>
          <li><em>according to</em>: <em>According to the minister, the situation is under control.</em></li>
        </ul>
        <p>And English must repeat the attribution where German can let the Konjunktiv carry it: <em>The board was confident, he said. Third-quarter figures would exceed expectations. No job cuts were planned.</em> Without a second <em>he said</em>, the last sentences could be read as the writer’s own statements.</p>` },
    { title: 'Reported questions and commands',
      html: `
        <div class="ex"><p lang="en">“Where do you live?” → He asked where I <u class="k">lived</u>. <span class="gl">statement word order, no do</span></p><p lang="en">“Are you coming?” → She asked if / whether I <u class="k">was</u> coming.</p><p lang="en">“Please wait.” → He asked me <u class="k">to wait</u>.</p></div>` }
  ],

  contrast: `
    <ul>
      <li><strong>Mood against tense</strong>: <em>Er sagte, er sei krank = He said he was ill.</em> German keeps the time relation and changes the mood; English changes the tense.</li>
      <li><strong>No German backshift</strong>: <span class="odd">Er sagte, er war krank</span> is colloquial German (and, in German, could even mean he had been ill before); in writing <em>sei</em>.</li>
      <li><strong>No English mood</strong>: English cannot say “he was ill, as he claims” in one form; it uses <em>claimed</em>, <em>apparently</em> or repeated attribution.</li>
      <li><strong>Long reports</strong>: German Konjunktiv can run on for a paragraph; English needs attribution in nearly every sentence.</li>
      <li><strong>Reported questions</strong>: both use statement word order in the indirect question (<em>Er fragte, wo ich wohne / wohnte; He asked where I lived</em>).</li>
    </ul>`,

  usage: `
    <ul>
      <li>In German speech the Konjunktiv I is largely confined to set phrases and quoted official language; in writing it is the mark of careful reporting. Using the indicative in a newspaper report can suggest that the paper endorses the claim.</li>
      <li>The Konjunktiv II in reported speech (<em>er hätte keine Zeit</em>) is standard when required by the Ersatzregel; used where the Konjunktiv I is available (<em>er wäre krank</em> instead of <em>er sei krank</em>), it is common in speech and often read as adding doubt. Grammars disagree on how much doubt it really signals.</li>
      <li>English backshift is in practice often skipped in speech when the content is still current; style guides accept both.</li>
    </ul>`,

  style: `
    <ul>
      <li><strong>Minutes and reports in German</strong>: the Konjunktiv I is the elegant way to record what each person said without endless <em>er sagte</em>: <em>Frau Berger erläuterte, der Etat sei ausgeschöpft; man müsse Prioritäten setzen.</em></li>
      <li><strong>English minutes</strong> use reported speech with backshift and varied reporting verbs: <em>Ms Berger explained that the budget was exhausted and that priorities had to be set.</em></li>
      <li><strong>Choose the reporting verb deliberately</strong> in English: <em>claimed</em> signals doubt, <em>noted</em> neutrality, <em>confirmed</em> acceptance.</li>
    </ul>`,

  pitfalls: `
    <ul>
      <li><span class="bad">He said that he is coming yesterday.</span> Mixed time reference → <em>He said yesterday that he was coming.</em></li>
      <li><span class="bad">She asked me where did I live.</span> → <em>She asked me where I lived.</em></li>
      <li><span class="bad">He said me that …</span> → <em>He told me that …</em> / <em>He said to me that …</em></li>
      <li>German: <span class="odd">Sie sagten, sie haben keine Zeit.</span> (ambiguous with the indicative) → <em>sie hätten keine Zeit</em>.</li>
      <li>German: overusing the Konjunktiv I in casual emails sounds stilted; <em>Er meinte, dass er später kommt</em> is fine there.</li>
    </ul>`,

  latin: `
    <p>Latin has the most systematic reported speech of the three (<em>oratio obliqua</em>): main statements become accusative + infinitive, subordinate clauses take the subjunctive, and the subjunctive’s tense follows the sequence of tenses:</p>
    <div class="ex"><p lang="la">Dixit se aegrotum esse.</p><p class="gl">He said that he was ill (literally: said himself to be ill).</p><p lang="la">Dixit se, quod aegrotus esset, non venturum esse.</p><p class="gl">He said that, because he was ill, he would not come.</p></div>
    <p class="latin">Caesar’s <em>Gallic War</em> reports whole speeches in oratio obliqua over several pages, exactly the way a German newspaper can run a report in the Konjunktiv I.</p>`,

  summary: [
    'German marks reported speech by mood (Konjunktiv I: er sei, habe, komme, könne, werde); English by backshift of tense.',
    'Ersatzregel: KI = Indikativ → Konjunktiv II; KII = Präteritum → würde.',
    'Konjunktiv I time: sei (same time), sei gewesen / habe gearbeitet (earlier), werde kommen (later); the tense of the reporting verb does not matter.',
    'English backshift: present → past, past/present perfect → past perfect, will → would; optional if still true; none after a present reporting verb.',
    'English signals distance with reporting verbs (claim), adverbs (allegedly) and according to; it must repeat attribution where German Konjunktiv carries on.',
    'Indicative in German indirect speech is acceptable after dass or a question word; without an introducer, written German needs the Konjunktiv.'
  ],

  cards: [
    { id: 'konj1', title: 'Konjunktiv I and the Ersatzregel', tags: ['Konjunktiv I', 'indirekte Rede', 'reported speech'], html: `
      <p>er sei · habe · komme · könne · werde · wisse.<br>Same as indicative (wir haben) → Konjunktiv II (wir hätten); also same as Präteritum (sie arbeiteten) → würde (sie würden arbeiten).<br>Time: sei (same) · sei gewesen / habe gemacht (earlier) · werde kommen (later).</p>` },
    { id: 'backshift', title: 'English backshift', tags: ['backshift', 'reported speech', 'indirect speech'], html: `
      <p>am → was · have done / did → had done · will → would · can → could · must → had to/must.<br>Optional if still true; none after says / has said.<br>Questions: He asked where I lived (no do, no inversion).</p>` }
  ],

  terms: [
    { en: 'reported (indirect) speech', de: 'indirekte Rede', la: 'oratio obliqua' },
    { en: 'direct speech', de: 'direkte Rede', la: 'oratio recta' },
    { en: 'subjunctive I (present subjunctive)', de: 'Konjunktiv I', la: '' },
    { en: 'backshift', de: 'Zeitenverschiebung', la: '' },
    { en: 'reporting verb', de: 'Verb des Sagens, redeeinleitendes Verb', la: 'verbum dicendi' },
    { en: 'replacement rule', de: 'Ersatzregel', la: '' },
    { en: 'accusative and infinitive', de: 'Akkusativ mit Infinitiv (AcI)', la: 'accusativus cum infinitivo' }
  ],

  exercises: [
    { id: 'e1', type: 'gap', lang: 'de', prompt: '<span lang="de">Der Minister erklärte, die Lage ___ unter Kontrolle.</span> (sein)', answers: ['sei'], cs: true, explain: 'Konjunktiv I of <em>sein</em>.' },
    { id: 'e2', type: 'gap', lang: 'de', prompt: '<span lang="de">Die Kollegen sagten, sie ___ keine Zeit.</span> (haben)', answers: ['hätten'], cs: true, explain: 'KI <em>sie haben</em> = indicative, so Konjunktiv II: <em>hätten</em>.' },
    { id: 'e3', type: 'mc', prompt: 'Report: <span lang="en">“I will send the figures tomorrow,” she said.</span>', options: ['She said she would send the figures the next day.', 'She said she will send the figures tomorrow.', 'She said she sends the figures the next day.'], answer: 0, keepOrder: true, explain: 'will → would; tomorrow → the next day (if reported later).' },
    { id: 'e4', type: 'mc', prompt: 'Which is correct?', options: ['He asked me where I lived.', 'He asked me where did I live.', 'He asked me where do I live.'], answer: 0, keepOrder: true, explain: 'Indirect questions take statement word order, without <em>do</em>.' },
    { id: 'e5', type: 'mc', lang: 'de', prompt: 'Report in German: <span lang="de">„Ich habe den ganzen Tag gearbeitet“, sagte er.</span>', options: ['Er sagte, er habe den ganzen Tag gearbeitet.', 'Er sagte, er hatte den ganzen Tag gearbeitet.', 'Er sagte, er arbeite den ganzen Tag.'], answer: 0, keepOrder: true, explain: 'Earlier event: Konjunktiv I perfect, <em>habe gearbeitet</em>. No backshift.' },
    { id: 'e6', type: 'mc', prompt: 'A report says <span lang="en">The company claimed the losses were temporary.</span> The verb <em>claimed</em> …', options: ['signals that the writer does not vouch for the statement', 'is neutral', 'shows the writer agrees'], answer: 0, keepOrder: true, explain: 'English expresses distance through the reporting verb; German would use <em>seien</em> with a neutral verb.' },
    { id: 'e7', type: 'mc', prompt: '<span lang="en">She told me last week that she is leaving in June.</span> (It is now May.)', options: ['Acceptable: the content is still true and in the future', 'Wrong: backshift is compulsory', 'Wrong: “told” cannot report statements'], answer: 0, keepOrder: true, explain: 'Backshift is optional when the reported content is still current.' }
  ]
});
