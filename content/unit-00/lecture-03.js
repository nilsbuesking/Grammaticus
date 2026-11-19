/*
 * Unit 0, lecture 3: the vocabulary of grammar.
 * Content file only. German section in German, the rest in English. Checks: CONTENT-CHECKS.md.
 * This lecture supplies most of the glossary (Reference → Terms).
 */
Grammaticus.addLecture({
  id: '0.3', unit: 0, number: 3,
  title: 'The names of things',
  subtitle: 'Word classes and grammatical categories in German, English and Latin',
  minutes: 30,

  intro: `
    <p>Grammar needs a vocabulary, and German speakers have three to choose from: the Latin terms (<em>Substantiv, Verb</em>), the German translations from the seventeenth to nineteenth centuries (<em>Hauptwort, Zeitwort</em>), and newer school terms (<em>Nomen, Begleiter</em>). English uses Latin-derived terms throughout. This lecture sets out the terms used in the rest of the course, and the one distinction that matters most: between what a word <em>is</em> and what it <em>does</em> in a sentence.</p>`,

  concept: [
    { title: 'Word class and function',
      html: `
        <p>A <strong>word class</strong> (part of speech, <em>Wortart</em>) is a property of the word itself: <em>Hund</em> is a noun wherever it appears. A <strong>function</strong> (<em>Satzglied</em>, sentence element) is the job a word or phrase does in a particular sentence: subject, object, adverbial.</p>
        <div class="ex"><p lang="en"><u class="k">The dog</u> bit the postman. <span class="gl">noun phrase as subject</span></p><p lang="en">The postman bit <u class="k">the dog</u>. <span class="gl">the same noun phrase as object</span></p></div>
        <p>Keeping the two apart avoids most of the confusion in school grammar. “Noun” and “subject” are not the same kind of label: the first answers <em>what is it?</em>, the second <em>what is it doing here?</em> Lecture 0.4 deals with functions; this one with word classes and the categories they inflect for.</p>` },
    { title: 'Inflection',
      html: `
        <p>Words change their form to express grammatical <strong>categories</strong>: number, case, tense and so on. This is <strong>inflection</strong> (<em>Flexion</em>), divided into:</p>
        <ul>
          <li><strong>declension</strong> (<em>Deklination</em>): nouns, pronouns, articles, adjectives, for case, number and gender;</li>
          <li><strong>conjugation</strong> (<em>Konjugation</em>): verbs, for person, number, tense, mood and voice;</li>
          <li><strong>comparison</strong> (<em>Komparation, Steigerung</em>): adjectives and some adverbs: <em>schnell, schneller, am schnellsten</em>.</li>
        </ul>
        <p>Inflection is different from <strong>word formation</strong> (derivation and compounding), which makes new words: <em>Freund → freundlich → Freundlichkeit</em>. That is Unit 7.</p>` }
  ],

  german: [
    { title: 'Die Wortarten',
      html: `
        <p>Die Schulgrammatik unterscheidet meist zehn Wortarten. Daneben stehen die deutschen Bezeichnungen, die in älteren Büchern und in der Grundschule begegnen.</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Fachwort</th><th>Deutsch</th><th>Beispiele</th></tr></thead>
          <tbody>
            <tr><td>Nomen, Substantiv</td><td>Hauptwort, Namenwort</td><td>Hund, Freiheit, Berlin</td></tr>
            <tr><td>Verb</td><td>Zeitwort, Tätigkeitswort</td><td>laufen, sein, können</td></tr>
            <tr><td>Adjektiv</td><td>Eigenschaftswort, Wiewort</td><td>rot, schnell, deutsch</td></tr>
            <tr><td>Artikel</td><td>Geschlechtswort, Begleiter</td><td>der, die, das, ein</td></tr>
            <tr><td>Pronomen</td><td>Fürwort</td><td>er, mein, dieser, wer</td></tr>
            <tr><td>Numerale</td><td>Zahlwort</td><td>drei, dritte</td></tr>
            <tr><td>Adverb</td><td>Umstandswort</td><td>hier, gestern, gern</td></tr>
            <tr><td>Präposition</td><td>Verhältniswort</td><td>in, wegen, trotz</td></tr>
            <tr><td>Konjunktion</td><td>Bindewort</td><td>und, weil, dass</td></tr>
            <tr><td>Interjektion</td><td>Ausrufewort, Empfindungswort</td><td>ach, oh, pst</td></tr>
          </tbody></table></div>
        <p>Neuere wissenschaftliche Grammatiken, darunter die Duden-Grammatik, ordnen anders: Sie fassen Artikel und Pronomen zusammen, zählen Numeralien zu anderen Klassen und führen die <strong>Partikeln</strong> als eigene Gruppe (<em>ja, doch, halt, nur, sehr</em>). Für diesen Kurs genügt die Schulliste, ergänzt um die Partikeln.</p>` },
    { title: 'Flektierbar oder nicht',
      html: `
        <p>Die wichtigste Einteilung ist die nach der Form:</p>
        <ul>
          <li><strong>deklinierbar</strong>: Nomen, Artikel, Pronomen, Adjektiv (und viele Numeralien);</li>
          <li><strong>konjugierbar</strong>: Verb;</li>
          <li><strong>unflektierbar</strong>: Adverb, Präposition, Konjunktion, Partikel, Interjektion.</li>
        </ul>
        <p>Das Deutsche hat weit mehr Flexion bewahrt als das Englische. Ein deutsches Adjektiv kann in einer Nominalgruppe bis zu fünf Formen haben (<em>gut, gute, guten, guter, gutes</em>), ein englisches hat eine (<em>good</em>).</p>` },
    { title: 'Die grammatischen Kategorien',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th>Kategorie</th><th>Werte im Deutschen</th></tr></thead>
          <tbody>
            <tr><td>Kasus (Fall)</td><td>Nominativ, Akkusativ, Dativ, Genitiv</td></tr>
            <tr><td>Numerus (Zahl)</td><td>Singular, Plural</td></tr>
            <tr><td>Genus (grammatisches Geschlecht)</td><td>Maskulinum, Femininum, Neutrum</td></tr>
            <tr><td>Person</td><td>1., 2., 3. Person</td></tr>
            <tr><td>Tempus (Zeitform)</td><td>Präsens, Präteritum, Perfekt, Plusquamperfekt, Futur I, Futur II</td></tr>
            <tr><td>Modus (Aussageweise)</td><td>Indikativ, Konjunktiv I, Konjunktiv II, Imperativ</td></tr>
            <tr><td>Genus verbi (Handlungsrichtung)</td><td>Aktiv, Passiv (werden- und sein-Passiv)</td></tr>
          </tbody></table></div>
        <p>Vorsicht bei <em>Genus</em>: Allein heißt es „grammatisches Geschlecht“, in <em>Genus verbi</em> bezeichnet es Aktiv und Passiv. Beides geht auf lateinisch <em>genus</em> „Art, Gattung“ zurück.</p>
        <p>Nicht jede Zeitform ist eine eigene Wortform. Nur Präsens (<em>ich gehe</em>) und Präteritum (<em>ich ging</em>) werden durch Flexion gebildet; die übrigen sind <strong>analytisch</strong>, mit Hilfsverb: <em>ich bin gegangen, ich werde gehen</em>.</p>` },
    { title: 'Präteritum oder Imperfekt?',
      html: `
        <p>Für die einfache Vergangenheit (<em>ich ging</em>) sind zwei Namen üblich. <em>Imperfekt</em> ist der ältere, aus der Lateingrammatik übernommen; <em>Präteritum</em> ist heute der fachlich bevorzugte. Der Grund: Das lateinische <em>imperfectum</em> bezeichnet eine unabgeschlossene, andauernde Handlung (Aspekt), das deutsche Präteritum dagegen jede Vergangenheit, abgeschlossen oder nicht. Der Name <em>Imperfekt</em> verspricht also etwas, was die deutsche Form nicht leistet.</p>` }
  ],

  english: [
    { title: 'Parts of speech',
      html: `
        <p>Traditional English grammar lists eight or nine parts of speech; modern grammars add <strong>determiners</strong>, which include the articles.</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Class</th><th>Examples</th><th>Note</th></tr></thead>
          <tbody>
            <tr><td>noun</td><td>dog, freedom, London</td><td>count and uncount (<em>a dog</em>, <em>*a freedom</em> in most senses)</td></tr>
            <tr><td>verb</td><td>run, be, can</td><td>lexical, auxiliary (<em>be, have, do</em>) and modal verbs</td></tr>
            <tr><td>adjective</td><td>red, quick, German</td><td>one form only, apart from comparison</td></tr>
            <tr><td>adverb</td><td>here, yesterday, quickly</td><td></td></tr>
            <tr><td>pronoun</td><td>he, mine, who</td><td>the only words with case: <em>I/me, he/him, who/whom</em></td></tr>
            <tr><td>determiner</td><td>the, a, this, my, some, every</td><td>includes the articles</td></tr>
            <tr><td>preposition</td><td>in, despite, before</td><td></td></tr>
            <tr><td>conjunction</td><td>and, because, that</td><td>coordinating and subordinating</td></tr>
            <tr><td>interjection</td><td>oh, ouch, hey</td><td></td></tr>
          </tbody></table></div>` },
    { title: 'Very little inflection',
      html: `
        <p>English has lost almost all of its inflection. Apart from pronouns and a few irregular forms, there are only eight inflectional endings in the whole language:</p>
        <ul>
          <li>nouns: plural <em>-s</em> (<em>dogs</em>) and possessive <em>’s</em> (<em>the dog’s</em>);</li>
          <li>verbs: <em>-s</em> (<em>she runs</em>), <em>-ed</em> (<em>walked</em>), <em>-ing</em> (<em>walking</em>), <em>-en</em> (<em>taken</em>);</li>
          <li>adjectives: <em>-er</em> and <em>-est</em> (<em>faster, fastest</em>).</li>
        </ul>
        <p>Much of what German does by inflection English does by word order and by auxiliary words (<em>will, have, be, more, of</em>).</p>` },
    { title: 'Categories',
      html: `
        <ul>
          <li><strong>number</strong>: singular, plural;</li>
          <li><strong>person</strong>: first, second, third (visible only in pronouns and the <em>-s</em> of <em>she runs</em>);</li>
          <li><strong>case</strong>: only in pronouns (<em>he/him/his</em>) and the possessive <em>’s</em>;</li>
          <li><strong>gender</strong>: no grammatical gender; only the pronouns <em>he, she, it</em> follow natural sex or personification;</li>
          <li><strong>tense</strong>: strictly speaking two, present (<em>walks</em>) and past (<em>walked</em>); “future”, “perfect” and the rest are built with auxiliaries;</li>
          <li><strong>aspect</strong>: progressive (<em>is walking</em>) and perfect (<em>has walked</em>), a category German lacks as a grammatical system;</li>
          <li><strong>mood</strong>: indicative, imperative, and remnants of a subjunctive (<em>if I were</em>);</li>
          <li><strong>voice</strong>: active and passive.</li>
        </ul>` },
    { title: 'Gerund and participle',
      html: `
        <p>The <em>-ing</em> form has two traditional names. When it works like a noun it is a <strong>gerund</strong> (<em>Swimming is good for you</em>); when it works like an adjective or forms the progressive it is a <strong>present participle</strong> (<em>a swimming dog</em>, <em>she is swimming</em>). Since the form is the same, the <em>Cambridge Grammar</em> (2002) calls it simply the <em>gerund-participle</em>. German has no gerund: it uses the infinitive as a noun (<em>das Schwimmen</em>) or a <em>dass</em>-clause.</p>` }
  ],

  contrast: `
    <p>The two languages share the Latin labels but not always the things they label.</p>
    <ul>
      <li><strong>Tense.</strong> Both have only two synthetic tenses (<em>ich gehe / ging</em>; <em>I go / went</em>). Everything else is built with auxiliaries. The German <em>Perfekt</em> and the English <em>present perfect</em> look alike (<em>ich habe gegessen / I have eaten</em>) but are used very differently. That is Unit 2.</li>
      <li><strong>Aspect.</strong> English grammaticalised the progressive (<em>I am reading</em>). German expresses it, when it must, with words: <em>Ich lese gerade</em>; regionally <em>ich bin am Lesen</em>.</li>
      <li><strong>Case and gender.</strong> German keeps four cases and three genders in articles, adjectives and pronouns; English keeps case in a few pronouns and gender only in <em>he/she/it</em>.</li>
      <li><strong>Mood.</strong> German has a living subjunctive system (Konjunktiv I and II); English has a few fossilised forms.</li>
      <li><strong>Particles.</strong> German has modal particles (<em>ja, doch, halt, eben, mal</em>) that English has no word class for; English conveys the same nuances by intonation, tags (<em>…, isn’t it?</em>) or adverbs.</li>
      <li><strong>Gerund.</strong> English has it; German does not.</li>
    </ul>
    <p class="contrast">When you translate grammatical terms, check that the thing is the same: <em>Konjunktiv</em> and <em>subjunctive</em>, <em>Perfekt</em> and <em>present perfect</em>, are false friends at the level of grammar.</p>`,

  latin: `
    <p>Almost every grammatical term is Latin, and most were translated from Greek by Roman grammarians. Knowing what they mean makes them easier to remember:</p>
    <div class="tablewrap"><table>
      <thead><tr><th>Term</th><th>Latin</th><th>Literal meaning</th></tr></thead>
      <tbody>
        <tr><td>noun</td><td>nomen</td><td>name</td></tr>
        <tr><td>verb</td><td>verbum</td><td>word (the word par excellence)</td></tr>
        <tr><td>adjective</td><td>(nomen) adiectivum</td><td>(a noun) thrown in beside</td></tr>
        <tr><td>adverb</td><td>adverbium</td><td>(standing) by the verb</td></tr>
        <tr><td>pronoun</td><td>pronomen</td><td>in place of a noun</td></tr>
        <tr><td>preposition</td><td>praepositio</td><td>a placing in front</td></tr>
        <tr><td>conjunction</td><td>coniunctio</td><td>a joining together</td></tr>
        <tr><td>interjection</td><td>interiectio</td><td>a throwing in between</td></tr>
        <tr><td>participle</td><td>participium</td><td>a sharing: it shares features of noun and verb</td></tr>
        <tr><td>case</td><td>casus</td><td>a fall (from Greek <em>ptōsis</em>): forms “falling away” from the nominative</td></tr>
      </tbody></table></div>
    <p>The names of the cases contain two famous mistranslations, as usually told. Greek <em>genikē</em> meant “of the kind, general”; Latin rendered it <em>genetivus</em>, as if from <em>genus</em> “birth, origin”. Greek <em>aitiatikē</em> meant roughly “of what is affected or caused”; Latin rendered it <em>accusativus</em>, as if from <em>aitia</em> in the sense “accusation”. The <em>dativus</em> is straightforward: the case of giving (<em>dare</em>).</p>
    <p class="latin">Latin has six cases (nominative, genitive, dative, accusative, ablative, vocative); German kept four of the old Indo-European cases, English effectively one plus the possessive.</p>`,

  pitfalls: `
    <ul>
      <li><strong>Word class is not function.</strong> <em>Gestern</em> is an adverb; in <em>Gestern war ein guter Tag</em> it is still an adverb, not the subject (the subject is <em>ein guter Tag</em>).</li>
      <li><strong>“Imperfekt”</strong> is still common in German schools and in courses for foreigners. It means the same as Präteritum; use <em>Präteritum</em> to avoid the false hint at Latin aspect.</li>
      <li><strong>“Future tense”.</strong> Neither language has a future tense in the strict sense of a verb form. <em>Ich werde gehen</em> and <em>I will go</em> are constructions, and both languages mostly use the present for the future anyway (lecture 2.3).</li>
      <li><strong><em>Genus</em>.</strong> In German texts on grammar, <em>Genus</em> alone means gender; <em>Genus verbi</em> means voice.</li>
    </ul>`,

  summary: [
    'Word class (Wortart: what a word is) is not function (Satzglied: what it does in a sentence).',
    'Inflection: declension (nouns, articles, pronouns, adjectives), conjugation (verbs), comparison (adjectives).',
    'German has kept rich inflection (4 cases, 3 genders); English has eight inflectional endings in all.',
    'Both languages have only two synthetic tenses; the others are built with auxiliaries.',
    'English has grammatical aspect (progressive) and a gerund; German has modal particles and a living subjunctive.',
    'Prefer “Präteritum” to “Imperfekt”. Most terms are Latin; genitive and accusative are probably mistranslations of Greek.'
  ],

  cards: [
    { id: 'classes', title: 'Word classes in three languages', tags: ['Wortarten', 'parts of speech'], html: `
      <div class="tablewrap"><table><thead><tr><th>English</th><th>Deutsch</th><th>Latin</th></tr></thead><tbody>
      <tr><td>noun</td><td>Nomen, Substantiv (Hauptwort)</td><td>nomen</td></tr><tr><td>verb</td><td>Verb (Zeitwort)</td><td>verbum</td></tr><tr><td>adjective</td><td>Adjektiv (Eigenschaftswort)</td><td>adiectivum</td></tr><tr><td>adverb</td><td>Adverb (Umstandswort)</td><td>adverbium</td></tr><tr><td>pronoun</td><td>Pronomen (Fürwort)</td><td>pronomen</td></tr><tr><td>article/determiner</td><td>Artikel (Begleiter)</td><td>–</td></tr><tr><td>preposition</td><td>Präposition (Verhältniswort)</td><td>praepositio</td></tr><tr><td>conjunction</td><td>Konjunktion (Bindewort)</td><td>coniunctio</td></tr><tr><td>interjection</td><td>Interjektion</td><td>interiectio</td></tr><tr><td>particle</td><td>Partikel</td><td>particula</td></tr></tbody></table></div>` },
    { id: 'categories', title: 'Grammatical categories', tags: ['Kasus', 'Tempus', 'Modus', 'Genus'], html: `
      <p><strong>Kasus</strong> case · <strong>Numerus</strong> number · <strong>Genus</strong> gender · <strong>Person</strong> person · <strong>Tempus</strong> tense · <strong>Aspekt</strong> aspect (English: progressive, perfect) · <strong>Modus</strong> mood · <strong>Genus verbi</strong> voice (active, passive).</p>
      <p>German: 4 cases, 3 genders, 2 synthetic tenses, Konjunktiv I and II. English: case only in pronouns and ’s, no grammatical gender, 2 synthetic tenses, progressive aspect.</p>` }
  ],

  terms: [
    { en: 'word class, part of speech', de: 'Wortart', la: 'pars orationis' },
    { en: 'noun', de: 'Nomen, Substantiv, Hauptwort', la: 'nomen (substantivum)' },
    { en: 'verb', de: 'Verb, Zeitwort', la: 'verbum' },
    { en: 'adjective', de: 'Adjektiv, Eigenschaftswort', la: 'adiectivum' },
    { en: 'adverb', de: 'Adverb, Umstandswort', la: 'adverbium' },
    { en: 'pronoun', de: 'Pronomen, Fürwort', la: 'pronomen' },
    { en: 'article', de: 'Artikel, Geschlechtswort', la: 'articulus', note: 'Latin has no articles; the term meant “small joint”.' },
    { en: 'determiner', de: 'Determinativ, Begleiter', la: '' },
    { en: 'preposition', de: 'Präposition, Verhältniswort', la: 'praepositio' },
    { en: 'conjunction', de: 'Konjunktion, Bindewort', la: 'coniunctio' },
    { en: 'interjection', de: 'Interjektion', la: 'interiectio' },
    { en: 'particle', de: 'Partikel', la: 'particula “small part”', note: 'German modal particles: ja, doch, halt, eben, mal.' },
    { en: 'numeral', de: 'Numerale, Zahlwort', la: 'numerale' },
    { en: 'inflection', de: 'Flexion, Beugung', la: 'flexio “bending”' },
    { en: 'declension', de: 'Deklination', la: 'declinatio' },
    { en: 'conjugation', de: 'Konjugation', la: 'coniugatio' },
    { en: 'comparison', de: 'Komparation, Steigerung', la: 'comparatio' },
    { en: 'case', de: 'Kasus, Fall', la: 'casus' },
    { en: 'nominative', de: 'Nominativ, Werfall', la: 'nominativus' },
    { en: 'accusative', de: 'Akkusativ, Wenfall', la: 'accusativus' },
    { en: 'dative', de: 'Dativ, Wemfall', la: 'dativus' },
    { en: 'genitive', de: 'Genitiv, Wesfall', la: 'genetivus' },
    { en: 'number', de: 'Numerus', la: 'numerus' },
    { en: 'gender (grammatical)', de: 'Genus', la: 'genus' },
    { en: 'tense', de: 'Tempus, Zeitform', la: 'tempus' },
    { en: 'aspect', de: 'Aspekt', la: 'aspectus', note: 'English progressive and perfect.' },
    { en: 'mood', de: 'Modus', la: 'modus' },
    { en: 'subjunctive', de: 'Konjunktiv', la: 'coniunctivus', note: 'Not equivalent in use: see Unit 2.' },
    { en: 'voice', de: 'Genus verbi', la: 'genus verbi' },
    { en: 'simple past, preterite', de: 'Präteritum (Imperfekt)', la: 'praeteritum' },
    { en: 'gerund', de: '(kein Gegenstück: substantivierter Infinitiv)', la: 'gerundium' },
    { en: 'participle', de: 'Partizip', la: 'participium' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: 'In <span lang="de">Gestern war ein guter Tag</span>, what is <em>gestern</em>?', options: ['An adverb, functioning as an adverbial', 'A noun, functioning as subject', 'An adjective', 'A noun, functioning as an adverbial'], answer: 0, explain: 'Word class: adverb. Function: adverbial of time. The subject is <em>ein guter Tag</em>.' },
    { id: 'e2', type: 'match', prompt: 'Match the Latin term to its literal meaning.', pairs: [['praepositio', 'a placing in front'], ['pronomen', 'in place of a noun'], ['coniunctio', 'a joining together'], ['adverbium', 'by the verb'], ['casus', 'a fall']], explain: 'Most grammatical terms are transparent Latin; several translate Greek terms.' },
    { id: 'e3', type: 'mc', prompt: 'How many tenses does English form by inflection alone, without auxiliaries?', options: ['Two: present and past', 'Three: present, past, future', 'Six', 'One'], answer: 0, explain: '<em>walk(s)</em> and <em>walked</em>. All other “tenses” are built with <em>will, have, be</em>. The same is true of German: <em>gehe / ging</em>.' },
    { id: 'e4', type: 'mc', prompt: 'Why do many grammarians prefer <em>Präteritum</em> to <em>Imperfekt</em>?', options: ['The Latin imperfect is an aspect (unfinished action); the German form is not', '“Imperfekt” was abolished by the 1996 reform', '“Imperfekt” refers to the Perfekt', 'There is no difference; it is a matter of taste'], answer: 0, explain: 'Latin <em>imperfectum</em> means “not completed”. German <em>ich ging</em> carries no such meaning.' },
    { id: 'e5', type: 'mc', prompt: 'In German grammar texts, <em>Genus verbi</em> means …', options: ['voice (active and passive)', 'the gender of verbal nouns', 'the class of strong verbs', 'the infinitive'], answer: 0, explain: '<em>Genus</em> alone means grammatical gender; <em>Genus verbi</em> is the “kind” of the verb: active or passive.' },
    { id: 'e6', type: 'mc', prompt: 'Which English form is a gerund?', options: ['<em>Swimming</em> is good for you.', 'She is <em>swimming</em>.', 'a <em>swimming</em> dog', 'I saw him <em>swimming</em>.'], answer: 0, keepOrder: true, explain: 'Only in the first does the <em>-ing</em> form act as a noun (the subject). German: <em>Schwimmen ist gesund</em>.' }
  ]
});
