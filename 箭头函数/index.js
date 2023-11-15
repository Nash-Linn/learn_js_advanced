//1.箭头函数
const fn1 = (x) => {
  console.log(x);
};

//2.只有一个形参的时候，可以省略小括号
const fn2 = (x) => {
  console.log(x);
};

//3.只有一行代码的时候，我们可以省略大括号
const fn3 = (x) => console.log(x);

//4.只有一行代码的时候，可以省略return
const fn4 = (x) => x + x;

//5.箭头函数可以直接返回一个对象
const fn5 = (uname) => ({ uname });
