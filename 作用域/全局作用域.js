//全局作用域
let a = 1;
let b = 2;

//局部作用域
function f() {
  let a = 1;
  function g() {
    a = 2;
    console.log(a);
  }

  g();
}

f();
