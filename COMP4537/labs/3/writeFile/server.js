const http = require('http');
const url = require('url');
const util = require('./modules/utils');

http.createServer(function (req, res) {
  const text = url.parse(req.url, true).query.text;
  let error = null;

  try {
    util.writeFile(text);
  } catch (err) {
    error = err;
  }

  if (!error) {
    res.writeHead(200, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    res.end(JSON.stringify({
      status: "success",
      text: text
    }));
  } else {
    res.writeHead(400, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    res.end(JSON.stringify({
      type: error.name,
      message: error.message,
      field: error.field
    }));
  }

}).listen(8888);

console.log("server is running and listening");
