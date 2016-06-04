var nearestParking = new google.maps.LatLng(39.768403,-86.15806800000001);

function sendLoc(position) {
	var lat = position.coords.latitude;
    var lon = position.coords.longitude;
	$.post( "/find", {
		name: "John",
		time: "2pm",
		latitude: lat,
		longitude: lon
	 },function( data ) {
		alert( "Data Loaded: " + data );
	}, "json");
};

function pos(){
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(sendLoc);
	} else {
		showError("Your browser does not support Geolocation!");
	}
}

function initialize() {
	var mapProp = {
	center:nearestParking,
	zoom:10,
	mapTypeId:google.maps.MapTypeId.ROADMAP
	};

	var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

	var marker = new google.maps.Marker({
		position:nearestParking,
	});
	marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);