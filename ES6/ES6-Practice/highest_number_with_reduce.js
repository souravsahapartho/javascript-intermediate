// Q: Find the largest number in an array using reduce.

const numbers = [3, 56, 23, 88, 12];

const max=numbers.reduce((a,b)=>(a>b?a:b));
console.log(max);