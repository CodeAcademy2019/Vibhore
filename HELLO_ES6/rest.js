module.exports = (...a) => {
    return (a.reduce((summ,x) => {return summ+x},0))/a.length;

};
