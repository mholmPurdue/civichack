var express = require('express');
var app = express();
var geolib = require("geolib");
var bodyParser = require('body-parser');

var locs = [{latitude: 30, longitude: 40}, {latitude: 0, longitude: 0}];
console.log(locs);
app.use('/js', express.static(__dirname+'/js'))
app.use('/css', express.static(__dirname+'/css'))
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});


app.post('/report', function(req,res) {
	console.log(req);
	if(req.body == null){
		console.log("fuck");
		res.send("fuck off");
		return;
	}
	console.log(req.body);
	var subTime = Date.now();
	var userloc = { latitude: req.body.latitude,
					longitude:req.body.longitude,
					 time: subTime}
	locs.push(userloc);
	console.log("SUCCESS")
	res.send("thanks bro");
})

app.post('/find', function(req,res) {
	if(req.body == null){
		console.log("fuck");
		res.send("fuck off");
		return;
	}
	console.log("SUCCESS")
	console.log(req.body)
	var lat = req.body.latitude;
	var lon = req.body.longitude;
	var user = {};
	if(locs.length == 0)
		res.send("YOU'RE OUT OF LUCK COWBOY");
	user.latitude = lat;
	user.longitude = lon;
	console.log(locs);
	var nearest = geolib.findNearest(user,locs,1);
	res.send(nearest);
})