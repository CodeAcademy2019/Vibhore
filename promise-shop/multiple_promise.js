const getPromise1 = ()=> {
    return  Promise.resolve("Promise 1");
}; 
const getPromise2 = ()=> {
    return  Promise.resolve("Promise 2");
}; 

all = (p1,p2) =>{
    return new Promise((resolve,reject)=>{
        var counter =0;
        var arr = [];
        p1.then((x)=>{
            arr[0]=x;
            counter++;
        
            if(counter>=2){
                resolve(arr);
            }
        });
    
        p2.then((x)=>{
                arr[1]=x;
            counter++;
        
            if(counter>=2){
                resolve(arr);
            }});

        
});
};

const promise = all(getPromise1(),getPromise2()).then((x)=> {console.log(x); return x;});
module.exports = promise;


// Let’s build this function!

// Create a function all that accepts two promises as arguments. This all
// function should do all of the following:

// Create an internal promise in whatever way you see fit.

// Create a counter variable with initial value of 0.

// Attach then fulfillment handlers to both promises and increment the internal
// counter when the handlers are called.

// When the counter reaches 2, fulfill the internal promise with an array
// containing both values.

// Finally return that internal promise to the user.

// After you finish writing your all function, pass getPromise1() and
// getPromise2() into your new function and then attach console.log as a
// fulfillment handler to the promise returned by your function. These two
// promise-returning functions will be provided to you in the global scope.
