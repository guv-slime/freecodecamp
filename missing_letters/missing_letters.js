const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function fearNotLetter(str) {
  let first = alphabet.indexOf(str[0]);
  let myLetters = str.split('');

  if(myLetters.length === alphabet.length){
    return undefined;
  } else {
    for(let i = first; i < first + str.length; i++) {
      if(!myLetters.includes(alphabet[i])){
        return alphabet[i];
      }
    }
  }
}
fearNotLetter("abce");