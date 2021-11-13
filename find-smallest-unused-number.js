const findSmallestUnusedNumber = (ids) => {
  let min = Number.MAX_VALUE;
  let max = Number.MIN_VALUE;
  const used = new Set();

  for (let id of ids) {
    if (id >= max) {
      max = id;
    }
    if (id < min) {
      min = id;
    }
    used.add(id);
  }
  for (let i = min; i < max; i++) {
    if (!used.has(i)) {
      return i;
    }
  }
  return max + 1;
};

console.log(findSmallestUnusedNumber([0, 1, 2, 4])); // ex) [0,1,2,4] ⇒ 3
console.log(findSmallestUnusedNumber([0, 1, 2, 3, 4, 5, 6])); // ex) [0,1,2,3,4,5,6] ⇒ 7
console.log(findSmallestUnusedNumber([0])); // ex) [0] ⇒ 1
console.log(findSmallestUnusedNumber([2,7,7])); // ex) [2, 7, 7] ⇒ 3