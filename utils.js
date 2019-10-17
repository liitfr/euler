module.exports = {
  findPrimeFactors: (pnum) => {
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
  },
  isPrime: (n) => {
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
  },
};
