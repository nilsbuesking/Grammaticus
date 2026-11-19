/*
 * Course catalogue: the units, the lecture files written so far, and the lectures still planned.
 * To add a lecture: write content/unit-NN/lecture-MM.js, add it to `lectures` of its unit, remove its title from
 * `planned`, and add the file to CORE in sw.js. The engine (app.js) needs no change.
 */
Grammaticus.setCatalogue({
  units: [
    { id: 'u0', number: 0, title: 'Foundations',
      intro: 'Where the norms come from, who sets them, and the vocabulary for talking about grammar.',
      lectures: ['unit-00/lecture-01.js', 'unit-00/lecture-02.js', 'unit-00/lecture-03.js', 'unit-00/lecture-04.js'],
      check: 'unit-00/check.js',
      planned: [] },
    { id: 'u1', number: 1, title: 'The noun phrase',
      lectures: ['unit-01/lecture-01.js', 'unit-01/lecture-02.js', 'unit-01/lecture-03.js', 'unit-01/lecture-04.js', 'unit-01/lecture-05.js', 'unit-01/lecture-06.js'],
      check: 'unit-01/check.js',
      planned: [] },
    { id: 'u2', number: 2, title: 'The verb',
      lectures: ['unit-02/lecture-01.js', 'unit-02/lecture-02.js', 'unit-02/lecture-03.js', 'unit-02/lecture-04.js', 'unit-02/lecture-05.js', 'unit-02/lecture-06.js', 'unit-02/lecture-07.js', 'unit-02/lecture-08.js', 'unit-02/lecture-09.js', 'unit-02/lecture-10.js', 'unit-02/lecture-11.js', 'unit-02/lecture-12.js', 'unit-02/lecture-13.js', 'unit-02/lecture-14.js'],
      check: 'unit-02/check.js',
      planned: [] },
    { id: 'u3', number: 3, title: 'Small words',
      lectures: ['unit-03/lecture-01.js', 'unit-03/lecture-02.js', 'unit-03/lecture-03.js'],
      check: 'unit-03/check.js',
      planned: [] },
    { id: 'u4', number: 4, title: 'Sentence structure',
      lectures: ['unit-04/lecture-01.js', 'unit-04/lecture-02.js', 'unit-04/lecture-03.js', 'unit-04/lecture-04.js'],
      planned: ['Infinitive and participle clauses', 'Negation', 'Information structure and emphasis'] },
    { id: 'u5', number: 5, title: 'Punctuation', lectures: [],
      planned: ['Principles: grammar against rhythm', 'The German comma I: clauses and lists', 'The German comma II: infinitives, additions, optional commas',
        'The English comma', 'Semicolon, colon, dash, hyphen', 'Quotation marks and the apostrophe'] },
    { id: 'u6', number: 6, title: 'Spelling', lectures: [],
      planned: ['ß and ss, capitalisation', 'Getrennt- und Zusammenschreibung', 'British, American and Oxford spelling'] },
    { id: 'u7', number: 7, title: 'Word formation', lectures: [],
      planned: ['Compounding and derivation', 'Latin roots in German and English'] },
    { id: 'u8', number: 8, title: 'Style and register', lectures: [],
      planned: ['The register spectrum', 'Nominalstil and plain English', 'The passive debate', 'Sentence length and rhythm', 'Zombie rules', 'Rhetorical figures', 'Gender-inclusive language'] },
    { id: 'u9', number: 9, title: 'Change and variation', lectures: [],
      planned: ['Language change in progress', 'Regional varieties: Austria, Switzerland, Britain, America'] }
  ]
});
