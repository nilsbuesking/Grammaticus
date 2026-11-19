/*
 * Unit 2, lecture 10: the passive. Content file only. German section in German.
 */
Grammaticus.addLecture({
  id: '2.10', unit: 2, number: 10,
  title: 'The passive',
  subtitle: 'werden and sein, be and get; impersonal passives German has and English lacks, and the reverse',
  minutes: 30,

  intro: `
    <p>The passive lets a sentence start from the thing affected rather than the one acting: <em>The contract was signed</em> instead of <em>The director signed the contract</em>. Both languages have it, but German has two kinds and can make a passive without any subject at all, while English can turn indirect objects and even prepositional objects into subjects. And the passive carries a reputation in both languages, deserved and undeserved.</p>`,

  concept: [
    { title: 'What the passive does',
      html: `
        <p>In an active sentence the <strong>agent</strong> (the doer) is the subject. The passive makes the <strong>patient</strong> (the thing affected) the subject and either drops the agent or moves it to a prepositional phrase:</p>
        <div class="ex"><p lang="en">The auditors checked the accounts.</p><p lang="en">The accounts were checked (by the auditors).</p><p lang="de">Die Prüfer kontrollierten die Bücher.</p><p lang="de">Die Bücher wurden (von den Prüfern) kontrolliert.</p></div>
        <p>The passive is useful when the agent is unknown, obvious, unimportant or deliberately left out, and when the patient is the topic of the text.</p>` },
    { title: 'Process and state',
      html: `
        <p>A passive can describe an action being done (<strong>process</strong>, German <em>Vorgangspassiv</em>) or the resulting condition (<strong>state</strong>, German <em>Zustandspassiv</em>). German has separate auxiliaries for these; English uses <em>be</em> for both and leaves the difference to context:</p>
        <div class="ex"><p lang="de">Die Tür <u class="k">wird</u> um 18 Uhr geschlossen. · Die Tür <u class="k">ist</u> geschlossen.</p><p lang="en">The door is closed at six. · The door is closed. <span class="gl">same form, two meanings</span></p></div>` }
  ],

  german: [
    { title: 'Vorgangspassiv mit werden',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th>Tempus</th><th>Form</th></tr></thead>
          <tbody>
            <tr><td>Präsens</td><td>Der Bericht wird geprüft.</td></tr>
            <tr><td>Präteritum</td><td>Der Bericht wurde geprüft.</td></tr>
            <tr><td>Perfekt</td><td>Der Bericht ist geprüft <u class="k">worden</u>.</td></tr>
            <tr><td>Plusquamperfekt</td><td>Der Bericht war geprüft worden.</td></tr>
            <tr><td>Futur I</td><td>Der Bericht wird geprüft werden.</td></tr>
            <tr><td>mit Modalverb</td><td>Der Bericht muss geprüft werden.</td></tr>
          </tbody></table></div>
        <p>Im Passiv-Perfekt heißt das Partizip von <em>werden</em> <strong>worden</strong>, nicht <em>geworden</em>: <em>Er ist befördert worden</em> (Passiv), aber <em>Er ist Direktor geworden</em> (Vollverb).</p>
        <p>Der Urheber steht mit <em>von</em> (Person, direkter Urheber) oder <em>durch</em> (Mittel, Vermittler): <em>Das Haus wurde von einem Architekten entworfen / durch einen Brand zerstört.</em></p>` },
    { title: 'Zustandspassiv mit sein',
      html: `
        <div class="ex"><p lang="de">Das Büro ist geschlossen. · Der Vertrag ist unterschrieben. · Die Plätze sind reserviert.</p></div>
        <p>Es beschreibt das Ergebnis eines Vorgangs: <em>Der Vertrag wurde unterschrieben, also ist er jetzt unterschrieben.</em></p>` },
    { title: 'Unpersönliches Passiv',
      html: `
        <p>Das Deutsche kann auch von intransitiven Verben ein Passiv bilden, ganz ohne Subjekt:</p>
        <div class="ex"><p lang="de">Hier wird nicht geraucht.</p><p lang="de">Es wurde bis spät in die Nacht getanzt.</p><p lang="de">Am Wochenende wird nicht gearbeitet.</p></div>
        <p>Das <em>es</em> ist nur Platzhalter im Vorfeld und verschwindet, sobald etwas anderes dort steht. Diese Konstruktion hat im Englischen keine Entsprechung.</p>` },
    { title: 'bekommen-Passiv und Alternativen',
      html: `
        <p>Für die Person, die etwas erhält (das Dativobjekt), gibt es das <strong>Rezipientenpassiv</strong> mit <em>bekommen</em> oder (umgangssprachlich) <em>kriegen</em>:</p>
        <div class="ex"><p lang="de">Ihm wurde ein Preis verliehen. · Er bekam einen Preis verliehen.</p></div>
        <p>Weitere Mittel mit passivischer Bedeutung:</p>
        <ul>
          <li><em>man</em>: <em>Man hat den Fehler gefunden.</em></li>
          <li><em>sich lassen</em> (Möglichkeit): <em>Das lässt sich ändern.</em></li>
          <li><em>sein + zu</em> + Infinitiv (Notwendigkeit oder Möglichkeit): <em>Der Antrag ist bis Freitag einzureichen. Das ist nicht zu ändern.</em></li>
          <li>Adjektive auf <em>-bar</em>, <em>-lich</em>: <em>machbar, verständlich</em>.</li>
        </ul>` }
  ],

  english: [
    { title: 'be + past participle',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th>Form</th><th>Example</th></tr></thead>
          <tbody>
            <tr><td>present</td><td>The report is checked every quarter.</td></tr>
            <tr><td>present progressive</td><td>The report is being checked.</td></tr>
            <tr><td>past</td><td>The report was checked.</td></tr>
            <tr><td>present perfect</td><td>The report has been checked.</td></tr>
            <tr><td>with modal</td><td>The report must be checked.</td></tr>
          </tbody></table></div>
        <p>The agent is introduced by <em>by</em>.</p>` },
    { title: 'Passives German cannot make',
      html: `
        <ul>
          <li><strong>Indirect object as subject</strong>:
            <div class="ex"><p lang="en">She was given a bonus. · I was told to wait. · We were sent the wrong file.</p></div></li>
          <li><strong>Prepositional passive</strong>: the object of a preposition becomes the subject, and the preposition stays behind:
            <div class="ex"><p lang="en">This issue must be dealt with. · The bed has been slept in. · She hates being laughed at.</p></div></li>
          <li><strong>Raising with verbs of saying and thinking</strong>:
            <div class="ex"><p lang="en">He is said to be very rich. · The company is believed to have lost millions.</p></div>
            German uses <em>sollen</em> (lecture 2.9) or <em>Es heißt, dass …</em>.</li>
        </ul>` },
    { title: 'The get-passive',
      html: `
        <div class="ex"><p lang="en">He got promoted. · She got fired. · The parcel got lost.</p></div>
        <p><em>get</em> + participle is informal and stresses the event, often an unwelcome or unexpected one, and often with some involvement of the subject. It is increasing in use, but in formal writing <em>be</em> remains the norm.</p>` }
  ],

  contrast: `
    <ul>
      <li><strong>werden / worden</strong> vs <strong>be / been</strong>: <em>Der Bericht ist geprüft worden = The report has been checked.</em></li>
      <li><strong>State or process</strong>: German separates <em>ist geschlossen</em> and <em>wird geschlossen</em>; English <em>is closed</em> covers both.</li>
      <li><strong>Impersonal passive</strong>: <em>Hier wird nicht geraucht</em> → <em>No smoking here / Smoking is not allowed here / People don’t smoke here.</em></li>
      <li><strong>Indirect object</strong>: <em>She was given a bonus</em> → <em>Ihr wurde ein Bonus gezahlt / Sie bekam einen Bonus.</em> Not <span class="bad">Sie wurde einen Bonus gegeben</span>.</li>
      <li><strong>Prepositional passive</strong>: <em>This must be dealt with</em> → <em>Darum muss man sich kümmern / Das muss erledigt werden.</em></li>
      <li><strong>by</strong>: <em>von</em> or <em>durch</em>. English <em>through</em> is not used for the agent.</li>
    </ul>`,

  usage: `
    <p>Few pieces of writing advice are repeated more than “avoid the passive”. George Orwell’s rule in <em>Politics and the English Language</em> (1946) is the classic version: “Never use the passive where you can use the active.” Two things are worth knowing:</p>
    <ul>
      <li>The advice is about evasiveness and wordiness, which the passive can serve (<em>mistakes were made</em>). It is not a grammatical rule. Good writers use the passive constantly and for good reasons: to keep the topic in subject position, to leave out an irrelevant agent, or to put new information at the end.</li>
      <li>Linguists, notably Geoffrey Pullum, have shown that people who object to the passive often misidentify it, labelling any vague or agentless sentence “passive” (<em>There were problems</em> is not passive).</li>
    </ul>
    <p>In German, criticism of the passive is part of the criticism of <em>Amtsdeutsch</em> and Nominalstil (Unit 8): <em>Es wird gebeten, die Unterlagen fristgerecht einzureichen</em>.</p>`,

  style: `
    <ul>
      <li><strong>Keep the topic as subject.</strong> In a text about a contract: <em>The contract was drafted in March, reviewed by legal in April and signed in May.</em> Switching to active would put three different agents in subject position.</li>
      <li><strong>Put the new or weighty element last.</strong> <em>The building was designed by Zaha Hadid</em> puts the architect where the stress falls.</li>
      <li><strong>Name the agent when responsibility matters.</strong> <em>The board approved the budget</em> is clearer than <em>The budget was approved</em> if the reader needs to know who.</li>
      <li><strong>German alternatives</strong> often read better than a chain of passives: <em>man</em>, <em>sich lassen</em>, or an active with a real subject.</li>
    </ul>`,

  pitfalls: `
    <ul>
      <li><span class="bad">Er ist befördert geworden.</span> → <em>Er ist befördert worden.</em></li>
      <li><span class="bad">Sie wurde ein Bonus gegeben.</span> → <em>Ihr wurde ein Bonus gegeben / Sie bekam einen Bonus.</em></li>
      <li><span class="bad">It was danced until late.</span> (German impersonal passive) → <em>People danced until late / There was dancing until late.</em></li>
      <li><span class="odd">The house was destroyed through a fire.</span> → <em>by a fire</em>.</li>
    </ul>`,

  latin: `
    <p>Latin forms the passive synthetically in the present system (<em>laudor</em> “I am praised”, <em>laudabatur</em> “he was being praised”) and with <em>esse</em> + participle in the perfect system (<em>laudatus sum</em> “I was / have been praised”), which is the German <em>sein</em> + participle pattern.</p>
    <p class="latin">Latin also has an impersonal passive like German: <em>pugnatur</em> “there is fighting” (literally “it is fought”), <em>itur</em> “people go”.</p>`,

  summary: [
    'The passive makes the affected thing the subject; the agent is dropped or added with von/durch, by.',
    'German: Vorgangspassiv werden + Partizip (Perfekt: ist … worden), Zustandspassiv sein + Partizip; English be for both.',
    'German has an impersonal passive (Hier wird nicht geraucht); English does not.',
    'English can passivise indirect objects (She was given) and prepositional objects (This must be dealt with); German cannot, and uses bekommen-Passiv, man or other means.',
    'get-passive: informal, eventful, often adverse.',
    '“Avoid the passive” is style advice against evasiveness, not a rule; the passive keeps topics in subject position and new information at the end.'
  ],

  cards: [
    { id: 'passive-forms', title: 'Passive: German vs English', tags: ['Passiv', 'passive', 'worden', 'werden'], html: `
      <p>wird geprüft = is (being) checked · wurde geprüft = was checked · ist geprüft worden = has been checked · ist geprüft (state) = is checked.</p>
      <p>No English impersonal passive; no German indirect-object or prepositional passive.</p>` },
    { id: 'worden', title: 'worden or geworden?', tags: ['worden', 'geworden', 'Passiv'], html: `
      <p>Passiv-Perfekt: <em>ist geprüft <strong>worden</strong></em>. Vollverb <em>werden</em> (become): <em>ist Direktor <strong>geworden</strong></em>.</p>` }
  ],

  terms: [
    { en: 'voice', de: 'Genus verbi, Handlungsrichtung', la: 'genus verbi' },
    { en: 'active / passive', de: 'Aktiv / Passiv', la: 'activum / passivum' },
    { en: 'agent', de: 'Agens, Urheber', la: 'agens “doing”' },
    { en: 'patient', de: 'Patiens', la: 'patiens “suffering”' },
    { en: 'process passive', de: 'Vorgangspassiv', la: '' },
    { en: 'state passive', de: 'Zustandspassiv', la: '' },
    { en: 'impersonal passive', de: 'unpersönliches Passiv', la: '' },
    { en: 'recipient passive', de: 'Rezipientenpassiv, bekommen-Passiv', la: '' },
    { en: 'prepositional passive', de: '(kein Gegenstück)', la: '' }
  ],

  exercises: [
    { id: 'e1', type: 'gap', lang: 'de', prompt: '<span lang="de">Der Vertrag ist gestern unterschrieben ___.</span>', answers: ['worden'], cs: true, explain: 'Perfekt of the werden-passive: <em>ist … worden</em>.' },
    { id: 'e2', type: 'mc', prompt: 'Translate <span lang="de">Am Sonntag wird nicht gearbeitet.</span>', options: ['Nobody works on Sundays.', 'It is not worked on Sundays.', 'On Sunday is not worked.'], answer: 0, keepOrder: true, explain: 'English has no impersonal passive; use an active with a general subject, or <em>There is no work on Sundays</em>.' },
    { id: 'e3', type: 'mc', lang: 'de', prompt: 'Translate <span lang="en">She was given a bonus.</span>', options: ['Sie bekam einen Bonus.', 'Sie wurde einen Bonus gegeben.', 'Sie war einen Bonus gegeben.'], answer: 0, keepOrder: true, explain: 'German cannot make the dative object the subject of a werden-passive; use <em>bekommen</em> or <em>Ihr wurde ein Bonus gegeben</em>.' },
    { id: 'e4', type: 'mc', prompt: 'Which is a prepositional passive?', options: ['This problem must be dealt with.', 'The problem was solved by the team.', 'The problem is serious.'], answer: 0, keepOrder: true, explain: 'The object of <em>deal with</em> becomes the subject; <em>with</em> stays behind.' },
    { id: 'e5', type: 'mc', lang: 'de', prompt: '<span lang="de">Das Büro ist geschlossen.</span> This is …', options: ['Zustandspassiv (state)', 'Vorgangspassiv (process)', 'Perfekt Aktiv'], answer: 0, keepOrder: true, explain: '<em>sein</em> + participle describes the resulting state.' },
    { id: 'e6', type: 'match', prompt: 'Match.', pairs: [['Das lässt sich ändern.', 'That can be changed.'], ['Der Antrag ist bis Freitag einzureichen.', 'The application must be submitted by Friday.'], ['Er soll Millionen verloren haben.', 'He is said to have lost millions.'], ['Er ist befördert worden.', 'He has been promoted.']], explain: 'German alternatives to the passive and their English passive equivalents.' }
  ]
});
