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
