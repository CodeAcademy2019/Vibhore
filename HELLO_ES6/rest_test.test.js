const rest = require('./rest.js');

test ('the output should be average of passed arguments',() => {
    expect(rest(1,2,3,4,5)).toBe(3);
});

test ('the output should be average of passed arguments',() => {
    expect(rest(1,2,3,4,5,1)).not.toBe(4);
});

test ('the output should be average of passed arguments',() => {
    expect(rest(1,2,3,4,5,10)).toEqual(25/6);
});

test ('the error is thrown if empty array is passed',() => {
    expect(rest()).toEqual("Please pass any argument");
});