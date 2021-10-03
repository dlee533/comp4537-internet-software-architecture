const fs = require('fs');
const pathToFile = '../../file.txt';

exports.writeFile =
function(text) {
  fs.appendFileSync(pathToFile, text, (err) => {
    if (err) throw err;
  });
  return true;
}
