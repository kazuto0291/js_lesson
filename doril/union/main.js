function union(...arrays) {
  const unionArray = [];
  for(let i = 0; i < arrays.length; i++) {
    const currentArray = arrays[i];
    for(let j = 0; j < currentArray.length; j++) {
      const value = currentArray[j];
      if( !unionArray.includes(value) ) {
        unionArray.push(value);
      }
    }
  }
  
  return unionArray
}




const result = union(
  [10, 1, 2],
  [1, 2, 3],
  [3, 4, 5],
  [5, 10, 15],
  [10, 20, 30]
);
console.log(result);
// [10, 1, 2, 3, 4, 5, 15, 20, 30]