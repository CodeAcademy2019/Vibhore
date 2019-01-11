const factorial = require('./factorial.js');


test ('factorial should return some value',() => {
    expect(factorial(4)).toBe(24);
});

test('factorial should return not acceptable value',() => {
    expect(factorial(-1)).toBe('input rejected');
});