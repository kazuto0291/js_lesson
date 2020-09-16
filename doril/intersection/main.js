function intersection(...arrays) {
  const newArray = [];
  console.log(arrays);
  const headArray = arrays.shift();
  
  for(let i = 0; i <headArray.length; i++) {
    const current = headArray[i];
    if( arrays.every( (array)=> array.includes(current) ) ) {
      newArray.push(current);
    }

  }

  console.log('headArray',headArray)
  console.log(arrays);
  return newArray
}


console.log( intersection([2, 1], [2, 3], [2, 4], [2, 5]) );
