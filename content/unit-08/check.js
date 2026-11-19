/*
 * Unit 8: check what you know. Each question names its lecture; missed questions mark lectures “Focus”.
 */
Grammaticus.addCheck('u8', {
  intro: 'Fourteen questions, two per lecture.',
  items: [
    { id: 'c1', lecture: '8.1', type: 'mc', lang: 'en', prompt: 'Close a British letter beginning <em>Dear Ms Weber</em>:', options: ['Yours sincerely', 'Yours faithfully'], answer: 0, keepOrder: true, explain: 'Named addressee: <em>sincerely</em>.' },
    { id: 'c2', lecture: '8.1', type: 'mc', lang: 'en', prompt: 'Most polite written request in British English:', options: ['Could you let me have the figures by Monday?', 'Please give me the figures by Monday.'], answer: 0, keepOrder: true, explain: 'Questions, not imperatives.' },
    { id: 'c3', lecture: '8.2', type: 'mc', lang: 'de', prompt: 'Verbal style for <span lang="de">nach erfolgter Zahlung</span>:', options: ['wenn Sie bezahlt haben', 'nach Durchführung der Zahlung', 'bei Zahlungserfolg'], answer: 0, explain: 'Verb and agent instead of a nominalisation.' },
    { id: 'c4', lecture: '8.2', type: 'mc', lang: 'en', prompt: 'Plain English for <em>A reduction in costs was achieved.</em>', options: ['We reduced costs.', 'Costs were subject to reduction.', 'A cost reduction was effected.'], answer: 0, explain: 'Verb plus agent.' },
    { id: 'c5', lecture: '8.3', type: 'mc', lang: 'en', prompt: 'Which is a passive?', options: ['The contract was signed in May.', 'The contract is ready.', 'There is a contract.'], answer: 0, explain: '<em>be</em> + past participle; “by zombies” works.' },
    { id: 'c6', lecture: '8.3', type: 'mc', prompt: 'Good reason for a passive:', options: ['the agent is unknown or irrelevant', 'to avoid saying who is responsible', 'to sound more official'], answer: 0, explain: 'The other two are what critics object to.' },
    { id: 'c7', lecture: '8.4', type: 'mc', lang: 'de', prompt: 'Easier to read:', options: ['Wir haben die Zahlen geprüft, die Sie geschickt haben.', 'Wir haben die von Ihnen uns gestern geschickten Zahlen geprüft.'], answer: 0, keepOrder: true, explain: 'Short bracket, relative clause after the verb.' },
    { id: 'c8', lecture: '8.4', type: 'mc', lang: 'en', prompt: 'English for <span lang="de">der gestern genehmigte Plan</span>:', options: ['the plan approved yesterday', 'the yesterday approved plan'], answer: 0, keepOrder: true, explain: 'Modifier after the noun.' },
    { id: 'c9', lecture: '8.5', type: 'mc', lang: 'en', prompt: 'Which “rule” is a zombie?', options: ['Never end a sentence with a preposition.', 'Use its for the possessive.', 'Use a capital for days of the week.'], answer: 0, explain: 'Stranding is normal English.' },
    { id: 'c10', lecture: '8.5', type: 'mc', lang: 'de', prompt: '<span lang="de">Die Lösung ist anscheinend einfach.</span> means:', options: ['The solution is apparently (probably) simple.', 'The solution only seems simple (but is not).'], answer: 0, keepOrder: true, explain: '<em>anscheinend</em> = apparently; <em>scheinbar</em> = only seemingly.' },
    { id: 'c11', lecture: '8.6', type: 'mc', prompt: '<em>Not bad at all</em> is an example of:', options: ['litotes', 'chiasmus', 'anaphora'], answer: 0, explain: 'Affirming by denying the opposite.' },
    { id: 'c12', lecture: '8.6', type: 'mc', prompt: '<em>Veni, vidi, vici</em> is a textbook example of:', options: ['tricolon and asyndeton', 'zeugma', 'litotes'], answer: 0, explain: 'Three members, no conjunctions.' },
    { id: 'c13', lecture: '8.7', type: 'mc', lang: 'de', prompt: 'Which form is NOT part of the Amtliches Regelwerk?', options: ['Bürger:innen', 'Bürgerinnen und Bürger', 'Bürger/-innen'], answer: 0, explain: 'Word-internal special characters are not part of the core orthography.' },
    { id: 'c14', lecture: '8.7', type: 'mc', lang: 'en', prompt: 'Which style guides accept singular <em>they</em>?', options: ['AP, Chicago and APA, to varying degrees', 'none', 'only the Oxford English Dictionary'], answer: 0, explain: 'AP 2017 (limited), Chicago 2017/2024, APA 2019.' }
  ]
});
