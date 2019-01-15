function repeat(operation, num) {
    // SOLUTION

for(var i=0;i<num;i++){
    operation();
    i+=1;
}

  }

  // Do not remove the line below
  module.exports = repeat