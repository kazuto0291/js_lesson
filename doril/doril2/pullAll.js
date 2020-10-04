function pullAll(array, values) {
  for(let i = array.length - 1; 0 <= i; i--) {
    if(values.includes(array[i])) {
      array.splice(i, 1)
    }
  }
  return array;
}



const array = ['a', 'b', 'c', 'a', 'b', 'c'];

pullAll(array, ['a', 'c']);
console.log(array);
// => ['b', 'b']