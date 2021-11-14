const findTheMedian = (arr) => {
  const sorted = arr.sort((a, b) => a - b);
  const middle = Math.floor(arr.length / 2);
  return arr.length % 2 !== 0
    ? sorted[middle]
    : (sorted[middle - 1] + sorted[middle]) / 2;
};

console.log(findTheMedian([0, 1, 2])); //ex) [0,1,2] ⇒ 1
console.log(findTheMedian([5, 1, 2])); //ex) [5,1,2] ⇒ 2
