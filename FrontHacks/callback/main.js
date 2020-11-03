// 'use strict';

// console.log(1);

// setTimeout (() => {
//   setTimeout(() => {
//     console.log(2);
//   }, 0);
//   console.log(3);
// },100);


// console.log(4);

// setTimeout(() => {
//   setTimeout(() => {
//     console.log(5);
//   }, 40);
//   console.log(6);
// }, 50);

// console.log(7);




// 出力順は、1, 4, 7, 6, 3, 5 ,2

//      正解 1, 4, 7, 6, 3, 2, 5



const func = function(callback){
  callback('message')
}

func((msg) => {
  console.log(msg)
});