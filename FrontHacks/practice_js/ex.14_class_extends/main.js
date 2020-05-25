// クラスの継承

class Animal {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

class Dog extends Animal {
  bark() {
    console.log(`わんわん by ${this.name}`);
  }
}

// Animalを継承したDogクラスのインスタンスを生成
const dog =new Dog('ポチ');
dog.bark();
console.log(`getNameメソッド実行 : ${dog.getName()}`);
console.log(`nameプロパティー値取得 : ${dog.name}`);


//superを使うクラス継承

class Fruits {
  constructor(name) {
    console.log('親クラスのコンストラクタ②');
    this.name = name;
  }
  speak() {
    console.log('親クラスのsuperメソッド③');
  }
}

class Apple extends Fruits {
  constructor(name, age) {
    console.log('子クラスのコンストラクタ①');
    super(name);
    this.age = age;
  }

  speak() {
    super.speak();
    console.log('子クラスのsupperメソッド④');
  }
}

const apple = new Apple('リンゴ', 2);   //①②
apple.speak();                          //③④
console.log(`名前；${apple.name} 、年齢： ${apple.age}⑤`);  //⑤