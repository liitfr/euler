/* eslint-disable indent */
console.time('19');
const isCentury = (year) => year % 100 === 0;
const isLeap = (year) => (isCentury(year) ? year % 400 === 0 : year % 4 === 0);
const monthsOfYear = (year) => (isLeap(year)
    ? [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    : [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]);
const min = 1901;
const max = 2001;
let count = 0;
let cumul = 0;
for (let y = 1900; y < max; y += 1) {
  const moy = monthsOfYear(y);
  for (let m = 0; m < 12; m += 1) {
    if ((cumul + 1) % 7 === 0 && y >= min) {
      count += 1;
    }
    cumul += moy[m];
  }
}
console.log(count);
console.timeEnd('19');
