function dataTypes(data){
  if (typeof data === "string"){
    return data.length;
  }else if(data === null && typeof data === "object" || typeof data === "undefined"){
    return "no value";
  }else if(typeof data === 'boolean'){
    return data
  }else if(typeof data === 'number'){
    if (data < 100){
      return "less than 100"
    }else if(data > 100){
      return "more than 100"
    }else{
      return "equal to 100"
    }
  }else if(data.constructor === Array && typeof data === "object"){
    if (data[3] !== null){
      return data[3];
    }else{
      return 'undefined';
    }
  }else if (typeof data === 'function'){
    var x = true
    return data(x);
  }
}