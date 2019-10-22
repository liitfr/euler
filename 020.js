const BigNumber = require('big-number');

console.time('20');
let fact = BigNumber(100);
for (let i = 99; i > 0; i -= 1) {
  fact = fact.multiply(i);
}
console.log(fact.number.reduce((a, b) => a + b));
console.timeEnd('20');
