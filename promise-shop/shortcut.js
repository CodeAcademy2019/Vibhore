
//   var promise = new Promise( (resolve, reject) => {
//     //resolve('Success!');
    
//     reject(new Error("Error!"));
//   } );
//   var promise = Promise.resolve = ("Everything is running perfectly");
//   var promise = Promise.reject = (new Error("ERROR ERROR ERROR!!!"));
var promise = Promise.reject(new Error("Error!"));
  promise.catch((x)=>{console.log(x.message)}); 
  
