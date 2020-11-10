const person = {
  name: "Max",
  age: 29,
  greet() {
    console.log('Hi, I am ' +  this.name);
  }
}
console.log(person)
person.greet();

const hobbies = ['Sports', 'Cooking', 'programing', 'english'];
for (let hobby of hobbies) {
  console.log(hobby);
}