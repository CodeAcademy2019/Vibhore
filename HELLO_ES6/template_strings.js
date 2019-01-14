// console.log(`Hello, ${process.argv[2]}!
// Your name lowercased is \"${process.argv[2].toLowerCase()}\".`);


const temp = (msg)=> {

    var x = `Hello, ${msg}!
    Your name lowercased is \"${msg.toLowerCase()}\".`;
    return x;
};

module.exports=temp;