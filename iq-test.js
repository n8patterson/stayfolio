const iqTest = (array) => {
  let arr = array.split(' ').map(Number);
  let odd = arr.filter((num) => num % 2 !== 0);
  let even = arr.filter((num) => num % 2 === 0);
  return odd.length < even.length
    ? arr.indexOf(odd[0]) + 1
    : arr.indexOf(even[0]) + 1;
};

console.log(iqTest('2 4 7 8 10')); //3 # Only 7 is an odd number
console.log(iqTest('1 2 1 1')); //2 # Only 2 is an even number
