var mysql = require('mysql'),
	http = require('http'),
	connection;

var connectDB = function () {
	connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : '',
	  database : 'FOODSQUARE'
	});
	connection.connect();	
};
var getData = function (options, reqServer, resServer) {
	var request = http.request(options, function (res) {
	    var data = '';
	    res.on('data', function (chunk) {
	        data += chunk;
	    });
	    res.on('end', function () {
	    	console.log(data);
	        resServer.send(data);
	    });
	});
	request.on('error', function (e) {
	    resServer.send(e.message);
	});
	request.end();
};
/*
 * Serve JSON to our AngularJS client
 */
exports.getRestaurants = function (req, res) {
	/*connectDB();
	connection.query('SELECT * from FOODS', function(err, rows, fields) {
		connection.end();
		if (!err) {
			res.send(rows);
		 	
		} else {
		   console.log('Error while performing Query.');
		  
		}
	});*/
};
exports.getRestaurant = function (req, res) {
	/*connectDB();
	var identifier = req.params.id;
	connection.query('SELECT * from FOODS where ID='+identifier, function(err, rows, fields) {
		connection.end();
		if (!err) {
			res.send(rows);
		 	
		} else {
		   console.log('Error while performing Query.');  
		}
	});*/
};
exports.getMeals = function (req, res) {
	/*var options = {};
	getData(options, req, res);*/
	

};
exports.getMeal = function (req, res) {

	/*var identifier = req.params.id;
	var options = {}
	getData(options, req, res);*/
	
};
exports.postMeal = function (req, res) {
	res.send('post');
};
exports.putMeal = function (req, res) {
	res.send('put');
};
exports.deleteMeal = function (req, res) {
	res.send('delete');
};
