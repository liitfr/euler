console.time('119');
const max = 1000;
const pws = [];
for (let i = 0; i < max; i += 1) {
  for (let j = 0; j < max; j += 1) {
    const pw = i ** j;
    if (
      [...`${pw}`].reduce((a, b) => parseInt(a, 10) + parseInt(b, 10)) === i
    ) {
      pws.push(pw);
    }
  }
}
console.log(pws.sort((a, b) => a - b)[29]);
console.timeEnd('119');
