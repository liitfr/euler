console.time("85");

const max = 100;
const target = 2000000;

let bestDist = target;
let bestArea;

for (xGrid = 1; xGrid <= max; xGrid++) {
  for (yGrid = xGrid; yGrid <= max; yGrid++) {
    let combinations = 0;
    for (x = 1; x <= xGrid; x++) {
      for (y = 1; y <= yGrid; y++) {
        combinations += (xGrid - x + 1) * (yGrid - y + 1);
      }
    }
    const dist = Math.abs(target - combinations);
    if (dist < bestDist) {
      bestDist = dist;
      bestArea = xGrid * yGrid;
    }
  }
}

console.log(bestArea);
console.timeEnd("85");
