const numbers = [10, 20, 30];
const sum = 0;

const reduceEx = numbers.reduce(function(sum, number) {
  return sum + number;
}, 20);

console.log(reduceEx);