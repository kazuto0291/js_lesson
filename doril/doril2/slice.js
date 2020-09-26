function slice(array, n = 0, sliceLength = array.length) {
  const slicedArray = [];
  for(let i = n; i < sliceLength; i++) {
    const target = array[i];
    slicedArray.push(target);
  }

  return slicedArray;
}


const numbers = [10, 20, 30, 40, 50];
const slicedNumbers = slice(numbers, 1, 4);

console.log( slicedNumbers );
// => [20, 30, 40]

console.log( numbers );
// => [10, 20, 30, 40, 50]