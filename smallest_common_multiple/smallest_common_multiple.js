function smallestCommons(arr) {
  let start = (arr[0] < arr[1]) ? arr[0] : arr[1];
  let end = (arr[0] < arr[1]) ? arr[1] : arr[0];

  for(let x = 1; ; x++){
    // console.log(x, x % start !== 0, x % end !== 0)

    // if x can't be evenly divided, skip 
    if(x % start !== 0 || x % end !== 0) {
      continue;
    }
    for(let inbetween = (start+1); inbetween < end; inbetween++){
      // console.log("\t", inbetween, x, inbetween === (end-1), end-1)
      // checking between start and end range
      if(x % inbetween !== 0){
        // console.log("\t", inbetween)
        break;
      } 
      if(inbetween === (end - 1)){
        // console.log("\t", "SHould return x");
        return x;
      }
    }
  }
}

console.log(smallestCommons([1, 5]));

let xx = 60;
console.log(xx % 1)
console.log(xx % 2)
console.log(xx % 3)
console.log(xx % 4)
console.log(xx % 5)

// Find the smallest common multiple
// can be evenly divided by both numbers
// can be divided evenly between numbers in range

/*
smallestCommons([1, 5]) should return a number.
smallestCommons([1, 5]) should return 60.
smallestCommons([5, 1]) should return 60.
smallestCommons([2, 10]) should return 2520.
smallestCommons([1, 13]) should return 360360.
smallestCommons([23, 18]) should return 6056820.
*/