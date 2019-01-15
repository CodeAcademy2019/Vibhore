// function checkUsersValid(goodUsers) {


//     return function allUsersValid(submittedUsers) {
//       // SOLUTION GOES HERE
//         var a=[];
//       var temp1 = goodUsers.map((x) => x['id']);
//       var temp2=submittedUsers.map((x) => x['id']);
//         var flag = 0;
//       for(var i=0; i<temp2.length; i++){
//           if(temp1.indexOf(temp2[i])===-1)
//             { 
//                 flag=-1;
//                 break;
//             }
//       }
//           if (flag===0)
//             return true;
//         else
//             return false;

      
//     };
//   }






function checkUsersValid(goodUsers) {


    return function allUsersValid(submittedUsers) {
      // SOLUTION GOES HERE
      var a=[];
      var temp1 = goodUsers.map((x) => x['id']);
      var temp2=submittedUsers.map((x) => x['id']);
      
      var check = (a1 ) => {
        for(var i=0; i<temp2.length; i++){
            if(temp1.indexOf(temp2[i])===-1)
              { 
                  flag=-1;
                  
              }
        }


      };
      
      
      
        var flag = 0;
      
          if (flag===0)
            return true;
        else
            return false;

      
    };
  }

  module.exports = checkUsersValid
