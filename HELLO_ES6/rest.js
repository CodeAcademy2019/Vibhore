// module.exports = (...a) => {
//     return (a.reduce((summ,x) => {return summ+x},0))/a.length;

// };

var average = (...a)=>{
    if(a.length===0)
        {
                return "Please pass any argument";
        }
        return (a.reduce((summ,x) => {return summ+x},0))/a.length;
    
    
};

module.exports=average;
