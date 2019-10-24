const { listProperDivisors } = require('./utils');

console.time('23');
const isAbundant = (n) => listProperDivisors(n).reduce((a, b) => a + b) > n;
const max = 28123;
const abundants = [];
for (let i = 2; i <= max; i += 1) {
  if (isAbundant(i)) {
    abundants.push(i);
  }
}
const abundantsSums = new Set();
for (let j = 0; j < abundants.length; j += 1) {
  for (let k = j; k < abundants.length; k += 1) {
    const sum = abundants[j] + abundants[k];
    if (sum <= max) {
      abundantsSums.add(sum);
    }
  }
}
const notAbundantsSums = [];
for (let l = 2; l <= max; l += 1) {
  if (!abundantsSums.has(l)) {
    notAbundantsSums.push(l);
  }
}
console.log(notAbundantsSums.reduce((a, b) => a + b) + 1);
console.timeEnd('23');
