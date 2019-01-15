// var a = process.argv.slice(2);
// var [,name,mail] = a;
// var x = {username:name,email:mail};
// console.log(x);

const des =(arr)=>{

    if(Object.keys(arr).length===0){
        return `Please don't pass empty object`;
    }
    var a = arr;
    var [,name,mail] = a;
    var x = {username:name,email:mail};
    return x;
}
module.exports = des;