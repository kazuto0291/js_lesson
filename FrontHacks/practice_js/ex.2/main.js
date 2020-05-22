function isOddNumber(num) {
  // if (num % 2 !== 0) {
  //   return true;
  // } else
  //   return false;
  return num % 2 != 0;
};

console.log(isOddNumber(9));
console.log(isOddNumber(14));


const factorail = function(num) {
  let result = 1;
  for (let i = num; i > 0 ; i--) {
    result *= i;
  }
  return result

}
console.log(factorail(8))

const factorailChallenge = function(num) {
  if (num <=1) {
    return num;
  }
  return num * factorailChallenge(num -1);
};

console.log(factorailChallenge(8));


const conertFirstCharacterToUpperCase = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

console.log(conertFirstCharacterToUpperCase('hello'));