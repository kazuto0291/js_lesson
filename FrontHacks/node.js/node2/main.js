const math = require('./math');
const Person = require('./Person');

// console.log(math);
// console.log(Person);

console.log(math.add(1, 2));
console.log(math.sub(1, 2));

const person1 = new Person('ユーザー１');
console.log(person1);
person1.introduceMySelf();