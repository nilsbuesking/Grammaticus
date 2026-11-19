/*
 * Unit 1, lecture 3: articles and determiners. Content file only. German section in German.
 */
Grammaticus.addLecture({
  id: '1.3', unit: 1, number: 3,
  title: 'Articles and determiners',
  subtitle: '“Das Leben ist kurz” but “Life is short”; “Er ist Arzt” but “He is a doctor”',
  minutes: 30,

  intro: `
    <p>Both languages have a definite and an indefinite article, and both use them for the same basic job: marking whether the hearer knows which thing is meant. But they disagree on generic statements, abstract nouns, professions, institutions and place names, often enough that an article in the wrong place is one of the clearest signs of the other language showing through.</p>`,

  concept: [
    { title: 'Definite, indefinite, generic',
      html: `
        <ul>
          <li><strong>Definite</strong>: the hearer can identify what is meant: <em>the report I sent you; der Bericht</em>.</li>
          <li><strong>Indefinite</strong>: new or unspecified: <em>a report; ein Bericht</em>.</li>
          <li><strong>Generic</strong>: the whole class: <em>Banks lend money. Die Banken verleihen Geld. Die Bank ist ein Kreditinstitut.</em></li>
        </ul>
        <p>Articles belong to the wider class of <strong>determiners</strong>: words that introduce a noun and fix its reference (<em>this, every, some, my, no; dieser, jeder, manche, mein, kein</em>).</p>` }
  ],

  german: [
    { title: 'Formen',
      html: `
        <p>Der bestimmte Artikel zeigt Genus, Numerus und Kasus (Lektion 1.2). Der unbestimmte Artikel hat keinen Plural; seine Verneinung ist <em>kein</em>:</p>
        <div class="ex"><p lang="de">ein Bericht – Berichte – kein Bericht – keine Berichte</p></div>
        <p>Weitere Begleiter: <em>dieser, jener, jeder, alle, mancher, solcher, welcher, mein, dein …, irgendein</em>.</p>` },
    { title: 'Wann das Deutsche einen Artikel setzt',
      html: `
        <ul>
          <li><strong>Abstrakta und Allgemeinbegriffe</strong>: <em>Das Leben ist kurz. Die Inflation steigt. Die Natur kennt keine Eile. Der Mensch ist sterblich.</em></li>
          <li><strong>Feminine und pluralische Ländernamen</strong> und einige maskuline: <em>die Schweiz, die Türkei, die Ukraine, die USA, die Niederlande, der Iran, der Irak</em>; Neutra ohne Artikel: <em>Deutschland, Frankreich</em> (aber <em>das schöne Frankreich</em>).</li>
          <li><strong>Straßen, Gebirge, Flüsse, Seen</strong>: <em>die Themse, der Bodensee, die Alpen, die Oxford Street</em>.</li>
          <li><strong>Mahlzeiten, Jahreszeiten, Monate mit Präposition</strong>: <em>nach dem Frühstück, im Winter, im Mai</em>.</li>
          <li><strong>Personennamen</strong> mit Artikel (<em>der Peter, die Anna</em>) sind süddeutsch, österreichisch und umgangssprachlich; im geschriebenen Standard ohne Artikel.</li>
        </ul>` },
    { title: 'Wann das Deutsche keinen Artikel setzt',
      html: `
        <ul>
          <li><strong>Beruf, Nationalität, Religion nach sein, werden, als</strong>: <em>Er ist Arzt. Sie ist Deutsche. Als Vorsitzende eröffnete sie die Sitzung.</em> (Mit Adjektiv: <em>Er ist ein guter Arzt.</em>)</li>
          <li><strong>Stoffe und unbestimmte Mengen</strong>: <em>Wir brauchen Geld. Ich trinke Kaffee.</em></li>
          <li><strong>Instrumente und Sportarten</strong>: <em>Sie spielt Klavier / Tennis.</em></li>
          <li><strong>Feste Verbindungen</strong>: <em>Auto fahren, Rad fahren, Angst haben, Zeit haben, in Rente gehen</em>.</li>
        </ul>` }
  ],

  english: [
    { title: 'a or an',
      html: `
        <p>The choice depends on the <strong>sound</strong>, not the letter: <em>an hour, an honest mistake, an MBA, an FAQ</em>, but <em>a university, a European, a one-off, a UK company</em>. Before <em>historic</em> and <em>hotel</em>, <em>an</em> survives in conservative British usage; <em>a historic</em> is now usual.</p>` },
    { title: 'The zero article',
      html: `
        <p>English uses no article for generic statements with plural or uncount nouns, and for most abstract nouns used generally:</p>
        <div class="ex"><p lang="en">Life is short. · Inflation is rising. · Nature is unforgiving. · Banks lend money. · I like music. · History repeats itself.</p><p lang="en">The life of a banker is … · The inflation of the 1970s … <span class="gl">specific: article</span></p></div>` },
    { title: 'Institutions and places',
      html: `
        <ul>
          <li><strong>Institutions used for their purpose</strong> (British): <em>in hospital, at university, at school, in prison, in court, at church</em>; American English often <em>in the hospital</em>. But for the building: <em>I met her at the hospital.</em></li>
          <li><strong>Countries</strong>: no article, except plural or descriptive names: <em>Switzerland, Germany, Ukraine</em>, but <em>the United Kingdom, the Netherlands, the United States, the Czech Republic</em>.</li>
          <li><strong>Rivers, seas, mountain ranges</strong> take <em>the</em> (<em>the Thames, the Alps</em>); <strong>lakes, single mountains, streets</strong> do not (<em>Lake Geneva, Mont Blanc, Oxford Street</em>).</li>
          <li><strong>Meals</strong>: <em>after breakfast, before lunch</em>.</li>
        </ul>` },
    { title: 'Professions and roles',
      html: `
        <div class="ex"><p lang="en">She is <u class="k">a</u> lawyer. · He works as <u class="k">an</u> analyst. · I want to be <u class="k">a</u> pilot.</p><p lang="en">She was elected chair. · He became CEO in 2020. <span class="gl">unique role: no article</span></p></div>` }
  ],

  contrast: `
    <div class="tablewrap"><table>
      <thead><tr><th>German</th><th>English</th></tr></thead>
      <tbody>
        <tr><td>Das Leben ist kurz.</td><td>Life is short.</td></tr>
        <tr><td>Die meisten Leute …</td><td>Most people …</td></tr>
        <tr><td>Er ist Arzt.</td><td>He is a doctor.</td></tr>
        <tr><td>Sie spielt Klavier.</td><td>She plays the piano.</td></tr>
        <tr><td>Er liegt im Krankenhaus.</td><td>He is in hospital.</td></tr>
        <tr><td>die Schweiz, die Ukraine</td><td>Switzerland, Ukraine</td></tr>
        <tr><td>beide Kollegen / die beiden Kollegen</td><td>both colleagues / both of the colleagues</td></tr>
        <tr><td>eine halbe Stunde</td><td>half an hour</td></tr>
        <tr><td>in der Tat</td><td>in fact / indeed</td></tr>
      </tbody></table></div>
    <p class="contrast">The two characteristic errors: German abstract articles in English (<span class="bad">The life is short</span>, <span class="bad">the most people</span>) and missing <em>a</em> before professions (<span class="bad">He is doctor</span>).</p>`,

  usage: `
    <ul>
      <li><strong><em>Ukraine</em> or <em>the Ukraine</em></strong>: English usage moved to <em>Ukraine</em> after independence in 1991, and most style guides now require it; the article was associated with the name of a Soviet region. German keeps <em>die Ukraine</em>, as it keeps <em>die Schweiz</em>; no political meaning attaches to the German article.</li>
      <li><strong>Personal names with article</strong> in German: standard in speech in the south and in Austria, colloquial elsewhere; in writing used for clarity of case (<em>die Briefe der Anna Seghers</em>) or with an adjective (<em>der junge Goethe</em>).</li>
      <li><strong><em>in hospital</em> / <em>in the hospital</em></strong>: a stable British–American difference.</li>
    </ul>`,

  pitfalls: `
    <ul>
      <li><span class="bad">The most companies report in euros.</span> → <em>Most companies …</em></li>
      <li><span class="bad">She works as consultant.</span> → <em>as a consultant</em>.</li>
      <li><span class="bad">In the Switzerland …</span> → <em>In Switzerland</em>.</li>
      <li><span class="bad">Both the colleagues agreed.</span> → <em>Both colleagues / Both of the colleagues agreed.</em> (not <em>the both</em>)</li>
      <li>German: <span class="odd">Er ist ein Arzt.</span> is possible but stresses “one of the doctors” or classifies; the neutral statement of profession is <em>Er ist Arzt</em>.</li>
    </ul>`,

  latin: `
    <p>Latin has no articles; <em>liber</em> is “a book” or “the book” by context. Articles arose later and independently from the same two sources in Romance and Germanic: a demonstrative (“that”) became the definite article (Latin <em>ille</em> → French <em>le</em>; Germanic <em>*þat</em> → <em>der/das, the</em>), and the numeral “one” became the indefinite article (<em>unus</em> → <em>un</em>; <em>ein, an/a</em>).</p>`,

  summary: [
    'Both languages: definite (der, the) for identifiable, indefinite (ein, a) for new; determiners include this, every, some, my, no.',
    'German uses the article with abstract and generic nouns (Das Leben ist kurz); English uses none (Life is short; Most people).',
    'German omits the article with profession after sein/als (Er ist Arzt); English requires it (He is a doctor).',
    'English zero article for institutions in use (in hospital, at university; BrE), meals, most countries; the with plural country names, rivers, ranges.',
    'a/an by sound: an hour, an MBA, a university.',
    'Articles grew from “that” and “one” in both Germanic and Romance; Latin had none.'
  ],

  cards: [
    { id: 'articles', title: 'Article traps DE → EN', tags: ['article', 'Artikel', 'the', 'zero article'], html: `
      <p>Das Leben → Life · die meisten → most · Er ist Arzt → He is a doctor · Klavier spielen → play the piano · im Krankenhaus → in hospital (BrE) · die Schweiz → Switzerland · beide → both (not the both) · eine halbe Stunde → half an hour.</p>` },
    { id: 'a-an', title: 'a or an', tags: ['a', 'an'], html: `
      <p>By sound: an hour, an honest, an MBA, an FAQ · a university, a European, a one-off, a UK firm.</p>` }
  ],

  terms: [
    { en: 'definite article', de: 'bestimmter Artikel', la: '' },
    { en: 'indefinite article', de: 'unbestimmter Artikel', la: '' },
    { en: 'zero article', de: 'Nullartikel', la: '' },
    { en: 'determiner', de: 'Determinativ, Begleiter, Artikelwort', la: '' },
    { en: 'generic reference', de: 'generische Verwendung', la: 'genus' },
    { en: 'demonstrative', de: 'Demonstrativum', la: 'demonstrare “to point out”' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: 'Translate <span lang="de">Die meisten Leute arbeiten von zu Hause.</span>', options: ['Most people work from home.', 'The most people work from home.', 'The most of people work from home.'], answer: 0, keepOrder: true, explain: '<em>most</em> without <em>the</em> for “the majority”.' },
    { id: 'e2', type: 'mc', prompt: 'Translate <span lang="de">Sie ist Juristin.</span>', options: ['She is a lawyer.', 'She is lawyer.', 'She is the lawyer.'], answer: 0, keepOrder: true, explain: 'English needs <em>a</em> before a profession.' },
    { id: 'e3', type: 'mc', prompt: '<span lang="en">___ inflation is a concern for every central bank.</span>', options: ['(no article)', 'The'], answer: 0, keepOrder: true, explain: 'Generic abstract noun: zero article. <em>The inflation of the 1970s</em> would take <em>the</em>.' },
    { id: 'e4', type: 'match', prompt: 'a or an?', pairs: [['___ hour', 'an'], ['___ university', 'a'], ['___ MBA', 'an (em-)'], ['___ UK subsidiary', 'a (you-)']], explain: 'The choice follows the first sound, not the letter.' },
    { id: 'e5', type: 'mc', prompt: 'British English: <span lang="en">My father is ___ for a few days.</span>', options: ['in hospital', 'in the hospital', 'in a hospital'], answer: 0, keepOrder: true, explain: 'British English uses no article for institutions in their function; American English says <em>in the hospital</em>.' },
    { id: 'e6', type: 'mc', lang: 'de', prompt: 'Neutral statement of nationality:', options: ['Sie ist Deutsche.', 'Sie ist eine Deutsche.', 'Sie ist die Deutsche.'], answer: 0, keepOrder: true, explain: 'German omits the article with nationality and profession after <em>sein</em>.' }
  ]
});
