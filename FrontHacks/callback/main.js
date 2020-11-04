'use strict';

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

let num = 0;
const logo =document.getElementById('logo');
const onClick = () => {
  console.log('クリックされた　in onClock関数！')
  for(let i = 0; i <= 100; i++) {

   if (num % 15 === 0) {
      console.log('fizubuzu')
    } else if(num % 3 ===0) {
      console.log('fizu')
    } else if (num % 5 === 0 ) {
      console.log('buzu')
    } else {
      console.log(num)
    }
    num++;
  }
};

// logo.addEventListener('click', () => {
//   console.log('クリックされた！')
// })

logo.addEventListener('click', onClick);

