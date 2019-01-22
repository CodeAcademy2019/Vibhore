var cumm_score = 0;

const roll = (arr) => {

    var frame = [];
    
    for(var i=0;i<20;i+=2){
        var temp_score = 0;
        var frameSum =  arr[i] + arr[i+1];
        if(arr[i]===10){
            temp_score += 10 + arr[i+1] + arr[i+2];
            frame.push(temp_score);
        } else if (arr[i] < 10 ) {
            //temp_score += frameSum;
            if(frameSum === 10){
                temp_score = 10 + arr[i+2];
                frame.push(temp_score);
            } else {
                frame.push(frameSum);
            }


        }
        frameSum=0;

    }
    // if(arr.length<21){
    //     arr[0]
    // }
    return frame.reduce( (summ,x) => summ + x);






};
const test1 = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];

console.log(roll(test1));





// Sample Test

// Testcase1:
// Rolls: 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6
// Score: 90

// Testcase2:
// Rolls: 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10
// Score: 30

// Testcase3:
// Rolls: 6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
// Score: 16
module.exports = roll;