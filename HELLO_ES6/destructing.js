var a = process.argv.slice(2);
var [,name,mail] = a;
var x = {username:name,email:mail};
console.log(x);