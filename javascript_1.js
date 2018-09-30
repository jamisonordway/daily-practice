// Write a function that will loop through a list of integers and 
// print the index of each element after a 3 second delay.




const arr = [1, 4, 2, 3, 6];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function(local_i) {
    console.log('The number is ' + local_i);
  } (i), 3000);
}

// const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function() {
//     console.log('The index of this number is: ' + i);
//   }, 3000);
// }

// the above solution is incorrect. It will print 4 after a 3 second delay, because the setTimeout
// function creates a closure that has access to its outer scope, which is the loop that contains
// the index 'i'. After 3 seconds, the function is executed and it prints out the value of i,
// which at the end of the loop is '4' because it has cycled through the 0,1,2,3,4 loop.

const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function(local_i) {
    return function() {
      console.log('The index of this number is ' + local_i);
    }
  } (i), 3000);
}

// With this solution, we are passing in the variable 'i' so that each function
// has access to the correct index. The 'local_i' is printed and then changed when 'i' is incremented.

// This is a simple example of a closure -- an inner function has access to variables outside of its scope.