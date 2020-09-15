function fromPairs(pairs) {
  const obj = {};

  for(let i = 0 ; i < pairs.length; i++) {
    const [key, value] = pairs[i];
    console.log(key, value);
    obj[key] = value;
  }

  return obj;
}

console.log( fromPairs([['a', 1], ['b', 2]]) );
// => { 'a': 1, 'b': 2 }