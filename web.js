var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

  indexBuffer = fs.readFile('index.html')
  indexString = indexBuffer.toString()
  response.send(indexString)
  //response.send('Hello World2!');
});



var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
