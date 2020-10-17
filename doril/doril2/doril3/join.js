function join(array, separator = '.') {
  const copiedArray = [...array];

  let joinedString = '';
  for(let i = 0; i < array.length; i++) {
    if(i === array.length -1) {
      joinedString += array[i]
    } else {
      joinedString += array[i] + separator
    }
  }
  return joinedString;
}



console.log( join(['a', 'b', 'c'], '---') );
// => 'a~b~c'