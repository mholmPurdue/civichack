var express = require('express');
var app = express();
//var Firebase = require("firebase");
var geolib = require("geolib");
// var config = {
//     apiKey: "AIzaSyCQ_blsuxK_BSeW1J7y0yIAqQPgdBA1pE0",
//     authDomain: "hondacivichack.firebaseapp.com",
//     databaseURL: "https://hondacivichack.firebaseio.com",
//     storageBucket: "hondacivichack.appspot.com",
//   };
//   firebase.initializeApp(config);
//var myFirebaseRef = new Firebase("https://hondacivichack.firebaseio.com/");

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('report', function(req,res) {
	console.log(res.body);
	res.send("thanks bro");
	var quan = res.body.quantity;
	//var loc = myFirebaseRef.child("location");

})

app.post('find', function(req,res) {
	console.log(res.body);
	var quan = res.body.amount;
	res.send("thanks dude");
	var lat = res.body.lat;
	var lon = res.body.long;
	var user;
	user.latitude = lat;
	user.longitude = lon;
	// myFirebaseRef.on("location", function(snapshot) {
	//   console.log(snapshot.val());
	//   var nearest = geolib.findNearest(user,snapshot.val,1);
	//   console.log(nearest);
	//   res.send(nearest);
	// });
})