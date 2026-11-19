/*
 * Unit 6, lecture 3: British, American and Oxford spelling; German national variants and loanwords. German section in German.
 */
Grammaticus.addLecture({
  id: '6.3', unit: 6, number: 3,
  title: 'British, American and Oxford spelling',
  subtitle: 'colour/color, -ise/-ize, licence/license; German variants and the spelling of loanwords',
  minutes: 25,

  intro: `
    <p>English has no spelling authority, but it has two main standards, British and American, and a third British variant, Oxford spelling, that agrees with American on one point and with British on everything else. German has a single official orthography for all German-speaking countries, with a few national peculiarities and a long, largely unsuccessful attempt to Germanise the spelling of loanwords.</p>`,

  concept: `
    <p>Most British–American spelling differences go back to <strong>Noah Webster</strong>, whose <em>American Dictionary of the English Language</em> (1828) adopted simplified spellings, some of which caught on (<em>color, center, defense</em>) and some of which did not (<em>tung</em> for <em>tongue</em>). The British forms are not older in every case: <em>-ize</em> was the usual British spelling for centuries, and <em>-ise</em> spread in Britain later, under French influence.</p>
    <p>A <strong>spelling standard</strong> is a convention, not a fact about the language. British and American forms are equally correct; what matters is consistency within one text and conformity to the house style of the publication.</p>`,

  german: [
    { title: 'Eine Orthografie, drei Länder',
      html: `
        <p>Das Amtliche Regelwerk gilt in Deutschland, Österreich, der Schweiz, Liechtenstein, Südtirol und der Deutschsprachigen Gemeinschaft Belgiens. Unterschiede betreffen vor allem den Wortschatz (<em>Jänner, Paradeiser; Velo, parkieren</em>), kaum die Schreibung. Die wichtigste orthografische Besonderheit: In der Schweiz wird kein ß geschrieben (Lektion 6.1).</p>` },
    { title: 'Fremdwörter: Integration und Rückzug',
      html: `
        <p>Die Reform von 1996 ließ für viele Fremdwörter eingedeutschte Schreibungen zu, in der Hoffnung, dass sie sich durchsetzen. Die meisten taten es nicht. Der Rat für deutsche Rechtschreibung hat sie daher schrittweise wieder gestrichen: <em>Ketschup</em> und <em>Majonäse</em> 2016/17; 2024 unter anderem <em>Jogurt, Spagetti, Tunfisch, Panter, Exposee, Dränage, Polonäse, Kusine, photogen</em>. Richtig ist nur noch <em>Joghurt, Spaghetti, Thunfisch</em> usw.</p>
        <p>Erfolgreich waren dagegen ältere und einzelne neuere Eindeutschungen: <em>Büro</em> (bureau), <em>Frisör/Friseur</em>, <em>Foto</em>, <em>Grafik/Graphik</em>, <em>Delfin/Delphin</em>. 2024 neu zugelassen: <em>Couvert, Façon, Portrait</em> (neben <em>Kuvert, Fasson, Porträt</em>).</p>
        <p class="src">Rat für deutsche Rechtschreibung, Überblick über die Änderungen 2024; Pressemitteilung vom 15.12.2023.</p>` },
    { title: 'Verben aus dem Englischen',
      html: `
        <p class="rule">Aus dem Englischen entlehnte Verben werden deutsch gebeugt: <em>sie jobbt, er hat gechillt, wir haben gemailt, sie hat das Meeting getimt</em>.</p>
        <p>Neu 2024: In zwei Fällen ist beim Partizip II auch die englische Endung <em>-ed</em> zulässig: <em>gelikt / geliked</em> und <em>relaxt / relaxed</em>. Wird das Partizip gebeugt oder gesteigert, gilt nur die deutsche Form: <em>eine gefakte Nachricht; sie ist relaxter als er</em>.</p>
        <p class="src">Amtliches Regelwerk 2024, § 21 (neue Regel).</p>` }
  ],

  english: [
    { title: 'The main differences',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th>British</th><th>American</th></tr></thead>
          <tbody>
            <tr><td>colour, honour, labour</td><td>color, honor, labor<span class="tnote">but BrE glamour, AmE glamor/glamour; both: horror</span></td></tr>
            <tr><td>centre, theatre, metre</td><td>center, theater, meter<span class="tnote">BrE meter = measuring device</span></td></tr>
            <tr><td>travelled, cancelled, traveller</td><td>traveled, canceled, traveler</td></tr>
            <tr><td>fulfil, enrol, skilful</td><td>fulfill, enroll, skillful</td></tr>
            <tr><td>defence, offence, licence (noun)</td><td>defense, offense, license</td></tr>
            <tr><td>practice (noun) / practise (verb)</td><td>practice (both)</td></tr>
            <tr><td>analyse, paralyse</td><td>analyze, paralyze</td></tr>
            <tr><td>programme <span class="tnote">computer program</span></td><td>program</td></tr>
            <tr><td>catalogue, dialogue</td><td>catalog, dialog/dialogue</td></tr>
            <tr><td>cheque, tyre, kerb, grey</td><td>check, tire, curb, gray</td></tr>
            <tr><td>aluminium, sceptical, mould, plough</td><td>aluminum, skeptical, mold, plow</td></tr>
            <tr><td>paediatric, manoeuvre, oestrogen</td><td>pediatric, maneuver, estrogen</td></tr>
            <tr><td>ageing, judgement <span class="tnote">legal: judgment</span></td><td>aging, judgment</td></tr>
          </tbody></table></div>
        <p>A useful British pair: <em>licence, practice, advice</em> are nouns; <em>license, practise, advise</em> are verbs (<em>a driving licence; licensed premises</em>).</p>` },
    { title: 'Oxford spelling: -ize',
      html: `
        <p><strong>Oxford spelling</strong> is British spelling with <em>-ize</em> in verbs derived from the Greek suffix <em>-izein</em>: <em>organize, realize, recognize, organization</em>. It is used by Oxford University Press and the Oxford English Dictionary, by many academic publishers, and by several international organisations, including the United Nations.</p>
        <p>Even in Oxford spelling, some words always end in <em>-ise</em> because <em>-ise</em> is part of the root, not the suffix: <em>advertise, advise, comprise, compromise, despise, devise, enterprise, exercise, improvise, revise, supervise, surprise, televise</em>. And <em>analyse, paralyse</em> keep <em>-yse</em> (Greek <em>lysis</em>, not <em>-izein</em>).</p>
        <p>Most British newspapers, the civil service and many publishers use <em>-ise</em> throughout. Both are correct British spelling; the common belief that <em>-ize</em> is an Americanism is mistaken.</p>
        <p class="src">New Hart’s Rules, ch. 3; Oxford English Dictionary, entry “-ize”.</p>` }
  ],

  contrast: `
    <div class="tablewrap"><table>
      <thead><tr><th>German</th><th>British / American</th></tr></thead>
      <tbody>
        <tr><td>die Organisation</td><td>organisation / organization</td></tr>
        <tr><td>das Programm</td><td>programme / program</td></tr>
        <tr><td>die Analyse, analysieren</td><td>analysis; analyse / analyze</td></tr>
        <tr><td>das Zentrum, das Theater</td><td>centre / center; theatre / theater</td></tr>
        <tr><td>der Scheck</td><td>cheque / check</td></tr>
        <tr><td>skeptisch</td><td>sceptical / skeptical</td></tr>
      </tbody></table></div>
    <p class="contrast">German <em>skeptisch</em> and <em>Programm</em> sit closer to American than to British spelling, which is one reason German writers drift into American forms. A German writer aiming at British English should check <em>-our, -re, -ll-, -ce</em> and <em>programme</em>; spell-checkers set to “English (US)” by default are the usual culprit.</p>`,

  usage: [
    { title: 'What British writers actually do',
      html: `
        <p>British spelling is under steady American influence through software, international business and the internet. Some American forms have become normal in Britain (<em>program</em> for computers; <em>jail</em> instead of <em>gaol</em>; <em>connection</em> instead of <em>connexion</em>), while the core markers (<em>-our, -re, -ll-, -ce/-se</em>) remain stable. Mixed spelling within one document is the commonest fault in practice, not the choice of standard.</p>` },
    { title: 'German loanwords: the norm follows usage',
      html: `
        <p>The withdrawal of <em>Jogurt</em> and <em>Spagetti</em> in 2024 illustrates a principle the Rat has applied since 2004: spellings are admitted or removed on the basis of observed usage in a large text corpus. The reform of 1996 had tried to lead usage; the Rat now follows it. This makes the Amtliches Regelwerk more descriptive than before, though it remains binding for schools and administration.</p>` }
  ],

  pitfalls: `
    <ul>
      <li>Choose British or American (or Oxford) and keep to it; set the spell-checker accordingly.</li>
      <li>Oxford <em>-ize</em> does not extend to <em>advertise, advise, exercise, surprise, analyse</em>.</li>
      <li>British: <em>licence/practice</em> (noun) vs <em>license/practise</em> (verb).</li>
      <li>German: <em>Joghurt, Spaghetti, Thunfisch</em> (the integrated forms were withdrawn in 2024).</li>
      <li>German: <em>gemailt, gechillt</em>; <em>geliked</em> and <em>relaxed</em> only uninflected.</li>
    </ul>`,

  latin: `
    <p>Many British–American differences concern words that came into English from Latin through French: <em>colour</em> (French <em>couleur</em>, Latin <em>color</em>), <em>honour</em> (<em>honor</em>), <em>labour</em> (<em>labor</em>). Webster’s American forms restore the Latin spelling. <em>Centre/center</em> goes back to Latin <em>centrum</em>; <em>defence/defense</em> to Latin <em>defensa</em>, so the American <em>-se</em> is closer to the Latin.</p>`,

  summary: [
    'British and American spelling are equally correct; consistency is what matters.',
    'BrE colour, centre, travelled, fulfil, defence, programme, cheque; AmE color, center, traveled, fulfill, defense, program, check.',
    'BrE noun/verb pairs: licence/license, practice/practise, advice/advise.',
    'Oxford spelling: -ize in organize, realize; but advertise, surprise, exercise, analyse.',
    '-ize is not an Americanism; it has long British usage.',
    'German: one orthography for all German-speaking countries; Switzerland writes no ß.',
    '2024: Jogurt, Spagetti, Tunfisch withdrawn; English verbs inflect as German (gemailt; geliked/gelikt and relaxed/relaxt allowed).'
  ],

  cards: [
    { id: 'bre-ame', title: 'British vs American spelling', tags: ['spelling', 'British', 'American', 'Oxford', 'ize'], html: `
      <p>BrE / AmE: colour/color · centre/center · travelled/traveled · fulfil/fulfill · defence/defense · programme/program · analyse/analyze · cheque/check · grey/gray.<br>Oxford: <em>-ize</em> (organize), but <em>advertise, surprise, analyse</em>.<br>BrE noun/verb: licence/license, practice/practise.</p>` },
    { id: 'fremdwort-2024', title: 'Fremdwörter nach 2024', tags: ['Fremdwort', 'Joghurt', 'Anglizismus', 'gemailt'], html: `
      <p>Nur noch: <em>Joghurt, Spaghetti, Thunfisch, Panther, Exposé, Ketchup, Mayonnaise</em>.<br>Beides: <em>Grafik/Graphik, Delfin/Delphin, Porträt/Portrait</em>.<br>Verben: <em>gemailt, gechillt, getimt</em>; auch <em>geliked, relaxed</em> (ungebeugt).</p>` }
  ],

  terms: [
    { en: 'spelling, orthography', de: 'Rechtschreibung, Orthografie', la: 'Greek orthos “right” + graphein “write”' },
    { en: 'Oxford spelling', de: 'Oxford-Schreibung (britisch mit -ize)', la: '' },
    { en: 'loanword', de: 'Fremdwort, Lehnwort', la: '' },
    { en: 'integrated spelling (of a loanword)', de: 'eingedeutschte (integrierte) Schreibung', la: '' },
    { en: 'national variety', de: 'nationale Varietät (Teutonismus, Austriazismus, Helvetismus)', la: '' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', lang: 'en', prompt: 'Which is consistently British?', options: ['The centre’s programme was cancelled.', 'The center’s programme was cancelled.', 'The centre’s program was canceled.'], answer: 0, explain: '<em>centre, programme, cancelled</em> are all British.' },
    { id: 'e2', type: 'mc', lang: 'en', prompt: 'British English:', options: ['She needs a licence to practise medicine.', 'She needs a license to practice medicine.', 'She needs a licence to practice medicine.'], answer: 0, explain: 'Noun <em>licence</em>, verb <em>practise</em>.' },
    { id: 'e3', type: 'mc', lang: 'en', prompt: 'Which is correct in Oxford spelling?', options: ['organize, advertise, analyse', 'organize, advertize, analyze', 'organise, advertise, analyse'], answer: 0, explain: 'Oxford: <em>-ize</em> for the Greek suffix only; <em>advertise</em> and <em>analyse</em> keep their forms. (The third is standard non-Oxford British.)' },
    { id: 'e4', type: 'mc', prompt: 'Is <em>realize</em> correct British spelling?', options: ['Yes: it is Oxford spelling', 'No: it is American'], answer: 0, keepOrder: true, explain: '<em>-ize</em> has a long British history and is the OUP standard.' },
    { id: 'e5', type: 'mc', lang: 'de', prompt: 'Which is correct since 2024?', options: ['Joghurt', 'Jogurt', 'both'], answer: 0, keepOrder: true, explain: '<em>Jogurt</em> was withdrawn in 2024.' },
    { id: 'e6', type: 'mc', lang: 'de', prompt: 'Which is correct?', options: ['Ich habe dir die Datei gemailt.', 'Ich habe dir die Datei gemailed.'], answer: 0, keepOrder: true, explain: 'German inflection; the <em>-ed</em> option exists only for <em>geliked</em> and <em>relaxed</em>.' },
    { id: 'e7', type: 'mc', lang: 'de', prompt: 'Which is correct?', options: ['eine gefakte Nachricht', 'eine gefakede Nachricht', 'eine gefaked Nachricht'], answer: 0, explain: 'Inflected participle: German form only.' },
    { id: 'e8', type: 'match', prompt: 'Match British and American spelling.', pairs: [['grey', 'gray'], ['tyre', 'tire'], ['kerb', 'curb'], ['plough', 'plow']], explain: 'Common British–American pairs.' }
  ]
});
