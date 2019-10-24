const BigNumber = require('big-number');

for (let i = 2; i < 1000; i += 1) {
  const num = BigNumber(1).divide(i);
  const dec = num.toString().substring(2);
  // const len = dec.length;

  console.log(num);

  // for (let j = Math.floor(len / 2); j > 6; j -= 1) {
  //   if (
  //     dec.substring(0, j * 2) === `${dec.substring(0, j)}${dec.substring(0, j)}`
  //   ) {
  //     console.log(i, num.toString(), j);
  //   }
  // }
}
