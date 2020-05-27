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
  })