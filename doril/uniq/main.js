function uniq(array) {
  const uniqArray = [];
  for(let i = 0; i <array.length; i++) {
    const value = array[i];
    if( !uniqArray.includes(value) ) {
      uniqArray.push( value );
    }
  }
  return uniqArray;
}


const numbers = [2, 1, 2];

console.log( uniq(numbers) );
// => [2, 1]

console.log( numbers );
// => [2, 1, 2]