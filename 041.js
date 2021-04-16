const { isPrime } = require("./utils");

console.time("41");

const digits = ["9", "8", "7", "6", "5", "4", "3", "2", "1"];

let keepGoing = true;

const recurSort = (done, rest) => {
  for (let i = 0; i < rest.length && keepGoing; i++) {
    recurSort([...done, rest[i]], [...rest.slice(0, i), ...rest.slice(i + 1)]);
  }
  if (rest.length === 0) {
    const n = Number(done.join(""));
    if (isPrime(n)) {
      console.log(n);
      keepGoing = false;
    }
  }
};

for (let i = 0; i < digits.length && keepGoing; i++) {
  recurSort([], digits.slice(i));
}

console.timeEnd("41");
