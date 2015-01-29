#!/usr/bin/env node

var fs = require("fs"),
    https = require("https");

var options = {
  key: fs.readFileSync('test-key.pem'),
  cert: fs.readFileSync('test-cert.pem')
};

var PORT = 8083;


var handler = function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello HTTPS!\n');
};

var server = https.createServer(options);
server.addListener("request", handler);
server.listen(PORT);
console.log("HTTPS Server listening on:"+PORT);
