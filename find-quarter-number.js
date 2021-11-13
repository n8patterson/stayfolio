const findQuarter = (month) => {
  let quarter;
  if (month < 4) {
    quarter = 1;
  } else if (month < 7) {
    quarter = 2;
  } else if (month < 10) {
    quarter = 3;
  } else {
    quarter = 4;
  }
  return quarter;
}

console.log(findQuarter(3)); //ex) 3 ⇒ 1
console.log(findQuarter(8)); //ex) 8 ⇒ 3
console.log(findQuarter(11)); //ex) 11 ⇒ 4