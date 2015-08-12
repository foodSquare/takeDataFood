/**
 * Module dependencies.
 */
var http = require('http');
var express = require('express'),
  api = require('./api');
  

var app = module.exports = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
  next();
});

// Routes

// JSON API
app.get('/login', function (req, res) {
  console.log("REQ: ", req, "RES: " ,res);
  res.send("REQ: ", req, "RES: " ,res);
});
app.get('/', function (req, res) {
  res.send('');
  //res.status(status).send(body)
});
app.get('/api/foods', api.getMeals);
app.get('/api/foods/:id', api.getMeal);
app.post('/api/food', api.postMeal);
app.put('/api/foods/:id', api.putMeal);
app.delete('/api/foods/:id', api.deleteMeal);

app.get('/api/restaurants', api.getRestaurants);
app.get('/api/restaurants/:id', api.getRestaurant);

var server = http.createServer(function(req, res){
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.end('<h1> Working on Food Square :) </h1>')
});

var port = Number(process.env.PORT || 3000);
server.listen(port);

var host = server.address().address;


/*var server = app.listen(8080, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('FooSquare listening at http://%s:%s', host, port);

});*/

exports.express;