function checkEntity(str) {
  switch(str){
    case `<`:
      return '&lt;'
    case `>`:
      return '&gt;'
    case `&`:
      return '&amp;'
    case `"`:
      return '&quot;'
    case `'`:
      return '&apos;'
  }
}

function convertHTML(str) {
  let converted = '';
  for(let i = 0; i < str.length; i++){
    if(checkEntity(str.charAt(i)) !== undefined ){
      converted += checkEntity(str.charAt(i));
    } else {
      converted += str.charAt(i);
    }
  }
  return converted;
}

convertHTML("Dolce & Gabbana");