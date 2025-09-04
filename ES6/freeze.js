const employee = {
  name: "Raja rani",
  designation: "QA",
  salary: 20000,
  experience: 1,
  age: 18
};

Object.freeze(employee);

delete employee.experience;
employee.location='Dhaka';
console.log(employee);