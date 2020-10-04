function fromPairs(pairs) {
  const keyValuePair = {};

  for(let i = 0; i < pairs.length; i++) {
    const [key, value] = pairs[i];
    keyValuePair[key] = value;
  }
  return keyValuePair;
}

console.log( fromPairs([['a', 1], ['b', 2]]) );
// => { 'a': 1, 'b': 2 }