// var promise = new Promise( (resolve, reject)=> {
//     // Your solution here
//     setTimeout(()=>{
//         reject(new Error("REJECTED!"));
//     },300);
// });
    

//   onReject =(error) => {
//     // Your solution here
//     console.log(error.message);
//   }

//   promise.then('',onReject);


//////////////////////////////

var f1 =  (resolve, reject)=> {
  // Your solution here
  setTimeout(()=>{
      reject(new Error("REJECTED!"));
  },300);
};
  
var promise = new Promise(f1);
onReject =(error) => {
  // Your solution here
  console.log(error.message);
}

promise.then('',onReject);


  module.exports = {
    promise,
    f1
  };



// Create a promise that after a delay of 300ms, rejects with an Error object.
// The Error object should be constructed with parameter 'REJECTED!', which is
// the textual message of the error.

// Create a function onReject to print error.message using console.log. Pass
// this function as a rejection handler to the then method of your promise.