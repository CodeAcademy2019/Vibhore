// first().then(second).then(console.log);

//////////   TEST CODE  ///////////////////



const first= () => {
  return Promise.resolve('Hello from first.');
}
const second= (x) => {
  return Promise.resolve(x+' Hello from second.');
}
const a = first();

const b = a.then(second);

b.then(console.log);

module.exports= {
  a, b
};







/*
Parse.User.logIn('user', 'pass').then(function (query) {
    return query.find();
  }).then(function (results) {
    return results[0].save({ key: value });
  }).then(function (result) {
    // the object was saved
  });
*/
// This task will allow you to demonstrate an understanding how to chain promises
// together using then.

// Two functions will be provided as global functions that you can use: first
// and second.

// Call the first function in your program. first() will return a promise that
// will be fulfilled with a secret value.

// Call the second with the fulfilled value of first. Return the promise returned
// by second in your onFulfilled callback.

// Finally, print the fulfilled value of that new promise with console.log.


/*


const first=()=>{
    return Promise.resolve('Fulfilled Successfully!');
}
const second=(argument)=>{
    return Promise.resolve(argument+' This one is from second function');
}
const a = first();
//console.log(a);

const b=a.then((onResolveArgument) =>{
    c=second(onResolveArgument);
    return c;
    
})
b.then(console.log)

// const b= second(a);
// return b;

module.exports={a,b}

*/