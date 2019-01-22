var cumm_score = 0;

const roll = (arr) => {
    if(arr.length <20){
        return ("Score 0. Game not finished");
    }
    var frame = [];
    
    for(var i=0;i<arr.length-2;i+=2){
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
    // console.log(frame);
    if( (arr.length) ===21 && arr[arr.length-2]!=10) {
        frame.push(arr[arr.length-1]);
    } 
    else if(arr.length!=21 && arr[arr.length-2]) {
        
        frame.push(arr[arr.length-2]+arr[arr.length-1] );

    }
   
    return frame.reduce( (summ,x) => summ + x);

}
    module.exports = roll;

