console.time('31');
const coins = [200, 100, 50, 20, 10, 5, 2, 1];
const goal = 200;
const combinations = [];
const buildTree = (pile, tot, choices) => {
  choices.forEach((coin, index) => {
    const newPile = [...pile, coin];
    if (tot + coin < goal) {
      buildTree(newPile, tot + coin, choices.slice(index));
    } else if (tot + coin === goal) {
      combinations.push(newPile);
    }
  });
};
buildTree([], 0, coins);
console.log(combinations.length);
console.timeEnd('31');
