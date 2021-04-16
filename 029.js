console.time("29");

const items = [];

for (let a = 2; a <= 100; a++) {
  for (let b = 2; b <= 100; b++) {
    items.push(a ** b);
  }
}

console.log(new Set(items).size);

console.timeEnd("29");
