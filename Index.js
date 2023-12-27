const http = require('http');
const requestListener = function (req, res) {
  res.writeHead(200);
  res.end("hello node");
}

const port = 3000;
const server = http.createServer(requestListener);
console.log('server listening on port: ' + port);
server.listen(3000);