console.time('38');
const max = 10000;
const results = [];
for (let i = 1; i < max; i += 1) {
  const tot = [];
  let stop = false;
  for (let j = 1; j < 10 && !stop; j += 1) {
    const ij = [...`${i * j}`];
    for (let k = 0; k < ij.length && !stop; k += 1) {
      if (tot.includes(ij[k])) {
        stop = true;
      }
    }
    if (ij.includes('0') || [...new Set(ij)].length !== ij.length) {
      stop = true;
    }
    if (!stop) {
      tot.push(...ij);
      if (tot.length === 9) {
        results.push(tot);
      }
    }
  }
}
console.log(Math.max(...results.map((res) => res.reduce((a, b) => a + b))));
console.timeEnd('38');
