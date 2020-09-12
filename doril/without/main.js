function without(array, ...values) {
  // console.log('array:', array);
  // console.log('values:', values);

  const newArray = [];
  for(let i =0; i < array.length; i++) {
    const candidateToPush = array[i];
    if( !values.includes(candidateToPush) ) {
      newArray.push(candidateToPush);
    }
  }


  return newArray;
}


console.log( without([2, 1, 2, 3, 4, 5 ,6], 1, 2) );// => [3, 4, 5, 6]
console.log( without([2, 1, 2, 3, 4, 5 ,6], 4, 5) );
console.log( without([2, 1, 2, 3, 4, 5 ,6], 3, 2, 4) );

