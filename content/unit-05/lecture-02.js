/*
 * Unit 5, lecture 2: the German comma I (lists, coordination, subordinate clauses). German section in German.
 */
Grammaticus.addLecture({
  id: '5.2', unit: 5, number: 2,
  title: 'The German comma I: clauses and lists',
  subtitle: 'Reihungen, gleichrangige Sätze, Nebensätze, Vergleiche',
  minutes: 30,

  intro: `
    <p>Two thirds of all German commas fall under two rules: separate items of equal rank unless <em>und</em>, <em>oder</em> or a similar conjunction joins them, and set off every subordinate clause on both sides. The rest of this lecture is about the edges: adjectives that are or are not a list, main clauses joined by <em>und</em>, comparisons with <em>als</em> and <em>wie</em>, and the 2024 provisions for words such as <em>egal</em> and <em>je nachdem</em>.</p>`,

  concept: `
    <p>A <strong>list</strong> or <strong>coordination</strong> (German <em>Reihung</em>) joins units of equal rank: words, phrases or clauses. A <strong>subordinate clause</strong> (<em>Nebensatz</em>) is embedded in another clause as one of its parts. The German comma marks both relations; English marks the first much as German does and the second only where meaning or reading require it.</p>
    <p>The test for equal rank is the same in both languages: can you put <em>und/and</em> between the items, or swap them, without changing the meaning? If so, they are a list and take a comma when no conjunction stands between them.</p>`,

  german: [
    { title: 'Reihungen',
      html: `
        <p class="rule">Gleichrangige Wörter, Wortgruppen und Sätze werden durch Komma getrennt. Stehen <em>und, oder, sowie, beziehungsweise, entweder … oder, weder … noch, sowohl … als auch</em> dazwischen, steht kein Komma.</p>
        <div class="ex"><p lang="de">Wir brauchen Papier, Stifte<u class="k"> und </u>einen Drucker.</p><p lang="de">Sie spricht sowohl Englisch<u class="k"> als auch </u>Französisch.</p><p lang="de" class="bad">Sie spricht sowohl Englisch, als auch Französisch.</p></div>
        <p>Vor <strong>entgegenstellenden</strong> Konjunktionen (<em>aber, doch, jedoch, sondern</em>) steht dagegen ein Komma:</p>
        <div class="ex"><p lang="de">Das Angebot ist günstig<u class="k">, aber</u> knapp kalkuliert.</p><p lang="de">Nicht der Preis<u class="k">, sondern</u> die Lieferzeit entscheidet.</p></div>
        <p class="src">Amtliches Regelwerk 2024, § 71 mit Erläuterungen.</p>` },
    { title: 'Gleichrangige und nicht gleichrangige Adjektive',
      html: `
        <p>Mehrere Adjektive vor einem Nomen werden durch Komma getrennt, wenn sie gleichrangig sind; das erkennt man daran, dass man <em>und</em> einsetzen kann. Bestimmt das zweite Adjektiv mit dem Nomen zusammen einen Begriff, den das erste näher bestimmt, steht kein Komma.</p>
        <div class="ex"><p lang="de">ein langer<u class="k">,</u> anstrengender Tag <span class="tnote">(lang und anstrengend)</span></p><p lang="de">dunkles bayerisches Bier <span class="tnote">(dunkles „bayerisches Bier“)</span></p><p lang="de">die neuen<u class="k"> </u>elektrischen Busse</p></div>
        <p>Neu geregelt (2024) ist der Fall der <strong>Wechselflexion</strong> im Dativ: Wird die Folge als Reihung aufgefasst, steht ein Komma; sonst nicht. Beide Lesarten sind zulässig:</p>
        <div class="ex"><p lang="de">mit weiterem, starkem Rückgang</p><p lang="de">mit weiterem starkem/starken Rückgang</p></div>
        <p class="src">Amtliches Regelwerk 2024, Abschnitt 2.5.2 zu § 71.</p>` },
    { title: 'Hauptsätze mit und/oder',
      html: `
        <p>Gleichrangige Hauptsätze, die mit <em>und, oder</em> usw. verbunden sind, brauchen kein Komma. Man <strong>kann</strong> es aber setzen, um die Gliederung deutlich zu machen; das Regelwerk empfiehlt es ausdrücklich bei längeren Sätzen oder wenn sonst eine Fehllesung droht.</p>
        <div class="ex"><p lang="de">Ich fotografierte die Berge<u class="k">(,)</u> und meine Frau machte einen Spaziergang.</p><p lang="de">Ich rief den Kunden an<u class="k">, </u>und meine Kollegin schrieb die E-Mail. <span class="tnote">Ohne Komma liest man zunächst: „den Kunden und meine Kollegin“.</span></p></div>
        <p>Ohne Konjunktion werden Hauptsätze durch Komma (oder Semikolon, Punkt) getrennt. Das ist im Deutschen völlig korrekt, im Englischen dagegen ein <em>comma splice</em>:</p>
        <div class="ex"><p lang="de">Der Umsatz stieg<u class="k">,</u> die Kosten sanken.</p></div>
        <p class="src">Amtliches Regelwerk 2024, § 71 E3.</p>` },
    { title: 'Nebensätze',
      html: `
        <p class="rule">Nebensätze werden immer durch Komma abgegrenzt, eingeschobene Nebensätze auf beiden Seiten.</p>
        <div class="ex"><p lang="de">Ich glaube<u class="k">, dass</u> er recht hat.</p><p lang="de">Der Bericht<u class="k">, den</u> du geschickt hast<u class="k">,</u> war hilfreich.</p><p lang="de"><u class="k">Ob</u> das reicht<u class="k">,</u> ist offen.</p><p lang="de">Er kam<u class="k">, als</u> wir schon gingen.</p></div>
        <p>Das gilt auch für Relativsätze, die im Englischen ohne Komma stünden (<em>restrictive</em>). Das deutsche Komma unterscheidet nicht zwischen notwendigen und zusätzlichen Relativsätzen.</p>
        <p>Mehrteilige Einleitungen bilden eine Einheit; das Komma steht vor der ganzen Einleitung:</p>
        <div class="ex"><p lang="de">Er ging<u class="k">, ohne dass</u> jemand es merkte.</p><p lang="de" class="bad">Er ging ohne<u class="k">, dass</u> jemand es merkte.</p><p lang="de">Sie lachte<u class="k">, als ob</u> nichts gewesen wäre.</p><p lang="de">Wir haben verlängert<u class="k">, sodass</u> (<em>so dass</em>) alle teilnehmen können.</p></div>
        <p>Gleichrangige Nebensätze mit <em>und/oder</em>: kein Komma dazwischen.</p>
        <div class="ex"><p lang="de">Ich hoffe, dass er kommt<u class="k"> und </u>dass sie bleibt.</p></div>
        <p>Treffen Nebensätze aufeinander, bleiben beide Kommas stehen:</p>
        <div class="ex"><p lang="de">Er sagte<u class="k">, dass, </u>wenn es regnet, das Fest ausfällt.</p></div>
        <p class="src">Amtliches Regelwerk 2024, § 73 und Abschnitt 2.4.</p>` },
    { title: 'Vergleiche mit als und wie',
      html: `
        <p>Vor <em>als</em> und <em>wie</em> steht ein Komma nur, wenn ein Nebensatz folgt (mit Verb). Folgt nur ein Wort oder eine Wortgruppe, steht keines.</p>
        <div class="ex"><p lang="de">Er ist älter<u class="k"> als </u>ich.</p><p lang="de">Er ist älter<u class="k">, als</u> ich dachte.</p><p lang="de">Es kam<u class="k">, wie</u> es kommen musste.</p><p lang="de" class="bad">Er ist älter, als ich.</p></div>
        <p class="src">Duden Band 9 (Richtiges und gutes Deutsch), Stichwort Komma; die Regel folgt aus § 73 (Komma nur bei Nebensätzen).</p>` },
    { title: 'Grenzfälle: egal, je nachdem, Fragewörter, feste Wendungen',
      html: `
        <p>Das Regelwerk 2024 trägt dem Sprachwandel Rechnung: Ausdrücke wie <em>egal, je nachdem, geschweige denn</em> verschmelzen mit dem folgenden Nebensatz. Werden sie noch als selbstständig aufgefasst, steht das Komma; sonst kann es entfallen.</p>
        <div class="ex"><p lang="de">Egal<u class="k">(,)</u> wer dich prüft, bleib ruhig.</p><p lang="de">Je nachdem<u class="k">(,)</u> wie viele kommen, buchen wir einen größeren Raum.</p></div>
        <p>Allein stehende Fragewörter: als Satzglied ohne Komma, als verkürzter Nebensatz mit.</p>
        <div class="ex"><p lang="de">Berta weiß nicht<u class="k">(,)</u> wie viel.</p></div>
        <p>Formelhafte Nebensätze können ohne Komma stehen:</p>
        <div class="ex"><p lang="de">Wie bereits gesagt<u class="k">(,)</u> beginnen wir um neun.</p></div>
        <p class="src">Amtliches Regelwerk 2024, Abschnitt 2.5.1, 2.5.3, 2.5.4.</p>` }
  ],

  english: [
    { title: 'Lists and coordinate adjectives',
      html: `
        <p>English separates list items with commas like German; the only difference is the optional comma before the final <em>and</em> (the serial or Oxford comma, lecture 5.4). Coordinate adjectives follow the same <em>and</em>-test:</p>
        <div class="ex"><p lang="en">a long<u class="k">,</u> tiring day</p><p lang="en">a big black dog</p><p lang="en">the new electric buses</p></div>
        <p>Before <em>but</em> joining two clauses a comma is usual; before <em>but</em> joining words, none: <em>cheap but carefully costed</em>. German puts a comma before <em>aber</em> in both cases.</p>
        <p class="src">Quirk et al. 1985, Appendix III (punctuation); New Hart’s Rules, ch. 4.</p>` },
    { title: 'Subordinate clauses',
      html: `
        <ul>
          <li><strong>No comma</strong> before <em>that</em>-clauses, indirect questions and restrictive relative clauses: <em>I think that he is right. I don’t know whether it is enough. The report you sent was helpful.</em></li>
          <li><strong>Adverbial clauses</strong>: a comma is usual when they come first, often omitted when they follow: <em>When we left, it was raining. / It was raining when we left.</em> A following clause of contrast or reason often keeps it: <em>He signed, although he had doubts.</em></li>
          <li><strong>Comparisons</strong>: no comma: <em>He is older than I thought.</em></li>
        </ul>` }
  ],

  contrast: `
    <div class="tablewrap"><table>
      <thead><tr><th>German</th><th>English</th></tr></thead>
      <tbody>
        <tr><td>Ich glaube, dass er recht hat.</td><td>I think (that) he is right.</td></tr>
        <tr><td>Die Frau, die anrief, …</td><td>The woman who called …</td></tr>
        <tr><td>Wann er kommt, weiß ich nicht.</td><td>I don’t know when he is coming.</td></tr>
        <tr><td>Er ist älter, als ich dachte.</td><td>He is older than I thought.</td></tr>
        <tr><td>günstig, aber knapp kalkuliert</td><td>cheap but carefully costed</td></tr>
        <tr><td>Der Umsatz stieg, die Kosten sanken.</td><td>Sales rose; costs fell. / Sales rose and costs fell.</td></tr>
      </tbody></table></div>
    <p class="contrast">Rule of thumb for a German writer of English: delete the comma before <em>that, whether, if, who, which</em> (restrictive) and <em>than</em>, and never join two main clauses with a comma alone.</p>`,

  usage: `
    <ul>
      <li><strong>Everyday usage.</strong> The commonest errors in German texts are missing commas at the end of an embedded clause (<em class="odd">Der Bericht, den du geschickt hast war hilfreich</em>) and commas before <em>als auch</em> and <em>sowie</em>. The first counts as an error in every edited text; the second also.</li>
      <li><strong>Optional comma before und.</strong> Since 1996 the comma between main clauses joined by <em>und</em> has been optional. Many writers trained before 1996 still set it habitually (it was then obligatory with a new subject); both are correct.</li>
      <li><strong>egal, je nachdem.</strong> The 2024 provision codifies what was already common: <em>egal wer</em> without a comma was widespread before it was permitted.</li>
    </ul>`,

  pitfalls: `
    <ul>
      <li><em>ohne dass, anstatt dass, als ob, sodass</em>: comma before the whole expression, never inside it.</li>
      <li><em>sowohl … als auch, weder … noch, sowie, bzw.</em>: no comma.</li>
      <li><em>und zwar, nämlich, das heißt</em> introduce an addition: comma before them (lecture 5.3).</li>
      <li>English: no comma between subject and verb, however long the subject: <em class="odd">What we need now, is time.</em> (a common German import, since German writers hear a clause boundary there).</li>
    </ul>`,

  summary: [
    'Lists: comma between items, none before und, oder, sowie, sowohl … als auch, weder … noch.',
    'Comma before aber, doch, jedoch, sondern.',
    'Adjectives: comma if und could stand between them (ein langer, anstrengender Tag; dunkles bayerisches Bier).',
    'Main clauses with und: comma optional, useful against misreading.',
    'Every subordinate clause is set off on both sides; multi-word introducers (ohne dass, als ob) are not split.',
    'als/wie: comma only before a clause.',
    '2024: egal, je nachdem, standalone question words and set phrases may be written without a comma.',
    'English: no comma before that, whether, restrictive relatives, than.'
  ],

  cards: [
    { id: 'de-komma-reihung', title: 'Komma bei Reihungen', tags: ['Komma', 'Reihung', 'und', 'aber'], html: `
      <p>Komma zwischen gleichrangigen Teilen; <strong>kein</strong> Komma vor <em>und, oder, sowie, bzw., sowohl … als auch, weder … noch</em>. <strong>Komma</strong> vor <em>aber, doch, jedoch, sondern</em>. Hauptsätze mit <em>und</em>: Komma freigestellt.</p>` },
    { id: 'de-komma-nebensatz', title: 'Komma bei Nebensätzen', tags: ['Komma', 'Nebensatz', 'als', 'wie'], html: `
      <p>Immer, eingeschoben beidseitig. Mehrteilige Einleiter nicht trennen (<em>, ohne dass</em>). <em>als/wie</em>: Komma nur vor Nebensatz. Freigestellt (2024): <em>egal(,) wer</em>, <em>je nachdem(,) wie</em>, <em>wie bereits gesagt(,)</em>.</p>` }
  ],

  terms: [
    { en: 'list, coordination', de: 'Reihung, Aufzählung', la: 'coordinatio' },
    { en: 'coordinate adjectives', de: 'gleichrangige Adjektive', la: '' },
    { en: 'adversative conjunction', de: 'entgegenstellende (adversative) Konjunktion', la: 'adversativus' },
    { en: 'subordinate clause', de: 'Nebensatz', la: 'propositio subordinata' },
    { en: 'comma splice', de: '(kein deutscher Begriff: im Deutschen korrekt)', la: '', note: 'Two main clauses joined by a comma alone.' },
    { en: 'mixed adjective declension', de: 'Wechselflexion', la: '' }
  ],

  exercises: [
    { id: 'e1', type: 'comma', lang: 'de', prompt: 'Set the required commas.', words: ['Der', 'Bericht', 'den', 'du', 'geschickt', 'hast', 'war', 'hilfreich.'], commas: [1, 5], explain: 'Relative clause, set off on both sides.' },
    { id: 'e2', type: 'comma', lang: 'de', prompt: 'Set the required commas.', words: ['Sie', 'spricht', 'sowohl', 'Englisch', 'als', 'auch', 'Französisch.'], commas: [], explain: 'No comma in <em>sowohl … als auch</em>.' },
    { id: 'e3', type: 'comma', lang: 'de', prompt: 'Set the required commas.', words: ['Das', 'Angebot', 'ist', 'günstig', 'aber', 'knapp', 'kalkuliert.'], commas: [3], explain: 'Comma before <em>aber</em>, even between words.' },
    { id: 'e4', type: 'comma', lang: 'de', prompt: 'Set the required commas (and only those).', words: ['Er', 'ist', 'älter', 'als', 'ich.'], commas: [], explain: 'No clause follows <em>als</em>: no comma.' },
    { id: 'e5', type: 'comma', lang: 'de', prompt: 'Set the required commas.', words: ['Er', 'ging', 'ohne', 'dass', 'jemand', 'es', 'merkte.'], commas: [1], explain: 'Comma before the whole introducer <em>ohne dass</em>.' },
    { id: 'e6', type: 'comma', lang: 'de', prompt: 'Required and optional commas.', words: ['Ich', 'fotografierte', 'die', 'Berge', 'und', 'meine', 'Frau', 'machte', 'einen', 'Spaziergang.'], commas: [], optional: [3], explain: 'Main clauses joined by <em>und</em>: comma optional.' },
    { id: 'e7', type: 'mc', lang: 'de', prompt: 'Which is correctly punctuated?', options: ['ein langer, anstrengender Tag', 'dunkles, bayerisches Bier', 'ein langer anstrengender, Tag'], answer: 0, explain: '<em>lang und anstrengend</em> are of equal rank; <em>dunkles</em> qualifies <em>bayerisches Bier</em>.' },
    { id: 'e8', type: 'comma', lang: 'en', prompt: 'Set the required commas (if any).', words: ['The', 'report', 'you', 'sent', 'was', 'helpful.'], commas: [], explain: 'Restrictive relative clause: no commas in English.' },
    { id: 'e9', type: 'comma', lang: 'de', prompt: 'Set the required commas.', words: ['Er', 'sagte', 'dass', 'wenn', 'es', 'regnet', 'das', 'Fest', 'ausfällt.'], commas: [1, 2, 5], explain: 'Both clause boundaries are marked: <em>sagte, dass, wenn es regnet, das Fest …</em>' }
  ]
});
