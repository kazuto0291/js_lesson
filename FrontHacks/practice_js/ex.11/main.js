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