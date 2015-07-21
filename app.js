var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
var foods = [
	{name : 'pineapple'},
	{name : 'haggis'},
	{name : 'saag'}
]

var siteCounter = 1

app.get('/', function(req, res) {
	res.render('index', {
		counter : siteCounter,
		foods : foods
	});

	siteCounter++
});
app.post('/submit', function  (req,res) {
	// req.query Get Requests
	// req.params Dynamic Routes
	// req.body - POST requests
	console.log('Body -', req.body)
	foods.push({name : req.body.food})
})

var server = app.listen(7907, function() {
	console.log('Express server listening on port ' + server.address().port);
});

