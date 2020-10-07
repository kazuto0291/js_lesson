function dropRightWhile(array, predicate ) {
  const newArray = [...array];

  for(let i = array.length - 1 ;0 <= i; i--) {
    const value =array[i];
    if(!predicate(value, i, array)) {
      break
    }
    newArray.pop(value);
  }
  return newArray;
}



const users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];

const result = dropRightWhile(users, function(o) {
  return !o.active;
});

console.log('result: ', result);
// => objects for ['barney']

console.log('users: ', users);
// => objects for ['barney', 'fred', 'pebbles']
