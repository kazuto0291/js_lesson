function flatten(arrays) {
  const flattenArray = [];
  for(let i = 0; 0 < arrays.length; i++) {
    const value = arrays[i];
    if ( Array.isArray(value) ) {
      flattenArray.push(...value);
    } else {
      flattenArray.push(value);
    }
  }
  return flattenArray;
}



const numbers = [1, [2, [3, [4]], 5]];
const result = flatten(numbers);

console.log( JSON.stringify( result ) );
// => [1, 2, [3, [4]], 5]

console.log( JSON.stringify( numbers ) );
// => [1, [2, [3, [4]], 5]]