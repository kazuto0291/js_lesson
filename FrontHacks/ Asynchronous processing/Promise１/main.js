// 非同期処理はnew Promiseで行う
const resolvePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('then経由で渡す値');
  }, 1000);
});

resolvePromise
  .then(data => {console.log(`①then : ${data}`);})
  .catch(error => {console.log(`①catch : ${error}`);});

const rejectPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('catch経由で受け取る');
  }, 1000);
})

rejectPromise
  .then(data => {console.log(`②then : ${data}`);})
  .catch(error => {console.log(`②catch : ${error}`);});

// 同期処理
  const resolvePromise1 = Promise.resolve(1);

  resolvePromise1
    .then(data => {console.log(`③then : ${data}`);})
    .catch(error => {console.log(`③catch : ${error}`);});
  

  const rejectPromise1 = Promise.reject(2);
  
  rejectPromise1
    .then(data => {console.log(`④then : ${data}`);})
    .catch(error => {console.log(`④catch : ${error}`);});


