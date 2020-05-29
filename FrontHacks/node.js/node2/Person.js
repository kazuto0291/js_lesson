class Person {
  constructor(name) {
    this.name = name;
  }

  introduceMySelf() {
    console.log(`こんにちは。私は${this.name}です。`);
  }
}

module.exports = Person;