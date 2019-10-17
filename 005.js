console.time('5');
const tests = [19, 17, 13, 11, 7, 15, 9, 18, 16, 14, 8, 6];
let found = false;
for (let i = 20; !found; i += 20) {
  let keepTesting = true;
  for (let y = 0; y < tests.length && keepTesting; y += 1) {
    if (i % tests[y] !== 0) {
      keepTesting = false;
    }
  }
  if (keepTesting) {
    found = true;
    console.log(i);
  }
}
console.timeEnd('5');
