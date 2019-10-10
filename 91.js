console.time("91");
const size = 100;

const dist = (x1, y1, x2, y2) =>
  Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

const test = (a, b, c) => {
  const max = Math.max(a, b, c);
  if (max === a) {
    return Math.abs(Math.pow(b, 2) + Math.pow(c, 2) - Math.pow(a, 2)) < 0.05;
  }
  if (max === b) {
    return Math.abs(Math.pow(a, 2) + Math.pow(c, 2) - Math.pow(b, 2)) < 0.05;
  }
  return Math.abs(Math.pow(b, 2) + Math.pow(a, 2) - Math.pow(c, 2)) < 0.05;
};

let count = 0;

const isRight = (x1, y1, x2, y2) => {
  const a = dist(0, 0, x1, y1);
  const b = dist(0, 0, x2, y2);
  const c = dist(x1, y1, x2, y2);
  if (test(a, b, c)) {
    count++;
    return true;
  }
  return false;
};

for (x1 = 0; x1 <= size; x1++) {
  for (y1 = 0; y1 <= size; y1++) {
    for (x2 = 0; x2 <= size; x2++) {
      for (y2 = 0; y2 <= size; y2++) {
        if (
          !(x1 === x2 && y1 === y2) &&
          !(x1 === 0 && y1 === 0) &&
          !(x2 === 0 && y2 === 0)
        ) {
          isRight(x1, y1, x2, y2);
        }
      }
    }
  }
}

console.log(count / 2);
console.timeEnd("91");
