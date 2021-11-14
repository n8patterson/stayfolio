const findAVowels = (str) => {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var vowelCount = 0;
  for (let vowel of vowels) {
    if (vowels.includes(vowel)) {
      vowelCount++;
    }
  }
  return vowelCount;
};

console.log(findAVowels('abracadabra')); //ex) abracadabra ⇒ 5
