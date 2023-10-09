#!/usr/bin/env node
var http = require('http');

host = '0.0.0.0'
port = 3000

http.createServer(function(req, resp) {

  resp.writeHead(200);
  resp.write("hello")
  resp.write("dasss")
  resp.end();
}).listen(port, host);
