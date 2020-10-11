function pullAllBy(array, values, iteratee) {
  
  for(let i = array.length - 1; 0 <= i; i--) {
    const target = array[i];
    console.log(target, '@@@@')
    for(let j = 0; j < values.length; j++) {
      const value = values[j];
      console.log('value:', value);
      if( iteratee(target) === iteratee(value) ) {
        array.slice(i, 1);
      }
    }
  }
  return array
}



const array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];

const result = pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], (obj) => {
  return obj.x;
});
console.log('result : ', result);
// => [{ 'x': 2 }]

console.log('array : ', array);
// => [{ 'x': 2 }]