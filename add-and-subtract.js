// Fastest way is just to return apple, but...those code shows how to double check.
const addAndSubtract = (n) => {
  while (Number(n) >= 10) {
    let sum = 0;
    let numbers = String(n).split('');
    for (let number of numbers) {
      sum += Number(number);
    }
    n = n - sum;
  }
  switch (n) {
    case 1:
      return 'kiwi';
    case 2:
      return 'pear';
    case 3:
      return 'kiwi';
    case 4:
      return 'banana';
    case 5:
      return 'melon';
    case 6:
      return 'banana';
    case 7:
      return 'melon';
    case 8:
      return 'pineapple';
    case 9:
      return 'apple';
    default:
      return 'Invalid';
  }
};

console.log(addAndSubtract(11));
console.log(addAndSubtract(325));
console.log(addAndSubtract(315));
console.log(addAndSubtract(29));
