const list_filter = require('./filteredLS');


var loc = '/Users/Vibhore_Gupta/javascripting/learn_your_node/';
var exten = 'txt';
describe('No of files ', () => {

    it('This test check no. of files with particular extension in a directory ', (done) => {
        const callback = (list) => {
            expect(list).toEqual(['content1.txt', 'content2.txt', 'content3.txt']);
            done();
        };
        list_filter.file_finder(loc, exten, callback);
    });
    // it('This test find no. of lines in a file ',()=>{
    //     const callback = (val)=>{
    //         expect(val).toEqual(3);
    //     };
    //     countLine.lineCount(file2,callback);
    // });
    // it('This test check if file is empty ',()=>{
    //     const callback = (val)=>{
    //         expect(val).toEqual(0);
    //     };
    //     countLine.lineCount(file3,callback);
    // });


});




