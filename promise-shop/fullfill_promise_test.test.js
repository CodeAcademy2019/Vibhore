var f1 = require('./fullfill_promise.js');

jest.useFakeTimers();
test('waits 300ms before printing ouptut', () => {
    f1.fun();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 300);
  });



test('Testing if promise is resolved or not', () =>{
    expect.assertions(1);
    
    return f1.promise.then( (x) =>{
        expect(f1.promise).resolves.toEqual('FULFILLED!');
    } );
} );

