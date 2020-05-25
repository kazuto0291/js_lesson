const h1Element = document.getElementById('title');
h1Element.textContent ='JSでタイトル変更！';

const ulElement = document.getElementById('item-container');  //Ul要素全体を取得
const firstLiElement = ulElement.getElementsByTagName('li')[0]; //Ul要素の中のLi要素の０番目を取得

ulElement.removeChild(firstLiElement);


const newLiElement = document.createElement('li');    //li要素のDOMを作成
newLiElement.textContent = 'JSで作成したli要素';      //作ったli要素の文字列を定義する
ulElement.appendChild(newLiElement);                //親要素Ulに作ったLi要素を追加する