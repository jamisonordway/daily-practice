// reverse a string!


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
