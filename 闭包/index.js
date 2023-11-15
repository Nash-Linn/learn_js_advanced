// function outer() {
//   let a = 10;
//   function fn() {
//     console.log(a);
//   }
//   fn();
// }
// outer();

// 常见的闭包的形式 外部可以访问使用 函数内部的变量
function outer() {
  let a = 10;
  function fn() {
    a++;
    console.log(a);
    return a;
  }
  return fn;
}

let foo = outer();
foo();
foo();
