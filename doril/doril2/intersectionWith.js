function intersectionWith(...arraysWithComparatorAtLast) {

  const comparator = arraysWithComparatorAtLast.pop();
  const arrays = arraysWithComparatorAtLast;

  const headArray = arrays.shift();
  const intersectedValues = [];

  for(let i = 0 ; i < headArray.length; i++) {
    const targetValue = headArray[i];
    let isIntersected = true;
    for(let j =0 ; j < arrays.length; j++) {
      const compareArray = arrays[j];
      // console.log(compareArray, '@@@@@')
      const hasIntersectedValue = compareArray.some(compareValue => {
        return comparator(targetValue, compareValue)
      })
      if( !hasIntersectedValue ) {
        isIntersected = false;
        break;
      }
    }

    if(isIntersected) {
      intersectedValues.push(targetValue);
    }
  }

  return intersectedValues;
}


const objects = [{ x: 1, y: 2 }, { x: 2, y: 1 }, { x: 10, y: 20 }];
const others1 = [{ x: 1, y: 1 }, { x: 1, y: 2 }, { x: 10, y: 20 }];
const others2 = [{ x: 1, y: 2 }, { x: 10, y: 20 }];

const result = intersectionWith(
  objects,
  others1,
  others2,
  (a, b) => {
    return a.x === b.x && a.y === b.y;
  }
);
console.log(result);
// => [{ 'x': 1, 'y': 2 }]