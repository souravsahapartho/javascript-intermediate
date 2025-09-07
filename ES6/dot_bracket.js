const student = {
  name: "Rafid",
  1: 50,
  homeaddress:  'shahbagh',
  marks: 90
};


//dot notation
const studentName = student.name;
console.log(student);

//bracket notation
const student2=student['name'];
console.log(student2);


console.log(student.homeaddress);

for(const key in student){
    const value=student[key];
}

const propName='marks';
console.log(student[propName]);


