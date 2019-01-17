const promiseReturnPromise = require('./promise_after_promise.js');

describe('promise',()=>{
    it ('should return output of first function', ()=>{
        return (expect(promiseReturnPromise.a).resolves.toEqual('Hello from first.'));
    });
    it ('should return message from first and second function',()=>{
        return (expect(promiseReturnPromise.b).resolves.toEqual('Hello from first. Hello from second.'));
    })
})
