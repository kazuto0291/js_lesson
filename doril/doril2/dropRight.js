function dropRight(array, n = 1) {
  if(n > array.length) {
    return [];
  }
  if(n === 0) {
    return [...array];
  }

  const droppedRight = [];
  for(let i = 0; i < array.length - n  ; i++) {
    droppedRight.push(array[i]);
  }
  return droppedRight;
}




const numbers = [1, 2, 3];

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