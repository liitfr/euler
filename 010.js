const { isPrime } = require('./utils');

console.time('10');
const max = 2000000;
let tot = 0;
for (let i = 0; i < max; i += 1) {
  if (isPrime(i)) {
    tot += i;
  }
}
console.log(tot);
console.timeEnd('10');
