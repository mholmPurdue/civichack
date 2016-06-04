var express = require('express');
var app = express();
var geolib = require("geolib");

var locs = [{latitude: 30, longitude: 40}];

app.use('/', express.static(__dirname+'/'))

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});


app.post('report', function(req,res) {
	console.log(req.body);
	var subTime = Date.now();
	var userloc = { latitude: req.body.latitude,
					longitude:req.body.longitude,
					 time: subTime}
	locs.push(userloc);
	res.send("thanks bro");
})

app.post('find', function(req,res) {
	console.log(req.body);
	var quan = req.body.amount;
	var lat = req.body.lat;
	var lon = req.body.long;
	var user;
	if(locs.length = 0)
		res.send("YOU'RE OUT OF LUCK COWBOY");
	user.latitude = lat;
	user.longitude = lon;
	var nearest = geolib.findNearest(user,locs,1);
	res.send(nearest);
})

// var cull = setInterval(function(){
// 	var date = new Date();
// 	var now = date.now();
// 	if(now != locs[0].time + 3600000){
// 		locs.splice(0,1);
// 	}
// },5000)