/*
 * Unit 5, lecture 6: quotation marks and the apostrophe. German section in German.
 */
Grammaticus.addLecture({
  id: '5.6', unit: 5, number: 6,
  title: 'Quotation marks and the apostrophe',
  subtitle: '„…“, ‘…’, “…” · where the comma goes · Hannes’, James’s and Hugo’s Hundestudio',
  minutes: 25,

  intro: `
    <p>Quotation marks look different in every language and every country, and the rules for the punctuation around them differ even between British and American English. The apostrophe is the mark most often misused in both German and English, in opposite directions: German writers add it where German does not want it, under English influence; English writers add it to plurals where English does not want it either.</p>`,

  concept: `
    <p>Quotation marks enclose <strong>direct speech</strong>, <strong>quotations</strong>, and words that are <strong>mentioned</strong> rather than used, or used with distance (“so-called”). The <strong>apostrophe</strong> marks an omission (<em>don’t; geht’s</em>) and, in English, the possessive (<em>the firm’s results</em>). German uses it for the genitive only in a few defined cases.</p>
    <div class="tablewrap"><table>
      <thead><tr><th>Where</th><th>Forms</th></tr></thead>
      <tbody>
        <tr><td>Germany, Austria (general)</td><td>„…“ nested ‚…‘</td></tr>
        <tr><td>German books (often)</td><td>»…« nested ›…‹</td></tr>
        <tr><td>Switzerland, France</td><td>«…» nested ‹…›</td></tr>
        <tr><td>British English (books, most newspapers)</td><td>‘…’ nested “…”</td></tr>
        <tr><td>American English</td><td>“…” nested ‘…’</td></tr>
      </tbody></table></div>`,

  german: [
    { title: 'Anführungszeichen und Satzzeichen',
      html: `
        <p>Die übliche Form ist „…“, in Büchern oft »…«. Anführungen innerhalb einer Anführung erhalten halbe Anführungszeichen: „Er sagte: ‚Morgen‘, und ging.“</p>
        <p class="rule">Folgt der Begleitsatz der direkten Rede, entfällt der Schlusspunkt der Rede, und das Komma steht <strong>nach</strong> dem schließenden Anführungszeichen. Frage- und Ausrufezeichen bleiben erhalten, das Komma steht trotzdem.</p>
        <div class="ex"><p lang="de">„Ich komme gleich wieder“<u class="k">,</u> versicherte sie.</p><p lang="de">„Kommst du mit?“<u class="k">,</u> fragte er.</p><p lang="de">„Das ist“<u class="k">,</u> sagte sie<u class="k">,</u> „nicht mein Problem.“</p><p lang="de">Sie sagte<u class="k">: „Ich</u> komme gleich wieder.“</p></div>
        <p>Wird nur ein Wort oder Satzteil angeführt, steht der Punkt des Gesamtsatzes außerhalb: <em>Er nannte das Ergebnis „unvermeidlich“.</em></p>
        <p class="src">Amtliches Regelwerk 2024, § 79 mit Erläuterungen.</p>` },
    { title: 'Der Apostroph',
      html: `
        <p><strong>Auslassung</strong>: Der Apostroph zeigt ausgelassene Buchstaben an, besonders wenn das Wort sonst schwer lesbar wäre:</p>
        <div class="ex"><p lang="de">’s ist Krieg. In heil’gen Hallen.</p><p lang="de">Wie geht’s? / Wie gehts?</p></div>
        <p>Bei gängigen umgangssprachlichen Formen ist er freigestellt; bei Verschmelzungen von Präposition und Artikel steht er nie: <em>ins, zum, aufs, unterm</em> (<em class="bad">auf’s</em>).</p>
        <p><strong>Genitiv</strong>: Grundsätzlich kein Apostroph: <em>Annas Buch, Goethes Werke, des Autos</em>. Ausnahme: artikellose Namen auf s, ss, ß, x, z, ce, deren Genitiv ohne Endung bleibt:</p>
        <div class="ex"><p lang="de">Hannes’ Vorschlag; Grass’ Romane; Felix’ Fahrrad</p><p lang="de">aber: die Schriften des Aristoteles</p></div>
        <p><strong>Namen von Geschäften und Einrichtungen</strong>: Der Apostroph vor dem Genitiv-s ist zulässig, um die Grundform eines Personennamens zu verdeutlichen; beides ist richtig:</p>
        <div class="ex"><p lang="de">Annas Radlertreff / Anna’s Radlertreff</p><p lang="de">Hugo’s Hundestudio – aber: Hugos Hund ist ein Labrador.</p></div>
        <p>Vor <em>-sch</em> bei Namen: <em>die Grimm’schen Märchen / die grimmschen Märchen</em>.</p>
        <p><strong>Nie</strong> vor dem Plural-s: <em class="bad">Auto’s, CD’s, Info’s</em>.</p>
        <p class="src">Amtliches Regelwerk 2024, § 80 mit Erläuterungen; Handreichung des österreichischen Bildungsministeriums.</p>` }
  ],

  english: [
    { title: 'Quotation marks and punctuation',
      html: `
        <p>British books and most British newspapers use single quotation marks, with double ones inside; American usage is the reverse. Some British newspapers (and much informal writing) use double marks.</p>
        <p>The difference that matters for punctuation:</p>
        <ul>
          <li><strong>American style</strong>: commas and full stops always go <em>inside</em> the closing quotation mark.</li>
          <li><strong>British style</strong> (“logical” punctuation): punctuation goes inside only if it belongs to the quoted material. In dialogue, however, the comma that replaces the speaker’s full stop goes inside.</li>
        </ul>
        <div class="ex"><p lang="en">He called the result ‘inevitable’<u class="k">.</u> <span class="tnote">BrE</span></p><p lang="en">He called the result “inevitable<u class="k">.</u>” <span class="tnote">AmE</span></p><p lang="en">‘I’ll be back soon<u class="k">,</u>’ she said. <span class="tnote">both, with their own marks</span></p><p lang="en">‘Are you coming?’ he asked. <span class="tnote">no comma after ? or !</span></p></div>
        <p>Note the last example: English drops the comma after a question or exclamation mark; German keeps it („Kommst du mit?“, fragte er).</p>
        <p class="src">New Hart’s Rules, ch. 9 (quotations); The Chicago Manual of Style, ch. 6.</p>` },
    { title: 'The apostrophe',
      html: `
        <ul>
          <li><strong>Singular possessive</strong>: <em>the company’s results</em>. Names ending in <em>s</em>: <em>James’s, Charles’s</em> is recommended by New Hart’s Rules; <em>James’</em> is also common. Classical and biblical names traditionally take the apostrophe alone: <em>Socrates’, Jesus’</em>.</li>
          <li><strong>Plural possessive</strong>: <em>the companies’ results; the directors’ report</em>; irregular plurals: <em>children’s, women’s</em>.</li>
          <li><strong>Omission</strong>: <em>don’t, it’s</em> (= it is / it has), <em>’90s</em>.</li>
          <li><strong>No apostrophe</strong>: possessive pronouns (<em>its, yours, theirs</em>); plurals (<em>CDs, the 1990s, MPs</em>). Exception: single letters, for clarity: <em>mind your p’s and q’s</em>.</li>
        </ul>
        <div class="ex"><p lang="en" class="bad">Apple’s 99p a kilo.</p><p lang="en" class="bad">The company and it’s subsidiaries.</p><p lang="en">The company and its subsidiaries.</p></div>
        <p class="src">New Hart’s Rules, ch. 4; Huddleston &amp; Pullum 2002, ch. 20.</p>` }
  ],

  contrast: `
    <div class="tablewrap"><table>
      <thead><tr><th>German</th><th>English</th></tr></thead>
      <tbody>
        <tr><td>„Ich komme“, sagte sie.</td><td>‘I’m coming,’ she said.</td></tr>
        <tr><td>„Kommst du?“, fragte er.</td><td>‘Are you coming?’ he asked.</td></tr>
        <tr><td>Annas Buch</td><td>Anna’s book</td></tr>
        <tr><td>Hannes’ Vorschlag</td><td>James’s proposal</td></tr>
        <tr><td>die 90er-Jahre</td><td>the 1990s, the ’90s</td></tr>
        <tr><td>die CDs</td><td>the CDs</td></tr>
      </tbody></table></div>
    <p class="contrast">German comma after the quotation mark; English (both varieties) before it in dialogue. German keeps the comma after <em>?</em> and <em>!</em>; English drops it.</p>`,

  usage: [
    { title: 'The German genitive apostrophe',
      html: `
        <p>The apostrophe before the genitive <em>-s</em> (<em class="odd">Anna’s Buch</em>) spread in German shop signs from the 1990s and is often blamed on English, although German printing used it in the 18th and 19th centuries too. Under the pre-reform rules it was wrong; the reformed rules tolerated it to make the base form of a personal name clear; the 2024 rules state explicitly that names of businesses and institutions may use it. Outside such names it remains an error: <em>Annas Buch</em>. The colloquial name for the wrong use, <em>Deppenapostroph</em>, shows how strongly many readers feel about it.</p>` },
    { title: 'English: the shop-sign problem',
      html: `
        <p>The “greengrocer’s apostrophe” (<em>apple’s, potatoe’s</em>) is the commonest apostrophe error in English. At the other end, some companies have dropped the apostrophe from their names: the bookseller Waterstone’s became <em>Waterstones</em> in 2012, to some public protest; <em>Barclays</em> and <em>Harrods</em> have long been written without one. Company names follow the company’s own spelling.</p>
        <p><em>its</em> versus <em>it’s</em> is the error most noticed by English readers and among the hardest to eradicate, because the possessive of every noun takes an apostrophe and <em>its</em> does not.</p>` }
  ],

  pitfalls: `
    <ul>
      <li>German: comma after the closing quotation mark: <em>„…“, sagte sie</em> (not <em class="bad">„…,“ sagte sie</em>).</li>
      <li>English: comma inside in dialogue: <em>‘…,’ she said</em>.</li>
      <li>German: no apostrophe in <em>Annas Buch, die CDs, aufs</em>.</li>
      <li>English: <em>its</em> (possessive) vs <em>it’s</em> (it is); <em>the 1990s</em>, not <em class="bad">the 1990’s</em>.</li>
      <li>Typography: use the typographic apostrophe (’), not the straight one (') or an opening mark (‘): <em>’s ist Krieg</em>, not <em class="bad">‘s ist Krieg</em>.</li>
    </ul>`,

  latin: `
    <p>Early medieval scribes marked quotations, especially from the Bible, with the <em>diple</em> (&gt;) in the margin; this is usually named as the ancestor of quotation marks and of the guillemet. <em>Apostrophe</em> comes from Greek <em>apostrophos</em> “turned away”, a mark for an elided vowel. Latin had no possessive apostrophe: the genitive was an ending (<em>liber Annae</em>), as in German <em>Annas Buch</em>.</p>`,

  summary: [
    'German: „…“ (books »…«); British: ‘…’; American: “…”.',
    'German: comma after the closing mark („Ich komme“, sagte sie), even after ? and !.',
    'English dialogue: comma inside (‘I’m coming,’ she said); no comma after ? or !.',
    'British logical punctuation outside dialogue; American always inside.',
    'German genitive without apostrophe (Annas Buch), except names in s-sounds (Hannes’) and, optionally, business names (Hugo’s Hundestudio).',
    'English: James’s (NHR), the companies’, its; never an apostrophe for plurals (CDs, 1990s).'
  ],

  cards: [
    { id: 'quotes', title: 'Quotation marks DE/EN', tags: ['Anführungszeichen', 'quotation marks', 'direkte Rede', 'dialogue'], html: `
      <p><strong>DE</strong>: „Ich komme“, sagte sie. · „Kommst du?“, fragte er. · Sie sagte: „Ich komme.“<br><strong>BrE</strong>: ‘I’m coming,’ she said. · ‘Are you coming?’ he asked. · He called it ‘inevitable’.<br><strong>AmE</strong>: “I’m coming,” she said. · He called it “inevitable.”</p>` },
    { id: 'apostrophe', title: 'Apostrophe DE/EN', tags: ['Apostroph', 'apostrophe', 'Genitiv', 'possessive'], html: `
      <p><strong>DE</strong>: Annas Buch; Hannes’ Vorschlag; Hugo’s Hundestudio (nur Namen von Geschäften); aufs, ins; nie Auto’s.<br><strong>EN</strong>: the firm’s, the firms’, James’s, children’s; its / it’s; CDs, 1990s.</p>` }
  ],

  terms: [
    { en: 'quotation marks, inverted commas', de: 'Anführungszeichen, Gänsefüßchen', la: 'quotare “to mark with numbers”' },
    { en: 'guillemets', de: 'Guillemets, Chevrons', la: '' },
    { en: 'direct speech', de: 'direkte (wörtliche) Rede', la: 'oratio recta' },
    { en: 'reporting clause', de: 'Begleitsatz, Trägersatz', la: '' },
    { en: 'apostrophe', de: 'Apostroph, Auslassungszeichen', la: 'Greek apostrophos' },
    { en: 'possessive', de: 'Possessiv, (sächsischer) Genitiv', la: 'genitivus possessivus' },
    { en: 'greengrocer’s apostrophe', de: 'Deppenapostroph (umgangssprachlich)', la: '' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', lang: 'de', prompt: 'Which is correct German?', options: ['„Ich komme gleich wieder“, versicherte sie.', '„Ich komme gleich wieder,“ versicherte sie.', '„Ich komme gleich wieder.“ versicherte sie.'], answer: 0, explain: 'Comma after the closing quotation mark; the full stop of the speech is dropped.' },
    { id: 'e2', type: 'mc', lang: 'de', prompt: 'Which is correct German?', options: ['„Kommst du mit?“, fragte er.', '„Kommst du mit?“ fragte er.'], answer: 0, keepOrder: true, explain: 'German keeps the comma after a question mark.' },
    { id: 'e3', type: 'mc', lang: 'en', prompt: 'Which is correct British English?', options: ['‘Are you coming?’ he asked.', '‘Are you coming?’, he asked.'], answer: 0, keepOrder: true, explain: 'English drops the comma after ? and !.' },
    { id: 'e4', type: 'mc', lang: 'de', prompt: 'Which is correct?', options: ['Annas Buch', 'Anna’s Buch', 'Annas’ Buch'], answer: 0, explain: 'Genitive without apostrophe; the apostrophe is allowed only in names of businesses.' },
    { id: 'e5', type: 'mc', lang: 'de', prompt: 'Which is correct?', options: ['Hannes’ Vorschlag', 'Hannes’s Vorschlag', 'Hanneses Vorschlag'], answer: 0, explain: 'Names ending in an s-sound take the apostrophe alone in German.' },
    { id: 'e6', type: 'gap', lang: 'en', prompt: 'The company and ___ subsidiaries (possessive of <em>it</em>)', answers: ['its'], cs: true, explain: 'Possessive pronoun, no apostrophe.' },
    { id: 'e7', type: 'mc', lang: 'en', prompt: 'Which follows New Hart’s Rules?', options: ['James’s proposal', 'James proposal', 'Jame’s proposal'], answer: 0, explain: 'NHR recommends ’s after names ending in s; <em>James’</em> is a common alternative.' },
    { id: 'e8', type: 'mc', lang: 'de', prompt: 'Which is correct?', options: ['Wir gehen aufs Land.', 'Wir gehen auf’s Land.'], answer: 0, keepOrder: true, explain: 'No apostrophe in merged preposition + article.' },
    { id: 'e9', type: 'mc', lang: 'en', prompt: 'Which is correct?', options: ['the 1990s', 'the 1990’s'], answer: 0, keepOrder: true, explain: 'Plurals take no apostrophe.' }
  ]
});
