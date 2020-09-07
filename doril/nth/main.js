function nth(array, n = 0) {
  if (n >= 0) {
    return array[n];
  } else {
    return array[array.length + n];
  }

  //     条件 ?  trueのときの値 : falseのときの値;
  return n>= 0 ? array[n] : array[array.length + n];
}

const array = ['a', 'b', 'c', 'd'];

console.log( nth(array, 1) );
// => 'b'

console.log( nth(array, -2) );
// => 'c';