function intersection(...arrays) {
  const newArray = [];
  
  const headArray = arrays.shift()
  for(let i = 0; i < headArray.length; i++) {
    const current = headArray[i];
    
    if(arrays.every((array) => array.includes(current))) {
      newArray.push(current);
    }
  }
  return newArray;
}


console.log( intersection([2, 1], [2, 3], [2, 4]) );
// →[2]


