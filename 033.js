const { gcd, reduceDivision } = require('./utils');

console.time("33");

const soluce = [];

for (let a = 10; a < 100; a++) {
  for (let b = a + 1; b < 100; b++) {
    const aa = [...`${a}`];
    const ab = [...`${b}`];

    const aawc = aa.filter((d) => d === "0" || !ab.includes(d));
    const abwc = ab.filter((d) => d === "0" || !aa.includes(d));

    const na = aawc.length > 0 ? Number(aawc.join("")) : 0;
    const nb = abwc.length > 0 ? Number(abwc.join("")) : 0;

    if ((a !== na || b !== nb) && a / b === na / nb) {
      soluce.push({ num: na, denom: nb });
    }
  }
}

const div = soluce.reduce(
  (acc, curr) => ({ num: acc.num * curr.num, denom: acc.denom * curr.denom }),
  { num: 1, denom: 1 }
);

console.log(reduceDivision(div).denom);

console.timeEnd("33");
