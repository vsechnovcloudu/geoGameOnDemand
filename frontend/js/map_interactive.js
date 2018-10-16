var directionsDisplay,
directionsService,
map,
marker;

function initialize() {
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
  
  // Default location in case there is no GPS available
  var defLocation = new google.maps.LatLng(50.07537373166929,14.413673711556612);
  var mapOptions = { zoom:12, mapTypeId: google.maps.MapTypeId.ROADMAP, center: defLocation, styles: styles }
  map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
  directionsDisplay.setMap(map);
  
  // marker refers to a global variable
  marker = new google.maps.Marker({
    position: defLocation,
    map: map
  });
  
  // Move marker to lat/lon of click
  google.maps.event.addListener(map, 'click', function (e) {
   placeMarker(e.latLng,map);
   });
   
 function placeMarker(location,map) {
   if ( marker ) {
     marker.setPosition(location);
   } else {
     marker = new google.maps.Marker({
       position: location,
       map: map
     });
   }
 }
 // Once we got default map set, call for the actual GPS location
 getLocation();  
}
