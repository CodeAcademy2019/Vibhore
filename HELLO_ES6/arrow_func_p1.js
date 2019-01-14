// var a = process.argv.slice(2);
// var b = a.reduce((s,y) => {return s+y[0]},'');
// // console.log(a);
// // console.log(b);
// console.log(`[${a}] becomes "${b}"`); 

const arrow = (arr) =>{
    var a = arr;
    var b = a.reduce((s,y) => {return s+y[0]},'');
    // console.log(a);
    // console.log(b);
    return `[${a}] becomes "${b}"`; 
};

module.exports = arrow;