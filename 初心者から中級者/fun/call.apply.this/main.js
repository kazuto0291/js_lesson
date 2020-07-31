function a() {
  console.log(`hello ${this.name}`)
}

const tim = {name: 'Tim'};

const b = a.bind();

b();
a.apply(tim);   //第2引数は配列
a.call(tim);  //  第2引数は関数の引数をとる

const arry = [1,2,3,4,5];

const result = Math.max.apply(null, arry);
console.log(result);

const result1 = Math.max(...arry);
console.log(result1)