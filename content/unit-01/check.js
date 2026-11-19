/*
 * Unit 1: check what you know. Each question names its lecture; missed questions mark lectures “Focus”.
 */
Grammaticus.addCheck('u1', {
  intro: 'Twelve questions, two per lecture. They show which lectures to read closely and which to skim.',
  items: [
    { id: 'c1', lecture: '1.1', type: 'mc', prompt: 'Which is correct?', options: ['Thank you for the information.', 'Thank you for the informations.'], answer: 0, keepOrder: true, explain: '<em>information</em> is uncount.' },
    { id: 'c2', lecture: '1.1', type: 'mc', lang: 'de', prompt: '<span lang="de">___ Gehalt wird monatlich überwiesen.</span>', options: ['Das', 'Der'], answer: 0, keepOrder: true, explain: '<em>das Gehalt</em> = salary; <em>der Gehalt</em> = content.' },
    { id: 'c3', lecture: '1.2', type: 'gap', lang: 'de', prompt: '<span lang="de">Ich habe dem ___ geschrieben.</span> (Präsident)', answers: ['Präsidenten'], cs: true, explain: 'n-declension: <em>dem Präsidenten</em>.' },
    { id: 'c4', lecture: '1.2', type: 'mc', lang: 'de', prompt: 'Correct German:', options: ['Er ist älter als ich.', 'Er ist älter als mich.'], answer: 0, keepOrder: true, explain: 'Nominative after <em>als</em>.' },
    { id: 'c5', lecture: '1.3', type: 'mc', prompt: 'Translate <span lang="de">Die meisten Banken …</span>', options: ['Most banks …', 'The most banks …'], answer: 0, keepOrder: true, explain: 'No article with <em>most</em> in the sense of “the majority”.' },
    { id: 'c6', lecture: '1.3', type: 'mc', prompt: 'Translate <span lang="de">Er ist Steuerberater.</span>', options: ['He is a tax adviser.', 'He is tax adviser.'], answer: 0, keepOrder: true, explain: 'English needs <em>a</em> before a profession.' },
    { id: 'c7', lecture: '1.4', type: 'mc', prompt: 'Translate <span lang="de">Es gibt ein Problem.</span>', options: ['There is a problem.', 'It gives a problem.'], answer: 0, keepOrder: true, explain: '<em>es gibt</em> = <em>there is</em>.' },
    { id: 'c8', lecture: '1.4', type: 'mc', prompt: 'Translate <span lang="de">Ich freue mich darauf.</span>', options: ['I’m looking forward to it.', 'I’m looking myself forward to it.'], answer: 0, keepOrder: true, explain: 'German reflexive verbs are often not reflexive in English.' },
    { id: 'c9', lecture: '1.5', type: 'gap', lang: 'de', prompt: '<span lang="de">Das war ein ___ Ergebnis.</span> (gut)', answers: ['gutes'], cs: true, explain: 'Neuter nominative after <em>ein</em>: strong ending <em>-es</em>.' },
    { id: 'c10', lecture: '1.5', type: 'mc', prompt: 'Translate <span lang="de">ein zweijähriges Projekt</span>', options: ['a two-year project', 'a two-years project'], answer: 0, keepOrder: true, explain: 'Number + noun as adjective: singular, hyphenated.' },
    { id: 'c11', lecture: '1.6', type: 'mc', lang: 'de', prompt: 'Formal German:', options: ['wegen des Streiks', 'wegen dem Streik'], answer: 0, keepOrder: true, explain: '<em>wegen</em> + genitive in the written standard.' },
    { id: 'c12', lecture: '1.6', type: 'mc', prompt: 'Which is correct?', options: ['The bank raised its rates.', 'The bank raised it’s rates.'], answer: 0, keepOrder: true, explain: 'Possessive <em>its</em> has no apostrophe.' }
  ]
});
