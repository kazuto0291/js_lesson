function concat(array, ...values ) {
  const concatenatedArray = [...array];
  for(let i = 0; i < values.length; i++) {
    const value = values[i];
    if( Array.isArray(value) ) {
      concatenatedArray.push(...value);
    } else {
      concatenatedArray.push(value)
    }
  }
  return concatenatedArray;
}



const array = [1];
const other = concat(array, 2, [3], [[4]]);

console.log(other);
// => [1, 2, 3, [4]]

console.log(array);
// => [1]