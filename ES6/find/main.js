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

//=====================================

const posts = [
  {id: 1, title: '投稿1'},
  {id: 2, title: '投稿2'},
  {id: 3, title: '投稿3'},
  {id: 4, title: '投稿4'}
];

const comment = { postId: 2, content: 'いいね'};

function postForComment(posts, comment) {
  return posts.find(function(post) {
    return post.id === comment.postId;
  });
}

console.log(postForComment(post, comment));