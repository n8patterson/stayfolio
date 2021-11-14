const addAndSubtract = (n) => {
  let numbers = String(n).split('');
  let sum = 0;
  let output = Number.MAX_VALUE;
  while (output > 10) {
    for (let number of numbers) {
      sum += Number(number);
    }
    output = n-sum;
  }
  switch (output) {
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

console.log(addAndSubtract('10'));
console.log(addAndSubtract(325));
console.log(addAndSubtract(315));
console.log(addAndSubtract(306));
