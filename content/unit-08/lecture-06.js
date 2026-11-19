/*
 * Unit 8, lecture 6: rhetorical figures. German section in German.
 */
Grammaticus.addLecture({
  id: '8.6', unit: 8, number: 6,
  title: 'Rhetorical figures',
  subtitle: 'Anaphora, chiasmus, tricolon, litotes and their relatives: grammar used for effect',
  minutes: 25,

  intro: `
    <p>Rhetorical figures are patterns of word order, repetition and omission that classical rhetoric named and catalogued. They are not ornaments added to grammar; they are grammar used deliberately. Both languages inherited the same Greek and Latin terminology and the same figures, but each favours some over others: English public speaking loves the tricolon and the antithesis; German prose has a long tradition of the Stabreim (alliteration) in fixed pairs and of the long periodic sentence.</p>`,

  concept: [
    { title: 'Figures of repetition',
      html: `
        <ul>
          <li><strong>Anaphora</strong>: the same word at the start of successive units: <em>We will …, we will …, we will …</em></li>
          <li><strong>Epiphora (epistrophe)</strong>: the same word at the end.</li>
          <li><strong>Alliteration</strong> (<em>Stabreim</em>): the same initial sound: <em>Kind und Kegel, Haus und Hof; safe and sound, part and parcel</em>.</li>
          <li><strong>Polyptoton</strong>: the same word in different forms: <em>Gleiches mit Gleichem vergelten; Judge not, that ye be not judged.</em></li>
        </ul>` },
    { title: 'Figures of arrangement',
      html: `
        <ul>
          <li><strong>Antithesis</strong>: contrasting ideas in parallel form: <em>Der Mensch denkt, Gott lenkt.</em></li>
          <li><strong>Chiasmus</strong>: crossing, A B – B A: <em>Ask not what your country can do for you – ask what you can do for your country.</em> (Kennedy, 1961)</li>
          <li><strong>Tricolon</strong>: three parallel members, often rising in length: <em>Veni, vidi, vici; government of the people, by the people, for the people</em> (Lincoln, 1863).</li>
          <li><strong>Climax</strong> (<em>Steigerung</em>): rising order of intensity.</li>
          <li><strong>Parenthesis</strong>: an insertion that interrupts the sentence (lecture 5.5 on the dash).</li>
        </ul>` },
    { title: 'Figures of omission and understatement',
      html: `
        <ul>
          <li><strong>Ellipsis</strong>: omission of what can be supplied: <em>Ende gut, alles gut.</em></li>
          <li><strong>Asyndeton / polysyndeton</strong>: no conjunctions (<em>Veni, vidi, vici</em>) or many (<em>and … and … and</em>).</li>
          <li><strong>Litotes</strong>: affirming by denying the opposite: <em>nicht unbedeutend; not bad at all</em>.</li>
          <li><strong>Zeugma</strong>: one word governing two others in different senses: <em>Er hob den Blick und ein Glas Wein.</em></li>
          <li><strong>Rhetorical question</strong>: a question that expects no answer.</li>
        </ul>` }
  ],

  german: [
    { title: 'Figuren im Deutschen',
      html: `
        <p>Viele feste Wendungen des Deutschen sind Figuren: Paarformeln mit Stabreim (<em>Haus und Hof, Kind und Kegel, mit Mann und Maus, Stock und Stein</em>), Antithesen in Sprichwörtern, Ellipsen (<em>Ende gut, alles gut</em>).</p>
        <p>Die klassische deutsche Prosa schätzt die <strong>Periode</strong>: einen langen, kunstvoll gebauten Satz, dessen Spannung bis zum Schluss gehalten wird – die Satzklammer begünstigt sie. Schiller und Kleist sind die üblichen Beispiele.</p>
        <div class="ex"><p lang="de">Der Mensch denkt, Gott lenkt. <span class="tnote">Antithese</span></p><p lang="de">Er kam, sah und siegte. <span class="tnote">Trikolon (nach Caesar)</span></p><p lang="de">Die Lage ist nicht ungefährlich. <span class="tnote">Litotes</span></p><p lang="de">Er nahm seinen Hut und Abschied. <span class="tnote">Zeugma</span></p></div>
        <p>In der deutschen politischen Rede ist das Pathos klassischer Figuren seit 1945 mit Vorsicht behaftet, weil die NS-Rhetorik sie intensiv nutzte. Deutsche Redner gelten deshalb häufig als nüchterner als britische oder amerikanische; das ist ein verbreiteter Eindruck, kaum systematisch belegt.</p>` }
  ],

  english: [
    { title: 'Figures in English',
      html: `
        <p>English public speaking draws heavily on the King James Bible (1611) and Shakespeare, both rich in parallelism, and on classical training in schools well into the twentieth century.</p>
        <div class="ex"><p lang="en">government of the people, by the people, for the people <span class="tnote">tricolon, epiphora (Lincoln)</span></p><p lang="en">Ask not what your country can do for you – ask what you can do for your country. <span class="tnote">chiasmus (Kennedy)</span></p><p lang="en">To err is human, to forgive divine. <span class="tnote">antithesis, ellipsis (Pope, 1711)</span></p><p lang="en">That was not entirely unexpected. <span class="tnote">litotes, typical of British understatement</span></p></div>
        <p><strong>Understatement</strong> (often by litotes) is a well-known British habit: <em>not ideal</em> for a disaster, <em>quite good</em> for mediocre. German readers tend to take such phrases at face value; English readers may miss German directness as intended politeness.</p>` },
    { title: 'The rule of three',
      html: `
        <p>Groups of three are the most common structuring device in English persuasion: three adjectives, three parallel clauses, three examples. Speechwriters use them because two feels incomplete and four loses the listener. Research on persuasion has found that three claims can be more persuasive than two, while four begin to sound like overselling (Shu and Carlson, <em>Journal of Marketing</em>, 2014). The finding concerns advertising claims, so its application to prose style is an extrapolation.</p>` }
  ],

  contrast: `
    <div class="tablewrap"><table>
      <thead><tr><th>German</th><th>English</th></tr></thead>
      <tbody>
        <tr><td>Haus und Hof</td><td>house and home</td></tr>
        <tr><td>Kind und Kegel</td><td>the whole family; bag and baggage</td></tr>
        <tr><td>nicht schlecht</td><td>not bad (can mean very good or merely acceptable)</td></tr>
        <tr><td>Das ist suboptimal.</td><td>That’s not ideal. (BrE: possibly a serious problem)</td></tr>
        <tr><td>Er kam, sah und siegte.</td><td>He came, he saw, he conquered.</td></tr>
      </tbody></table></div>
    <p class="contrast">Alliterative pairs exist in both languages but rarely match: translate the meaning, not the figure. British understatement and litotes are a frequent source of misunderstanding with German speakers, in both directions.</p>`,

  style: `
    <p>Figures work by contrast with the surrounding text. One antithesis or tricolon at the climax of a paragraph gives emphasis; three in a row sound like a speech by a politician. In business writing, parallelism is the most useful figure: list items in the same grammatical form (<em>reduce costs, improve service, expand into Asia</em>, not <em>reduce costs, better service, and we will expand into Asia</em>).</p>`,

  latin: `
    <p>The names are Greek, and the system was organised by Latin teachers of rhetoric, above all Quintilian (<em>Institutio oratoria</em>, c. 95 AD) and the anonymous <em>Rhetorica ad Herennium</em> (1st century BC). <em>Veni, vidi, vici</em> (Caesar, reported by Suetonius and Plutarch) is the textbook tricolon and asyndeton. Latin sentence structure, with the verb often at the end, favoured the periodic sentence that German prose later imitated.</p>`,

  summary: [
    'Figures are grammar used deliberately: repetition, arrangement, omission, understatement.',
    'Anaphora, epiphora, alliteration; antithesis, chiasmus, tricolon, climax; ellipsis, asyndeton, litotes, zeugma.',
    'German favours alliterative pairs (Haus und Hof) and the periodic sentence; English public speech favours tricolon and antithesis.',
    'British understatement (not ideal, not bad) is often misread by German speakers.',
    'In business writing, parallel structure is the most useful figure.',
    'Use figures sparingly: they work by contrast.'
  ],

  cards: [
    { id: 'figures', title: 'Rhetorical figures', tags: ['rhetoric', 'Rhetorik', 'chiasmus', 'tricolon', 'litotes'], html: `
      <p><strong>Anaphora</strong>: same start · <strong>Chiasmus</strong>: A B – B A · <strong>Tricolon</strong>: three parallel members · <strong>Antithesis</strong>: contrast in parallel · <strong>Litotes</strong>: not bad · <strong>Zeugma</strong>: hat and leave · <strong>Asyndeton</strong>: no conjunctions.</p>` }
  ],

  terms: [
    { en: 'rhetorical figure', de: 'rhetorische Figur, Stilfigur', la: 'figura' },
    { en: 'anaphora / epiphora', de: 'Anapher / Epipher', la: 'Greek anaphora “carrying back”' },
    { en: 'alliteration', de: 'Alliteration, Stabreim', la: 'ad + littera' },
    { en: 'chiasmus', de: 'Chiasmus', la: 'Greek chi (χ), crossing' },
    { en: 'tricolon', de: 'Trikolon', la: 'Greek “three limbs”' },
    { en: 'litotes, understatement', de: 'Litotes, Untertreibung', la: 'Greek litotēs “simplicity”' },
    { en: 'periodic sentence', de: 'Periode, Satzperiode', la: 'periodus' }
  ],

  exercises: [
    { id: 'e1', type: 'match', prompt: 'Match the example to the figure.', pairs: [['Veni, vidi, vici.', 'tricolon'], ['nicht unbedeutend', 'litotes'], ['Haus und Hof', 'alliteration'], ['Er nahm seinen Hut und Abschied.', 'zeugma']], explain: 'Three members; denial of the opposite; same initial sound; one verb in two senses.' },
    { id: 'e2', type: 'mc', prompt: '<em>Ask not what your country can do for you – ask what you can do for your country.</em>', options: ['chiasmus', 'anaphora', 'litotes'], answer: 0, explain: 'A B – B A: country/you – you/country.' },
    { id: 'e3', type: 'mc', lang: 'en', prompt: 'A British colleague says the results are “not ideal”. Most likely:', options: ['there is a real problem', 'the results are fine', 'the results are excellent'], answer: 0, explain: 'British understatement.' },
    { id: 'e4', type: 'mc', lang: 'en', prompt: 'Which list is parallel?', options: ['reduce costs, improve service and expand into Asia', 'reduce costs, better service and we expand into Asia', 'cost reduction, improving service and to expand into Asia'], answer: 0, explain: 'Same grammatical form for each item.' },
    { id: 'e5', type: 'mc', lang: 'de', prompt: '<span lang="de">Der Mensch denkt, Gott lenkt.</span>', options: ['antithesis', 'zeugma', 'polysyndeton'], answer: 0, explain: 'Contrast in parallel form (with rhyme).' }
  ]
});
