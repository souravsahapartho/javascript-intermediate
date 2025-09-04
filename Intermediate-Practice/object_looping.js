const number=[1,2,54,1,4,9];
for(const num of number){
    console.log(num);
}

const employee = {
  name: "Raja rani",
  designation: "QA",
  salary: 20000,
  experience: 1,
  age: 18
};

for(const key in employee){
    const value=employee[key];
    console.log(key, value);
}


const keys=Object.keys(employee)
console.log(keys);
for(const key of keys){
    const value=employee[key]
    console.log(value);
}