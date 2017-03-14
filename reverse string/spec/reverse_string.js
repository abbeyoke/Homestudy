function reverseString(str){
  var split_arr = str.split("");
  var reversedarr = split_arr.reverse()
  var reversedstr = reversedarr.join("");
  if(str === ''){
    return null;
  }else if (reversedstr === str){
    return true;
  }else{
    return reversedstr;
  }
}