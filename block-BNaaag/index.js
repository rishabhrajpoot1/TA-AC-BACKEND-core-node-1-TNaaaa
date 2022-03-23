let fs = require('fs');

fs.readFile('./content.md', (err, file) => {
  console.log(err, file.toString());
});

let result = fs.readFileSync('./content.md', 'utf8');

console.log(result);