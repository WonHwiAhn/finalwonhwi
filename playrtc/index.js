var express = require('express');
var app = express();
var fs = require('fs');

app.listen(3303, function(){
  console.log('Server start');
});

app.get('/', function(req, res){
  fs.readFile('./playrtc/static.html', function(err, data){
    if(err){
      console.log(err);
    }else{
      res.writeHead(200,{'Content-Type':'text/html'});
      res.end(data);
    }
  });
});
