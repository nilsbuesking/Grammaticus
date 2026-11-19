/*
 * Unit 2, lecture 3: present and future. Content file only. German section in German. Checks: CONTENT-CHECKS.md.
 */
Grammaticus.addLecture({
  id: '2.3', unit: 2, number: 3,
  title: 'Present and future',
  subtitle: 'The German Präsens does almost everything; English divides the same ground between five forms',
  minutes: 30,

  intro: `
    <p>Talking about the future is where German and English differ most in everyday use. German mostly uses the present tense and lets an adverb do the work: <em>Ich komme morgen</em>. English has no single future either, but it obliges you to choose between <em>will</em>, <em>going to</em>, the present progressive and the present simple, each with its own nuance. Choosing wrongly rarely causes misunderstanding, but it is one of the surest signs of a German speaker.</p>`,

  concept: [
    { title: 'Neither language has a future tense',
      html: `
        <p>Neither German nor English has a verb form whose only job is to refer to the future. Both use present forms, and both have a construction with an auxiliary that started out with another meaning:</p>
        <ul>
          <li>German <em>werden</em> + infinitive: <em>werden</em> originally meant “become”;</li>
          <li>English <em>will</em> + infinitive: <em>will</em> originally meant “want” (as German <em>wollen</em> still does), and <em>shall</em> meant “owe, be obliged”.</li>
        </ul>
        <p>Because the future is uncertain, every way of talking about it carries some judgement: intention, plan, prediction, schedule, probability. The languages differ in which judgements they force the speaker to express.</p>` },
    { title: 'The present for the present',
      html: `
        <p>Even the present is not one thing. German <em>Ich lese</em> can mean “I read (habitually)” or “I am reading (now)”. English must choose:</p>
        <div class="ex"><p lang="de">Ich lese viel. · Ich lese gerade.</p><p lang="en">I read a lot. · I’m reading at the moment.</p></div>
        <p>The progressive belongs to lecture 2.8; here it matters because English also uses it for the future.</p>` }
  ],

  german: [
    { title: 'Präsens mit Zukunftsbezug',
      html: `
        <p>Im Deutschen ist das Präsens die normale Form für Zukünftiges, sobald der Kontext oder ein Adverb die Zeit klärt:</p>
        <div class="ex"><p lang="de">Morgen fliege ich nach Berlin.</p><p lang="de">Nächste Woche haben wir Besuch.</p><p lang="de">Ich rufe dich später an.</p><p lang="de">Wenn er kommt, sage ich es ihm.</p></div>
        <p>Das ist keine Nachlässigkeit, sondern seit jeher Standard. Das Futur wäre in diesen Sätzen nicht falsch, aber auffällig.</p>` },
    { title: 'Das Futur I',
      html: `
        <p><em>werden</em> + Infinitiv hat drei Hauptverwendungen:</p>
        <ul>
          <li><strong>Vorhersage oder Zusicherung</strong>, oft mit Nachdruck: <em>Das wird nicht funktionieren. Ich werde mich darum kümmern.</em></li>
          <li><strong>Zukunft ohne Zeitadverb</strong>, wo das Präsens als Gegenwart verstanden würde: <em>Es wird regnen.</em> (gegenüber <em>Es regnet</em>).</li>
          <li><strong>Vermutung über die Gegenwart</strong>, meist mit <em>wohl, schon, sicher</em>: <em>Er wird (wohl) im Büro sein.</em> Hier liegt nichts in der Zukunft.</li>
        </ul>
        <p>Im geschriebenen, förmlichen Deutsch (Verträge, Berichte, Ankündigungen) ist das Futur häufiger als im Gespräch: <em>Die Sitzung wird um 10 Uhr beginnen.</em></p>
        <p class="rule">Faustregel: Wenn Zeitadverb oder Kontext die Zukunft klar machen, genügt das Präsens. Das Futur setzt einen Akzent: Gewissheit, Vorhersage, Versprechen oder Vermutung.</p>` },
    { title: 'Weitere Mittel',
      html: `
        <ul>
          <li><em>gleich, bald, demnächst</em> + Präsens: <em>Ich bin gleich da.</em></li>
          <li><em>vorhaben, planen, wollen</em>: <em>Ich will nächstes Jahr nach Japan.</em> (<em>wollen</em> = Absicht, nicht Zukunft!)</li>
          <li><em>im Begriff sein</em>, <em>dabei sein</em>: <em>Wir sind im Begriff abzureisen.</em></li>
          <li><em>sollen</em> für Angekündigtes: <em>Morgen soll es regnen.</em> (= es heißt, dass …)</li>
        </ul>` }
  ],

  english: [
    { title: 'Five ways to the future',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th>Form</th><th>Use · example</th></tr></thead>
          <tbody>
            <tr><td><strong>will</strong> + infinitive</td><td>prediction, decision made now, offer, promise<span class="tnote">It’ll rain later. · I’ll get it! · I’ll call you tomorrow.</span></td></tr>
            <tr><td><strong>be going to</strong></td><td>intention already formed; prediction from present evidence<span class="tnote">I’m going to look for a new job. · Look at those clouds: it’s going to rain.</span></td></tr>
            <tr><td><strong>present progressive</strong></td><td>arrangement with a fixed time, often with others<span class="tnote">I’m meeting Anna for lunch on Friday. · We’re flying to Berlin tomorrow.</span></td></tr>
            <tr><td><strong>present simple</strong></td><td>timetable, schedule, programme<span class="tnote">The train leaves at 8.15. · The conference starts on Monday.</span></td></tr>
            <tr><td><strong>will be</strong> + <em>-ing</em></td><td>an event in progress at a future time; a neutral “as things will go”<span class="tnote">This time tomorrow I’ll be sitting on the plane. · Will you be using the car tonight?</span></td></tr>
          </tbody></table></div>
        <p>The last example is a polite question: <em>Will you be using the car?</em> asks about plans, while <em>Will you use the car?</em> can sound like a request or a challenge.</p>` },
    { title: 'Will and shall',
      html: `
        <p>Traditional British grammar taught <em>I/we shall</em>, <em>you/he/they will</em> for the plain future, and the reverse for determination. Usage never followed this neatly, and <em>shall</em> has declined sharply: in written British English its frequency fell by over 40 per cent between the 1960s and the 1990s, in speech by nearly half.</p>
        <p>Where <em>shall</em> survives in British English is in questions offering or suggesting something, where <em>will</em> would change the meaning:</p>
        <div class="ex"><p lang="en">Shall I open the window? <span class="gl">offer: do you want me to?</span></p><p lang="en">Shall we go? <span class="gl">suggestion</span></p><p lang="en">Will I open the window? <span class="gl">Scottish and Irish usage; in England it would ask for a prediction</span></p></div>
        <p>And in legal drafting, where <em>shall</em> expresses obligation: <em>The tenant shall pay the rent monthly.</em> Plain-English guidance increasingly replaces it with <em>must</em>.</p>
        <p class="src">Frequency changes after Leech et al., Change in Contemporary English (2009), as summarised by Oxford University Press.</p>` },
    { title: 'Present for the present',
      html: `
        <p>For completeness: the present simple is for habits, general truths and states (<em>I work in the City; water boils at 100 degrees; I know</em>); the progressive for what is happening now or temporarily (<em>I’m working from home this week</em>). Verbs of state (<em>know, believe, own, belong</em>) rarely take the progressive. This is lecture 2.8.</p>` }
  ],

  contrast: `
    <ul>
      <li><strong>Plans and arrangements.</strong> German Präsens, English progressive or <em>going to</em>.
        <div class="ex"><p lang="de">Was machst du am Wochenende? – Ich besuche meine Eltern.</p><p lang="en">What are you doing at the weekend? – I’m visiting my parents.</p><p lang="en" class="odd">What do you do at the weekend? – I visit my parents. <span class="gl">sounds like a habit</span></p></div></li>
      <li><strong>Spontaneous decisions and offers.</strong> German Präsens, English <em>will</em>.
        <div class="ex"><p lang="de">Das Telefon klingelt. – Ich gehe ran!</p><p lang="en">The phone’s ringing. – I’ll get it!</p><p lang="en" class="bad">The phone’s ringing. – I get it!</p></div></li>
      <li><strong><em>will</em> is a false friend.</strong> German <em>ich will</em> = I want; English <em>I will</em> = ich werde. <em>Ich will nach Hause</em> is <em>I want to go home</em>.</li>
      <li><strong>Supposition.</strong> German <em>Er wird im Büro sein</em> (supposition) is English <em>He’ll be in the office</em> (same use of <em>will</em>!) or <em>He must be in the office</em>. This is one of the few places where the two auxiliaries behave alike.</li>
    </ul>
    <p class="contrast">The German habit of the plain present for the future produces the typical error <span class="odd">I go to the cinema tonight</span>. In English the plain present for the future is reserved for timetables; for a personal plan, use <em>I’m going</em> or <em>I’m going to go</em>.</p>`,

  usage: `
    <ul>
      <li><strong>German Futur in speech</strong> is rarer than school grammar suggests; in conversation it often sounds emphatic or official. That is usage, not a rule: the Futur is never wrong for the future, only marked.</li>
      <li><strong>English <em>shall</em></strong> has largely retreated to offers, suggestions and legal texts, as above. Using <em>I shall</em> for the plain future is still correct British English, but now sounds formal or old-fashioned to many readers.</li>
      <li><strong><em>going to</em> → <em>gonna</em></strong>: normal in speech, not used in writing outside dialogue.</li>
    </ul>`,

  style: `
    <ul>
      <li>In German business writing, the Präsens reads more direct and confident: <em>Wir liefern die Ware am 3. März</em> rather than <em>Wir werden die Ware am 3. März liefern</em>. The Futur suits promises and announcements where the emphasis is intended.</li>
      <li>In English business writing, <em>will</em> is the neutral choice for commitments (<em>We will deliver on 3 March</em>); the progressive sounds more conversational (<em>We’re delivering on 3 March</em>); the present simple fits a fixed schedule (<em>Delivery takes place on 3 March</em>).</li>
    </ul>`,

  pitfalls: `
    <ul>
      <li><strong>Don’t translate the German Präsens for a plan into the English present simple</strong>: <em>I’m seeing the client on Tuesday</em>, not <span class="odd">I see the client on Tuesday</span>.</li>
      <li><strong>Offers need <em>will</em> or <em>shall</em></strong>: <em>I’ll send you the file</em>, <em>Shall I send you the file?</em>, not <span class="bad">I send you the file</span> (a frequent email slip).</li>
      <li><strong>German: don’t over-use the Futur</strong> after years of English <em>will</em>: <span class="odd">Ich werde dir morgen eine Mail schicken</span> is correct but heavier than <em>Ich schicke dir morgen eine Mail</em>.</li>
      <li><strong>No <em>will</em> after <em>when, if, as soon as</em></strong>: <em>when the report is ready</em>, not <span class="bad">when the report will be ready</span>. This is lecture 2.7.</li>
    </ul>`,

  latin: `
    <p>Latin had a synthetic future: <em>laudabo</em> “I will praise”, <em>dicam</em> “I will say”. The Romance languages lost it and built a new one from the infinitive plus <em>habere</em>: Late Latin <em>cantare habeo</em> “I have to sing” became French <em>chanterai</em> and Italian <em>canterò</em>.</p>
    <p class="latin">The same thing happened in Germanic with <em>werden</em> and <em>will</em>: a full verb with its own meaning (become, want, have to) slowly turns into an auxiliary for the future. Linguists call this <em>grammaticalisation</em>.</p>`,

  summary: [
    'Neither language has a dedicated future tense; both use the present plus an auxiliary construction (werden, will).',
    'German: Präsens + time adverb is the normal future; Futur I adds emphasis, prediction or supposition (Er wird im Büro sein).',
    'English: will (prediction, decision, offer), going to (intention, evidence), present progressive (arrangement), present simple (timetable), will be -ing (in progress; polite questions).',
    'shall survives in British offers and suggestions (Shall I …?) and in legal drafting; its use roughly halved between the 1960s and 1990s.',
    'ich will = I want; I will = ich werde.',
    'No will after when/if/as soon as.'
  ],

  cards: [
    { id: 'future-en', title: 'English future forms', tags: ['will', 'going to', 'future', 'Futur'], html: `
      <p><strong>will</strong>: prediction, decision now, offer, promise.<br><strong>going to</strong>: intention already formed; evidence (it’s going to rain).<br><strong>present progressive</strong>: arrangement (I’m meeting her on Friday).<br><strong>present simple</strong>: timetable (the train leaves at 8).<br><strong>will be -ing</strong>: in progress at a future time; polite question about plans.</p>` },
    { id: 'futur-de', title: 'Wann Futur I?', tags: ['Futur', 'werden', 'Präsens'], html: `
      <p>Präsens genügt, wenn ein Zeitadverb oder der Kontext die Zukunft klärt. Futur I für Vorhersage, Zusicherung, Nachdruck, Zukunft ohne Zeitangabe, und Vermutung über die Gegenwart (<em>Er wird wohl krank sein</em>).</p>` }
  ],

  terms: [
    { en: 'future reference', de: 'Zukunftsbezug', la: '' },
    { en: 'futurate present', de: 'futurisches Präsens', la: '' },
    { en: 'epistemic (supposition) use', de: 'epistemischer Gebrauch, Vermutung', la: 'Greek epistēmē “knowledge”' },
    { en: 'grammaticalisation', de: 'Grammatikalisierung', la: '', note: 'A word becomes a grammatical marker: will “want” → future auxiliary.' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: 'The phone rings. You say:', options: ['I’ll get it!', 'I get it!', 'I’m getting it!', 'I’m going to get it!'], answer: 0, explain: 'A decision made at the moment of speaking takes <em>will</em>.' },
    { id: 'e2', type: 'mc', prompt: 'You have arranged lunch with a colleague for Friday. Which is most natural?', options: ['I’m having lunch with Tom on Friday.', 'I have lunch with Tom on Friday.', 'I will have lunch with Tom on Friday.'], answer: 0, keepOrder: true, explain: 'A fixed arrangement: present progressive. The plain present sounds like a timetable or a habit.' },
    { id: 'e3', type: 'mc', prompt: 'Which is <em>not</em> standard British usage?', options: ['When the report will be ready, I’ll send it.', 'Shall I send you the report?', 'The meeting starts at ten tomorrow.', 'Look at the sky: it’s going to rain.'], answer: 0, explain: 'No <em>will</em> in a time clause after <em>when</em>: <em>When the report is ready …</em>' },
    { id: 'e4', type: 'match', prompt: 'Match the German sentence to the English.', pairs: [['Ich will nach Hause.', 'I want to go home.'], ['Ich werde nach Hause gehen.', 'I will go home.'], ['Er wird wohl zu Hause sein.', 'He’ll probably be at home.'], ['Morgen soll es regnen.', 'It’s supposed to rain tomorrow.']], explain: '<em>wollen</em> is want; <em>werden</em> + infinitive is future or supposition; <em>sollen</em> reports what is said.' },
    { id: 'e5', type: 'mc', lang: 'de', prompt: 'Which German sentence is the most neutral in a business email?', options: ['Wir schicken Ihnen das Angebot morgen.', 'Wir werden Ihnen das Angebot morgen schicken.', 'Wir wollen Ihnen das Angebot morgen schicken.'], answer: 0, keepOrder: true, explain: 'Präsens + time adverb is the normal German future. The Futur adds emphasis; <em>wollen</em> expresses intention.' },
    { id: 'e6', type: 'mc', prompt: '<span lang="en">Will you be using the meeting room this afternoon?</span> compared with <span lang="en">Will you use the meeting room this afternoon?</span>', options: ['The first asks politely about plans; the second can sound like a request or instruction', 'They mean exactly the same', 'The first is American, the second British', 'The first is wrong'], answer: 0, explain: '<em>will be -ing</em> presents the future as the natural course of events and is the polite way to ask about plans.' },
    { id: 'e7', type: 'gap', prompt: 'Offer to open the window (British English): <span lang="en">___ I open the window?</span>', answers: ['Shall'], explain: 'Offers and suggestions in questions: <em>Shall I …? Shall we …?</em>' }
  ]
});
