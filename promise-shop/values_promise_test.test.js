const promiseValues = require('./values_promises');

describe('Promise',()=>{
    it('This test checks if promise handlers will wrap your returned values',()=>{
        return expect(promiseValues).resolves.toEqual('DR. MANHATTAN');
    });
});