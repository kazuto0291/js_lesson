function difference(array, values) {
  const newArray = [];

  if( !Array.isArray(values) ) {
    return [...array];
  }

  for(let i = 0 ; i < array.length; i++) {
    const target = array[i];
    if( !values.includes(target) ) {
      newArray.push(target);
    }
  }
  return newArray;
}


console.log( difference([2, 1 ,3 ,4], [2, 3, 6, 5 ]) );
// => [1 ,4]

console.log( difference([2, 1 ,3 ,4]));
