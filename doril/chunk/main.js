function chunk(array, size = 1) {
  if(size < 1) {
    throw new Error('第2引数は1以上でなければならない')
  }
  const chunkedArray = [];

  const copiedArray = [...array];

  while(copiedArray.length > 0) {
    const splicedValues = copiedArray.splice(0, size);
    chunkedArray.push(splicedValues);
    // console.log(splicedValues)
  }
  // console.log(copiedArray)
  return chunkedArray;
}



const charList = ['a', 'b', 'c', 'd'];

console.log( chunk(charList, 2) ) ;
// => [['a', 'b'], ['c', 'd']]

console.log( chunk(charList, 3) );
// => [['a', 'b', 'c'], ['d']]