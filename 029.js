console.time("29");

const items = new Set([]);

for (let a = 2; a <= 100; a++) {
  for (let b = 2; b <= 100; b++) {
    items.add(a ** b);
  }
}

console.log(items.size);

console.timeEnd("29");
