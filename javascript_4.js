// show the most common character in a given string.
// for example, maxCharacter('lollipop') should return 'l'

function maxCharacter(str) {
  const charMap = {};
  let maxNum = 0;
  let maxChar = '';

  str.split('').forEach((char) => {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });

  for (let char in charMap) {
    if (charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
    return maxChar;
  }
}

const output = maxCharacter('lollipop');
const outputTwo = maxCharacter('badass');

console.log(output);
console.log(outputTwo);
// first, create an object as a map. This creates an empty object.
// then, split the string and loop through the resulting array with forEach()
// there will be a key-value pair of each actual character and its quantity.
// if the key exists, we want to increment by one
// if no character has been found yet, we want to start at 1 at first encounter
// set an output variable
// Use a for in loop-- loops through object instead of array
// add maxChar variable and maxNum variable, starting as '' and 0
// maxChar is the character with most occurences and maxNum is the quantity.
// These two variables will change, so use 'let'!

// HEY! Return to this and account for words that have more than one 'max number'.
