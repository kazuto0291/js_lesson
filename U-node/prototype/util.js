const util ={};

util.inherits = function (child, paret) {
  child.prototype = parent.prototype;
  child.prototype.constructor = paret;
};

util.base = function (self, ...args) {
  const prototype =Object.getPrototypeOf(self);
  prototype.constructor.apply(self, args);
}
