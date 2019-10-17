const { findPrimeFactors } = require('./utils');

console.time('3');
console.log(Math.max(...findPrimeFactors(600851475143)));
console.timeEnd('3');
