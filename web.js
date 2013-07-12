var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');

var buffer = fs.readFile('index.html',function(err,data){
    if (err) throw err;
});
var indexString = buffer.toString()

app.get('/', function(request, response) {
  response.send(indexString)
  //response.send('Hello World2!');
});



var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
