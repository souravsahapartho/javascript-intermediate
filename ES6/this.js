class vehicle {
  constructor(type, price, brand) {
    this.type = type;
    this.price = price;
    this.brand = brand;
  }

  getThis() {
    console.log(this);
  }

  getPrice() {
    return this.price;
  }
}

const car1 = new vehicle("car", 500000, "Toyota");
const car2 = new vehicle("truck", 120000, "Ashok Leyland");
// car1.getThis();
// console.log(car2.getPrice());
// console.log(car1.getPrice());
