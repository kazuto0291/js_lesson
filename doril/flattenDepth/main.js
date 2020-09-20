function flattenDepth(array, depth = 1) {

  
}


const array = [1, [2, [3, [4]], 5]];

const result0 = flattenDepth(array);
console.log('result0 : ', result0);
// => [1, 2, [3, [4]], 5]

const result1 = flattenDepth(array, 1);
console.log('result1 : ', result1);
// => [1, 2, [3, [4]], 5]

const result2 = flattenDepth(array, 2);
console.log('result2 : ', result2);
// => [1, 2, 3, [4], 5]

const result3 = flattenDepth(array, 3);
console.log('result3 : ', result3);
// => [1, 2, 3, 4, 5]

const result4 = flattenDepth(array, 100);
console.log('result4 : ', result4);
// => [1, 2, 3, 4, 5]