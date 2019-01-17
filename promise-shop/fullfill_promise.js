
    // var promise = new Promise((resolve, reject)=> {
    //   // Your solution here
    //     setTimeout(()=>{
    //         resolve('FULFILLED!');
    //     },300);
    // });
    // promise.then((value)=> {
    //     console.log(value);
        
    //   });

    
var fun = (resolve, reject)=> {
      // Your solution here
        setTimeout(()=>{
            resolve('FULFILLED!');
        },300);
    };

    var promise = new Promise(fun);
    promise.then(console.log);
    
    module.exports = {promise,fun};