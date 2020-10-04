function pullAt(array, ...values) {


  const _values = Array.isArray( values[0] ) ? values[0] : indexs;

  const newArray = [];
  // console.log(...values)
  
  // for(let j = 0; j < values.length ; j++) {
  //   const value = values[j];
  //   console.log(value)
  // }
  // for(let i =array.length - 1; 0 <= i ; i--) {

  // }

  for(let i = 0; i < _values.length; i++) {
    const targetIndex = _values[i];
    const targeValueIndexArray = array[targetIndex];
    newArray.push(targeValueIndexArray);
  }

  for(let i = array.length -1 ; 0 <= i; i--) {
    const current = array[i];
    if(newArray.includes(current) ) {
      array.splice(i, 1);
    }
  }

  return newArray;
}


const array = ['a', 'b', 'c', 'd'];
const pulled = pullAt(array, [1, 3]);

console.log(array);
// => ['a', 'c']

console.log(pulled);
// => ['b', 'd']