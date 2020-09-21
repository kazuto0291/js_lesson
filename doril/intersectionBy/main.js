function intersectionBy(...arraysWithIterateeAtLast) {

  const iteratee = arraysWithIterateeAtLast.pop();

  console.log('arraysWithIterateeAtLast', arraysWithIterateeAtLast);
  console.log('iteratee', iteratee);
  
  const arrays = arraysWithIterateeAtLast;
  const headArray = arrays.shift();

  console.log('arrays', arrays);
  console.log('headArray', headArray);
  console.log('iteratee', iteratee);

  const iteratedArrays = arrays.map(array => {
    return array.map(value => {
      return iteratee(value);
    })
  })
  console.log('iteratedArrays', iteratedArrays)

  const intersectedValues = [];
  for(let i = 0; i < headArray.length; i++) {
    const currentValue = headArray[i];
    const iteratedCurrentValue = iteratee(currentValue);
    const isIncludesAll = iteratedArrays.every(array => {
      return array.includes(iteratedCurrentValue)
    })
    if( isIncludesAll ) {
      intersectedValues.push(currentValue);
    }
  }

  return intersectedValues;
}



const result = intersectionBy(
  [2.1, 1.2, 3.8],
  [2.3, 3.4],
  [4.4, 2.9, 3.5],
  Math.floor
);
console.log(result);
// => [2.1]
