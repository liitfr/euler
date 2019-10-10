const min = 99;
const max = 999;

const reverseNumber = num => {
  numStr = num + "";
  return parseInt(
    numStr
      .split("")
      .reverse()
      .join(""),
    10
  );
};

const isPalindrome = num => num === reverseNumber(num);

const palindromes = [];

for (i = max; i > min; i--) {
  for (j = max; j > min; j--) {
    const k = i * j;
    if (isPalindrome(k)) {
      palindromes.push(k);
    }
  }
}

console.log(palindromes);
