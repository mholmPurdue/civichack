var express = require('express');
var app = express();
var Firebase = require("firebase");
var ref = new Firebase("https://hondacivichack.firebaseio.com/");

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.push('report', function(req,res) {
	console.log(res.body);
	res.send("thanks bro");
	var quan = res.body.amount;
	var loc = ref.child("location");
	loc.set(
	  title: "report",
	  quantity: quan,
	  location: {
	    lat: latti,
	    long: longi
	  }
	});

})

app.push('find', function(req,res){
	console.log(res.body);
	var quan = res.body.amount;
	res.send("thanks dude")
	var lat = res.body.lat;
	var lon = res.body.long;
	ref.on("location", function(snapshot) {
	  console.log(snapshot.val());

	}

})