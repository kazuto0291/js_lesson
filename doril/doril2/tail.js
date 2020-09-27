function tail(array) {
  const tailArray = [];
  for(let i = 1; i < array.length; i++) {
    tailArray.push(array[i]);
  }
  return tailArray
}

console.log( tail([1, 2, 3]) );
// => [2, 3]