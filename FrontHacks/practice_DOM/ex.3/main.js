// 属性値をセット
const imgElement = document.getElementById('image');
imgElement.setAttribute('src', 'https://pakutaso.cdn.rabify.me/shared/img/thumb/tomneko1215B1329.jpg.webp?d=400')
console.log(imgElement);

//class値の変更
const logoElement = document.getElementById('logo');
logoElement.className = 'hoge';         //クラス値は１つ歯科セットできない。


const titleElement = document.getElementById('title');
titleElement.classList.add('hoge', 'fuga');   //addメソッドを使えば複数のクラス値をセットできる


/**
 * 課題1: h1要素でid属性値が `title` のテキスト内容を変更する
 *   - textContentを使う
 *     - 「JSで変更した後のタイトル」というテキストをセットする
 */
titleElement.textContent = 'JSで変更した後のタイトル'


/**
 * 課題2: p要素でid属性値が `description` のテキスト内容を変更する
 *   - innerHTMLを使う
 *     - 「JSで変更した後の説明文」というテキストをセットする
 *   - strong要素を使って「説明文」を強調する
 */
const pElement = document.getElementById('description');
pElement.innerHTML = 'JSで変更したあとの<strong>説明文</strong>'

/**
  * 課題3: img要素でid属性値が 'profile' のsrc属性値を変更する
  *   - セットする画像は以下のいずれかで対応する
  *     - 自分で用意する
  *     - 「https://www.pakutaso.com/shared/img/thumb/TOMnemuiDSC01757_TP_V1.jpg」を使う
  */
const img2Element = document.getElementById('profile');
img2Element.setAttribute('src', 'https://www.pakutaso.com/shared/img/thumb/TOMnemuiDSC01757_TP_V1.jpg')

/**
 * 課題4: 課題1で作成したh1要素のDOMにクラス属性値をセットする
 *   - セットするクラス属性値はstyle.cssの中身を参考にする
 *     - 背景色がh1要素の背景色が黄色になればOKです
 */

titleElement.classList.add('koko', 'doko')