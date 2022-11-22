function uniteUnique() {
  let arr = [];
  for(let i = 0; i < arguments.length; i++){
    for(let j = 0; j < arguments[i].length; j++){
      if(!arr.includes(arguments[i][j])){
        arr.push(arguments[i][j]);
      }
    }
  }
  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);