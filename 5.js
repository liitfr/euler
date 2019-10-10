const max = 20;
let notFound = true;
let result = max;

while (notFound) {
  let keepGoing = true;
  for (i = 1; i <= max && keepGoing; i++) {
    if (result % i !== 0) {
      keepGoing = false;
    }
    if (keepGoing && i === max) {
      notFound = false;
    }
  }
  if (notFound) {
    result++;
  } else {
    console.log(result);
  }
}
