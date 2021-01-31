function join(array, separator = ',') {
  const copiedArray = [...array];

  let joinedSting = copiedArray.shift();
  for (let i = 0; i < copiedArray.length; i++) {
    joinedSting += separator + copiedArray[i];
  }
  return joinedSting;
}


console.log( join(['a', 'b', 'c'], '〜') );
// => 'a~b~c'
console.log( join(['a', 'b', 'c'], '---') );
// => 'a~b~c'