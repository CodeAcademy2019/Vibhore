var p1 = require('./always_asynchronus.js');


test('Testing if promise resolve only one time', () =>{
    expect.assertions(1);
    return expect(p1.promise).resolves.toEqual('I FIRED');
     
} );

