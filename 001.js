console.time('1');
const max = 1000;
let tot = 0;
for (let i = 0; i < max; i += 1) {
  if (i % 3 === 0 || i % 5 === 0) {
    tot += i;
  }
}
console.log(tot);
console.timeEnd('1');
