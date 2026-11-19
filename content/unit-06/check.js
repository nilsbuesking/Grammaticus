/*
 * Unit 6: check what you know. Each question names its lecture; missed questions mark lectures “Focus”.
 */
Grammaticus.addCheck('u6', {
  intro: 'Nine questions, three per lecture. German questions follow the Amtliches Regelwerk 2024; English ones British spelling.',
  items: [
    { id: 'c1', lecture: '6.1', type: 'mc', lang: 'de', prompt: 'Which is correct?', options: ['Er muss außen herum gehen.', 'Er muß außen herum gehen.', 'Er muss aussen herum gehen.'], answer: 0, explain: 'Short vowel: <em>muss</em>; diphthong: <em>außen</em> (outside Switzerland).' },
    { id: 'c2', lecture: '6.1', type: 'mc', lang: 'de', prompt: 'Which is correct?', options: ['Im Übrigen gibt es nichts Neues.', 'Im übrigen gibt es nichts neues.'], answer: 0, keepOrder: true, explain: 'Nominalisations: <em>im Übrigen, nichts Neues</em>.' },
    { id: 'c3', lecture: '6.1', type: 'mc', lang: 'en', prompt: 'Which is correct?', options: ['On Monday we discuss the French market.', 'On monday we discuss the french market.'], answer: 0, keepOrder: true, explain: 'Days and nationality adjectives are capitalised in English.' },
    { id: 'c4', lecture: '6.2', type: 'mc', lang: 'de', prompt: 'Which is correct?', options: ['Wir gehen am Sonntag spazieren.', 'Wir spazierengehen am Sonntag.'], answer: 0, keepOrder: true, explain: 'Verb + verb: separate (<em>spazieren gehen</em>).' },
    { id: 'c5', lecture: '6.2', type: 'mc', lang: 'de', prompt: '“The doctor signed her off sick”:', options: ['Der Arzt hat sie krankgeschrieben.', 'Der Arzt hat sie krank geschrieben.'], answer: 0, keepOrder: true, explain: 'New idiomatic meaning: written together.' },
    { id: 'c6', lecture: '6.2', type: 'mc', lang: 'en', prompt: 'Which is correct?', options: ['We will set up a follow-up meeting.', 'We will setup a follow up meeting.'], answer: 0, keepOrder: true, explain: 'Verb <em>set up</em> (two words); adjective <em>follow-up</em> (hyphenated).' },
    { id: 'c7', lecture: '6.3', type: 'mc', lang: 'en', prompt: 'Which is consistently British?', options: ['The defence analysed the cheque.', 'The defense analyzed the check.', 'The defence analyzed the check.'], answer: 0, explain: 'British: <em>defence, analysed, cheque</em>. (<em>analyze</em> is not Oxford spelling either.)' },
    { id: 'c8', lecture: '6.3', type: 'mc', lang: 'en', prompt: 'Oxford spelling of the verb:', options: ['to recognize, to advertise', 'to recognise, to advertize', 'to recognize, to advertize'], answer: 0, explain: '<em>-ize</em> only for the Greek suffix; <em>advertise</em> always with s.' },
    { id: 'c9', lecture: '6.3', type: 'mc', lang: 'de', prompt: 'Which is correct since 2024?', options: ['Spaghetti mit Thunfisch', 'Spagetti mit Tunfisch'], answer: 0, keepOrder: true, explain: 'The integrated spellings were withdrawn in 2024.' }
  ]
});
