function fill(array, value, start = 0, end =array.length) {
  for (let i = 0; i < array.legth; i++) {
    if(start <= i && i < end) {
      array[i] = value;
    }
  }
  return array
}




let array = [1,2,3,4,5]

console.log(fill(array, 'a'));

console.log( fill(Array(3), 2) );

console.log( fill([4,6,8,10], '*', 1,3) );