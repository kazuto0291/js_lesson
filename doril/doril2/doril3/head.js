function head(array) {
  return array.shift();
}


console.log( head([1, 2, 3]) );
// => 1

console.log( head([]) );
// => undefined