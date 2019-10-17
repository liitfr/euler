const { isPrime } = require('./utils');

console.time('7');
let j = 0;
let i = 0;
for (; j < 10001; i += 1) {
  if (isPrime(i)) {
    j += 1;
  }
}
console.log(i - 1);
console.timeEnd('7');
