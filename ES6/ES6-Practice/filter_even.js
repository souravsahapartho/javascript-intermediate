// Q: Given an array of numbers, return a new array containing only the even numbers.

const numbers = [1, 2, 3, 4, 5, 6];

const evens = numbers.filter(num => num % 2 === 0);
console.log(evens);
