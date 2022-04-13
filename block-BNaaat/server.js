const http = require('http');
const fs = require('fs');
const url = require('url');

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  let parsedUrl = url.parse(req.url);
  let pathname = parsedUrl.pathname;
  console.log(req.method, pathname);

  if (req.method === 'GET' && pathname === '/') {
    fs.createReadStream('./index.html').pipe(res);
  } else if (req.method === 'GET' && pathname === '/about') {
    fs.createReadStream('./about.html').pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end(`<h2>Page Not Found</h2>`);
  }
}

server.listen(5555, 'localhost', () => {
  console.log('Server listning to port 5555');
});