/*
 * Unit 5, lecture 1: principles of punctuation. Content file only. German section in German.
 */
Grammaticus.addLecture({
  id: '5.1', unit: 5, number: 1,
  title: 'Principles: grammar against rhythm',
  subtitle: 'Why the German comma follows sentence structure and the English comma follows meaning and reading',
  minutes: 20,

  intro: `
    <p>The two languages use the same marks for different purposes. German punctuation, and above all the German comma, is <strong>grammatical</strong>: it marks the boundaries of clauses and certain phrases, largely regardless of how the sentence is spoken. English punctuation is closer to <strong>rhetorical</strong> and semantic: it marks units of sense and reading, and many commas are a matter of the writer’s judgement. Understanding this difference explains most of the errors each language’s speakers make in the other.</p>`,

  concept: [
    { title: 'Two traditions',
      html: `
        <p>Ancient punctuation marked pauses for reading aloud. The Alexandrian scholar Aristophanes of Byzantium (3rd century BC) is credited with a system of dots at different heights for short, medium and long pauses, called after the units they closed: <em>komma</em> (“a piece cut off”), <em>kolon</em> (“a limb”) and <em>periodos</em> (“a circuit”). Our words <em>comma, colon</em> and <em>period</em> come from these.</p>
        <p>From the early modern period onwards, punctuation increasingly marked grammatical structure. German went furthest: its comma rules are formulated almost entirely in grammatical terms (clause, infinitive group, apposition). English kept more of the older rhetorical function, and its style guides speak of clarity, emphasis and rhythm.</p>` }
  ],

  german: [
    { title: 'Das grammatische Komma',
      html: `
        <p>Die deutsche Zeichensetzung ist Teil des Amtlichen Regelwerks (Teil E) und damit für Schule und Verwaltung verbindlich. Die Kommaregeln sind nach grammatischen Einheiten geordnet:</p>
        <ul>
          <li>Komma bei <strong>Reihungen</strong> (Aufzählungen, gleichrangige Sätze);</li>
          <li>Komma bei <strong>Zusätzen</strong> (Einschübe, Nachträge, Appositionen, Anreden);</li>
          <li>Komma bei <strong>Nebensätzen</strong> (finite Nebensätze und Infinitivgruppen).</li>
        </ul>
        <p>Die Faustregel „Komma, wo man eine Pause macht“ führt im Deutschen oft in die Irre: <em>Ich weiß, dass er kommt</em> verlangt ein Komma, obwohl man dort kaum pausiert; vor <em>und</em> in einer Aufzählung pausiert man, setzt aber kein Komma.</p>
        <p class="src">Amtliches Regelwerk 2024, Teil E, Abschnitt 2 (Komma): 2.1 Reihungen, 2.2 Zusätze, 2.3 Nebensätze.</p>` },
    { title: 'Fakultative Kommas',
      html: `
        <p>Seit der Reform von 1996 gibt es Fälle, in denen das Komma freigestellt ist, etwa zwischen Hauptsätzen mit <em>und</em> oder bei manchen Partizipgruppen. Die Neufassung 2024 hat einen wichtigen Fall zurückgenommen: Infinitivgruppen werden wieder grundsätzlich mit Komma abgetrennt (Lektion 5.3). Freigestellte Kommas dienen der Gliederung; der Schreibende entscheidet nach Lesbarkeit.</p>` }
  ],

  english: [
    { title: 'Commas for sense',
      html: `
        <p>English has no official punctuation rules. Style guides (<em>New Hart’s Rules</em> in Britain, <em>The Chicago Manual of Style</em> in America) agree on a core and differ at the edges. The core concerns meaning:</p>
        <ul>
          <li>commas that change meaning (non-restrictive clauses, lecture 4.4);</li>
          <li>commas that prevent misreading (<em>Inside, the room was dark</em>);</li>
          <li>commas that separate list items and parenthetical elements.</li>
        </ul>
        <p>Beyond that, much is optional: commas after short introductory phrases, before <em>and</em> joining short clauses, or the serial (Oxford) comma. The modern trend, especially in British journalism and business writing, is towards <strong>light</strong> punctuation: as few commas as clarity allows.</p>` }
  ],

  contrast: `
    <div class="tablewrap"><table>
      <thead><tr><th>German</th><th>English</th></tr></thead>
      <tbody>
        <tr><td>Ich weiß, dass er kommt.</td><td>I know that he is coming.</td></tr>
        <tr><td>Ich frage mich, ob das reicht.</td><td>I wonder whether that is enough.</td></tr>
        <tr><td>Der Bericht, den du geschickt hast, …</td><td>The report you sent …</td></tr>
        <tr><td>Er versprach, pünktlich zu sein.</td><td>He promised to be on time.</td></tr>
        <tr><td>Der Umsatz stieg, deshalb …</td><td>Sales rose, so … / Sales rose; therefore, …</td></tr>
      </tbody></table></div>
    <p class="contrast">The two typical errors mirror each other: German writers put commas before English <em>that</em>, <em>whether</em> and restrictive relative clauses, and join clauses with a comma and <em>however</em> (comma splice); English-influenced German drops the obligatory commas before <em>dass</em> and relative clauses.</p>`,

  usage: `
    <ul>
      <li>German comma rules were not part of the 1901 spelling settlement; they were codified by the Duden in the following decades and became part of the official rules with the 1996 reform. The 2024 version reorganised the punctuation chapter completely.</li>
      <li>English punctuation has become markedly lighter since the nineteenth century, when long sentences were often heavily punctuated with commas, semicolons and colons. Victorian prose looks over-punctuated to a modern reader.</li>
    </ul>`,

  latin: `
    <p>Classical Latin was written largely without punctuation and often without word spaces (<em>scriptio continua</em>); punctuation was added by readers and teachers. Medieval scribes developed the <em>punctus</em>, <em>punctus elevatus</em> and <em>punctus interrogativus</em> (the ancestor of the question mark), marking pauses for reading aloud in church. The grammatical punctuation of German grew out of this tradition in the age of printing.</p>`,

  summary: [
    'German punctuation is grammatical: commas mark clauses, infinitive groups and additions, whatever the pauses.',
    'English punctuation is closer to sense and reading; beyond a core of meaning-relevant commas, much is optional.',
    'German rules are official (Amtliches Regelwerk 2024, Teil E); English rules come from style guides (New Hart’s Rules, Chicago).',
    'German: comma before dass, ob and all relative clauses; English: none before that/whether and restrictive relatives.',
    'The 2024 German rules made the comma before infinitive groups obligatory again.',
    'Comma, colon, period: Greek names for units of a sentence (Aristophanes of Byzantium).'
  ],

  cards: [
    { id: 'principle', title: 'German vs English comma: the principle', tags: ['Komma', 'comma', 'punctuation'], html: `
      <p><strong>German</strong>: grammatical. Every subordinate clause and (since 2024) infinitive group is set off; list items, additions, interjections.<br><strong>English</strong>: sense. No comma before that/whether or restrictive relatives; comma splices are wrong; many commas optional.</p>` }
  ],

  terms: [
    { en: 'punctuation', de: 'Zeichensetzung, Interpunktion', la: 'punctum “point”' },
    { en: 'comma', de: 'Komma, Beistrich (österr.)', la: 'Greek komma “piece cut off”' },
    { en: 'colon', de: 'Doppelpunkt, Kolon', la: 'Greek kolon “limb”' },
    { en: 'full stop (BrE) / period (AmE)', de: 'Punkt', la: 'Greek periodos “circuit”' },
    { en: 'grammatical / rhetorical punctuation', de: 'grammatische / rhetorische Zeichensetzung', la: '' },
    { en: 'optional comma', de: 'fakultatives (freigestelltes) Komma', la: '' }
  ],

  exercises: [
    { id: 'e1', type: 'comma', lang: 'de', prompt: 'Set the required commas.', words: ['Ich', 'weiß', 'dass', 'er', 'morgen', 'kommt.'], commas: [1], explain: 'Every subordinate clause is set off by a comma in German.' },
    { id: 'e2', type: 'comma', lang: 'en', prompt: 'Set the required commas (if any).', words: ['I', 'know', 'that', 'he', 'is', 'coming', 'tomorrow.'], commas: [], explain: 'No comma before a <em>that</em>-clause in English.' },
    { id: 'e3', type: 'mc', prompt: 'Which statement is true?', options: ['German comma rules are official for schools and administration; English ones are not', 'Both languages have official comma rules', 'Neither has official rules'], answer: 0, explain: 'German punctuation is part of the Amtliches Regelwerk; English relies on style guides.' },
    { id: 'e4', type: 'mc', prompt: 'Where do the words comma, colon and period come from?', options: ['Greek names for units of a sentence', 'Latin legal terms', 'Printers’ jargon of the 15th century'], answer: 0, explain: '<em>komma, kolon, periodos</em>: a piece cut off, a limb, a circuit.' },
    { id: 'e5', type: 'comma', lang: 'de', prompt: 'Set the required commas.', words: ['Wir', 'kaufen', 'Äpfel', 'Birnen', 'und', 'Pflaumen.'], commas: [2], explain: 'Commas between list items, none before <em>und</em>.' }
  ]
});
