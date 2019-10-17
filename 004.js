/* eslint-disable indent */
console.time('4');
const min = 99;
const max = 999;
const reverseNumber = (num) => parseInt(
    `${num}`
      .split('')
      .reverse()
      .join(''),
    10,
  );
const isPalindrome = (num) => num === reverseNumber(num);
const palindromes = [];
for (let i = max; i > min; i -= 1) {
  for (let j = max; j > min; j -= 1) {
    const k = i * j;
    if (isPalindrome(k)) {
      palindromes.push(k);
    }
  }
}
console.log(Math.max(...palindromes));
console.timeEnd('4');
