function slice(array, start = 0 , end = array.length) {
  const sliceArray = []

  for(let i = start; i < end; i++) {
    sliceArray.push(array[i]);
  }
  return sliceArray
}

const numbers = [10, 20 ,30 ,40, 50 ,60, 70];

const slicedNumbers = slice(numbers, 1, 4);
console.log(slicedNumbers)
console.log(numbers);