var factorial = (n) => {
    if(n<0){
        return "input rejected";
    }else {
    if (n<=1)
        return 1;
    else {
        return n * factorial(n-1);
    }
}
    };
    
    module.exports = factorial;
    