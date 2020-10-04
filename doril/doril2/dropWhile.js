function dropWhile(array, predicate) {
  const dropedArray = [...array];

  for(let i = 0; i <= array.length ; i++) {
    const value = array[i];
    if( !predicate(value)) {
      break
    }
    dropedArray.shift();
  }
  return dropedArray;
}



const users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];

const result = dropWhile(users, function(o) {
  return !o.active;
});
console.log('result: ', result);
// => objects for ['pebbles']

console.log('users: ', users);
// => objects for ['barney', 'fred', 'pebbles']