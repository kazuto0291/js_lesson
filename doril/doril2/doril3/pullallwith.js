function pullAllWith(array, comparisons, comparator) {

  // ここの関数名は「hasValue〇〇」よりも「hasSameValue〇〇」の方が良いかも。
  // 「Same」という単語から、「同じ値を持っているか？」という意味合いが強くなるため。
  // 
  // とりあえず、ここでは動画で実装したコードをそのまま貼り付けている。
  function hasValueInComparisons(arrayElement) {
    for(let i = 0; i < comparisons.length; i++) {
      const comparison = comparisons[i];
      if( comparator(arrayElement, comparison) ) {
        return true;
      }
    }

    return false;
  }

  for(let i = array.length - 1; 0 <= i; i--) {
    if( hasValueInComparisons( array[i] ) ) {
      array.splice(i, 1);
    }
  }

  return array;
}

const array = [
  { 'x': 1, 'y': 2 },
  { 'x': 3, 'y': 4 },
  { 'x': 5, 'y': 6 }
];

const result = pullAllWith(array, [{ 'x': 3, 'y': 4 }], (a, b) => {
  return a.x === b.x && a.y === b.y;
});
console.log('result : ', result);
// => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]

console.log('array : ', array);
// => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]

