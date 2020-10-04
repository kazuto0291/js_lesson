function takeRightWhile(array, predicate) {
  const takenArray = [];
  for(let i = array.length - 1; 0 <= i ; i--) {
    const value = array[i];
    if( !predicate(value, i, array) ) {
      break
    }
    takenArray.unshift(value);
  }

  return takenArray;
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