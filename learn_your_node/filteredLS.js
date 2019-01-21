// const fs = require('fs');
// const location = process.argv[2];
// const exten = process.argv[3];

// fs.readdir(location, function(err, items) {
//   var list=items.filter((x)=>{
//       if(x.endsWith('.'+exten))
//         {
//             return x;
//         }
//   })
//   for(let i=0;i<list.length;i++){
//       console.log(list[i]);
//   }
// });


/////////////////////
const fs = require('fs');

// const location = process.argv[2];
// const exten = process.argv[3];


const callback = (list) => {

    console.log(list);
    return list;
};

const file_finder = (location, exten, callback) => {
    fs.readdir(location, function (err, items) {
        var list = items.filter((x) => {
            if (x.endsWith('.' + exten)) {
                return x;
            }
        });
        callback(list);

    });


};
// var loc = '/Users/Vibhore_Gupta/javascripting/learn_your_node/';
// var exten = 'txt';
// // file_finder(loc,exten,callback);
module.exports = { callback, file_finder };