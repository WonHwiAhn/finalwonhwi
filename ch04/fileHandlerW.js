var fs = require('fs');

fs.writeFile('./output.txt', 'Hello World', function(err){
  if(err){
    console.log('error');
  }
  console.log('쓰기 요청..');
});
