/*
 * Unit 0: check what you know. Each question names the lecture it belongs to (`lecture`); a lecture with a missed
 * question is marked “Focus” on the course page. Item types as in the lectures.
 */
Grammaticus.addCheck('u0', {
  intro: 'Eleven questions. They show which lectures of this unit to read closely and which to skim. Answer from what you know; guessing only hides the gaps.',
  items: [
    { id: 'c1', lecture: '0.1', type: 'mc', prompt: 'When did the German-speaking countries first adopt a common spelling?', options: ['1901/02', '1880', '1748', '1996'], answer: 0, explain: 'The II. Orthographische Konferenz (June 1901) led to a common spelling in 1902. 1880 is the first Duden; 1996 the reform.' },
    { id: 'c2', lecture: '0.1', type: 'mc', prompt: 'Which statement about English is true?', options: ['No official body has ever regulated English spelling or grammar', 'The OED is the official authority for British English', 'English had an academy from 1712 until 1828', 'British spelling is fixed by law for schools'], answer: 0, explain: 'Swift proposed an academy in 1712; it was never founded. All English norms rest on private authority.' },
    { id: 'c3', lecture: '0.2', type: 'mc', prompt: '<em>umgangssprachlich</em> in a German dictionary means …', options: ['usual in everyday language, avoided in formal texts', 'wrong', 'regional', 'outdated'], answer: 0, explain: 'It is a register label, not a verdict of error.' },
    { id: 'c4', lecture: '0.2', type: 'mc', prompt: 'Which is correct standard English?', options: ['between you and me', 'between you and I'], answer: 0, keepOrder: true, explain: 'A preposition takes the object form. “Between you and I” is hypercorrection.' },
    { id: 'c5', lecture: '0.2', type: 'mc', prompt: 'A sentence marked with * in a grammar is …', options: ['ungrammatical', 'informal', 'regional', 'old-fashioned'], answer: 0, explain: '* ungrammatical, ? questionable, % varies between speakers.' },
    { id: 'c6', lecture: '0.3', type: 'mc', prompt: 'In <span lang="de">Gestern war ein guter Tag</span>, the subject is …', options: ['ein guter Tag', 'gestern', 'war', 'there is none'], answer: 0, explain: 'The nominative noun phrase <em>ein guter Tag</em>. <em>Gestern</em> is an adverb used as an adverbial.' },
    { id: 'c7', lecture: '0.3', type: 'mc', prompt: 'How many tenses does German form without an auxiliary verb?', options: ['Two', 'Three', 'Four', 'Six'], answer: 0, explain: 'Präsens and Präteritum. Perfekt, Plusquamperfekt and both futures need <em>haben, sein</em> or <em>werden</em>.' },
    { id: 'c8', lecture: '0.3', type: 'mc', prompt: 'What does <em>Genus verbi</em> mean?', options: ['active and passive (voice)', 'the gender of a noun', 'the tense of a verb', 'the infinitive'], answer: 0, explain: '<em>Genus</em> alone is grammatical gender; <em>Genus verbi</em> is voice.' },
    { id: 'c9', lecture: '0.4', type: 'gap', lang: 'de', prompt: '<span lang="de">Ich habe ___ gestern geholfen.</span> (er)', answers: ['ihm'], cs: true, explain: '<em>helfen</em> takes the dative.' },
    { id: 'c10', lecture: '0.4', type: 'comma', lang: 'de', prompt: 'Set the required commas.', words: ['Der', 'Bericht', 'den', 'du', 'geschrieben', 'hast', 'ist', 'gut.'], commas: [1, 5], explain: 'A relative clause is a subordinate clause and is enclosed in commas: <em>Der Bericht, den du geschrieben hast, ist gut.</em>' },
    { id: 'c11', lecture: '0.4', type: 'mc', prompt: 'Which sentence is correct?', options: ['Walking to the station, I was caught in the rain.', 'Walking to the station, the rain started.'], answer: 0, keepOrder: true, explain: 'In the second, the rain appears to be walking (a dangling participle).' }
  ]
});
