const connection = require('./modules/db');

const scoreDrop = "DROP TABLE IF EXISTS score";
const scoreTable = "CREATE TABLE score (\
                    id int(11) AUTO_INCREMENT,\
                    name varchar(255),\
                    score int(11),\
                    PRIMARY KEY(id))";

const queryArr = [scoreDrop, scoreTable];

for (let i = 0; i < queryArr.length; i++) {
  connection.query(queryArr[i], (err, res) => {
    if (err) throw err;
    console.log(res);
  })
}

sql.end();
