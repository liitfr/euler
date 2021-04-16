const { findPrimeFactors } = require("./utils");

console.time("47");

for (let i = 1, keepGoing = true, distinct4 = []; keepGoing; i++) {
  const distinctPrimeFactors = new Set(findPrimeFactors(i)).size;
    if (distinctPrimeFactors === 4) {
        distinct4.push(i);
        last = distinct4.length - 1;
        if (distinct4[last] === distinct4[last - 3] + 3) {
            console.log(distinct4[last - 3]);
            keepGoing = false;
        }
    }
}

console.timeEnd("47");
