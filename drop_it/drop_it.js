function dropElements(arr, func) {
  for(let i = 0; i < arr.length; i++) {
    if(func(arr[i]) === true) {
      return arr;
    }
    arr.shift();
    i = -1;
  }
  return arr;
}