const numbers = [1, 2, 3];

const doubledNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
}


const doubled = numbers.map(function(number) {
  return number * 3;
})

doubled;

doubledNumbers;

console.log(doubled);
console.log(doubledNumbers);

// ======================================

const cars = [
  {type: '軽自動車', price: '安い'},
  {type: '高級車', price: '高い'},
  {type: '自動車', price: '普通'},
  {type: '原付き', price: '安い'},
  {type: '中型', price: '普通'},
  {type: '大型', price: '高い'}
];

const prices = cars.map(function(car) {
  return car.price;
})

console.log(prices);

const types = cars.map((car) => {
  return car.type;
})

console.log(types);