const students = [
  {
    id: 1,
    name: "Abul",
    marks: 90,
  },
  {
    id: 2,
    name: "Babul",
    marks: 30,
  },
  {
    id: 3,
    name: "kabul",
    marks: 85,
  },
]

const names=students.map(student=>student.name)
const goodStudents=students.filter(student=>student.marks>80)
const goodStudent=students.find(student=>student.marks>80)
console.log(names);
console.log(goodStudents);
console.log(goodStudent);