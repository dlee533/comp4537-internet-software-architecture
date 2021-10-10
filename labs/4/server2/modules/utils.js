const fs = require('fs');

// TODO: write to file & read from file
// TODO: throw appropriate error in diff cases: 1. conflict(existing word), 2. invalid user input?(determine whether to validate user input in client vs server side), 3. other fs related errors
exports.storeWord = async function(word, definition) {
  return `${word} successfully written to the dictionary`;
}

exports.searchWord = async function(word) {
  return `${word}: some definition`;
}
