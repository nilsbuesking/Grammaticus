/*
 * Unit 3: check what you know. Each question names its lecture; missed questions mark lectures “Focus”.
 */
Grammaticus.addCheck('u3', {
  intro: 'Nine questions, three per lecture. They show which lectures to read closely and which to skim.',
  items: [
    { id: 'c1', lecture: '3.1', type: 'gap', lang: 'de', prompt: '<span lang="de">Ich lege die Unterlagen auf ___ Schreibtisch.</span>', answers: ['den'], cs: true, explain: 'Direction: accusative.' },
    { id: 'c2', lecture: '3.1', type: 'mc', prompt: 'Translate <span lang="de">Das hängt vom Markt ab.</span>', options: ['That depends on the market.', 'That depends from the market.', 'That hangs from the market.'], answer: 0, keepOrder: true, explain: '<em>abhängen von</em> = <em>depend on</em>.' },
    { id: 'c3', lecture: '3.1', type: 'mc', prompt: 'British English: <span lang="en">What are you doing ___ the weekend?</span>', options: ['at', 'in', 'by'], answer: 0, keepOrder: true, explain: 'BrE <em>at the weekend</em>; AmE <em>on the weekend</em>.' },
    { id: 'c4', lecture: '3.2', type: 'mc', prompt: 'Translate <span lang="de">eventuell</span>', options: ['possibly', 'eventually'], answer: 0, keepOrder: true, explain: 'False friend: <em>eventually</em> = schließlich.' },
    { id: 'c5', lecture: '3.2', type: 'mc', prompt: 'Which is correct?', options: ['I like the proposal very much.', 'I like very much the proposal.'], answer: 0, keepOrder: true, explain: 'No adverb between verb and object.' },
    { id: 'c6', lecture: '3.2', type: 'mc', prompt: 'Best English for <span lang="de">Bist du etwa krank?</span>', options: ['You’re not ill, are you?', 'Are you about ill?'], answer: 0, keepOrder: true, explain: '<em>etwa</em> expects “no”: a negative statement with a tag.' },
    { id: 'c7', lecture: '3.3', type: 'mc', prompt: 'Which is correct English?', options: ['Costs rose; therefore, prices increased.', 'Costs rose, therefore prices increased.'], answer: 0, keepOrder: true, explain: 'A conjunctive adverb cannot join two clauses with a comma.' },
    { id: 'c8', lecture: '3.3', type: 'mc', lang: 'de', prompt: '<span lang="de">Ich weiß nicht, ___ das reicht.</span>', options: ['ob', 'wenn'], answer: 0, keepOrder: true, explain: 'Indirect yes/no question: <em>ob</em>.' },
    { id: 'c9', lecture: '3.3', type: 'mc', lang: 'de', prompt: 'Written standard German:', options: ['…, weil ich keine Zeit habe.', '…, weil ich habe keine Zeit.'], answer: 0, keepOrder: true, explain: 'In writing, <em>weil</em> sends the verb to the end; V2 is spoken grammar.' }
  ]
});
