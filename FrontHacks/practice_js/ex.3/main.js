((x, y) => {
  console.log(x, y, x + y );
})(4, 5);


const kadai_1 = (age, callback) => {
  let message;
  if (typeof age !== 'number') {
    message = "数値が入力されていません";
  } else if (age >= 20) {
    message = "値は20以上です";
  } else if (age >= 10) {
    message = "値は10以上20未満です";
  } else {
    message = "値は10未満です"
  }
   callback(message);
}

kadai_1(22, (message) => {
  console.log('入力：22');
  alert(message);
})

kadai_1(13, (message) => {
  console.log('入力：13');
  alert(message);
});


((x, y) => {
  console.log(x + y );
})(4, 5);
