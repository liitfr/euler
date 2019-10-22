const writtenNumber = require('written-number');

console.time('17');
let nbChars = 0;
for (let i = 1; i < 1001; i += 1) {
  nbChars += writtenNumber(i)
    .replace(' ', '')
    .replace('-', '')
    .replace(' ', '')
    .replace(' ', '').length;
}
console.log(nbChars);
console.timeEnd('17');
