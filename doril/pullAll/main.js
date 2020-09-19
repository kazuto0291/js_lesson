function pullAll(array,valuse) {
  for(let i = array.length -1; 0 <= i; i--) {
    if( valuse.includes( array[i]) ) {
      array.splice(i, 1);
    }
  }
}


const array = ['a', 'b', 'c', 'a', 'b', 'c'];

pullAll(array, ['a', 'c']);
console.log(array);
// => ['b', 'b']