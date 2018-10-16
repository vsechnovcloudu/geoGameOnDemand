var allLocation = [];

function addLocation(){
  var selectedLocation = {};
  selectedLocation.lat = marker.position.lat();
  selectedLocation.lng = marker.position.lng();
  allLocation.push(selectedLocation);
  console.log(allLocation);
  var list = document.getElementById("locationList");
  var item = document.createElement("div");
  var newContent = document.createTextNode("Šířka: " + selectedLocation.lat + " Délka: " + selectedLocation.lng); 
  item.appendChild(newContent);  
  list.appendChild(item);
}

function removeLocation(){
  if (allLocation.length == 0) {
    console.log('list of locations is already empty!')
  } else {
    allLocation.pop();
    console.log(allLocation);
    var list = document.getElementById("locationList");
    list.removeChild(list.lastChild);
  }
}
