const myCar = require('./my_car');
const Person = require('./person');

console.log(myCar);
console.log(myCar.price);

// instantiate the person object

const person1 = new Person('Gerald Pique', 29);
person1.greeting();
