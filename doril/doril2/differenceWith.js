function differenceWith(targetvalues, comparvalues, comparator) {
  const diffArray = [];
  for(let i = 0 ; i < targetvalues.length; i++) {
    const target = targetvalues[i];
    for(let j = 0 ; j < comparvalues.length; j++) {
      const value = comparvalues[j];
      if( !comparator(target, value)) {
        diffArray.push(target);
      }
    }
  }
  return diffArray;
}


const targets = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
const comparisons = [{ 'x': 1, 'y': 2 }];

const result = differenceWith(targets, comparisons, function(a, b) {
  return a.x === b.x && a.y === b.y;
});
console.log(result);
// => [{ 'x': 2, 'y': 1 }]

console.log(targets);