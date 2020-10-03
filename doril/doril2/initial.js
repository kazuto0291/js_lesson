function initial(array) {
  const initaledArray = [];
  for(let i = 0 ; i < array.length -1 ; i++) {
    initaledArray.push(array[i]);
  }
  return initaledArray;
}



const numbers = [1, 2, 3];
console.log( initial(numbers) );
// => [1, 2]

console.log('number : ', numbers);