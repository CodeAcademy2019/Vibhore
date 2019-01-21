//console.log(process.argv);
// 
// var total = process.argv.slice(2).reduce((acc,x) => acc+Number(x));
// console.log(total);
    
//// TESTING CODE   ////////////

const summ = (arr)=>{
    
    var total = arr.reduce((acc,x) => acc+x);
        return total;
    }
    
module.exports=summ;
