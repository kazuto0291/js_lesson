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

computers.every(function(computer) {
  return  console.log(computer.ram >= 16);
})