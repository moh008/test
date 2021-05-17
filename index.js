//index.js

var express = require('express');
var app = express();

<<<<<<< HEAD
app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));

app.get('/hello', function(req,res){
  res.render('hello', {name:req.query.nameQuery});
});

app.get('/hello/:nameParam', function(req,res){
  res.render('hello', {name:req.params.nameParam});
=======
<<<<<<< HEAD
app.use(express.static(__dirname + '/public'));
=======
app.get('/', function(req, res) {
  res.send('Hello from the other side');
>>>>>>> a8afb109b61438fc469c133ac86d458065febbb9
});
>>>>>>> 84516d0a029086352f5df902b878ef50c9d4e01f

var port = 3000;
app.listen(port, function(){
  console.log('server on! http://localhost:'+port);
});
