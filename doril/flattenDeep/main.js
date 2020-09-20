function flattenDeep(array) {
  const flattendArray = [];
  for(let i = 0; i < array.length; i++) {
    const value = array[i];
    if(Array.isArray(value)) {
      flattendArray.push( ...flattenDeep(value) );
    } else {
      flattendArray.push(value);
    }
  }
  return flattendArray;
}



const numbers = [1, [2, [3, [4]], 5]];
const flattenedNumbers = flattenDeep(numbers);

console.log(flattenedNumbers);
// => [1, 2, 3, 4, 5]

console.log( JSON.stringify( numbers ) );
// => [1, [2, [3, [4]], 5]]