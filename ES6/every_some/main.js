const computers = [
  {name: 'Apple', ram: 24},
  {name: 'Compaq', ram: 4},
  {name: 'Acer', ram: 32}
];

// 16GB ramが必要なソフト

// 全てで動かせるフラグ
const allComputersCanRun = true;

// どれかでは動かせるフラグ
const someComputersCanRun = false;

for (let i = 0; i < computers.lengtu; i++) {
  const computer = computers[i];

  if (computer.ram < 16) {
    allComputersCanRun = false;
  } else {
    someComputersCanRun = true;
  }
}

console.log(allComputersCanRun);
console.log(someComputersCanRun);

const everyEx = computers.every(function(computer) {
  return  computer.ram >= 16;
});

console.log(everyEx);

const someEx = computers.some(function(computer) {
  return computer.ram >= 16;
});

console.log(someEx);

const names = [
  'けん',
  'はなこ',
  'そういちろう'
];

const everyEx2 = names.every(function(name) {
  return name.length >= 3;
});

console.log(everyEx2);

const someEx2 = names.some(function(name) {
  return name.length >= 3;
});

console.log(someEx2);

// ==============================

function Field(value) {
  this.value = value;
}

Field.prototype.validate = function() {
  return this.value.length > 0;
}

const username = new Field('my_username');
const password = new Field('my_password');
const birthday = new Field('2010/10/10');

// console.log(username.validate() && password.validate() && birthday.validate());

const fileds = [
  username,
  password,
  birthday
];

const everyEx3 = fileds.every(function(filed) {
  return filed.validate();
});

console.log(everyEx3, '@@@@')

if (everyEx3) {
  // サーバにリクエストを投げる
} else {
  // エラーを表示する
}

// =========================

const users = [
  { id: 21, hasSubmitted: true},
  { id: 62, hasSubmitted: false},
  {id: 4, hasSubmitted: true}
];

const hasSubmitted = users.every(function(user) {
  return user.hasSubmitted === true;
});

console.log(hasSubmitted, '@@');

// ===============================

