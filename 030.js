console.time("30");

const solutions = [];

// Didn't know how to limit scope. BRUT FORCE it with 10000000
for (let i = 2; i < 10000000; i++) {
  const arr = Array.from(`${i}`);
  if (i === arr.reduce((acc, curr) => acc + curr ** 5, 0)) {
    solutions.push(i);
  }
}

console.log(solutions.reduce((acc, curr) => acc + curr));

console.timeEnd("30");
