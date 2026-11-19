/*
 * Unit 8, lecture 2: Nominalstil and plain English. German section in German.
 */
Grammaticus.addLecture({
  id: '8.2', unit: 8, number: 2,
  title: 'Nominalstil and plain English',
  subtitle: 'Zur Durchführung bringen, carry out an investigation: nominal style, its uses, and the plain-language movements',
  minutes: 30,

  intro: `
    <p>Official and corporate writing in both languages prefers nouns to verbs: <em>die Durchführung der Prüfung erfolgt</em> instead of <em>wir prüfen</em>; <em>the implementation of the policy</em> instead of <em>we will put the policy into practice</em>. This lecture describes how nominal style works, why it is attractive to institutions, what it costs the reader, and what the plain-language movements in Britain and Germany recommend instead. As elsewhere, the advice has an evidence base, but it is thinner than the confidence of style guides suggests.</p>`,

  concept: `
    <p><strong>Nominal style</strong> (<em>Nominalstil</em>) expresses actions and processes as nouns derived from verbs (<em>nominalisations</em>): <em>decide → decision, prüfen → Prüfung</em>. A sentence then needs a weak verb to carry the grammar: <em>make a decision, eine Prüfung durchführen</em>. In German, fixed combinations of such a noun with a weak verb are called <strong>Funktionsverbgefüge</strong> (<em>zur Anwendung kommen, in Erwägung ziehen</em>).</p>
    <p>Nominalisation does three things: it <strong>compresses</strong> (a whole clause becomes a noun phrase), it <strong>hides the agent</strong> (who decides?), and it <strong>abstracts</strong> (events become things that can be counted, discussed, and made subjects of other sentences). The first and third are useful in science and law; the second is often the point in administrative writing.</p>`,

  german: [
    { title: 'Nominalstil und Funktionsverbgefüge',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th>Nominalstil</th><th>Verbalstil</th></tr></thead>
          <tbody>
            <tr><td>Die Prüfung der Anträge erfolgt durch das Amt.</td><td>Das Amt prüft die Anträge.</td></tr>
            <tr><td>nach erfolgter Zahlung</td><td>wenn Sie bezahlt haben</td></tr>
            <tr><td>zur Anwendung kommen</td><td>angewendet werden</td></tr>
            <tr><td>in Erwägung ziehen</td><td>erwägen</td></tr>
            <tr><td>eine Entscheidung treffen</td><td>entscheiden</td></tr>
            <tr><td>Bei Nichtbeachtung …</td><td>Wenn Sie das nicht beachten, …</td></tr>
          </tbody></table></div>
        <p>Nicht jedes Funktionsverbgefüge ist überflüssig. Manche drücken eine Phase oder Aktionsart aus, die das einfache Verb nicht hat: <em>in Bewegung setzen</em> (beginnen lassen) gegenüber <em>bewegen</em>; <em>zur Verfügung stellen</em> hat kein genaues einfaches Gegenstück. Andere erlauben ein Passiv ohne <em>werden</em> (<em>zur Anwendung kommen</em>) oder verschieben das Gewicht ans Satzende.</p>
        <p class="src">Duden Band 4 (Die Grammatik), Funktionsverbgefüge; Duden Band 9, Stichwort Nominalstil.</p>` },
    { title: 'Bürgernahe Verwaltungssprache, Einfache und Leichte Sprache',
      html: `
        <p>Für die deutsche Verwaltung gibt es seit Jahrzehnten Empfehlungen zur verständlichen Sprache, etwa das Arbeitshandbuch „Bürgernahe Verwaltungssprache“ des Bundesverwaltungsamts. Die Grundsätze ähneln den englischen: Verben statt Nomen, aktiv statt passiv, kurze Sätze, persönliche Anrede.</p>
        <p>Zu unterscheiden sind:</p>
        <ul>
          <li><strong>Einfache Sprache</strong>: allgemein verständlich formulierte Standardsprache, ohne festes Regelwerk;</li>
          <li><strong>Leichte Sprache</strong>: ein stark vereinfachtes, regelgeleitetes Register für Menschen mit Lernschwierigkeiten (sehr kurze Sätze, keine Nebensätze, Mediopunkt zur Worttrennung: <em>Bundes·tag</em>). Behörden in Deutschland bieten Informationen in Leichter Sprache auf Grundlage des Behinderten<wbr>gleichstellungs<wbr>rechts an.</li>
        </ul>` }
  ],

  english: [
    { title: 'Nominalisations in English',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th>nominal</th><th>verbal</th></tr></thead>
          <tbody>
            <tr><td>The committee made a decision to carry out an investigation.</td><td>The committee decided to investigate.</td></tr>
            <tr><td>Payment should be made on receipt of the invoice.</td><td>Please pay when you receive the invoice.</td></tr>
            <tr><td>There was a reduction in costs.</td><td>Costs fell. / We reduced costs.</td></tr>
            <tr><td>We are in agreement.</td><td>We agree.</td></tr>
          </tbody></table></div>
        <p>The writer Helen Sword called such nouns “zombie nouns” (2012): they absorb the energy of the verbs they came from. Like German Funktionsverbgefüge, some have uses: <em>make a decision</em> allows an adjective (<em>a difficult decision</em>) where <em>decide</em> needs an adverb.</p>` },
    { title: 'Plain English',
      html: `
        <dl class="timeline">
          <dt>1946</dt><dd>George Orwell, <em>Politics and the English Language</em>: six rules, including “never use a long word where a short one will do” and “never use the passive where you can use the active”.</dd>
          <dt>1948</dt><dd>Sir Ernest Gowers, <em>Plain Words</em>, written for civil servants; still in print in revised editions.</dd>
          <dt>1979</dt><dd>Plain English Campaign founded in Britain; its “Crystal Mark” certifies documents.</dd>
          <dt>2010</dt><dd>US Plain Writing Act requires federal agencies to use plain language in public documents.</dd>
          <dt>2012</dt><dd>GOV.UK style guide: short sentences, common words, active voice, “you” for the reader.</dd>
        </dl>
        <p class="src">Gowers, Plain Words (rev. ed. 2014); GOV.UK, Style guide and “Writing for GOV.UK”.</p>` }
  ],

  contrast: `
    <div class="tablewrap"><table>
      <thead><tr><th>German (nominal)</th><th>English (plain)</th></tr></thead>
      <tbody>
        <tr><td>Nach Eingang Ihrer Zahlung erfolgt der Versand.</td><td>We will send the goods when we receive your payment.</td></tr>
        <tr><td>Die Inbetriebnahme der Anlage ist für Mai vorgesehen.</td><td>The plant should start operating in May.</td></tr>
        <tr><td>Eine Rückerstattung ist ausgeschlossen.</td><td>We cannot give refunds.</td></tr>
        <tr><td>Zwecks Klärung bitten wir um Rückruf.</td><td>Please call us so that we can sort this out.</td></tr>
      </tbody></table></div>
    <p class="contrast">German tolerates nominal style better than English: German nouns carry case and can be stacked with genitives and prepositions without becoming ambiguous, and long compounds absorb whole phrases. Translated literally, a German administrative sentence becomes English that British readers find heavy or evasive. Translating into English usually means turning nouns back into verbs and naming the agent, often <em>we</em> and <em>you</em>.</p>`,

  usage: [
    { title: 'What the evidence says',
      html: `
        <ul>
          <li>Experimental studies generally find that texts rewritten in plain style are read faster and understood better, especially by non-expert readers; the effects are clearest for legal and official documents. The size of the effect varies, and much of the literature comes from advocates of plain language.</li>
          <li>Nominalisation is not inherently obscure: academic and scientific prose relies on it, and expert readers process it easily. The cost falls on readers outside the field.</li>
          <li>Orwell’s rules are advice, not grammar, and Orwell broke them in the same essay (he uses passives freely). Linguists such as Geoffrey Pullum have criticised the reflex against the passive (lecture 8.3).</li>
        </ul>` },
    { title: 'German style advice',
      html: `
        <p>German style manuals since Eduard Engel’s <em>Deutsche Stilkunst</em> (1911) have attacked the “Substantivitis” of officialese. Ludwig Reiners’ <em>Stilkunst</em> (1943), the most influential manual of the post-war decades, took much of its material from Engel without acknowledgement; Engel, who was Jewish, had been banned from publishing under the Nazis. Wolf Schneider’s books (<em>Deutsch für Profis</em>, 1984) carried the same advice to journalists. The advice is consistent; its authority rests on experience and taste more than on research.</p>` }
  ],

  style: `
    <p>Nominal style is a tool. Use it when the process, not the agent, is the topic (<em>Die Digitalisierung verändert die Arbeit</em>), when a concept must be named so it can be discussed, or in legal definitions. Avoid it when you are telling a reader what to do or what you will do: there the verb and the personal pronoun are clearer and more honest.</p>
    <p>A quick test for both languages: underline every noun ending in <em>-ung, -heit, -keit, -ion</em> or <em>-tion, -ment, -ance, -ity</em>. Where one hides an action that a person performs, try the verb.</p>`,

  pitfalls: `
    <ul>
      <li>German → English: turn <em>Durchführung, Erstellung, Bearbeitung</em> into verbs; name the agent.</li>
      <li>English: <em>make a decision, carry out an analysis, conduct a review</em> → <em>decide, analyse, review</em> unless an adjective is needed.</li>
      <li>Do not replace every passive and nominalisation mechanically; in definitions, regulations and science they often serve.</li>
      <li>Leichte Sprache is a special register with its own rules; it is not the same as plain language.</li>
    </ul>`,

  summary: [
    'Nominal style turns verbs into nouns plus weak verbs: eine Entscheidung treffen, make a decision.',
    'It compresses, abstracts and hides the agent.',
    'German tolerates it better than English; translating into English usually means restoring verbs and agents.',
    'Plain English: Orwell (1946), Gowers (1948), Plain English Campaign (1979), GOV.UK.',
    'German: Bürgernahe Verwaltungssprache; Einfache Sprache vs Leichte Sprache.',
    'Evidence supports plain style for non-expert readers; it is weaker than style guides suggest, and nominal style has legitimate uses.'
  ],

  cards: [
    { id: 'nominal-verbal', title: 'Nominal → verbal', tags: ['Nominalstil', 'plain English', 'Funktionsverbgefüge', 'zombie nouns'], html: `
      <p>eine Entscheidung treffen → entscheiden · in Erwägung ziehen → erwägen · nach erfolgter Zahlung → wenn Sie bezahlt haben.<br>make a decision → decide · carry out an investigation → investigate · there was a reduction → costs fell.</p>` }
  ],

  terms: [
    { en: 'nominal style', de: 'Nominalstil', la: 'nomen' },
    { en: 'nominalisation', de: 'Nominalisierung, Substantivierung', la: '' },
    { en: 'light verb construction', de: 'Funktionsverbgefüge', la: '' },
    { en: 'plain English / plain language', de: 'verständliche Sprache, Einfache Sprache', la: '' },
    { en: 'Easy Read / easy-to-read language', de: 'Leichte Sprache', la: '' },
    { en: 'officialese', de: 'Amtsdeutsch, Behördensprache', la: '' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', lang: 'de', prompt: 'Verbal style for <span lang="de">Die Prüfung der Anträge erfolgt durch das Amt.</span>', options: ['Das Amt prüft die Anträge.', 'Das Amt führt die Prüfung der Anträge durch.', 'Die Anträge werden einer Prüfung unterzogen.'], answer: 0, explain: 'Verb instead of noun, agent as subject.' },
    { id: 'e2', type: 'mc', lang: 'en', prompt: 'Plain English for <em>The committee made a decision to carry out an investigation.</em>', options: ['The committee decided to investigate.', 'An investigation was decided upon by the committee.', 'The committee undertook a decision regarding investigation.'], answer: 0, explain: 'Two nominalisations become verbs.' },
    { id: 'e3', type: 'mc', lang: 'en', prompt: 'Best English for <span lang="de">Eine Rückerstattung ist ausgeschlossen.</span>', options: ['We cannot give refunds.', 'A refund is excluded.', 'Refundment is ruled out.'], answer: 0, explain: 'Name the agent; use a verb.' },
    { id: 'e4', type: 'mc', lang: 'de', prompt: 'Which Funktionsverbgefüge has no exact simple-verb equivalent?', options: ['zur Verfügung stellen', 'eine Entscheidung treffen', 'in Erwägung ziehen'], answer: 0, explain: '<em>entscheiden</em> and <em>erwägen</em> exist; <em>zur Verfügung stellen</em> means more than <em>geben</em>.' },
    { id: 'e5', type: 'mc', prompt: 'Leichte Sprache is:', options: ['a rule-based simplified register for people with learning difficulties', 'another name for plain official German', 'a dialect'], answer: 0, explain: 'Einfache Sprache is general plain language; Leichte Sprache has its own rules.' },
    { id: 'e6', type: 'mc', prompt: 'Which statement is best supported?', options: ['Plain style helps non-expert readers; nominal style has legitimate uses in science and law', 'Nominal style is always harder to understand', 'Plain style has no measurable effect'], answer: 0, explain: 'The evidence favours plain style for general readers, without condemning nominal style altogether.' }
  ]
});
