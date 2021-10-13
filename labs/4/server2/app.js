const http = require('http');
const url = require('url');
const { storeWord, searchWord } = require('./modules/utils');
const port = 3003;

let numRequests = 0;

http.createServer(async (req, res) => {
  const { method } = req;

  res.writeHead(200, {
    'Content-Type': 'text',
    'Access-Control-Allow-Origin': '*'
  })

  if (method === 'GET') {
    const q = url.parse(req.url, true);
    res.end(`Request #${++numRequests}\n${searchWord(q.query.word)}`);
  } else if (method === 'POST') {
    let body = '';
    req.on('data', (chunk) => {
      if (chunk != null) {
        body += chunk
      };
    })
    req.on('end', () => {
      let q = url.parse(body, true);
      res.end(`Request #${++numRequests}\n${storeWord(q.query.word, q.query.definition)}`);
    })
  }

}).listen(port);

console.log('Server is running and listening');
