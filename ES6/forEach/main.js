const colors = [ 'red', 'blue', 'green'];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

colors.forEach(function(color) {
  console.log(color);
})

colors.forEach((color, index) => {
  console.log(`${index + 1}:${color}`)
})

//数字の配列を用意する
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//合計を保持する変数を用意する
let sum = 0;

// 配列の一つ一つの数字を合計に足す
numbers.forEach(function(number) {
  sum += number;
})

// 合計を表示する
console.log(sum);



// const selectedEmails = [];

// selectedEmails.forEach(function(email) {
//   deleteEmail(email);
// })

function handlePosts() {
  const posts = [
    {id: 23, title: 'JSニュース'},
    {id: 52, title: 'リファクタリング、シティー'},
    {id: 105, title: 'Rubyのいいところ'}
  ];

  // for (let i = 0; i < posts.length; i++) {
  //   savePost(post[i]);
  // }

  posts.forEach((post, index) => {
    savePost(post[index]);
  })
}

//面積計算結果を配列に格納する

const images = [
  { height: 10, width: 30},
  { height: 20, width: 90},
  { height: 54, width: 32},
  { height: 63, width: 74},
];

const areas = [];

images.forEach((image) => {
  const area = image.height * image.width;
  return areas.push(area);
})

console.log(areas);