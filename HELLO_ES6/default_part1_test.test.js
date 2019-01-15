const midpoint = require('./default_part1.js');

test ('the output should be midpoint of upper and lower values passed as arguments',() => {
    expect(midpoint(10,20)).toEqual(15);
});

test ('the output should be midpoint of upper and lower passed as arguments',() => {
    expect(midpoint(1,0)).not.toEqual(-0.5);
});

test ('the output should be midpoint of upper and lower passed as arguments',() => {
    expect(midpoint(1,0)).toEqual(0.5);
});

test ('the output should be equal to mid point of 1 and 0 if no arguments are passed',() => {
    expect(midpoint()).toEqual(0.5);
});


