
var promise = Promise.reject(new Error("Error!"));
promise.catch((x)=>{console.log(x.message)}); 
  
module.exports = promise;