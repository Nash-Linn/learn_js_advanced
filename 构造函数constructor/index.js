function Star(uname, age) {
  that = this;

  this.uname = uname;
  this.age = age;
}
Star.prototype.sing = function () {
  console.log("唱歌");
};

// 还可以让 prototype 等于一个新对象 来增加方法，但是会导致丢失构造函数，要重新指回
Star.prototype = {
  constructor: Star, //指回
  sing: function () {
    console.log("唱歌");
  },
  dance: function () {
    console.log("跳舞");
  },
};
