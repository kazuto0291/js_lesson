// 属性値をセット
const imgElement = document.getElementById('image');
imgElement.setAttribute('src', 'https://pakutaso.cdn.rabify.me/shared/img/thumb/tomneko1215B1329.jpg.webp?d=400')
console.log(imgElement);

//class値の変更
const logoElement = document.getElementById('logo');
logoElement.className = 'hoge';         //クラス値は１つ歯科セットできない。


const titleElement = document.getElementById('title');
titleElement.classList.add('hoge', 'fuga');   //addメソッドを使えば複数のクラス値をセットできる