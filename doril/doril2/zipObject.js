function zipObject(array, values) {
  const zipobj = {};
  for(let i = 0; i < array.length; i ++) {
    const target = array[i]
    const value = values[i]
    zipobj[target] =value
  }
  return zipobj;
}

console.log( zipObject(['a', 'b'], [1, 2]) );
// => { 'a': 1, 'b': 2 }