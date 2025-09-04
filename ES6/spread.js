const numbers = [35, 22, 44, 2, 2, 1];
console.log(numbers);
console.log(...numbers);

// const max = Math.max(21, 33, 2, 1110221, 33, 2222, 3, 233333, 2);
const max = Math.max(...numbers);
console.log(max);

// const first = [1, 2, 3, 4, 5];
// const second = first;
// second.push(6);
// console.log(first);\

const first = [1, 2, 3, 4, 5];
const second = [...first];
const third = [0, ...first, 97, 322, 345];
second.push(6);
console.log(first);
console.log(second);
console.log(third);

const ages = [23, 56, 43];
const prices = [98, 332, 123];
const all = [...ages, ...prices];
console.log(all);

const person = { name: "Mizan", age: 45 };
const employee = { designation: "dev", ...person };
console.log(employee);

// const total=(a,b,c)=>a+b+c;
// const result=total(45,33,63);
// const digits=[344,25,43];
// total(digits);
