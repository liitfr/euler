const { isPrime } = require('./utils');

console.time('46');
const max = 350000;
let done = false;
for (let i = 9; i < max && !done; i += 2) {
  if (!isPrime(i)) {
    let found = false;
    for (let j = 1; j < i && !found; j += 2) {
      if (isPrime(j)) {
        let tooBig = false;
        for (let k = 0; k < max && !found && !tooBig; k += 1) {
          const calc = j + 2 * k * k;
          if (calc === i) {
            found = true;
          } else if (calc > i) {
            tooBig = true;
          }
        }
      }
    }
    if (!found) {
      done = true;
      console.log(i);
    }
  }
}
console.timeEnd('46');
