console.time('9');
let isFound = false;
for (let a = 1; a < 1000 && !isFound; a += 1) {
  for (let b = a; b < 1000 && !isFound; b += 1) {
    for (let c = b; c < 1000 && !isFound; c += 1) {
      if (a + b + c === 1000 && a ** 2 + b ** 2 === c ** 2) {
        console.log(a * b * c);
        isFound = true;
      }
    }
  }
}
console.timeEnd('9');
