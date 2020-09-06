function lastIndexOf(array, value, fromIndex = array.length - 1) {
  for(let i = fromIndex; 0 <= i; i-- ) {
    if(array[i] === value) {
      return i;
    }
  }

  return -1;
}



console.log( lastIndexOf([1, 2, 1, 2], 2) );
// => 3

// Search from the `fromIndex`.
console.log( lastIndexOf([1, 2, 1, 2], 2, 2) );
// => 1