//closure --> A function is defined inside another function

// function counter() {
//   let count = 0;
//   function innerFunction() {
//     console.log("Inside the inner function, someone called me");
//   }
//   return innerFunction;
// }

// const output = counter();
// console.log(output());

function counter() {
  let count = 10;

  return function (user) {
    count += 1;
    console.log("Inside the inner function", user, count);
  };
}

// const innerFunc = counter();

// innerFunc();

// innerFunc();

const rahimCounter = counter();
rahimCounter("rahim");
rahimCounter("rahim");
rahimCounter("rahim");
rahimCounter("rahim");
console.log("---------------");

const KarimCounter = counter();
KarimCounter("karim");
KarimCounter("karim");
KarimCounter("karim");
KarimCounter("karim");
rahimCounter("rahim");

const jabbarCounter = counter();
jabbarCounter("jabbar");
jabbarCounter("jabbar");
KarimCounter("karim");
