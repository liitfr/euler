const findPrimeFactors = (pnum) => {
  let num = pnum;
  const primeFactors = [];
  while (num % 2 === 0) {
    primeFactors.push(2);
    num /= 2;
  }
  const sqrtNum = Math.sqrt(num);
  for (let i = 3; i <= sqrtNum; i += 1) {
    while (num % i === 0) {
      primeFactors.push(i);
      num /= i;
    }
  }
  if (num > 2) {
    primeFactors.push(num);
  }
  return primeFactors;
};

const isPrime = (n) => {
  if (n <= 1) {
    return false;
  }
  if (n <= 3) {
    return true;
  }
  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }
  let i = 5;
  while (i * i <= n) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }
  return true;
};

const listDivisors = (n) => {
  const small = [];
  const large = [];
  const end = Math.floor(Math.sqrt(n));
  for (let i = 1; i <= end; i += 1) {
    if (n % i === 0) {
      small.push(i);
      if (i ** 2 !== n) {
        large.push(n / i);
      }
    }
  }
  large.reverse();
  return small.concat(large);
};

const listProperDivisors = (n) => {
  const divisors = listDivisors(n);
  divisors.pop();
  return divisors;
};

const factorialize = (num) => {
  if (num < 0) return -1;
  if (num === 0) return 1;
  return num * factorialize(num - 1);
};

const combinations = (str) => {
  const combin = [];
  const recursive = (done, remaining) => {
    if (remaining.length === 0) {
      combin.push(done);
    } else {
      for (let i = 0; i < remaining.length; i += 1) {
        recursive(
          [...done, remaining[i]],
          [...remaining.slice(0, i), ...remaining.slice(i + 1)],
        );
      }
    }
  };
  recursive([], [...str]);
  return combin;
};

const quadratic = (a, b, c) => {
  const d = b ** 2 - 4 * a * c;
  if (d < 0) {
    return [];
  }
  if (d === 0) {
    return [(-1 * b) / (2 * a)];
  }
  return [(-1 * b - Math.sqrt(d)) / (2 * a), (-1 * b + Math.sqrt(d)) / (2 * a)];
};

const wordToNumber = (word) => [...word].map((letter) => letter.charCodeAt(0) - 64).reduce((a, b) => a + b);

const gcd = (a, b) => (b ? gcd(b, a % b) : a);

const reduceDivision = ({num, denom}) => {
  gcdVal = gcd(num, denom);
  return {num: num / gcdVal, denom: denom / gcdVal};
};

module.exports = {
  findPrimeFactors,
  isPrime,
  listDivisors,
  listProperDivisors,
  factorialize,
  combinations,
  quadratic,
  wordToNumber,
  gcd,
  reduceDivision,
};
