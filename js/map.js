var centerLoc = new google.maps.LatLng(39.768403,-86.15806800000001);
var map;
var marker;

function sendLoc(position) {
	var lat = position.coords.latitude;
    var lon = position.coords.longitude;
	$.post( "/find", {
		latitude: lat,
		longitude: lon
	 },function( data ) {
		//new marker.setMap(new google.maps.LatLng(data.latitude, data.longitude));
		var pos = new google.maps.LatLng(data.latitude, data.longitude);
		marker.setPosition(pos);
	}, "json");
};

function sendReport(position) {
	var lat = position.coords.latitude;
    var lon = position.coords.longitude;
	$.post( "/report", {
		latitude: lat,
		longitude: lon
	 },function( data ) {
	}, "json");
}

function pos(){
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(sendLoc);
	} else {
		showError("Your browser does not support Geolocation!");
	}
}

function report() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(sendReport);
	} else {
		showError("Your browser does not support Geolocation!");
	}
}

function initialize() {
	var mapProp = {
	center:centerLoc,
	zoom:10,
	mapTypeId:google.maps.MapTypeId.ROADMAP
	};

	map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

	marker = new google.maps.Marker({
		position:pos,
	});
	marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);