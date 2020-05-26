/**
 * 課題1: id値が 'title' の要素を取得する
 *   - getElementByIdを使う
 *   - console.logで取得したDOMの中身を確認する
 */
const titleGetelementById = document.getElementById('title');
console.log(titleGetelementById);

/**
 * 課題2: id値が 'item-container' の要素を取得する
 *   - querySelectorを使う
 *   - console.logで取得したDOMの中身を確認する
 */
const idQuerySelector = document.querySelector('#item-container');
console.log(idQuerySelector)

/**
 * 課題3: li要素を全て取得する
 *   - console.logで取得したDOMの中身を確認する
 */
const liAllq = document.querySelectorAll('li');
console.log(liAllq);
const liElements = document.getElementsByTagName('li');
console.log(liElements);

/**
 * 課題4: class値が 'item' の要素を全て取得する
 *   - getElementsByClassNameを使う
 *   - console.logで取得したDOMの中身を確認する
 */
const itemClass =document.getElementsByClassName('item');
console.log(itemClass);


/**
 * 課題5: class値が 'item' の要素を全て取得する
 *   - querySelectorAllを使う
 *   - console.logで取得したDOMの中身を確認する
 */

const items =document.querySelectorAll('.item');
console.log(items);

//----------------------------------------------

const element1 =document.getElementById('inner-html');
console.log('innnerHTML-----------')
console.log(`変更前：${element1.innerHTML}`);
element1.innerHTML = '変更した<strong>innnerHTML</strong>テキスト';
console.log(`変更後：${element1.innerHTML}`);


const element2 = document.getElementById('inner-text');
console.log('innerText---------------');
console.log(`変更前：${element2.innerText}`);
element2.innerText = '変更した<strong>innerText</strong>テキスト';
console.log(`変更後：${element2.innerText}`);


const element3 = document.getElementById('text-content');
console.log('textContent---------------');
console.log(`変更前：${element3.textContent}`);
element3.textContent = '変更した<strong>textContent</strong>テキスト';
console.log(`変更後：${element3.textContent}`);
