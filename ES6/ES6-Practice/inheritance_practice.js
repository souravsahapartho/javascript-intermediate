// Q: Create a Person class with name and age. Create a Student class that extends Person and adds grade.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  info() {
    return `${this.name} is ${this.age} years old and got grade ${this.grade}`;
  }
}

const student = new Student("Sourav", 22, "A");
console.log(student.info());
