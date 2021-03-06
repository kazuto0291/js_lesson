// 課題1: キッチンタイマークラスを作る
// - クラス名はKitchenTimerとする
// - KitchenTimerクラスのインスタンスは次の情報を持つようにする
//   - _name: タイマーに名前をつける(インスタンス生成時にコンストラクタ経由でnameをセットする)
//   - _remainingSeconds: 残り秒数 (初期値は0とする)
//   - _isRunning: 起動中フラグ(true: 起動中, false: 停止中), 初期値はfalseとする
//   - 余談 : 各値の先頭に「_」(アンダースコア)を使っているのは、クラス外から上記3つの値に直接アクセスしないことを意図している(あくまでも言語レベルでのルールではなく慣習)
//     -  参考: https://jsprimer.net/basic/class/#private-property
// - 以下の機能(インスタンスメソッド)を持つ
//   - setSecondsメソッド : `_remainingSeconds` にカウントダウンする秒数(整数)をセットする
//   - startメソッド : _isRunningをtrueにする
//   - stopメソッド : _isRunningをfalseにする
// - その他
//   - コンストラクタの末尾の方で「window.setInterval」メソッド使って1秒ごと動作する次の機能を実装する
//     - _isRunningがtrue、かつ残り秒数が1以上のとき
//       - _remainingSecondsの値を1減らす(デクリメントする)
//       - タイマーの名前と現在の_remainingSecondsの値をconsole.logで出力する
//     - _isRunningがfalse、もしくは_remainingSeconds以下のときは何もしない


class KitchenTimer {
  constructor() {
    this._name = name;
    this._remainingSeconds =0;
    this._isRunning = false;

    window.setInterval(() => {
      if(this._isRunning && this._remainingSeconds > 0) {
        this._remainingSeconds--;
        console.log(`${this._name} : 残り時間 :${this._remainingSeconds}秒`);
      }
    }, 1000)    //1000＝１秒   // １秒毎に第一引数の関数を実行する
  }

  setSeconds(seconds) {
    this._remainingSeconds = seconds;
  }

  start() {
    this._isRunning =true;
  }

  stop() {
    this._isRunning =false;
  }
}




// 課題2: KitchenTimerクラスのインスタンスを2つ生成して、それぞれのインスタンスの_remainingSecondsにメソッド経由で3秒と5秒をセットする
// - 変数名はtimer1, timer2として、コンストラクタ経由でセットする名前はそれぞれ `タイマー1`、`タイマー2`とする
const timer1 = new KitchenTimer('タイマー１');
const timer2 = new KitchenTimer('タイマー２');

timer1.setSeconds(3);
timer2.setSeconds(5);

// 課題3: 課題2で生成したインスタンスのstartメソッドを実行する
// - window.setInterval内に実装したconsole.logで「'タイマーの名前 : 残り時間〇秒'」のように表示されるのを確認する

timer1.start();
timer2.start();


// クラスメソッド

class Car {
  static color = 'BaseColor';
  constructor(color, number) {
    this.color = color;
    this.number = number;
  }

  static showCorpName() {
    console.log('showCorpName : Toyota');
  }

  shwoColor() {
    console.log(`showColor : `, this.color);
  }

  static showClolr2() {
    console.log('showColor2 : ', this.color);
  }

  static getCorpName() {
    return 'Toyota';
  }
}

console.log(Car.getCorpName());

const car1 =new Car('red', 1);

Car.showClolr2();
car1.shwoColor();

Car.showCorpName();
// car1.showCorpName();