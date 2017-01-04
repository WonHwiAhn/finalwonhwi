var fs = require('fs');

var data = fs.readFileSync('./test.txt', 'utf8'); //동기식 처리

console.log(data);

fs.writeFile('./output.txt', 'hahahahahha');
