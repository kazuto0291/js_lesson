const EventEmitter = require("events").EventEmitter;
const util = require("util");

const Animal = function () {
  EventEmitter.call(this);
};
util.inherits(Animal, EventEmitter);

Animal.prototype.message="qwert";
Animal.prototype.say= function () {
  console.log(this.message);
  this.emit("say", this.message);
};

const Dog = function () {
  Animal.call(this);
  this.message = "わんわん"
};

util.inherits(Dog, Animal);

const dog = new Dog();
dog.on("say", function (message) {
  console.log(`「${message}」と叫んだ`)
});
dog.say();