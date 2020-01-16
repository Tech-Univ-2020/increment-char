const fib = require('./fib');

console.log('should return an array', Array.isArray(fib(2)) === true);

console.log('should return an array of length n', fib(2).length === 2);

fib(2).forEach((num) => {
    console.log(`${num} is a number`, typeof num === "number");
});

console.log('should return an array of n numbers in the fibo seq', fib(2).toString() === '0,1');

console.log('should return an empty array if n = 0', fib(0).length === 0);