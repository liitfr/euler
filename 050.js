const { isPrime } = require("./utils");

console.time("50");

const max = 1000000;

const primes = [];
for (let i = 1; i < max; i++) {
  if (isPrime(i)) {
    primes.push(i);
  }
}

const solutions = [];

for (let i = 0; i <= primes.length; i++) {
  let solution = { sum: 0, count: 0 };
  let keepGoing = true;
  for (let j = i; j < primes.length && keepGoing; j++) {
    solution = { sum: solution.sum + primes[j], count: solution.count + 1 };
    if (isPrime(solution.sum) && solution.sum <= max) {
      solutions.push(solution);
    } else if (solution.sum > max) {
      keepGoing = false;
    }
  }
}

console.log(
  solutions.reduce(
    (acc, curr) => {
      if (curr.count > acc.count) {
        return curr;
      } else if (curr.count === acc.count) {
        if (curr.sum > acc.sum) {
          return curr;
        } else {
          return acc;
        }
      } else {
        return acc;
      }
    },
    { sum: 0, count: 0 }
  )
);

console.timeEnd("50");
