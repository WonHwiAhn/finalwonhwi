var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  var instream = fs.createReadStream('./output.txt');
  instream.pipe(res);
});

server.listen(7001,'127.0.0.1');
