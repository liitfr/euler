function isprime(n) {
  if (n <= 1) {
    return false;
  } else if (n <= 3) {
    return true;
  } else if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }
  let i = 5;
  while (i * i <= n) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
    i = i + 6;
  }
  return true;
}

const max = 350000;

let horray = false;

for (i = 9; i < max && !horray; i += 2) {
  if (!isprime(i)) {
    let found = false;
    for (j = 1; j < i && !found; j += 2) {
      if (isprime(j)) {
        let tooBig = false;
        for (k = 0; k < max && !found && !tooBig; k++) {
          const calc = j + 2 * k * k;
          if (calc === i) {
            found = true;
          } else if (calc > i) {
            tooBig = true;
          }
        }
      }
    }
    if (!found) {
      horray = true;
      console.log(i);
    }
  }
}
