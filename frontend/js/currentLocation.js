var displayInfo = document.getElementById("logs");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        displayInfo.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var newLocation = {};
    newLocation.lat = position.coords.latitude;
    newLocation.lng = position.coords.longitude;
    map.setCenter(newLocation);
    map.setZoom(16);
}
