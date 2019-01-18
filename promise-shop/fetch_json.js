var FS = require("q-io/fs");
var HTTP = require("q-io/http");
/*


{ Server: [Function],
  ServerRequest: [Function],
  ServerResponse: [Function],
  normalizeRequest: [Function],
  normalizeResponse: [Function],
  request: [Function],
  read: [Function],
  ClientResponse: [Function] }


  */

// console.log(HTTP);
externalUrl="https://www.google.com/search?q=url+with+json";
// var getArray = function(externalUrl) {
//     var request = {
//       method: "GET",
//       url:externalUrl ,
//       body:true
//     };
  
//     return HTTP.request(request)
//   .then(function(response) { return response.body})
//   .then(JSON.parse);
//   }
//   console.log(getArray);
// HTTP.read("https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json")
//   .then((response) => {console.log(JSON.parse(response))});
  
HTTP.read("http://localhost:1337")
  .then((response) => {console.log(JSON.parse(response))});