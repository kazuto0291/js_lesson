let obj = {
  prop1: 'hello',
  prop2: 'value',
  prop3: function() {
    console.log('value3')
  },
  prop4: {
    prop5: 'value5'
  }
}

console.log(obj.prop1);
console.log(obj.prop2);
console.log(obj.prop3);
console.log(obj.prop4);
console.log(obj.prop5);

console.log(obj.prop4.prop5);
obj.prop3();