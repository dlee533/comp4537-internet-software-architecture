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
  const { method } = req;

  res.writeHead(200, {
    'Content-Type': 'text',
    'Access-Control-Allow-Origin': '*'
  })

  if (method === 'GET') {
    const q = url.parse(req.url, true);
    console.log(q.pathname.substring(1));
    res.end(`${searchWord(q.pathname.substring(1))}`);
  } else if (method === 'POST') {
    let body = '/?';
    req.on('data', (chunk) => {
      if (chunk != null) {
        body += chunk
      };
    })
    req.on('end', () => {
      let q = url.parse(body, true);
      res.end(`${storeWord(q.query.word, q.query.definition)}`);
    })
  }

}).listen(port);

console.log('Server is running and listening');
