// 1. 把所有var声明的变量提升到 当前作用域的最前面
// 2. 只提升声明，不提升赋值

console.log(num);
var num = 10;

// 相当于
/* 
  var num;
  console.log(num);
  num = 10;
*/
