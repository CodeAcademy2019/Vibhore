// const fs = require('fs');
// const file= process.argv[2];
// //const file2= './content2.txt';

// //const data= fs.readFile(file2).toString();
// fs.readFile(file,  (err, data) => {
//     if (err) return console.error(err);
//     var content=data.toString().split('\n');


//    console.log(content.length-1);
// });


/////////////////  TESTING CODE   /////////////////


const fs = require('fs');
const display = (len) =>{
    return len;
}

const lineCount = (loc,callback) => {
    const file= loc;
    //const file2= './content2.txt';

    //const data= fs.readFile(file2).toString();
    fs.readFile(file,  (err, data) => {
        if (err) return console.error(err);
        var content=data.toString().split('\n');


    callback (content.length-1);
    });

};
// lineCount('./content2.txt',display);

module.exports ={lineCount,display};