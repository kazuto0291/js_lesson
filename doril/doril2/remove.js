function remove(array, predicate) {
  const removedvalues = [];

  // for(let i = 0; i < array.length; i++) {
  //   if( predicate(array[i]) ) {
  //     removedvalues.push(array[i]);
  //     array.splice(i, 1);
  //   }

  for(let i = array.length - 1 ; 0 <= i; i--) {
    if( predicate(array[i]) ) {
      removedvalues.unshift(array[i]);
      array.splice(i, 1);
    }
  }

  return removedvalues;
}


const array = [1, 2, 3, 4];
const evens = remove(array, function(n) {
  return n % 2 === 0;
});

console.log(array);
// => [1, 3]

console.log(evens);
// => [2, 4]