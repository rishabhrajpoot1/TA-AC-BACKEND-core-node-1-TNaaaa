var url = require("url");
const parsedUrl = url.parse(
  "https://blog.altcampus.io:80/students/register?name=altcampus&gender=male",
  true
);
console.log(parsedUrl);

console.log(parsedUrl.pathname);
console.log(parsedUrl.query);
console.log(parsedUrl.host, parsedUrl.protocol);

const googleParsed = url.parse("https://www.britannica.com/science/flower");
console.log(googleParsed);

console.log(googleParsed.pathname);
console.log(googleParsed.query);
console.log(googleParsed.host, googleParsed.protocol);