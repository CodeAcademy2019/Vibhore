const factorial = require('./factorial.js');


test ('factorial should return some value',() => {
    expect(factorial(4)).toBe(24);
});
