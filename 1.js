console.time("1");
max = 1000;

let tot = 0;

for (i = 0; i < max; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    tot += i;
  }
}

console.log(tot);
console.timeEnd("1");
