function isPrime(num){
  let remainder = 0;
  for(let i = 1; i <= num; i++){
    if(num % i === 0) {
      remainder++;
    }
  }
  if(remainder <= 2){
    return true;
  } else {
    return false;
  }
}

function sumPrimes(num) {
  let sum = 0;
  for(let i = 2; i <= num; i++){
    if(isPrime(i)){
      sum += i;
    }
  }
  return sum;
}

sumPrimes(10);