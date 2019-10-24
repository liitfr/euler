const { combinations } = require('./utils');

console.time('24');
console.log(combinations('0123456789').sort()[999999]);
console.time('24');
