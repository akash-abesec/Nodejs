// Node.js is an open-source and cross-platform JavaScript runtime environment.

// Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser.

// The most common example Hello World of Node.js is a web server:====>

const http = require('node:http');  // first include the node.js http module
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
    // The createServer() method of http creates a new HTTP server and returns it.
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});