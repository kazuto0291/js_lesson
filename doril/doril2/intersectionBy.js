function intersectionBy(...arraysWithIterateeAtLast) {

    const iteratee = arraysWithIterateeAtLast.pop();
    const arrays = arraysWithIterateeAtLast

    const headArray = arrays.shift();
    const intersctedValue = [];

    const iteratedArrays = arrays.map(array => {
      return array.map(value => {
        return iteratee(value);
      });
    });
    console.log(iteratedArrays);


    return intersctedValue;
}



const result = intersectionBy(
  [2.1, 1.2],
  [2.3, 3.4],
  [4.4, 2.9],
  Math.floor
);
console.log(result);
// => [2.1]