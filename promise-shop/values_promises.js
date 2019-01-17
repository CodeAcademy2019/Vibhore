// attachTitle = (name) => {
//     return 'DR. ' + name;
//   };
// Promise.resolve('MANHATTAN').then(attachTitle).then(console.log);

///////////    TEST CODE     /////////////

attachTitle = (name) => {
    return 'DR. ' + name;
  };

var promise = Promise.resolve('MANHATTAN').then(attachTitle);


module.exports=promise;