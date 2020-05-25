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