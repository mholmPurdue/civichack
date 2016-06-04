var express = require('express');
var app = express();
var geolib = require("geolib");

var locs = [];

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('report', function(req,res) {
	console.log(res.body);
	var date = new Date();
	var subTime = date.now();
	var userloc = { latitude: res.body.latitude,
					longitude:res.body.longitude,
					 time: subTime}
	locs.push(userloc);
	res.send("thanks bro");
})

app.post('find', function(req,res) {
	console.log(res.body);
	var quan = res.body.amount;
	var lat = res.body.lat;
	var lon = res.body.long;
	var user;
	user.latitude = lat;
	user.longitude = lon;
	var nearest = geolib.findNearest(user,locs,1);
	res.send(nearest);
})

var cull = setInterval(function(){
	var date = new Date();
	var now = date.now();
	if(now != locs[0].time + 3600000){
		locs.splice(0,1);
	}
},5000)