const products = [
  { name: 'きゅうり', type: '野菜', quantity: 0, price: 1 },
  { name: 'トマト', type: '野菜' , quantity: 14, price: 15},
  { name: 'メロン', type: '果物', quantity: 30, price: 8 },
  { name: 'バナナ', type: '果物', quantity: 45, price: 20},
  { name: 'ほうれん草', type: '野菜', quantity: 35, price: 35},
  { name: 'みかん', type: '果物', quantity: 15, price: 5},
  { name: 'きゅうり', type: '野菜', quantity: 80, price: 20}
];

const filteredProducts = [];

for (var i = 0; i < products.length; i++) {
  if (products[i].type === '果物') {
    filteredProducts.push(products[i]);
  }
}

console.log(filteredProducts);

const filterProducts2 = products.filter(function(product) {
  return product.type === '野菜'
})

console.log(filterProducts2);


const filterProducts3 = products.filter(function(product) {
  return product.type === '果物'
      && product.quantity > 0
      && product.price < 10;
});

console.log(filterProducts3);

// =============================


const post = {id: 4, title: '初めての投稿'};

const comments = [
  { postId: 4, content: 'いい記事ですね'},
  { postId: 3, content: '勉強になります'},
  { postId: 4, content: 'ためになりました'},
  { postId: 3, content: 'なるほど'},
]

function commentsForPost(post, comments) {
  return comments.filter(function(comment) {
    return comment.postId === post.id;
  })
}

console.log(commentsForPost(post, comments));

//＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

const numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

const filteredNumbers = numbers.filter((number) => {
  return number > 50;
})

console.log(filteredNumbers);

// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

const users = [
  {id: 1, admin: true },
  {id: 2, admin: false },
  {id: 3, admin: false },
  {id: 4, admin: false },
  {id: 5, admin: true }
];

const filteredUsers = users.filter((user) => {
  return user.admin === true;
})

console.log(filteredUsers);