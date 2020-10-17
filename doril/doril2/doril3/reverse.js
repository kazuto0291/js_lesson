function reverse(array) {
  
  const maxindexForLoop = Math.floor(array.length / 2);
  for(let i = 0; i < maxindexForLoop; i++) {
    const opositeIndex = array.length -(1 + i);
    
  }
}

const array = [1, 2, 3];

console.log( reverse(array) );
// => [3, 2, 1]

console.log(array);
// => [3, 2, 1]