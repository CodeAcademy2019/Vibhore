const roll = require('./code1');

const test1 = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
const test2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10];
const test3 = [6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const test4 = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10];
const test5 = [3,4,4];
const test6 = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 10, 6];
const test7 = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 10, 10,4];

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

describe('Boundary test case checking',()=>{
    it('This test checks the score of player who hits always strikes ',()=>{
        return expect(roll(test4)).toEqual(300);
    });
    it('This test checks the score of player who quits his game early ',()=>{
        return expect(roll(test5)).toEqual("Score 0. Game not finished");
    });
    it('This test checks the score of player who score strike at the 10th frame',()=>{
        return expect(roll(test6)).toEqual(97);
    });
    it('This test checks the score of player who score spare at the 10th frame',()=>{
        return expect(roll(test7)).toEqual(105);
    });
    
});