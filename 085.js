console.time('85');
const max = 100;
const target = 2000000;
let bestDist = target;
let bestArea;
for (let xGrid = 1; xGrid <= max; xGrid += 1) {
  for (let yGrid = xGrid; yGrid <= max; yGrid += 1) {
    let combinations = 0;
    for (let x = 1; x <= xGrid; x += 1) {
      for (let y = 1; y <= yGrid; y += 1) {
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
console.timeEnd('85');
