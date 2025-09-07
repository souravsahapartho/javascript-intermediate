// Q: From an array of numbers, filter out odd numbers, then square the even ones.

const nums = [1, 2, 3, 4, 5];
const result = nums.filter((n) => n % 2 === 0).map((n) => n * n);
console.log(result);
