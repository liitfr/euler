import { quadratic } from './utils';

console.time('44');
const found = (arr) => arr.find((item) => item > 0 && Number.isInteger(item));
const P = (n) => (n * (3 * n - 1)) / 2;
const isP = (n) => Boolean(found(quadratic(1.5, -0.5, -n)));
const max = 10000;
let keepGoing = true;
for (let n1 = 1; n1 < max && keepGoing; n1 += 1) {
  for (let n2 = n1 + 1; n2 < max && keepGoing; n2 += 1) {
    const pn2 = P(n2);
    const pn1 = P(n1);
    if (isP(pn2 - pn1) && isP(pn2 + pn1)) {
      keepGoing = false;
      console.log(n1, n2, Math.abs(pn2 - pn1));
    }
  }
}
console.timeEnd('44');
