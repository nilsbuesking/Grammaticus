/*
 * Unit 3, lecture 3: conjunctions. Content file only. German section in German.
 */
Grammaticus.addLecture({
  id: '3.3', unit: 3, number: 3,
  title: 'Conjunctions',
  subtitle: 'weil, denn and da; and, but and however; “weil ich hab keine Zeit” and starting a sentence with And',
  minutes: 30,

  intro: `
    <p>Conjunctions join words, phrases and clauses. In German the choice of conjunction decides the position of the verb, so it is a matter of syntax as much as meaning: <em>weil</em> sends the verb to the end, <em>denn</em> does not. English has no such effect, but it draws a line German writers do not always notice: <em>however</em> and <em>therefore</em> are not conjunctions, and joining two sentences with them and a comma is an error. This lecture covers both, and two famous controversies: <em>weil</em> with the verb second, and sentences beginning with <em>And</em> or <em>But</em>.</p>`,

  concept: [
    { title: 'Coordinating and subordinating',
      html: `
        <ul>
          <li><strong>Coordinating conjunctions</strong> join elements of equal rank: <em>und, aber, oder, denn, sondern; and, but, or, for, nor, so, yet</em>.</li>
          <li><strong>Subordinating conjunctions</strong> (subjunctions) introduce a dependent clause: <em>dass, weil, wenn, obwohl, während; that, because, if, although, while</em>.</li>
          <li><strong>Conjunctive adverbs</strong> link ideas but are grammatically adverbs: <em>deshalb, trotzdem, außerdem; however, therefore, moreover</em>. In German they occupy the Vorfeld and trigger inversion; in English they cannot join two clauses without a semicolon, full stop or conjunction.</li>
        </ul>` }
  ],

  german: [
    { title: 'Konjunktion und Verbstellung',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th>Typ</th><th>Verbstellung · Beispiel</th></tr></thead>
          <tbody>
            <tr><td>nebenordnend: und, aber, oder, denn, sondern</td><td>keine Wirkung (Position 0)<span class="tnote">…, denn ich habe keine Zeit.</span></td></tr>
            <tr><td>unterordnend: dass, weil, da, wenn, obwohl, als, nachdem, bevor, damit, sodass</td><td>Verb am Ende<span class="tnote">…, weil ich keine Zeit habe.</span></td></tr>
            <tr><td>Konjunktionaladverb: deshalb, deswegen, trotzdem, dennoch, außerdem, also, sonst</td><td>Vorfeld, Verb an zweiter Stelle<span class="tnote">Deshalb habe ich keine Zeit.</span></td></tr>
          </tbody></table></div>` },
    { title: 'weil, da, denn',
      html: `
        <ul>
          <li><strong>weil</strong>: der häufigste Grund, neue Information, beantwortet <em>warum?</em>: <em>Ich komme nicht, weil ich krank bin.</em></li>
          <li><strong>da</strong>: bekannter oder als bekannt vorausgesetzter Grund, meist vorangestellt, eher schriftlich: <em>Da die Zahlen vorliegen, können wir entscheiden.</em></li>
          <li><strong>denn</strong>: nachgestellte Begründung als eigener Hauptsatz, eher schriftlich und gehoben; im Gespräch selten geworden.</li>
        </ul>` },
    { title: 'weil mit Verbzweitstellung',
      html: `
        <p>In der gesprochenen Sprache steht nach <em>weil</em> häufig das Verb an zweiter Stelle:</p>
        <div class="ex"><p lang="de" class="odd">Ich komme nicht, weil ich bin krank.</p><p lang="de" class="odd">Gibst du mir mal deinen Stift, weil ich hab meinen vergessen.</p></div>
        <p>Die Konstruktion gilt im geschriebenen Standard als falsch, wird aber von der Forschung als Merkmal gesprochener Grammatik beschrieben, nicht als Fehler. Sie ist keine neue Erscheinung: Korpusbelege reichen bis in die 1950er Jahre, und dialektale Belege sind älter. Funktional begründet <em>weil</em> mit Verbzweitstellung oft nicht den Sachverhalt, sondern die Äußerung selbst (<em>Ich frage dich, weil …</em>), und nach einer kleinen Pause folgt ein eigenständiger Satz. Ähnliches gibt es bei <em>obwohl</em>, <em>wobei</em> und <em>während</em>.</p>
        <p class="src">Gesprochene-Sprache-Forschung (u. a. Wegener 1993; Freywald 2010); Korpusbelege aus FOLK und Zwirner-Korpus.</p>` },
    { title: 'Weitere Paare',
      html: `
        <ul>
          <li><strong>wenn / als / ob</strong>: <em>als</em> für ein einmaliges Ereignis in der Vergangenheit (<em>Als ich ankam, …</em>); <em>wenn</em> für Wiederholtes oder Zukünftiges und Bedingungen; <em>ob</em> für indirekte Ja/Nein-Fragen (<em>Ich weiß nicht, ob er kommt</em>; nicht <span class="bad">wenn er kommt</span>).</li>
          <li><strong>aber / sondern</strong>: <em>sondern</em> nach Verneinung, wenn das Erste ersetzt wird: <em>nicht heute, sondern morgen</em>; <em>aber</em> für Einschränkung: <em>teuer, aber gut</em>.</li>
          <li><strong>damit / sodass</strong>: Zweck gegen Folge.</li>
          <li><strong>während</strong>: zeitlich (gleichzeitig) und adversativ (wohingegen).</li>
        </ul>` }
  ],

  english: [
    { title: 'Coordinators and subordinators',
      html: `
        <p>The coordinators are traditionally remembered as FANBOYS: <em>for, and, nor, but, or, yet, so</em>. Subordinators include <em>because, as, since, although, though, while, whereas, if, unless, when, until, so that, in case</em>. They do not affect word order.</p>
        <ul>
          <li><strong>because / as / since</strong>: <em>because</em> for new, important reasons; <em>as</em> and <em>since</em> for known ones, mostly at the start: <em>As the figures are in, we can decide.</em></li>
          <li><strong>while / whereas</strong>: contrast: <em>Sales rose, while/whereas costs fell.</em> British <em>whilst</em> is formal and old-fashioned.</li>
          <li><strong>if / whether</strong>: indirect questions take either (<em>I don’t know if/whether he’s coming</em>); after prepositions and before <em>or not</em>, only <em>whether</em>.</li>
          <li><strong>like</strong> as a conjunction (<em>like I said</em>) is informal; formal: <em>as I said</em>.</li>
        </ul>` },
    { title: 'however and therefore are not conjunctions',
      html: `
        <p>Conjunctive adverbs (<em>however, therefore, moreover, nevertheless, consequently, thus</em>) cannot join two independent clauses with a comma. That error is the <strong>comma splice</strong>:</p>
        <div class="ex"><p lang="en" class="bad">Sales rose, however costs rose faster.</p><p lang="en">Sales rose; however, costs rose faster.</p><p lang="en">Sales rose. However, costs rose faster.</p><p lang="en">Sales rose, but costs rose faster.</p></div>
        <p>The German model <em>Der Umsatz stieg, allerdings stiegen die Kosten schneller</em> is correct German, which is why the English error is so common among German writers. Unit 5 returns to it.</p>` },
    { title: 'Starting with And or But',
      html: `
        <p>Many people were taught never to begin a sentence with <em>And</em> or <em>But</em>. There is no such rule in English grammar, and there never was one in the reference grammars; good writers have always done it, from the King James Bible onwards, and usage guides treat the prohibition as a superstition. It is a schoolroom habit, probably meant to stop beginners writing fragments.</p>
        <div class="ex"><p lang="en">The figures are encouraging. But the risks remain.</p></div>
        <p>In formal writing, use it deliberately and not too often.</p>` }
  ],

  contrast: `
    <ul>
      <li><strong>Verb position</strong>: <em>weil ich keine Zeit habe = because I don’t have time</em>; English never moves the verb.</li>
      <li><strong>Comma splice</strong>: German allows two main clauses joined by a comma (<em>…, deshalb …</em>); English does not (<em>…; therefore …</em>).</li>
      <li><strong>als/wenn → when</strong>: English uses <em>when</em> for both; <em>ob → whether/if</em>.</li>
      <li><strong>sondern → but</strong> (<em>not today but tomorrow</em>) or <em>rather</em>.</li>
      <li><strong>also</strong>: German <em>also</em> = <em>so/therefore</em>; English <em>also</em> = <em>auch</em>.</li>
      <li><strong>bis → until / by</strong> (lecture 2.6).</li>
    </ul>`,

  usage: `
    <ul>
      <li><strong><em>weil</em> + V2</strong>: normal in speech across the German-speaking area, recorded in spoken corpora for decades; in writing it appears only in texts close to speech. It is criticised in schools and by language guardians; linguists regard it as a feature of spoken grammar with its own function.</li>
      <li><strong><em>denn</em></strong> has become rare in speech, where <em>weil</em> (often with V2) has taken over; in writing it is still common.</li>
      <li><strong><em>And/But</em> at the start</strong>: accepted by all major usage guides; avoided by some house styles in very formal documents.</li>
      <li><strong><em>trotzdem</em> as a subordinator</strong> (<em>trotzdem er krank war</em>) is old and regional; standard: <em>obwohl</em>.</li>
    </ul>`,

  pitfalls: `
    <ul>
      <li><span class="bad">The results were good, therefore we expanded.</span> → <em>The results were good, so we expanded. / …; therefore, we expanded.</em></li>
      <li><span class="bad">I don’t know, if he comes.</span> → no comma: <em>I don’t know if/whether he is coming.</em> (German puts a comma: <em>Ich weiß nicht, ob er kommt.</em>)</li>
      <li><span class="bad">When I arrived yesterday, wenn …</span>: German <em>als</em> for a single past event: <em>Als ich gestern ankam, …</em></li>
      <li>German: <span class="bad">Ich weiß nicht, wenn er kommt.</span> → <em>ob er kommt</em>.</li>
      <li>German: <span class="odd">Ich bleibe zu Hause, weil ich bin müde.</span> in writing → <em>weil ich müde bin</em>.</li>
    </ul>`,

  latin: `
    <p>Latin subordinating conjunctions often take the subjunctive (<em>cum</em> + subjunctive “since, although”, <em>ut</em> “so that”), so in Latin the conjunction influences the mood as German conjunctions influence the word order. Many English and German conjunction pairs (<em>because, weil</em>) are native, but the grammatical terms are Latin: <em>coniunctio</em> “joining”, <em>subiunctio</em> “subjoining”.</p>`,

  summary: [
    'Coordinating (und, aber, denn; and, but) vs subordinating (weil, dass, obwohl; because, that, although) vs conjunctive adverbs (deshalb, trotzdem; however, therefore).',
    'German: subordinators send the verb to the end; conjunctive adverbs take the Vorfeld and invert; coordinators have no effect.',
    'weil (new reason), da (known reason), denn (main clause, written); weil + V2 is spoken grammar, attested for decades, not accepted in writing.',
    'English however/therefore cannot join clauses with a comma: use a semicolon, full stop or conjunction (comma splice).',
    'Starting a sentence with And or But is not an error; the “rule” is a schoolroom habit.',
    'als (single past event) vs wenn; ob = whether/if; sondern after negation.'
  ],

  cards: [
    { id: 'konj-verb', title: 'German conjunctions and verb position', tags: ['weil', 'denn', 'deshalb', 'Verbstellung'], html: `
      <p><strong>Position 0</strong> (no effect): und, aber, oder, denn, sondern.<br><strong>Verb last</strong>: dass, weil, da, wenn, als, ob, obwohl, nachdem, bevor, damit, sodass, während.<br><strong>Vorfeld + inversion</strong>: deshalb, trotzdem, dennoch, außerdem, also, sonst.</p>` },
    { id: 'comma-splice', title: 'Comma splice', tags: ['however', 'therefore', 'comma splice', 'Komma'], html: `
      <p>Not: <em>Sales rose, however costs rose faster.</em><br>Use: <em>Sales rose; however, costs …</em> / <em>Sales rose. However, …</em> / <em>Sales rose, but …</em></p>` },
    { id: 'als-wenn-ob', title: 'als / wenn / ob', tags: ['als', 'wenn', 'ob', 'when', 'whether'], html: `
      <p><strong>als</strong>: single event in the past · <strong>wenn</strong>: repeated, future, condition · <strong>ob</strong>: indirect yes/no question (whether/if).</p>` }
  ],

  terms: [
    { en: 'coordinating conjunction', de: 'nebenordnende Konjunktion', la: 'coniunctio' },
    { en: 'subordinating conjunction (subordinator)', de: 'unterordnende Konjunktion, Subjunktion', la: 'subiunctio' },
    { en: 'conjunctive adverb', de: 'Konjunktionaladverb', la: '' },
    { en: 'comma splice', de: '(im Englischen fehlerhafte Kommaverbindung)', la: '' },
    { en: 'causal / concessive / final / consecutive clause', de: 'Kausal- / Konzessiv- / Final- / Konsekutivsatz', la: 'causa, concedere, finis, consequi' }
  ],

  exercises: [
    { id: 'e1', type: 'order', lang: 'de', prompt: 'Complete in standard order: <span lang="de">Ich komme nicht, weil …</span>', tokens: ['weil', 'ich', 'keine', 'Zeit', 'habe.'], explain: 'After <em>weil</em> the finite verb goes last in written German.' },
    { id: 'e2', type: 'mc', prompt: 'Which is correct English?', options: ['Sales rose; however, costs rose faster.', 'Sales rose, however costs rose faster.'], answer: 0, keepOrder: true, explain: '<em>however</em> is an adverb; a comma between two main clauses with it is a comma splice.' },
    { id: 'e3', type: 'mc', lang: 'de', prompt: '<span lang="de">___ ich gestern ankam, regnete es.</span>', options: ['Als', 'Wenn', 'Ob'], answer: 0, keepOrder: true, explain: 'Single event in the past: <em>als</em>.' },
    { id: 'e4', type: 'mc', lang: 'de', prompt: '<span lang="de">Ich weiß nicht, ___ er kommt.</span>', options: ['ob', 'wenn'], answer: 0, keepOrder: true, explain: 'Indirect yes/no question: <em>ob</em>.' },
    { id: 'e5', type: 'mc', prompt: '<span lang="en">The figures are encouraging. But the risks remain.</span> Is starting with <em>But</em> an error?', options: ['No: it is standard, used deliberately', 'Yes: never start a sentence with But'], answer: 0, keepOrder: true, explain: 'The prohibition is a schoolroom habit; reference grammars and usage guides do not support it.' },
    { id: 'e6', type: 'mc', lang: 'de', prompt: '<span lang="de">Das Meeting ist nicht heute, ___ morgen.</span>', options: ['sondern', 'aber'], answer: 0, keepOrder: true, explain: 'After a negation, when the second element replaces the first: <em>sondern</em>.' },
    { id: 'e7', type: 'comma', lang: 'de', prompt: 'Set the commas.', words: ['Der', 'Umsatz', 'stieg', 'deshalb', 'stellten', 'wir', 'neue', 'Mitarbeiter', 'ein.'], commas: [2], explain: 'Two main clauses, the second introduced by <em>deshalb</em>: a comma is correct in German (in English this would be a comma splice).' }
  ]
});
