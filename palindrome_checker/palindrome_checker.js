/* 
1. remove non-alphanumerics from string
  - spaces
  - punctuation
  - symbols
2. Return everything in lower or uppercase
3. Store initial string for comparison
4. Reverse string and compare to original
  - convert string to array
  - array.reverse
5. Test if initial str is === to reverse
*/    

function alphaOnly(str) {
  let alphas = ""
  switch (str.toLowerCase()) {
    case 'a':
      alphas += "a"
      break;
    case 'b':
      alphas += "b"
      break;
    case 'c':
      alphas += "c"
      break;
    case 'd':
      alphas += "d"
      break;
    case 'e':
      alphas += "e"
      break;
    case 'f':
      alphas += "f"
      break;
    case 'g':
      alphas += "g"
      break;
    case 'h':
      alphas += "h"
      break;
    case 'i':
      alphas += "i"
      break;
    case 'j':
      alphas += "j"
      break;
    case 'k':
      alphas += "k"
      break;
    case 'l':
      alphas += "l"
      break;
    case 'm':
      alphas += "m"
      break;
    case 'n':
      alphas += "n"
      break;
    case 'o':
      alphas += "o"
      break;
    case 'p':
      alphas += "p"
      break;
    case 'q':
      alphas += "q"
      break;
    case 'r':
      alphas += "r"
      break;
    case 's':
      alphas += "s"
      break;
    case 't':
      alphas += "t"
      break;
    case 'u':
      alphas += "u"
      break;
    case 'v':
      alphas += "v"
      break;
    case 'w':
      alphas += "w"
      break;
    case 'x':
      alphas += "x"
      break;
    case 'y':
      alphas += "y"
      break;
    case 'z':
      alphas += "z"
      break;
    case '0':
      alphas += "0"
      break;
    case '1':
      alphas += "1"
      break;
    case '2':
      alphas += "2"
      break;
    case '3':
      alphas += "3"
      break;
    case '4':
      alphas += "4"
      break;
    case '5':
      alphas += "5"
      break;
    case '6':
      alphas += "6"
      break;
    case '7':
      alphas += "7"
      break;
    case '8':
      alphas += "8"
      break;
    case '9':
      alphas += "9"
      break;
  }
  return alphas;
}

function palindrome(str) {
  let og = ""
  let reversed = [];
  for(let i = 0; i < str.length; i++) {
    og += alphaOnly(str[i]);
  }
  //console.log(og);
  
  for(let i = 0; i < og.length; i++) {
    reversed.push(og[i]);
  }
  //console.log(reversed)

  if(og === reversed.reverse().join('')){
    return true;
  } 
  
  else {
    return false;
  }
}

palindrome("eye");