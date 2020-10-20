function takeRight(array, n = 1) {
  if (n === 0 ) {
    return []
  }

  if (array.length < n) {
    return [...array];
  }

  const takeRightArray = [];
  for(let i = array.length -n ; i < array.length; i++) {
    takeRightArray.push(array[i]);
  }
  return takeRightArray
}


console.log( takeRight([1, 2, 3]) );
// => [3]

console.log( takeRight([1, 2, 3], 2) );
// => [2, 3]

console.log( takeRight([1, 2, 3], 5) );
// => [1, 2, 3]

console.log( takeRight([1, 2, 3], 0) ) ;
// => []