function uniq(array) {
  const uniqArray = [];

  for(let i = 0; i < array.length; i++) {
    const target = array[i];
    if(!uniqArray.includes(target)) {
      uniqArray.push(target);
    }
  }
  return uniqArray;
}

const numbers = [2, 1, 2];

console.log( uniq(numbers) );
// => [2, 1]

console.log( numbers );
// => [2, 1, 2]