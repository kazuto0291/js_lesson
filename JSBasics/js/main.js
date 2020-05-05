'use strict';

//条件演算子
// const score = 12;

// if (score >= 80) {
//   console.log('Great!')
// } else if (score >= 60) {
//   console.log('Good');
// } else {
//   console.log('OK...')
// }
// 条件式 ? trueの処理 : falseの処理
// score >= 80 ? console.log('Great!') : console.log('OK...');


// 論理演算子
// && なおかつ (AND)
// || もしくは (OR)
// ! ~ではない (NOT)

// const score = 60;
// const name = 'taguchi';

// if(score >=50) {
//   if (name === 'taguchi') {
//     console.log('Good job!');
//   }
// }

// if (score >=50 && name === 'taguchi') {
//   console.log('Good job!');
// }

// swich (比較したい値)
// const signal = 'red';

// if (signal === 'red') {
//   console.log('Stop!');
// } else if (signal === 'yellow') {
//   console.log('Caution!');
// } else if (signal === 'blue') {
//   console.log('GO!');
// }

// switch (signal) {
//   case 'red':
//     console.log('Stop');
//     break;
//   case 'yellow':
//     console.log('Caution!');
//     break;
//   case 'blue':
//   case 'green':
//     console.log('GO!');
//     break;
//   default:
//     console.log('Wrong signal!');
//     break;
// }
// for
// for (let i = 1; i <= 10; i++) {
//   console.log(`hello${i}`);
// }

// while
// let hp = -50;

// while (hp >0) {
//   console.log(`${hp} HP left!`);
//   hp -= 15;
// }

// do {
//   console.log(`${hp} HP left!`);
//   hp -= 15;
// } while (hp >0);

// continue ループを一回スキップするための命令
// break    ループを一回スキップするための命令

// for (let i = 1; i <= 10; i++) {
//   if(i === 4) {
//     continue;
//   }
//   console.log(i);
// }

//引数は値を受けとるための入れ物、デフォルト値（初期値）を設定できる(num === 1)
//引数は,(カンマ)区切りでいくつも渡せる(a, b, c)

// return は関数での処理結果を値として返す 戻り値　返り値

// function sum(a, b, c) {
//   return a + b + c;
// }
// const sum = function(a, b, c) {
//   return a + b + c;
// };
// const sum = (a, b, c)  =>a + b + c;

// const total = sum(1, 2, 3) + sum(3, 4, 5);

// console.log(total)

// JavaScript では複雑なコードを書くようになると、複数のスクリプトを読み込む事がおおい
// エラーを防ぐには、書いたコードはブロック{}で囲ってスコープを分ける、という習慣をつける

//配列の要素の取得
// const scores = [80, 90, 40]
// console.log(scores[2])
// scores[2] =44;//配列の要素には再代入できる
// console.log(scores);
// console.log(scores.length);

//配列とループ処理を組み合わせ
// const scores = [80, 90, 40];

// for (let i = 0; i < scores.length; i++) {
//   console.log(`Sore ${i}: ${scores[i]}`);
// }

//push()   配列の末尾に要素を追加する
// const scores = [80, 90, 40, 70];
// scores.push(60, 50, 80 ,88, 56);
// scores.shift();   //先頭の要素を削除する

// for (let i = 0; i < scores.length; i++) {
//   console.log(`Sore ${i}: ${scores[i]}`);
// }


//splece()    途中の要素を操作できる
// splice(変化が開始する位置、削除数)
// splice(変化が開始する位置、削除数, 追加する要素, ...)
// const scores = [80, 90, 40];
// scores.splice(1, 1, 40, 50);

// for (let i = 0; i < scores.length; i++) {
//   console.log(`Sore ${i}: ${scores[i]}`);
// }


//スプレッド構文 ... 複数の値を持つもの
// const otherScores = [10, 20];
// const scores = [80, 90, 70, ...otherScores];
// console.log(scores);

//分割代入
// 配列などの値を別々の定数にする時や値を入れ替えるときに浸かる
// const scores = [80, 90, 40, 70];

// const [a,b, c, d] = scores;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// let x = 70;
// let y = 100;
// [x, y] = [y, x];
// console.log(x);
// console.log(y);


//forEach(引数の名前, 要素のindex)
// const scores = [80, 90, 40, 70];

// scores.forEach((score, index) => {
//   console.log(`Score ${index}: ${score}`);
// });


//map()
//配列の各要素に何らかの処理をして別の配列を作りたい場合に便利

// const prices = [180, 190, 200];
// const updatePrices = prices.map((price) => {
//   return price + 20
// });
//省略形
// const updatePrices = prices.map(price => price + 20);
// console.log(updatePrices);

//filter() 配列から何らかの条件で要素を抽出したいときに使う
// const numbers = [1,4, 7, 8, 10];

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// console.log(evenNumbers);


