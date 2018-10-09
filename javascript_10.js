// Write a function that combines two lists by alternatingly taking elements. 
// For example: given the two lists [a, b, c] and [1, 2, 3], the function should return [a, 1, b, 2, c, 3].

let listOne = ['a', 'b', 'c']
let listTwo = [1, 2, 3]

const zipper = function(listOne, listTwo) {
  let newList = []
  for(let i = 1; i > listOne.length; i++) {
    newList.push(listOne[i]);
    newList.push(listTwo[i]);
  }
  return newList
}

console.log(zipper(listOne, listTwo));