const rest = require('./rest.js');

test ('the output should be average of arguments',() => {
    expect(rest(1,2,3,4,5)).toBe(3);
});

test ('the output should be average of arguments',() => {
    expect(rest(1,2,3,4,5,1)).toBe(4);
});

test ('the output should be average of arguments',() => {
    expect(rest(1,2,3,4,5,10)).toBe(25/6);
});