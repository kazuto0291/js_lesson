function takeRight(array, n = 1) {
  if(n === 0) {
    return [];
  }

  if (n > array.lenght) {
    return [...array];
  }

  const takenArray = [];
  for(let i = 0; i < n; i++) {
    const indexFromRight = array.length - (1 + i)
    takenArray.unshift(array[indexFromRight]);
  }
  return takenArray
} 

console.log( takeRight([1, 2, 3]) );
// => [3]

console.log( takeRight([1, 2, 3], 2) );
// => [2, 3]

console.log( takeRight([1, 2, 3], 5) );
// => [1, 2, 3]

console.log( takeRight([1, 2, 3], 0) ) ;
// => []