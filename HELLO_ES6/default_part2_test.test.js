const mimp = require('./default_part2.js');



test ("the output should should be equal to the string + '!'xlength of the string.",() => {
    expect(mimp("hello",2)).toEqual("hello!!");
});

test ("the output should should be equal to the string + '!'xlength of the string.",() => {
    expect(mimp("hello",4)).toEqual("hello!!!!");
});

test ("the output should should be equal to the string + '!'xlength of the string.",() => {
    expect(mimp("hello")).not.toEqual("hello");
});