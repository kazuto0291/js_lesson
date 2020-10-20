function flatten(array) {
  const flattendArray = [];
  for(let i =0 ; i< array.length; i++) {
    const value = array[i];
    if(Array.isArray(value)) {
      flattendArray.push(...value);
    } else {
      flattendArray.push(value)
    }
  }
  return flattendArray;
}


const numbers = [1, [2, [3, [4]], 5]];
const result = flatten(numbers);

console.log( JSON.stringify( result ) );
// => [1, 2, [3, [4]], 5]

console.log( JSON.stringify( numbers ) );
// => [1, [2, [3, [4]], 5]]