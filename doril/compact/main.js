function compact(array) {
  const compacteArray = [];

  for(let i = 0; i < array.length; i++ ) {
    if(array[i]) {
      compacteArray.push(array[i]);
    }
  }

  return compacteArray;
}

const compactedValues = compact([0, 1, false, 2, '', 3, 4, false, '', 8]);
console.log(compactedValues);