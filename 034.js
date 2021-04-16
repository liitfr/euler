const { factorialize } = require('./utils');

console.time("34");

const soluce = [];

// BRUT ...
for (let i = 10; i < 1000000; i++) {
  if (
    [...`${i}`].reduce((acc, curr) => acc + factorialize(Number(curr)), 0) === i
  ) {
    soluce.push(i);
  }
}

console.log(soluce.reduce((acc, curr) => acc + curr));

console.timeEnd("34");
