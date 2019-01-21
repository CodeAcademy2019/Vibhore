const countLine = require('./my_first_io');
const fs= require('fs');
var file1= fs.readFileSync('./content1.txt').toString();
var file2= fs.readFileSync('./content2.txt').toString();
var file3= fs.readFileSync('./content3.txt').toString();

describe('Line count in file ',()=>{
    
    it('This test find no. of lines in a file ',()=>{
        return expect(countLine(file1)).toEqual(5);
    });
    it('This test find no. of lines in a file ',()=>{
        return expect(countLine(file2)).toEqual(3);
    });
    it('This test returns check if file is empty ',()=>{
        return expect(countLine(file3)).toEqual(0);
    });
    
   
});