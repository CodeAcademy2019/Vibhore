const p1= require('./p1.js');

test ('the output should be HELLO ES6',() => {
    expect(p1()).toBe("HELLO ES6");
});