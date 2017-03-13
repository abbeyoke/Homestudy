/*beforeEach(function () {
  jasmine.addMatchers({
    toBePlaying: function () {
      return {
        compare: function (actual, expected) {
          var player = actual;

          return {
            pass: player.currentlyPlayingSong === expected && player.isPlaying
          };
        }
      };
    }
  });
});*/

//find min

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
    if (data[2] !== null){
      return data[2];
    }else{
      return 'undefined';
    }
  }else if (typeof data === 'function'){
    var x = true
    return data(x);
  }
}