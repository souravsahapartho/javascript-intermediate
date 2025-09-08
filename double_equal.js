// type coersion (type convert)
//

/* if one value is string , another is number : converts string--> number, then compare*/

// if one is boolean and another is number. converts boolean to number

console.log(2 == 2);
console.log(2 == "2");
console.log(2 == "12");
console.log(1 == 2);
console.log(true == 1);
console.log(false == 0);
console.log(true == "1"); //1=='1 --> 1==1
console.log(false == "0"); //0=='0' --> 0==0
console.log(null == undefined);
console.log(NaN == NaN);
console.log([] == "");
console.log([5] == "5");
console.log([5] == 5);
console.log([5].toString());
console.log({} == {});
console.log([5] == [5]);
const p = [4, 5, 6, 7];
const q = p;
console.log(p == q);
// console.log(0 == "");
