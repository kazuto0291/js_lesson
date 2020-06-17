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

