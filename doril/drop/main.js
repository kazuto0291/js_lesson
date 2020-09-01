function drop(array, size = 1) {
  if (size === 0) {
    return [...array];
  }
  if (array.lenght <= size) {
    return [];
  }

  const droppedArray = [];
  for (let i = size; i < array.length; i++) {
    droppedArray.push(array[i]);
  }
  return droppedArray;
}

console.log(drop([1,2,3]));

console.log(drop([1,2,3], 2));

console.log(drop([1,2,3,4], 5));