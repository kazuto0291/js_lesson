const cat = {
  name: 'chachacha',
  age: 3,
  sex: 'オス'
};

console.log(cat);

cat.owner ='kazu'

console.log(cat);

cat.age += 1;
console.log(cat);
cat.age = cat.age + 2;
console.log(cat);



delete cat.owner;
console.log(cat);

const person = {
  name: 'ツヨポン',
  age: 29,
  gender: '男',
  area: 'tokyo',
  eat: 'cake',
  sports: 'soccer'
};

console.log('削除前', person);

console.log(person.name);
console.log(person['age']);

person.name = '新しい名前'
person['age'] = 44

console.log(person.name);
console.log(person['age']);


delete person.area;
delete person.cake;

console.log(person);

