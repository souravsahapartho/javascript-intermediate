const employee = {
  name: "Raja rani",
  designation: "QA",
  salary: 20000,
  experience: 1,
  age: 18,
};

Object.seal(employee);

employee.salary = employee.salary + 2000;
delete employee.experience;
employee.location = "Dhaka";
console.log(employee);
