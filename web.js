var express = require('express');

var app = express.createServer(express.logger());

var indexBuffer = fs.readFile('index.html')
var indexString = indexBuffer.toString()

app.get('/', function(request, response) {


  response.send(indexString)
  //response.send('Hello World2!');
});



var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
