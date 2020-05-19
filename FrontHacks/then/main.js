// Promiseオジェックはthenメソッドを持つ
// thenメソッドの戻り値もPromiseオブジェクトである
// つまり、thenメソッドを連続で記述することができる（メソッドチェーン）


const promise1 = Promise.resolve(1);
promise1.then(() => {}).then(() => {console.log('promise1の最後のthen');});

// メソッドチェーンを書くときはインデントを
// 一段下げて、改行して見やすくする

const promise2 = Promise.resolve(2);
promise2
  .then(() => {})
  .then(() => {console.log('promise2の最後のthen');});


// thenメソッド内でreturnした値は、次のthenのコールバック関数の引数になる

const promise = Promise.resolve(1);
promise
  .then((value) => {
    console.log('引数の値その１：', value);   //1
    return value + 1;
  })
  .then((value) => {
    console.log('引数の値その２：', value);   //2
    return value * value;
  })
  .then((value) => {
    console.log('引数の値その３：', value);     //4
  })                                          //returnしていないから
  .then((value) => {
    console.log('引数の値その４：', value);     //undefinedになる
  })


  // thenメソッド内でreturnした値は、次のthenのコールバック関数の引数になる

  const promise3 = newPromise((resolve, reject) => {
    setTimeout(() => {
      resolve(999);
    }, 1000);
  });

  promise3
  .then((value) => {
    console.log("１つ目のthenの引数：", value);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(1000)
      }, 1000);
    });
  })
  .then((value) => {
    console.log('２つ目のthenの引数：', value);
  });