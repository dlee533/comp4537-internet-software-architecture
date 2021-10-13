let dictionary = [];

class DictionaryEntry {
  constructor(word, definition) {
    this.word = word;
    this.definition = definition;
  }

  toString() {
    return `${this.word}: ${this.definition}`;
  }
}

exports.storeWord = function(word, definition) {
  const entry = dictionary.find(entry => entry.word === word)
  if (entry) return `'${word}' already exists`
  const newEntry = new DictionaryEntry(word, definition);
  dictionary.push(newEntry);
  return newEntry;
}

exports.searchWord = function(word) {
  const entry = dictionary.find(entry => entry.word === word)
  return entry ? entry : `'${word}' does not exists in the dictionary`;
}
