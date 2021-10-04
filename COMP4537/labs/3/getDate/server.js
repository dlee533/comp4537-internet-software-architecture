const http = require('http');
const url = require('url');
const util = require('./modules/utils');

http.createServer(function (req, res) {
  const q = url.parse(req.url, true);
  res.writeHead(200, {'Content-Type': 'text/html', 'Access-Control-Allow-Origin': '*'});
  res.end(`<p style="color:blue">Hello ${q.query.name}, What a beautiful day. ${util.getDate()}<p>`);
}).listen(8080);
//change the port number

console.log("server is running and listening");
