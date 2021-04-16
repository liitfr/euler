const { isPrime } = require("./utils");

console.time("27");

let topN = 0;
let soluce = 0;

for (let a = -1000; a <= 1000; a++) {
  for (let b = -1000; b <= 1000; b++) {
    for (let n = 0, keepGoing = true; keepGoing; n++) {
      if (!isPrime(n * n + a * n + b)) {
        keepGoing = false;
        if (n > topN) {
          topN = n;
          soluce = a * b;
        }
      }
    }
  }
}

console.log(soluce);
console.timeEnd("27");
