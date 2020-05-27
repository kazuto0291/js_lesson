const promise = new Promise((resolve, reject) => {
  reject(new Error('何かしらのエラーを渡す'));  //エラーオブジェクト
});

promise
  .then(() => {
    console.log(1)
  })
  .then(() => {
    console.log(2)
  })
  .then(() => {
    console.log(3)
  })
  .catch((error) => {
    console.log(error.message, '@@@@@@@@')
  })