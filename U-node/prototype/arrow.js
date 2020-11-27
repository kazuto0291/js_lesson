const Fibonacci =function () {
  this.va10 =0;
  this.val1 = 1;
  this.timerId = undefined;
};

Fibonacci.prototype.start = function () {
  if(this.timerId) {
    this.stop();
  }
  let self = this;

  this.timerId = setInterval(function () {
    // F(n) を表示する
    console.log(self.va10);
  
    // F(n+2)=F(n) + F(n+1)
    let val2 = self.va10 + self.val1;
    self.val0 = self.val1;
    self.val1 = val2;
    }, 1000);
};

Fibonacci.prototype.stop = function() {
  if (this.timerId) {
    clearInterval(this.timerId)
  }
};