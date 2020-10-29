function findLastIndex() {
  
}


const users = [
  { 'user': 'pebbles', 'active': false },
  { 'user': 'barney',  'active': true },
  { 'user': 'john',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];

const result1 = findLastIndex(users, function(o) {
  return o.user === 'pebbles';
});
console.log(result1);
// => 4

const result2 = findLastIndex(users, function(o) {
  return o.user === 'pebbles';
}, 2);
console.log(result2);
// => 0

const result3 = findLastIndex(users, function(o) {
  return o.user === 'john';
});
console.log(result3);
// => 2