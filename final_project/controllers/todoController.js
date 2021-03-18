var bodyParser = require('body-parser');

var data = [];
var urlencodedParser = bodyParser.urlencoded({extended: false}); //Middlware

module.exports = function(app){

app.get('/index', function(req, res){
  res.render('index', {todos: data});
});

/*app.get('/index', function(req, res){
  res.render('index');
}); */

app.get('/basics2', function(req, res){
  res.render('basics2');
});
    
app.post('/index', urlencodedParser, function(req, res){
  data.push(req.body); //Added data we required to array
  res.json(data); //Send data back
});

app.delete('/index/:item', function(req, res){
  data = data.filter(function(todo){ //Using method filter on data, executing function cycling through each object
    return todo.item.replace(/ /g, '-') != req.params.item; //Returns either true or false; if true item remains in array otherwise gets filtered out
  });
  res.json(data);
});
    
};