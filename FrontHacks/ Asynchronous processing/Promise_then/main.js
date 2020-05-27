const promise = Promise.resolve(1);//省略形


promise
  .then((value) => {
    console.log(`引数の値その１：${value}`);
    return value +1;
  })
  .then((value) => {
    console.log(`引数の値その２：${value}`);
    return value * 2;
  })
  .then((value) => {
    console.log(`引数の値その３：${value}`);
    return value * value;
  })
  .then((value) => {
    console.log(`引数の値その４：${value}`);
  })
  .then((value) => {
    console.log(`引数の値はreturnしてないから帰ってこない：${value}`);
  });
// ===================================================================



const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(800);
  }, 1000);
});

promise1
  .then((value) => {
    console.log(`１つ目のthenの引数：${value}`);
    return new Promise((resolve, reject) => {       //thenの中で非同期処理
      setTimeout(() => {
        resolve(1000);
      }, 1000);
    });
  })
  .then((value) => {
    console.log(`2つ目のthenの引数：${value}`);
    return new Promise((resolve, reject) => {   //thenの中で非同期処理
      setTimeout(() => {
        resolve(1500);
      }, 1000);
    });
  })
  .then((value) => {
    console.log(`3つ目のthenの引数：${value}`);
  });