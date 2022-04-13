const http = require('http');
const fs = require('fs');
const url = require('url');

// 1
let server1 = http.createServer(handleRequest1);

function handleRequest1(req, res) {
  console.log(req, res);
}

server1.listen(5000, 'localhost', () => {
  console.log('Server listning to port 5000!');
});

// 2
let server2 = http.createServer(handleRequest2);

function handleRequest2(req, res) {
  res.write('My first server in NodeJS!');
  res.end();
}

server2.listen(5100, 'localhost', () => {
  console.log('Server listning to port 5100!');
});

// 3
let server3 = http.createServer(handleRequest3);

function handleRequest3(req, res) {
  console.log(req.headers);
  res.end(req.headers['user-agent']);
}

server3.listen(5555, 'localhost', () => {
  console.log('Server listning to port 5555!');
});

// 4
let server4 = http.createServer(handleRequest4);

function handleRequest4(req, res) {
  console.log(req.url, res.method);
  res.end(req.url + req.method);
}

server4.listen(5566, 'localhost', () => {
  console.log('Server listning to port 5566!');
});

//5
let server5 = http.createServer(handleRequest5);

function handleRequest5(req, res) {
  res.end(JSON.stringify(req.headers));
}

server5.listen(7000, 'localhost', () => {
  console.log('Server listning to port 7000!');
});

//6
let server6 = http.createServer(handleRequest6);

function handleRequest6(req, res) {
  res.statusCode = 202;
  res.end(JSON.stringify(req.headers));
}

server6.listen(3333, 'localhost', () => {
  console.log('Server listning to port 3333!');
});

//7
let server7 = http.createServer(handleRequest7);

function handleRequest7(req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hey Everyone!</h1>');
}

server7.listen(8000, 'localhost', () => {
  console.log('Server listning to port 8000!');
});

//8
let server8 = http.createServer(handleRequest8);

function handleRequest8(req, res) {
  res.writeHead(201, { 'Content-Type': 'text/html' });
  res.end('<h1>Hey Everyone!</h1>');
}

server8.listen(8080, 'localhost', () => {
  console.log('Server listning to port 8080!');
});

//9
let server9 = http.createServer(handleRequest9);

function handleRequest9(req, res) {
  res.writeHead(201, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ success: true, message: 'Welcome to Node.js' }));
}

server9.listen(8888, 'localhost', () => {
  console.log('Server listning to port 8888!');
});

//10
let server10 = http.createServer(handleRequest10);

function handleRequest10(req, res) {
  let parsedUrl = url.parse(req.url);
  let pathname = parsedUrl.pathname;
  if (req.method === 'POST' && pathname === '/index') {
    res.writeHead(201, { 'Content-Type': 'text/html' });
    res.end(`<h2> Poseted for first time</h2>`);
  }
}

server10.listen(5050, 'localhost', () => {
  console.log('Server listning to port 5050!');
});

//11
let server11 = http.createServer(handleRequest11);

function handleRequest11(req, res) {
  let parsedUrl = url.parse(req.url);
  let pathname = parsedUrl.pathname;
  if (req.method === 'GET' && pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Abhishek Singh Rathore`);
  } else if (req.method === 'GET' && pathname === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`<h2>Abhishek Singh Rathore</h2>`);
  } else {
    res.end(`Page Not Found!`);
  }
}

server11.listen(2345, 'localhost', () => {
  console.log('Server listning to port 2345!');
});

//12
let server12 = http.createServer(handleRequest12);

function handleRequest12(req, res) {
  let parsedUrl = url.parse(req.url);
  let pathname = parsedUrl.pathname;
  if (req.method === 'GET' && pathname === '/users') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream('./form.html').pipe(res);
  } else if (req.method === 'POST' && pathname === '/users') {
    res.writeHead(201, { 'Content-Type': 'text/plain' });
    res.end(`Posted for second time.`);
  } else {
    res.end(`Page Not Found!`);
  }
}

server12.listen(2350, 'localhost', () => {
  console.log('Server listning to port 2350!');
});

//13
let server13 = http.createServer(handleRequest13);

function handleRequest13(req, res) {
  let parsedUrl = url.parse(req.url, true);
  let pathname = parsedUrl.pathname;
  console.log(pathname, req.url, parsedUrl.query.email);
}

server13.listen(2010, 'localhost', () => {
  console.log('Server listning to port 2010!');
});