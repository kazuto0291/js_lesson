function takeWhile(array, predicate) {
  const takenValues = [];
  for(let i = 0; i < array.length; i++) {
    const value = array[i];
    if( !predicate(value, i, array) ) {
      break;
    }

    takenValues.push(value);
  }

  return takenValues;
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