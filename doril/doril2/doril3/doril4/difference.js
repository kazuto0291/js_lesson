function difference(array, values) {
  const diffValues = [];
  if(!Array.isArray(values)) {
    return [...array];
  }
  for(let i = 0; i < array.length; i++) {
    const target = array[i];
    if ( !values.includes(target) ) {
      diffValues.push(target);
    }
  }
  return diffValues;
}

console.log( difference([2, 1, 3, 4, 5]));
console.log( difference([2, 1, 3, 4, 5], [2, 3, 4]) );
// => [1, 5]
console.log( difference([2, 1, 3, 4, 5], [2, 3, 4, 5]) );
// => [1]
console.log( difference([2, 1, 3, 4, 5, 6, 7], [2, 3, 4]) );
// => [1, 5, 6, 7]
