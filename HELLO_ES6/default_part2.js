module.exports = function makeImportant(s,count=s.length){
    return (s+'!'.repeat(count));
};