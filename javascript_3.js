// palindromes!

// function isPalindrome(str) {
//   const revString = str.split('').reverse().join('');

//   return revString === str;
// }

// The above could be refactored.

function isPalindrome(str) {
  str = str.toLowerCase();
  return str === str.split('').reverse().join('');
}

// this will return the string (split on each char into an array and reversed, then joined together again)
// if it is the same as str (the original passed in value)
// Make sure to account for capitalization!

console.log(isPalindrome('racecar'));
console.log(isPalindrome('sup'));

