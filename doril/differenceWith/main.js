function differenceWith() {

}


const targets = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
const comparisons = [{ 'x': 1, 'y': 2 }];

const result = differenceWith(targets, comparisons, function(a, b) {
  return a.x === b.x && a.y === b.y;
});
console.log(result);
// => [{ 'x': 2, 'y': 1 }]

console.log(targets);