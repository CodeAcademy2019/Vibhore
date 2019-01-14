// module.exports = (...a) => {
//     return (a.reduce((summ,x) => {return summ+x},0))/a.length;

// };

var average = (...a)=>{
    
        return (a.reduce((summ,x) => {return summ+x},0))/a.length;
    
    
};

module.exports=average;
