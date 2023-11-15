const arr1 = [1, 2, 3];
//展开运算符，可以展开数组
console.log(...arr1); // 1 2 3

//使用场景
console.log(Math.max(...arr1));

const arr2 = [4, 5, 6];
//合并arr  arr2
const newArr = [...arr1, ...arr2];
console.log("newArr", newArr);
