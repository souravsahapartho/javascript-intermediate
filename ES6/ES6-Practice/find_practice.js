// Q: Find the first user who is above 18 years old.\

const users = [
  { name: "Sourav", age: 17 },
  { name: "Alex", age: 20 },
  { name: "Mina", age: 15 },
];

const adult = users.find((user) => user.age > 18);
console.log(adult);
