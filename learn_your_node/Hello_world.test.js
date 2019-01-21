const hello = require('./Hello_world.js');

describe('Hello World Test ',()=>{
    
    it('This test check if output is Hello World ',()=>{
        return expect(hello()).toEqual("HELLO WORLD");
    });
    
   
});