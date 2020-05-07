'use strict';


// function update() {
  // document.querySelector('h1').textContent = 'Changed!';
  // document.querySelector('セレクタ').textContent = 'Changed!'; １つの要素を取得する
  // document.getElementById('id名').textContent = 'CHanged!';  id属性がついていたら
  // document.querySelector('p').textContent = 'Changed';
  // document.querySelectorAll('p')[2].textContent = 'Changed'; 複数の要素を取得する
  // document.querySelectorAll('p').forEach((p, index) => {
  //   p.textContent = `${index}番目のpです！`
  // });
// }
// setTimeout(update, 1000);

// document.querySelector('button').addEventListener('click', () => {
//   document.querySelector('h1').textContent = 'Changed!';
//   document.getElementById('target').title = 'This is title!';
//   // document.getElementById('target').style.color = 'red';
//   // document.getElementById('target').style.backgroundColor = 'skyblue';
//   // document.getElementById('target').className = 'my-color my-border'
//   // document.getElementById('target').classList.add('my-color'); //class 属性の操作 (既存のクラスの設定に my-color を新しく追加)
//   //contains(クラス名)   クラスが付いてるかどうかを true 、 false で返してくれる
//   // if (document.getElementById('target').classList.contains('my-color') === true) {
//   //   //remove(クラス名)   クラスを外す
//   //   document.getElementById('target').classList.remove('my-color');
//   // } else {
//   //   document.getElementById('target').classList.add('my-color');
//   // }
//   // document.getElementById('target').classList.toggle('my-color');
//   // document.getElementById('target').textContent = 'Dotinstall';
//   document.getElementById('target').textContent = document.getElementById('target').dataset.translation;
  
// });

// DOM要素の追加
// ①li要素を作る
// ②中身のテキストを設定する
// ③DOMツリーに追加する
// document.querySelector('button').addEventListener('click', () => {
//   const item3 = document.createElement('li');  //①要素を作る
//   item3.textContent = 'item 3';                //②textContent を使って中身のテキストを設定

//   const ulNode = document.querySelector('ul');
//   ulNode.appendChild(item3); //③親要素に対して子要素の末尾に追加する
// });

//DOMの要素の複製して挿入をしてみよう
// ①li要素を複製
// ②DOMツリーに追加する
// document.querySelector('button').addEventListener('click', () => {
//   const item1 = document.querySelectorAll('li')[0];   //querySelectorAll() で li を全部取得しその 0 番目
//   const copy = item1.cloneNode(true);  //コピーを作りたいので定数名をコピーとしつつ、trueで要素の中身を複製
// // item 2 の前に挿入したいなら、親要素と item 2 が必要なのでまずは取得する
//   const ul = document.querySelector('ul');//親要素ですが、定数名は今回 ul
//   const item2 = document.querySelectorAll('li')[2]; //document.querySelectorAll() で liを全て取得して、それの 2 番目とすれば良い
//   ul.insertBefore(copy, item2);//親要素に対して insertBefore() というメソッドを使って copy を item2 の前に挿入してね、と書いてあげます
// });

//DOMの要素の削除
// document.querySelector('button').addEventListener('click', () => {
//   const item1 = document.querySelectorAll('li')[1];

//   item1.remove();

//   //親Node.removeChild(削除するNode)
//   document.querySelector('ul').removeChild(item1);
// })


//input要素の操作
document.querySelector('button').addEventListener('click', () => { //ボタンをクリックしたときの処理はリストに追加する li 要素を作る
  const li =document.createElement('li'); //要素を作るには createElement() を使う
  const text = document.querySelector('input');//input要素に入力された値を使いたいので、まずは要素を取得する
  //li.textContent に値を設定
  li.textContent = text.value; //入力された値は value 属性で取得できるので、このように書いてあげれば OK
  document.querySelector('ol').appendChild(li);//ol に対して、 appendChild() で li を追加

  //入力するたびにこちらの入力欄がクリアされてフォーカスされている状態を作る
  text.value = '';//text の値を空文字にしてあげて
  text.focus(); //フォーカスさせるには focus() メソッドを使う
})