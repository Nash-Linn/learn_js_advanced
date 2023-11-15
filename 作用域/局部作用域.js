// 函数作用域

function getSum() {
  //函数内部是函数作用域，属于局部变量
  const num = 10;
}

console.log(num); //报错，函数外部不能使用局部作用域变量

// 块作用域
for (let t = 1; t < 9; t++) {
  //t 只能在该代码块中被访问
  console.log(t);
}

//超出t 的作用域
console.log(t); //报错
