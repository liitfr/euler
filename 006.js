console.time('6');
const max = 100;
const a = () => {
  let tot = 0;
  for (let i = 0; i <= max; i += 1) {
    tot += i ** 2;
  }
  return tot;
};
const b = () => {
  let tot = 0;
  for (let i = 0; i <= max; i += 1) {
    tot += i;
  }
  return tot ** 2;
};
console.log(b() - a());
console.timeEnd('6');
