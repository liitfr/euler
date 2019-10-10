console.time("2");

const fibo = (previous = [1, 2], tot = 2) => {
  const [a, b] = previous;
  const c = a + b;
  if (c <= 4000000) {
    fibo([b, c], c % 2 === 0 ? tot + c : tot);
  } else {
    console.log(tot);
  }
};

fibo();

console.timeEnd("2");
