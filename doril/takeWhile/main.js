function takeWhile() {

}

const users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];

const result = takeWhile(users, function(o) {
  return !o.active;
});
console.log(result);
// => objects for ['barney', 'fred']

console.log(users);
// => objects for ['barney', 'fred', 'pebbles']