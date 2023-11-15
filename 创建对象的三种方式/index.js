// 1.利用对象字面量创建对象
const obj1 = {
  name: "Nash",
};

// 2.利用 new Object 创建对象
const obj2 = new Object({ name: "Nash" });

// 3.利用构造函数创建对象
// 构造函数：是一种特殊的函数，主要用来初始化对象

function Pig(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

const Peppa = new Pig("Peppa", 6, "女");

console.log("Peppa", Peppa);
