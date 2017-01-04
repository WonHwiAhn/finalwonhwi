var fs = require('fs');

fs.readFile('test.txt', 'utf8', function(err, data){ //readFile은 비동기식 처리.
  console.log(data);
});

console.log('읽기 요청..');
