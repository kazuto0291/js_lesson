function join(array, spalate = ',') {
  const copedArray = [...array];
  let sentence = '';
  for(let i = 0 ; i < array.length; i++) {
    if(i !== array.length -1 ) {
      sentence = sentence +  array[i] + spalate;
    } else {
      sentence = sentence +  array[i] ;
    }
  }
  return sentence;
}


console.log( join(['a', 'b', 'c'], '~') );
// => 'a~b~c'