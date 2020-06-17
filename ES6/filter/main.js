const products = [
  { name: 'きゅうり', type: '野菜'},
  { name: 'トマト', type: '野菜'},
  { name: 'メロン', type: '果物'},
  { name: 'バナナ', type: '果物'},
  { name: 'ほうれん草', type: '野菜'},
  { name: 'みかん', type: '果物'},
  { name: 'きゅうり', type: '野菜'}
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