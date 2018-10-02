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
