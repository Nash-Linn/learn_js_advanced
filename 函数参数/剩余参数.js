function sum(...rest) {
  let s = 0;
  for (let i = 0; i < rest.length; i++) {
    s += rest[i];
  }
  console.log(s);
}

sum(1, 2);
sum(1, 2, 3);
