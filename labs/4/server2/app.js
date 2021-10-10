const http = require('http');
const url = require('url');
const { storeWord, searchWord } = require('./modules/utils');
const port = 3003;

// TODO: get params from request to pass to utils functions
// TODO: write more specific condition in if and else if statements
// TODO: better error(code + result) for undefined method in else statement
// TODO: determine whether to validate the request param in client side vs server side vs both
// TODO: determine whether to fine tune cors
http.createServer(async (req, res) => {
  let q = url.parse(req.url, true);
  const { method } = req;
  let result;
  let statusCode = 200;

  try {
      if (method === 'GET') {
      result = `${await searchWord(1)}`;
    } else if (method === 'POST') {
      result = `${await storeWord(1, 2)}`;
    } else {
      throw new Error(400, 'Bad Request');
    }
  } catch(err) {
    statusCode = err.code;
    result = err.message;
  } finally {
    res.writeHead(statusCode, {
      'Content-Type': 'text',
      'Access-Control-Allow-Origin': '*'
    })
    res.end(result);
  }

}).listen(port);

console.log('Server is running and listening');
