// Given a set of brackets, [, {, (, create a function that determines 
// if the brackets are well-formed (match) or not - even with bracket nesting. 
// bracket('{}');
// // => true
// bracket('{(');
// // => false
// bracket('({[]}{[]})');
// // => true
// bracket('{[)][]}');
// // => false
// test comment

function isValid(str) {
  if (str.length <= 1)
    return false

  let matchingOpener, char
  let stack = []
  
  let openers = ['[', '{', '(']
  let closers = [']', '}', ')']

  for (let i = 0; i < str.length; i++) {
    char = str[i]

    if (closers.indexOf(char) > -1) {
      matchingOpener = openers[closers.indexOf(char)]
      if (stack.length == 0 || (stack.pop() != matchingOpener)) {
        return false
      } else {
        stack.push(char)
      }
    }
    return (stack.length == 0) 
  }
}

console.log(isValid("["))