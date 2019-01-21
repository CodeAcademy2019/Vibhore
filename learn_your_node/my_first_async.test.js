const countLine = require('./my_first_async');
const fs= require('fs');
var file1= './content1.txt';
var file2= './content2.txt';
var file3= './content3.txt';


describe('Line count in file ',()=>{
    
    it('This test find no. of lines in a file ',()=>{
        const callback = (val)=>{
            expect(val).toEqual(5);
        };
        countLine.lineCount(file1,callback);
    });
    it('This test find no. of lines in a file ',()=>{
        const callback = (val)=>{
            expect(val).toEqual(3);
        };
        countLine.lineCount(file2,callback);
    });
    it('This test check if file is empty ',()=>{
        const callback = (val)=>{
            expect(val).toEqual(0);
        };
        countLine.lineCount(file3,callback);
    });
    
   
});




