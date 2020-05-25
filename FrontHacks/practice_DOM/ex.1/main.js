const h1Element = document.getElementById('title');
h1Element.textContent ='JSでタイトル変更！';

const ulElement = document.getElementById('item-container');  //Ul要素全体を取得
const firstLiElement = ulElement.getElementsByTagName('li')[0]; //Ul要素の中のLi要素の０番目を取得

ulElement.removeChild(firstLiElement);


const newLiElement = document.createElement('li');    //li要素のDOMを作成
newLiElement.textContent = 'JSで作成したli要素';      //作ったli要素の文字列を定義する
ulElement.appendChild(newLiElement);                //親要素Ulに作ったLi要素を追加する

// -------------------------------------------------------------------

const elementById =document.getElementById('title');
console.log(elementById);

const elementsByClassName = document.getElementsByClassName('item');  //クラス名'item'をすべて取得する
console.log(elementsByClassName);

const elementsByTagName = document.getElementsByTagName('li');    //liタグ要素をすべて取得する
console.log(elementsByTagName);

const h1ElementByQuerySelector = document.querySelector('#title');  //セレクタに一致したものを取得
console.log(h1ElementByQuerySelector);

const itemElementByQuerySelector = document.querySelector('.item'); //一番最初にあるセレクタ要素を１つのみ取得
console.log(itemElementByQuerySelector);

const h1ElementByQuerySelectorAll =document.querySelectorAll('#title'); //配列のようなNodeListを取得する
console.log(h1ElementByQuerySelectorAll);

const itemElementByQuerySelectorAll =document.querySelectorAll('.item');//すべての itemを取得する
console.log(itemElementByQuerySelectorAll);