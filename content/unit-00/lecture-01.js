/*
 * Unit 0, lecture 1: where the standards came from.
 * Content file only; the engine (app.js) reads this structure. Claims to be checked are in CONTENT-CHECKS.md.
 * The German section is written in German, the rest in English.
 */
Grammaticus.addLecture({
  id: '0.1', unit: 0, number: 1,
  title: 'Where the standards came from',
  subtitle: 'Grammar books, dictionaries and conferences: how German and English got their norms',
  minutes: 30,

  intro: `
    <p>Before learning any rule it helps to know who made it, when, and with what authority. German and English took strikingly different routes to a standard. German spelling was settled by a state conference in 1901 and is still regulated by an intergovernmental body; English never had an authority at all, and its norms were set by private authors, dictionary makers and publishers.</p>
    <p>The difference matters for the rest of the course. When we ask “what is the rule?”, the answer has a different kind of authority in each language, and sometimes there is no rule in the strict sense, only a widely shared habit.</p>`,

  concept: [
    { title: 'Three meanings of “grammar”',
      html: `
        <p>The word is used for three different things, and much confusion comes from mixing them up.</p>
        <ol>
          <li><strong>The system in the speaker’s head.</strong> Every native speaker of English knows that <em>the big red ball</em> is right and <em>the red big ball</em> odd, without having been taught it. Nobody decreed this; it is simply how the language works.</li>
          <li><strong>A description of that system.</strong> A grammar book in this sense records what speakers do, as a naturalist records how birds build nests.</li>
          <li><strong>A codified norm.</strong> A rule book that says what speakers <em>should</em> do, usually for writing, schools and official use.</li>
        </ol>
        <p>The Romanian linguist Eugenio Coseriu (in a study of 1952) drew a related distinction between the <em>system</em> (what the language makes possible), the <em>norm</em> (what a community actually and habitually uses) and <em>speech</em> (the individual utterance). The distinction is useful throughout this course: many “errors” are possible in the system and frequent in speech, but not part of the written norm.</p>` },
    { title: 'Standard languages are young',
      html: `
        <p>A standard language, one written form used by a whole nation for administration, schooling and print, is a historically recent artefact. In both German and English it grew out of the same forces: printing (which rewards a form readable everywhere), administration (chanceries and courts), schooling (which needs something to teach), and, from the eighteenth century, the idea that a nation should have one language.</p>
        <p>Spelling is the part of a language that is easiest to codify, and it was codified first and most strictly. Punctuation followed. Grammar proper, how words are inflected and combined, has never been fixed by law in either language.</p>` }
  ],

  german: [
    { title: 'Vor der Norm',
      html: `
        <p>Um 1500 gab es keine deutsche Standardsprache, sondern regionale Schreiblandschaften: die Kanzleisprachen der Territorien und die Sprachen der großen Druckorte (Augsburg, Nürnberg, Wittenberg, Frankfurt, Basel). Drucker hatten ein wirtschaftliches Interesse daran, dass ihre Bücher überall gelesen wurden, und glichen ihre Schreibungen an.</p>
        <p>Luthers Bibelübersetzung (Neues Testament 1522, Vollbibel 1534) wird oft als „Geburt des Neuhochdeutschen“ bezeichnet. Das ist eine Vereinfachung: Luther schrieb auf der Grundlage des ostmitteldeutschen Kanzleigebrauchs, den es vor ihm gab. Seine Wirkung lag in der enormen Verbreitung seiner Texte, nicht darin, dass er eine Sprache erfunden hätte.</p>` },
    { title: 'Die Grammatiker des 17. und 18. Jahrhunderts',
      html: `
        <p>Mit dem Barock beginnt die Sprachpflege. Sprachgesellschaften wie die <em>Fruchtbringende Gesellschaft</em> (gegründet 1617) wollten das Deutsche gegenüber Latein und Französisch aufwerten. Justus Georg Schottelius legte 1663 mit der <em>Ausführlichen Arbeit von der Teutschen HaubtSprache</em> eine umfassende Grammatik vor.</p>
        <p>Im 18. Jahrhundert wurden zwei Namen maßgeblich:</p>
        <ul>
          <li><strong>Johann Christoph Gottsched</strong>, <em>Grundlegung einer Deutschen Sprachkunst</em> (1748), eine präskriptive Schulgrammatik mit großer Wirkung.</li>
          <li><strong>Johann Christoph Adelung</strong>, dessen <em>grammatisch-kritisches Wörterbuch</em> (1774–1786) und Grammatik (1782) das Ostmitteldeutsche der gebildeten Schicht zum Maßstab machten. Ihm wird der Grundsatz „Schreib, wie du sprichst“ zugeschrieben, der im 19. Jahrhundert noch nachwirkte.</li>
        </ul>` },
    { title: 'Grimm: Grammatik als Wissenschaft',
      html: `
        <p>Jacob Grimms <em>Deutsche Grammatik</em> (ab 1819) war etwas völlig anderes: keine Anleitung zum richtigen Schreiben, sondern eine historisch-vergleichende Beschreibung der germanischen Sprachen. Grimm misstraute den Schulmeistern, die der Sprache Regeln vorschrieben, und wollte die Schreibung an der Sprachgeschichte ausrichten. Er selbst schrieb Substantive klein.</p>
        <p>Damit standen sich im 19. Jahrhundert zwei Lager gegenüber: die „historische“ Schule, die Schreibungen aus der Geschichte begründen wollte, und die „phonetische“, die der Aussprache folgen wollte. Konrad Duden gehörte eher zur zweiten.</p>` },
    { title: 'Ein Reich, viele Schreibungen: 1871 bis 1880',
      html: `
        <p>Nach der Reichsgründung 1871 gab es ein Deutsches Reich, aber keine einheitliche Rechtschreibung: Preußen, Bayern, Sachsen und Württemberg hatten eigene Schulorthographien, und Verlage folgten Hausregeln.</p>
        <dl class="timeline">
          <dt>1876</dt><dd>Die I. Orthographische Konferenz in Berlin scheitert; ihre Beschlüsse werden nicht umgesetzt, nicht zuletzt wegen des Widerstands Bismarcks.</dd>
          <dt>1880</dt><dd>Der preußische Kultusminister Puttkamer erlässt ein Regelbuch für die preußischen Schulen. Bismarck lehnt es ab und untersagt seinen Beamten die neue Schreibung: Die Schulkinder lernen also eine andere Rechtschreibung als die Behörden verwenden.</dd>
          <dt>1880</dt><dd>Am 7. Juli erscheint Konrad Dudens <em>Vollständiges Orthographisches Wörterbuch der deutschen Sprache</em>, der „Ur-Duden“: rund 27.000 Stichwörter auf 187 Seiten, auf der Grundlage der preußischen und bayerischen Schulregeln.</dd>
        </dl>
        <p class="src">Duden-Verlag und Rat für deutsche Rechtschreibung (Darstellungen zur Geschichte); Zahlen zum Ur-Duden nach wissen.de.</p>` },
    { title: '1901: Die Einheitsschreibung',
      html: `
        <p>Die <strong>II. Orthographische Konferenz</strong> tagte vom 17. bis 19. Juni 1901 in Berlin. Ihre Beschlüsse, im Wesentlichen die preußische Schulorthographie, wurden 1902 im Reich verbindlich und auch von Österreich und der Schweiz übernommen. Damit hatte der deutsche Sprachraum erstmals eine gemeinsame Rechtschreibung. Die siebte Auflage des Duden (1902) setzte sie um.</p>
        <p>Die auffälligste Änderung war das Verschwinden des <em>th</em> in deutschen Wörtern:</p>
        <div class="ex"><p lang="de">Thür → Tür · Thal → Tal · Thier → Tier</p><p class="gl">In Fremdwörtern blieb das th: Thema, Theater, Thron.</p></div>
        <p>Was 1901 nicht geregelt wurde, ist ebenso wichtig: die Zeichensetzung blieb weitgehend offen und wurde erst durch spätere Duden-Auflagen festgeschrieben, und die Grammatik wurde überhaupt nicht geregelt.</p>` },
    { title: 'Die Aussprache: Siebs',
      html: `
        <p>Parallel dazu entstand eine Norm für die Aussprache, aber auf ganz anderem Weg: Theodor Siebs’ <em>Deutsche Bühnenaussprache</em> (1898) legte fest, wie auf der Bühne gesprochen werden sollte. Sie orientierte sich stark an der norddeutschen Aussprache des Schriftbilds. Diese Bühnennorm wurde später auf Rundfunk und Schule übertragen; sie ist der Grund, warum norddeutsche Aussprache bis heute als „hochdeutscher“ gilt als süddeutsche.</p>` },
    { title: 'Grammatik ohne Amt',
      html: `
        <p>Eine amtliche Grammatik hat es im Deutschen nie gegeben. Die Grammatik wurde von Schulbüchern und privaten Nachschlagewerken festgehalten. Konrad Duden bearbeitete selbst eine verbreitete Schulgrammatik (Bauers <em>Grundzüge der neuhochdeutschen Grammatik</em>). Daraus ging die erste Grammatik des „Großen Duden“ hervor, die Otto Basler 1935 bearbeitete; 1959 folgte unter Paul Grebe der Band 4 der Duden-Reihe, der bis heute in Neuauflagen erscheint (10. Auflage 2022).</p>
        <p>Seit 1964 gibt es zudem das Institut für Deutsche Sprache (IDS) in Mannheim, das die Sprache wissenschaftlich und zunehmend korpusgestützt beschreibt, also festhält, was tatsächlich geschrieben wird.</p>` },
    { title: 'Das 20. Jahrhundert und die Reformen',
      html: `
        <dl class="timeline">
          <dt>1955</dt><dd>Die Kultusministerkonferenz erklärt den Duden in Zweifelsfällen für maßgebend (Westdeutschland). In der DDR erscheint ein eigener Leipziger Duden.</dd>
          <dt>1996</dt><dd>Die Rechtschreibreform wird beschlossen (Wiener Absichtserklärung); sie ist jahrelang politisch umstritten. Der Duden verliert seine Sonderstellung.</dd>
          <dt>2004</dt><dd>Der zwischenstaatliche <strong>Rat für deutsche Rechtschreibung</strong> wird eingesetzt.</dd>
          <dt>2006</dt><dd>Überarbeitetes Regelwerk; es beendet den Streit weitgehend.</dd>
          <dt>2024</dt><dd>Neufassung des Amtlichen Regelwerks mit neuem Wörterverzeichnis, verbindlich seit dem 1. Juli 2024; sie ersetzt das Regelwerk von 2006.</dd>
        </dl>
        <p class="rule">Das Amtliche Regelwerk regelt die Rechtschreibung nur dort, wo der Staat dafür zuständig ist: in Schule und Verwaltung. Für alle anderen (Verlage, Firmen, Privatpersonen) hat es „Vorbildcharakter“, ist aber nicht vorgeschrieben.</p>
        <p class="src">Rat für deutsche Rechtschreibung, Pressemitteilung vom 3.7.2024; Vorbemerkung des Amtlichen Regelwerks.</p>` }
  ],

  english: [
    { title: 'The academy that never was',
      html: `
        <p>Italy had the Accademia della Crusca (1583), France the Académie française (1635), Spain the Real Academia Española (1713). England discussed an academy repeatedly, most famously in Jonathan Swift’s <em>Proposal for Correcting, Improving and Ascertaining the English Tongue</em> (1712), but never founded one. Neither did any other English-speaking country.</p>
        <p>As a result English has no official spelling, no official grammar and no official punctuation. Every norm you know comes from private authority that won acceptance: dictionaries, grammar books, usage guides, publishers’ house styles and schoolteachers.</p>` },
    { title: 'Dictionaries',
      html: `
        <dl class="timeline">
          <dt>1755</dt><dd>Samuel Johnson’s <em>Dictionary of the English Language</em>. Johnson began hoping to “fix” the language but concluded in his preface that a living language cannot be fixed. His spellings nevertheless became the British norm.</dd>
          <dt>1828</dt><dd>Noah Webster’s <em>American Dictionary of the English Language</em>. Webster deliberately simplified spellings as a mark of American independence: <em>color</em>, <em>center</em>, <em>defense</em>. Most of today’s British–American spelling differences go back to him.</dd>
          <dt>1884–1928</dt><dd>The <em>Oxford English Dictionary</em> appears in instalments: a historical dictionary built on dated quotations, describing usage rather than prescribing it.</dd>
        </dl>` },
    { title: 'The prescriptive grammarians',
      html: `
        <p>The eighteenth century produced the grammar books that gave English most of its schoolroom rules.</p>
        <ul>
          <li><strong>Robert Lowth</strong>, <em>A Short Introduction to English Grammar</em> (1762). Lowth is usually credited with popularising the objection to ending a sentence with a preposition, although his own wording was milder: he called it an idiom the language was strongly inclined to, but less suited to the solemn style.</li>
          <li><strong>Lindley Murray</strong>, <em>English Grammar</em> (1795), largely based on Lowth, became the dominant school grammar in Britain and America for much of the nineteenth century.</li>
          <li>The rule against the <strong>split infinitive</strong> (<em>to boldly go</em>) is younger. It arose in the nineteenth century; Henry Alford’s <em>A Plea for the Queen’s English</em> (1864) is the source most often named, though Alford gave no argument beyond his own preference.</li>
        </ul>
        <p>That many of these rules were modelled on Latin is often said, and plausible for some, but it is not well documented for each rule. For the split infinitive the origin of the objection remains unclear.</p>
        <p class="src">Pullum on the split infinitive (University of Edinburgh); Smithsonian Magazine on Lowth and Alford.</p>` },
    { title: 'The usage tradition',
      html: `
        <p>In the twentieth century the most influential authorities were no longer grammars but usage guides, which give advice on doubtful points in an essayistic, often witty voice:</p>
        <ul>
          <li>H. W. and F. G. Fowler, <em>The King’s English</em> (1906), and H. W. Fowler’s <em>A Dictionary of Modern English Usage</em> (1926), revised several times since.</li>
          <li>Sir Ernest Gowers, <em>Plain Words</em> (1948), written for the British civil service and the ancestor of today’s plain-English movement.</li>
          <li>Publishers’ style guides: <em>Hart’s Rules</em> (Oxford, now <em>New Hart’s Rules</em>), <em>The Chicago Manual of Style</em>, and newspaper guides such as <em>The Economist</em>’s and <em>The Guardian</em>’s.</li>
        </ul>` },
    { title: 'The descriptive turn',
      html: `
        <p>Academic grammar meanwhile moved from prescribing to describing, increasingly on the evidence of large collections of real text (corpora). The two great reference grammars of present-day English are:</p>
        <ul>
          <li>Quirk, Greenbaum, Leech and Svartvik, <em>A Comprehensive Grammar of the English Language</em> (1985);</li>
          <li>Huddleston and Pullum, <em>The Cambridge Grammar of the English Language</em> (2002).</li>
        </ul>
        <p>Both describe standard English as it is written and spoken by educated users, and both reject several of the schoolroom rules above. In English schools, explicit grammar teaching largely disappeared from the 1960s and returned with the National Curriculum; since 2013 primary pupils in England sit a grammar, punctuation and spelling test.</p>` }
  ],

  contrast: `
    <p>The two histories leave the languages in very different positions.</p>
    <div class="tablewrap"><table>
      <thead><tr><th></th><th>German</th><th>English</th></tr></thead>
      <tbody>
        <tr><th>Spelling</th><td>Official: Amtliches Regelwerk, binding for schools and administration</td><td>No official norm; dictionaries and house styles</td></tr>
        <tr><th>Punctuation</th><td>Part of the official Regelwerk</td><td>Style guides; much is left to the writer</td></tr>
        <tr><th>Grammar</th><td>Private reference works (Duden, IDS); strong cultural authority of “the Duden”</td><td>Private reference works and usage guides; several competing authorities</td></tr>
        <tr><th>National variants</th><td>One Regelwerk for Germany, Austria, Switzerland and others, with recorded variants</td><td>Separate norms (British, American, others), no common body</td></tr>
      </tbody></table></div>
    <p>For a learner this has a practical consequence. A German spelling or comma question usually has a definite answer you can look up. A German grammar question often has the answer “both forms occur; the Duden recommends one”. An English question about punctuation or usage often has the answer “it depends on the style you follow”, and the honest test is what careful writers and editors actually do.</p>
    <p class="contrast">German speakers tend to expect a rule book behind every question, and English speakers tend to distrust anyone who claims one. Both attitudes are products of the histories above.</p>`,

  usage: `
    <p>This lecture introduces the theme that runs through the whole course: the difference between the <strong>codified rule</strong>, <strong>edited usage</strong> (what appears in carefully written and edited texts) and <strong>everyday usage</strong> (what people say and write informally). The three often agree. Where they part company, each lecture will say so and say on what evidence.</p>
    <p>Two examples from opposite ends:</p>
    <ul>
      <li><strong>German Präteritum.</strong> No rule book ever required the Präteritum in conversation. The written narrative tense is the Präteritum; the normal past tense of speech, especially in the south, is the Perfekt. Older books and songs sound different mainly because they are written narrative or deliberately elevated, not because a rule has been abandoned. (Lecture 2.4.)</li>
      <li><strong>English “fewer” and “less”.</strong> The rule that countable nouns take <em>fewer</em> (<em>fewer cars</em>, not <em>less cars</em>) is usually traced to a single eighteenth-century writer, Robert Baker (1770), who offered it as his own preference. It became a schoolroom rule; <em>less</em> with plurals is nevertheless old and widespread, and supermarket signs saying “10 items or less” are the most argued-over example in the language. In careful writing <em>fewer</em> remains the safe choice.</li>
    </ul>`,

  latin: `
    <p>Both traditions describe their languages with Latin categories, because the first grammars of German and English were written by people trained in Latin grammar.</p>
    <ul>
      <li>The Greek <em>Technē grammatikē</em> attributed to Dionysius Thrax (around 100 BC, the attribution is disputed) set up eight parts of speech.</li>
      <li>The Roman <strong>Aelius Donatus</strong> (4th century AD) wrote the <em>Ars minor</em>, a short question-and-answer grammar used in schools for over a thousand years. It was so common that <em>Donat</em> in German and <em>donet</em> in Middle English came to mean a primer of any subject.</li>
      <li><strong>Priscian</strong> (around AD 500) wrote the large <em>Institutiones grammaticae</em>, the standard advanced grammar of the Middle Ages.</li>
    </ul>
    <p>Early grammars of English (William Bullokar, 1586) and of German (Valentin Ickelsamer, <em>Teutsche Grammatica</em>, around 1534) took over this framework. That is why both languages are still described in terms of cases, moods and parts of speech defined for Latin, sometimes uncomfortably: English grammars long listed an “ablative” for English nouns, which have no such form.</p>
    <p class="latin">You will meet the Latin names of the grammatical categories in lecture 0.3. Most of them are transparent once you know a little Latin: <em>praepositio</em> is “something placed before”, <em>coniunctio</em> “a joining”.</p>`,

  summary: [
    '“Grammar” means the system, a description of it, or a codified norm. Keep the three apart.',
    'German spelling and punctuation are officially regulated (since 1901/02; today by the Rat für deutsche Rechtschreibung, Regelwerk 2024), but only for schools and administration.',
    'German grammar has no official codification; the Duden grammar (since 1935) and the IDS describe it.',
    'English has never had any official authority. Its norms come from dictionaries (Johnson, Webster, OED), grammarians (Lowth, Murray), usage guides (Fowler, Gowers) and house styles.',
    'Several English schoolroom rules (no final preposition, no split infinitive, fewer not less) go back to individual writers’ preferences.',
    'Both languages are described in categories taken over from Latin grammar (Donatus, Priscian).'
  ],

  cards: [
    { id: 'who', title: 'Who sets the norm?', tags: ['authority', 'Duden', 'Regelwerk', 'style guide'], html: `
      <p><strong>German spelling and punctuation:</strong> Amtliches Regelwerk (Rat für deutsche Rechtschreibung, version 2024). Binding for schools and administration, a model for everyone else. The Duden dictionary follows it.</p>
      <p><strong>German grammar:</strong> no official norm. Duden Band 4 (Grammatik) and Band 9 (Zweifelsfälle); IDS Mannheim (grammis).</p>
      <p><strong>English:</strong> no official norm for anything. Current dictionaries (OED, Merriam-Webster), usage guides (Fowler, Garner), style guides (New Hart’s Rules, Chicago, The Economist, The Guardian, GOV.UK).</p>` },
    { id: 'timeline-de', title: 'Timeline: German standardisation', tags: ['history', 'Duden', '1901'], html: `
      <dl class="timeline"><dt>1534</dt><dd>Luther’s complete Bible</dd><dt>1663</dt><dd>Schottelius, grammar</dd><dt>1748</dt><dd>Gottsched, Sprachkunst</dd><dt>1774–86</dt><dd>Adelung, dictionary</dd><dt>1819</dt><dd>Grimm, Deutsche Grammatik</dd><dt>1876</dt><dd>I. Orthographische Konferenz fails</dd><dt>1880</dt><dd>Prussian school rules; Ur-Duden</dd><dt>1898</dt><dd>Siebs, stage pronunciation</dd><dt>1901/02</dt><dd>II. Konferenz; common spelling</dd><dt>1935</dt><dd>First Duden grammar</dd><dt>1955</dt><dd>Duden authoritative (KMK)</dd><dt>1996</dt><dd>Spelling reform</dd><dt>2004</dt><dd>Rat für deutsche Rechtschreibung</dd><dt>2006</dt><dd>Revised Regelwerk</dd><dt>2024</dt><dd>New Regelwerk</dd></dl>` },
    { id: 'timeline-en', title: 'Timeline: English norms', tags: ['history', 'Johnson', 'Webster', 'Fowler'], html: `
      <dl class="timeline"><dt>1586</dt><dd>Bullokar, first English grammar</dd><dt>1712</dt><dd>Swift proposes an academy (never founded)</dd><dt>1755</dt><dd>Johnson’s Dictionary</dd><dt>1762</dt><dd>Lowth’s grammar</dd><dt>1770</dt><dd>Baker: “fewer”, not “less”</dd><dt>1795</dt><dd>Murray’s grammar</dd><dt>1828</dt><dd>Webster’s American Dictionary</dd><dt>1864</dt><dd>Alford against the split infinitive</dd><dt>1884–1928</dt><dd>OED</dd><dt>1926</dt><dd>Fowler’s Modern English Usage</dd><dt>1948</dt><dd>Gowers, Plain Words</dd><dt>1985</dt><dd>Quirk et al., Comprehensive Grammar</dd><dt>2002</dt><dd>Cambridge Grammar</dd></dl>` }
  ],

  terms: [
    { en: 'standard language', de: 'Standardsprache, Hochsprache', la: '', note: 'The codified variety used in writing, schools and administration.' },
    { en: 'orthography, spelling', de: 'Orthographie (Orthografie), Rechtschreibung', la: 'orthographia (from Greek)', note: 'Greek orthós “right” + gráphein “write”.' },
    { en: 'prescriptive', de: 'präskriptiv, normativ', la: 'praescribere “to prescribe”', note: 'Says what speakers should do.' },
    { en: 'descriptive', de: 'deskriptiv', la: 'describere “to describe”', note: 'Records what speakers do.' },
    { en: 'corpus (pl. corpora)', de: 'Korpus (pl. Korpora)', la: 'corpus “body”', note: 'A large collection of real texts used as evidence.' },
    { en: 'usage guide', de: 'Ratgeber zu Zweifelsfällen', la: '', note: 'Fowler, Garner; in German Duden Band 9.' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: 'Who is bound by the Amtliches Regelwerk der deutschen Rechtschreibung?', options: ['Schools and public administration', 'Everyone writing German in Germany, Austria and Switzerland', 'Publishers and newspapers only', 'Nobody: it is a recommendation'], answer: 0, explain: 'It regulates spelling where the state has competence: schools and administration. For everyone else it is a model (“Vorbildcharakter”).' },
    { id: 'e2', type: 'mc', prompt: 'Which body regulates English spelling?', options: ['None', 'The Oxford English Dictionary', 'The British Council', 'The Royal Society'], answer: 0, explain: 'English has never had an official language authority. Dictionaries and style guides have authority only because people accept them.' },
    { id: 'e3', type: 'match', prompt: 'Match each date to the event.', pairs: [['1755', 'Johnson’s Dictionary'], ['1880', 'The “Ur-Duden”'], ['1901', 'II. Orthographische Konferenz'], ['1828', 'Webster’s American Dictionary'], ['2024', 'New Amtliches Regelwerk']], explain: 'German spelling was unified in 1901/02; the current Regelwerk dates from 2024. Johnson (1755) and Webster (1828) set the British and American spelling traditions.' },
    { id: 'e4', type: 'mc', prompt: 'The objection to the split infinitive (<em>to boldly go</em>) …', options: ['arose in the nineteenth century, without a clear source in Latin grammar', 'goes back to Lowth’s grammar of 1762', 'was decided by Johnson’s Dictionary', 'is a rule of Old English'], answer: 0, explain: 'It appears in the nineteenth century; Alford (1864) is the best-known source. The Latin explanation is popular but not documented.' },
    { id: 'e5', type: 'mc', prompt: 'What changed in German spelling in 1901/02?', options: ['<em>th</em> disappeared from native words: <em>Thür</em> became <em>Tür</em>', 'Nouns were capitalised for the first time', 'ß was abolished', 'The comma rules were fixed in law'], answer: 0, explain: 'Noun capitalisation was already usual; ß was kept (Switzerland later gave it up); punctuation was not settled in 1901.' },
    { id: 'e6', type: 'mc', prompt: 'Since when has a German grammar appeared under the Duden name?', options: ['1935 (Basler), building on the Bauer–Duden school grammar', '1880, together with the dictionary', '1901, as part of the conference rules', '1996, with the spelling reform'], answer: 0, explain: 'Konrad Duden had edited a school grammar; the first “Großer Duden” grammar followed in 1935, and Band 4 of the Duden series in 1959.' }
  ]
});
