/*
 * Unit 2, lecture 1: conjugation. Content file only. German section in German. Checks: CONTENT-CHECKS.md.
 */
Grammaticus.addLecture({
  id: '2.1', unit: 2, number: 1,
  title: 'Strong, weak and irregular verbs',
  subtitle: 'How German and English form their past tenses and participles, and why the two systems look so alike',
  minutes: 30,

  intro: `
    <p>German and English inherited the same two ways of making a past tense: changing the vowel (<em>singen – sang, sing – sang</em>) or adding a suffix with <em>t</em> or <em>d</em> (<em>machte, played</em>). This lecture sets out both systems, the verbs that fall between them, the verbs that are drifting from one to the other, and the forms where even native speakers hesitate.</p>`,

  concept: [
    { title: 'Two ways to the past',
      html: `
        <ul>
          <li><strong>Weak verbs</strong> (<em>schwache Verben</em>) add a suffix containing a dental consonant: German <em>-te</em>, English <em>-ed</em>. <em>machen – machte – gemacht; play – played – played</em>. This “dental preterite” is the hallmark of the Germanic languages.</li>
          <li><strong>Strong verbs</strong> (<em>starke Verben</em>) change the stem vowel. The change is called <strong>ablaut</strong> and is older than Germanic: it goes back to Indo-European. <em>singen – sang – gesungen; sing – sang – sung</em>.</li>
        </ul>
        <p>The weak pattern is the productive one: every new verb is weak. <em>googeln – googelte – gegoogelt; to google – googled</em>. No language has made a new strong verb in centuries; the strong verbs are a closed, slowly shrinking class.</p>` },
    { title: 'Between the two',
      html: `
        <ul>
          <li><strong>Mixed verbs</strong> have a vowel change <em>and</em> the dental suffix: <em>bringen – brachte – gebracht; denken – dachte – gedacht; bring – brought; think – thought</em>. They are a small, very old group, and they mostly match across the two languages.</li>
          <li><strong>Preterite-presents</strong> are verbs whose present tense is historically an old past tense. They are the modal verbs: <em>können, müssen, dürfen, mögen, sollen, wissen</em>; <em>can, must, may, shall</em>. This history explains their oddity: no ending in the third person singular (<em>er kann, she can</em>, not <em>*er kannt, *she cans</em>), because old past tenses had none.</li>
          <li><strong>Suppletive verbs</strong> take forms from different roots: <em>sein – bin – war; be – am – was; go – went</em> (<em>went</em> is the old past of <em>wend</em>).</li>
        </ul>` }
  ],

  german: [
    { title: 'Stammformen',
      html: `
        <p>Ein Verb wird mit drei <strong>Stammformen</strong> gelernt: Infinitiv, Präteritum, Partizip II. Bei starken Verben gehört oft die 2./3. Person Präsens dazu, weil sich dort der Vokal ändert.</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Infinitiv · Präsens</th><th>Präteritum · Partizip II</th></tr></thead>
          <tbody>
            <tr><td>machen<span class="tnote">er macht</span></td><td>machte<span class="tnote">hat gemacht (schwach)</span></td></tr>
            <tr><td>geben<span class="tnote">er gibt</span></td><td>gab<span class="tnote">hat gegeben (stark)</span></td></tr>
            <tr><td>fahren<span class="tnote">er fährt</span></td><td>fuhr<span class="tnote">ist gefahren (stark)</span></td></tr>
            <tr><td>bringen<span class="tnote">er bringt</span></td><td>brachte<span class="tnote">hat gebracht (gemischt)</span></td></tr>
          </tbody></table></div>
        <p>Zwei Vokalwechsel im Präsens der starken Verben betreffen nur die 2. und 3. Person Singular:</p>
        <div class="ex"><p lang="de">e → i/ie: ich gebe, du gibst, er gibt · ich lese, du liest, er liest</p><p lang="de">a → ä, au → äu: ich fahre, du fährst, er fährt · ich laufe, du läufst</p></div>
        <p>Der e/i-Wechsel gilt auch im Imperativ Singular: <em>gib!, lies!, nimm!, sieh!, hilf!</em></p>` },
    { title: 'Die Ablautreihen',
      html: `
        <p>Die starken Verben folgen sieben historischen Reihen. Man muss sie nicht auswendig lernen, aber sie erklären, warum viele Verben gleich gehen:</p>
        <div class="ex">
          <p lang="de">schreiben – schrieb – geschrieben · bleiben, steigen, scheinen</p>
          <p lang="de">fließen – floss – geflossen · bieten, ziehen, frieren</p>
          <p lang="de">singen – sang – gesungen · trinken, finden, binden</p>
          <p lang="de">helfen – half – geholfen · sprechen, nehmen, werfen</p>
          <p lang="de">geben – gab – gegeben · lesen, sehen, treten</p>
          <p lang="de">fahren – fuhr – gefahren · tragen, graben, schlagen</p>
          <p lang="de">fallen – fiel – gefallen · halten, laufen, rufen</p>
        </div>
        <p>Grammatiken zählen im heutigen Deutsch knapp 200 starke und unregelmäßige Grundverben; mit Präfixen (<em>verstehen, bekommen</em>) sind es viele mehr. Das Partizip II der starken Verben endet auf <em>-en</em>, das der schwachen auf <em>-t</em>.</p>` },
    { title: 'Das Partizip II',
      html: `
        <ul>
          <li>Regelfall: <em>ge-</em> + Stamm + <em>-t/-en</em>: <em>gemacht, gesungen</em>.</li>
          <li>Kein <em>ge-</em> bei untrennbaren Präfixen (<em>be-, emp-, ent-, er-, ge-, miss-, ver-, zer-</em>) und bei Verben auf <em>-ieren</em>: <em>bekommen, verstanden, erzählt, studiert, telefoniert</em>.</li>
          <li>Bei trennbaren Verben steht <em>ge-</em> zwischen Partikel und Stamm: <em>angerufen, eingekauft, zurückgegeben</em>.</li>
        </ul>` },
    { title: 'Verben im Übergang',
      html: `
        <p>Starke Verben werden über die Jahrhunderte schwach. Bei einigen sieht man den Wechsel gerade:</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Verb</th><th>heute üblich · älter oder gehoben</th></tr></thead>
          <tbody>
            <tr><td>backen</td><td>backte · buk</td></tr>
            <tr><td>fragen</td><td>fragte · frug (veraltet, landschaftlich)</td></tr>
            <tr><td>melken</td><td>melkte, gemolken · molk</td></tr>
            <tr><td>saugen</td><td>saugte/sog, gesaugt/gesogen</td></tr>
            <tr><td>glimmen</td><td>glimmte/glomm</td></tr>
          </tbody></table></div>
        <p>Bei einigen Verben unterscheiden die beiden Formen <strong>Bedeutungen</strong>, meist intransitiv (stark) gegen transitiv (schwach):</p>
        <div class="ex">
          <p lang="de">Das Bild <u class="k">hing</u> an der Wand. · Ich <u class="k">hängte</u> das Bild an die Wand.</p>
          <p lang="de">Ich <u class="k">erschrak</u>. · Er <u class="k">erschreckte</u> mich.</p>
          <p lang="de">Gott <u class="k">schuf</u> die Welt. · Ich <u class="k">schaffte</u> die Prüfung.</p>
          <p lang="de">Was <u class="k">bewog</u> ihn dazu? · Er <u class="k">bewegte</u> den Arm.</p>
          <p lang="de">Der Sender <u class="k">sendete</u> das Spiel. · Ich <u class="k">sandte</u> ihm einen Brief (auch: sendete).</p>
        </div>` }
  ],

  english: [
    { title: 'Regular verbs',
      html: `
        <p>The regular past and past participle end in <em>-ed</em>, pronounced three ways according to the sound before it:</p>
        <div class="ex"><p lang="en">/t/ after voiceless sounds: walked, stopped, missed</p><p lang="en">/d/ after voiced sounds: played, called, lived</p><p lang="en">/ɪd/ after t and d: wanted, needed</p></div>
        <p>Spelling: a final consonant after a short stressed vowel is doubled (<em>stop – stopped, prefer – preferred</em>). British English also doubles final <em>l</em> after an unstressed vowel (<em>travelled, cancelled</em>); American English does not (<em>traveled, canceled</em>).</p>` },
    { title: 'Irregular verbs',
      html: `
        <p>English has around two hundred irregular verbs in common use, nearly all old strong or mixed verbs. They fall into recognisable patterns:</p>
        <div class="ex">
          <p lang="en">sing – sang – sung · drink, ring, swim</p>
          <p lang="en">write – wrote – written · ride, drive, rise</p>
          <p lang="en">keep – kept – kept · sleep, feel, mean</p>
          <p lang="en">bring – brought – brought · think, buy, seek</p>
          <p lang="en">cut – cut – cut · put, set, hit, let</p>
        </div>
        <p>English has three principal parts like German, but in most irregular verbs two of them have merged (<em>keep – kept – kept</em>), and only a few dozen verbs keep three distinct forms.</p>` },
    { title: 'British and American forms',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th>Verb</th><th>British · American</th></tr></thead>
          <tbody>
            <tr><td>learn, dream, spell, burn</td><td>learnt or learned · learned<span class="tnote">BrE uses both; -t is more British</span></td></tr>
            <tr><td>get</td><td>have got · have gotten<span class="tnote">BrE keeps “gotten” only in fixed phrases (ill-gotten)</span></td></tr>
            <tr><td>dive</td><td>dived · dove or dived</td></tr>
            <tr><td>sneak</td><td>sneaked · snuck or sneaked</td></tr>
            <tr><td>prove</td><td>proved (proven as adjective) · proven</td></tr>
          </tbody></table></div>
        <p>Note the rare movement from weak to strong here: <em>snuck</em> and <em>dove</em> are American innovations of the last two centuries, against the general trend.</p>` },
    { title: 'Person endings',
      html: `
        <p>The only person ending left in English is the <em>-s</em> of the third person singular present: <em>I play, she plays</em>. Modal verbs lack even this (<em>she can, she must</em>), for the historical reason given under Concept.</p>` }
  ],

  contrast: `
    <p>The two systems are cousins, and many verbs line up exactly:</p>
    <div class="ex"><p lang="de">singen – sang – gesungen · trinken – trank – getrunken · finden – fand – gefunden</p><p lang="en">sing – sang – sung · drink – drank – drunk · find – found – found</p><p lang="de">bringen – brachte · denken – dachte</p><p lang="en">bring – brought · think – thought</p></div>
    <p>But the paths have diverged:</p>
    <ul>
      <li>Some verbs are strong in one language and weak in the other: <em>helfen – half</em> but <em>help – helped</em> (older English <em>holp</em>); <em>backen – backte</em> (older <em>buk</em>) but <em>bake – baked</em>; <em>fliegen – flog</em> and <em>fly – flew</em> still both strong.</li>
      <li>German keeps full person endings (<em>ich spiele, du spielst, er spielt, wir spielen, ihr spielt, sie spielen</em>); English keeps one (<em>-s</em>).</li>
      <li>German needs the auxiliary choice <em>haben/sein</em> with the participle (lecture 2.4); English always uses <em>have</em>.</li>
    </ul>
    <p class="contrast">A German speaker can often guess an English irregular form from the German one, and the reverse: if the German verb is strong, the English cognate usually was too.</p>`,

  usage: `
    <ul>
      <li><strong><em>gewunken</em></strong>. The standard participle of <em>winken</em> is <em>gewinkt</em>; <em>gewunken</em> is widespread in speech, by analogy with <em>trinken – getrunken</em>. Dictionaries record it as colloquial or regional. In writing, <em>gewinkt</em> is the safe form.</li>
      <li><strong><em>frug</em></strong>. Once a regional strong past of <em>fragen</em>, now archaic or jocular. Standard: <em>fragte</em>.</li>
      <li><strong>Imperative <em>geb!</em>, <em>les!</em>, <em>nehm!</em></strong>. Common in speech, especially in the west and south; the standard forms are <em>gib!, lies!, nimm!</em> The Duden records the e-forms as colloquial.</li>
      <li><strong>English <em>I have went</em>, <em>I done it</em></strong>: dialectal and non-standard. In edited English the three forms are kept apart.</li>
      <li><strong><em>learnt/learned</em></strong>: both standard in British English. Some British publishers prefer <em>-ed</em> for consistency with American usage, others <em>-t</em>; it is a house-style question.</li>
    </ul>`,

  pitfalls: `
    <ul>
      <li><strong>hängen/hängte.</strong> <em>Ich habe das Bild an die Wand gehängt</em> (transitive, weak), but <em>Das Bild hat an der Wand gehangen</em> (intransitive, strong). The mix-up <span class="bad">Ich habe das Bild gehangen</span> is common.</li>
      <li><strong>erschrecken.</strong> <em>Ich bin erschrocken</em> (I got a fright) against <em>Du hast mich erschreckt</em> (you frightened me).</li>
      <li><strong>The imperative of e/i verbs</strong> in writing: <em>Gib mir Bescheid!</em> not <span class="odd">Geb mir Bescheid!</span></li>
      <li><strong>Spelling in British English</strong>: <em>travelled, cancelled, modelling</em>; a spell-checker set to US English will “correct” them.</li>
      <li><strong>Do not regularise in formal English</strong>: <em>The bell rang</em>, not <span class="bad">The bell rung</span>; <em>I swam</em>, not <span class="odd">I swum</span>.</li>
    </ul>`,

  latin: `
    <p>Latin also has two ways to the perfect, which school grammars call the principal parts (<em>Stammformen</em>, a term German took from Latin teaching): a suffix, like the Germanic weak verbs, and a change in the stem, like the strong verbs.</p>
    <div class="ex"><p lang="la">amo – amavi – amatum (suffix -v-)</p><p lang="la">video – vidi – visum (vowel lengthening)</p><p lang="la">cano – cecini – cantum (reduplication)</p></div>
    <p class="latin">The Germanic weak preterite and the Latin <em>-v-</em> perfect developed independently; the parallel is in the type, not the history. The Germanic ablaut (<em>singen – sang – gesungen</em>), however, does continue an Indo-European vowel alternation that also left traces in Latin and Greek.</p>`,

  summary: [
    'Weak verbs add a dental suffix (machte, played); strong verbs change the vowel (sang). New verbs are always weak.',
    'Mixed verbs do both (brachte, brought); modal verbs are old preterite-presents, hence er kann, she can.',
    'German principal parts: Infinitiv, Präteritum, Partizip II; plus e→i and a→ä in the 2nd/3rd person singular of many strong verbs.',
    'No ge- with untrennbare Präfixe and -ieren; trennbare Verben put ge- inside (angerufen).',
    'Meaning pairs: hing/hängte, erschrak/erschreckte, schuf/schaffte, bewog/bewegte.',
    'British English: learnt/learned both standard, have got (not gotten), travelled with double l.'
  ],

  cards: [
    { id: 'pairs', title: 'German strong/weak meaning pairs', tags: ['hängen', 'erschrecken', 'schaffen', 'bewegen', 'senden'], html: `
      <p><strong>hängen</strong>: hing, gehangen (is hanging) · hängte, gehängt (hang something)<br><strong>erschrecken</strong>: erschrak, ist erschrocken (be frightened) · erschreckte, hat erschreckt (frighten)<br><strong>schaffen</strong>: schuf, geschaffen (create) · schaffte, geschafft (manage)<br><strong>bewegen</strong>: bewog, bewogen (induce) · bewegte, bewegt (move)<br><strong>senden</strong>: sandte/sendete (send) · sendete (broadcast)</p>` },
    { id: 'partizip', title: 'Partizip II without ge-', tags: ['Partizip', 'ge-', 'ieren'], html: `
      <p>No <em>ge-</em> after <em>be-, emp-, ent-, er-, ge-, miss-, ver-, zer-</em> and with <em>-ieren</em>: bekommen, verstanden, erzählt, studiert. Separable verbs: an<strong>ge</strong>rufen.</p>` },
    { id: 'bre-ame-verbs', title: 'British vs American verb forms', tags: ['gotten', 'learnt', 'dove', 'snuck'], html: `
      <p>learnt/learned (BrE both; AmE learned) · have got (BrE) / have gotten (AmE) · dived (BrE) / dove (AmE) · sneaked / snuck (AmE) · travelled (BrE) / traveled (AmE).</p>` }
  ],

  terms: [
    { en: 'strong verb', de: 'starkes Verb', la: '' },
    { en: 'weak verb', de: 'schwaches Verb', la: '' },
    { en: 'mixed verb', de: 'gemischtes Verb', la: '' },
    { en: 'ablaut', de: 'Ablaut', la: '', note: 'Vowel change in strong verbs: singen – sang – gesungen.' },
    { en: 'principal parts', de: 'Stammformen', la: '', note: 'Infinitive, past, past participle.' },
    { en: 'past participle', de: 'Partizip II, Partizip Perfekt', la: 'participium perfecti' },
    { en: 'preterite-present verb', de: 'Präteritopräsens', la: '', note: 'The modal verbs: können, müssen; can, must.' },
    { en: 'suppletion', de: 'Suppletion', la: 'supplere “to fill up”', note: 'Forms from different roots: go – went, sein – war.' },
    { en: 'separable verb', de: 'trennbares Verb', la: '' },
    { en: 'imperative', de: 'Imperativ, Befehlsform', la: 'imperativus' }
  ],

  exercises: [
    { id: 'e1', type: 'gap', lang: 'de', prompt: '<span lang="de">Ich habe das Bild an die Wand ___.</span> (hängen)', answers: ['gehängt'], cs: true, explain: 'Transitive (you hang something): weak, <em>gehängt</em>. <em>Das Bild hat gehangen</em> is intransitive.' },
    { id: 'e2', type: 'gap', lang: 'de', prompt: '<span lang="de">___ mir bitte Bescheid!</span> (geben, Imperativ)', answers: ['Gib'], cs: true, explain: 'e/i-change in the imperative singular: <em>gib!</em> (<em>geb!</em> is colloquial).' },
    { id: 'e3', type: 'mc', lang: 'de', prompt: '<span lang="de">Der Lärm hat mich ___.</span>', options: ['erschreckt', 'erschrocken'], answer: 0, keepOrder: true, explain: 'Transitive (frighten someone): weak, <em>hat erschreckt</em>. <em>Ich bin erschrocken</em> = I got a fright.' },
    { id: 'e4', type: 'mc', lang: 'de', prompt: 'Which participle has no <em>ge-</em>?', options: ['studiert', 'gearbeitet', 'angerufen', 'gesungen'], answer: 0, explain: 'Verbs in <em>-ieren</em> take no <em>ge-</em>.' },
    { id: 'e5', type: 'mc', prompt: 'Which form is standard British English?', options: ['I’ve got a new phone.', 'I’ve gotten a new phone.'], answer: 0, keepOrder: true, explain: 'British English uses <em>have got</em>; <em>gotten</em> is American (and survives in British fixed phrases such as <em>ill-gotten gains</em>).' },
    { id: 'e6', type: 'match', prompt: 'Match the German verb to its English cognate’s past tense.', pairs: [['singen – sang', 'sang'], ['bringen – brachte', 'brought'], ['finden – fand', 'found'], ['helfen – half', 'helped'], ['denken – dachte', 'thought']], explain: 'Strong and mixed verbs mostly match; <em>helfen</em> stayed strong in German while <em>help</em> became weak.' },
    { id: 'e7', type: 'mc', prompt: 'Why is it <em>she can</em> and <em>er kann</em>, without a person ending?', options: ['The modal verbs’ present tense is an old past tense, which had no ending', 'English and German dropped the ending to save time', 'Modal verbs are always irregular in every language', 'Because they are followed by an infinitive'], answer: 0, explain: 'They are “preterite-presents”: old past forms used with present meaning.' },
    { id: 'e8', type: 'gap', lang: 'de', prompt: '<span lang="de">Er ___ zum Abschied.</span> (winken, Perfekt, Standard)', answers: ['hat gewinkt'], explain: 'Standard: <em>hat gewinkt</em>. <em>gewunken</em> is common in speech but colloquial.' }
  ]
});
