function isVowel(str){ 
  switch(str.charAt(0)) {
    case 'a':
      console.log('a');
      return true;
    case 'e':
      console.log('e');
      return true;
    case 'i':
      console.log('i');
      return true;
    case 'o':
      console.log('o');
      return true;
    case 'u':
      console.log('u');
      return true;
    default:
      return false;
  }
}

function hasVowel(str){
  let vowels = 0;
  for(let i = 0; i < str.length; i++){
    if(isVowel(str[i]) === true) {
      vowels++;
    }
  }
  return vowels;
}

function translatePigLatin(str) {
  let cluster = '';
  if(isVowel(str) === true){
    return str + 'way';  
  } else if(hasVowel(str) === 0) {
    console.log('hello');
    return str + 'ay';
  } else {
    for(let i = 0; i < str.length; i++){
      if(isVowel(str[i]) === false){
        cluster += str[i];
      } else {
        if(hasVowel(cluster))
        console.log(str.substring(i)+cluster+'ay')
        return str.substring(i) + cluster + 'ay';
      }
    }
  }
}
console.log(translatePigLatin('rhythm'));
