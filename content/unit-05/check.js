/*
 * Unit 5: check what you know. Each question names its lecture; missed questions mark lectures “Focus”.
 */
Grammaticus.addCheck('u5', {
  intro: 'Twelve questions, two per lecture. Comma questions follow the German rules of 2024 and British house style.',
  items: [
    { id: 'c1', lecture: '5.1', type: 'comma', lang: 'de', prompt: 'Set the required commas.', words: ['Ich', 'frage', 'mich', 'ob', 'das', 'reicht.'], commas: [2], explain: 'Subordinate clause: comma, regardless of pauses.' },
    { id: 'c2', lecture: '5.1', type: 'comma', lang: 'en', prompt: 'Set the required commas (if any).', words: ['I', 'wonder', 'whether', 'that', 'is', 'enough.'], commas: [], explain: 'No comma before <em>whether</em> in English.' },
    { id: 'c3', lecture: '5.2', type: 'comma', lang: 'de', prompt: 'Set the required commas.', words: ['Die', 'Kollegin', 'die', 'gestern', 'anrief', 'ist', 'neu.'], commas: [1, 4], explain: 'Relative clause set off on both sides.' },
    { id: 'c4', lecture: '5.2', type: 'mc', lang: 'de', prompt: 'Which is correct?', options: ['Er ist größer als ich.', 'Er ist größer, als ich.'], answer: 0, keepOrder: true, explain: 'No clause follows <em>als</em>: no comma.' },
    { id: 'c5', lecture: '5.3', type: 'comma', lang: 'de', prompt: 'Set the required commas (rules of 2024).', words: ['Er', 'riet', 'ihr', 'Kontakt', 'mit', 'den', 'Nachbarn', 'zu', 'halten.'], commas: [2], explain: 'Infinitive group: comma obligatory since 2024.' },
    { id: 'c6', lecture: '5.3', type: 'comma', lang: 'de', prompt: 'Set the required commas.', words: ['Herr', 'Meyer', 'hören', 'Sie', 'doch', 'mal', 'zu.'], commas: [1], explain: 'Form of address: comma.' },
    { id: 'c7', lecture: '5.4', type: 'mc', lang: 'en', prompt: 'Which avoids a comma splice?', options: ['Prices rose; demand held up.', 'Prices rose, demand held up.', 'Prices rose, however demand held up.'], answer: 0, explain: 'Two main clauses need a semicolon, full stop or conjunction.' },
    { id: 'c8', lecture: '5.4', type: 'mc', prompt: 'One thousand two hundred and fifty euros and fifty cents in English:', options: ['€1,250.50', '€1.250,50'], answer: 0, keepOrder: true, explain: 'Thousands comma, decimal point.' },
    { id: 'c9', lecture: '5.5', type: 'mc', lang: 'de', prompt: 'Which is correct?', options: ['Mitzubringen sind: zwei Fotos und der Ausweis.', 'Mitzubringen sind: Zwei Fotos und der Ausweis.'], answer: 0, keepOrder: true, explain: 'No complete sentence after the colon: lower case.' },
    { id: 'c10', lecture: '5.5', type: 'mc', lang: 'en', prompt: 'Which is correct?', options: ['a long-term loan', 'a long term-loan', 'a long term loan'], answer: 0, explain: 'Compound modifier before the noun: hyphenated.' },
    { id: 'c11', lecture: '5.6', type: 'mc', lang: 'de', prompt: 'Which is correct German?', options: ['„Das stimmt nicht“, sagte sie.', '„Das stimmt nicht,“ sagte sie.'], answer: 0, keepOrder: true, explain: 'German: comma after the closing quotation mark.' },
    { id: 'c12', lecture: '5.6', type: 'mc', lang: 'de', prompt: 'Which is correct?', options: ['die CDs', 'die CD’s'], answer: 0, keepOrder: true, explain: 'No apostrophe before the plural -s.' }
  ]
});
