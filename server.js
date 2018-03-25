//server.js
//require modules
var express = require('express');
var path = require('path');
//instantiate express
var app = express();
//set port
app.set('port', (process.env.PORT || 5000));
//use static files
app.use(express.static(path.join(__dirname, 'public')));
//express routes
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/index.html'));
});
app.get('/left-sidebar', function(req, res){
  res.sendFile(path.join(__dirname, 'views/left-sidebar.html'));
});
app.get('/no-sidebar', function(req, res){
  res.sendFile(path.join(__dirname, 'views/no-sidebar.html'));
});
app.get('/right-sidebar', function(req, res){
  res.sendFile(path.join(__dirname, 'views/right-sidebar.html'));
});
//express server listen
var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port ',app.get('port'));
});