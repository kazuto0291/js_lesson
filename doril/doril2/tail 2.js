function tail(array) {
  const tailedArray = [];
  for(let i = 1; i < array.length; i++) {
    tailedArray.push( array[i] )
  }
  return tailedArray;
}

console.log( tail([1, 2, 3]) );
// => [2, 3]