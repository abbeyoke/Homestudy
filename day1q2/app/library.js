'use strict'

module.exports = {
//find min
function findMinMax(arr){
  if (!arr.some(isNaN)){
    var maxi = Math.max.apply(null,arr);
	var mini = Math.min.apply(null,arr);
	var arr2 = [];
	arr2.push(mini);
	arr2.push(maxi);
	return arr2
  }else{
    return "Array must contain only integers";
  }	
}
 
}
