const reduce = (arr, fn, initial) =>  {

  return (function recur(i, value)  {
  	if(i > arr.length - 1) return value;
  	return recur(i + 1, fn(value, arr[i], i, arr))
  })(0, initial)
};

module.exports=reduce;