let i = 1;
function fn() {
  console.log(`这是第${i}次`);
  if (i >= 6) {
    return;
  }
  i++;
  fn();
}

// fn();

//利用递归函数实现 setTimeout 模拟 setInterval 效果
/*
  需求：
    页面每隔一秒输出当前的时间
    输出当前时间可以使用：new Date().toLocaleString()
*/

function getTime() {
  let date = new Date().toLocaleString();
  console.log("date", date);

  setTimeout(getTime, 1000);
}
// getTime();

const obj = {
  uname: "Nash",
  age: 18,
  hobby: ["乒乓球", "足球"],
  score: {
    math: 80,
    english: 90,
  },
};

const o = {};

//拷贝函数
function deepCopy(newObj, oldObj) {
  for (let k in oldObj) {
    if (oldObj[k] instanceof Array || oldObj[k] instanceof Object) {
      newObj[k] = oldObj[k] instanceof Array ? [] : {};
      deepCopy(newObj[k], oldObj[k]);
    } else {
      newObj[k] = oldObj[k];
    }
  }
}

deepCopy(o, obj);
o.age = 20;
o.hobby[0] = "篮球";
obj.score.math = 60;
console.log("o", o);
console.log("obj", obj);
