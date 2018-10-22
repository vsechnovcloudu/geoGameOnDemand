var request = {};

function submitForm() {

  request.locations = locations;
  request.design = document.getElementById("design").value;
  request.storyName = document.getElementById("storyName").value;
  request.story = document.getElementById("story").value;
  request.secretCode = document.getElementById("secretCode").value;
  
  if (request.locations.length == 0 || request.secretCode == "") {
    console.log('No locations were created, canceling...');
    displayInfo.innerHTML = 'Je mi líto, ale bez tajného kódu a alespoň jedné lokace nemůžeme Váš požadavek přijmout. To by byla příliš velká nuda!';
  } else {
    console.log(JSON.stringify(request));
    displayInfo.innerHTML = 'Odesílám... momentík, za chviličku Vám vygeneruji odkaz!';
    
    postData(`https://voqzxnpwhd.execute-api.eu-west-1.amazonaws.com/test`, {event: request})
    .then(data => displayResult(data)) // JSON-string from `response.json()` call
    .catch(error => console.error(error));
    
    function postData(url = ``, data = {}) {
      // Default options are marked with *
      return fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        //cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        //credentials: "omit", // include, same-origin, *omit
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          //"Access-Control-Allow-Origin": "*"
          "Content-Type": "application/json"
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      })
      .then(response => response.json()); // parses response to JSON
    }
    
    function displayResult(data) {
      console.log(data);
      displayInfo.innerHTML = 'HOTOVO';
    }
  }
}
