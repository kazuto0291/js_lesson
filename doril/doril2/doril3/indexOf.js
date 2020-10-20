function indexOf(array , value, fromIndex = 0) {

  for(let i = fromIndex ; i < array.length; i++) {
    const target = array[i];
    if (target === value) {
      return i
    }
  }


  return -1
}


console.log( indexOf([1, 2, 1, 2], 2) );
// => 1

// Search from the `fromIndex`.
console.log( indexOf([1, 2, 1, 2], 2, 2) );
// => 3
console.log( indexOf([1, 2, 1, 2], 3, 2) );
// => -1