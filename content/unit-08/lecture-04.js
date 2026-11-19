/*
 * Unit 8, lecture 4: sentence length and rhythm. German section in German.
 */
Grammaticus.addLecture({
  id: '8.4', unit: 8, number: 4,
  title: 'Sentence length and rhythm',
  subtitle: 'Average length, the German verbal bracket, end weight, variation and cadence',
  minutes: 25,

  intro: `
    <p>“Keep sentences short” is the other great commandment of style guides. It is good advice for instructions and news, and bad advice taken literally: a text of uniformly short sentences reads like a list. What matters is less the average than the shape of each sentence (how long the reader must wait for the main verb, where the weight falls) and the variation between sentences. Here German and English differ structurally, because the German verbal bracket creates tension that English sentences do not have.</p>`,

  concept: `
    <p>Three measures matter:</p>
    <ul>
      <li><strong>Length</strong> in words. Style guides commonly recommend an average of around 15–20 words for general readers; GOV.UK advises keeping sentences to about 25 words at most. These figures are rules of thumb derived from readability research and editorial experience, not precise thresholds.</li>
      <li><strong>Depth</strong>: how much the reader must hold in memory before the sentence resolves. A long sentence made of clauses that follow one another is easier than a shorter one with a deep embedding.</li>
      <li><strong>Rhythm</strong>: the alternation of long and short, the position of stresses, and where the sentence ends.</li>
    </ul>
    <p>Readability formulas (Rudolf Flesch’s Reading Ease, 1948; adapted for German by Toni Amstad, 1978) combine sentence length and word length. They correlate with comprehension across large samples but say nothing about a particular sentence’s logic or clarity.</p>`,

  german: [
    { title: 'Die Satzklammer',
      html: `
        <p>Im deutschen Hauptsatz bilden finites Verb und infiniter Teil eine Klammer (Lektion 4.1). Alles dazwischen muss der Leser im Gedächtnis halten, bis das Verb kommt:</p>
        <div class="ex"><p lang="de" class="odd">Der Vorstand <u class="k">hat</u> den von der Arbeitsgruppe nach monatelangen Verhandlungen mit den Gewerkschaften und dem Betriebsrat vorgelegten Entwurf gestern Abend <u class="k">abgelehnt</u>.</p><p lang="de">Der Vorstand <u class="k">hat</u> gestern Abend den Entwurf <u class="k">abgelehnt</u>, den die Arbeitsgruppe nach monatelangen Verhandlungen vorgelegt hatte.</p></div>
        <p>Stilratgeber empfehlen, die Klammer nicht zu überdehnen: Schwere Teile in einen Nebensatz oder ins Nachfeld stellen (Ausklammerung), lange Attribute vor dem Nomen auflösen.</p>` },
    { title: 'Lange Sätze, gute Sätze',
      html: `
        <p>Lange Sätze sind kein Fehler. Kleist und Thomas Mann schrieben Sätze von einer halben Seite, die sich gut lesen, weil ihre Gliederung klar ist: Hauptsatz vorn, Nebensätze nacheinander, nicht ineinander verschachtelt. Schwer wird ein Satz durch Verschachtelung und durch lange vorangestellte Attribute (<em>der von der … vorgelegte Entwurf</em>), nicht durch seine Länge allein.</p>
        <p>Wolf Schneider empfahl Journalisten, Sätze von mehr als 20 bis 25 Wörtern zu meiden, und nannte zugleich Kleist als Vorbild für lange Sätze. Beides passt zusammen: Für Nachrichten gilt etwas anderes als für Literatur.</p>` }
  ],

  english: [
    { title: 'End weight and end focus',
      html: `
        <p>English sentences have a natural tendency to put long, heavy constituents at the end (<strong>end weight</strong>) and new, important information there too (<strong>end focus</strong>; Quirk et al. 1985, ch. 18):</p>
        <div class="ex"><p lang="en" class="odd">That the company would have to restate three years of accounts surprised nobody.</p><p lang="en">It surprised nobody that the company would have to restate three years of accounts.</p></div>
        <p>English has no verbal bracket, so the main verb usually comes early and the reader knows the structure quickly. Difficulty arises from long subjects before the verb and from noun stacks (lecture 7.1).</p>` },
    { title: 'Variation and cadence',
      html: `
        <p>Rhythm comes from contrast. A short sentence after several long ones gains emphasis:</p>
        <div class="ex"><p lang="en">The committee had met eleven times, reviewed four hundred submissions, commissioned two independent reports and consulted every regional office before drafting its recommendations. Nobody read them.</p></div>
        <p>English prose also uses the <strong>cadence</strong> of the sentence ending: a stressed syllable near the end, or a group of three (lecture 8.6), gives a sense of closure. Ending on a weak word (<em>… that we had been thinking about</em>) can sound limp, which is the real stylistic reason behind the old “rule” against ending with a preposition (lecture 8.5).</p>` }
  ],

  contrast: `
    <div class="tablewrap"><table>
      <thead><tr><th>German</th><th>English</th></tr></thead>
      <tbody>
        <tr><td>Der vom Vorstand gestern genehmigte Plan …</td><td>The plan the board approved yesterday …</td></tr>
        <tr><td>Wir haben die Zahlen, die Sie uns geschickt haben, geprüft.</td><td>We have checked the figures you sent us.</td></tr>
        <tr><td>Ich habe mich sehr gefreut, Sie gestern kennenzulernen.</td><td>It was a great pleasure to meet you yesterday.</td></tr>
      </tbody></table></div>
    <p class="contrast">German extended attributes before the noun (<em>der vom Vorstand gestern genehmigte Plan</em>) must become relative clauses or participle phrases after the noun in English. Translating German sentence by sentence often produces English sentences that are correct but too long; splitting them is normal.</p>`,

  usage: `
    <ul>
      <li><strong>Sentence length has fallen</strong> in both languages over the last two centuries, in newspapers and in fiction. Counts for German newspapers and English prose show a long-term decline in average sentence length; the exact figures depend heavily on the corpus and on how sentences are counted.</li>
      <li><strong>The “German sentences are longer” claim</strong> is widely repeated. Average German sentences in comparable texts are often somewhat longer in words, but German also writes compounds as one word, so word counts are not directly comparable. The claim is plausible but poorly documented as a general fact.</li>
      <li>Mark Twain’s essay “The Awful German Language” (1880) famously mocked the German verbal bracket; it remains a good description of the reader’s experience of an overextended Satzklammer.</li>
    </ul>`,

  style: `
    <p>Practical advice for both languages:</p>
    <ul>
      <li>One main idea per sentence in instructions and news; more is fine in argument and narrative.</li>
      <li>Put the main clause first, then add subordinate clauses one after another rather than inside each other.</li>
      <li>In German, keep the bracket short: move heavy material behind the final verb or into a relative clause.</li>
      <li>In English, keep the subject short and get to the verb quickly.</li>
      <li>Vary the length. Read the passage aloud: where you run out of breath or where it sounds monotonous, revise.</li>
    </ul>`,

  pitfalls: `
    <ul>
      <li>German: extended attributes of more than a few words before the noun (<em class="odd">die vom Ministerium im letzten Jahr nach langen Beratungen erlassene Verordnung</em>).</li>
      <li>German: over-stretched bracket with the decisive verb at the very end.</li>
      <li>English: long subjects before the verb; use <em>it</em>-extraposition.</li>
      <li>Both: uniformly short sentences, which read as abrupt and childish.</li>
    </ul>`,

  summary: [
    'Average 15–20 words is a rule of thumb for general readers; depth of embedding matters more than length.',
    'German Satzklammer: keep the bracket short; use Ausklammerung and relative clauses.',
    'English: end weight and end focus; short subject, verb early.',
    'German pre-nominal extended attributes become post-nominal clauses in English.',
    'Rhythm comes from variation; a short sentence after long ones gives emphasis.',
    'Readability formulas (Flesch, Amstad) measure averages, not clarity.'
  ],

  cards: [
    { id: 'sentence-length', title: 'Sentence length checklist', tags: ['Satzlänge', 'sentence length', 'Satzklammer', 'end weight'], html: `
      <p>Average ~15–20 words (general readers); GOV.UK: about 25 max.<br>DE: Klammer kurz halten, Schweres ins Nachfeld, lange Attribute auflösen.<br>EN: short subject, verb early, heavy material at the end.<br>Both: vary length; read aloud.</p>` }
  ],

  terms: [
    { en: 'verbal bracket', de: 'Satzklammer, Verbklammer', la: '' },
    { en: 'extraposition, moving to the end', de: 'Ausklammerung, Nachfeldbesetzung', la: '' },
    { en: 'extended attribute (pre-nominal)', de: 'erweitertes Attribut, Partizipialattribut', la: '' },
    { en: 'end weight / end focus', de: 'Achtergewicht / Endfokus', la: '' },
    { en: 'readability formula', de: 'Lesbarkeitsformel', la: '' },
    { en: 'cadence', de: 'Kadenz, Satzschluss', la: 'cadentia “falling”; Latin prose rhythm: clausula' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', lang: 'de', prompt: 'Which is easier to read?', options: ['Der Vorstand hat gestern den Entwurf abgelehnt, den die Arbeitsgruppe vorgelegt hatte.', 'Der Vorstand hat den von der Arbeitsgruppe vorgelegten Entwurf gestern abgelehnt.'], answer: 0, keepOrder: true, explain: 'Shorter bracket; the attribute becomes a relative clause after the verb.' },
    { id: 'e2', type: 'mc', lang: 'en', prompt: 'Which follows end weight?', options: ['It surprised nobody that the company had to restate its accounts.', 'That the company had to restate its accounts surprised nobody.'], answer: 0, keepOrder: true, explain: 'Heavy clause at the end with <em>it</em>-extraposition.' },
    { id: 'e3', type: 'mc', lang: 'en', prompt: 'Best English for <span lang="de">der vom Vorstand gestern genehmigte Plan</span>', options: ['the plan the board approved yesterday', 'the by the board yesterday approved plan', 'the yesterday board-approved plan'], answer: 0, explain: 'English places the modifier after the noun.' },
    { id: 'e4', type: 'mc', prompt: 'What makes a sentence hard to read, according to most research and style advice?', options: ['deep embedding and long pre-verbal material, more than length alone', 'length alone', 'the number of commas'], answer: 0, explain: 'A long sentence of successive clauses can be easy; a short deeply embedded one hard.' },
    { id: 'e5', type: 'mc', prompt: 'Readability formulas such as Flesch Reading Ease measure:', options: ['average sentence and word length', 'logical clarity', 'grammatical correctness'], answer: 0, explain: 'They combine averages; they cannot judge a particular sentence.' }
  ]
});
