const max = 100;

const a = () => {
  let tot = 0;
  for (i = 0; i <= max; i++) {
    tot += i * i;
  }
  return tot;
};

const b = () => {
  let tot = 0;
  for (i = 0; i <= max; i++) {
    tot += i;
  }
  return tot * tot;
};

console.log(b() - a());
