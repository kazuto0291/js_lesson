function pull() {
  
}

const array = ['a', 'b', 'c', 'a', 'b', 'c'];
pull(array, 'a', 'c');
console.log(array);
// => ['b', 'b']