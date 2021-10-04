const http = require("http");
const url = require("url");
const fileServer = require("fs");
const path = require("path");

http.createServer(function(request, response) {
    const query = url.parse(request.url, true);
    const fileName = path.basename(query.pathname);
    const filePath = "../../" + fileName;
    fileServer.readFile(filePath, function(error, data) {
        if (error) {
            response.writeHead(404, {'Content-Type': 'text/html', 'Access-Control-Allow-Origin': '*'});
            return response.end(query.pathname + " 404 error - file not found!");
        }
        response.writeHead(200, {"Content-Type": "text/html", 'Access-Control-Allow-Origin': '*'});
        response.write(data);
        return response.end();
    })
}).listen(8888);

console.log("server is running and listening");