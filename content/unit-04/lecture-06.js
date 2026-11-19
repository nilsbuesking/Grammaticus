/*
 * Unit 4, lecture 6: negation. Content file only. German section in German.
 */
Grammaticus.addLecture({
  id: '4.6', unit: 4, number: 6,
  title: 'Negation',
  subtitle: 'nicht or kein and where nicht goes; don’t, no and any; why two negatives “make a positive”; and the missing word doch',
  minutes: 30,

  intro: `
    <p>Negation looks simple and is full of traps. German has two negators, <em>nicht</em> and <em>kein</em>, and the position of <em>nicht</em> decides what is negated. English needs an auxiliary (<em>don’t</em>), switches <em>some</em> to <em>any</em>, and has no word for German <em>doch</em>. Both languages once used several negatives for emphasis, and in both the standard now forbids it, in English because of a rule invented in the eighteenth century.</p>`,

  concept: [
    { title: 'Sentence and constituent negation',
      html: `
        <ul>
          <li><strong>Sentence negation</strong> denies the whole statement: <em>Der Vorstand hat den Plan nicht genehmigt. The board did not approve the plan.</em></li>
          <li><strong>Constituent negation</strong> denies one part, usually with a contrast: <em>Nicht der Vorstand hat den Plan genehmigt, sondern der Aufsichtsrat. It was not the board but the supervisory board that approved it.</em></li>
        </ul>
        <p>Negation also has a <strong>scope</strong>: the part of the sentence it affects. <em>All the figures are not correct</em> is ambiguous in English (none are correct / not all are correct); <em>Not all the figures are correct</em> is clear.</p>` }
  ],

  german: [
    { title: 'nicht oder kein',
      html: `
        <p class="rule"><em>kein</em> verneint Nomen mit unbestimmtem Artikel oder ohne Artikel; <em>nicht</em> verneint alles andere.</p>
        <div class="ex"><p lang="de">Ich habe einen Vertrag. → Ich habe <u class="k">keinen</u> Vertrag.</p><p lang="de">Ich habe Zeit. → Ich habe <u class="k">keine</u> Zeit.</p><p lang="de">Ich habe den Vertrag. → Ich habe den Vertrag <u class="k">nicht</u>.</p><p lang="de">Er ist Arzt. → Er ist <u class="k">kein</u> Arzt. / Er ist <u class="k">nicht</u> Arzt (sondern Apotheker).</p></div>` },
    { title: 'Wo steht nicht?',
      html: `
        <ul>
          <li>Bei <strong>Satzverneinung</strong> steht <em>nicht</em> möglichst spät im Mittelfeld: nach Pronomen, bestimmten Objekten und den meisten Zeitangaben, aber vor der rechten Satzklammer, vor Präpositionalobjekten, Richtungs- und Artangaben und vor dem Prädikativ:
            <div class="ex"><p lang="de">Ich sehe ihn heute <u class="k">nicht</u>. · Ich habe den Bericht <u class="k">nicht</u> gelesen. · Er wartet <u class="k">nicht</u> auf uns. · Sie fährt <u class="k">nicht</u> nach Berlin. · Das ist <u class="k">nicht</u> richtig.</p></div></li>
          <li>Bei <strong>Sondernegation</strong> steht <em>nicht</em> direkt vor dem verneinten Teil, meist mit <em>sondern</em>: <em>Ich fahre nicht heute, sondern morgen.</em></li>
        </ul>` },
    { title: 'Weitere Mittel',
      html: `
        <ul>
          <li><em>nie, niemals, nichts, niemand, nirgends, keineswegs</em>.</li>
          <li><em>noch nicht</em> (not yet), <em>nicht mehr</em> (no longer), <em>auch nicht</em> (not either), <em>weder … noch</em> (neither … nor).</li>
          <li><strong>doch</strong> als Antwort auf eine verneinte Frage oder Aussage: <em>Kommst du nicht mit? – Doch!</em> (= ja, ich komme).</li>
        </ul>` },
    { title: 'Doppelte Verneinung',
      html: `
        <p>In älteren Sprachstufen und in vielen Dialekten verstärken sich Verneinungen: <span class="odd">Da hat keiner nichts gesagt</span> (bairisch und anderswo). Im Standarddeutschen heben sich zwei Verneinungen auf und ergeben eine abgeschwächte Bejahung: <em>nicht unwichtig</em> = recht wichtig.</p>` }
  ],

  english: [
    { title: 'not and do',
      html: `
        <p><em>not</em> follows the first auxiliary; without one, English adds <em>do</em> (lecture 4.2): <em>She has not signed. She did not sign. She does not work here.</em> Contractions (<em>don’t, hasn’t, won’t</em>) are normal in speech and in all but the most formal writing.</p>` },
    { title: 'no, not a, not any',
      html: `
        <div class="ex"><p lang="en">We have no time. · We don’t have any time. · We haven’t (got) any time. (BrE)</p><p lang="en">There is no reason to worry. · It’s not a problem. · It’s no problem. (informal)</p><p lang="en">Nobody called. · None of the figures are / is correct.</p></div>
        <p><em>some</em> becomes <em>any</em> in negative (and question) contexts: <em>I have some questions → I don’t have any questions.</em></p>` },
    { title: 'Negative raising',
      html: `
        <p>With <em>think, believe, expect, suppose</em>, English (like German) puts the negation in the main clause: <em>I don’t think he’ll come</em> rather than <em>I think he won’t come</em>. German: <em>Ich glaube nicht, dass er kommt.</em></p>` },
    { title: 'Double negatives',
      html: `
        <p>Old and Middle English used multiple negation for emphasis (Chaucer piles up four negatives in one line). The rule that two negatives cancel out was first stated by James Greenwood in his grammar of 1711 and repeated by Lowth and others, on the model of logic and Latin, against the practice of the time. It succeeded: in standard English today <em>I don’t know nothing</em> is non-standard (it remains normal in many dialects and is understood everywhere as emphatic negation, not as a positive).</p>
        <p>The litotes <em>not unimportant, not uncommon</em> is standard and means “fairly important”.</p>
        <p class="src">Greenwood, An Essay towards a Practical English Grammar (1711); Lowth (1762); historical surveys of multiple negation.</p>` },
    { title: 'Answering negative questions',
      html: `
        <p>English answers by the fact, not by agreement with the question:</p>
        <div class="ex"><p lang="en">Aren’t you coming? – Yes, I am. (= doch) / No, I’m not.</p><p lang="en">You didn’t send it? – Yes, I did! (= Doch!)</p></div>
        <p>Because <em>yes</em> and <em>no</em> are ambiguous here, English speakers add the short answer (<em>Yes, I did</em>); German has <em>doch</em> for exactly this case.</p>` }
  ],

  contrast: `
    <ul>
      <li><strong>kein / nicht</strong>: <em>Ich habe keine Zeit = I have no time / I don’t have any time.</em></li>
      <li><strong>Position</strong>: German <em>nicht</em> late in the clause; English <em>not</em> after the first auxiliary: <em>Ich habe den Bericht nicht gelesen = I have not read the report.</em></li>
      <li><strong>noch nicht / nicht mehr</strong>: <em>not yet / no longer, not any more</em>; <span class="bad">not more</span> is wrong.</li>
      <li><strong>doch</strong>: <em>Yes, I am / Yes, I did / Of course I will</em>.</li>
      <li><strong>auch nicht</strong>: <em>not … either / neither</em>: <em>Ich auch nicht = Me neither / Nor do I.</em></li>
    </ul>`,

  usage: `
    <ul>
      <li><strong><em>none is / none are</em></strong>: both standard; the belief that <em>none</em> must be singular is another schoolroom rule; usage guides accept either, depending on whether the sense is “not one” or “not any”.</li>
      <li><strong>Double negation</strong> is a social marker in both languages; in English its stigma is directly traceable to eighteenth-century grammarians.</li>
      <li><strong><em>nicht</em> before definite objects</strong>: <em>Ich habe nicht den Bericht gelesen</em> is not wrong but implies a contrast (<em>sondern die Zusammenfassung</em>).</li>
    </ul>`,

  pitfalls: `
    <ul>
      <li><span class="bad">I have not time.</span> → <em>I don’t have time / I have no time.</em></li>
      <li><span class="bad">I don’t work there not more.</span> → <em>I don’t work there any more / I no longer work there.</em></li>
      <li><span class="bad">All employees didn’t attend.</span> (meaning some did not) → <em>Not all employees attended.</em></li>
      <li>German: <span class="bad">Ich habe nicht Zeit.</span> → <em>Ich habe keine Zeit.</em></li>
      <li>German: <span class="odd">Ich habe nicht den Bericht gelesen.</span> as plain negation → <em>Ich habe den Bericht nicht gelesen.</em></li>
    </ul>`,

  latin: `
    <p>Latin follows the logical rule English adopted: two negatives cancel (<em>non nemo</em> “somebody”, <em>nonnulli</em> “some”, <em>nonnumquam</em> “sometimes”). This Latin model was one of the arguments of the eighteenth-century grammarians against English multiple negation. The Romance languages, by contrast, have negative concord (French <em>je ne sais rien</em>, Italian <em>non so niente</em>).</p>`,

  summary: [
    'kein for nouns with indefinite or zero article; nicht for everything else.',
    'Sentence negation: nicht late in the Mittelfeld, before the right bracket, prepositional objects, directions and predicatives; constituent negation: nicht directly before the negated part (nicht heute, sondern morgen).',
    'English: not after the first auxiliary, do-support; some → any; no / not any / none.',
    'Negative raising in both: I don’t think he’ll come / Ich glaube nicht, dass er kommt.',
    'Two negatives cancel in standard English since Greenwood (1711) and Lowth; multiple negation is old English and survives in dialects.',
    'doch → Yes, I am / Yes, I did; noch nicht → not yet; nicht mehr → no longer, not any more.'
  ],

  cards: [
    { id: 'nicht-kein', title: 'nicht or kein', tags: ['nicht', 'kein', 'negation'], html: `
      <p><strong>kein</strong>: noun with ein or no article (keinen Vertrag, keine Zeit). <strong>nicht</strong>: everything else (den Vertrag nicht, nicht richtig).<br>nicht position: late in the Mittelfeld; before right bracket, prepositional objects, directions, predicatives.</p>` },
    { id: 'doch', title: 'doch in English', tags: ['doch', 'yes', 'negative question'], html: `
      <p>Kommst du nicht? – Doch! = Aren’t you coming? – Yes, I am.<br>Du hast es nicht geschickt? – Doch! = You didn’t send it? – Yes, I did!</p>` }
  ],

  terms: [
    { en: 'negation', de: 'Negation, Verneinung', la: 'negatio' },
    { en: 'sentence negation / constituent negation', de: 'Satznegation / Sondernegation', la: '' },
    { en: 'scope (of negation)', de: 'Skopus, Bereich der Negation', la: 'Greek skopos' },
    { en: 'negative concord (multiple negation)', de: 'Negationskongruenz, doppelte Verneinung', la: '' },
    { en: 'litotes', de: 'Litotes', la: 'Greek litotēs “plainness”', note: 'not unimportant' },
    { en: 'negative raising', de: 'Negationsanhebung', la: '' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', lang: 'de', prompt: '<span lang="de">Ich habe ___ Zeit.</span>', options: ['keine', 'nicht'], answer: 0, keepOrder: true, explain: 'Noun without article: <em>kein</em>.' },
    { id: 'e2', type: 'order', lang: 'de', prompt: 'Plain sentence negation:', tokens: ['Ich', 'habe', 'den', 'Bericht', 'nicht', 'gelesen.'], explain: '<em>nicht</em> after the definite object, before the right bracket.' },
    { id: 'e3', type: 'mc', prompt: '<span lang="en">Aren’t you coming to the meeting?</span> You are coming. You answer:', options: ['Yes, I am.', 'No, I am.', 'Doch.'], answer: 0, keepOrder: true, explain: 'English answers by the fact: <em>Yes, I am</em> (= Doch).' },
    { id: 'e4', type: 'mc', prompt: 'Some employees did not attend. Unambiguous:', options: ['Not all employees attended.', 'All employees didn’t attend.'], answer: 0, keepOrder: true, explain: 'The second is ambiguous between “none” and “not all”.' },
    { id: 'e5', type: 'mc', prompt: 'Who first stated in an English grammar that two negatives make a positive?', options: ['James Greenwood (1711)', 'Samuel Johnson (1755)', 'Geoffrey Chaucer'], answer: 0, keepOrder: true, explain: 'Greenwood’s grammar of 1711; Lowth repeated the rule.' },
    { id: 'e6', type: 'match', prompt: 'Match.', pairs: [['noch nicht', 'not yet'], ['nicht mehr', 'no longer'], ['auch nicht', 'not … either'], ['weder … noch', 'neither … nor']], explain: 'Fixed negative combinations.' },
    { id: 'e7', type: 'mc', prompt: 'Translate <span lang="de">Ich glaube nicht, dass er kommt.</span>', options: ['I don’t think he’s coming.', 'I think he isn’t not coming.', 'I believe not that he comes.'], answer: 0, keepOrder: true, explain: 'Negative raising works the same way in both languages.' }
  ]
});
