a = 10;
b = 20;
console.log(a);
setTimeout(() => {
  console.log(a * b, "222");
}, 3000);
setTimeout(() => {
  console.log(a * b, "222");
}, 1000);
console.log(b);
