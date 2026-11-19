/*
 * Unit 1, lecture 5: adjectives (declension, comparison, order). Content file only. German section in German.
 */
Grammaticus.addLecture({
  id: '1.5', unit: 1, number: 5,
  title: 'Adjectives: endings and comparison',
  subtitle: 'guter, gute, guten; als or wie; cleverer or more clever; why English says “a lovely little old house”',
  minutes: 30,

  intro: `
    <p>A German adjective before a noun can take five different endings depending on what precedes it; an English adjective never changes. Both languages compare adjectives in similar ways, but German has a regional quarrel between <em>als</em> and <em>wie</em>, and English has rules for the order of several adjectives that every native speaker follows and almost none can state. This lecture covers declension, comparison, order, and the adjective–adverb boundary.</p>`,

  concept: [
    { title: 'Attributive and predicative',
      html: `
        <ul>
          <li><strong>Attributive</strong>: before the noun: <em>der neue Bericht; the new report</em>. German declines it.</li>
          <li><strong>Predicative</strong>: after a linking verb: <em>Der Bericht ist neu; The report is new</em>. German leaves it uninflected.</li>
          <li><strong>Adverbial</strong>: describing a verb: <em>Sie arbeitet schnell; She works quickly</em>. German uses the bare adjective; English usually adds <em>-ly</em>.</li>
        </ul>` }
  ],

  german: [
    { title: 'Das Prinzip der Adjektivdeklination',
      html: `
        <p class="rule">Die Information über Genus und Kasus muss in der Nominalgruppe einmal deutlich sichtbar sein. Zeigt der Artikel sie schon, bekommt das Adjektiv eine schwache Endung (<em>-e, -en</em>); fehlt der Artikel oder zeigt er sie nicht, übernimmt das Adjektiv die starke Endung.</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Deklination</th><th>Beispiele (Nominativ m., Akkusativ m., Dativ m.)</th></tr></thead>
          <tbody>
            <tr><td>schwach (nach der, dieser, jeder)</td><td>der gute Wein · den guten Wein · dem guten Wein</td></tr>
            <tr><td>gemischt (nach ein, kein, mein)</td><td>ein guter Wein · einen guten Wein · einem guten Wein</td></tr>
            <tr><td>stark (ohne Artikel)</td><td>guter Wein · guten Wein · gutem Wein</td></tr>
          </tbody></table></div>
        <p>Die gemischte Deklination ist stark, wo <em>ein</em> keine Endung hat (Nominativ maskulin, Nominativ/Akkusativ neutral: <em>ein guter Wein, ein gutes Jahr</em>), sonst schwach.</p>` },
    { title: 'Zweifelsfälle',
      html: `
        <ul>
          <li><strong>Mehrere Adjektive</strong> werden parallel gebeugt: <em>mit frischem grünem Salat</em>. Im Dativ Singular maskulin und neutral ist auch die schwache Form beim zweiten Adjektiv verbreitet (<em>mit frischem grünen Salat</em>); Grammatiken verzeichnen beide.</li>
          <li><strong>Nach <em>alle, beide, sämtliche</em></strong> schwach: <em>alle guten Ideen, beide neuen Kollegen</em>. <strong>Nach <em>viele, einige, mehrere, wenige, manche</em></strong> stark: <em>viele gute Ideen, einige neue Kollegen</em>.</li>
          <li><strong><em>dieses Jahres</em> oder <em>diesen Jahres</em></strong>: Standard ist <em>im Mai dieses Jahres</em>; <em>diesen Jahres</em> ist sehr verbreitet, gilt aber im geschriebenen Standard als nicht korrekt.</li>
        </ul>` },
    { title: 'Steigerung',
      html: `
        <div class="ex"><p lang="de">schnell – schneller – am schnellsten / der schnellste</p><p lang="de">gut – besser – am besten · viel – mehr – am meisten · gern – lieber – am liebsten · hoch – höher – am höchsten</p></div>
        <p>Beim Vergleich steht nach dem Komparativ <em>als</em>, bei Gleichheit <em>so … wie</em>:</p>
        <div class="ex"><p lang="de">Sie ist erfahrener <u class="k">als</u> ich. · Er ist so alt <u class="k">wie</u> ich.</p><p lang="de" class="odd">Sie ist erfahrener wie ich. <span class="gl">regional, umgangssprachlich</span></p><p lang="de" class="bad">Sie ist erfahrener als wie ich.</p></div>
        <p>Der <strong>absolute Komparativ</strong> bezeichnet keinen Vergleich, sondern einen mittleren Grad: <em>eine ältere Dame</em> ist jünger als <em>eine alte Dame</em>; <em>ein längerer Aufenthalt</em> ist nicht besonders lang.</p>` }
  ],

  english: [
    { title: 'Comparison',
      html: `
        <ul>
          <li>One syllable: <em>-er/-est</em>: <em>faster, fastest</em>.</li>
          <li>Two syllables ending in <em>-y</em>: <em>-er/-est</em>: <em>easier, happiest</em>.</li>
          <li>Other two-syllable adjectives vary: <em>cleverer / more clever, commoner / more common, quieter / more quiet</em>; <em>more</em> is safe.</li>
          <li>Three or more syllables: <em>more/most</em>: <em>more profitable</em>.</li>
          <li>Irregular: <em>good – better – best, bad – worse – worst, far – further/farther – furthest/farthest</em>.</li>
        </ul>
        <p>Comparison of two: <em>the older of the two partners</em>; of more than two: <em>the oldest</em>. In informal English the superlative is common for two.</p>` },
    { title: 'Order of adjectives',
      html: `
        <p>Several adjectives before a noun follow a fairly fixed order, roughly:</p>
        <p class="rule">opinion – size – age – shape – colour – origin – material – purpose + noun</p>
        <div class="ex"><p lang="en">a lovely little old Georgian house</p><p lang="en">a large black leather office chair</p><p lang="en" class="odd">an old little Georgian lovely house</p></div>
        <p>The sequence is a tendency described by grammars (Quirk et al. discuss it at length); popular accounts present it as an unbreakable rule, which it is not. Changing the order for emphasis is possible with stress or commas.</p>` },
    { title: 'Adjective or adverb',
      html: `
        <div class="ex"><p lang="en">She works quickly. · He did well. <span class="gl">adverbs</span></p><p lang="en">I feel bad. · It looks good. · The soup smells delicious. <span class="gl">after linking verbs: adjective</span></p><p lang="en" class="odd">He did good. <span class="gl">informal, especially American</span></p></div>` }
  ],

  contrast: `
    <ul>
      <li><strong>Endings</strong>: German five forms, English one. The German difficulty is internal; the risk for a long-term English speaker is losing the endings in German (<span class="bad">mit einem gute Ergebnis</span>).</li>
      <li><strong>Adverbs</strong>: German uses the adjective unchanged (<em>Sie arbeitet sorgfältig</em>); English needs <em>-ly</em> (<em>carefully</em>). <span class="bad">She works careful</span> is a typical transfer.</li>
      <li><strong><em>als</em> vs <em>than</em></strong>: <em>besser als = better than</em>; <em>so gut wie = as good as</em>. <span class="bad">better as</span> is a German error in English.</li>
      <li><strong>Compound adjectives with numbers</strong>: <em>ein dreijähriger Vertrag = a three-year contract</em> (no plural <em>-s</em>, hyphenated): <span class="bad">a three-years contract</span>.</li>
      <li><strong>Absolute comparative</strong>: <em>eine ältere Dame = an elderly lady</em>, not <em>an older lady</em> (which invites “older than whom?”).</li>
    </ul>`,

  usage: `
    <ul>
      <li><strong><em>als</em> / <em>wie</em></strong>: <em>wie</em> after the comparative was standard in Early New High German and is still frequent in speech in many regions; the written standard has required <em>als</em> since the nineteenth century.</li>
      <li><strong><em>diesen Jahres</em></strong> is so common (also in newspapers) that some linguists see a change in progress; the Duden still marks it as not standard.</li>
      <li><strong>English adjective order</strong> became an internet sensation in 2016 after a passage in Mark Forsyth’s <em>The Elements of Eloquence</em> (2013); the pattern itself had long been described by grammarians.</li>
    </ul>`,

  pitfalls: `
    <ul>
      <li><span class="bad">mit großem politischen Einfluss</span> → strict standard <em>mit großem politischem Einfluss</em> (the weak form is common and tolerated).</li>
      <li><span class="bad">Er ist größer wie ich.</span> → <em>größer als ich</em>.</li>
      <li><span class="bad">The results were more better than expected.</span> → <em>better than expected</em>.</li>
      <li><span class="bad">She handled it professional.</span> → <em>professionally</em>.</li>
      <li><span class="bad">a two-weeks holiday</span> → <em>a two-week holiday</em> (but <em>two weeks’ holiday</em>).</li>
    </ul>`,

  latin: `
    <p>Latin adjectives agree with their noun in gender, number and case, like German, but without a strong/weak distinction: <em>vir bonus, viri boni, viro bono</em>. Comparison is synthetic: <em>altus – altior – altissimus</em>; irregular <em>bonus – melior – optimus</em> (hence English <em>ameliorate, optimal</em>).</p>
    <p class="latin">Latin also has an “absolute” superlative: <em>altissimus</em> can mean “very high” without comparison, which survives in Italian <em>bellissimo</em>.</p>`,

  summary: [
    'German declines attributive adjectives: weak after der/dieser, mixed after ein/kein/mein, strong without article; English adjectives never change.',
    'Principle: case and gender must be signalled once in the noun phrase, by the article or the adjective.',
    'Comparison: German als after comparatives, so … wie for equality; wie after comparatives is regional and non-standard in writing.',
    'English: -er/-est for short adjectives, more/most for long; two-syllable adjectives vary.',
    'English adjective order: opinion – size – age – shape – colour – origin – material – purpose.',
    'German adverbs = bare adjective; English adds -ly. Compound number adjectives: a three-year contract.'
  ],

  cards: [
    { id: 'adj-decl', title: 'Adjective endings (m., Nom./Akk./Dat.)', tags: ['Adjektivdeklination', 'endings'], html: `
      <p><strong>weak</strong>: der gute / den guten / dem guten Wein<br><strong>mixed</strong>: ein guter / einen guten / einem guten Wein<br><strong>strong</strong>: guter / guten / gutem Wein<br>alle, beide → weak; viele, einige, mehrere → strong.</p>` },
    { id: 'adj-order', title: 'English adjective order', tags: ['adjective order', 'opinion size age'], html: `
      <p>opinion – size – age – shape – colour – origin – material – purpose + noun: <em>a lovely little old Georgian house; a large black leather office chair</em>.</p>` },
    { id: 'als-wie', title: 'als or wie', tags: ['als', 'wie', 'than', 'comparison'], html: `
      <p>Comparative + <strong>als</strong>: besser als (better than). Equality: <strong>so … wie</strong>: so gut wie (as good as). Not <em>als wie</em>; <em>besser wie</em> is regional.</p>` }
  ],

  terms: [
    { en: 'attributive / predicative', de: 'attributiv / prädikativ', la: '' },
    { en: 'strong / weak / mixed declension', de: 'starke / schwache / gemischte Deklination', la: '' },
    { en: 'comparative', de: 'Komparativ', la: 'comparativus' },
    { en: 'superlative', de: 'Superlativ', la: 'superlativus' },
    { en: 'positive (base form)', de: 'Positiv', la: 'positivus' },
    { en: 'absolute comparative', de: 'absoluter Komparativ', la: '' },
    { en: 'adverb of manner', de: 'Modaladverb, adverbial gebrauchtes Adjektiv', la: '' }
  ],

  exercises: [
    { id: 'e1', type: 'gap', lang: 'de', prompt: '<span lang="de">Wir haben einen ___ Vertrag abgeschlossen.</span> (neu)', answers: ['neuen'], cs: true, explain: 'Accusative masculine after <em>einen</em>: <em>neuen</em>.' },
    { id: 'e2', type: 'gap', lang: 'de', prompt: '<span lang="de">Das war ein ___ Jahr.</span> (gut)', answers: ['gutes'], cs: true, explain: '<em>ein</em> shows no ending in the neuter nominative, so the adjective takes the strong ending.' },
    { id: 'e3', type: 'mc', lang: 'de', prompt: 'Standard written German:', options: ['im März dieses Jahres', 'im März diesen Jahres'], answer: 0, keepOrder: true, explain: 'The genitive of <em>dieses</em> is <em>dieses</em>; <em>diesen Jahres</em> is common but not standard.' },
    { id: 'e4', type: 'mc', prompt: 'Translate <span lang="de">ein dreijähriger Vertrag</span>', options: ['a three-year contract', 'a three-years contract', 'a three year’s contract'], answer: 0, keepOrder: true, explain: 'Compound adjectives with numbers take the singular and a hyphen.' },
    { id: 'e5', type: 'mc', prompt: 'Natural English order:', options: ['a lovely little old Georgian house', 'an old little lovely Georgian house', 'a Georgian lovely old little house'], answer: 0, keepOrder: true, explain: 'opinion – size – age – origin.' },
    { id: 'e6', type: 'mc', prompt: 'Translate <span lang="de">Sie hat das Projekt sorgfältig geprüft.</span>', options: ['She checked the project carefully.', 'She checked the project careful.'], answer: 0, keepOrder: true, explain: 'English adverbs of manner take <em>-ly</em>.' },
    { id: 'e7', type: 'mc', lang: 'de', prompt: '<span lang="de">eine ältere Dame</span> is best translated as …', options: ['an elderly lady', 'an older lady', 'an old lady'], answer: 0, keepOrder: true, explain: 'The German absolute comparative means “fairly old”, not “older than”.' }
  ]
});
