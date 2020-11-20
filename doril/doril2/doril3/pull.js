function pull(array, ...values) {
  const pullArray = []
  for(let i = 0; i < array.length; i++) {
    const target = array[i];
    if(!values.includes(target)) {
      pullArray.push(target);
    }
  }
  return pullArray;
}

const array = ['a', 'b', 'c', 'a', 'b', 'c'];
pull(array, 'a', 'c');
console.log(array);
// => ['b', 'b']
console.log(pull(array, 'a', 'c'))
