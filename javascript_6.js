//Write a function that computes the list of the first 100 Fibonacci numbers. 
// By definition, the first two numbers in the Fibonacci sequence are 0 and 1,
// and each subsequent number is the sum of the previous two. 
// As an example, here are the first 10 Fibonnaci numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, and 34.

const fibonacci_sequence = function (n) {
  if (n === 1) {
    return [0, 1]
  } else {
    let sequence = fibonacci_sequence(n - 1);
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    return sequence;
  }
};

console.log(fibonacci_sequence(100))