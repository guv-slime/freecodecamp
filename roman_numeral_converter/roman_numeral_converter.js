function convertToRoman(num) {
  let roman = [];
  while(num > 0){
    if(num >= 1000) {
      roman.unshift('M');
      num -= 1000;
    } 
    if(num >= 900 && num < 1000) {
      roman.push('CM');
      num -= 900;
    } 
    if(num >= 500 && num < 900) {
      roman.push('D');
      num -= 500;
    } 
    if(num >= 400 && num < 500) {
      roman.push('CD');
      num -= 400;
    } 
    if(num >= 100 && num < 400) {
      roman.push('C');
      num -= 100;
    } 
    if(num >= 90 && num < 100) {
      roman.push('XC');
      num -= 90;
    } 
    if(num >= 50 && num < 100) {
      roman.push('L');
      num -= 50;
    } 
    if(num >= 40 && num < 50) {
      roman.push('XL');
      num -= 40;
    } 
    if(num >= 10 && num < 40) {
      roman.push('X');
      num -= 10;
    } 
    if(num >= 9 && num < 10) {
      roman.push('IX');
      num -= 9;
    } 
    if(num >= 5 && num < 9) {
      roman.push('V');
      num -= 5;
    } 
    if(num >= 4 && num < 5) {
      roman.push('IV');
      num -= 4;
    } 
    if(num >= 1 && num < 4) {
      roman.push('I');
      num -= 1;
    }
  }
  return(roman.join(''));
}

console.log(
  convertToRoman(97)
);