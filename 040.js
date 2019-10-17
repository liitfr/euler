console.time('40');
const max = 1000000;
let str = '0.';
for (let i = 1; i < max; i += 1) {
  str += i;
}
console.log(
  str.charAt(1 + 1)
    * str.charAt(10 + 1)
    * str.charAt(100 + 1)
    * str.charAt(1000 + 1)
    * str.charAt(10000 + 1)
    * str.charAt(100000 + 1)
    * str.charAt(1000000 + 1),
);
console.timeEnd('40');
