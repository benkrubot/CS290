var express = require('express'); //Store Express
var todoController = require('./controllers/todoController'); //Requiring controller

var app = express(); //Setup app

app.set('view engine', 'ejs'); //Setup view engine

app.use(express.static('./public')); //Setup static files

todoController(app); //Executing controller

app.listen(3000); //Listen to port

console.log("You are listening to port 3000.");