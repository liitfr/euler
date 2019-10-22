console.time('14');
const max = 999999;
let resultLength = 0;
let result = 0;
const getChain = (n, chain = []) => {
  chain.push(n);
  if (n % 2 === 0) {
    return getChain(n / 2, chain);
  }
  if (n > 1) {
    return getChain(3 * n + 1, chain);
  }
  return chain;
};
let i = max;
for (; i > 0; i -= 2) {
  const chain = getChain(i);
  if (chain.length > resultLength) {
    resultLength = chain.length;
    result = i;
  }
}
console.log(result);
console.timeEnd('14');
