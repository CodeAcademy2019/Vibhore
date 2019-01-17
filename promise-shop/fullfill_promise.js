'use strict';

    var promise = new Promise((resolve, reject)=> {
      // Your solution here
        setTimeout(()=>{
            resolve('FULFILLED!');
        },300);
    });
    promise.then((value)=> {
        console.log(value);
        
      });

    

    module.exports = promise;