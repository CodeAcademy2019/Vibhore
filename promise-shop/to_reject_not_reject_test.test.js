var p1 = require('./to_reject_not_reject.js');



test('Testing if promise resolve only one time', () =>{
    expect.assertions(1);
    return expect(p1.promise).resolves.toEqual('I FIRED');
     
} );