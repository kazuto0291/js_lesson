function dropRight(array, size = 1) {
  if (size === 0) {
    return [...array];
  }

  if (array.length <= size) {
    return [];
  }

  const droppedRightArray = [];
  for (let i = size; i < array.length - size ; i++) {
    droppedRightArray.push(array[i]);
  }
  return droppedRightArray
}

const numbers = [1,2,3];

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