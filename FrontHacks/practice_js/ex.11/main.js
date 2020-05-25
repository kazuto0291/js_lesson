class Timer {
  constructor() {
    this.remainingSeconds = 0;
  }

  setSecondes(seconds) {
    this.remainingSeconds = seconds;
  }
  tick() {
    this.remainingSeconds--;
  }
}

const timer1 = new Timer();
const timer2 = new Timer();
timer1.setSecondes(3);
timer2.setSecondes(5);

console.log(`timer1残り時間 : ${timer1.remainingSeconds}`);
console.log(`timer2残り時間 : ${timer2.remainingSeconds}`);
timer1.tick();
timer2.tick();
console.log(`timer1残り時間 : ${timer1.remainingSeconds}`);
console.log(`timer2残り時間 : ${timer2.remainingSeconds}`);
timer1.tick();
timer2.tick();
console.log(`timer1残り時間 : ${timer1.remainingSeconds}`);
console.log(`timer2残り時間 : ${timer2.remainingSeconds}`);
timer1.tick();
timer2.tick();
console.log(`timer1残り時間 : ${timer1.remainingSeconds}`);
console.log(`timer2残り時間 : ${timer2.remainingSeconds}`);





// 課題1: 人間を表すPersonクラスを作成する
// - クラス名はPersonとする
// - Personクラスのインスタンスは次の情報を持つようにする
//   - name: 名前
//   - age: 年齢
//   - gender: 性別
//   - height: 身長
//   - weight: 体重
// - インスタンスごとの固有の情報はコンストラクタ経由でセットする
class Person {
  constructor(name, age, gender, height, weight) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.height = height;
    this.weight = weight;
  }
}


// 課題2: 自分もしくは、架空の人の情報を使って１人の人間を表すPersonインスタンスを生成する
// - インスタンスは変数 `me` に代入する
const me = new Person('kazu', 26, '男', 172, 63);


// 課題3: 課題2で生成したインスタンスの情報をconsole.logを使って、「名前」「年齢」「性別」「身長」「体重」が正しくセットされていることを確認する
console.log(me.age);
console.log(me.name);
console.log(me);



class Car {
  constructor(color, number) {
    this.color = color;
    this.number =number;

    console.log(`インスタンス生成時に呼ばれる : ${color}, ${number}`);
  }
}

const car1 = new Car('red',1);
const car2 = new Car('green', 2);
const car3 = new Car('blue', 3);

console.log('car1.color', car1.color);
console.log('car1.number', car1.number);

console.log('car2.color', car2.color);
console.log('car2.number', car2.number);

console.log('car3.color', car3.color);
console.log('car3.number', car3.number);