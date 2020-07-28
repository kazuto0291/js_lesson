window.name = 'John';

const person = {
  name: 'Tom',
  hello: function() {
    console.log(`hello ${this.name}`);
  }
}

person.hello();

const helloTom = person.hello.bind(person);

function fn(ref) {
  ref();
}

fn(helloTom);

function a() {
  console.log(`hello ${this.name}`);
}

const b = a.bind({name: 'Tamama'});

b();


function c(name) {
  console.log(`hello ${name}`);
}

const d = c.bind(null, 'SARADA');
d('Tom');