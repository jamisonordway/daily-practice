// reverse a string!

function reverseStringFour(str) {
  return str.split('').reverse().join('');
}

console.log(reverseStringFour('que paso'));
// we could create a new variable and set it to the string that's passed in with split()
// split() turns a string into an array and takes in a param of a separator
// we want each character to be put into its own array value, so we'll set the param to ''.
// now, we can use the array prototype method reverse(), then join() to reassemble
function reverseString(str) {
  const strArray = str.split('');
  strArray.reverse('');
  return strArray.join('');
}
reverseString('Whats goin on');

// let's refactor!

function reverseStringTwo(str) {
  return str.split('').reverse().join('');
}
reverseStringTwo('What');

// can we do it with a loop?

function reverseStringThree(str) {
  let revString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    revString += str[i];
  }
  return revString;
}
reverseStringThree('Careful, Spongebob');

// first, create a new var which contains an empty string
// create a for loop, using str.length - 1 since it will correspond
// to the last letter in the string.
// Loop as long as i is greater than or equal to 0, and 
// decrement after each iteration. 
// last, add the newString var to it's self and to the index value
// of the array 'str' and return revString

// now solve it recursively!


function reverse(val) {
  if (val.length <= 1) {
    return val
  }
  return reverse(val.substr(1)) + val[0];
}
console.log(reverse('google'));
