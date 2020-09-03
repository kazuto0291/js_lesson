

const result1 = dropRight(numbers);
console.log(result1, numbers);
// // => [1, 2]

// dropRight(numbers, 2);
const result2 = dropRight(numbers, 2);
console.log(result2, numbers);
// // => [1]

const result3 = dropRight(numbers, 5);
console.log(result3, numbers);
// => []

const result4 = dropRight(numbers, 0);
console.log(result4, numbers);
// => [1, 2, 3]