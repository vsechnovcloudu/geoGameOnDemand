var directionsDisplay,
directionsService,
map,
marker;
var markers = {};
var locations = [];

function initialize() {
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
  
  // Default location in case there is no GPS available
  var defLocation = new google.maps.LatLng(50.07537373166929,14.413673711556612);
  var mapOptions = { zoom:7, mapTypeId: google.maps.MapTypeId.ROADMAP, center: defLocation, styles: retro }
  map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
  directionsDisplay.setMap(map);
  
  var getMarkerUniqueId= function(lat, lng) {
    return lat + '_' + lng;
  }
  
  var getLatLng = function(lat, lng) {
    return new google.maps.LatLng(lat, lng);
  };
  
  var addMarker = google.maps.event.addListener(map, 'click', function(e) {
    var lat = e.latLng.lat(); // lat of clicked point
    var lng = e.latLng.lng(); // lng of clicked point
    var markerId = getMarkerUniqueId(lat, lng); // an that will be used to cache this marker in markers object.
    var marker = new google.maps.Marker({
      position: getLatLng(lat, lng),
      map: map,
      id: 'marker_' + markerId
    });
    markers[markerId] = marker; // cache marker in markers object
    bindMarkerEvents(marker); // bind right click event to marker
    locations.push({position: markers[markerId].position});
  });
  
  var bindMarkerEvents = function(marker) {
    google.maps.event.addListener(marker, "click", function (point) {
      var markerId = getMarkerUniqueId(point.latLng.lat(), point.latLng.lng()); // get marker id by using clicked point's coordinate
      var marker = markers[markerId]; // find marker
      removeMarker(marker, markerId); // remove it
    });
  };
  
  var removeMarker = function(marker, markerId) {
    marker.setMap(null); // set markers setMap to null to remove it from map
    delete markers[markerId]; // delete marker instance from markers object
    locations.splice(markerId, 1);
  };
  
  getLocation();
};
