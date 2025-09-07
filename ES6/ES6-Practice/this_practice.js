// Q: Create an object with a method that prints the full name using this.

const person = {
  firstName: "Sourav",
  lastName: "Saha",
  fullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

person.fullName();
