const http = require('http');
const url = require('url');
const { storeWord, searchWord } = require('./modules/utils');
const endpoint = '/api/definitions/';
// const endpoint = '/';

const port = 8083;

let requestNum = 0;

http.createServer(async (req, res) => {
  const { method } = req;
  const q = url.parse(req.url, true);

  if (q.pathname === endpoint) {

    if (method === 'GET') {
      res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      })
      let resBody = searchWord(q.query.word);
      resBody.requestNum = ++requestNum;
      res.end(JSON.stringify(resBody));
    } else if (method === 'POST') {
    res.writeHead(200, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    })
    let body = '';
    req.on('data', (chunk) => {
      if (chunk != null) {
        body += chunk
      };
    })
    req.on('end', () => {
      const bodyQ = url.parse(body, true);
      let resBody = storeWord(bodyQ.query.word, bodyQ.query.definition);
      resBody.requestNum = ++requestNum;
      res.end(JSON.stringify(resBody));
    })
  } else {
    res.writeHead(405, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    })
    res.send(JSON.stringify({ success: false, message: 'method not allowed', requestNum: ++requestNum }));
  }
}
}).listen(port);

console.log('Server is running and listening');
