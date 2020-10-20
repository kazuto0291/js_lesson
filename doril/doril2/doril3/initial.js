function initial(array) {

  const initialedArray = [...array]
  initialedArray.pop();

  return initialedArray;
}

const numbers = [1, 2, 3];
console.log( initial(numbers) );
// => [1, 2]

console.log('number : ', numbers);