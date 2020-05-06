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
//配列やオブジェクトを展開するときに使う
// レスト構文    ....others
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

//オブジェクトのプロパティーにアクセスする方法
//二種類ある
//オブジェクト名.キーの名前
//オブジェクト名のあとに[]の中にキーを文字列の形でわたす
// const point = {
//   x: 100,
//   y: 180,
// };
// point.x = 500;
// point["y"] = 300;

// console.log(point.x);
// console.log(point["y"]);

// オブジェクトをスプレッド構文で展開する
// const otherProps = {
//   r: 4,
//   color: 'red',
// };

// const point = {
//   x: 100,
//   y: 180,
//   ...otherProps,
// };
// console.log(point);
//オブジェクトに対して分割代入とレスト構文も使える
// const {x, r, ...others} = point;
// console.log(x);
// console.log(r);
// console.log(others);

// オブジェクトのプロパティーを配列にして列挙するのに
// keys()とforEachを使う
// Object.keys(point) とすると point の全てのキーを配列で取得できる
// const point = {
//     x: 100,
//     y: 180,
//   };
//   const keys =Object.keys(point);
//   keys.forEach(key => {
//     console.log(`Key: ${key} Value: ${point[key]}`)
//   })

//   //配列の中のオブジェクトの値の取得方法
//   const points = [
//     {x: 30, y:20},
//     {x: 20, y:220},
//     {x: 190, y:89},
//   ]
//   console.log(points[0].y);
//   console.log(points[2]['x']);
//   console.log(points);
//   console.log(points[1].x)

// 配列の要素を文字列として結合  join(結合するときの文字列)
// const d =[2019, 11, 14];
// console.log(d.join("/"));

// // 文字列を区切り文字のところで分割して配列にする split()
// const t = '17:08:21'
// console.log(t.split(":"));
// const [hour, minute, second] = t.split(":"); //分割代入で別々の定数に代入する
// console.log(hour);
// console.log(minute);
// console.log(second);

// ユーザーに確認を求める confirm()
// const answer = confirm('削除しますか？')
// if (answer) {
//   console.log('削除しました');
// } else {
//   console.log('キャンセルしました');
// }


//  タイマー機能
// let i = 0;

// function showTime() {
//   console.log(new Date());
//   i++;
//   if (i > 9) {
//     clearInterval(intervalid);
//   }
// }
// const intervalid = setInterval(showTime, 1000);



// 複数のオブジェクトのある場合
// const posts = [
//   {
//     text: 'JavaScriptの勉強中',
//     likeCount: 0,
//   },
//   {
//     text: 'プログラミング楽しい',
//     likeCount: 0,
//   },
// ];

// function show(post) {
//   console.log(`${post.text} - ${post.likeCount}いいね`);
// }

// show(posts[0]);


// メソッドを使う
// オブジェクトではプロパティーの値として関数をもたせる事もできます
// const posts = [
//   {
//     text: 'JavaScriptの勉強中',
//     likeCount: 0,
//     show() {
//       console.log(`${this.text} - ${this.likeCount}いいね`);
//     },
//   },
//   {
//     text: 'プログラミング楽しい',
//     likeCount: 0,
//     show() {
//       console.log(`${this.text} - ${this.likeCount}いいね`);
//     },
//   },
// ];

// posts[0].show();
// posts[1].show()


// クラス・・・オブジェクトをテンプレート化したもの
//機能の拡張をするときはプロパティーを直接操作せず、メソッド(クラス内(オブジェクト内)の関数)を介して操作する（カプセル化)
class Post {
  constructor(text) {
    this.text = text;
    this.likeCount = 0;
  }

  show() {
    console.log(`${this.text} - ${this.likeCount}いいね`);
  }

  like() {
    this.likeCount++;
    this.show();
  }
  // 静的メソッド   個々のオブジェクトであるインスタンスとは直接関係ないけれども、投稿に関する機能を作りたい、といった場合に便利です。
    // thisは使えない
  static showInfo() {
    console.log(`Post class version 1.0`)
  }
}

const posts = [
  new Post('JavaScriptの勉強中'),
  new Post('プログラミング楽しい'),
];

posts[0].show();
posts[1].show();
posts[1].like();

Post.showInfo();