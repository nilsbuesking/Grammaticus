/*
 * Unit 8, lecture 1: the register spectrum. German section in German.
 */
Grammaticus.addLecture({
  id: '8.1', unit: 8, number: 1,
  title: 'The register spectrum',
  subtitle: 'From “Hochachtungsvoll” to “hdl”: what makes a text formal, and how the two languages signal it',
  minutes: 25,

  intro: `
    <p>Grammar books describe the standard; real texts move along a scale from intimate to ceremonial. Much of what earlier units called “usage” is really register: the Präteritum in writing and the Perfekt in speech, <em>whom</em> in formal English, the genitive against <em>von</em>. This lecture brings these threads together and adds the markers each language uses that have nothing to do with grammar: vocabulary, forms of address, and the conventions of letters and emails.</p>`,

  concept: `
    <p><strong>Register</strong> is the variety of a language chosen for a situation: who is addressed, for what purpose, through which medium. Two models are useful:</p>
    <ul>
      <li>Martin Joos (<em>The Five Clocks</em>, 1961) distinguished five styles: frozen (liturgy, legal formulae), formal, consultative, casual, intimate.</li>
      <li>Peter Koch and Wulf Oesterreicher (1985) separated <strong>medium</strong> (spoken or written) from <strong>conception</strong>: a text message is written but conceptually oral (<em>Sprache der Nähe</em>); a lecture is spoken but conceptually written (<em>Sprache der Distanz</em>). The model is standard in German linguistics and explains why emails and chats sound like speech.</li>
    </ul>
    <p>Register is a scale, not a set of boxes, and each text mixes markers. Getting it wrong is rarely a grammatical error, but it is noticed: too stiff sounds cold or bureaucratic, too casual sounds disrespectful or careless.</p>`,

  german: [
    { title: 'Merkmale des Registers',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th>distanzsprachlich</th><th>nähesprachlich</th></tr></thead>
          <tbody>
            <tr><td>Sie</td><td>du</td></tr>
            <tr><td>Präteritum in Erzählungen</td><td>Perfekt</td></tr>
            <tr><td>Genitiv: das Haus meines Vaters</td><td>von: das Haus von meinem Vater</td></tr>
            <tr><td>wegen des Wetters</td><td>wegen dem Wetter</td></tr>
            <tr><td>Konjunktiv I: Er sagte, er sei krank.</td><td>Er hat gesagt, er ist krank.</td></tr>
            <tr><td>Konjunktiv II: käme, hätte</td><td>würde kommen</td></tr>
            <tr><td>Fremdwort, Nomen: Kommunikation, Durchführung</td><td>Verb: reden, machen</td></tr>
            <tr><td>vollständige Sätze, Verbletzt bei weil</td><td>Ellipsen; weil + Hauptsatz</td></tr>
          </tbody></table></div>
        <p>Das Duden-Wörterbuch kennzeichnet Wörter mit Stilschichten: <em>gehoben</em> (<em>Antlitz, entschlafen</em>), <em>bildungssprachlich</em> (<em>eruieren</em>), <em>umgangssprachlich</em> (<em>kriegen, kapieren</em>), <em>salopp</em> (<em>abhauen</em>), <em>derb</em>, <em>vulgär</em>. Die Grenzen sind fließend und verschieben sich: <em>kriegen</em> ist heute in vielen Texten unauffällig.</p>` },
    { title: 'Briefe und E-Mails',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th>Anrede</th><th>Gruß</th></tr></thead>
          <tbody>
            <tr><td>Sehr geehrte Frau Weber,<span class="tnote">förmlich, Standard im Geschäftsbrief</span></td><td>Mit freundlichen Grüßen</td></tr>
            <tr><td>Guten Tag Frau Weber,</td><td>Freundliche Grüße</td></tr>
            <tr><td>Liebe Frau Weber,<span class="tnote">bekannt, verbindlich</span></td><td>Herzliche Grüße / Viele Grüße</td></tr>
            <tr><td>Hallo Anna,</td><td>Liebe Grüße / LG</td></tr>
          </tbody></table></div>
        <p><em>Hochachtungsvoll</em> gilt heute als veraltet oder distanziert bis abweisend. Die Norm für Geschäftsbriefe beschreibt die DIN 5008; sie regelt Form und Layout, nicht den Ton.</p>` }
  ],

  english: [
    { title: 'Markers of register',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th>formal</th><th>informal</th></tr></thead>
          <tbody>
            <tr><td>Latinate verb: obtain, commence, inquire</td><td>phrasal or Germanic verb: get, start, ask</td></tr>
            <tr><td>no contractions: it is, do not</td><td>it’s, don’t</td></tr>
            <tr><td>whom; preposition fronted: to whom</td><td>who; preposition at the end: who … to</td></tr>
            <tr><td>passive, impersonal: it is recommended</td><td>active, personal: we recommend</td></tr>
            <tr><td>subjunctive: if I were</td><td>if I was</td></tr>
            <tr><td>full forms: telephone, approximately</td><td>phone, about</td></tr>
          </tbody></table></div>
        <p>English has no T/V distinction like <em>du/Sie</em>; distance is expressed through names (<em>Ms Weber</em> or <em>Anna</em>), modal politeness (<em>Could you possibly …</em>) and indirectness (lectures 2.9, 2.11).</p>` },
    { title: 'Letters and emails',
      html: `
        <ul>
          <li><strong>British letter convention</strong>: <em>Dear Sir or Madam</em> → <em>Yours faithfully</em>; <em>Dear Ms Weber</em> → <em>Yours sincerely</em>. American usage has <em>Sincerely</em> for both.</li>
          <li><strong>Emails</strong>: <em>Dear Anna</em> or <em>Hi Anna</em>; close with <em>Best wishes, Kind regards, Best</em>. <em>Kind regards</em> is the safe default in British business email; <em>Cheers</em> is friendly and informal.</li>
          <li>British usage moves to first names quickly, often from the first reply. Using a first name is not as intimate as German <em>du</em>; using <em>Mr/Ms</em> after the other person has switched can sound cold.</li>
        </ul>` }
  ],

  contrast: `
    <div class="tablewrap"><table>
      <thead><tr><th>German</th><th>English (British)</th></tr></thead>
      <tbody>
        <tr><td>Sehr geehrte Frau Weber,</td><td>Dear Ms Weber,</td></tr>
        <tr><td>Mit freundlichen Grüßen</td><td>Yours sincerely / Kind regards</td></tr>
        <tr><td>Könnten Sie mir bitte … schicken?</td><td>Could you send me … , please? / Would you mind sending …?</td></tr>
        <tr><td>Bitte senden Sie mir die Unterlagen.</td><td>Could you send me the documents?</td></tr>
        <tr><td>Wir bitten um Ihr Verständnis.</td><td>We’re sorry for any inconvenience.</td></tr>
      </tbody></table></div>
    <p class="contrast">A German imperative with <em>bitte</em> is polite; the English imperative with <em>please</em> often is not, especially in writing (<em class="odd">Please send me the documents.</em> reads as an order). British English prefers questions and hedges. Conversely, English-style hedging translated into German can sound evasive.</p>`,

  usage: `
    <ul>
      <li><strong>Informalisation.</strong> In both languages, public and business communication has become less formal since the 1970s: more first names and <em>du</em> in companies (especially in tech and retail), shorter letters, fewer formulae. Corpus studies on English (for instance by Douglas Biber) document a long-term shift in written registers towards features of speech; similar observations exist for German, though less systematically documented.</li>
      <li><strong>The corporate du.</strong> Many German companies (IKEA famously, many start-ups) use <em>du</em> internally and in advertising. In official correspondence, banks, law and administration, <em>Sie</em> remains the rule.</li>
      <li><strong>Register is not correctness.</strong> <em>wegen dem</em> is non-standard in formal writing but normal in speech in large parts of the German-speaking area; <em>who</em> for <em>whom</em> is normal in all but formal English. Calling them “wrong” confuses register with grammar.</li>
    </ul>`,

  pitfalls: `
    <ul>
      <li>English: <em>Yours faithfully</em> only after <em>Dear Sir or Madam</em>.</li>
      <li>English: avoid bare imperatives in requests; use <em>Could you …?</em></li>
      <li>German: <em>Hochachtungsvoll</em> only if distance is intended.</li>
      <li>German: no comma after <em>Mit freundlichen Grüßen</em>. English: a comma after <em>Yours sincerely</em> is traditional; many British business letters use open punctuation, with no comma after either salutation or close. Be consistent.</li>
    </ul>`,

  summary: [
    'Register depends on audience, purpose and medium; Koch/Oesterreicher separate medium from conception (Nähe vs Distanz).',
    'German markers: Sie/du, Präteritum, genitive, Konjunktiv I, nouns and Fremdwörter.',
    'English markers: Latinate verbs, no contractions, whom, impersonal passives.',
    'British letters: Dear Sir or Madam / Yours faithfully; Dear Ms Weber / Yours sincerely; emails: Kind regards.',
    'English politeness relies on questions and hedges; German bitte + imperative is polite, English please + imperative often is not.',
    'Register is not correctness: informal forms are not errors in their place.'
  ],

  cards: [
    { id: 'letters', title: 'Letter and email formulae', tags: ['letter', 'email', 'Brief', 'Grußformel', 'Yours sincerely'], html: `
      <p><strong>DE</strong>: Sehr geehrte Frau Weber, … Mit freundlichen Grüßen · Liebe Frau Weber, … Herzliche Grüße.<br><strong>BrE</strong>: Dear Sir or Madam … Yours faithfully · Dear Ms Weber … Yours sincerely · email: Dear/Hi Anna … Kind regards / Best wishes.</p>` }
  ],

  terms: [
    { en: 'register, style level', de: 'Register, Stilebene, Stilschicht', la: '' },
    { en: 'conceptual orality / literacy', de: 'konzeptionelle Mündlichkeit / Schriftlichkeit', la: '' },
    { en: 'T/V distinction', de: 'Duzen und Siezen', la: 'tu / vos' },
    { en: 'hedge, hedging', de: 'Abschwächung, Heckenausdruck', la: '' },
    { en: 'salutation / complimentary close', de: 'Anrede / Grußformel', la: 'salutatio' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', lang: 'en', prompt: 'Close a letter beginning <em>Dear Sir or Madam</em> (British):', options: ['Yours faithfully', 'Yours sincerely', 'Cheers'], answer: 0, explain: 'Unnamed addressee: <em>faithfully</em>.' },
    { id: 'e2', type: 'mc', lang: 'en', prompt: 'Most natural British business request:', options: ['Could you send me the documents by Friday?', 'Please send me the documents by Friday.', 'Send me the documents by Friday, please.'], answer: 0, explain: 'A question is the default polite form; imperatives sound like orders.' },
    { id: 'e3', type: 'mc', lang: 'de', prompt: 'Which is the more formal register?', options: ['Er sagte, er sei verhindert.', 'Er hat gesagt, er ist verhindert.'], answer: 0, keepOrder: true, explain: 'Präteritum and Konjunktiv I mark formal, written German.' },
    { id: 'e4', type: 'mc', lang: 'en', prompt: 'Which is the most formal?', options: ['We will commence the inquiry forthwith.', 'We’ll start looking into it right away.'], answer: 0, keepOrder: true, explain: 'Latinate verbs, no contraction, formal adverb.' },
    { id: 'e5', type: 'mc', prompt: 'In Koch and Oesterreicher’s model, a WhatsApp message is:', options: ['written in medium, oral in conception', 'oral in medium, written in conception', 'written in both'], answer: 0, explain: 'Medium and conception are independent; chats are “Sprache der Nähe”.' },
    { id: 'e6', type: 'mc', lang: 'de', prompt: 'Heute eher veraltet oder distanziert:', options: ['Hochachtungsvoll', 'Mit freundlichen Grüßen', 'Viele Grüße'], answer: 0, explain: '<em>Hochachtungsvoll</em> survives mainly in official or deliberately cool letters.' }
  ]
});
