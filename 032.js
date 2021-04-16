console.time("32");

const solutions = [];

const choices = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const pick = (arr, val = "") => {
  if (arr.length === 1) {
    const comb = [...`${val}${arr[0]}`];
    for (let k = 1; k <= comb.length - 2; k++) {
      for (let l = k + 1; l <= comb.length - 1; l++) {
        const a = Number(comb.slice(0, k).join(''));
        const b = Number(comb.slice(k, l).join(''));
        const c = Number(comb.slice(l, comb.length).join(''));
        if (a * b === c) {
            solutions.push({a,b,c})
        }
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    pick([...arr.slice(0, i), ...arr.slice(i + 1)], `${val}${arr[i]}`);
  }
};

pick(choices);

console.log(Array.from(new Set(solutions.map(soluce => soluce.c))).reduce((acc, curr) => acc + curr))

console.timeEnd("32");
