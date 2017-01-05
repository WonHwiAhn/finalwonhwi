var express = require('express');
var app = express.createServer(express.logger());
app.get('/', function(request, response){
response.send('Hello World!');
});
var port = 3000;
/*app.listen(port, function()
{
console.log("Listening on " + port);
});*/
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
