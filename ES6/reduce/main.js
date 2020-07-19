const numbers = [10, 20, 30];
const sum = 0;

const reduceEx = numbers.reduce(function(sum, number) {
  return sum + number;
}, 20);

console.log(reduceEx);
// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

const primaryColors = [
  {color: 'red'},
  {color: 'yellow'},
  {color: 'blue'}
];

const preEx = primaryColors.reduce(function(previous, primaryColor) {
  previous.push(primaryColor.color)
  return previous;
},[])

console.log(preEx, "@")
// ============================
function balancedParens(string) {
  return string.split('').reduce(function(previous, char) {
    if (previous < 0) {return previous;}
    if (char === '(') { return previous + 1;}
    if (char === ')') {return previous - 1}
  }, 0);
}

const ex =balancedParens('()(((((');

console.log(ex);

