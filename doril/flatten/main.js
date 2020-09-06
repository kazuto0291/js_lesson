function flatten(array) {

  const flattendedArray = [];
  for(let i = 0; i < array.length; i++) {
    const value = array[i]
    if(Array.isArray(value)) {
      flattendedArray.push(...value);
    } else {
      flattendedArray.push(value);
    }
  }
  return flattendedArray
}
const numbers = [1,[2,[3,[4]], 5]]
const result = flatten(numbers);
console.log(JSON.stringify(result));
console.log(JSON.stringify(numbers));
console.log(result);
console.log(numbers);