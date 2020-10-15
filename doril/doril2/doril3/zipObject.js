function zipObject(array = [], values = []) {
  const zipObj = {};

  for(let i = 0; i < array.length; i++) {
    const target = array[i];
    console.log(target);
    const value =values[i];
    console.log(value);
    zipObj[target] = value;
  }
  return zipObj;
}

console.log( zipObject(['a', 'b'], [1, 2]) );
// => { 'a': 1, 'b': 2 }