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

function getPrimes(n){
var x= 3;
y = 3;
i=2;
resultarr=[];
isPrime= false;
if(n <= 1){
  resultarr=[];
}else if(n === 2){
  resultarr=[2];
}else if(typeof n !== 'number' || typeof n === 'undefined'){
  return "value must be a number"
}

for (;x<=n;x+=2){
  y =  Math.sqrt(x);
  isPrime = true;
  for (i = 2; i <= y; i++){
    if (x % i === 0){
      isPrime = false;
      break;
    }
  }
  if(isPrime){
    resultarr.push(x);
    }
  }   
  return resultarr;
}