var express = require('express');

var app = express();
app.locals.pretty = true;
app.set('view engine','jade');
app.set('views', './views');
app.use(express.static('public'));

app.get('/topic/:id', function(req, res){
  var topics = [
    'Javascript is...',
    'Nodejs is ...',
    'Express is ...'
  ];
  var as = `
  <a href = '/topic/${topics[req.params.id]}?id=0'>JavaScript</a><br>
  <a href = '../public/static.html'>Nodejs</a><br>
  <a href = '/topic?id=2'>Express</a><br><br>

  ${topics[req.params.id]}
    ${topics[req.query.id]}
  `

  res.send(as);

});

app.get('/template', function(req, res){
  res.render('temp', {time:'hello'}, {time1:'Date()'});
});
app.get('/public', function(req, res){
  res.send('Hello World');
  var as1 = `
    <a href = '/static.html'>Nodejs</a><br>
  `
});

app.get('/dynamic', function(req, res){
  var lis = '';
  var time = Date();
  for(var i=0;i<5;i++){
    lis = lis + '<li>coding</li>';
  }
  var output = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title></title>
    </head>
    <body>
      Hello, Dynamic!
      <ul>
        ${lis}
      </ul>
      ${time}
    </body>
  </html>`;
  res.send(output);
  res.send('<!DOCTYPE html>\
  <html>\
    <head>\
      <meta charset="utf-8">\
      <title></title>\
    </head>\
    <body>\
      Hello, Static!\
    </body>\
  </html>\
');
});

app.get('/route', function(req, res){
  res.send('Hello route,<img src="1.jpg">');
});

app.get('/login', function(req, res){
  res.send('Login please');
});

app.listen(3000,function(){
  console.log('Connected 3000 port!');
});
