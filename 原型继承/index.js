function Person() {
  this.eays = 2;
  this.head = 1;
}

function Women() {
  this.sex = 0;
}

Women.prototype = new Person();
Women.prototype.constructor = Women;

function Man() {
  this.sex = 1;
}

Man.prototype = new Person();
Man.prototype.constructor = Man;

const M = new Man();
console.log("M", M);
console.log("M.eays", M.eays);
