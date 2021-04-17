console.time("36");

const decToBin = (n) => (n >>> 0).toString(2);

const isPal = (n) =>
  `${n}` === [...`${n}`].map((v, i, a) => a[a.length - 1 - i]).join('');

const result = [...Array(1000000).keys()].reduce(
  (acc, curr) => isPal(curr) && isPal(decToBin(curr)) ? acc + curr : acc,
  0
);

console.log(result)

console.timeEnd("36");
