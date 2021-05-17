//index.js

var express = require('express');
var app = express();

<<<<<<< HEAD
app.use(express.static(__dirname + '/public'));
=======
app.get('/', function(req, res) {
  res.send('Hello from the other side');
});
>>>>>>> 84516d0a029086352f5df902b878ef50c9d4e01f

var port = 3000;
app.listen(port, function(){
  console.log('server on! http://localhost:'+port);
});
