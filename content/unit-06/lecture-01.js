/*
 * Unit 6, lecture 1: ß and ss, capitalisation. German section in German.
 */
Grammaticus.addLecture({
  id: '6.1', unit: 6, number: 1,
  title: 'ß and ss, capitalisation',
  subtitle: 'The s-rule of 1996, the capital ẞ, nouns and nominalisations; capital letters in English',
  minutes: 30,

  intro: `
    <p>Two areas of German spelling cause most uncertainty for anyone who learnt to write before 1996 or has written mainly English since: the choice between <em>ß</em> and <em>ss</em>, which the reform changed, and capitalisation, which the reform made more systematic but also more permissive. English capitalisation is simpler in principle (proper nouns only) and messier in practice (titles, institutions, headlines).</p>`,

  concept: `
    <p>German orthography marks vowel length only partly, and the <strong>s-spelling</strong> is one of the places where it does: <em>ß</em> after a long vowel or diphthong, <em>ss</em> after a short vowel. Before 1996 the choice depended on position instead (<em>ß</em> at the end of a word or syllable, whatever the vowel), which is why <em>Fluß</em> became <em>Fluss</em> but <em>Fuß</em> stayed <em>Fuß</em>.</p>
    <p><strong>Capitalisation</strong> in German is grammatical: every noun, and every other word used as a noun, takes a capital. In English it is semantic: only names (and words derived from them) take a capital. German is the only major language that still capitalises common nouns; Danish gave it up in 1948.</p>`,

  german: [
    { title: 'ß oder ss',
      html: `
        <p class="rule">Nach langem Vokal und nach Diphthong steht ß, nach kurzem Vokal ss (sofern im Wortstamm kein weiterer Konsonant folgt).</p>
        <div class="tablewrap"><table>
          <thead><tr><th>ß (lang)</th><th>ss (kurz)</th></tr></thead>
          <tbody>
            <tr><td>Fuß, Füße</td><td>Fluss, Flüsse</td></tr>
            <tr><td>Maß, gemäß</td><td>Masse, er muss</td></tr>
            <tr><td>außen, heißen, er weiß<span class="tnote">nach Diphthong</span></td><td>wissen, er wusste</td></tr>
            <tr><td>grüßen, er grüßt</td><td>küssen, er küsst</td></tr>
            <tr><td>schließen, er schließt</td><td>er schloss, das Schloss</td></tr>
          </tbody></table></div>
        <p>Das Wort kann innerhalb einer Wortfamilie wechseln: <em>fließen – floss – Fluss</em>; <em>genießen – genoss – Genuss</em>. Die Konjunktion heißt <em>dass</em> (früher <em>daß</em>), Artikel und Relativpronomen <em>das</em>.</p>
        <p>Ausnahmen mit einfachem s nach kurzem Vokal: <em>bis, das, des, was, Bus, Atlas, Kürbis</em> und die Endung <em>-nis</em> (<em>Ergebnis, aber Ergebnisse</em>).</p>
        <p class="src">Amtliches Regelwerk 2024, Teil A (s-Laute), § 25.</p>` },
    { title: 'Das große ẞ',
      html: `
        <p>Bis 2017 gab es keinen amtlich zugelassenen Großbuchstaben: In Versalien schrieb man <em>SS</em> (<em>STRASSE</em>). Seit 2017 ist das große ẞ zugelassen, seit 2024 steht es in der Regel an erster Stelle:</p>
        <div class="ex"><p lang="de">Straße – STRAẞE – STRASSE</p></div>
        <p>Begründet wurde die Zulassung vor allem mit Namen in Ausweisen: <em>GROSSMANN</em> lässt offen, ob jemand Großmann oder Grossmann heißt.</p>
        <p class="src">Amtliches Regelwerk 2024, § 25 E3; Rat für deutsche Rechtschreibung, Pressemitteilung vom 29.6.2017.</p>` },
    { title: 'Großschreibung: Nomen und Nominalisierungen',
      html: `
        <p class="rule">Großgeschrieben werden Nomen und alle Wörter, die als Nomen gebraucht werden (Nominalisierung). Signal ist meist ein Artikel, eine Präposition mit Artikel oder ein Mengenwort (<em>etwas, nichts, viel, alles</em>).</p>
        <div class="ex"><p lang="de">das Lesen, beim Lesen, zum Lesen</p><p lang="de">etwas Neues, nichts Besonderes, alles Gute</p><p lang="de">im Allgemeinen, im Übrigen, des Weiteren, im Voraus</p><p lang="de">heute Abend, am Montagabend – aber: abends, montags</p><p lang="de">auf Englisch, das Deutsche – aber: die englische Sprache</p></div>
        <p><strong>Kleingeschrieben</strong> bleiben Superlative mit <em>am</em> (<em>am besten</em>), Pronomen und Zahlwörter in vielen Fällen (<em>die beiden, die meisten, der eine, die anderen</em>) und Nomen, die ihre Eigenschaften als Nomen verloren haben: <em>mir ist angst</em>, aber <em>Angst haben</em>; <em>schuld sein</em>, aber <em>Schuld haben</em>.</p>
        <p><strong>Freigestellt</strong> ist die Schreibung in einer Reihe von Wendungen, die nach 1996 umstritten waren: <em>bei Weitem / bei weitem, seit Langem / seit langem, von Neuem / von neuem, recht haben / Recht haben, des Weiteren</em> (nur groß).</p>
        <p class="src">Amtliches Regelwerk 2024, Teil D (Substantive und Substantivierungen).</p>` },
    { title: 'Feste Verbindungen und Namen',
      html: `
        <p>Adjektive in <strong>Eigennamen</strong> werden großgeschrieben: <em>der Stille Ozean, die Französische Revolution, das Rote Kreuz, der Erste Weltkrieg</em>. In <strong>festen Begriffen</strong>, die keine Namen sind, ist die Großschreibung freigestellt: <em>das schwarze/Schwarze Brett, die erste/Erste Hilfe</em>; seit 2024 ausdrücklich auch <em>die innere/Innere Medizin</em>.</p>
        <p>Neu 2024: ritualisierte Ausdrücke mit Verben des Sagens: <em>guten/Guten Tag sagen, hallo/Hallo sagen</em>, aber nur <em>einen guten Tag wünschen</em>.</p>
        <p>Ableitungen auf <em>-er</em> von Ortsnamen: immer groß (<em>Berliner Mauer, Schweizer Käse</em>). Ableitungen auf <em>-isch</em>: klein, außer in Namen (<em>die deutsche Sprache</em>, aber <em>der Deutsche Bundestag</em>). Von Personennamen: <em>das ohmsche Gesetz / das Ohm’sche Gesetz</em>.</p>
        <p>Anrede: <em>Sie, Ihnen, Ihr</em> immer groß; <em>du, dich, dein</em> klein, in Briefen auch groß (<em>Du, Dein</em>).</p>
        <p class="src">Amtliches Regelwerk 2024, Teil D; Überblick über die Änderungen 2024 (zu § 63).</p>` }
  ],

  english: [
    { title: 'What takes a capital',
      html: `
        <ul>
          <li><strong>Proper nouns</strong> and their derivatives: <em>London, Londoner; Germany, German; Shakespearean</em>. Unlike German, adjectives of nationality and language are capitalised: <em>a German car, in English</em>.</li>
          <li><strong>Days, months, holidays</strong>: <em>Monday, November, Christmas</em>; but seasons not: <em>in autumn</em>.</li>
          <li><strong>The pronoun I.</strong></li>
          <li><strong>Titles before a name</strong>: <em>President Macron, Professor Smith</em>; a generic use is lower case: <em>a professor, the French president</em>. British house styles differ on <em>the Prime Minister</em> (specific office) vs <em>the prime minister</em>; New Hart’s Rules allows capitals for a specific holder, many newspapers (The Guardian) prefer lower case.</li>
          <li><strong>Institutions</strong>: <em>Parliament, the Treasury, the Bank of England</em>; generic use lower case: <em>a parliament, the central bank</em>.</li>
        </ul>
        <p class="src">New Hart’s Rules, ch. 5 (capitalization).</p>` },
    { title: 'Titles and headings',
      html: `
        <p>Two systems:</p>
        <ul>
          <li><strong>Title case</strong>: major words capitalised: <em>The Wealth of Nations; Pride and Prejudice</em>. Standard for titles of books, films and works in both British and American usage.</li>
          <li><strong>Sentence case</strong>: only the first word and names capitalised: <em>Bank raises interest rates for third time</em>. Standard for headlines in most British newspapers and for headings in British government and academic writing; American newspapers more often use title case.</li>
        </ul>
        <p>German has no title case: a title is capitalised like a sentence (<em>Die Leiden des jungen Werthers</em>), with nouns capitalised as always.</p>` }
  ],

  contrast: `
    <div class="tablewrap"><table>
      <thead><tr><th>German</th><th>English</th></tr></thead>
      <tbody>
        <tr><td>Wir haben etwas Neues gelernt.</td><td>We learnt something new.</td></tr>
        <tr><td>die englische Sprache, auf Englisch</td><td>the English language, in English</td></tr>
        <tr><td>am Montag, im Herbst</td><td>on Monday, in autumn</td></tr>
        <tr><td>der Präsident, Präsident Macron</td><td>the president, President Macron</td></tr>
        <tr><td>Die Leiden des jungen Werthers</td><td>The Sorrows of Young Werther</td></tr>
        <tr><td>Haben Sie Zeit?</td><td>Do you have time?</td></tr>
      </tbody></table></div>
    <p class="contrast">Typical German errors in English: capitalised common nouns in emphatic positions (<em class="odd">the Company’s Strategy</em>, often found in corporate texts) and lower-case nationality adjectives (<em class="bad">english</em>). Typical English-influenced errors in German: <em class="bad">die Englische Sprache</em>, <em class="bad">etwas neues</em>.</p>`,

  usage: [
    { title: 'ß: rule, history and practice',
      html: `
        <dl class="timeline">
          <dt>1901</dt><dd>Adelung’s rule (named after the 18th-century grammarian): ß at the end of a word or syllable and before consonants, whatever the vowel: <em>Fluß, daß, er muß</em>.</dd>
          <dt>1996</dt><dd>Heyse’s rule (Johann Christian Heyse, early 19th century), already used in Austria in the 19th century: ß only after long vowels and diphthongs: <em>Fluss, dass, er muss</em>.</dd>
          <dt>2017</dt><dd>Capital ẞ admitted as an alternative to SS.</dd>
          <dt>2024</dt><dd>Capital ẞ named first; SS “also possible”.</dd>
        </dl>
        <p>The s-rule is the one part of the 1996 reform that nearly everyone adopted; <em>daß</em> now looks dated. The commonest error is still <em class="bad">das</em> for <em>dass</em> (a grammatical, not a spelling, confusion).</p>
        <p><strong>Switzerland</strong> does not use ß at all: schools in the canton of Zurich stopped teaching it in the 1930s, and the <em>Neue Zürcher Zeitung</em> was the last major Swiss newspaper to give it up, in 1974. Swiss <em>Strasse</em> and <em>Masse</em> are therefore ambiguous (<em>Maße</em> or <em>Masse</em>), and context decides.</p>
        <p>The capital ẞ is little used in practice: keyboards lack it, and most all-caps text still has <em>SS</em>. The 2024 order of the examples is a signal, not yet a description of usage.</p>` },
    { title: 'Capitalisation: where the reform loosened the rule',
      html: `
        <p>The 1996 reform capitalised many nominalisations that had been written small (<em>im Allgemeinen, des Weiteren, heute Abend</em>). Revisions in 2004 and 2006 then permitted both forms in a range of fixed expressions (<em>bei weitem/Weitem, recht/Recht haben</em>), largely in response to objections from writers and newspapers. The result is a system with a clear core and a broad band of tolerated variants. Most publishers follow the Duden’s recommendations within that band (which usually favour one form), so edited usage is more uniform than the rules require.</p>` }
  ],

  pitfalls: `
    <ul>
      <li><em>dass</em> (conjunction) vs <em>das</em> (article, pronoun): test with <em>dieses/welches</em>; if it fits, write <em>das</em>.</li>
      <li>Short vowel + ss even before a consonant in inflected forms: <em>er küsst, du musst, gewusst</em>.</li>
      <li>German: <em>etwas Neues, im Übrigen, heute Abend</em>; <em>abends, am besten</em>.</li>
      <li>English: <em>English, German, Monday</em> capitalised; <em>autumn</em>, <em>the company</em> not.</li>
      <li>English corporate writing over-capitalises (<em class="odd">our Customers, the Board’s Decision</em>); keep capitals for names and defined terms in contracts.</li>
    </ul>`,

  latin: `
    <p>Roman inscriptions were written entirely in capitals (<em>litterae capitales</em>, from <em>caput</em> “head”); lower-case letters (minuscules) developed in late antiquity and the Carolingian period. German noun capitalisation spread in printing in the 16th and 17th centuries, first for important words (God, rulers), then for all nouns. English printers of the 17th and 18th centuries capitalised nouns liberally too, as in the American Declaration of Independence (1776), before the practice was abandoned.</p>`,

  summary: [
    'ß after a long vowel or diphthong (Fuß, außen), ss after a short vowel (Fluss, muss); since 1996.',
    'Word families can switch: fließen – floss – Fluss.',
    'Capital ẞ: admitted 2017, named first since 2024 (STRAẞE / STRASSE). Switzerland uses ss throughout.',
    'German capitalises nouns and nominalisations: etwas Neues, im Allgemeinen, heute Abend.',
    'Many fixed expressions allow both: bei weitem/Weitem, das schwarze/Schwarze Brett, guten/Guten Tag sagen.',
    'English: capitals for names, nationalities, languages, days, months; not seasons. Title case for titles, sentence case for most British headlines.'
  ],

  cards: [
    { id: 'ss-sz', title: 'ß or ss', tags: ['ß', 'ss', 'Eszett', 'dass'], html: `
      <p><strong>ß</strong> nach langem Vokal/Diphthong: <em>Fuß, Maß, außen, grüßen</em>.<br><strong>ss</strong> nach kurzem Vokal: <em>Fluss, muss, dass, küsst</em>.<br>Groß: <em>STRAẞE</em> oder <em>STRASSE</em>. Schweiz: nur ss.</p>` },
    { id: 'gross-klein', title: 'Großschreibung: Kurzregeln', tags: ['Großschreibung', 'Kleinschreibung', 'capitalisation', 'Nominalisierung'], html: `
      <p>Groß: <em>etwas Neues, beim Lesen, im Übrigen, heute Abend, auf Englisch, Sie</em>.<br>Klein: <em>abends, am besten, die beiden, englisch</em> (Adjektiv).<br>Beides: <em>bei weitem/Weitem, recht/Recht haben, schwarze/Schwarze Brett</em>.</p>` }
  ],

  terms: [
    { en: 'sharp s, eszett', de: 'Eszett, scharfes S', la: '' },
    { en: 'capital letter, upper case', de: 'Großbuchstabe, Versal', la: 'littera capitalis' },
    { en: 'lower case', de: 'Kleinbuchstabe, Gemeine', la: 'minuscula' },
    { en: 'all caps', de: 'Versalschreibung', la: '' },
    { en: 'nominalisation (in spelling)', de: 'Nominalisierung, Substantivierung', la: '' },
    { en: 'title case / sentence case', de: '(im Deutschen keine Entsprechung)', la: '' },
    { en: 'diphthong', de: 'Diphthong, Zwielaut', la: 'Greek diphthongos “two sounds”' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', lang: 'de', prompt: 'Which is correct?', options: ['der Fluss', 'der Fluß'], answer: 0, keepOrder: true, explain: 'Short vowel: ss (since 1996).' },
    { id: 'e2', type: 'mc', lang: 'de', prompt: 'Which is correct?', options: ['der Fuß', 'der Fuss'], answer: 0, keepOrder: true, explain: 'Long vowel: ß (outside Switzerland).' },
    { id: 'e3', type: 'mc', lang: 'de', prompt: 'Which is correct?', options: ['Sie genoss den Abend.', 'Sie genoß den Abend.'], answer: 0, keepOrder: true, explain: '<em>genoss</em> has a short vowel, although <em>genießen</em> has a long one.' },
    { id: 'e4', type: 'gap', lang: 'de', prompt: '<span lang="de">Ich hoffe, ___ es klappt.</span>', answers: ['dass'], cs: true, explain: 'Conjunction: <em>dass</em>.' },
    { id: 'e5', type: 'mc', lang: 'de', prompt: 'Which is correct?', options: ['Wir wünschen alles Gute.', 'Wir wünschen alles gute.'], answer: 0, keepOrder: true, explain: 'Nominalised adjective after <em>alles</em>: capital.' },
    { id: 'e6', type: 'mc', lang: 'de', prompt: 'Which is correct?', options: ['Wir treffen uns heute Abend.', 'Wir treffen uns heute abend.'], answer: 0, keepOrder: true, explain: 'Since 1996: <em>heute Abend</em>; but <em>abends</em>.' },
    { id: 'e7', type: 'mc', lang: 'de', prompt: 'Which is correct?', options: ['die englische Sprache', 'die Englische Sprache'], answer: 0, keepOrder: true, explain: 'Adjectives in <em>-isch</em> are lower case in German unless part of a name.' },
    { id: 'e8', type: 'mc', lang: 'en', prompt: 'Which is correct?', options: ['We met in autumn to discuss the English market.', 'We met in Autumn to discuss the english market.'], answer: 0, keepOrder: true, explain: 'Seasons lower case; nationality adjectives capitalised.' },
    { id: 'e9', type: 'mc', prompt: 'Which spellings of “Straße” in capitals are correct under the 2024 rules?', options: ['STRAẞE and STRASSE', 'only STRASSE', 'only STRAẞE'], answer: 0, explain: 'Both; ẞ is named first since 2024.' }
  ]
});
