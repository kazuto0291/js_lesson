function remove(array, predicate) {
  const removedValues = [];
  
  for(let i = array.length - 1; 0 <= i; i--) {
    const current = array[i];
    if( predicate(current) ) {
      array.splice(i, 1);
      removedValues.unshift(current);
    }
  }

  return removedValues;
}


const array = [1, 2, 3, 4];
const evens = remove(array, function(n) {
  return n % 2 === 0;
});

console.log(array);
// => [1, 3]

console.log(evens);
// => [2, 4]