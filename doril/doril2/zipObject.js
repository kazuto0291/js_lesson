function zipObject(props = [], values = []) {
  zippedObject = {};
  for(let i = 0; i < props.length; i++) {
    const prop = props[i];
    const value = values[i];
    zippedObject[prop] = value
  }
  return zippedObject
}


console.log( zipObject(['a', 'b'], [1, 2]) );
// => { 'a': 1, 'b': 2 }