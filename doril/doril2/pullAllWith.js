function pullAllWith(array, comparisons, comparator ) {
  // const pulledArray = [];

  function hasValueInComparisons(arrayElement) {
    for(let i = 0; i < comparisons.length; i++) {
      const comparison = comparisons[i];
      if(comparator(arrayElement,comparison)) {
        return true
      }
    }
    return false
  }

  for(let i = array.length - 1; 0 <= i; i--) {
    if (hasValueInComparisons(array[i])) {
      array.splice(i, 1);
    }
  }
  return array
}



const array = [
  { 'x': 1, 'y': 2 },
  { 'x': 3, 'y': 4 },
  { 'x': 5, 'y': 6 }
];

const result = pullAllWith(array, [{ 'x': 3, 'y': 4 }], (a, b) => {
  return a.x === b.x && a.y === b.y;
});
console.log('result : ', result);
// => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]

console.log('array : ', array);
// => [{ 'x': 1, 'y': 2 }, { 'x': 5,  'y': 6 }]