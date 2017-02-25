var express = require('express');
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json());

app.use(express.static(__dirname + '/static'));

app.get('/test', function(req, res){
  console.log("In method test");
  res.end("<h1 style='background:#222; color: white;'>hurray!! <span style='color:#222; background: white;'>mcq2 web service</span> is working</h1>")
});

var server = app.listen(8082)


 