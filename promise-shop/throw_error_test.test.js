const promise = require('./throw_error');

var json = '{"result":true, "count":42}';

describe('Promise Parsing',()=>{
    it('This test checks if promise is resolved and json is returned ',()=>{
        return expect(promise(json)).resolves.toEqual({ result: true, count: 42 });
    });
    it('This test checks if promise is rejected',()=>{
        return expect(promise()).rejects.toThrow('Error!!!');
    });
    
});