const summ = require('./baby_steps');

describe('Sum of numbers ',()=>{
    
    it('This test returns sum of numbers ',()=>{
        return expect(summ([1,2,3,4,5])).toEqual(15);
    });
    it('This test returns check sum of zeros ',()=>{
        return expect(summ([0,0,0,0])).toEqual(0);
    });
    
   
});