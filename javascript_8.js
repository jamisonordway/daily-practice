function changeToInt(str) {
  if(str == null) return -1;
  let num = charToInt(str.charAt(0));
  let pre, curr;

  for(var i = 1; i < str.length; i++) {
    curr = charToInt(str.charAt(i));
    pre = charToInt(str.charAt(i - 1));
      if (curr <= pre) {
        num += curr;
      } else {
        let difference = curr - pre
        num = num + difference - pre
      }
  }
  return num;
}

function charToInt(char) {
  switch (char) {
    case 'I': return 1;
    case 'V': return 5;
    case 'X': return 10;
    case 'L': return 50;
    case 'C': return 100;
    case 'D': return 500;
    case 'M': return 1000;
    default: return -1; 
  }
}

console.log(changeToInt('CIV'));
console.log(changeToInt('III'));
console.log(changeToInt('LCIX'));