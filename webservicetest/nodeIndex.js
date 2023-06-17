const express = require('express');
const app = express();

app.listen(8080);

const http = require('http');
const server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`<h1>Hello Node.js! [${req.method}] ${req.url}</h1>`);
  res.end();
});

server.listen(8081, () => {
  console.log(`Web service listening on port 8080`);
});

app.get('/store/:storeName', (req, res, next) => {
  res.send({name: req.params.storeName});
});