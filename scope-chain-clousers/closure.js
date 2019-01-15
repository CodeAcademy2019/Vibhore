function foo () {
    var bar;
    quux=10;
    function zip () {
            bar = true;
            var quux=5;
            return bar;
    };
    return zip;
    
    
};

var x = foo()
var b=x();
console.log(b);