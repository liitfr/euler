const BigNumber = require('big-number');

console.time('48');
let bn = BigNumber(1).pow(1);
for (let i = 2; i < 1001; i += 1) {
  bn = bn.add(
    BigNumber(i)
      .pow(i)
      .toString(),
  );
}
console.log(bn.toString().slice(-10));
console.timeEnd('48');
