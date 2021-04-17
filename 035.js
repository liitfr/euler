const { isPrime } = require('./utils');

console.time("35");

const loop = (length) => [...Array(length).keys()];

const rotate = (n) =>
  loop(`${n}`.length).map((v, i, a) => Number(`${n}${n}`.substr(v, a.length)));

const result = loop(1000000).filter((i) =>
  rotate(i).reduce((acc, curr) => (isPrime(curr) && acc ? true : false), true)
);

console.log(result.length);

console.timeEnd("35");
