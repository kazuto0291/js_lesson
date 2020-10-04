function reverse(array) {
  // const newArray = [];
  // for(let i = 0; i < array.length; i++) {
  //   newArray.unshift(array[i]);
  // }
  // return newArray;

  const maxIndexForLoop = Math.floor(array.length / 2);
  for(let i =0; i < maxIndexForLoop; i++ ) {
    const opsiteIndex = array.length -(1 + i);
    // 
    [array[i], array[opsiteIndex]] = [array[opsiteIndex], array[i]];
  }
  return array;
}


const array = [1, 2, 3];

console.log( reverse(array) );
// => [3, 2, 1]

console.log(array);
// => [3, 2, 1]