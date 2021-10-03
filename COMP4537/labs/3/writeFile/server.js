const http = require('http');
const url = require('url');
const util = require('./modules/utils');

http.createServer(function (req, res) {
  const text = url.parse(req.url, true).query.text;
  let isSuccess = false;

  try {
    util.writeFile(text);
    isSuccess = true;
  } catch (err) {
    res.writeHead(400, {'Content-Type': 'text/html', 'Access-Control-Allow-Origin': '*'});
    res.end(err);
  } finally {
    res.writeHead(200, {'Content-Type': 'text/html', 'Access-Control-Allow-Origin': '*'});
    res.end(`successfully written "${text}" to the file`);
  }

}).listen(8888);

console.log("server is running and listening");
