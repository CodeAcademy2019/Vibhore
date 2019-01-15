function getShortMessages(messages) {
    // SOLUTION GOES HERE
    
var a=[];
a = messages.filter( (x) => { return x.message.length<50} ).map( (x) => x.message);

return a;

  }

  module.exports = getShortMessages