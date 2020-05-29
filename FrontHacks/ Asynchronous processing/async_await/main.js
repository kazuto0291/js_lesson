const addAfter3Seconds =  (x, y) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(x + y);
    }, 3000)
  })
}

const promise = addAfter3Seconds(1,2);
promise.then(value => {
  console.log(value, '@@@@@@');
})


const callAsyncFunc = async () => {
  const value = await addAfter3Seconds(1, 2);
  console.log(value, '@@@@@@@@@@@@')
}

//asyncを使って定義したasync関数
const addWithAsync = async (x, y) => {
  return x + y;
};

//addWithAsync関数はasync関数のため、
// 戻り値常にPromiseオブジェクトとなる
const result1 = addWithAsync(1, 2);
console.log('result1', result1);

// async関数内でreturnした値はthenメソッド経由で
// 値を受け渡しできる
addWithAsync(1, 2)
  .then(result2 => {
    console.log('result2', result2);
  })


// awaitを使わない場合の実装
function runAsyncFunc1() {
  addWithAsync(1,2)
  .then(result3 => {
    console.log('result3:', result3);
  });
}
runAsyncFunc1();

// awaitを使った場合の実装
async function runAsyncFunc2() {
  const result4 = await addWithAsync(3,5);
  console.log('result4;', result4);
}
runAsyncFunc2()



// async/awaitの例外処理
const throwExeptionFunc = async () => {
  throw new Error('エラーです');
  return 'throwで例外処理が発生するためにこのreturnは処理されない';
};

throwExeptionFunc()
.then(value1 => { console.log('valuel:', value1);})
.catch(error1 => {console.log('error1:', error1.message);});

async function asyncFunc() {
  try {
    const value2 = await throwExeptionFunc();
    console.log('value2;', value2);
  } catch(error2) {
    console.log('error2 : ', error2.message);
  }
}
asyncFunc();