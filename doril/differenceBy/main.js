function differenceBy(targetValues, compareValues, iteratee) {
  const diffValues = [];

  const processedCompareValues = compareValues.map(v => iteratee(v) );

  for(let i = 0; i < targetValues.length; i++) {
    const target = targetValues[i];
    const processedTarget = iteratee(target);

    // processedCompareValues: [2, 3]
    //  processedTarget: 2,1
    if( !processedCompareValues.includes(processedTarget) ) {
      diffValues.push(target);
    }
  }

  return diffValues
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