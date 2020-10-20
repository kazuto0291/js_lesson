function nth(array, n = 0) {

  return n >= 0 ? array[n] :array[array.length + n];
}


const array = ['a', 'b', 'c', 'd'];

console.log( nth(array, 1) );
// => 'b'

console.log( nth(array, -2) );
// => 'c';