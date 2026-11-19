/*
 * Unit 8, lecture 7: gender-inclusive language. German section in German.
 * Neutral by design: describes forms, official positions and arguments; takes no side.
 */
Grammaticus.addLecture({
  id: '8.7', unit: 8, number: 7,
  title: 'Gender-inclusive language',
  subtitle: 'Forms, official positions in Germany, Austria, Switzerland and the UK, and the arguments on each side',
  minutes: 30,

  intro: `
    <p>Few questions of usage are as politically charged as this one, in German even more than in English. This lecture does not recommend a position. It describes the available forms, what the bodies responsible for the standard and for official texts have decided, and the main arguments and evidence on each side, so that you can recognise the forms and choose deliberately for each context. The positions are current as of late 2026 and continue to change.</p>`,

  concept: `
    <p>The debate turns on the relation between <strong>grammatical gender</strong> (<em>Genus</em>) and <strong>sex or gender identity</strong> (<em>Sexus, Geschlecht</em>). German nouns for persons usually have a masculine form that is also used generically (<em>der Kunde, die Kunden</em> for customers of any sex: the <strong>generic masculine</strong>) and a feminine derived form (<em>die Kundin</em>). English nouns have no grammatical gender; the question arises with pronouns (<em>he, she, they</em>) and with a small number of gendered nouns (<em>chairman, actress</em>).</p>`,

  german: [
    { title: 'Die Formen',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th>Form</th><th>Beispiel</th></tr></thead>
          <tbody>
            <tr><td>generisches Maskulinum</td><td>die Kunden</td></tr>
            <tr><td>Paarform (Doppelnennung)</td><td>Kundinnen und Kunden</td></tr>
            <tr><td>Schrägstrich (im Regelwerk erfasst)</td><td>Kund/-innen</td></tr>
            <tr><td>Neutralisierung</td><td>die Studierenden, die Lehrkräfte, das Personal</td></tr>
            <tr><td>Umformulierung</td><td>alle, die … ; wer …</td></tr>
            <tr><td>Binnen-I</td><td>KundInnen</td></tr>
            <tr><td>Wortinterne Sonderzeichen</td><td>Kund*innen, Kund:innen, Kund_innen</td></tr>
          </tbody></table></div>
        <p>Die ersten fünf Formen entsprechen dem Amtlichen Regelwerk; Binnen-I und Sonderzeichen nicht. Beim Schrägstrich muss die Grammatik beider Teile stimmen (Lektion 5.5).</p>` },
    { title: 'Der Rat für deutsche Rechtschreibung',
      html: `
        <p>Der Rat hat 2018, 2021 und 2023 Stellung genommen. Kern seiner Position:</p>
        <ul>
          <li>Allen Menschen soll mit geschlechtergerechter Sprache begegnet werden.</li>
          <li>Wortinterne Sonderzeichen (Stern, Doppelpunkt, Unterstrich) gehören nicht zum Kernbestand der Orthografie. Sie wurden 2024 nicht in das Regelwerk aufgenommen; ein Ergänzungspassus „Sonderzeichen“ beschreibt sie, ohne sie zu normieren.</li>
          <li>Geschlechtergerechte Texte sollen unter anderem verständlich, lesbar, vorlesbar, grammatisch korrekt, eindeutig und rechtssicher sein und das Erlernen der Schriftsprache nicht erschweren.</li>
          <li>Wie Sonderzeichen in Schulen bewertet werden, entscheidet die Schulpolitik, nicht der Rat.</li>
          <li>Die Entwicklung ist „noch im Fluss“; der Rat beobachtet sie weiter.</li>
        </ul>
        <p class="src">Rat für deutsche Rechtschreibung, Empfehlungen vom 26.3.2021; Beschluss vom 14.7.2023; Erläuterungen vom 15.12.2023.</p>` },
    { title: 'Staatliche Regelungen',
      html: `
                  <p><strong>Deutschland, Länder.</strong> Verbote von Sonderzeichen an Schulen u. a. in Sachsen (zuerst), Schleswig-Holstein (2021) und Sachsen-Anhalt (2023); in Bayern seit April 2024 für Schulen, Hochschulen und Behörden; in Hessen 2024 für die Verwaltung, im Abitur als Fehler gewertet. Andere Länder verweisen auf das Regelwerk ohne ausdrückliches Verbot; einige, etwa Bremen, lassen geschlechtergerechte Schreibungen an Schulen ausdrücklich zu.</p>
          <p><strong>Deutschland, Bund.</strong> 2025 untersagten die Bundesbildungsministerin und der Kulturstaatsminister Sonderzeichen in der offiziellen Kommunikation ihrer Häuser; die Bundesregierung verwendet in ihrer Kommunikation keine Sonderzeichen. Eine gesetzliche Regelung für alle Bundesbehörden gibt es nicht.</p>
          <p><strong>Schweiz.</strong> Weisung der Bundeskanzlei vom 15. Juni 2021: Genderstern, Doppelpunkt, Gender-Gap und Mediopunkt werden in Texten des Bundes nicht verwendet; empfohlen werden Paarformen und geschlechtsneutrale Formen; das generische Maskulinum gilt dort ebenfalls nicht als zulässig.</p>
          <p><strong>Österreich.</strong> Uneinheitlich nach Ressort: Das Bildungsministerium schließt Sonderzeichen in seinen Leitfäden aus; andere Stellen verwenden sie.</p>
` }
  ],

  english: [
    { title: 'Forms in English',
      html: `
        <ul>
          <li><strong>Pronouns</strong>: generic <em>he</em> (traditional, now widely avoided); <em>he or she</em>, <em>s/he</em>; rewording into the plural; <strong>singular <em>they</em></strong> (<em>Each applicant must submit their form</em>), in use since the fourteenth century and now the most common solution.</li>
          <li><strong>Nouns</strong>: neutral job titles (<em>chair, firefighter, police officer, flight attendant</em>); many writers and newspapers now use <em>actor, author, host</em> for all sexes rather than <em>actress, authoress, hostess</em>.</li>
          <li><strong>Non-binary reference</strong>: singular <em>they</em> for a specific person who uses it; neopronouns (<em>xe, ze</em>) exist but are rare.</li>
        </ul>` },
    { title: 'Official positions',
      html: `
        <ul>
          <li><strong>UK legislation</strong>: since a ministerial statement of 8 March 2007, Parliamentary Counsel drafts legislation in gender-neutral language where practicable; its guidance lists singular <em>they</em> among the techniques, alongside repeating the noun and rewording.</li>
          <li><strong>Style guides</strong>: the AP Stylebook (2017) allows singular <em>they</em> in limited cases; the Chicago Manual of Style accepted it for a person who uses it in 2017 and broadened its acceptance in the 18th edition (2024). APA style (2019) endorses it.</li>
          <li>There is no body that regulates English; these positions describe and shape edited usage but bind no one.</li>
        </ul>
        <p class="src">Hansard, Written Ministerial Statement, 8 March 2007; Office of the Parliamentary Counsel, Drafting Guidance; AP Stylebook 2017; Chicago Manual of Style, 17th and 18th eds.</p>` }
  ],

  contrast: `
    <div class="tablewrap"><table>
      <thead><tr><th>German</th><th>English</th></tr></thead>
      <tbody>
        <tr><td>Liebe Kolleginnen und Kollegen</td><td>Dear colleagues</td></tr>
        <tr><td>die Mitarbeitenden / Mitarbeiterinnen und Mitarbeiter</td><td>staff, employees</td></tr>
        <tr><td>jeder Antragsteller / jede Person, die einen Antrag stellt</td><td>every applicant … their</td></tr>
        <tr><td>der Vorsitzende / die Vorsitzende</td><td>the chair</td></tr>
        <tr><td>Studierende</td><td>students</td></tr>
      </tbody></table></div>
    <p class="contrast">Because English nouns lack grammatical gender, most English texts are inclusive without any special device; the issue reduces to pronouns. In German, every noun for persons raises the question, which is one reason the debate is more intense there.</p>`,

  usage: [
    { title: 'Arguments made for inclusive forms',
      html: `
        <ul>
          <li>Psycholinguistic experiments (for example Stahlberg, Sczesny and colleagues for German; Gygax et al. 2008 across German, French and English) find that the generic masculine tends to evoke more male mental representations than pair forms or neutral forms.</li>
          <li>Language should make visible those it refers to; pair forms and neutral forms are established and grammatical.</li>
          <li>Special characters include people who are neither women nor men, whom pair forms do not name.</li>
        </ul>` },
    { title: 'Arguments made against special characters or against changing the generic masculine',
      html: `
        <ul>
          <li>Grammatical gender and sex are different categories; the generic masculine is an established, unmarked form, not a statement about men.</li>
          <li>Special characters are not part of the official orthography, are hard to read aloud, can impair readability and learning (especially for learners and people with reading difficulties), and are often grammatically inconsistent (<em>den Kolleg*innen</em>).</li>
          <li>Surveys in Germany have repeatedly found majorities of respondents rejecting gender characters; critics read state rules as following the official orthography.</li>
        </ul>` },
    { title: 'What is contested',
      html: `
        <p>The experimental findings are widely replicated, but their interpretation (how large the effect is in real reading and whether it justifies particular forms) is disputed. The usage data are also contested: special characters are common in universities, parts of the media and some municipal administrations, and rare in general writing. The state rules are criticised by some as interference in academic and press freedom and welcomed by others as enforcing the official standard. These disagreements are political as much as linguistic; the descriptions above are not a verdict on them.</p>` }
  ],

  pitfalls: `
    <ul>
      <li>Check the context: schools, administration and official texts in Germany, Switzerland and parts of Austria follow the Regelwerk; universities, companies and media set their own rules.</li>
      <li>Pair forms and neutral forms are compatible with the Regelwerk; make sure participles fit (<em>Studierende</em> for people currently studying).</li>
      <li>With the slash, both parts must be grammatical: <em>den Schülerinnen und Schülern</em>, not <em class="bad">den Schüler/-innen</em>.</li>
      <li>English: singular <em>they</em> takes a plural verb (<em>they are</em>) even for one person; <em>themself</em> is used by some writers and accepted by Chicago, <em>themselves</em> is more common.</li>
    </ul>`,

  summary: [
    'German: generic masculine, pair forms, slash, neutral forms and rewording are within the Regelwerk; Binnen-I and *, :, _ are not.',
    'Rat für deutsche Rechtschreibung: inclusive language desirable; special characters not part of the core orthography; school assessment is a matter for school policy.',
    'Several German Länder (Saxony, Schleswig-Holstein, Saxony-Anhalt, Bavaria, Hesse) restrict special characters in schools and/or administration; Swiss federal texts exclude them since 2021.',
    'English: the question concerns pronouns and a few nouns; singular they is accepted by AP, Chicago, APA and UK legislative drafting.',
    'Experimental evidence on the generic masculine is substantial; its interpretation and the right response are contested.'
  ],

  cards: [
    { id: 'gender-forms', title: 'Gender-inclusive forms', tags: ['Gendern', 'geschlechtergerecht', 'singular they', 'Genderstern'], html: `
      <p><strong>Im Regelwerk</strong>: Kundinnen und Kunden · Kund/-innen · Studierende · wer …<br><strong>Nicht im Regelwerk</strong>: KundInnen · Kund*innen · Kund:innen · Kund_innen<br><strong>EN</strong>: singular they; chair, firefighter, actor.</p>` }
  ],

  terms: [
    { en: 'grammatical gender', de: 'Genus', la: 'genus' },
    { en: 'sex, gender', de: 'Sexus, Geschlecht', la: 'sexus' },
    { en: 'generic masculine', de: 'generisches Maskulinum', la: '' },
    { en: 'pair form, doublet', de: 'Paarform, Doppelnennung, Beidnennung', la: '' },
    { en: 'gender-neutral form', de: 'geschlechtsneutrale Form, Neutralisierung', la: '' },
    { en: 'gender star / colon / gap', de: 'Genderstern / Gender-Doppelpunkt / Gender-Gap', la: '' },
    { en: 'singular they', de: 'singuläres they', la: '' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', lang: 'de', prompt: 'Which form is covered by the Amtliches Regelwerk?', options: ['Kolleginnen und Kollegen', 'Kolleg*innen', 'KollegInnen'], answer: 0, explain: 'Pair forms are standard; Binnen-I and special characters are not part of the Regelwerk.' },
    { id: 'e2', type: 'mc', prompt: 'According to the Rat für deutsche Rechtschreibung, who decides how gender characters are marked in schools?', options: ['school policy (the responsible state authorities)', 'the Rat itself', 'each teacher'], answer: 0, explain: 'The Rat states that assessment is a matter for school policy.' },
    { id: 'e3', type: 'mc', prompt: 'Swiss federal texts since the Bundeskanzlei directive of 2021 use:', options: ['pair forms and neutral forms, no gender characters', 'the gender star', 'only the generic masculine'], answer: 0, explain: 'The directive excludes star, colon, gap and mid-dot and also rejects the generic masculine.' },
    { id: 'e4', type: 'mc', lang: 'en', prompt: 'Since 2007, UK legislation is drafted:', options: ['in gender-neutral language where practicable', 'with generic he', 'with he or she throughout'], answer: 0, explain: 'Written Ministerial Statement of 8 March 2007.' },
    { id: 'e5', type: 'mc', lang: 'en', prompt: 'Which is correct with singular <em>they</em>?', options: ['Each applicant must sign their form; they are responsible for it.', 'Each applicant must sign their form; they is responsible for it.'], answer: 0, keepOrder: true, explain: 'Singular <em>they</em> takes plural verb agreement.' },
    { id: 'e6', type: 'mc', lang: 'de', prompt: 'Which is grammatically consistent?', options: ['den Schülerinnen und Schülern', 'den Schüler/-innen'], answer: 0, keepOrder: true, explain: 'Dative plural: <em>Schülern</em> needs its <em>-n</em>.' }
  ]
});
