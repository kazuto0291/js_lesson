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