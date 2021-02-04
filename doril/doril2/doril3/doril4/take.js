function take(array, n = 1) {
  if (n === 0) {
    return [];
  }
  if (n > array.length) {
    return [...array];
  }

  const newArray = [];

  for (let i = 0; i < n; i++ ) {
    newArray.push(array[i]);
  }
  return newArray;
}



console.log( take([1, 2, 3]) );
// => [1]

console.log( take([1, 2, 3], 2) );
// => [1, 2]

console.log( take([1, 2, 3], 5) );
// => [1, 2, 3]

console.log( take([1, 2, 3], 0) );
// => []