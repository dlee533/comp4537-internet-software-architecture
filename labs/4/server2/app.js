const http = require('http');
const url = require('url');
const { storeWord, searchWord } = require('./modules/utils');
const endpoint = '/api/definitions/';
// const endpoint = '/';

const port = 8083;

let numRequests = 0;

http.createServer(async (req, res) => {
  const { method } = req;
  const q = url.parse(req.url, true);

  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Access-Control-Allow-Origin': '*',
  })

  if (method === 'GET' && q.pathname === endpoint) {
    res.end(`Request #${++numRequests}\n${searchWord(q.query.word)}`);
  } else if (method === 'POST' && q.pathname === endpoint) {
    let body = '';
    req.on('data', (chunk) => {
      if (chunk != null) {
        body += chunk
      };
    })
    req.on('end', () => {
      const bodyQ = url.parse(body, true);
      res.end(`Request #${++numRequests}\n${storeWord(bodyQ.query.word, bodyQ.query.definition)}`);
    })
  }

}).listen(port);

console.log('Server is running and listening');
