const product = { name: 'shirt', price: 500, quantity: 7 };


const { price } = product;


const discount = price * 20 / 100;
const yourpay = price - discount;
const vatAmount = price * 7 / 100;
const totalAmount = yourpay + vatAmount;

console.log("Price:", price);
console.log("Discount:", discount);
console.log("Pay after discount:", yourpay);
console.log("VAT Amount:", vatAmount);
console.log("Total Amount:", totalAmount);


const device = { name: 'phone', brand: 'oppo', price: 17000 };
const { brand } = device;
console.log("Brand:", brand);

const numbers = [25, 88];
const [first, second] = numbers;
console.log("First:", first, "Second:", second);
