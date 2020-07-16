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