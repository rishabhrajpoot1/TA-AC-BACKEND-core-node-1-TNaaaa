const http = require('http');
const url = require('url');

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  let parsedUrl = url.parse(req.url);
  let pathname = parsedUrl.pathname;
  console.log(req.method, req.url, pathname);
  if (req.method === 'GET' && pathname === '/') {
    res.end('Welcome to home page!');
  } else if (req.method === 'GET' && pathname === '/about') {
    res.end('Welcome to about page!');
  } else if (req.method === 'POST' && pathname === '/about') {
    res.end('Welcome to about page!');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('Page Not Found');
  }
}

server.listen(5000, 'localhost', () => {
  console.log('Server listning to port 5000');
});