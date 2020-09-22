function uniq(array) {
  const newArray = [];

  for(let i = 0; i < array.length; i++) {
    const target =array[i]
    if( !newArray.includes(target) ){
      newArray.push(target);
    }
  }

  return newArray
}


const numbers = [2, 1, 2];

console.log( uniq(numbers) );
// => [2, 1]

console.log( numbers );
// => [2, 1, 2]