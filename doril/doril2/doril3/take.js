function take(array, n = 1) {
  if ( n === 0) {
    return [];
  }

  if (array.length < n) {
    return [...array];
  }

  const takeedArray = [];
  for(let i = 0 ; i < n; i++) {
    takeedArray.push(array[i]);
  }
  return takeedArray
}



console.log( take([1, 2, 3]) );
// => [1]

console.log( take([1, 2, 3], 2) );
// => [1, 2]

console.log( take([1, 2, 3], 5) );
// => [1, 2, 3]

console.log( take([1, 2, 3], 0) );
// => []