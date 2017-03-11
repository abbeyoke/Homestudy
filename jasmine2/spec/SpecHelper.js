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
function fizzBuzz(num){
  if (num%3===0 && num%5!==0){
    return 'Fizz'
  }else if(num%5===0 && num%3!==0){
    return 'Buzz';
  }else if (num%3===0 && num%5===0){
    return 'FizzBuzz'
  }else{
    return num
  }
}