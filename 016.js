const BigNumber = require('big-number');

console.time('16');
console.log(
  BigNumber(2)
    .pow(1000)
    .number.reduce((a, b) => a + b),
);
console.timeEnd('16');
