/*
 * Unit 0, lecture 2: what counts as a rule.
 * Content file only. German section in German, the rest in English. Checks: CONTENT-CHECKS.md.
 */
Grammaticus.addLecture({
  id: '0.2', unit: 0, number: 2,
  title: 'What counts as a rule',
  subtitle: 'Grammatical, standard, correct, good: four different questions, and where to look up each',
  minutes: 25,

  intro: `
    <p>“Is this correct?” sounds like one question. It is usually one of four, and they have different answers and different authorities. This lecture separates them, introduces the marks linguists use to label sentences, and sets out where to look when in doubt in each language.</p>`,

  concept: [
    { title: 'Four kinds of rule',
      html: `
        <ol>
          <li><strong>Rules of the system.</strong> Regularities every native speaker follows without being taught: in German the finite verb comes second in a main clause; in English adjectives of size come before adjectives of colour. Breaking them produces something that is not the language at all.
            <div class="ex"><p lang="de" class="bad">Gestern ich habe ihn gesehen.</p><p lang="en" class="bad">a red big ball</p></div></li>
          <li><strong>Rules of the standard.</strong> The forms of the written standard as against regional or informal forms. Breaking them produces something that is the language, but not the standard.
            <div class="ex"><p lang="de" class="odd">wegen dem Wetter</p><p lang="en" class="odd">I seen it yesterday.</p></div></li>
          <li><strong>Codified rules.</strong> What an official or generally accepted rule book lays down, above all spelling and punctuation. Some are arbitrary conventions (German capitalises nouns; English capitalises <em>I</em>); some follow the grammar (German commas mark clause boundaries).</li>
          <li><strong>Rules of style.</strong> Advice about what reads well for a given purpose: avoid ambiguity, prefer the active, do not pile up nouns. These are judgements, not rules, and good writers break them on purpose.</li>
        </ol>
        <p>Many arguments about language are arguments in which one side means rule 1 or 2 and the other means rule 4.</p>` },
    { title: 'Grammatical, standard, appropriate',
      html: `
        <p>Linguists keep three judgements apart:</p>
        <ul>
          <li><strong>grammatical</strong>: possible in the language (rule 1);</li>
          <li><strong>standard</strong>: part of the codified written variety (rules 2 and 3);</li>
          <li><strong>appropriate</strong>: suitable for the situation, the register (rule 4).</li>
        </ul>
        <p>A sentence can be grammatical but non-standard (<em>I seen it</em>), standard but inappropriate (a legal formula in a text message), or standard and grammatical but clumsy. The word <strong>register</strong> is used throughout this course for the level of formality: from intimate speech through everyday writing to formal and official prose.</p>` },
    { title: 'The marks: * ? %',
      html: `
        <p>Grammars mark example sentences with a few conventional signs. This course uses them in the exercises and, in the text, shows them in colour:</p>
        <ul>
          <li><strong>*</strong> ungrammatical: not possible in the language. In this app: <span class="bad">red, with ✗</span>.</li>
          <li><strong>?</strong> questionable: some speakers accept it, it is non-standard, or it is marked. In this app: <span class="odd">ochre, with ?</span>.</li>
          <li><strong>%</strong> varies: accepted by some speakers or regions and not by others.</li>
        </ul>
        <div class="ex"><p lang="en">*Him saw I.</p><p lang="en">?Between you and I, it was a mistake.</p><p lang="en">%I’ve gotten used to it. (normal in American, unusual in British English)</p></div>` }
  ],

  german: [
    { title: 'Die Instanzen',
      html: `
        <ul>
          <li><strong>Amtliches Regelwerk</strong> (Rat für deutsche Rechtschreibung, Fassung 2024): Rechtschreibung und Zeichensetzung. Verbindlich für Schule und Verwaltung, Vorbild für alle anderen. Frei zugänglich auf rechtschreibrat.com.</li>
          <li><strong>Duden, Die deutsche Rechtschreibung</strong> (Band 1): folgt dem Regelwerk. Wo das Regelwerk Varianten zulässt (<em>Fotografie/Photographie</em>, <em>aufwendig/aufwändig</em>), gibt der Duden eine gelb markierte <em>Empfehlung</em>. Die Empfehlung ist eine Hausentscheidung des Verlags, keine amtliche Regel.</li>
          <li><strong>Duden-Grammatik</strong> (Band 4) und <strong>Duden, Das Wörterbuch der sprachlichen Zweifelsfälle</strong> (Band 9): beschreiben die Grammatik und geben Rat in Zweifelsfällen.</li>
          <li><strong>Leibniz-Institut für Deutsche Sprache (IDS)</strong>, Mannheim: wissenschaftliche Grammatik (online: <em>grammis</em>) und das Deutsche Referenzkorpus, mit dem sich nachsehen lässt, wie häufig eine Form tatsächlich geschrieben wird.</li>
          <li>Für Österreich das <strong>Österreichische Wörterbuch</strong>, für alle Länder das <strong>Variantenwörterbuch des Deutschen</strong>, das die nationalen Standards nebeneinanderstellt: <em>Jänner</em> ist in Österreich ebenso standardsprachlich wie <em>Januar</em> in Deutschland.</li>
        </ul>` },
    { title: 'Die Markierungen im Wörterbuch',
      html: `
        <p>Deutsche Wörterbücher ordnen Wörter und Formen nach Stilebenen ein. Die wichtigsten Etiketten:</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Etikett</th><th>Bedeutung</th><th>Beispiel</th></tr></thead>
          <tbody>
            <tr><td>gehoben</td><td>feierlich, literarisch</td><td>Antlitz, entschlafen</td></tr>
            <tr><td>bildungssprachlich</td><td>setzt Bildung voraus</td><td>obsolet, Diskurs</td></tr>
            <tr><td>umgangssprachlich</td><td>im Alltag üblich, in förmlichen Texten gemieden</td><td>kriegen, wegen + Dativ</td></tr>
            <tr><td>salopp, derb</td><td>betont nachlässig bzw. grob</td><td>abkratzen</td></tr>
            <tr><td>landschaftlich, regional</td><td>nur in einem Teil des Sprachgebiets</td><td>Samstag/Sonnabend</td></tr>
            <tr><td>veraltend, veraltet</td><td>im Rückgang bzw. nicht mehr üblich</td><td>Fräulein</td></tr>
          </tbody></table></div>
        <p><em>Umgangssprachlich</em> heißt also nicht „falsch“, sondern „nicht für jeden Text geeignet“.</p>` },
    { title: 'Der Zweifelsfall',
      html: `
        <p>Die germanistische Sprachwissenschaft spricht von <strong>sprachlichen Zweifelsfällen</strong>, wenn kompetente Sprecher zwischen zwei Formen schwanken und beide verbreitet sind:</p>
        <div class="ex"><p lang="de">dank des Einsatzes / dank dem Einsatz</p><p lang="de">Wir sind gestern geschwommen / haben gestern geschwommen.</p><p lang="de">der Joghurt / das Joghurt (in Österreich auch die Joghurt)</p></div>
        <p>Zweifelsfälle sind kein Zeichen von Verfall, sondern von Sprachwandel oder regionaler Vielfalt. Der Duden-Band 9 beschreibt sie und empfiehlt in der Regel die Form, die im geschriebenen Standard häufiger und weniger auffällig ist.</p>` }
  ],

  english: [
    { title: 'Where authority lies',
      html: `
        <p>English has no rule book with official status, so authority is spread across several kinds of work that do different jobs:</p>
        <ul>
          <li><strong>Dictionaries</strong> (the OED, Collins, Merriam-Webster) record usage and label it: <em>informal</em>, <em>non-standard</em>, <em>dialect</em>, <em>archaic</em>, <em>disputed</em>. They are descriptive: a word appears because people use it, not because it is approved.</li>
          <li><strong>Usage guides</strong> give judgements on disputed points. <em>Fowler’s Dictionary of Modern English Usage</em> (4th edition by Jeremy Butterfield, 2015) and <em>Garner’s Modern English Usage</em> are the best known; <em>Merriam-Webster’s Dictionary of English Usage</em> (1989) is unusual in surveying the evidence for and against each rule.</li>
          <li><strong>Style guides</strong> decide matters of house style: <em>New Hart’s Rules</em> (Oxford University Press) for British book publishing, <em>The Chicago Manual of Style</em> in America, newspaper guides, and the GOV.UK style guide for the British government. They often disagree, and that is accepted.</li>
          <li><strong>Reference grammars</strong> (Quirk et al. 1985; Huddleston and Pullum 2002) describe the language in full.</li>
        </ul>` },
    { title: 'Standard English is a dialect without an army',
      html: `
        <p>Standard English is defined less by rules than by a community: it is the English of edited print and of educated formal speech. It has no accent of its own (it can be spoken in any accent) and it has national varieties: British, American, Australian and others differ in spelling, some vocabulary and a few points of grammar.</p>
        <div class="ex"><p lang="en">%The team are playing well. (British; American: The team is playing well.)</p><p lang="en">%I just ate. (American; British more often: I’ve just eaten.)</p></div>
        <p>When this course calls something “standard” without qualification, it means standard British English, with American differences noted.</p>` }
  ],

  contrast: `
    <p>The habits of mind differ as much as the institutions.</p>
    <ul>
      <li>A German speaker in doubt asks “Was sagt der Duden?”, and for spelling and punctuation there is an answer. For grammar the Duden itself often answers: both occur, this one is more usual in writing.</li>
      <li>An English speaker in doubt asks “What does the style guide say?”, and the honest answer often begins “it depends who you are writing for”.</li>
      <li>German dictionaries label register in fine steps (gehoben, bildungssprachlich, umgangssprachlich, salopp). English dictionaries label more coarsely (formal, informal, slang) and leave more to the reader’s judgement.</li>
      <li>German has three national standards inside one spelling system. English has several standards with separate spelling traditions.</li>
    </ul>
    <p class="contrast">After years in an English-speaking environment it is easy to bring the English tolerance back into German, where it can read as carelessness, and the German appetite for a rule into English, where it can read as pedantry. Neither is wrong in its own setting.</p>`,

  usage: `
    <p>How to settle a doubt, in order of authority:</p>
    <div class="tablewrap"><table>
      <thead><tr><th>Question</th><th>German</th><th>English</th></tr></thead>
      <tbody>
        <tr><th>Spelling</th><td>Amtliches Regelwerk; Duden Band 1</td><td>A current dictionary; for British English Oxford or Collins</td></tr>
        <tr><th>Commas and punctuation</th><td>Amtliches Regelwerk (Teil E, Zeichensetzung)</td><td>New Hart’s Rules or your house style</td></tr>
        <tr><th>Grammar</th><td>Duden Band 4 and 9; grammis (IDS)</td><td>A reference grammar; a usage guide for disputed points</td></tr>
        <tr><th>Is it actually used?</th><td>DWDS (dwds.de) with its corpora</td><td>A corpus: the British National Corpus or the News on the Web corpus (english-corpora.org)</td></tr>
      </tbody></table></div>
    <p>The last row is the one most people skip. If a construction you were taught to avoid occurs routinely in edited prose (newspapers, books from reputable publishers), it is standard, whatever a rule says.</p>`,

  pitfalls: `
    <h3>Best practice</h3>
    <ul>
      <li><strong>Decide the register first.</strong> Most “correctness” questions are really questions of register. A colleague’s email and a report for the board have different standards.</li>
      <li><strong>Be consistent within a text.</strong> If you write <em>Fotografie</em>, do not switch to <em>Photographie</em> on the next page; if you use the Oxford comma, use it throughout.</li>
      <li><strong>Prefer the unremarkable form.</strong> In formal writing the best choice is usually the one no reader will stop at, even if the alternative is defensible.</li>
    </ul>
    <h3>Pitfalls</h3>
    <ul>
      <li><strong>Hypercorrection.</strong> Avoiding a supposed error so hard that one makes a real one:
        <div class="ex"><p lang="en" class="bad">between you and I</p><p class="gl">avoiding “you and me”, wrongly remembered as always wrong; after a preposition the object form is correct: between you and me</p>
        <p lang="en" class="bad">Whom shall I say is calling?</p><p class="gl">“who” is the subject of “is calling”: Who shall I say is calling?</p></div></li>
      <li><strong>Treating a style preference as a rule</strong>, and correcting other people’s perfectly standard writing.</li>
      <li><strong>Treating a dictionary entry as approval.</strong> That a word is in the dictionary means it is used, not that it suits every text.</li>
    </ul>`,

  summary: [
    'Separate four kinds of rule: rules of the system, of the standard, codified rules (spelling, punctuation) and rules of style.',
    'Grammatical, standard and appropriate are three different judgements; register decides the third.',
    'Marks: * ungrammatical, ? questionable, % varies between speakers.',
    'German: Regelwerk for spelling and punctuation; Duden Bände 1, 4, 9; IDS and DWDS for usage. Duden “Empfehlungen” are the publisher’s choice.',
    'English: dictionaries describe, usage guides judge, style guides decide house style; corpora show actual use.',
    'Beware of hypercorrection: “between you and I” is an error made by avoiding an error.'
  ],

  cards: [
    { id: 'doubt', title: 'How to settle a doubt', tags: ['Duden', 'dictionary', 'corpus', 'DWDS', 'style guide'], html: `
      <p><strong>Spelling, commas (German):</strong> Amtliches Regelwerk, Duden Band 1.<br><strong>Grammar (German):</strong> Duden Band 4 and 9, grammis.<br><strong>English:</strong> current dictionary; usage guide (Fowler, Garner); house style (New Hart’s Rules).<br><strong>Is it used?</strong> DWDS (German), english-corpora.org (English).</p>
      <p>First decide the register; then prefer the form no reader will stop at.</p>` },
    { id: 'marks', title: 'The marks * ? %', tags: ['ungrammatical', 'notation'], html: `
      <p><strong>*</strong> ungrammatical (in this app red, ✗) · <strong>?</strong> questionable or non-standard (ochre, ?) · <strong>%</strong> varies between speakers or regions.</p>` },
    { id: 'labels', title: 'Register labels in German dictionaries', tags: ['umgangssprachlich', 'gehoben', 'register', 'Stilebene'], html: `
      <p>gehoben · bildungssprachlich · (neutral) · umgangssprachlich · salopp · derb; also landschaftlich/regional, veraltend, veraltet. <em>Umgangssprachlich</em> means “not for every text”, not “wrong”.</p>` }
  ],

  terms: [
    { en: 'grammatical / ungrammatical', de: 'grammatisch korrekt / ungrammatisch', la: '', note: 'Possible or impossible in the language; marked *.' },
    { en: 'standard / non-standard', de: 'standardsprachlich / nicht standardsprachlich', la: '' },
    { en: 'register', de: 'Register, Stilebene', la: '', note: 'Level of formality chosen for a situation.' },
    { en: 'colloquial, informal', de: 'umgangssprachlich', la: 'colloquium “conversation”' },
    { en: 'doubtful case', de: 'Zweifelsfall', la: '', note: 'Two forms both in use among competent speakers.' },
    { en: 'hypercorrection', de: 'Hyperkorrektur', la: '', note: 'An error made by over-applying a rule.' },
    { en: 'house style', de: 'Hausregeln, Hausorthographie', la: '' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: '<span lang="en">I seen it yesterday.</span> This sentence is …', options: ['grammatical in some dialects, but not standard', 'ungrammatical in every variety of English', 'standard English in informal speech', 'a matter of style only'], answer: 0, explain: 'It follows a regular pattern of several English dialects, so it is not “ungrammatical” in the linguist’s sense, but it is not standard English.' },
    { id: 'e2', type: 'mc', prompt: 'The Duden recommends <em>aufwendig</em> where the Regelwerk allows <em>aufwendig</em> and <em>aufwändig</em>. Writing <em>aufwändig</em> is …', options: ['correct: the recommendation is the publisher’s choice', 'wrong since the 2024 Regelwerk', 'correct only in Austria', 'correct only in informal writing'], answer: 0, explain: 'Where the Regelwerk allows variants, both are correct; the yellow Duden “Empfehlung” is a house decision.' },
    { id: 'e3', type: 'mc', prompt: 'Which is the correct form?', options: ['Between you and me, it was a mistake.', 'Between you and I, it was a mistake.'], answer: 0, keepOrder: true, explain: '<em>between</em> is a preposition and takes the object form: <em>me</em>. “Between you and I” is a classic hypercorrection.' },
    { id: 'e4', type: 'match', prompt: 'Match the German register label to an example.', pairs: [['gehoben', 'Antlitz'], ['umgangssprachlich', 'kriegen'], ['veraltet', 'Fräulein (als Anrede)'], ['landschaftlich', 'Sonnabend']], explain: 'The labels describe where a word is at home, not whether it is “correct”.' },
    { id: 'e5', type: 'mc', prompt: 'You want to know whether <em>dank dem</em> or <em>dank des</em> is more common in edited German today. Where do you look?', options: ['In a corpus, for example via DWDS', 'In the Amtliches Regelwerk', 'In the Duden spelling dictionary only', 'Nowhere: one of them is wrong'], answer: 0, explain: 'The Regelwerk covers spelling and punctuation, not case government. Frequency in edited texts is shown by a corpus; Duden Band 9 also discusses the case.' },
    { id: 'e6', type: 'mc', prompt: '<span lang="en">Whom shall I say is calling?</span>', options: ['Wrong: “who” is the subject of “is calling”', 'Correct and formal', 'Correct in British English only', 'Wrong: it should be “whom is calling”'], answer: 0, explain: 'The pronoun is the subject of <em>is calling</em>; <em>shall I say</em> is inserted. Hence <em>Who shall I say is calling?</em>' }
  ]
});
