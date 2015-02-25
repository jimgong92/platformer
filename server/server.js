var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use(express.static(__dirname + '/../client') );
app.use(express.static(__dirname + '/../client/styles') );

app.get('/', function(req, res) {
  res.render('index');
});

//start listening
var port = process.env.PORT || 8000;
http.listen(port);