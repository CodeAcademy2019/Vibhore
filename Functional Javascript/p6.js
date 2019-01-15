function countWords(inputWords) {
    // SOLUTION GOES HERE
    var a = inputWords.reduce( (final,x) => {
        final[x] = ++final[x] || 1;
        return final;
    }, {} );
    return a;
  }

  module.exports = countWords