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