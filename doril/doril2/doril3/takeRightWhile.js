function takeRightWhile() {
  
}

const users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];

const result = takeRightWhile(users, function(o) {
  return !o.active;
});

console.log(result);
// => objects for ['fred', 'pebbles']

console.log(users);
// => objects for ['barney', 'fred', 'pebbles']