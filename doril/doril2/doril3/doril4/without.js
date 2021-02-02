function without(array, ...values) {
  const newArray = [];
  for (let i =0; i < array.length; i++) {
    const target = array[i];
    if (!values.includes(target)) {
      newArray.push(target);
    }
  }
  return newArray;
}

console.log( without([2, 1, 2, 3], 1, 2) );
// => [3]

console.log( without([2, 1, 2, 3, 4, 5, 6, 7, 8, 10, 23], 1, 2, 7, 10) );