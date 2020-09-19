function reverse(array) {
  const maxIndexForLoop = Math.floor(array.length / 2);
  for(let i =0; i < maxIndexForLoop; i++) {
    const opositeIndex = array.length - (1 + i);
    [array[i], array[opositeIndex]] = [array[opositeIndex], array[i]]
  }
  return array;
}


const array = [1, 2, 3];

console.log( reverse(array) );
// => [3, 2, 1]

console.log(array);
// => [3, 2, 1]

const array1 = [1, 2, 3, 4, 5, 6, 7, 8 ,9, 9, 10];

console.log( reverse(array1) );
// => [3, 2, 1]

console.log(array1);
// => [3, 2, 1]