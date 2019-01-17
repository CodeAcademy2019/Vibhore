var rj = require('./reject.js');


jest.useFakeTimers();
test('waits 300ms before printing ouptut', () => {
    rj.f1();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 300);
  });



test('Testing if promise is rejected or not',  () =>{
    // expect.assertions(1);
    // expect(rj.promise).rejects.toHaveBeenLastCalledWith('ASFD');
    return expect(rj.promise).rejects.toThrow("REJECTED!");
     
} );

// test(`uppercase 'test' to equal 'TEST'`, () => {
//     return uppercase('').catch(e => {
//       expect(e).toMatch('Empty string')
//     })
//   })

