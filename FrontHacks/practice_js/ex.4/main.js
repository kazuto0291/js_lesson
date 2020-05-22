const array1 = [1, 2, 3, 4, 5, 6];
console.log(array1);

array1[3];
console.log(array1);


array1[1] = 999;
console.log(array1);

const array2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(array2);

console.log(array2[1]);

console.log(array2[1][0]);


const array3 = ['コメント1', 'コメント2', 'コメント3'];
console.log(array3);

array3.push('コメント4');
console.log(array3);

const array4 = ['タスク1', 'タスク2', 'タスク3'];
poppedValue = array4.pop();
console.log(poppedValue);
console.log(array4);

const array5 = ['タスク1', 'タスク2', 'タスク3'];
array5.unshift('最優先タスク');
console.log(array5);

const array6 = ['タスク1', 'タスク2', 'タスク3'];
shiftedValue = array6.shift();
console.log(shiftedValue);
console.log(array6);