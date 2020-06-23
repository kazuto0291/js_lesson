const users = [
  { name: '太郎'},
  { name: '次郎'},
  { name: '三郎'}
];

let user;  //入れ物用意

for (let i = 0; i < users.length; i++) {
  if (users[i].name === '次郎') {
    user = users[i];
    break;
  }
}

users.find((user) => {
  return user.name === '三郎';
})


console.log(user);
//=====================================

function Car(model) {
  this.model =model;
}

const cars = [
  new Car('プリウス'),
  new Car('ノート'),
  new Car('アクア')
];

cars.find(function(car) {
  return car.model === 'アクア'
})