/*
 * Unit 4: check what you know. Each question names its lecture; missed questions mark lectures “Focus”.
 */
Grammaticus.addCheck('u4', {
  intro: 'Fourteen questions, two per lecture. They show which lectures to read closely and which to skim.',
  items: [
    { id: 'c1', lecture: '4.1', type: 'order', lang: 'de', prompt: 'Start with <em>Morgen</em>.', tokens: ['Morgen', 'schicke', 'ich', 'Ihnen', 'den', 'Bericht.'], explain: 'One constituent in the Vorfeld, verb second.' },
    { id: 'c2', lecture: '4.1', type: 'mc', lang: 'de', prompt: 'Normal pronoun order:', options: ['Ich gebe es ihm.', 'Ich gebe ihm es.'], answer: 0, keepOrder: true, explain: 'Accusative pronoun before dative pronoun.' },
    { id: 'c3', lecture: '4.2', type: 'mc', prompt: 'Which is correct?', options: ['Can you tell me where the station is?', 'Can you tell me where is the station?'], answer: 0, keepOrder: true, explain: 'Indirect questions: statement order.' },
    { id: 'c4', lecture: '4.2', type: 'mc', prompt: 'Translate <span lang="de">Heute ist der Markt ruhig.</span>', options: ['Today the market is quiet.', 'Today is the market quiet.'], answer: 0, keepOrder: true, explain: 'No inversion after a fronted adverbial in English.' },
    { id: 'c5', lecture: '4.3', type: 'mc', lang: 'de', prompt: 'Which is correct?', options: ['Er las den Bericht, und dann rief er an.', 'Er las den Bericht, und dann rief an.'], answer: 0, keepOrder: true, explain: 'With <em>dann</em> in the Vorfeld, the subject must be repeated.' },
    { id: 'c6', lecture: '4.3', type: 'mc', prompt: 'Best English for <span lang="de">Nachdem er die Zahlen geprüft hatte, unterschrieb er.</span>', options: ['Having checked the figures, he signed.', 'After he the figures checked had, he signed.'], answer: 0, keepOrder: true, explain: 'English compresses with a participle clause.' },
    { id: 'c7', lecture: '4.4', type: 'gap', lang: 'de', prompt: '<span lang="de">Die Kunden, mit ___ wir sprechen, sind zufrieden.</span>', answers: ['denen'], cs: true, explain: 'Dative plural: <em>denen</em>.' },
    { id: 'c8', lecture: '4.4', type: 'mc', prompt: 'Only some staff work remotely:', options: ['Staff who work remotely must log in daily.', 'Staff, who work remotely, must log in daily.'], answer: 0, keepOrder: true, explain: 'Restrictive clause: no commas in English.' },
    { id: 'c9', lecture: '4.5', type: 'mc', prompt: 'Translate <span lang="de">Ich möchte, dass Sie das prüfen.</span>', options: ['I’d like you to check this.', 'I’d like that you check this.'], answer: 0, keepOrder: true, explain: 'Object + to-infinitive.' },
    { id: 'c10', lecture: '4.5', type: 'mc', prompt: 'Which has a dangling participle?', options: ['Having signed the contract, the deal was announced.', 'Having signed the contract, the parties announced the deal.'], answer: 0, keepOrder: true, explain: 'The deal did not sign anything.' },
    { id: 'c11', lecture: '4.6', type: 'mc', lang: 'de', prompt: '<span lang="de">Wir haben ___ Budget dafür.</span>', options: ['kein', 'nicht'], answer: 0, keepOrder: true, explain: 'Noun without article: <em>kein</em>.' },
    { id: 'c12', lecture: '4.6', type: 'mc', prompt: '<span lang="en">You didn’t send it? – ___ (you did)</span>', options: ['Yes, I did.', 'No, I did.'], answer: 0, keepOrder: true, explain: 'English answers by the fact; German <em>doch</em>.' },
    { id: 'c13', lecture: '4.7', type: 'mc', prompt: 'Contrastive focus on the board:', options: ['It was the board that approved it.', 'The board it approved.'], answer: 0, keepOrder: true, explain: 'it-cleft.' },
    { id: 'c14', lecture: '4.7', type: 'mc', prompt: 'More natural:', options: ['It is clear that costs will rise.', 'That costs will rise is clear.'], answer: 0, keepOrder: true, explain: 'Extraposition of the heavy clause.' }
  ]
});
