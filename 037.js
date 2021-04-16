const { isPrime } = require("./utils");

console.time("37");

for (i = 10, found = false, answers = []; !found; i++) {
  const arr = Array.from(Number(i).toString());
  let interesting = true;

  for (let j = 0; interesting && j < arr.length; j++) {
    if (
      !isPrime(Number(arr.slice(j).join(""))) ||
      !isPrime(Number(arr.slice(0, arr.length - j).join("")))
    ) {
      interesting = false;
    }
  }

  if (interesting) {
    answers.push(i);
    if (answers.length === 11) {
      found = true;
      console.log(answers.reduce((acc, curr) => acc + curr));
    }
  }
}

console.timeEnd("37");
