import { quadratic } from './utils';

console.time('45');
const found = (arr) => arr.find((item) => item > 0 && Number.isInteger(item));
let keepGoing = true;
for (let n = 286; keepGoing; n += 1) {
  const tn = (n * (n + 1)) / 2;
  const pn = quadratic(1.5, -0.5, -tn);
  const hn = quadratic(2, -1, -tn);
  if (found(pn) && found(hn)) {
    console.log(tn);
    keepGoing = false;
  }
}
console.timeEnd('45');
