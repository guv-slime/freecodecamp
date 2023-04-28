let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function rot13(str) {
  let decoded = "";
  let current = "";

  for(let i = 0; i < str.length; i++){
    current = alphabet.indexOf(str[i]);

    if(current >= 13) {
      decoded += alphabet[current - 13];
    } else if( current === -1) {
      decoded += str[i];
    } else {
      decoded += alphabet[current + 13];
    }
  }
  return decoded;
}
console.log(rot13("SERR CVMMN!"));