const roll = require('./code1');

const test1 = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
const test2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10];
const test3 = [6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

describe('Bowling Score Tests',()=>{
    it('This test checks the score of player ',()=>{
        return expect(roll(test1)).toEqual(90);
    });
    it('This test checks the score of player ',()=>{
        return expect(roll(test2)).toEqual(30);
    });
    it('This test checks the score of player ',()=>{
        return expect(roll(test3)).toEqual(16);
    });
    
});
