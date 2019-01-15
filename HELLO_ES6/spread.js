// console.log(`The minimum of [${process.argv.slice(2)}] is ${Math.min(...process.argv.slice(2))}`);

const spr = (arr) => {

    if(arr.length===0){
        return "Please don't pass empty array"
    }
    return `The minimum of [${arr}] is ${Math.min(...arr)}`;
}

module.exports = spr;
