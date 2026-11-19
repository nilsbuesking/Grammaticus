/*
 * Unit 0, lecture 4: how a sentence is built.
 * Content file only. German section in German, the rest in English. Checks: CONTENT-CHECKS.md.
 */
Grammaticus.addLecture({
  id: '0.4', unit: 0, number: 4,
  title: 'How a sentence is built',
  subtitle: 'Constituents, the verb and its partners, main and subordinate clauses',
  minutes: 30,

  intro: `
    <p>A sentence is not a string of words but a structure of groups, each with a job. This lecture introduces the groups (constituents), the tests for finding them, the jobs they do, and the most important idea in modern grammar: that the verb decides how many partners a sentence needs. Everything in the units on word order (4) and punctuation (5) builds on it.</p>`,

  concept: [
    { title: 'Constituents',
      html: `
        <p>Words in a sentence form groups that belong together and behave as units. These groups are <strong>constituents</strong> (<em>Satzglieder</em>, when they are direct parts of the clause). A group is usually built around a <strong>head</strong>, which gives it its name:</p>
        <div class="ex"><p lang="en">[the old man from Leeds] <span class="gl">noun phrase, head: man</span></p><p lang="en">[very proud of his garden] <span class="gl">adjective phrase, head: proud</span></p><p lang="en">[in the morning] <span class="gl">prepositional phrase, head: in</span></p></div>
        <p>Inside a noun phrase, the words around the head are <strong>attributes</strong> or modifiers (<em>old</em>, <em>from Leeds</em>). They are not constituents of the clause on their own; they travel with their head.</p>` },
    { title: 'The verb at the centre: valency',
      html: `
        <p>The verb determines how many partners a clause needs and of what kind. The French linguist Lucien Tesnière (<em>Éléments de syntaxe structurale</em>, published 1959) compared the verb to an atom with a fixed number of bonds: its <strong>valency</strong>.</p>
        <div class="ex">
          <p lang="de">Das Kind schläft. <span class="gl">schlafen: 1 Partner (Subjekt)</span></p>
          <p lang="de">Das Kind liest ein Buch. <span class="gl">lesen: 2 (Subjekt, Akkusativobjekt)</span></p>
          <p lang="de">Das Kind gibt dem Hund einen Knochen. <span class="gl">geben: 3 (Subjekt, Dativ-, Akkusativobjekt)</span></p>
        </div>
        <p>Partners required by the verb are <strong>complements</strong> (<em>Ergänzungen</em>); everything else (time, place, manner, reason) is an optional <strong>adjunct</strong> (<em>Angabe</em>). Valency explains why <em>Er gibt</em> feels incomplete and <em>Er schläft</em> does not, and why <em>warten</em> needs <em>auf</em> and <em>wait</em> needs <em>for</em>.</p>` },
    { title: 'Clauses',
      html: `
        <p>A <strong>clause</strong> is a structure built around one verb (more precisely, one finite verb or verb group). A sentence may contain several:</p>
        <ul>
          <li>a <strong>main clause</strong> (<em>Hauptsatz</em>) can stand alone;</li>
          <li>a <strong>subordinate clause</strong> (<em>Nebensatz</em>) depends on another clause and usually begins with a subordinating conjunction (<em>dass, weil, that, because</em>) or a relative pronoun (<em>der, who</em>);</li>
          <li>a <strong>finite</strong> verb shows person and tense (<em>geht, went</em>); <strong>non-finite</strong> forms do not (<em>gehen, gegangen, to go, going</em>).</li>
        </ul>
        <p>In German, the type of clause determines where the finite verb stands. This is the key to German word order and to the German comma.</p>` }
  ],

  german: [
    { title: 'Die Satzglieder',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th>Satzglied · Frage</th><th>Beispiel</th></tr></thead>
          <tbody>
            <tr><td><strong>Subjekt</strong><br><span class="tnote">Wer oder was?</span></td><td><u class="k">Der Kunde</u> ruft an.</td></tr>
            <tr><td><strong>Prädikat</strong><br><span class="tnote">Was tut / geschieht?</span></td><td>Der Kunde <u class="k">hat angerufen</u>.</td></tr>
            <tr><td><strong>Akkusativobjekt</strong><br><span class="tnote">Wen oder was?</span></td><td>Sie liest <u class="k">den Bericht</u>.</td></tr>
            <tr><td><strong>Dativobjekt</strong><br><span class="tnote">Wem?</span></td><td>Sie hilft <u class="k">dem Kollegen</u>.</td></tr>
            <tr><td><strong>Genitivobjekt</strong><br><span class="tnote">Wessen?</span></td><td>Man gedachte <u class="k">der Toten</u>.</td></tr>
            <tr><td><strong>Präpositionalobjekt</strong><br><span class="tnote">Worauf? Woran? …</span></td><td>Wir warten <u class="k">auf den Zug</u>.</td></tr>
            <tr><td><strong>Adverbiale</strong><br><span class="tnote">Wann? Wo? Wie? Warum?</span></td><td>Sie kommt <u class="k">am Montag</u>.</td></tr>
            <tr><td><strong>Prädikativ</strong><br><span class="tnote">Wer/was ist jemand? Wie ist etwas?</span></td><td>Er ist <u class="k">Arzt</u>. Sie wird <u class="k">müde</u>.</td></tr>
          </tbody></table></div>
        <p>Das Genitivobjekt ist selten geworden und klingt meist gehoben (<em>jemanden des Diebstahls anklagen, sich eines Besseren besinnen</em>). Das Präpositionalobjekt unterscheidet sich vom Adverbiale dadurch, dass das Verb die Präposition festlegt: <em>warten auf</em>, <em>denken an</em>, <em>sich freuen über/auf</em>.</p>` },
    { title: 'Die Proben',
      html: `
        <p>Mit einfachen Proben lassen sich Satzglieder finden:</p>
        <ul>
          <li><strong>Umstellprobe (Verschiebeprobe):</strong> Was sich zusammen an den Satzanfang stellen lässt, ist ein Satzglied.
            <div class="ex"><p lang="de">Der neue Kollege | hat | gestern | im Büro | einen Fehler | gemacht.</p><p lang="de">Gestern hat der neue Kollege im Büro einen Fehler gemacht.</p><p lang="de">Im Büro hat der neue Kollege gestern einen Fehler gemacht.</p><p lang="de">Einen Fehler hat der neue Kollege gestern im Büro gemacht.</p></div></li>
          <li><strong>Ersatzprobe:</strong> Ein Satzglied lässt sich durch ein Pronomen oder ein Fragewort ersetzen: <em>der neue Kollege → er; im Büro → dort</em>.</li>
          <li><strong>Weglassprobe:</strong> Was man weglassen kann, ohne dass der Satz ungrammatisch wird, ist eine Angabe: <em>Der Kollege hat einen Fehler gemacht</em> (gestern, im Büro weggelassen).</li>
          <li><strong>Frageprobe:</strong> Wer? Wen? Wem? Wann? … wie in der Tabelle.</li>
        </ul>
        <p>Die Umstellprobe funktioniert im Deutschen besonders gut, weil vor dem finiten Verb im Hauptsatz genau ein Satzglied steht. Das ist die Verbzweitstellung.</p>` },
    { title: 'Satzarten und Verbstellung',
      html: `
        <p>Die Stellung des finiten Verbs zeigt die Art des Satzes an:</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Stellung</th><th>Satzart</th><th>Beispiel</th></tr></thead>
          <tbody>
            <tr><td>Verbzweit (V2)</td><td>Aussagesatz, W-Frage</td><td>Morgen <u class="k">kommt</u> sie. Wann <u class="k">kommt</u> sie?</td></tr>
            <tr><td>Verberst (V1)</td><td>Ja/Nein-Frage, Aufforderung</td><td><u class="k">Kommt</u> sie morgen? <u class="k">Komm</u> morgen!</td></tr>
            <tr><td>Verbletzt (VL)</td><td>Nebensatz</td><td>…, weil sie morgen <u class="k">kommt</u>.</td></tr>
          </tbody></table></div>
        <p>Im Hauptsatz bilden das finite Verb und die übrigen Prädikatsteile eine <strong>Satzklammer</strong>: <em>Sie <u class="k">hat</u> den Bericht gestern <u class="k">geschrieben</u></em>. Die Felder davor, dazwischen und danach (Vorfeld, Mittelfeld, Nachfeld) sind Thema der Einheit 4.</p>` },
    { title: 'Haupt- und Nebensatz',
      html: `
        <p>Ein Nebensatz ist Teil eines anderen Satzes und übernimmt dort oft die Rolle eines Satzglieds:</p>
        <div class="ex"><p lang="de"><u class="k">Dass er kommt</u>, freut mich. <span class="gl">Subjektsatz (Was freut mich?)</span></p><p lang="de">Ich weiß, <u class="k">dass er kommt</u>. <span class="gl">Objektsatz (Was weiß ich?)</span></p><p lang="de">Ich komme, <u class="k">wenn ich Zeit habe</u>. <span class="gl">Adverbialsatz (Wann?)</span></p><p lang="de">Der Bericht, <u class="k">den du geschrieben hast</u>, ist gut. <span class="gl">Relativsatz als Attribut</span></p></div>
        <p>Im Deutschen werden Nebensätze ausnahmslos durch Komma abgetrennt. Diese Regel folgt direkt aus dem Satzbau und ist die Grundlage der deutschen Zeichensetzung (Einheit 5).</p>` }
  ],

  english: [
    { title: 'Clause elements',
      html: `
        <p>The <em>Comprehensive Grammar</em> of Quirk and colleagues (1985) describes English clauses with five elements: <strong>S</strong>ubject, <strong>V</strong>erb, <strong>O</strong>bject, <strong>C</strong>omplement and <strong>A</strong>dverbial. Every English clause follows one of seven basic patterns:</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Pattern</th><th>Example</th></tr></thead>
          <tbody>
            <tr><td>SV</td><td>The meeting / started.</td></tr>
            <tr><td>SVO</td><td>She / wrote / the report.</td></tr>
            <tr><td>SVC</td><td>The report / is / excellent.</td></tr>
            <tr><td>SVA</td><td>The office / is / in Holborn.</td></tr>
            <tr><td>SVOO</td><td>She / gave / him / the file.</td></tr>
            <tr><td>SVOC</td><td>They / made / her / director.</td></tr>
            <tr><td>SVOA</td><td>He / put / the file / on the desk.</td></tr>
          </tbody></table></div>
        <p>A <strong>complement</strong> describes the subject or object (<em>is excellent</em>, <em>made her director</em>); it corresponds to the German <em>Prädikativ</em>.</p>` },
    { title: 'Order does the work of case',
      html: `
        <p>Because English nouns have no case endings, the position in the clause shows who does what to whom:</p>
        <div class="ex"><p lang="en">The man bites the dog.</p><p lang="en">The dog bites the man.</p></div>
        <p>Swap the positions and the meaning changes. Movement tests therefore work less well in English; instead one uses <strong>substitution</strong> (replace by a pronoun: <em>the old man from Leeds → he</em>), <strong>questions</strong> (<em>Who wrote the report?</em>) and the <strong>cleft test</strong>: whatever can stand in the slot of <em>It was … that …</em> is a constituent.</p>
        <div class="ex"><p lang="en">It was <u class="k">in the morning</u> that she wrote the report.</p><p lang="en" class="bad">It was in the that she wrote the report.</p></div>` },
    { title: 'Direct and indirect objects',
      html: `
        <p>With verbs of giving, English has two orders:</p>
        <div class="ex"><p lang="en">She gave <u class="k">him</u> the file. <span class="gl">indirect object first</span></p><p lang="en">She gave the file <u class="k">to him</u>. <span class="gl">prepositional variant</span></p></div>
        <p>The indirect object (<em>him</em>) corresponds to the German Dativobjekt, but it is marked only by its position before the direct object, or by <em>to</em>.</p>` },
    { title: 'Main and subordinate clauses',
      html: `
        <p>English subordinate clauses keep main-clause word order: <em>because she <u class="k">is</u> coming tomorrow</em>, not “because she tomorrow coming is”. They are introduced by subordinators (<em>that, because, if, when, although</em>), relative words (<em>who, which, that</em>) or nothing at all:</p>
        <div class="ex"><p lang="en">I know (that) she is coming.</p><p lang="en">The report (that) you wrote is good.</p></div>
        <p>This omission of <em>that</em> is impossible in German: <em>dass</em> and the relative pronoun cannot be dropped.</p>` }
  ],

  contrast: `
    <ul>
      <li><strong>Case against position.</strong> German marks functions by case endings, so the order is freer: <em>Den Hund beißt der Mann</em> still means that the man bites the dog. English marks functions by position, so the order is fixed.</li>
      <li><strong>Verb position.</strong> German puts the finite verb second in main clauses and last in subordinate clauses. English keeps subject–verb order in both.
        <div class="ex"><p lang="de">Gestern <u class="k">hat</u> sie angerufen, weil sie Zeit <u class="k">hatte</u>.</p><p lang="en">Yesterday she <u class="k">called</u> because she <u class="k">had</u> time.</p></div></li>
      <li><strong>Indirect objects and the passive.</strong> English can make the indirect object the subject of a passive; German cannot, and uses the <em>bekommen</em>-passive instead.
        <div class="ex"><p lang="en">He was given a book.</p><p lang="de">Ihm wurde ein Buch geschenkt. / Er bekam ein Buch geschenkt.</p><p lang="de" class="bad">Er wurde ein Buch geschenkt.</p></div></li>
      <li><strong>Prepositional complements.</strong> Both languages fix the preposition with the verb, but rarely the same one: <em>warten auf / wait for</em>, <em>denken an / think of</em>, <em>sich interessieren für / be interested in</em>, <em>abhängen von / depend on</em>.</li>
      <li><strong>Optional <em>that</em>.</strong> English often omits <em>that</em> and relative pronouns; German never omits <em>dass</em> or <em>der/die/das</em>.</li>
    </ul>
    <p class="contrast">A common sign of English influence on German is subject–verb order after a fronted adverbial: <span class="bad">Gestern ich habe ihn gesehen</span>. It is rare in fluent speakers’ writing but appears in quick messages.</p>`,

  latin: `
    <p>Latin marks functions entirely by case, so its word order is freer still than German:</p>
    <div class="ex"><p lang="la">Canis virum mordet. · Virum canis mordet. · Mordet canis virum.</p><p class="gl">all three: the dog bites the man; the order adds emphasis, not meaning</p></div>
    <p class="latin">The terms <em>subiectum</em> (“what is placed underneath”) and <em>praedicatum</em> (“what is declared”) come from medieval logic, where a proposition said something (the predicate) about something (the subject).</p>`,

  pitfalls: `
    <h3>Best practice</h3>
    <ul>
      <li><strong>Use the movement test before a German comma.</strong> If you are unsure whether something is a clause or a phrase, ask whether it has its own finite verb. If it does, it is a clause and is set off by commas.</li>
      <li><strong>Learn verbs with their partners.</strong> Learn <em>warten auf + Akk.</em>, <em>helfen + Dat.</em>, <em>depend on</em>, not the bare verb.</li>
    </ul>
    <h3>Pitfalls</h3>
    <ul>
      <li><strong>The dangling participle (English).</strong> The understood subject of an <em>-ing</em> clause is taken to be the subject of the main clause:
        <div class="ex"><p lang="en" class="bad">Walking to the station, the rain started.</p><p class="gl">the rain was not walking</p><p lang="en">Walking to the station, I was caught in the rain.</p><p lang="en">As I was walking to the station, it started to rain.</p></div></li>
      <li><strong>Losing the Dativobjekt (German).</strong> After years of English, the dative can slip in fixed verbs: <span class="bad">Ich habe ihn geholfen</span> instead of <em>Ich habe ihm geholfen</em>. <em>helfen, danken, folgen, gratulieren, vertrauen</em> take the dative.</li>
      <li><strong>Prepositions borrowed across.</strong> <span class="odd">abhängig auf</span> (from <em>dependent on</em>) for <em>abhängig von</em>; <span class="odd">interested for</span> (from <em>interessiert an</em>) for <em>interested in</em>.</li>
    </ul>`,

  summary: [
    'Sentences consist of constituents (Satzglieder) built around heads; attributes travel with their head.',
    'The verb’s valency decides its required partners (complements); everything else is an optional adjunct.',
    'German finds constituents by moving them before the finite verb (Umstellprobe); English uses substitution, questions and the cleft test.',
    'German: V2 in main clauses, V1 in yes/no questions and commands, verb-final in subordinate clauses. English: subject–verb order in both.',
    'German marks functions by case, English by position, Latin by case with free order.',
    'German subordinate clauses are always set off by commas; English often omits “that”, German never omits “dass”.'
  ],

  cards: [
    { id: 'satzglieder', title: 'Satzglieder and clause elements', tags: ['Subjekt', 'Objekt', 'Adverbiale', 'Prädikativ', 'complement'], html: `
      <div class="tablewrap"><table><thead><tr><th>Deutsch</th><th>English</th></tr></thead><tbody>
      <tr><td>Subjekt</td><td>subject</td></tr><tr><td>Prädikat</td><td>verb (predicator)</td></tr><tr><td>Akkusativobjekt</td><td>direct object</td></tr><tr><td>Dativobjekt</td><td>indirect object</td></tr><tr><td>Präpositionalobjekt</td><td>prepositional object</td></tr><tr><td>Adverbiale</td><td>adverbial</td></tr><tr><td>Prädikativ</td><td>(subject/object) complement</td></tr></tbody></table></div>
      <p>Attributes (old, from Leeds) are not clause elements; they belong to a noun phrase.</p>` },
    { id: 'verbstellung', title: 'German verb positions', tags: ['V2', 'Verbzweit', 'Verbletzt', 'word order', 'Satzklammer'], html: `
      <p><strong>V2</strong> statements and wh-questions: <em>Morgen kommt sie.</em><br><strong>V1</strong> yes/no questions, commands: <em>Kommt sie? Komm!</em><br><strong>Verb-final</strong> subordinate clauses: <em>…, weil sie kommt.</em></p>
      <p>Exactly one constituent stands before the finite verb in a main clause.</p>` },
    { id: 'tests', title: 'Finding constituents', tags: ['Umstellprobe', 'Ersatzprobe', 'cleft'], html: `
      <p><strong>German:</strong> Umstellprobe (can it stand alone before the finite verb?), Ersatzprobe (pronoun), Weglassprobe (optional = adjunct), Frageprobe.<br><strong>English:</strong> substitution (pronoun), question, cleft: <em>It was … that …</em></p>` }
  ],

  terms: [
    { en: 'constituent', de: 'Konstituente; Satzglied', la: 'constituens' },
    { en: 'phrase', de: 'Phrase, Wortgruppe', la: '' },
    { en: 'head', de: 'Kopf, Kern', la: '' },
    { en: 'attribute, modifier', de: 'Attribut', la: 'attributum “what is assigned”' },
    { en: 'subject', de: 'Subjekt', la: 'subiectum' },
    { en: 'predicate', de: 'Prädikat', la: 'praedicatum' },
    { en: 'direct object', de: 'Akkusativobjekt', la: 'obiectum' },
    { en: 'indirect object', de: 'Dativobjekt', la: '' },
    { en: 'prepositional object', de: 'Präpositionalobjekt', la: '' },
    { en: 'adverbial', de: 'Adverbiale, adverbiale Bestimmung', la: '' },
    { en: 'complement (subject/object)', de: 'Prädikativ', la: '' },
    { en: 'valency', de: 'Valenz, Wertigkeit', la: 'valentia “strength”', note: 'Tesnière 1959.' },
    { en: 'complement (required) / adjunct (optional)', de: 'Ergänzung / Angabe', la: '' },
    { en: 'main clause', de: 'Hauptsatz', la: '' },
    { en: 'subordinate clause', de: 'Nebensatz', la: '' },
    { en: 'finite / non-finite', de: 'finit / infinit', la: 'finitus “limited”' },
    { en: 'verb-second (V2)', de: 'Verbzweitstellung', la: '' },
    { en: 'verb bracket', de: 'Satzklammer, Verbklammer', la: '' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', lang: 'de', prompt: '<span lang="de">Den Hund beißt der Mann.</span> Wer beißt?', options: ['der Mann', 'der Hund'], answer: 0, keepOrder: true, explain: '<em>der Mann</em> is nominative, so the subject; <em>den Hund</em> is accusative. German case allows the object to come first.' },
    { id: 'e2', type: 'order', lang: 'de', prompt: 'Put the German sentence in order, starting with <em>Gestern</em>.', tokens: ['Gestern', 'hat', 'der', 'Kunde', 'angerufen.'], explain: 'Exactly one constituent before the finite verb (V2): <em>Gestern</em>, then <em>hat</em>, then the subject.' },
    { id: 'e3', type: 'match', prompt: 'Match the sentence to its clause pattern.', pairs: [['The meeting started.', 'SV'], ['She wrote the report.', 'SVO'], ['The report is excellent.', 'SVC'], ['She gave him the file.', 'SVOO'], ['He put the file on the desk.', 'SVOA']], explain: 'S subject, V verb, O object, C complement, A adverbial (Quirk et al.).' },
    { id: 'e4', type: 'mc', lang: 'de', prompt: 'In <span lang="de">Wir warten auf den Zug</span>, <em>auf den Zug</em> is …', options: ['a prepositional object: <em>warten</em> requires <em>auf</em>', 'an adverbial of place', 'an accusative object', 'an attribute of <em>wir</em>'], answer: 0, explain: 'The verb fixes the preposition (<em>warten auf</em>); you cannot replace it by <em>dort</em>, as you could an adverbial of place.' },
    { id: 'e5', type: 'mc', prompt: 'Which sentence has a dangling participle?', options: ['Walking to the station, the rain started.', 'Walking to the station, I was caught in the rain.', 'As I walked to the station, it began to rain.'], answer: 0, keepOrder: true, explain: 'The implied subject of <em>walking</em> is the subject of the main clause, here <em>the rain</em>.' },
    { id: 'e6', type: 'gap', lang: 'de', prompt: '<span lang="de">Ich habe ___ gestern geholfen.</span> (er)', answers: ['ihm'], cs: true, explain: '<em>helfen</em> takes the dative: <em>ihm</em>.' },
    { id: 'e7', type: 'comma', lang: 'de', prompt: 'Set the commas the German rules require.', words: ['Ich', 'weiß', 'dass', 'er', 'morgen', 'kommt', 'weil', 'er', 'Zeit', 'hat.'], commas: [1, 5], explain: 'Each subordinate clause (<em>dass …</em>, <em>weil …</em>) is set off by a comma. Its finite verb stands last.' },
    { id: 'e8', type: 'mc', prompt: 'Which is <em>not</em> possible?', options: ['<span lang="de">Er wurde ein Buch geschenkt.</span>', '<span lang="de">Ihm wurde ein Buch geschenkt.</span>', '<span lang="de">Er bekam ein Buch geschenkt.</span>', '<span lang="en">He was given a book.</span>'], answer: 0, keepOrder: true, explain: 'German cannot make the dative object the subject of a werden-passive; English can (<em>He was given</em>). German uses the bekommen-passive.' }
  ]
});
