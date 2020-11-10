const person = {
  name: "Max",
  age: 29,
  greet() {
    console.log('Hi, I am ' +  this.name);
  }
}

const printName = ({ name }) => {
  console.log(name);
}

printName(person);

// console.log(person)
// person.greet();

const hobbies = ['Sports', 'Cooking', 'programing', 'english'];
// for (let hobby of hobbies) {
//   console.log(hobby);
// }
// const copiedArray = hobbies.slice();
// console.log(copiedArray)

// const copiedArray2 = [...hobbies];
// console.log(copiedArray2);

// const copiedOb = {...person};
// console.log(copiedOb);

// const toArray = (...args) => {
//   return args
// }
// console.log(toArray(1,2,3,4,5,6,7,8,9))