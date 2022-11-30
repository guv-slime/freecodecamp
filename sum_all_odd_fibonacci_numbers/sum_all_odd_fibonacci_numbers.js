function getFibs(num) {
  let fib = [1, 1];
  if(num < 3) {
    return fib;
  } else {
    for(let i = 1; i < num - 1; i++){
      fib.push(fib[i] + fib[i-1]);
    }
  }
  return fib;
}

function sumFibs(num) {
  if(num === 1){
    return 1;
  } else {
    let fib = getFibs(num);
    let odd = 0;
  
    for(let i = 0; i <= num; i++){
      if(fib[i] % 2 !== 0 && fib[i] <= num){
        odd += fib[i];
      } 
    }
    return odd;
  }
}
sumFibs(4);