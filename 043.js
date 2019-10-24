const { combinations } = require('./utils');

console.time('43');
const comb = combinations('0123456789');
let result = 0;
for (let i = 0; i < comb.length; i += 1) {
  const s = comb[i].reduce((a, b) => a + b);
  if (
    parseInt(s.substr(1, 3), 10) % 2 === 0
    && parseInt(s.substr(2, 3), 10) % 3 === 0
    && parseInt(s.substr(3, 3), 10) % 5 === 0
    && parseInt(s.substr(4, 3), 10) % 7 === 0
    && parseInt(s.substr(5, 3), 10) % 11 === 0
    && parseInt(s.substr(6, 3), 10) % 13 === 0
    && parseInt(s.substr(7, 3), 10) % 17 === 0
  ) {
    console.log(parseInt(s, 10));
    result += parseInt(s, 10);
  }
}
console.log(result);
console.timeEnd('43');
