function randomAdvise() {
    // fetch example - works in the browser but not in node
// (fetch is not a part of node.js by default)
fetch("https://api.adviceslip.com/advice") // make the request
  .then(response => response.json()) // convert response to json
  .then(myJson => { // display data in the browser
    const advise = document.getElementById('myBtn')
    advise.innerHTML = "<pre>" + JSON.stringify(myJson.slip.advice, null, " ") + "</pre>"
  })
}

randomAdvise()

function anotherAdvise() {
    // fetch example - works in the browser but not in node
// (fetch is not a part of node.js by default)
const some = document.getElementById('one')
fetch('https://api.adviceslip.com/advice/search/'+ some) // make the request
  .then(response => response.json()) // convert response to json
  .then(myJson => { // display data in the browser
    const keyword = document.getElementById('one')
    keyword.innerHTML =  "<pre>" + JSON.stringify(myJson.slip, null, " ") + "</pre>"
  })
}
anotherAdvise();
