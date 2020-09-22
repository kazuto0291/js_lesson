function takeRight(array , n = 1) {
  if( n===0) {
    return [];
  }
  if( n > array.length) {
    return [...array]
  }

  const takenValues = [];
  for(let i = 0 ; i < n ; i++) {
    
    const indexFromRight = array.length - (1 + i)
    takenValues.unshift(array[indexFromRight] );
  }
  return takenValues;
}

console.log( takeRight([1, 2, 3]) );
// => [3]

console.log( takeRight([1, 2, 3], 2) );
// => [2, 3]

console.log( takeRight([1, 2, 3], 5) );
// => [1, 2, 3]

console.log( takeRight([1, 2, 3], 0) ) ;
// => []