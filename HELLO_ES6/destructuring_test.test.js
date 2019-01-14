const dest = require('./destructing.js');
var x= {"email": "jdoe@example.com","username": "jdoe"};
test ('the output should be username and email',() => {
    expect(dest([1, "jdoe", "jdoe@example.com", "John", "Doe"])).toEqual(x);
});

var y= {"username": "jdoe","email": "jdoe@example.com",};

test ('the output should be username and email',() => {
    expect(dest([1, "jdoe", "jdoe@example.com", "John", "Doe"])).toEqual(y);
});
