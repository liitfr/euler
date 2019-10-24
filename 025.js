const BigNumber = require('big-number');

// <!> please execute it with `node --stack_size=1200 025.js`
// to avoid Maximum call stack size exceeded error <!>
console.time('25');
const fibo = (previous = [BigNumber(1), BigNumber(2)], iter = 4) => {
  const [a, b] = previous;
  const c = a.plus(b);
  if (c.toString().length < 1000) {
    fibo([b, c], iter + 1);
  } else {
    console.log(iter);
  }
};
fibo();
console.timeEnd('25');
