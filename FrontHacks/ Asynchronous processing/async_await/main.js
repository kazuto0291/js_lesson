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