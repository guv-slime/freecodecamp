function isUpper(str){
  if(str[0] === str.toUpperCase()){
    return true;
  } else {
    return false;
  }
}

function myReplace(str, before, after) {
  let arr = str.split(' ');
  let location = arr.indexOf(before);
  let caseWord = after.substring(1);

  if(isUpper(arr[location][0]) === true){
    arr[location] = after[0].toUpperCase() + caseWord;
    return arr.join(' ');
  } else {
    arr[location] = after[0].toLowerCase() + caseWord;
    return arr.join(' ');
  }
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "all");