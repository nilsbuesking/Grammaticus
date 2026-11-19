/*
 * Unit 2: check what you know. Each question names its lecture; missed questions mark lectures “Focus”.
 */
Grammaticus.addCheck('u2', {
  intro: 'Fourteen questions, one per lecture. They show which lectures to read closely and which to skim.',
  items: [
    { id: 'c1', lecture: '2.1', type: 'gap', lang: 'de', prompt: '<span lang="de">Ich habe das Bild an die Wand ___.</span> (hängen)', answers: ['gehängt'], cs: true, explain: 'Transitive: weak, <em>gehängt</em>; <em>gehangen</em> is intransitive (<em>Das Bild hat gehangen</em>).' },
    { id: 'c2', lecture: '2.2', type: 'mc', prompt: 'Why is <span lang="en">I have seen him yesterday</span> wrong?', options: ['The present perfect views the event from now; “yesterday” fixes it in finished time', 'Because “see” is irregular', 'It is correct British English'], answer: 0, keepOrder: true, explain: 'Reference time = now (Reichenbach); past time adverbs need the past simple.' },
    { id: 'c3', lecture: '2.3', type: 'mc', prompt: 'You have arranged to meet a client on Monday. You say:', options: ['I’m meeting a client on Monday.', 'I meet a client on Monday.', 'I will meet a client on Monday.'], answer: 0, keepOrder: true, explain: 'Arrangement: present progressive.' },
    { id: 'c4', lecture: '2.4', type: 'mc', lang: 'de', prompt: 'Which verb normally keeps the Präteritum in German conversation?', options: ['sein: Ich war krank.', 'kaufen: Ich kaufte ein Auto.', 'essen: Ich aß Pizza.'], answer: 0, keepOrder: true, explain: 'sein, haben, the modals, wissen, denken, heißen keep the Präteritum in speech.' },
    { id: 'c5', lecture: '2.5', type: 'mc', prompt: 'Translate <span lang="de">Ich wohne seit zehn Jahren in London.</span>', options: ['I have lived in London for ten years.', 'I live in London since ten years.', 'I am living in London since ten years.'], answer: 0, keepOrder: true, explain: 'German Präsens + seit = English present perfect; seit + duration = for.' },
    { id: 'c6', lecture: '2.6', type: 'mc', lang: 'de', prompt: '<span lang="de">Nachdem er gegessen ___, ging er.</span>', options: ['hatte', 'hat', 'aß'], answer: 0, keepOrder: true, explain: 'Präteritum main clause → nachdem + Plusquamperfekt.' },
    { id: 'c7', lecture: '2.7', type: 'mc', prompt: '<span lang="en">When this ___ done, I’ll send it to you.</span>', options: ['is', 'will be', 'will have been'], answer: 0, keepOrder: true, explain: 'Time clause about the future: present.' },
    { id: 'c8', lecture: '2.8', type: 'mc', prompt: 'Which is wrong?', options: ['I’m knowing the answer.', 'I’m thinking about it.', 'She’s having lunch.'], answer: 0, keepOrder: true, explain: '<em>know</em> is stative and takes no progressive.' },
    { id: 'c9', lecture: '2.9', type: 'mc', prompt: 'Attendance is optional:', options: ['You don’t have to attend.', 'You mustn’t attend.'], answer: 0, keepOrder: true, explain: '<em>mustn’t</em> = darf nicht; <em>don’t have to</em> = muss nicht.' },
    { id: 'c10', lecture: '2.10', type: 'gap', lang: 'de', prompt: '<span lang="de">Er ist letzte Woche befördert ___.</span>', answers: ['worden'], cs: true, explain: 'Passive Perfekt: <em>ist … worden</em>.' },
    { id: 'c11', lecture: '2.11', type: 'mc', prompt: '<span lang="en">If I ___ known, I would have come.</span>', options: ['had', 'would have'], answer: 0, keepOrder: true, explain: 'No <em>would</em> in the if-clause.' },
    { id: 'c12', lecture: '2.12', type: 'gap', lang: 'de', prompt: '<span lang="de">Die Sprecherin sagte, das Unternehmen ___ zuversichtlich.</span> (sein)', answers: ['sei'], cs: true, explain: 'Konjunktiv I in reported speech.' },
    { id: 'c13', lecture: '2.13', type: 'mc', prompt: 'Formal: <span lang="en">The board recommends that the dividend ___ increased.</span>', options: ['be', 'will be', 'was'], answer: 0, keepOrder: true, explain: 'Mandative subjunctive (British alternative: should be).' },
    { id: 'c14', lecture: '2.14', type: 'mc', prompt: '<span lang="en">I look forward to ___ from you.</span>', options: ['hearing', 'hear'], answer: 0, keepOrder: true, explain: '<em>to</em> is a preposition: gerund.' }
  ]
});
