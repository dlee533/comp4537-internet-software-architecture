const connection = require('./db');

exports.saveScore = (name, score) => {
  const q = `INSERT INTO score(name, score)\
             values ('${name}', ${score})`;
  return new Promise((res, rej) => {
    connection.query(q, (err, result) => {
      if (err) rej(err);
      res(`${name}:${score} was stored in the DB`);
    })
  })
};

exports.getScores = () => {
  const q = "SELECT * from score";
  return new Promise((res, rej) => {
    connection.query(q, (err, result) => {
      if (err) rej(err);
      res(result)
    })
  })
};
