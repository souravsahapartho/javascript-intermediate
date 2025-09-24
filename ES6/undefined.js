// Undefined--->Not defined

let money;
// console.log(money);

function total(a, b) {
  //   console.log("value of parameters", a, b);
  const sum = a + b;
  //   console.log(sum);
}

function total2(a, b) {
  //   console.log("Value of parameters", a, b);
  if (a == undefined || b == undefined) {
    return;
  }
  if (a && b) {
    const sum = a + b;
    return sum;
  }
}

// total()
const result = total(5, 7);
// console.log("value of function call", result);

const result2 = total2(1);
// console.log('result2',result2);

const phone = {
  brand: "oppo",
  price: 12000,
};
// console.log(phone.color);

const banks = ["sonali", "brac", "ebl", "mtb"];
// console.log(banks[11]);
delete banks[1];
// console.log(banks);

console.log("type of undefined", typeof undefined);


console.log('type of null',typeof null);