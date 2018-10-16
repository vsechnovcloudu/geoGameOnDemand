var allLocation = [];

function addLocation(){
  var selectedLocation = {};
  selectedLocation.lat = marker.position.lat();
  selectedLocation.lng = marker.position.lng();
  allLocation.push(selectedLocation);
  console.log(allLocation);
  displayInfo.innerHTML = '';
  var list = document.getElementById("locationList");
  var item = document.createElement("div");
  var newContent = document.createTextNode("Šířka: " + selectedLocation.lat + " Délka: " + selectedLocation.lng); 
  item.appendChild(newContent);  
  list.appendChild(item);
}

function removeLocation(){
  if (allLocation.length == 0) {
    console.log('list of locations is already empty!');
    displayInfo.innerHTML = 'Již je vše smazané!';
  } else {
    allLocation.pop();
    console.log(allLocation);
    displayInfo.innerHTML = '';
    var list = document.getElementById("locationList");
    list.removeChild(list.lastChild);
  }
}

function detectDesignChange(){
  var menu = document.getElementById("design");
  menu.addEventListener("change", setMapDesign(menu.value), false);
}

function setMapDesign() {
  
  var designName = document.getElementById("design").value;

  var design = {};
  if (designName == "retro") {
    design = retro;
  } else if (designName == "aubergine") {
    design = aubergine;
  } else if (designName == "night") {
    design = night;
  } else {
    design = defaultStyle;
  }
  
  var styledMapOptions = {
    name: designName
  };

  var newStyle = new google.maps.StyledMapType(
      design, styledMapOptions);

  map.mapTypes.set(designName, newStyle);
  map.setMapTypeId(designName);
  
}
