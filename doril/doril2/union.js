function union(...arrays) {
  const unionArray = [];
  
  for(let i = 0; i < arrays.length ; i++) {
    const values = arrays[i];
    // console.log(values)
    for(let j = 0; j < values.length; j++) {
      const value = values[j]
      console.log(value)
      if(!unionArray.includes(value)) {
        unionArray.push(value)
      }
    }
  }
  return unionArray;
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