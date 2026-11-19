/*
 * Unit 1, lecture 4: pronouns. Content file only. German section in German.
 */
Grammaticus.addLecture({
  id: '1.4', unit: 1, number: 4,
  title: 'Pronouns',
  subtitle: 'du and Sie against you; man against one, you and they; es and there; who and whom; singular they',
  minutes: 30,

  intro: `
    <p>Pronouns are few, frequent and loaded with social meaning. German forces a choice between <em>du</em> and <em>Sie</em> that English gave up centuries ago; English has to choose between <em>one</em>, <em>you</em> and <em>they</em> where German has a single <em>man</em>. This lecture covers personal, impersonal, reflexive and interrogative pronouns, the dummy subjects <em>es</em> and <em>there/it</em>, and the current state of <em>whom</em> and singular <em>they</em>. Relative pronouns follow in Unit 4.</p>`,

  concept: [
    { title: 'What pronouns do',
      html: `
        <p>A pronoun stands for a noun phrase already known from the context or the situation. Besides <strong>personal</strong> pronouns (<em>ich, du, er; I, you, he</em>) there are <strong>reflexive</strong> (<em>sich; himself</em>), <strong>possessive</strong> (<em>mein; my, mine</em>), <strong>demonstrative</strong> (<em>dieser, der; this, that</em>), <strong>interrogative</strong> (<em>wer, was; who, what</em>), <strong>indefinite</strong> (<em>man, jemand; one, someone</em>) and <strong>relative</strong> pronouns (Unit 4). Some pronouns refer to nothing at all and only fill the subject slot: <em>es regnet; it is raining; there is a problem</em>.</p>` }
  ],

  german: [
    { title: 'du und Sie',
      html: `
        <p>Die Anrede ist im Deutschen grammatisch markiert: <em>du/ihr</em> für Vertrautheit, <em>Sie</em> (3. Person Plural, großgeschrieben) für Distanz. Der Übergang zum Du wird angeboten, traditionell vom Älteren, Ranghöheren oder von der Frau; in vielen Unternehmen, besonders in Start-ups und internationalen Firmen, ist das Du heute Standard, in Banken, Verwaltung und Recht weit weniger.</p>
        <p>Zwischenformen: das „Hamburger Sie“ (Vorname + Sie: <em>Anna, können Sie …</em>) und das „Münchner Du“ (Nachname + du), beide regional und eher scherzhaft so benannt.</p>
        <p>In Briefen und E-Mails darf <em>du/dich/dein</em> großgeschrieben werden (<em>Du, Dich, Dein</em>); <em>Sie/Ihnen/Ihr</em> als Anrede muss großgeschrieben werden.</p>` },
    { title: 'man, es und der/die/das',
      html: `
        <ul>
          <li><strong>man</strong> bezeichnet eine unbestimmte Person oder Menschen allgemein: <em>Man kann nie wissen. In Deutschland isst man spät zu Abend.</em> Akkusativ und Dativ werden mit <em>einen/einem</em> ergänzt: <em>Das freut einen.</em></li>
          <li><strong>es</strong> als Platzhalter: bei Wetterverben (<em>es regnet</em>), in <em>es gibt</em>, als Vorfeld-<em>es</em> (<em>Es kamen viele Gäste</em>, das <em>es</em> verschwindet bei Umstellung: <em>Gestern kamen viele Gäste</em>) und als Verweis auf einen folgenden Satz (<em>Es freut mich, dass …</em>).</li>
          <li><strong>der, die, das</strong> als Pronomen: <em>Kennst du Herrn Weber? – Den kenne ich gut.</em> Im Gespräch sehr häufig und standardsprachlich; über Personen kann es abwertend klingen (<em>Die hat keine Ahnung</em>).</li>
        </ul>` },
    { title: 'Reflexiv und reziprok',
      html: `
        <div class="ex"><p lang="de">Er wäscht sich. · Sie erinnert sich. · Wir haben uns getroffen.</p><p lang="de">Sie helfen sich / einander. <span class="gl">einander ist eindeutig reziprok und gehoben</span></p></div>
        <p>Viele deutsche Verben sind reflexiv, deren englische Entsprechung es nicht ist: <em>sich erinnern (remember), sich freuen (be pleased), sich beeilen (hurry), sich bewerben (apply), sich entscheiden (decide), sich treffen (meet)</em>.</p>` }
  ],

  english: [
    { title: 'you, thou and the lost distinction',
      html: `
        <p>English had <em>thou/thee</em> (singular, familiar) and <em>ye/you</em> (plural, polite) until the seventeenth century, much like <em>du</em> and <em>Sie</em>. The polite form spread to all addressees, and <em>thou</em> survives only in some northern dialects, in older religious language and in Quaker usage. Modern English marks distance instead by names and titles (<em>Mr Weber</em> against <em>Thomas</em>) and by politeness formulas.</p>` },
    { title: 'one, you, they',
      html: `
        <ul>
          <li><strong>one</strong>: formal, slightly old-fashioned, more British: <em>One should always check the figures.</em></li>
          <li><strong>you</strong>: the normal generic pronoun in speech and most writing: <em>You never know.</em></li>
          <li><strong>they</strong>: an unspecified group or authority: <em>They say it will rain. They’ve closed the road.</em></li>
          <li><strong>passive or <em>people</em></strong>: <em>It is said that …; People eat late in Spain.</em></li>
        </ul>` },
    { title: 'Dummy subjects: it and there',
      html: `
        <div class="ex"><p lang="en">It’s raining. · It’s late. · It’s three miles to the station. · It’s important that …</p><p lang="en">There is a problem. · There are two options. <span class="gl">es gibt</span></p></div>
        <p><em>there is</em> agrees with the following noun: <em>There are two options</em>, though <em>there’s</em> + plural is common in speech.</p>` },
    { title: 'who and whom',
      html: `
        <p><em>whom</em> is the object form. In present-day English it is largely restricted to formal writing and to the position directly after a preposition:</p>
        <div class="ex"><p lang="en">To whom should I address the letter? <span class="gl">formal</span></p><p lang="en">Who should I address the letter to? <span class="gl">normal</span></p><p lang="en">Who did you meet? <span class="gl">normal; Whom did you meet? is formal</span></p><p lang="en" class="bad">Whom shall I say is calling? <span class="gl">hypercorrect (lecture 0.2)</span></p></div>` },
    { title: 'Singular they',
      html: `
        <p><em>they/them/their</em> with a singular antecedent of unknown or unspecified sex is old: it has been in use since the fourteenth century and was condemned only from the eighteenth century, by grammarians who argued that a plural pronoun cannot take a singular antecedent.</p>
        <div class="ex"><p lang="en">Everyone should bring their laptop. · If a customer complains, ask them for the reference.</p></div>
        <p>Major style guides now accept it. The <em>Chicago Manual of Style</em> recognised <em>they</em> for a specific person who uses it in 2017 and fully endorsed the generic singular <em>they</em> in formal writing in 2024; the Associated Press accepted it in 2017; Merriam-Webster made it its word of the year in 2019.</p>` },
    { title: 'Reflexives',
      html: `
        <p>English reflexives (<em>myself, himself, themselves</em>) are used only when the object is the same as the subject, and many German reflexive verbs have non-reflexive English equivalents: <em>I remember, I hurried, she applied, we met</em>.</p>
        <p><em>each other</em> is reciprocal: <em>They helped each other</em> (not <em>themselves</em>, which would mean each helped him- or herself).</p>` }
  ],

  contrast: `
    <ul>
      <li><strong>du/Sie → you</strong>; the distinction moves to names and politeness formulas.</li>
      <li><strong>man → one / you / they / passive</strong>; register decides.</li>
      <li><strong>es gibt → there is/are</strong>; <em>es</em> as weather subject = <em>it</em>.</li>
      <li><strong>sich → (usually nothing)</strong>: <em>Ich erinnere mich = I remember</em>, not <span class="bad">I remember myself</span>.</li>
      <li><strong>sich = einander → each other</strong>: <em>Sie kennen sich = They know each other.</em></li>
      <li><strong>Gender of pronouns</strong>: German pronouns follow grammatical gender (<em>Der Vertrag … er</em>); English uses <em>it</em> for all things: <span class="bad">The contract … he</span>.</li>
    </ul>`,

  usage: `
    <ul>
      <li><strong><em>whom</em></strong> is in long decline; in speech it is now marked even after prepositions. In formal writing, use it after a preposition and as the object in a relative clause if you like; avoid it where <em>who</em> is the subject.</li>
      <li><strong>Generic <em>he</em></strong> (<em>Every manager should check his figures</em>) was the school norm for two centuries; it is now widely seen as dated, and singular <em>they</em> is the usual replacement. German grammatical gender makes the question different: <em>jeder, der …</em> is grammatically masculine; the debate about gender-fair German is in Unit 8.</li>
      <li><strong>The Du in German workplaces</strong> has spread markedly in the last two decades, partly under the influence of English-speaking corporate culture; it remains a social, not a grammatical, convention, and varies by industry.</li>
    </ul>`,

  pitfalls: `
    <ul>
      <li><span class="bad">I remember me / I am pleased me</span> → <em>I remember; I’m pleased</em>.</li>
      <li><span class="bad">They met themselves at the station.</span> → <em>They met (each other) at the station.</em></li>
      <li><span class="bad">It gives two options.</span> (from <em>es gibt</em>) → <em>There are two options.</em></li>
      <li><span class="bad">The report? He is on your desk.</span> → <em>It’s on your desk.</em></li>
      <li>German: <span class="odd">Wie geht es dir?</span> to a client you address as <em>Sie</em>; once <em>Sie</em> is established, keep it consistently, including <em>Ihnen, Ihr</em>.</li>
    </ul>`,

  latin: `
    <p>Latin has <em>tu</em> (singular) and <em>vos</em> (plural) with no politeness distinction in Classical Latin; the polite plural (<em>vos</em> to one person) appears in late antiquity in addressing emperors and spread through medieval Europe, giving French <em>vous</em>, German <em>Ihr</em> (the older polite form) and English <em>you</em>. German later developed <em>Sie</em> from the third-person plural.</p>`,

  summary: [
    'German du/Sie is grammatical; English you marks distance by names and formulas (thou disappeared in the 17th century).',
    'man → one (formal), you (normal), they (people in general/authorities), or the passive.',
    'es gibt → there is/are; weather es → it.',
    'German reflexive verbs often have non-reflexive English equivalents (sich erinnern → remember); sich = each other → each other.',
    'whom: formal, after prepositions; who is normal in questions; avoid hypercorrect whom.',
    'Singular they: in use since the 14th century, condemned from the 18th, accepted by Chicago (2017, 2024) and AP (2017).'
  ],

  cards: [
    { id: 'man', title: 'man in English', tags: ['man', 'one', 'you', 'they', 'impersonal'], html: `
      <p><strong>one</strong>: formal · <strong>you</strong>: normal · <strong>they</strong>: people/authorities · <strong>passive</strong>: <em>It is said …</em> · <strong>people</strong>: <em>People eat late in Spain.</em></p>` },
    { id: 'reflexive', title: 'Reflexive in German, not in English', tags: ['sich', 'reflexive', 'remember'], html: `
      <p>sich erinnern = remember · sich freuen = be pleased · sich beeilen = hurry · sich bewerben = apply · sich entscheiden = decide · sich treffen = meet · sich kennen = know each other.</p>` },
    { id: 'whom', title: 'who or whom', tags: ['whom', 'who'], html: `
      <p><strong>whom</strong> directly after a preposition in formal writing: <em>to whom</em>. Otherwise <em>who</em> is normal: <em>Who did you meet?</em> Never <em>whom</em> for a subject: <em>Who shall I say is calling?</em></p>` }
  ],

  terms: [
    { en: 'personal pronoun', de: 'Personalpronomen', la: 'pronomen personale' },
    { en: 'reflexive pronoun', de: 'Reflexivpronomen', la: 'reflectere “to bend back”' },
    { en: 'reciprocal pronoun', de: 'Reziprokpronomen', la: 'reciprocus' },
    { en: 'indefinite pronoun', de: 'Indefinitpronomen', la: '' },
    { en: 'dummy subject (expletive)', de: 'Platzhalter-es, expletives es', la: 'explere “to fill up”' },
    { en: 'form of address', de: 'Anredeform', la: '' },
    { en: 'singular they', de: '(kein Gegenstück; generisches Maskulinum)', la: '' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: 'Translate <span lang="de">Ich erinnere mich nicht.</span>', options: ['I don’t remember.', 'I don’t remember myself.', 'I don’t remember me.'], answer: 0, keepOrder: true, explain: '<em>sich erinnern</em> is reflexive in German only.' },
    { id: 'e2', type: 'mc', prompt: 'Translate <span lang="de">Es gibt zwei Möglichkeiten.</span>', options: ['There are two options.', 'It gives two options.', 'There is two options.'], answer: 0, keepOrder: true, explain: '<em>es gibt</em> = <em>there is/are</em>, agreeing with the noun.' },
    { id: 'e3', type: 'mc', prompt: 'They know each other from university.', options: ['Sie kennen sich von der Uni.', 'Sie kennen selbst von der Uni.', 'Sie kennen jeder andere von der Uni.'], answer: 0, keepOrder: true, explain: 'Reciprocal <em>sich</em> (or <em>einander</em>).' },
    { id: 'e4', type: 'mc', prompt: 'Formal written English: <span lang="en">___ should the invoice be addressed?</span>', options: ['To whom', 'To who', 'Whom'], answer: 0, keepOrder: true, explain: 'Directly after a preposition, formal English uses <em>whom</em>. Informal: <em>Who should it be addressed to?</em>' },
    { id: 'e5', type: 'mc', prompt: 'Which is accepted in formal English by current major style guides?', options: ['Each applicant should submit their documents by Friday.', 'Each applicant should submit its documents by Friday.'], answer: 0, keepOrder: true, explain: 'Generic singular <em>they</em> is accepted (Chicago 2024, AP 2017). <em>its</em> is for things.' },
    { id: 'e6', type: 'match', prompt: 'Match <em>man</em> to the best English.', pairs: [['Man sagt, es wird regnen.', 'They say it’s going to rain.'], ['Das macht man nicht.', 'That isn’t done.'], ['Man kann nie wissen.', 'You never know.'], ['Man sollte stets höflich sein.', 'One should always be polite.']], explain: 'Register and meaning decide between <em>they</em>, the passive, <em>you</em> and <em>one</em>.' },
    { id: 'e7', type: 'mc', prompt: 'The contract arrived. <span lang="en">___ is on your desk.</span>', options: ['It', 'He'], answer: 0, keepOrder: true, explain: 'English uses <em>it</em> for things, whatever their German gender.' }
  ]
});
