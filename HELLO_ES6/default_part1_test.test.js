const midpoint = require('./default_part1.js');

test ('the output should is midpoint of upper and lower',() => {
    expect(midpoint(10,20)).toEqual(15);
});

test ('the output should is midpoint of upper and lower',() => {
    expect(midpoint(1,0)).toEqual(-0.5);
});

test ('the output should is midpoint of upper and lower',() => {
    expect(midpoint(1,0)).toEqual(0.5);
});


