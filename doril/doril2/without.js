function without(array, ...values) {
  const newArray = [];

  for(let i = 0; i < array.length; i++) {
    const candidateToPush = array[i];
    if( !values.includes( array[i]) ) {
      newArray.push(array[i])
    }
  }

  for(let i = array.length - 1 ; 0 <= i ; i--) {
    const target = array[i];
    for(let j = 0 ; j < values.length ; j++) {
      const value =values[i];
      if(target === value) {
        array.slice(i, 1)
      }
    }
  }
  return newArray;
}

console.log( without([2, 1, 2, 3], 1, 2) );
// => [3]