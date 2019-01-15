const mimp = require('./default_part2.js');



test ("the output should should be equal to the string + '!' x (second argument).",() => {
    expect(mimp("hello",2)).toEqual("hello!!");
});

test ("the output should should be equal to the string + '!' x (second argument).",() => {
    expect(mimp("hello",4)).toEqual("hello!!!!");
});

test ("the output should should be equal to the string + '!' x (length of the string if second argument is not passed).",() => {
    expect(mimp("hello")).not.toEqual("hello");
});