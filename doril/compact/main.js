function compact(array) {
  const compactedArray = []
  for (let i = 0 ; i < array.length; i++) {
    if (array[i]) {
      compactedArray.push(array[i]);
    }
  }
  return compactedArray
}


const result = compact([0, 1, false, 2, '', 3]);

console.log(result);