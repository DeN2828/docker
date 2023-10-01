#!/usr/bin/env node

var http = require('http');

host = '0.0.0.0'
port = 8080

http.createServer(function(req, resp) {

  resp.writeHead(200);
  resp.write("hello")
  resp.end();
}).listen(port, host);

console.error('Server listening on ' + host + ':' + port)