// 计算所有函数的和
function sum() {
  let s = 0;
  for (let i = 0; i < arguments.length; i++) {
    s += arguments[i];
  }
  console.log(s);
}

sum(5, 10);

sum(5, 10, 15);
