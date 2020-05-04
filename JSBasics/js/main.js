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

const score = 60;
const name = 'taguchi';

if(score >=50) {
  if (name === 'taguchi') {
    console.log('Good job!');
  }
}

if (score >=50 && name === 'taguchi') {
  console.log('Good job!');
}

// swich (比較したい値)
const signal = 'red';

if (signal === 'red') {
  console.log('Stop!');
} else if (signal === 'yellow') {
  console.log('Caution!');
} else if (signal === 'blue') {
  console.log('GO!');
}

switch (signal) {
  case 'red':
    console.log('Stop');
    break;
  case 'yellow':
    console.log('Caution!');
    break;
  case 'blue':
  case 'green':
    console.log('GO!');
    break;
  default:
    console.log('Wrong signal!');
    break;
}
// for
for (let i = 1; i <= 10; i++) {
  console.log(`hello${i}`);
}

// while
let hp = -50;

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

for (let i = 1; i <= 10; i++) {
  if(i === 4) {
    continue;
  }
  console.log(i);
}

//引数は値を受けとるための入れ物、デフォルト値（初期値）を設定できる(num === 1)
//引数は,(カンマ)区切りでいくつも渡せる(a, b, c)

// return は関数での処理結果を値として返す 戻り値　返り値

// function sum(a, b, c) {
//   return a + b + c;
// }
// const sum = function(a, b, c) {
//   return a + b + c;
// };
const sum = (a, b, c)  =>a + b + c;

const total = sum(1, 2, 3) + sum(3, 4, 5);

console.log(total)

// JavaScript では複雑なコードを書くようになると、複数のスクリプトを読み込む事がおおい
// エラーを防ぐには、書いたコードはブロック{}で囲ってスコープを分ける、という習慣をつける