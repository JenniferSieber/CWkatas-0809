// 6kyu, 7kyu, 8kyu
// KATA 1 7kyu
// https://www.codewars.com/kata/5a87449ab1710171300000fd
const tidyNumber = n => {
  let nums = [...n.toString()].map(Number);
  return nums.every((v, i, arr) => !i || v >= arr[i - 1]);
}

console.log(tidyNumber(12));
console.log(tidyNumber(9672));
console.log(tidyNumber(102));

// KATA 2 8kyu
// https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript
const fakeBin = x => x.split('').map(Number).map(v => v < 5 ? 0 : 1).join('');

console.log(fakeBin('45385593107843568'));
console.log(fakeBin('366058562030849490134388085'));

// KATA 3 7kyu
// https://www.codewars.com/kata/57a06005cf1fa5fbd5000216
const wordsToSentence = words => words.join(' ');

console.log(wordsToSentence(["hello", "world"]));

// KATA 4 6kyu
// https://www.codewars.com/kata/51689e27fe9a00b126000004/train/javascript
const formatWords = words => {
  if (!words) return '';
  return words.filter(el => el !== '').join(', ').replace(/(, )+(\S+)$/, ' and $2');
}

console.log(formatWords(['one', 'two', 'three', 'four']));
console.log(formatWords(['one', '', 'three']));
console.log(formatWords(['one', 'two', '']));
console.log(formatWords([null]));
console.log(formatWords(['']));
console.log(formatWords([]));

// KATA 5 7kyu
// https://www.codewars.com/kata/57fafb6d2b5314c839000195/train/javascript
const remove = string => string.split(' ').filter(word => word.split('!').length !=2).join(' ');

console.log(remove("Hi!"));
console.log(remove("Hi Hi! Hi!"));
console.log(remove("Hi! !Hi! Hi!"));
console.log(remove("Hi! Hi!! Hi!"));
