function incrementFactory() {

  let num = 0;

  function increment() {
    num = num + 1;
    console.log(num);
  }
  d();
  return increment;
}

const increment = incrementFactory();

increment();
increment();
increment();
increment();