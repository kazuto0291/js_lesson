function intersection(...arrays) {
  const newArray = [];

  const headArray = arrays.shift();
  console.log('headArray', headArray)

  for(let i = 0; i < headArray.length; i++) {
    const current = headArray[i];

    // const includes = arrays.every(fucntion(array) {
    //   return array.includes(current);
    // })
    // if(currentがすべて配列に含まれている場合は)
    if(arrays.every( (array) => array.includes(current) ) ) {
      newArray.push(current);
    }
  }

  return newArray;
}


console.log( intersection([2, 1], [2, 3], [2, 4]) );
// => [2]
console.log( intersection([2, 1, 3], [2, 3, 5], [2, 4 ,3]) );
// => [2,3]

