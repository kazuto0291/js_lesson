function nth(array, n = 0) {
  for(let i = 0; array.length; i++) {
    if( i === Math.abs(n) ) {
      return array[i]
    }
  }
  return -1
}

const array = ['a', 'b', 'c', 'd'];

console.log( nth(array, 1) );
// => 'b'

console.log( nth(array, -2) );
// => 'c';