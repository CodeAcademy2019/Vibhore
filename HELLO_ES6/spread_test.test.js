const sp = require('./spread.js');

// var x = The minimum of [${arr}] is ${Math.min(...arr)};
var a=[1,2,3,4,5,6,7,8];
var b=[1,2,3,4,5,6,7,8,10213,12,-120];
test ('the output should be minimum',() => {
    expect(sp(a)).toBe(`The minimum of [${a}] is 1`);
});

test ('the output should be minimum',() => {
    expect(sp(b)).toBe(`The minimum of [${b}] is -120`);
});
test ('error message is thrown if empty array is passed',() => {
    expect(sp([])).toBe(`Please don't pass empty array`);
});