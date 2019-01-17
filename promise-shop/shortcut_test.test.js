var promise = require('./shortcut.js');



it('Testing of promise reject',  async() => {
    
    await expect(promise).rejects.toThrow('Error!');
     
} );