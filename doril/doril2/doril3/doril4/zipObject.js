function zipObject(props = [], values = []) {
  const zipObject = {}

  for (let i= 0; i < props.length; i++) {
    const prop = props[i];
    const value = values[i];
    zipObject[prop] = value;
  }
  return zipObject;
}


console.log( zipObject(['a', 'b', 'g', 'e', 'r', 'l'], [1, 2, 4, 6, 7, 9]) );
// => { 'a': 1, 'b': 2 }