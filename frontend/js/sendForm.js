var request = {};

function submitForm() {
  request.locations = allLocation;
  request.storyName = document.getElementById("storyName").value;
  request.story = document.getElementById("story").value;
  request.secretCode = document.getElementById("secretCode").value;
  if (request.locations.length == 0) {
    console.log('No locations were created, canceling...')
  } else {
    console.log(JSON.stringify(request));
  }
}
