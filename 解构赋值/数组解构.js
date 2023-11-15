const arr = [100, 60, 80];

const [max, min, avg] = arr;

console.log("max", max);
console.log("min", min);
console.log("avg", avg);

//交换变量
// let a = 1;
// let b = 2;
// [b, a] = [a, b];
// console.log("a", a);
// console.log("b", b);

// 变量多，单元值少 ,undefined
// const [a, b, c, d] = [1, 2, 3];
// console.log("a", a); //1
// console.log("b", b); //2
// console.log("c", c); //3
// console.log("d", d); //undefined

// 变量少，单元值多
// const [a, b, c] = [1, 2, 3, 4];
// console.log("a", a); //1
// console.log("b", b); //2
// console.log("c", c); //3

// 剩余参数 变量少，单元值多
// const [a, b, ...c] = [1, 2, 3, 4];
// console.log("a", a); //1
// console.log("b", b); //2
// console.log("c", c); //[3,4]

// 防止 undefined 传递
// const [a = 0, b = 0, c = 0] = [1, 2];
// console.log("a", a); //1
// console.log("b", b); //2
// console.log("c", c); //0

// 按需导入数值
// const [a, b, , d] = [1, 2, 3, 4];
// console.log("a", a); //1
// console.log("b", b); //2
// console.log("d", d); //4

// 多维数组解构
const [a, b, [c]] = [1, 2, [3, 4]];
console.log("a", a); //1
console.log("b", b); //2
console.log("c", c); //3
