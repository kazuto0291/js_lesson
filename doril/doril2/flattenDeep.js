function flattenDeep(arrays) {
  const flattenArray = [];

  for(let i = 0; i < arrays.length; i++) {
    const value= arrays[i];
    if(Array.isArray(value)) {
      flattenArray.push(...flattenDeep(value))
    } else {
      flattenArray.push(value)
    }
  }
  return flattenArray;
}




const numbers = [1, [2, [3, [4]], 5]];
const flattenedNumbers = flattenDeep(numbers);

console.log(flattenedNumbers);
// => [1, 2, 3, 4, 5]

console.log( JSON.stringify( numbers ) );
// => [1, [2, [3, [4]], 5]]