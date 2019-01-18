const catchTest = require('./an_imp_rule');

describe('To check if function throws error',()=>{
    
    it('This test checks if promise is rejected',()=>{
        return expect(catchTest.alwaysThrows).toThrow('OH NOES');
    });
    
    it('This test checks if promise is rejected',()=>{
        return expect(catchTest.promise).resolves.toEqual('OH NOES');
    });
    
    
});



///you must wrap the code in a function in toThrow