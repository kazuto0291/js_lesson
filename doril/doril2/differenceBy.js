function differenceBy(targetValues, comparedValues, iteratee) {
  const diffvalues = [];

  const processedCompareValues = comparedValues.map(v => iteratee(v));

  for(let i = 0; i < targetValues.length; i++) {
    const target = targetValues[i];
    if( !processedCompareValues.includes(iteratee(target)) ) {
      diffvalues.push(target);
    }
  }

  return diffvalues;
}


const targetNumbers = [2.1, 1.2];
const compareNumbers = [2.3, 3.4];

const result = differenceBy(targetNumbers, compareNumbers, (v) => {
  return Math.floor(v);
});
console.log(result)
// => [1.2]

console.log(targetNumbers);
// => [2.1, 1.2]