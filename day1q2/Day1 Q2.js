function findPrimeNums(n){ 
var x= 3;
y = 3;
i=2;
resultarr=[];
isPrime= false;
if(n <= 1){
  resultarr=[];
}else if(n === 2){
  resultarr=[2];
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