var nearestParking = new google.maps.LatLng(39.768403,-86.15806800000001);
function sendLoc() {
	console.log("ayy");
	$.post( "/find", { name: "John", time: "2pm" })
	.done(function( data ) {
		alert( "Data Loaded: " + data );
	});
};

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