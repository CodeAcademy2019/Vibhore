const arrow = require('./arrow_func_p1.js');

var x = ["Hello","I", "am","jack"];

test ('the output should be string of first character of elements',() => {
    expect(arrow(["Hello", "arrow", "functions"])).toBe(`[Hello,arrow,functions] becomes "Haf"`);
});

test ('the output should be string of first character of elements',() => {
    expect(arrow(x)).toBe(`[${x}] becomes "HIaj"`);
});


