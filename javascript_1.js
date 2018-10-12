// Write a function that will loop through a list of integers and 
// print the index of each element after a 3 second delay.

// const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function(local_i) {
//     return function() {
//       console.log('The index of this number is ' + local_i);
//     }
//   } (i), 3000);
// }


const arr = [6, 6, 6, 666];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function(local_i) {
    return function() {
      console.log('the index of the number is ' + local_i);
    }
  }(i), 3000);
}



// This is a simple example of a closure -- an inner function has access to variables outside of its scope.