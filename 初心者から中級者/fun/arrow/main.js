const a = name => {
  return `hello ${name}`
}
console.log(a('tom'))

window.name = 'John';


const person = {
  name: 'Tom',
  hello() {
    console.log(`hello ${this.name}`);
    const c = () => {
      console.log(`Bye ${this.name}`)
    }
    c();
  }
}
person.hello();

