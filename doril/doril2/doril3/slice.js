function slice(array, start = 0, end = array.length) {
  const slicedArray = []

  for(let i = 0; i < array.length; i++) {
    if( start <= i && i < end) {
      slicedArray.push(array[i]);
    }
  }
  return slicedArray
}



const numbers = [10, 20, 30, 40, 50];
const slicedNumbers = slice(numbers, 1, 4);

console.log( slicedNumbers );
// => [20, 30, 40]

console.log( numbers );
// => [10, 20, 30, 40, 50]