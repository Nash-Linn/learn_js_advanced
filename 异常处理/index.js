function fn(x, y) {
  if (!x || !y) {
    // throw "没有参数传递进来";
    throw new Error("没有参数传递进来");
  }

  return x + y;
}

function tryFn() {
  try {
    // 可能发生错误的代码 要写到 try中
    fn();
  } catch (error) {
    // 拦截错误，提示浏览器提供的错误信息，但是不中断程序的执行
    console.log("error", error.message);
    // 需要加 return 中断程序
    return;
  } finally {
    // 不管程序对不对， 一定会执行的代码
  }
}

tryFn();
