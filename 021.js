const { listDivisors } = require('./utils');

console.time('21');
const d = (n) => {
  const div = listDivisors(n);
  div.pop();
  return div.length > 0 ? div.reduce((a, b) => a + b) : null;
};
const nums = new Set();
for (let i = 0; i < 10001; i += 1) {
  const di = d(i);
  if (di !== i && d(di) === i) {
    nums.add(di);
    nums.add(i);
  }
}
console.log([...nums].reduce((a, b) => a + b));
console.timeEnd('21');
