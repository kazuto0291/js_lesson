function without(array, ... value) {
  const newArray = [];
  for(let i = 0 ; i < array.length ; i++) {
    const target = array[i];
    if( !value.includes(target) ) {
      newArray.push(target);
    }
  }
  return newArray;
}


console.log( without([2, 1, 2, 3], 1, 2) );
// => [3]