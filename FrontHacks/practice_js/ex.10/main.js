// オブジェクトを使ってメソッドを作成する

// オブジェクトの関数を定義
const math  = {
  add: (a,b) => {
    return a + b;
  },
  sub: (a, b) => {
    return a - b;
  }
};

// オブジェクト作成後にメソッドを追加する
math.mult = (a, b) => {
  return a * b;
};
math.divi = (a, b) => {
  return a / b;
};

console.log(math.add(5, 3));
console.log(math.sub(5 ,3));
console.log(math.mult(5, 3));
console.log(math.divi(6, 3));