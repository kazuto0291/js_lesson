function join(array, separator = ',') {
  const copiedArray = [...array];


  let joinedString = copiedArray.shift();
  for(let i = 0; i < copiedArray.length; i++) {
    joinedString += separator + copiedArray[i];
  }

  // let joinedString = '';
  // for(let i = 0; i < array.length; i++) {
  //   if(i === 0) {
  //     joinedString += copiedArray[i];
  //   } else {
  //     joinedString += separator + copiedArray[i];
  //   }
  // }

  return joinedString
}

console.log( join(['a', 'b', 'c'], '〜') );
// => 'a~b~c'
console.log( join(['a', 'b', 'c'], '---') );
// => 'a~b~c'