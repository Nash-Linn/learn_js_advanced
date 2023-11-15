function Star(uname, age) {
  this.uname = uname;
  this.age = age;
}

Star.prototype.sing = function () {
  console.log("唱歌");
};

const m = new Star("Mike", 55);
const b = new Star("Bob", 58);

m.sing();
