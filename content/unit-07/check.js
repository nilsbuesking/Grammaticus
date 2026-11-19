/*
 * Unit 7: check what you know. Each question names its lecture; missed questions mark lectures “Focus”.
 */
Grammaticus.addCheck('u7', {
  intro: 'Eight questions, four per lecture.',
  items: [
    { id: 'c1', lecture: '7.1', type: 'mc', lang: 'de', prompt: 'Gender of <em>Tischlampe</em>?', options: ['die', 'der', 'das'], answer: 0, keepOrder: true, explain: 'The last element (<em>die Lampe</em>) decides.' },
    { id: 'c2', lecture: '7.1', type: 'mc', lang: 'de', prompt: 'Which is correct?', options: ['Sicherheitsrat', 'Sicherheitrat', 'Sicherheitenrat'], answer: 0, explain: 'After <em>-heit</em> always <em>-s-</em>.' },
    { id: 'c3', lecture: '7.1', type: 'mc', lang: 'en', prompt: 'Which is correct?', options: ['a toothbrush', 'a teethbrush'], answer: 0, keepOrder: true, explain: 'First element of a compound: singular.' },
    { id: 'c4', lecture: '7.1', type: 'mc', prompt: '<em>Uni</em> and <em>exam</em> are examples of:', options: ['clipping', 'blending', 'conversion'], answer: 0, explain: 'Shortened forms of longer words.' },
    { id: 'c5', lecture: '7.2', type: 'mc', lang: 'en', prompt: '<span lang="de">Das ist ein seriöses Unternehmen.</span>', options: ['It is a reputable company.', 'It is a serious company.'], answer: 0, keepOrder: true, explain: '<em>seriös</em> = reputable, trustworthy.' },
    { id: 'c6', lecture: '7.2', type: 'mc', lang: 'en', prompt: '<span lang="de">Bitte schicken Sie mir die Quittung.</span>', options: ['Please send me the receipt.', 'Please send me the recipe.'], answer: 0, keepOrder: true, explain: '<em>receipt</em> = Quittung; <em>recipe</em> = Rezept.' },
    { id: 'c7', lecture: '7.2', type: 'mc', prompt: 'Which German word is a calque (Lehnübersetzung)?', options: ['Gewissen', 'Fenster', 'Konzept'], answer: 0, explain: '<em>Gewissen</em> translates <em>conscientia</em>; <em>Fenster</em> is a loanword, <em>Konzept</em> a Fremdwort.' },
    { id: 'c8', lecture: '7.2', type: 'mc', lang: 'en', prompt: 'English for <span lang="de">korrigieren</span>:', options: ['correct', 'korrect', 'corect'], answer: 0, explain: 'English keeps Latin <em>c</em>; the doubled <em>r</em> comes from <em>con- + r-</em>.' }
  ]
});
