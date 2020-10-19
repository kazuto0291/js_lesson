function compact(array) {
  const compactedArray = [];
  for(let i  =0 ; i< array.length; i++) {
    if(array[i]) {
      compactedArray.push(array[i]);
    }
  }

  return compactedArray;
}

const compactedValues = compact([0, 1, false, 2, '', 3, 4, false, '', 1000]);
console.log(compactedValues);
// => [1, 2, 3]