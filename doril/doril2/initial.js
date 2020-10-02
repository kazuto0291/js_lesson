function initial(array) {
  array.pop();
  const initaledArray = [];
  for(let i = 0 ; i < array.length ; i++) {
    initaledArray.push(array[i]);
  }
  return initaledArray;
}



const numbers = [1, 2, 3];
console.log( initial(numbers) );
// => [1, 2]

console.log('number : ', numbers);