const max = 1000000;

let str = "0.";

for (i = 1; i < max; i++) {
  str += i;
}

console.log(
  str.charAt(1 + 1) *
    str.charAt(10 + 1) *
    str.charAt(100 + 1) *
    str.charAt(1000 + 1) *
    str.charAt(10000 + 1) *
    str.charAt(100000 + 1) *
    str.charAt(1000000 + 1)
);
