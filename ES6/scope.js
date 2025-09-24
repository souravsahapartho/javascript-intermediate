const name = "Tom";
console.log('location:',location);
if (true) {
  const data = 58;
  console.log("inside the if block", data, name);
  doMath(88, 999);
}

// console.log(data);

for (const number of [1, 2, 3, 4, 5, 6]) {
}

//function scope or local scope
function doMath(a, b) {
  console.log(a, b);
  const sum = a + b;
  const total = sum + 10;

  function doubleIt(x) {
    return x * 2;
  }
  console.log("calling doubleIt", doubleIt(450));
}

// var location = "BalurGhat";
// let location = "BalurGhat";

// console.log(a,b);
