const obj = {
  uname: "Nash",
  age: "18",
};

const { uname, age } = obj;

console.log("uname", uname);
console.log("age", age);

//修改解构的属性名
const { uname: username, age: userage } = obj;
console.log("username", username);
console.log("userage", userage);

//数组对象解构
const obj1 = [
  {
    uname: "Bob",
    age: "20",
  },
];

const [{ uname: obj1uname, age: obj1age }] = obj1;
console.log("obj1uname", obj1uname);
console.log("obj1age", obj1age);

//多级对象解构

const student = {
  name: "Mike",
  score: {
    math: 80,
    english: 90,
  },
};

const {
  score: { math },
} = student;

console.log("math", math);
