const multiplePromise = require('./multiple_promise');
 let output =["Promise 1", "Promise 2"];
describe('Multiple promise ',()=>{
    
    it('This test return internal promise with an array containing both values of promises ',()=>{
        return expect(multiplePromise).resolves.toEqual(output);
    });
    
    it('This test checks if promise is not resolved ',()=>{
        return expect(multiplePromise).resolves.not.toEqual('Error !!!');
    });
});