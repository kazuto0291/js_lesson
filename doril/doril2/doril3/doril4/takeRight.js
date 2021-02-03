function takeRight(array, value = 1) {
  if (value === 0) {
    return [];
  }
  if (value > array.length) {
    return [...array];
  }

  const newAarray = [];
  for (let i = 0; i < value; i++) {
    const indexFromRight = array.length - ( 1 + i)
    newAarray.unshift(array[indexFromRight])
  }
  return newAarray;
}

console.log( takeRight([1, 2, 3]) );
// => [3]

console.log( takeRight([1, 2, 3], 2) );
// => [2, 3]

console.log( takeRight([1, 2, 3], 5) );
// => [1, 2, 3]

console.log( takeRight([1, 2, 3], 0) ) ;
// => []