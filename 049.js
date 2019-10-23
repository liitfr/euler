const { isPrime, combinations } = require('./utils');

console.time('49');
for (let i = 1000; i < 10000; i += 1) {
  if (isPrime(i)) {
    const combs = combinations(`${i}`).map((cmb) => parseInt(cmb.reduce((a, b) => a + b), 10));
    const primeCombs = [
      ...new Set(combs.filter((comb) => isPrime(comb) && comb > 999)),
    ];
    if (
      primeCombs.length > 2
      && primeCombs.filter((comb) => comb < i).length === 0
    ) {
      const orderedList = primeCombs.sort((a, b) => a - b);
      for (let j = 0; j < orderedList.length; j += 1) {
        for (let k = j + 1; k < orderedList.length; k += 1) {
          const dist = orderedList[k] - orderedList[j];
          if (orderedList.includes(orderedList[k] + dist)) {
            console.log(orderedList[j], orderedList[k], orderedList[k] + dist);
          }
        }
      }
    }
  }
}
console.timeEnd('49');
