
 for (let i = 1; i < 100; i++) {
   if (i % 15 === 0) {
    console.log('FizzBuzz');
   } else if (i % 3 === 0) {
     console.log('FIZZ');
   } else if (i % 5 === 0) {
    console.log('Buzz');
   } else {
     console.log(i);
   }
 }


let num = 0;

while (num < 100){
  console.log(num)
  num++;
}

let question = 'パンはパンでも食べられないパンは？';
let answer = 'フライパン';
let input;

while (input !== answer) {
  input = prompt(question);
  if (input !== answer) {
    alert('不正解です！');
  } else {
    alert('正解です！');
  }
}





const weather = prompt('今日の天気は？次の3つのうち、いずれかの文字列を入力してください。(晴れ or 曇り or 雨)');

if (weather === "晴れ") {
  alert('今日は気持ちの良い一日になりそうですね！');
} else if ( weather === "曇り") {
  alert('どんよりした天気ですが今日も一日がんばりましょう！');
} else if ( weather === "雨") {
  alert('家でゆっくり過ごすのも良いと思いますよ！');
} else {
  alert('晴れ・くもり・雨以外の文字列には対応していません。');
}




let lastName = "文字列";
let firstName = "ラストネーム";

let fullName = firstName + " " +lastName;

let myAge = 25;
let friendAge =29;

let totalAge = myAge + friendAge;

let numberOfDays =totalAge * 365;

let numberOfChildren = 3;

let numberOfCakes = 10;

let numberOfCakesByChild = numberOfCakes / numberOfChildren;

let numberOfRestOfCake = numberOfCakes % numberOfChildren;


console.log(lastName);
console.log(firstName);
console.log(fullName);
console.log(myAge);
console.log(friendAge);
console.log(totalAge);
console.log(numberOfDays);
console.log(numberOfChildren);
console.log(numberOfCakes);
console.log(numberOfCakesByChild);
console.log(numberOfRestOfCake);



