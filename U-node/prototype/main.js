const util ={};

util.inherits = function (child, parent) {
  child.prototype = parent.prototype;
  child.prototype.constructor = parent;
};

util.base = function (self, ...args) {
  const prototype =Object.getPrototypeOf(self);
  prototype.constructor.apply(self, args);
}

const Animal = function() {
  this.message = "hoge";
};

Animal.prototype = {
  message: ".....",
  say: function () {
    return this.message;
  }
};


// const Dog = function() {
//   this.message ="わんわん";
// };
// Dog.prototype =Animal.prototype;
const Dog = function() {
  util.base(this);
  this.message ="わんわん";
};
util.inherits(Dog, Animal);
const dog = new Dog();

console.log(dog.say());