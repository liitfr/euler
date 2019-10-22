const { listDivisors } = require('./utils');

console.time('12');
let found = false;
let triangle = 0;
for (let i = 1; !found; i += 1) {
  triangle += i;
  if (listDivisors(triangle).length > 500) {
    found = true;
    console.log(triangle);
  }
}
console.timeEnd('12');
