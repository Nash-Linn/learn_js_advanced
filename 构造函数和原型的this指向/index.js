let that;
function Star(uname, age) {
  that = this;

  this.uname = uname;
  this.age = age;
}
// 原型对象里面的函数this指向的还是 实例对象
Star.prototype.sing = function () {
  console.log("唱歌");
};

const m = new Star("Mike", 55);
console.log(that);
// 构造函数里的 this 就是 实例对象
