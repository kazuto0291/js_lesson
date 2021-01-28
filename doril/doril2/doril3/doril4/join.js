function join(array, separator = ',') {
  const copyiedArray = [...array];

  let joinedString = copyiedArray.shift();
  console.log(joinedString)
  for (let i = 0; i < copyiedArray.length; i++) {
    joinedString += separator + copyiedArray[i];
  }
  return joinedString
}


console.log( join(['a', 'b', 'c'], '〜') );
// => 'a~b~c'
console.log( join(['a', 'b', 'c'], '---') );
// => 'a~b~c'