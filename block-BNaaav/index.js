const http = require("http");
const fs = require("fs");

const server = http.createServer(handleRequest);

function handleRequest(req, res) {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    fs.createReadStream("./index.html").pipe(res);
  } else if (req.url === "/about") {
    fs.createReadStream("./about.html").pipe(res);
  } else if (req.url.split(".").pop() === "css") {
    res.setHeader("Content-Type", "text/css");
    fs.createReadStream(`./${req.url}`).pipe(res);
  } else if (
    req.url.split(".").pop() === "jpg" ||
    req.url.split(".").pop() === "png"
  ) {
    res.setHeader("Content-Type", "image/jpg");
    fs.createReadStream(`./${req.url}`).pipe(res);
  } else if (req.url.split(".").pop() === "js") {
    res.setHeader("Content-Type", "text/js");
    fs.createReadStream(`./${req.url}`).pipe(res);
  } else {
    res.statusCode = 404;
    res.end("Page not found");
  }
}

server.listen(3000, () => {
  console.log("Your Server is up and Running On port 3k");
});