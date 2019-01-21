// const fs = require('fs');
// const file= process.argv[2];
// const data= fs.readFileSync(file).toString();
// console.log(data.split('\n').length-1);

////// TESTING CODE /////////
const fs = require('fs');
var lineCount =(data)=>{
    
    
    // const data= file.toString();
   // console.log(data);
    var cont = data.split('\n');
    return((cont.length)-1);
}
// const file2= fs.readFileSync('./content2.txt').toString();
// console.log(lineCount(file2));



module.exports=lineCount;