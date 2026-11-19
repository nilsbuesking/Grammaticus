/*
 * Unit 2, lecture 13: the English subjunctive. Content file only. German section in German.
 */
Grammaticus.addLecture({
  id: '2.13', unit: 2, number: 13,
  title: 'The English subjunctive',
  subtitle: '“We insist that he be present”: a mood declared dead a century ago, and its German counterparts',
  minutes: 25,

  intro: `
    <p>English once had a full subjunctive like German. What remains is small but alive: a plain verb form after words of demanding (<em>It is essential that she be informed</em>), a handful of fixed phrases (<em>God save the King, be that as it may</em>) and <em>were</em> in unreal clauses. The mandative subjunctive in particular has had a surprising history: written off in Britain, revived from America. German has close parallels in its own formulaic Konjunktiv I.</p>`,

  concept: [
    { title: 'What survives',
      html: `
        <p>The English subjunctive has no endings of its own. It shows only where it differs from the indicative:</p>
        <ul>
          <li>the base form in the third person singular: <em>that he <u class="k">go</u></em>, not <em>goes</em>;</li>
          <li><em>be</em> for all persons: <em>that they <u class="k">be</u> informed</em>, not <em>are</em>;</li>
          <li>no <em>do</em> in the negative: <em>that he <u class="k">not</u> be disturbed</em>;</li>
          <li><em>were</em> for all persons in unreal clauses: <em>if she <u class="k">were</u></em> (lecture 2.11).</li>
        </ul>
        <p>Because the form is invisible with most subjects (<em>that we go</em> looks like the indicative), the subjunctive often passes unnoticed.</p>` }
  ],

  german: [
    { title: 'Deutsche Gegenstücke',
      html: `
        <p>Was das Englische mit seinen Konjunktivresten ausdrückt, leistet im Deutschen teils der Konjunktiv I in festen Formeln, teils ein Modalverb:</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Deutsch</th><th>Englisch</th></tr></thead>
          <tbody>
            <tr><td>Es lebe der König!</td><td>Long live the King!</td></tr>
            <tr><td>Gott sei Dank. · Gott bewahre!</td><td>Thank God. · God forbid!</td></tr>
            <tr><td>Komme, was wolle.</td><td>Come what may.</td></tr>
            <tr><td>Sei es, wie es sei. · Sei’s drum.</td><td>Be that as it may. · So be it.</td></tr>
            <tr><td>Man nehme 200 g Mehl.</td><td>Take 200 g of flour.</td></tr>
            <tr><td>Es sei darauf hingewiesen, dass …</td><td>It should be noted that …</td></tr>
            <tr><td>Wir bestehen darauf, dass er anwesend ist / sein soll.</td><td>We insist that he be present.</td></tr>
          </tbody></table></div>
        <p>Dieser „Heischekonjunktiv“ (Aufforderungs- und Wunschkonjunktiv) ist im Deutschen außerhalb von Rezepten, Formeln und gehobener Schriftsprache selten. <em>Man nehme</em> und <em>Es sei darauf hingewiesen</em> sind seine lebendigsten Reste.</p>` }
  ],

  english: [
    { title: 'The mandative subjunctive',
      html: `
        <p>After verbs, adjectives and nouns expressing demand, recommendation, necessity or importance (<em>insist, demand, recommend, suggest, propose, require; essential, vital, important; the requirement that</em>):</p>
        <div class="ex"><p lang="en">The board recommends that the dividend <u class="k">be</u> increased.</p><p lang="en">It is essential that every employee <u class="k">complete</u> the training.</p><p lang="en">We request that the meeting <u class="k">not</u> be recorded.</p></div>
        <p>British English has two alternatives:</p>
        <div class="ex"><p lang="en">… that the dividend <u class="k">should be</u> increased. <span class="gl">putative should: traditional British</span></p><p lang="en">… that every employee <u class="k">completes</u> the training. <span class="gl">indicative: informal British</span></p></div>
        <p>American English prefers the subjunctive; British English has traditionally favoured <em>should</em>.</p>` },
    { title: 'Formulaic subjunctives',
      html: `
        <div class="ex"><p lang="en">God save the King. · Long live the Queen. · Heaven forbid. · Be that as it may. · Come what may. · Suffice it to say … · If need be … · So be it. · Far be it from me to …</p></div>
        <p>These are fixed phrases; the pattern cannot be extended freely (<em>*God help the team win</em> sounds odd).</p>` },
    { title: 'lest',
      html: `
        <p>The conjunction <em>lest</em> (“for fear that”) traditionally takes the subjunctive or <em>should</em>: <em>He took notes lest he forget / should forget.</em> It is formal and rare in British English, somewhat more frequent in American writing.</p>` }
  ],

  contrast: `
    <ul>
      <li><strong>Mandative clauses</strong>: German uses the indicative, <em>sollen</em> or an infinitive: <em>Wir empfehlen, die Dividende zu erhöhen / dass die Dividende erhöht wird.</em> A German speaker is unlikely to produce the English subjunctive by transfer, and may “correct” it as a mistake when reading American texts (<em>that he be</em>).</li>
      <li><strong>Formulas</strong> match closely: <em>Es lebe / Long live; Komme, was wolle / Come what may; Sei es, wie es sei / Be that as it may.</em></li>
      <li><strong><em>Man nehme</em></strong>: modern English recipes use the imperative (<em>Take 200 g of flour</em>).</li>
      <li><strong>German has a full system</strong> (Konjunktiv I and II) in active use; English has fragments.</li>
    </ul>`,

  usage: `
    <p>The mandative subjunctive is a good example of a rule that moved against expectation.</p>
    <ul>
      <li>The Fowler brothers, in <em>The King’s English</em> (1906), dismissed the subjunctive as never necessary, often dangerous and in most writers unpleasantly formal, and expected it to die.</li>
      <li>Instead, the mandative subjunctive increased in the twentieth century, first in American English and later, apparently under American influence, in British English.</li>
      <li>Corpus studies broadly agree that American English prefers the subjunctive and British English the construction with <em>should</em>; a 2020 multi-factorial study suggests the subjunctive is not dying out in British English as much as was thought, and that the individual verb matters more than the variety.</li>
      <li>The <em>Cambridge Grammar</em> (Huddleston and Pullum 2002) is reluctant to call these forms a “subjunctive” mood at all, treating them as a clause type; it calls the <em>were</em> of <em>if I were</em> “irrealis”.</li>
    </ul>
    <p>For British writing today, all three variants (<em>that he be</em>, <em>that he should be</em>, <em>that he is</em>) are standard; the subjunctive is the most formal.</p>
    <p class="src">Rohdenburg and Schlüter (eds.), One Language, Two Grammars? (2009), chapter on the mandative subjunctive; UCL thesis on the subjunctive in present-day English (2017); Gries and others (2020).</p>`,

  pitfalls: `
    <ul>
      <li>Do not “correct” <em>It is vital that he be informed</em> to <em>is informed</em>; both are standard, and the subjunctive is the formal choice.</li>
      <li>Do not extend the subjunctive to ordinary statements: <span class="bad">I think that he be right.</span></li>
      <li>Negative: <em>that he not be disturbed</em>, not <span class="bad">that he doesn’t be disturbed</span> or <span class="odd">that he be not disturbed</span> (archaic).</li>
      <li>After <em>suggest</em> in the sense “indicate”, use the indicative: <em>The figures suggest that demand is falling.</em></li>
    </ul>`,

  latin: `
    <p>Latin uses the subjunctive after verbs of demanding and requesting, introduced by <em>ut</em> (negative <em>ne</em>):</p>
    <div class="ex"><p lang="la">Postulo ut adsis.</p><p class="gl">I demand that you be present.</p><p lang="la">Vivat rex!</p><p class="gl">Long live the King! (the formulaic “jussive” subjunctive)</p></div>
    <p class="latin">The English mandative subjunctive and the German Heischekonjunktiv descend from the same Indo-European use of the subjunctive for what is wished or demanded, which Latin preserved most fully.</p>`,

  summary: [
    'English subjunctive forms: base form in the 3rd singular (that he go), be for all persons, not without do, and were in unreal clauses.',
    'Mandative subjunctive after insist, demand, recommend, essential, vital: that the dividend be increased.',
    'American English prefers the subjunctive; British English traditionally uses should; the indicative is informal British; all three are standard.',
    'The mandative subjunctive revived in the 20th century despite the Fowlers’ 1906 prediction of its death.',
    'Formulas match German Konjunktiv I: Long live / Es lebe; Come what may / Komme, was wolle; Be that as it may / Sei es, wie es sei.',
    'German uses the indicative, sollen or an infinitive where English uses the mandative subjunctive.'
  ],

  cards: [
    { id: 'mandative', title: 'Mandative subjunctive', tags: ['subjunctive', 'insist', 'recommend', 'should'], html: `
      <p>After insist, demand, recommend, propose, require; essential, vital, important:<br><em>that he be informed</em> (formal; usual in AmE) · <em>that he should be informed</em> (BrE) · <em>that he is informed</em> (informal BrE).<br>Negative: <em>that he not be disturbed</em>.</p>` },
    { id: 'formulas', title: 'Subjunctive formulas EN ↔ DE', tags: ['Konjunktiv I', 'formula', 'come what may'], html: `
      <p>Long live … = Es lebe … · God forbid = Gott bewahre · Come what may = Komme, was wolle · Be that as it may = Sei es, wie es sei · Suffice it to say = Es sei nur gesagt · Thank God = Gott sei Dank.</p>` }
  ],

  terms: [
    { en: 'mandative subjunctive', de: '(Konjunktiv nach Verben des Forderns)', la: 'mandare “to order”' },
    { en: 'formulaic subjunctive', de: 'formelhafter Konjunktiv', la: '' },
    { en: 'putative should', de: '(should des Forderns)', la: '' },
    { en: 'jussive / optative subjunctive', de: 'Heischekonjunktiv, Wunschkonjunktiv', la: 'iubere “to order”; optare “to wish”' },
    { en: 'irrealis', de: 'Irrealis', la: '', note: 'Cambridge Grammar term for were in if I were.' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: 'Formal written English: <span lang="en">The committee recommends that the proposal ___ rejected.</span>', options: ['be', 'is being', 'will be', 'was'], answer: 0, explain: 'Mandative subjunctive: base form <em>be</em>. British alternatives: <em>should be</em>, informally <em>is</em>.' },
    { id: 'e2', type: 'mc', prompt: '<span lang="en">It is essential that she ___ the contract before Friday.</span>', options: ['sign', 'signs', 'signed'], answer: 0, keepOrder: true, explain: 'Subjunctive: <em>sign</em> without <em>-s</em>. <em>signs</em> is acceptable informal British usage.' },
    { id: 'e3', type: 'match', prompt: 'Match the formulas.', pairs: [['Komme, was wolle.', 'Come what may.'], ['Sei es, wie es sei.', 'Be that as it may.'], ['Es lebe der König!', 'Long live the King!'], ['Gott bewahre!', 'God forbid!']], explain: 'German Konjunktiv I and English subjunctive formulas match closely.' },
    { id: 'e4', type: 'mc', prompt: 'Which negative is standard?', options: ['We ask that the meeting not be recorded.', 'We ask that the meeting doesn’t be recorded.', 'We ask that the meeting don’t be recorded.'], answer: 0, keepOrder: true, explain: 'Subjunctive negative: <em>not</em> before the verb, no <em>do</em>.' },
    { id: 'e5', type: 'mc', prompt: '<span lang="en">The data suggest that demand ___ falling.</span>', options: ['is', 'be'], answer: 0, keepOrder: true, explain: '<em>suggest</em> = indicate: a statement of fact, indicative.' },
    { id: 'e6', type: 'mc', prompt: 'What did the Fowlers predict for the subjunctive in 1906?', options: ['That it was unnecessary and dying', 'That it would spread from America', 'That it would replace should'], answer: 0, explain: 'They called it never necessary and unpleasantly formal; the mandative subjunctive then revived.' }
  ]
});
