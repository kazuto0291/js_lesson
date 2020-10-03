function drop(array, size = 1) {
  if (size > array.length) {
    return [];
  }

  if (size === 0) {
    return array;
  }

  const droppedArray = [];
  for(let i = size; i < array.length; i++) {
    droppedArray.push( array[i] );
  }
  return droppedArray;
}


const numbers = [1, 2, 3];

console.log( drop(numbers), numbers );
// => [2, 3]

// _.drop([1, 2, 3], 2);
console.log( drop(numbers, 2), numbers );
// // => [3]

// _.drop([1, 2, 3], 5);
console.log( drop(numbers, 5), numbers );
// // => []

// _.drop([1, 2, 3], 0);
console.log( drop(numbers, 0), numbers );
// // => [1, 2, 3]