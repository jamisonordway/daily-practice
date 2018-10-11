//find the greatest common denominator of 2 non-negative numbers.

function greatestCommon(num1, num2) {
  if ((typeof num1 !== 'number') || (typeof num2 !== 'number'))
    return false;
    num1 = Math.abs(num1);
    num2 = Math.abs(num2);
    while(num2) {
      let t = num2;
      num2 = num1 % num2;
      num1 = t;
    }
    return num1;
}

console.log(greatestCommon(12, 13));
console.log(greatestCommon(9, 3));


function greatestCommonDenom(x, y) {
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    let t = y;
    y = x % y;
    x = t;
  }
  return x;
}

console.log(greatestCommonDenom(40, 10));