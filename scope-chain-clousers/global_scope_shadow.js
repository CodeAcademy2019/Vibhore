function foo () {
    var bar;
    quux=10;
    function zip () {
            quux=5;
    };
    console.log(quux);
    
    
};


foo();
console.log(quux);