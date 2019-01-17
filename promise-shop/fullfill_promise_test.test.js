var promise1 = require('./fullfill_promise.js');

test('Testing if promise is resolved or not', () =>{
    expect.assertions(1);
    return promise1.then( (x) =>{
        expect(x).toEqual('FULFILLED!');
    } );
} );