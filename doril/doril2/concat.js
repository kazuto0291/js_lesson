function concat(array, ...values) {
  const concatArray = [];
  for(let i = 0 ; i < array.length; i++) {
    concatArray.push(array[i])
  }

  for(let j = 0; j <values.length; j++) {
    const value =values[j]
    if(Array.isArray(values[j])) {
      concatArray.push(...value)
    } else {
      concatArray.push(value)
    }
  }
  return concatArray;
}



const array = [1];
const other = concat(array, 2, [3], [[4]]);

console.log(other);
// => [1, 2, 3, [4]]

console.log(array);
// => [1]