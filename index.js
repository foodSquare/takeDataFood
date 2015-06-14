/**
 * Module dependencies.
 */
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
app.get('/', function (req, res) {
  res.send('');
  //res.status(status).send(body)
});
app.get('/api/foods', api.getFlights);
app.get('/api/foods/:id', api.getFlight);
app.post('/api/foods', api.postFlight);
app.put('/api/foods/:id', api.putFlight);
app.delete('/api/foods/:id', api.deleteFlight);

app.get('/api/restaurants', api.getAirports);
app.get('/api/restaurants/:id', api.getAirport);

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('FooSquare listening at http://%s:%s', host, port);

});

exports.express;